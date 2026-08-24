import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { formatBlogDate, getBlogPosts } from "@/lib/blog"
import { siteContent } from "@/lib/content/site.fr"

export const metadata: Metadata = {
  title: `${siteContent.blog.title} — Pipilintu`,
  description: siteContent.blog.description,
}

export default function BlogPage() {
  const { blog } = siteContent
  const posts = getBlogPosts()

  return (
    <>
      <Header />
      <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
        <header className="max-w-2xl">
          <h1 className="font-section text-3xl tracking-wide text-foreground md:text-4xl">
            {blog.title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            {blog.description}
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="mt-12 rounded-xl bg-card/60 p-8 ring-1 ring-border/60">
            <p className="font-medium text-foreground">{blog.emptyTitle}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {blog.emptyDescription}
            </p>
          </div>
        ) : (
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2" role="list">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl bg-card/60 ring-1 ring-border/60 transition-colors hover:ring-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {post.cover ? (
                    <Image
                      src={post.cover}
                      alt=""
                      width={post.imageSizes[post.cover]?.width ?? 1600}
                      height={post.imageSizes[post.cover]?.height ?? 1200}
                      sizes="(max-width: 640px) 100vw, 480px"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : null}

                  <div className="flex flex-1 flex-col p-5">
                    <p className="flex flex-wrap items-center gap-x-2 text-xs tracking-wide text-muted-foreground uppercase">
                      <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.author}</span>
                    </p>
                    <h2 className="mt-2 font-section text-xl leading-tight font-semibold text-foreground">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  )
}
