import type { MetadataRoute } from "next"

import { getBlogPosts, getPostTranslations } from "@/lib/blog"
import { SITE_URL } from "@/lib/constants"
import {
  LOCALE_META,
  LOCALES,
  localizedPaths,
  type Locale,
  type LocalizedPaths,
} from "@/lib/i18n"

/** hreflang map of absolute URLs, so search engines link the translations */
function languages(paths: LocalizedPaths) {
  return Object.fromEntries(
    LOCALES.map((l) => [LOCALE_META[l].tag, `${SITE_URL}${paths[l]}`])
  )
}

function entry(
  locale: Locale,
  paths: LocalizedPaths,
  extra: Partial<MetadataRoute.Sitemap[number]>
): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${paths[locale]}`,
    alternates: { languages: languages(paths) },
    ...extra,
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const home = localizedPaths("/")
  const blog = localizedPaths("/blog")
  const media = localizedPaths("/media")

  return LOCALES.flatMap((locale) => [
    entry(locale, home, { changeFrequency: "weekly", priority: 1 }),
    entry(locale, blog, { changeFrequency: "weekly", priority: 0.8 }),
    entry(locale, media, { changeFrequency: "monthly", priority: 0.7 }),
    ...getBlogPosts(locale).map((post) =>
      entry(locale, getPostTranslations(post.translationKey), {
        lastModified: post.date,
        changeFrequency: "monthly",
        priority: 0.6,
      })
    ),
  ])
}
