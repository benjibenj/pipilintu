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

/** Full Google Photos album (308 photos), linked under the carousel */
export const PHOTO_ALBUM_URL = "https://photos.app.goo.gl/qH9wjp93iEjEzzRf8"

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

/** Main navigation — anchors on the home page, plus the blog route */
export const NAV_ITEMS = [
  { key: "synopsis", path: "/#synopsis" },
  { key: "projections", path: "/#projections" },
  { key: "team", path: "/#team" },
  { key: "media", path: "/media" },
  { key: "blog", path: "/blog" },
] as const

/**
 * Gallery images, ordered as a narrative: harvest and build, departure,
 * navigation, then arrival at the Atlantic. Intrinsic dimensions are declared
 * so next/image can reserve layout space in the carousel. Their descriptions
 * (alt text) are translated, in each lib/content/site.*.ts under gallery.alts.
 */
export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/20250514_155424.jpg",
    width: 4032,
    height: 3024,
  },
  {
    src: "/images/gallery/IMG_20250608_090721_860.jpg",
    width: 2736,
    height: 1824,
  },
  {
    src: "/images/gallery/IMG-20250711-WA0016.jpg",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/gallery/IMG-20250717-WA0041.jpg",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/gallery/dji_fly_20250716_124850_121_1754012171847_video(1).jpg",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/gallery/dji_fly_20250716_125114_124_1754012391243_video(1).jpg",
    width: 1920,
    height: 1080,
  },
  {
    src: "/images/gallery/DSC03139.jpg",
    width: 2048,
    height: 1072,
  },
  {
    src: "/images/gallery/DSC05646.jpg",
    width: 1638,
    height: 2048,
  },
  {
    src: "/images/gallery/DSC05264.jpg",
    width: 2048,
    height: 1072,
  },
  {
    src: "/images/gallery/DSC04170.jpg",
    width: 2048,
    height: 1072,
  },
  {
    src: "/images/gallery/DSC06162.jpg",
    width: 2048,
    height: 1072,
  },
  {
    src: "/images/gallery/DSC05487.jpg",
    width: 2048,
    height: 1072,
  },
  {
    src: "/images/gallery/DSC05606.jpg",
    width: 1638,
    height: 2048,
  },
  {
    src: "/images/gallery/PXL_20251014_204520898.MP.jpg",
    width: 2268,
    height: 4032,
  },
  {
    src: "/images/gallery/IMG-20251014-WA0016.jpg",
    width: 984,
    height: 738,
  },
] as const

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
} as const
