import { Cinzel, Encode_Sans_Condensed, Montserrat } from "next/font/google"
import type { Metadata } from "next"

import { notFound } from "next/navigation"

import "../globals.css"
import { getSiteContent } from "@/lib/content"
import { OG_IMAGE, SITE_URL } from "@/lib/constants"
import {
  alternates,
  hasLocale,
  LOCALE_META,
  localePath,
  localizedPaths,
  LOCALES,
} from "@/lib/i18n"
import { cn } from "@/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
})

const encodeSansCondensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-section",
})

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

/** Only the four languages exist — anything else is a 404 */
export const dynamicParams = false

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params,
}: Omit<LayoutProps, "children">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { meta } = getSiteContent(lang)
  const ogImage = { ...OG_IMAGE, alt: meta.ogImageAlt }

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    applicationName: "Pipilintu",
    keywords: meta.keywords,
    authors: [{ name: "Expédition Pipilintu", url: SITE_URL }],
    creator: "Expédition Pipilintu",
    publisher: "Expédition Pipilintu",
    alternates: alternates(lang, localizedPaths("/")),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localePath(lang),
      locale: LOCALE_META[lang].og,
      alternateLocale: LOCALES.filter((l) => l !== lang).map(
        (l) => LOCALE_META[l].og
      ),
      type: "website",
      siteName: "Pipilintu",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html
      lang={LOCALE_META[lang].tag}
      className={cn(
        "dark antialiased",
        montserrat.variable,
        cinzel.variable,
        encodeSansCondensed.variable
      )}
    >
      <body className="min-h-svh bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  )
}
