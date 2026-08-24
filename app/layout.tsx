import { Cinzel, Encode_Sans_Condensed, Montserrat } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { SITE_URL, siteMeta } from "@/lib/constants"
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
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    locale: "fr_FR",
    type: "website",
    siteName: "Pipilintu",
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
