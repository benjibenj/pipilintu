import { siteContent } from "@/lib/content/site.fr"

/** Tally newsletter form — single email field */
export const TALLY_FORM_URL = "https://tally.so/r/obvllX"

/** Social and contact links from pipilintu.com */
export const CONTACT = {
  email: "pipilintuexpedition@gmail.com",
  instagram: "https://www.instagram.com/baboune_lowtech",
  whatsapp: "https://wa.me/33634735406",
} as const

/** Production partner, credited in the footer */
export const SOLIDREAM_URL = "https://solidream.net/"

/** Builds a wa.me link carrying a pre-filled message */
export function whatsappHref(message: string) {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
}

/**
 * Builds a mailto link with a pre-filled subject and body. Encoded with
 * encodeURIComponent rather than URLSearchParams — mail clients read `+` as a
 * literal plus, not a space.
 */
export function mailtoHref(subject: string, body?: string) {
  const query = [`subject=${encodeURIComponent(subject)}`]
  if (body) query.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${CONTACT.email}?${query.join("&")}`
}

/** Main navigation — anchor links on home page + blog route */
export const NAV_ITEMS = [
  { href: "/#synopsis", label: "Synopsis" },
  { href: "/#projections", label: "Projections" },
  { href: "/#team", label: "Équipage" },
  { href: "/blog", label: "Blog" },
] as const

/**
 * Gallery images, ordered as a narrative: harvest and build, departure,
 * navigation, then arrival at the Atlantic. Intrinsic dimensions are declared
 * so next/image can reserve layout space in the carousel.
 */
export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/20250514_155424.jpg",
    width: 4032,
    height: 3024,
    alt: "Une main tient une tige de totora coupée, révélant la moelle alvéolée qui donne sa flottabilité à la balsa",
  },
  {
    src: "/images/gallery/IMG_20250608_090721_860.jpg",
    width: 2736,
    height: 1824,
    alt: "Un équipier et un artisan aymara ligaturent ensemble une botte de totora pendant la construction de la balsa",
  },
  {
    src: "/images/gallery/IMG-20250711-WA0016.jpg",
    width: 1600,
    height: 1200,
    alt: "L'équipage et des militaires portent à l'épaule une coque de totora déchargée d'un camion, au bord du fleuve",
  },
  {
    src: "/images/gallery/IMG-20250717-WA0041.jpg",
    width: 1600,
    height: 1200,
    alt: "Cérémonie de départ : un officier de l'Armada Boliviana accueille l'équipage en gilets de sauvetage devant la balsa",
  },
  {
    src: "/images/gallery/dji_fly_20250716_124850_121_1754012171847_video(1).jpg",
    width: 1920,
    height: 1080,
    alt: "Vue aérienne de la balsa naviguant dans une gorge encaissée aux parois couvertes de forêt",
  },
  {
    src: "/images/gallery/dji_fly_20250716_125114_124_1754012391243_video(1).jpg",
    width: 1920,
    height: 1080,
    alt: "Vue aérienne à la verticale du fleuve brun entre deux rives rocheuses, la balsa suivie de deux embarcations",
  },
  {
    src: "/images/gallery/DSC03139.jpg",
    width: 2048,
    height: 1072,
    alt: "Deux équipiers manœuvrent les longues rames de bois sur le pont de la balsa, la forêt en arrière-plan",
  },
  {
    src: "/images/gallery/DSC05646.jpg",
    width: 1638,
    height: 2048,
    alt: "La balsa au milieu du fleuve sous sa voile blanche peinte d'un grand papillon orange et du nom Pipilintu",
  },
  {
    src: "/images/gallery/DSC05264.jpg",
    width: 2048,
    height: 1072,
    alt: "Au crépuscule, un membre de l'équipage échange avec trois enfants montés à bord de la balsa",
  },
  {
    src: "/images/gallery/DSC04170.jpg",
    width: 2048,
    height: 1072,
    alt: "Une barge d'orpaillage bâchée de bleu, suivie de ses dragues, ancrée au milieu du fleuve amazonien",
  },
  {
    src: "/images/gallery/DSC06162.jpg",
    width: 2048,
    height: 1072,
    alt: "Portrait d'un équipier au chapeau de toile, souriant, lors d'une escale dans un village de rive",
  },
  {
    src: "/images/gallery/DSC05487.jpg",
    width: 2048,
    height: 1072,
    alt: "L'écusson brodé « Expedición Pipilintu » posé sur la coque de totora à demi immergée",
  },
  {
    src: "/images/gallery/DSC05606.jpg",
    width: 1638,
    height: 2048,
    alt: "Quatre équipiers posent à bord de la balsa en déployant le drapeau Expedición Pipilintu",
  },
  {
    src: "/images/gallery/PXL_20251014_204520898.MP.jpg",
    width: 2268,
    height: 4032,
    alt: "Trois équipiers devant la balsa échouée sur une berge de vase, au terme de l'expédition",
  },
  {
    src: "/images/gallery/IMG-20251014-WA0016.jpg",
    width: 984,
    height: 738,
    alt: "La balsa, mât pavoisé, échouée sur une plage bordée de mangrove près de l'embouchure de l'Amazone",
  },
] as const

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

/**
 * Canonical origin, used to resolve Open Graph image URLs. Override in
 * deployment with NEXT_PUBLIC_SITE_URL if the domain changes.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pipilintu.com"

/**
 * Shared social preview card — a 1200×630 crop of the crew rowing the balsa.
 * Used as the default for every route, and as the fallback for blog posts that
 * ship without a cover image.
 */
export const OG_IMAGE = {
  url: "/images/og.jpg",
  width: 1200,
  height: 630,
  alt: "Deux équipiers manœuvrent les longues rames de la balsa Pipilintu sur un fleuve amazonien",
} as const
