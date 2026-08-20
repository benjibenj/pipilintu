import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { SkipLink } from "@/components/layout/skip-link"
import { ContactSection } from "@/components/sections/contact"
import { ExpeditionDatesSection } from "@/components/sections/expedition-dates"
import { GallerySection } from "@/components/sections/gallery"
import { HeroSection } from "@/components/sections/hero"
import { ItinerarySection } from "@/components/sections/itinerary"
import { NewsletterSection } from "@/components/sections/newsletter"
import {
  OrganizeProjectionSection,
  ProjectionDatesSection,
} from "@/components/sections/projections"
import { SynopsisSection } from "@/components/sections/synopsis"
import { TeamSection } from "@/components/sections/team"
import { TrailerSection } from "@/components/sections/trailer"

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <HeroSection />
        <NewsletterSection />
        <TrailerSection />
        <SynopsisSection />
        <ItinerarySection />
        <GallerySection />
        <ExpeditionDatesSection />
        <OrganizeProjectionSection />
        <ProjectionDatesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
