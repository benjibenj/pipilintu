import Link from "next/link"
import { CalendarDays } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { siteContent } from "@/lib/content/site.fr"
import { CONTACT, PROJECTIONS } from "@/lib/constants"

export function OrganizeProjectionSection() {
  const { organizeProjection } = siteContent
  const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(organizeProjection.emailSubject)}`

  return (
    <Section
      id="organize"
      title={organizeProjection.title}
      description={organizeProjection.description}
    >
      <Button render={<Link href={mailtoHref} />} size="lg">
        {organizeProjection.cta}
      </Button>
    </Section>
  )
}

export function ProjectionDatesSection() {
  const { projections } = siteContent
  const upcoming = PROJECTIONS.filter((p) => p.status === "upcoming")
  const past = PROJECTIONS.filter((p) => p.status === "past")

  return (
    <Section
      id="projections"
      title={projections.title}
      description={projections.description}
      className="bg-card/30"
    >
      {PROJECTIONS.length === 0 ? (
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
            <ProjectionList
              label={projections.upcomingLabel}
              items={upcoming}
              variant="upcoming"
            />
          ) : null}
          {past.length > 0 ? (
            <ProjectionList
              label={projections.pastLabel}
              items={past}
              variant="past"
            />
          ) : null}
        </div>
      )}
    </Section>
  )
}

type ProjectionListProps = {
  label: string
  items: typeof PROJECTIONS
  variant: "upcoming" | "past"
}

function ProjectionList({ label, items, variant }: ProjectionListProps) {
  return (
    <div>
      <h3 className="mb-4 font-heading text-lg text-accent">{label}</h3>
      <ul className="space-y-3" role="list">
        {items.map((projection) => (
          <li key={`${projection.date}-${projection.venue}`}>
            <Card size="sm">
              <CardContent className="flex flex-wrap items-center gap-3 py-0">
                <time
                  dateTime={projection.date}
                  className="text-sm font-medium text-foreground"
                >
                  {projection.date}
                </time>
                <span className="text-muted-foreground">
                  {projection.venue}, {projection.city}
                </span>
                <Badge variant={variant === "upcoming" ? "default" : "secondary"}>
                  {variant === "upcoming" ? "À venir" : "Passée"}
                </Badge>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
