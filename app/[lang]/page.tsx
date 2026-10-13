import { notFound } from "next/navigation"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { BlogPreviewSection } from "@/components/sections/blog-preview"
import { HeroSection } from "@/components/sections/hero"
import { ProjectionDatesSection } from "@/components/sections/projections"
import { SynopsisSection } from "@/components/sections/synopsis"
import { TeamSection } from "@/components/sections/team"
import { hasLocale, localizedPaths } from "@/lib/i18n"

/**
 * Re-render hourly so a screening moves from "À venir" to "Passées" the day
 * after it happens, without waiting for the next deploy.
 */
export const revalidate = 3600

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <>
      <Header locale={lang} paths={localizedPaths("/")} />
      <main id="main-content">
        <HeroSection locale={lang} />
        <SynopsisSection locale={lang} />
        <ProjectionDatesSection locale={lang} />
        <TeamSection locale={lang} />
        <BlogPreviewSection locale={lang} className="bg-card/30" />
      </main>
      <Footer locale={lang} />
    </>
  )
}
