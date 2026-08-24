import { Film } from "lucide-react"

import { siteContent } from "@/lib/content/site.fr"
import { cn } from "@/lib/utils"

type TrailerProps = {
  /** YouTube or Vimeo URL — when provided, renders the embed instead of placeholder */
  trailerUrl?: string
  className?: string
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

/** Trailer player — embedded in the hero, above the CTA */
export function Trailer({ trailerUrl, className }: TrailerProps) {
  const { trailer } = siteContent
  const embedUrl = trailerUrl ? getEmbedUrl(trailerUrl) : null

  return (
    <div
      className={cn(
        "aspect-video overflow-hidden rounded-xl ring-1 ring-border/60",
        embedUrl ? null : "bg-background/50 backdrop-blur-sm",
        className
      )}
    >
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={trailer.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
          <Film className="size-8 text-muted-foreground" aria-hidden="true" />
          <p className="font-medium text-foreground">{trailer.placeholder}</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            {trailer.placeholderHint}
          </p>
        </div>
      )}
    </div>
  )
}
