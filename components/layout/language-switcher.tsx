import Link from "next/link"

import {
  LOCALE_META,
  LOCALES,
  type Locale,
  type LocalizedPaths,
} from "@/lib/i18n"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  locale: Locale
  /** The current page in every language */
  paths: LocalizedPaths
  label: string
  className?: string
}

/** FR · EN · ES · PT — each link goes to the same page in that language */
export function LanguageSwitcher({
  locale,
  paths,
  label,
  className,
}: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center gap-0.5" role="list">
        {LOCALES.map((l) => (
          <li key={l}>
            <Link
              href={paths[l]}
              hrefLang={LOCALE_META[l].tag}
              lang={LOCALE_META[l].tag}
              title={LOCALE_META[l].label}
              aria-current={l === locale ? "true" : undefined}
              className={cn(
                "rounded-md px-2 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                l === locale
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span aria-hidden="true">{l}</span>
              <span className="sr-only">{LOCALE_META[l].label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
