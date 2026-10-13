import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import type { Metadata } from "next"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { formatBlogDate } from "@/lib/blog"
import { getSiteContent } from "@/lib/content"
import { MEDIA, type MediaItem } from "@/lib/content/media"
import { OG_IMAGE } from "@/lib/constants"
import {
  alternates,
  hasLocale,
  LOCALE_META,
  localePath,
  localizedPaths,
  type Locale,
} from "@/lib/i18n"

type MediaPageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: MediaPageProps): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { media, meta } = getSiteContent(lang)
  const title = `${media.title} — Pipilintu`

  return {
    title,
    description: media.description,
    alternates: alternates(lang, localizedPaths("/media")),
    openGraph: {
      title,
      description: media.description,
      url: localePath(lang, "/media"),
      locale: LOCALE_META[lang].og,
      type: "website",
      siteName: "Pipilintu",
      images: [{ ...OG_IMAGE, alt: meta.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: media.description,
      images: [OG_IMAGE.url],
    },
  }
}

const newestFirst = (a: MediaItem, b: MediaItem) => b.date.localeCompare(a.date)

export default async function MediaPage({ params }: MediaPageProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const { media } = getSiteContent(lang)

  const articles = MEDIA.filter((item) => item.kind === "article").sort(
    newestFirst
  )
  const videos = MEDIA.filter((item) => item.kind === "video").sort(newestFirst)

  return (
    <>
      <Header locale={lang} paths={localizedPaths("/media")} />
      <main
        id="main-content"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24"
      >
        <header className="max-w-2xl">
          <h1 className="font-section text-3xl tracking-wide text-foreground md:text-4xl">
            {media.title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            {media.description}
          </p>
        </header>

        <section aria-labelledby="articles-heading" className="mt-12">
          <h2
            id="articles-heading"
            className="mb-5 font-heading text-lg text-accent"
          >
            {media.articles}
          </h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
            {articles.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-xl bg-card/60 p-5 ring-1 ring-border/60 transition-colors hover:ring-accent/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <MediaMeta item={item} locale={lang} />
                  <p
                    lang={item.language}
                    className="mt-2 font-section text-lg leading-snug text-foreground"
                  >
                    {item.title}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="ml-1 inline size-4 text-muted-foreground transition-colors group-hover:text-accent"
                    />
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="videos-heading" className="mt-14">
          <h2
            id="videos-heading"
            className="mb-5 font-heading text-lg text-accent"
          >
            {media.videos}
          </h2>
          <ul
            className="divide-y divide-border/60 border-y border-border/60"
            role="list"
          >
            {videos.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 py-4 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <div className="min-w-0">
                    <MediaMeta item={item} locale={lang} />
                    <p
                      lang={item.title ? item.language : undefined}
                      className="mt-1 text-sm text-foreground/90 transition-colors group-hover:text-foreground md:text-base"
                    >
                      {item.title ?? media.untitledVideo}
                    </p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer locale={lang} />
    </>
  )
}

/** "14 octobre 2025 · g1 (Globo) · portugais" */
function MediaMeta({ item, locale }: { item: MediaItem; locale: Locale }) {
  const languageName = new Intl.DisplayNames([LOCALE_META[locale].tag], {
    type: "language",
  }).of(item.language)

  return (
    <p className="flex flex-wrap items-center gap-x-2 text-xs tracking-wide text-muted-foreground uppercase">
      <time dateTime={item.date}>{formatBlogDate(item.date, locale)}</time>
      <span aria-hidden="true">·</span>
      <span className="text-foreground/80">{item.outlet}</span>
      {item.language !== locale ? (
        <>
          <span aria-hidden="true">·</span>
          <span>{languageName}</span>
        </>
      ) : null}
    </p>
  )
}
