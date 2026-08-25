import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { formatBlogDate, getBlogPosts } from "@/lib/blog"
import { siteContent } from "@/lib/content/site.fr"

const PREVIEW_COUNT = 3

type BlogPreviewSectionProps = {
  className?: string
}

export function BlogPreviewSection({ className }: BlogPreviewSectionProps) {
  const { blog } = siteContent
  const posts = getBlogPosts().slice(0, PREVIEW_COUNT)

  if (posts.length === 0) return null

  return (
    <Section
      id="blog"
      title={blog.title}
      description={blog.description}
      className={className}
    >
      <ul
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-card/60 ring-1 ring-border/60 transition-colors hover:ring-accent/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {post.cover ? (
                <Image
                  src={post.cover}
                  alt=""
                  width={post.imageSizes[post.cover]?.width ?? 1600}
                  height={post.imageSizes[post.cover]?.height ?? 1200}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div
                  className="aspect-[16/10] w-full bg-muted"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-1 flex-col p-5">
                <time
                  dateTime={post.date}
                  className="text-xs tracking-wide text-muted-foreground uppercase"
                >
                  {formatBlogDate(post.date)}
                </time>
                <h3 className="mt-2 font-section text-lg leading-tight font-semibold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <Button variant="outline" size="lg" render={<Link href="/blog" />}>
          {blog.backToBlog}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Button>
      </div>
    </Section>
  )
}
