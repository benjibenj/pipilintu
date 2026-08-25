import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"

/** Locales present in lib/content/blog — only FR is surfaced on the site for now */
export const BLOG_LOCALES = ["fr", "en", "es", "pt"] as const
export type BlogLocale = (typeof BLOG_LOCALES)[number]

/** The single locale currently published */
export const PUBLISHED_LOCALE: BlogLocale = "fr"

export type BlogPost = {
  slug: string
  title: string
  /** ISO date, YYYY-MM-DD */
  date: string
  language: BlogLocale
  /** Shared across all translations of the same article */
  translationKey: string
  author: string
  nickname?: string
  cover?: string
  /** Markdown body, verbatim from the export */
  content: string
  /** First prose paragraph, for listing cards */
  excerpt: string
  /** Intrinsic size of every image referenced by the body, keyed by public path */
  imageSizes: Record<string, ImageSize>
}

export type ImageSize = { width: number; height: number }

const BLOG_DIR = path.join(process.cwd(), "lib/content/blog")

/**
 * Reads intrinsic dimensions straight from the PNG/JPEG header so next/image
 * can reserve the right box and never distort a post image.
 */
function readImageSize(publicPath: string): ImageSize | null {
  const file = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""))
  if (!fs.existsSync(file)) return null
  const buf = fs.readFileSync(file)

  // PNG: IHDR width/height are the two big-endian u32 at offset 16
  if (buf.subarray(0, 8).equals(Buffer.from("89504e470d0a1a0a", "hex"))) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
  }

  // JPEG: walk the marker segments to the first Start-Of-Frame
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2
    while (i < buf.length - 9) {
      if (buf[i] !== 0xff) {
        i++
        continue
      }
      const marker = buf[i + 1]
      // SOF0..SOF3, SOF5..SOF7, SOF9..SOF11, SOF13..SOF15
      if (
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc
      ) {
        return {
          height: buf.readUInt16BE(i + 5),
          width: buf.readUInt16BE(i + 7),
        }
      }
      i += 2 + buf.readUInt16BE(i + 2)
    }
  }

  return null
}

/**
 * First real paragraph, with inline markdown stripped for plain-text display.
 * Also doubles as the og:description/twitter:description for post pages, so
 * the default stays under the ~155-160 char convention those respect before
 * truncating.
 */
function toExcerpt(markdown: string, maxLength = 155): string {
  const paragraph = markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .find(
      (block) =>
        block.length > 0 &&
        !block.startsWith("#") &&
        !block.startsWith("![") &&
        !block.startsWith(">") &&
        !/^\d+\.\s/.test(block) &&
        !/^[-*]\s/.test(block)
    )

  if (!paragraph) return ""

  const text = paragraph
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim()

  if (text.length <= maxLength) return text
  return `${text.slice(0, text.lastIndexOf(" ", maxLength))}…`
}

function readPost(locale: BlogLocale, filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, locale, filename), "utf8")
  const { data, content } = matter(raw)

  const imageSizes: Record<string, ImageSize> = {}
  for (const match of content.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
    const size = readImageSize(match[1])
    if (size) imageSizes[match[1]] = size
  }

  return {
    slug: filename.replace(/\.md$/, ""),
    title: String(data.title),
    // gray-matter parses bare YAML dates into Date objects
    date:
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date),
    language: locale,
    translationKey: String(data.translationKey),
    author: String(data.author),
    nickname: data.nickname ? String(data.nickname) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
    content,
    excerpt: toExcerpt(content),
    imageSizes,
  }
}

/** All posts for a locale, newest first */
export function getBlogPosts(
  locale: BlogLocale = PUBLISHED_LOCALE
): BlogPost[] {
  const dir = path.join(BLOG_DIR, locale)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => readPost(locale, name))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getBlogPost(
  slug: string,
  locale: BlogLocale = PUBLISHED_LOCALE
): BlogPost | null {
  const file = path.join(BLOG_DIR, locale, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  return readPost(locale, `${slug}.md`)
}

/** Long-form French date, e.g. "28 juillet 2025" */
export function formatBlogDate(isoDate: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`))
}
