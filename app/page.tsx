import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero"
import {
  OrganizeProjectionSection,
  ProjectionDatesSection,
} from "@/components/sections/projections"
import { SynopsisSection } from "@/components/sections/synopsis"
import { TeamSection } from "@/components/sections/team"

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <SynopsisSection />
        <OrganizeProjectionSection />
        <ProjectionDatesSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
