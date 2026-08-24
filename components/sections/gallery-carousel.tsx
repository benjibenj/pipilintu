"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

import { GALLERY_IMAGES } from "@/lib/constants"
import { cn } from "@/lib/utils"

const AUTOPLAY_MS = 4500

type GalleryCarouselProps = {
  className?: string
}

/**
 * Auto-advancing photo carousel. Scroll-snap does the paging so it stays
 * swipeable and keyboard-scrollable; the timer only nudges scrollLeft.
 * Autoplay pauses on hover, on focus, when off-screen, and for users who
 * asked for reduced motion.
 */
export function GalleryCarousel({ className }: GalleryCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [interacting, setInteracting] = useState(false)
  const [visible, setVisible] = useState(true)

  const count = GALLERY_IMAGES.length

  const scrollToIndex = useCallback((next: number) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.children[next] as HTMLElement | undefined
    if (!slide) return
    // offsetLeft is measured against the positioned wrapper, so subtract the
    // track's own offset to get a value in the track's scroll coordinates.
    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    })
  }, [])

  // Respect prefers-reduced-motion — no autoplay for those users
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const apply = () => setPlaying(!query.matches)
    apply()
    query.addEventListener("change", apply)
    return () => query.removeEventListener("change", apply)
  }, [])

  // Only run the timer while the carousel is actually on screen
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    )
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!playing || interacting || !visible) return
    const timer = window.setInterval(() => {
      setIndex((current) => {
        const next = (current + 1) % count
        scrollToIndex(next)
        return next
      })
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [playing, interacting, visible, count, scrollToIndex])

  // Keep the active dot in sync with manual scrolling and swipes
  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const slides = Array.from(track.children) as HTMLElement[]
    const closest = slides.reduce(
      (best, slide, i) => {
        const distance = Math.abs(
          slide.offsetLeft - track.offsetLeft - track.scrollLeft
        )
        return distance < best.distance ? { i, distance } : best
      },
      { i: 0, distance: Number.POSITIVE_INFINITY }
    )
    setIndex(closest.i)
  }

  const step = (delta: number) => {
    const next = (index + delta + count) % count
    setIndex(next)
    scrollToIndex(next)
  }

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={() => setInteracting(false)}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Images de l'expédition"
    >
      <ul
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list"
      >
        {GALLERY_IMAGES.map((image, i) => (
          <li
            key={image.src}
            aria-roledescription="diapositive"
            aria-label={`${i + 1} sur ${count}`}
            className="w-full shrink-0 snap-start"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="aspect-[16/10] w-full rounded-xl object-cover ring-1 ring-border/60"
              priority={i === 0}
            />
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Image précédente"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Image suivante"
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={
              playing ? "Mettre le diaporama en pause" : "Lancer le diaporama"
            }
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {playing ? (
              <Pause className="size-4" aria-hidden="true" />
            ) : (
              <Play className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>

        <ul className="flex flex-wrap justify-end gap-1.5" role="list">
          {GALLERY_IMAGES.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => {
                  setIndex(i)
                  scrollToIndex(i)
                }}
                aria-label={`Aller à l'image ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  i === index
                    ? "w-5 bg-accent"
                    : "w-1.5 bg-border hover:bg-muted-foreground"
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
