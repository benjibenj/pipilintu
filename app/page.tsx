import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { BlogPreviewSection } from "@/components/sections/blog-preview"
import { HeroSection } from "@/components/sections/hero"
import { ProjectionDatesSection } from "@/components/sections/projections"
import { SynopsisSection } from "@/components/sections/synopsis"
import { TeamSection } from "@/components/sections/team"

/**
 * Re-render hourly so a screening moves from "À venir" to "Passées" the day
 * after it happens, without waiting for the next deploy.
 */
export const revalidate = 3600

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <SynopsisSection />
        <ProjectionDatesSection />
        <TeamSection />
        <BlogPreviewSection className="bg-card/30" />
      </main>
      <Footer />
    </>
  )
}
