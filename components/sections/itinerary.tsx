import Image from "next/image"

import { Section } from "@/components/layout/section"
import { siteContent } from "@/lib/content/site.fr"

export function ItinerarySection() {
  const { itinerary } = siteContent

  return (
    <Section
      id="itinerary"
      title={itinerary.title}
      description={itinerary.description}
      className="bg-card/30"
    >
      <figure className="overflow-hidden rounded-xl ring-1 ring-border">
        <Image
          src="/images/itinerary.png"
          alt={itinerary.imageAlt}
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
          className="h-auto w-full"
          priority={false}
        />
      </figure>
    </Section>
  )
}
