/**
 * Supported languages. French is the default and lives at the root (`/`,
 * `/blog`…) so the URLs indexed before the site went multilingual keep
 * working; the others are prefixed (`/en`, `/es`, `/pt`). The root mapping is
 * done with rewrites in next.config.ts — every page actually lives under
 * app/[lang].
 */
export const LOCALES = ["fr", "en", "es", "pt"] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "fr"

export const LOCALE_META: Record<
  Locale,
  {
    /** Name of the language in that language, for the switcher */
    label: string
    /** BCP 47 tag for Intl formatting and hreflang */
    tag: string
    /** Open Graph locale */
    og: string
  }
> = {
  fr: { label: "Français", tag: "fr-FR", og: "fr_FR" },
  en: { label: "English", tag: "en-GB", og: "en_GB" },
  es: { label: "Español", tag: "es-ES", og: "es_ES" },
  pt: { label: "Português", tag: "pt-BR", og: "pt_BR" },
}

export function hasLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

/** Prefixes a site path with the locale, leaving French unprefixed */
export function localePath(locale: Locale, path = "/"): string {
  if (locale === DEFAULT_LOCALE) return path
  return path === "/" ? `/${locale}` : `/${locale}${path}`
}

/** Same page in every language, used for hreflang and the language switcher */
export type LocalizedPaths = Record<Locale, string>

export function localizedPaths(path = "/"): LocalizedPaths {
  return Object.fromEntries(
    LOCALES.map((locale) => [locale, localePath(locale, path)])
  ) as LocalizedPaths
}

/** Metadata `alternates` for a page available in every language */
export function alternates(locale: Locale, paths: LocalizedPaths) {
  return {
    canonical: paths[locale],
    languages: {
      ...Object.fromEntries(LOCALES.map((l) => [LOCALE_META[l].tag, paths[l]])),
      "x-default": paths[DEFAULT_LOCALE],
    },
  }
}
