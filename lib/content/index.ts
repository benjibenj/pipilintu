import { siteContent as en } from "@/lib/content/site.en"
import { siteContent as es } from "@/lib/content/site.es"
import { siteContent as fr, type SiteContent } from "@/lib/content/site.fr"
import { siteContent as pt } from "@/lib/content/site.pt"
import type { Locale } from "@/lib/i18n"

const CONTENT: Record<Locale, SiteContent> = { fr, en, es, pt }

/** All the site's text in one language */
export function getSiteContent(locale: Locale): SiteContent {
  return CONTENT[locale]
}

/** Fills "{n} of {total}"-style placeholders */
export function fill(
  template: string,
  values: Record<string, string | number>
) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""))
}
