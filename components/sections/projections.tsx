import Link from "next/link"
import {
  CalendarDays,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react"

import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getSiteContent } from "@/lib/content"
import { mailtoHref, SITE_URL, whatsappHref } from "@/lib/constants"
import type { Locale } from "@/lib/i18n"
import {
  dateParts,
  formatLongDate,
  formatShortDate,
  formatTime,
  getProjections,
  splitProjections,
  toParisDateTime,
  type Projection,
} from "@/lib/projections"

export function ProjectionDatesSection({ locale }: { locale: Locale }) {
  const { projections } = getSiteContent(locale)
  const all = getProjections()
  const { upcoming, past } = splitProjections(all)

  return (
    <Section
      id="projections"
      title={projections.title}
      description={projections.description}
      className="bg-card/30"
    >
      <ProjectionsJsonLd projections={upcoming} />

      {all.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
            <CalendarDays
              className="size-10 text-muted-foreground"
              aria-hidden="true"
            />
            <div>
              <p className="font-medium text-foreground">
                {projections.emptyTitle}
              </p>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                {projections.emptyDescription}
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-10">
          {upcoming.length > 0 ? (
            <div>
              <h3 className="mb-4 font-heading text-lg text-accent">
                {projections.upcomingLabel}
              </h3>
              <ul className="space-y-4" role="list">
                {upcoming.map((projection) => (
                  <li key={`${projection.date}-${projection.event}`}>
                    <UpcomingProjection
                      projection={projection}
                      locale={locale}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {past.length > 0 ? (
            <div>
              <h3 className="mb-4 font-heading text-lg text-muted-foreground">
                {projections.pastLabel}
              </h3>
              <ul
                className="divide-y divide-border/60 border-y border-border/60"
                role="list"
              >
                {past.map((projection) => (
                  <li
                    key={`${projection.date}-${projection.event}`}
                    className="flex flex-col gap-x-4 py-3 text-sm sm:flex-row"
                  >
                    <time
                      dateTime={projection.date}
                      className="shrink-0 text-muted-foreground tabular-nums sm:w-28"
                    >
                      {formatShortDate(projection.date, locale)}
                    </time>
                    <span className="text-foreground/80">
                      {projection.event}
                      <span className="text-muted-foreground">
                        {" "}
                        — {projection.city}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )}

      <OrganizeProjection locale={locale} />
    </Section>
  )
}

/**
 * Booking call-to-action, kept inside the Projections section so the dates and
 * the way to request one read as a single block.
 */
function OrganizeProjection({ locale }: { locale: Locale }) {
  const { organizeProjection } = getSiteContent(locale)

  return (
    <Card id="organize" className="mt-10 scroll-mt-20 ring-accent/25 md:mt-12">
      <CardContent className="gap-5">
        <div>
          <h3 className="font-section text-xl text-accent md:text-2xl">
            {organizeProjection.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {organizeProjection.description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            render={
              <Link
                href={mailtoHref(
                  organizeProjection.emailSubject,
                  organizeProjection.emailBody
                )}
              />
            }
            size="lg"
          >
            <Mail aria-hidden="true" />
            {organizeProjection.emailCta}
          </Button>
          <Button
            render={
              <Link
                href={whatsappHref(organizeProjection.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            variant="outline"
            size="lg"
          >
            <MessageCircle aria-hidden="true" />
            {organizeProjection.whatsappCta}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function mapsHref({ venue, city }: Projection) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${venue}, ${city}`)}`
}

/**
 * Calendar-style date block on the left so the day reads at a glance, details
 * on the right. Past screenings use the compact list instead.
 */
function UpcomingProjection({
  projection,
  locale,
}: {
  projection: Projection
  locale: Locale
}) {
  const { projections } = getSiteContent(locale)
  const parts = dateParts(projection.date, locale)

  return (
    <Card>
      <CardContent className="flex-row gap-4 sm:gap-6">
        <time
          dateTime={toParisDateTime(projection.date, projection.time)}
          className="flex w-18 shrink-0 flex-col items-center self-start rounded-lg bg-accent py-2 text-accent-foreground sm:w-20"
        >
          <span className="text-xs font-medium uppercase">{parts.weekday}</span>
          <span className="font-section text-3xl leading-none font-semibold sm:text-4xl">
            {parts.day}
          </span>
          <span className="text-xs font-medium uppercase">{parts.month}</span>
          <span className="sr-only">{parts.year}</span>
        </time>

        <div className="min-w-0 flex-1">
          <h4 className="font-section text-xl leading-tight text-foreground md:text-2xl">
            {projection.event}
          </h4>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground md:text-base">
            <li className="flex items-start gap-2">
              <Clock
                className="mt-0.5 size-4 shrink-0 md:mt-1"
                aria-hidden="true"
              />
              <span className="first-letter:uppercase">
                {formatLongDate(projection.date, locale)}
                {projection.time
                  ? ` · ${formatTime(projection.time, locale)}`
                  : null}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin
                className="mt-0.5 size-4 shrink-0 md:mt-1"
                aria-hidden="true"
              />
              <a
                href={mapsHref(projection)}
                target="_blank"
                rel="noopener noreferrer"
                title={projections.mapLabel}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {projection.venue}, {projection.city}
              </a>
            </li>
          </ul>
          {projection.note ? (
            <p className="mt-3 text-sm text-foreground/80">{projection.note}</p>
          ) : null}
          {projection.link ? (
            <Button
              render={
                <Link
                  href={projection.link}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="sm"
              className="mt-4"
            >
              {projections.moreInfo}
              <ExternalLink aria-hidden="true" />
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}

/** schema.org ScreeningEvent so upcoming dates can surface in search results */
function ProjectionsJsonLd({ projections }: { projections: Projection[] }) {
  if (projections.length === 0) return null

  const jsonLd = projections.map((projection) => ({
    "@context": "https://schema.org",
    "@type": "ScreeningEvent",
    name: `Pipilintu — ${projection.event}`,
    startDate: toParisDateTime(projection.date, projection.time),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: projection.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: projection.city,
      },
    },
    workPresented: {
      "@type": "Movie",
      name: "Pipilintu",
      url: SITE_URL,
    },
    ...(projection.link ? { url: projection.link } : {}),
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  )
}
