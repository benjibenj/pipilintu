import Link from "next/link"

import { siteContent } from "@/lib/content/site.fr"
import { NAV_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"

type FooterProps = {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const { footer } = siteContent

  return (
    <footer className={cn("border-t border-border/60 bg-card/40", className)}>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-heading text-lg tracking-widest uppercase">
              {footer.copyright}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{footer.tagline}</p>
          </div>

          <nav aria-label="Navigation pied de page">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Expédition Pipilintu. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
