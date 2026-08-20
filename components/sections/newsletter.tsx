import Link from "next/link"

import { Section } from "@/components/layout/section"
import { siteContent } from "@/lib/content/site.fr"
import { TALLY_EMBED_URL, TALLY_FORM_URL } from "@/lib/constants"

export function NewsletterSection() {
  const { newsletter } = siteContent

  return (
    <Section
      id="newsletter"
      title={newsletter.title}
      description={newsletter.description}
      className="bg-card/30"
    >
      <div className="mx-auto max-w-lg">
        {/* Tally embed — lazy-loaded iframe */}
        <iframe
          data-tally-embed
          src={TALLY_EMBED_URL}
          loading="lazy"
          width="100%"
          height="120"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Inscription à la newsletter Pipilintu"
          className="min-h-[120px] w-full rounded-lg"
        />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          <Link
            href={TALLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {newsletter.fallbackLabel}
          </Link>
        </p>
      </div>
    </Section>
  )
}
