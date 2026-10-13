import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Markdown } from "@/components/blog/markdown"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import {
  formatBlogDate,
  getBlogPost,
  getBlogPosts,
  getPostTranslations,
} from "@/lib/blog"
import { getSiteContent } from "@/lib/content"
import { OG_IMAGE } from "@/lib/constants"
import {
  alternates,
  hasLocale,
  LOCALE_META,
  LOCALES,
  localePath,
} from "@/lib/i18n"

type PostPageProps = {
  params: Promise<{ lang: string; slug: string }>
}

export function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    getBlogPosts(lang).map((post) => ({ lang, slug: post.slug }))
  )
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { lang, slug } = await params
  if (!hasLocale(lang)) return {}
  const post = getBlogPost(slug, lang)
  if (!post) return {}

  const images = post.cover ? [post.cover] : [OG_IMAGE]

  return {
    title: `${post.title} — Pipilintu`,
    description: post.excerpt,
    alternates: alternates(lang, getPostTranslations(post.translationKey)),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: localePath(lang, `/blog/${post.slug}`),
      locale: LOCALE_META[lang].og,
      type: "article",
      siteName: "Pipilintu",
      publishedTime: post.date,
      authors: [post.author],
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover ?? OG_IMAGE.url],
    },
  }
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { lang, slug } = await params
  if (!hasLocale(lang)) notFound()
  const post = getBlogPost(slug, lang)
  if (!post) notFound()

  const { blog } = getSiteContent(lang)

  return (
    <>
      <Header locale={lang} paths={getPostTranslations(post.translationKey)} />
      <main
        id="main-content"
        className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16"
      >
        <Link
          href={localePath(lang, "/blog")}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {blog.backToBlog}
        </Link>

        <article className="mt-8">
          <header>
            <h1 className="font-section text-3xl leading-tight font-semibold text-foreground md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {formatBlogDate(post.date, lang)}
              </time>
              <span aria-hidden="true">·</span>
              <span>
                {blog.byline} {post.author}
                {post.nickname ? ` (${post.nickname})` : ""}
              </span>
            </p>
          </header>

          <div className="mt-4">
            <Markdown imageSizes={post.imageSizes}>{post.content}</Markdown>
          </div>
        </article>
      </main>
      <Footer locale={lang} />
    </>
  )
}
