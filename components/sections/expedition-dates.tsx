import { Section } from "@/components/layout/section"
import { siteContent } from "@/lib/content/site.fr"

export function ExpeditionDatesSection() {
  const { expeditionDates } = siteContent

  return (
    <Section
      id="dates"
      title={expeditionDates.title}
      description={expeditionDates.description}
      className="bg-card/30"
    >
      <ol className="relative space-y-0" role="list">
        {expeditionDates.dates.map((item, index) => (
          <li
            key={item.date}
            className="relative flex gap-6 pb-10 last:pb-0 md:gap-8"
          >
            {/* Timeline connector */}
            {index < expeditionDates.dates.length - 1 ? (
              <span
                className="absolute top-3 left-[11px] h-full w-px bg-border md:left-[13px]"
                aria-hidden="true"
              />
            ) : null}

            <span
              className="relative z-10 mt-1 size-[22px] shrink-0 rounded-full border-2 border-accent bg-background md:size-[26px]"
              aria-hidden="true"
            />

            <div className="min-w-0 flex-1 pt-0.5">
              <time
                dateTime={item.isoDate}
                className="text-sm font-medium text-accent"
              >
                {item.date}
              </time>
              <p className="mt-1 text-base text-foreground md:text-lg">
                {item.label}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
