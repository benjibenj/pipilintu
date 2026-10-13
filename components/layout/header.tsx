import Link from "next/link"

import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { MobileNav } from "@/components/layout/mobile-nav"
import { getSiteContent } from "@/lib/content"
import { NAV_ITEMS } from "@/lib/constants"
import { localePath, type Locale, type LocalizedPaths } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type HeaderProps = {
  locale: Locale
  /** The current page in every language, for the language switcher */
  paths: LocalizedPaths
  className?: string
}

/** Builds the localized nav links, shared with the footer */
export function navLinks(locale: Locale) {
  const { nav } = getSiteContent(locale)
  return NAV_ITEMS.map((item) => ({
    href: item.path.startsWith("/#")
      ? `${localePath(locale)}${item.path.slice(1)}`
      : localePath(locale, item.path),
    label: nav[item.key],
  }))
}

export function Header({ locale, paths, className }: HeaderProps) {
  const { ui } = getSiteContent(locale)
  const items = navLinks(locale)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href={localePath(locale)}
          className="font-heading text-lg tracking-widest text-foreground uppercase transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          Pipilintu
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          <nav aria-label={ui.mainNav} className="flex items-center gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher
            locale={locale}
            paths={paths}
            label={ui.language}
            className="border-l border-border/60 pl-3"
          />
        </div>

        <MobileNav items={items} labels={ui}>
          <LanguageSwitcher locale={locale} paths={paths} label={ui.language} />
        </MobileNav>
      </div>
    </header>
  )
}
