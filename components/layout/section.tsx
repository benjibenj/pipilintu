import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  title: string
  description?: string
  children: React.ReactNode
  className?: string
  /** When true, the section title is visually hidden (e.g. hero uses its own h1) */
  hideTitle?: boolean
}

export function Section({
  id,
  title,
  description,
  children,
  className,
  hideTitle = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-20 py-16 md:py-24", className)}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <header className={cn("mb-8 md:mb-12", hideTitle && "sr-only")}>
          <h2
            id={`${id}-heading`}
            className="font-section text-2xl tracking-wide text-foreground sm:text-3xl md:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}
