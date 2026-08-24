import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

import { Markdown } from "@/components/blog/markdown"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { formatBlogDate, getBlogPost, getBlogPosts } from "@/lib/blog"
import { siteContent } from "@/lib/content/site.fr"

type PostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} — Pipilintu`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.cover ? [post.cover] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const { blog } = siteContent

  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
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
      <Footer />
    </>
  )
}
