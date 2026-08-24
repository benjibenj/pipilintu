import Link from "next/link"
import { Camera, Mail, MessageCircle } from "lucide-react"

import { siteContent } from "@/lib/content/site.fr"
import { CONTACT, NAV_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"

type FooterProps = {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const { contact, footer } = siteContent

  const socialLinks = [
    {
      href: `mailto:${CONTACT.email}`,
      label: contact.emailLabel,
      icon: Mail,
      external: false,
    },
    {
      href: CONTACT.instagram,
      label: contact.instagramLabel,
      icon: Camera,
      external: true,
    },
    {
      href: CONTACT.whatsapp,
      label: contact.whatsappLabel,
      icon: MessageCircle,
      external: true,
    },
  ]

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

        <div className="mt-8 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row-reverse sm:items-center sm:justify-between">
          <ul className="flex gap-1" aria-label={contact.title} role="list">
            {socialLinks.map(({ href, label, icon: Icon, external }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Expédition Pipilintu. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
