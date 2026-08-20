import { CalendarDays, Film } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Card, CardContent } from "@/components/ui/card"
import { siteContent } from "@/lib/content/site.fr"

type TrailerSectionProps = {
  /** YouTube or Vimeo URL — when provided, renders the embed instead of placeholder */
  trailerUrl?: string
}

function getEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url)

    // YouTube
    if (
      parsed.hostname.includes("youtube.com") ||
      parsed.hostname.includes("youtu.be")
    ) {
      const videoId = parsed.hostname.includes("youtu.be")
        ? parsed.pathname.slice(1)
        : parsed.searchParams.get("v")
      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}`
      }
    }

    // Vimeo
    if (parsed.hostname.includes("vimeo.com")) {
      const videoId = parsed.pathname.split("/").filter(Boolean).pop()
      if (videoId) {
        return `https://player.vimeo.com/video/${videoId}`
      }
    }
  } catch {
    return null
  }

  return null
}

export function TrailerSection({ trailerUrl }: TrailerSectionProps) {
  const { trailer } = siteContent
  const embedUrl = trailerUrl ? getEmbedUrl(trailerUrl) : null

  return (
    <Section id="trailer" title={trailer.title}>
      {embedUrl ? (
        <div className="aspect-video overflow-hidden rounded-xl ring-1 ring-border">
          <iframe
            src={embedUrl}
            title={trailer.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      ) : (
        <Card className="border-dashed">
          <CardContent className="flex aspect-video flex-col items-center justify-center gap-4 text-center">
            <Film
              className="size-12 text-muted-foreground"
              aria-hidden="true"
            />
            <div>
              <p className="font-medium text-foreground">{trailer.placeholder}</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                {trailer.placeholderHint}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </Section>
  )
}
