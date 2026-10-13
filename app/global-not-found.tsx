import Link from "next/link"
import { Cinzel, Montserrat } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "Page introuvable — Pipilintu",
}

/** 404 for URLs that match no route, in all four languages */
export default function GlobalNotFound() {
  return (
    <html
      lang="fr"
      className={cn("dark antialiased", montserrat.variable, cinzel.variable)}
    >
      <body className="flex min-h-svh items-center justify-center bg-background px-4 font-sans text-foreground">
        <main className="text-center">
          <p className="font-heading text-5xl tracking-widest">404</p>
          <p className="mt-4 text-muted-foreground">
            Page introuvable · Page not found · Página no encontrada · Página
            não encontrada
          </p>
          <nav className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="text-accent hover:underline">
              Accueil
            </Link>
            <Link href="/en" lang="en" className="text-accent hover:underline">
              Home
            </Link>
            <Link href="/es" lang="es" className="text-accent hover:underline">
              Inicio
            </Link>
            <Link href="/pt" lang="pt" className="text-accent hover:underline">
              Início
            </Link>
          </nav>
        </main>
      </body>
    </html>
  )
}
