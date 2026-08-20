import { Section } from "@/components/layout/section"
import { siteContent } from "@/lib/content/site.fr"

export function SynopsisSection() {
  const { synopsis } = siteContent

  return (
    <Section id="synopsis" title={synopsis.title}>
      <div className="max-w-3xl space-y-6">
        <p className="text-lg leading-relaxed text-foreground md:text-xl">
          {synopsis.intro}
        </p>
        {synopsis.body.map((paragraph) => (
          <p
            key={paragraph}
            className="leading-relaxed text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}

        <div className="rounded-xl bg-card p-6 ring-1 ring-border md:p-8">
          <h3 className="font-heading text-lg text-accent md:text-xl">
            {synopsis.objectivesTitle}
          </h3>
          <ul className="mt-4 space-y-3" role="list">
            {synopsis.objectives.map((objective) => (
              <li
                key={objective}
                className="flex gap-3 text-muted-foreground before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-primary before:content-['']"
              >
                {objective}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-muted-foreground italic">{synopsis.support}</p>
      </div>
    </Section>
  )
}
