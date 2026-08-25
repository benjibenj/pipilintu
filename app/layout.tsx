import { Cinzel, Encode_Sans_Condensed, Montserrat } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { OG_IMAGE, SITE_URL, siteMeta } from "@/lib/constants"
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteMeta.title,
  description: siteMeta.description,
  applicationName: "Pipilintu",
  keywords: [
    "Pipilintu",
    "film documentaire",
    "expédition",
    "balsa de totora",
    "lac Titicaca",
    "Amazone",
    "Bolivie",
    "Brésil",
    "aventure",
    "low-tech",
    "documentaire aventure",
  ],
  authors: [{ name: "Expédition Pipilintu", url: SITE_URL }],
  creator: "Expédition Pipilintu",
  publisher: "Expédition Pipilintu",
  alternates: { canonical: "/" },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: "/",
    locale: "fr_FR",
    type: "website",
    siteName: "Pipilintu",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
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
