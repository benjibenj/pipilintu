import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Trailer } from "@/components/sections/trailer"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/lib/content/site.fr"
import { TALLY_FORM_URL } from "@/lib/constants"

export function HeroSection() {
  const { hero } = siteContent

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[85svh] scroll-mt-20 items-center justify-center px-4 py-24 sm:px-6 bg-[url('/images/pipilintu_titicaca.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Much dimmer overlay (increased opacity from /40 to /70) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Relative wrapper keeps text above the background overlay */}
      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <h1
          id="hero-heading"
          className="font-heading text-5xl tracking-widest text-foreground uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          {hero.tagline}
        </p>

        <Trailer className="mx-auto mt-10 w-full max-w-xl" />

        <p className="mx-auto mt-10 max-w-md text-sm text-muted-foreground">
          {hero.ctaHint}
        </p>
        <div className="mt-5">
          <Button
            size="lg"
            className="h-12 gap-2 px-7 text-base font-semibold tracking-wide bg-accent text-accent-foreground shadow-lg shadow-accent/25 hover:bg-accent/90 focus-visible:ring-accent/50 sm:h-14 sm:px-9 sm:text-lg"
            render={
              <Link
                href={TALLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            {hero.cta}
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
