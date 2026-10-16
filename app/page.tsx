'use client'
import HeroSection from "./components/HeroSection"
import ServiceShowcaseCoverflow from "./components/ServiceShowcaseCoverflow"
import FeaturesSection from "./components/FeaturesSection"
import LocationsSection from "./components/LocationsSection"
import PricingSection from "./components/PricingSection"
import FAQSection from "./components/FAQSection"
import PanelShowcase from "./components/PanelShowcase"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <ServiceShowcaseCoverflow />
      <FeaturesSection />
      <LocationsSection />
      <PricingSection />
      <FAQSection />
      <PanelShowcase />
      <Footer />
    </div>
  )
}
