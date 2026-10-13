import fs from "node:fs"
import path from "node:path"

import { parse } from "yaml"

export type Projection = {
  /** ISO date, YYYY-MM-DD */
  date: string
  /** 24h "HH:MM", when known */
  time?: string
  event: string
  venue: string
  city: string
  link?: string
  note?: string
}

/** Screenings are all in France for now, so "today" is judged in Paris time */
const TIME_ZONE = "Europe/Paris"

const PROJECTIONS_FILE = path.join(process.cwd(), "lib/content/projections.yml")

/**
 * The YAML file is hand-edited on GitHub by non-developers, so every check
 * fails the build with a plain message pointing at the faulty entry rather
 * than letting a malformed item reach the live site.
 */
function invalid(index: number, message: string): never {
  throw new Error(
    `lib/content/projections.yml — screening #${index + 1}: ${message}`
  )
}

function optionalString(value: unknown): string | undefined {
  if (value === undefined || value === null || value === "") return undefined
  return String(value).trim()
}

function requiredString(value: unknown, field: string, index: number): string {
  const str = optionalString(value)
  if (!str) invalid(index, `the "${field}" field is required.`)
  return str
}

/** Accepts "14h30", "14h", "14:30" and normalises to "14:30" */
function parseTime(value: unknown, index: number): string | undefined {
  const raw = optionalString(value)
  if (!raw) return undefined
  const match = raw.match(/^(\d{1,2})\s*[h:]\s*(\d{2})?$/i)
  const hours = Number(match?.[1])
  const minutes = Number(match?.[2] ?? 0)
  if (!match || hours > 23 || minutes > 59) {
    invalid(index, `time "${raw}" is not valid, use e.g. 14:30.`)
  }
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`
}

function parseDate(value: unknown, index: number): string {
  const raw = requiredString(value, "date", index)
  const valid =
    /^\d{4}-\d{2}-\d{2}$/.test(raw) &&
    new Date(`${raw}T00:00:00Z`).toISOString().startsWith(raw)
  if (!valid) {
    invalid(index, `date "${raw}" is not valid, use YYYY-MM-DD.`)
  }
  return raw
}

function parseLink(value: unknown, index: number): string | undefined {
  const raw = optionalString(value)
  if (raw && !/^https?:\/\//.test(raw)) {
    invalid(index, `the link must start with https://`)
  }
  return raw
}

export function getProjections(): Projection[] {
  let data: unknown
  try {
    data = parse(fs.readFileSync(PROJECTIONS_FILE, "utf8"))
  } catch (error) {
    throw new Error(
      `lib/content/projections.yml — the file is malformed (check the two spaces before each field).\n${(error as Error).message}`
    )
  }
  if (data === null) return []
  if (!Array.isArray(data)) {
    throw new Error(
      'lib/content/projections.yml — each screening must start with "- date:".'
    )
  }

  return data.map((entry: Record<string, unknown> | null, index) => {
    if (typeof entry !== "object" || entry === null) {
      invalid(
        index,
        "malformed block, compare it with the example at the top of the file."
      )
    }
    return parseEntry(entry, index)
  })
}

const FIELDS = ["date", "time", "event", "venue", "city", "link", "info"]

function parseEntry(entry: Record<string, unknown>, index: number): Projection {
  // Catches typos in optional fields, which would otherwise be silently dropped
  const unknown = Object.keys(entry).find((key) => !FIELDS.includes(key))
  if (unknown) {
    invalid(index, `unknown field "${unknown}", use: ${FIELDS.join(", ")}.`)
  }

  return {
    date: parseDate(entry.date, index),
    time: parseTime(entry.time, index),
    event: requiredString(entry.event, "event", index),
    venue: requiredString(entry.venue, "venue", index),
    city: requiredString(entry.city, "city", index),
    link: parseLink(entry.link, index),
    note: optionalString(entry.info),
  }
}

/** Today in Paris as YYYY-MM-DD (en-CA formats dates in ISO order) */
function todayInParis(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE }).format(
    new Date()
  )
}

/**
 * A screening stays "upcoming" for its whole day. Upcoming are soonest first,
 * past are most recent first.
 */
export function splitProjections(projections: Projection[]) {
  const today = todayInParis()
  const byDate = (a: Projection, b: Projection) =>
    `${a.date}${a.time ?? ""}`.localeCompare(`${b.date}${b.time ?? ""}`)

  return {
    upcoming: projections.filter((p) => p.date >= today).sort(byDate),
    past: projections
      .filter((p) => p.date < today)
      .sort((a, b) => byDate(b, a)),
  }
}

/** "2026-11-08" + "14:30" → "2026-11-08T14:30:00+01:00", DST-aware */
export function toParisDateTime(date: string, time?: string): string {
  if (!time) return date
  const probe = new Date(`${date}T${time}:00Z`)
  const offset =
    new Intl.DateTimeFormat("en-US", {
      timeZone: TIME_ZONE,
      timeZoneName: "longOffset",
    })
      .formatToParts(probe)
      .find((part) => part.type === "timeZoneName")
      ?.value.replace("GMT", "") || "+00:00"
  return `${date}T${time}:00${offset}`
}

/** "14:30" → "14h30", the French way */
export function formatTime(time: string): string {
  return time.replace(":", "h")
}

function formatDate(date: string, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: "UTC",
    ...options,
  }).format(new Date(`${date}T12:00:00Z`))
}

/** Parts for the calendar-style date block: "dim.", "8", "nov.", "2026" */
export function dateParts(date: string) {
  return {
    weekday: formatDate(date, { weekday: "short" }),
    day: formatDate(date, { day: "numeric" }),
    month: formatDate(date, { month: "short" }),
    year: formatDate(date, { year: "numeric" }),
  }
}

/** "dimanche 8 novembre 2026" */
export function formatLongDate(date: string): string {
  return formatDate(date, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

/** "8 nov. 2026" */
export function formatShortDate(date: string): string {
  return formatDate(date, { day: "numeric", month: "short", year: "numeric" })
}
