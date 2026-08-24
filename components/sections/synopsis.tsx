import Image from "next/image"

import { Section } from "@/components/layout/section"
import { GalleryCarousel } from "@/components/sections/gallery-carousel"
import { siteContent } from "@/lib/content/site.fr"
import { cn } from "@/lib/utils"

export function SynopsisSection() {
  const { synopsis, itinerary } = siteContent

  return (
    <Section id="synopsis" title={synopsis.title}>
      <div className="grid gap-10 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-14">
        <div className="md:sticky md:top-24 md:h-fit">
          <dl className="flex flex-wrap gap-x-10 gap-y-6 md:flex-col md:gap-8">
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

          <figure className="mt-8">
            <Image
              src="/images/itinerary.png"
              alt={itinerary.imageAlt}
              width={1024}
              height={723}
              sizes="(max-width: 768px) 100vw, 288px"
              className="h-auto w-full rounded-lg ring-1 ring-border/60"
            />
            <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {itinerary.caption}
            </figcaption>
          </figure>
        </div>

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

      <GalleryCarousel className="mt-16 md:mt-20" />
    </Section>
  )
}
