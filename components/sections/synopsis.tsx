import { Section } from "@/components/layout/section"
import { siteContent } from "@/lib/content/site.fr"
import { cn } from "@/lib/utils"

export function SynopsisSection() {
  const { synopsis } = siteContent

  return (
    <Section id="synopsis" title={synopsis.title}>
      <div className="grid gap-10 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:gap-14">
        <dl className="flex gap-10 md:sticky md:top-24 md:h-fit md:flex-col md:gap-8">
          {synopsis.facts.map((fact) => (
            <div key={fact.label} className="border-t border-border pt-3">
              <dt className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 font-section text-xl text-accent md:text-2xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="max-w-2xl space-y-6">
          {synopsis.body.map((paragraph, index) => (
            <p
              key={paragraph}
              className={cn(
                "leading-relaxed",
                index === 0
                  ? "text-lg text-foreground md:text-xl"
                  : "text-muted-foreground"
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  )
}
