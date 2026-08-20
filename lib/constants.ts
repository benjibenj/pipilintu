import { siteContent } from "@/lib/content/site.fr"

/** Tally newsletter form — single email field */
export const TALLY_FORM_URL = "https://tally.so/r/q48vA9"
export const TALLY_EMBED_URL = "https://tally.so/embed/q48vA9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"

/** Social and contact links from pipilintu.com */
export const CONTACT = {
  email: "contact@pipilintu.com",
  instagram: "https://www.instagram.com/pipilintu.expedition/",
  whatsapp: "https://wa.me/",
} as const

/** Main navigation — anchor links on home page + blog route */
export const NAV_ITEMS = [
  { href: "/#synopsis", label: "Synopsis" },
  { href: "/#itinerary", label: "Itinéraire" },
  { href: "/#gallery", label: "Images" },
  { href: "/#dates", label: "Dates" },
  { href: "/#projections", label: "Projections" },
  { href: "/#team", label: "Équipage" },
  { href: "/#newsletter", label: "Newsletter" },
  { href: "/blog", label: "Blog" },
] as const

/** Placeholder gallery slot count */
export const GALLERY_PLACEHOLDER_COUNT = 6

/** Projection dates — empty for v1, structure ready for future data */
export type ProjectionStatus = "upcoming" | "past"

export type Projection = {
  date: string
  venue: string
  city: string
  status: ProjectionStatus
}

export const PROJECTIONS: Projection[] = []

export const siteMeta = siteContent.meta
