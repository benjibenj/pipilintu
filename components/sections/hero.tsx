import Link from "next/link"

import { Button } from "@/components/ui/button"
import { siteContent } from "@/lib/content/site.fr"

export function HeroSection() {
  const { hero } = siteContent

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[85svh] scroll-mt-20 items-center justify-center px-4 py-24 sm:px-6"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="mb-4 text-sm tracking-widest text-accent uppercase">
          {hero.subtitle}
        </p>
        <h1
          id="hero-heading"
          className="font-heading text-5xl tracking-widest text-foreground uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          {hero.tagline}
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
          {hero.ctaHint}
        </p>
        <div className="mt-10">
          <Button render={<Link href="#newsletter" />} size="lg">
            {hero.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
