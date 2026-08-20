import { Image } from "lucide-react"

import { Section } from "@/components/layout/section"
import { siteContent } from "@/lib/content/site.fr"
import { GALLERY_PLACEHOLDER_COUNT } from "@/lib/constants"

export function GallerySection() {
  const { gallery } = siteContent

  return (
    <Section
      id="gallery"
      title={gallery.title}
      description={gallery.description}
    >
      <ul
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {Array.from({ length: GALLERY_PLACEHOLDER_COUNT }, (_, index) => (
          <li key={index}>
            <div
              role="img"
              aria-label={`${gallery.placeholderLabel} ${index + 1}`}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl bg-card ring-1 ring-border"
            >
              <Image
                className="size-8 text-muted-foreground/50"
                aria-hidden="true"
              />
              <span className="text-xs text-muted-foreground">
                {gallery.placeholderLabel}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
