import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import type { ImageSize } from "@/lib/blog"

type MarkdownProps = {
  children: string
  /** Intrinsic sizes keyed by image path, so images never shift or distort */
  imageSizes?: Record<string, ImageSize>
}

/** Renders post bodies with the site's typography, images through next/image */
export function Markdown({ children, imageSizes = {} }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h2 className="mt-12 font-section text-2xl font-semibold text-foreground md:text-3xl">
            {children}
          </h2>
        ),
        h2: ({ children }) => (
          <h2 className="mt-12 font-section text-xl font-semibold text-foreground md:text-2xl">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-8 font-section text-lg font-semibold text-foreground">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="mt-5 leading-relaxed text-muted-foreground">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        ul: ({ children }) => (
          <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="mt-6 border-l-2 border-accent pl-5 text-muted-foreground italic">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="mt-10 border-border/60" />,
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:text-foreground"
          >
            {children}
          </a>
        ),
        img: ({ src, alt }) => {
          if (typeof src !== "string") return null
          const size = imageSizes[src]
          // The Notion export used bare filenames as alt text — treat those as
          // decorative rather than having screen readers spell them out.
          const label = alt && !/\.(jpe?g|png|webp|gif)$/i.test(alt) ? alt : ""
          return (
            <Image
              src={src}
              alt={label}
              width={size?.width ?? 1600}
              height={size?.height ?? 1200}
              sizes="(max-width: 768px) 100vw, 768px"
              className="mt-8 h-auto w-full rounded-xl ring-1 ring-border/60"
            />
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
