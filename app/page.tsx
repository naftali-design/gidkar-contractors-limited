import { Metadata } from "next"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import HeroSection from "@/components/sections/hero"
import StatsSection from "@/components/sections/stats"
import TrustIndicators from "@/components/sections/trust-indicators"
import CompanyIntroduction from "@/components/sections/introduction"
import IndustriesSection from "@/components/sections/industries"
import ServicesPreview from "@/components/sections/services-preview"
import ProjectsPreview from "@/components/sections/projects-preview"
import WhyChooseGidkar from "@/components/sections/why-choose"
import ProjectProcess from "@/components/sections/process"
import TestimonialsSection from "@/components/sections/testimonials"
import TeamExpertise from "@/components/sections/team-expertise"
import FAQSection from "@/components/sections/faq"
import CTASection from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Gidkar Contractors Limited - Construction & Engineering Solutions",
  description:
    "Professional Civil Engineering, Building Construction, Road Works & Infrastructure solutions in Kenya. 8+ years of experience delivering quality construction projects.",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustIndicators />
        <StatsSection />
        <CompanyIntroduction />
        <IndustriesSection />
        <ServicesPreview />
        <ProjectsPreview />
        <WhyChooseGidkar />
        <ProjectProcess />
        <TestimonialsSection />
        <TeamExpertise />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}