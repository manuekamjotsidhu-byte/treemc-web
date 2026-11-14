'use client'

import Navbar from "../components/Navbar"
import VPSHero from "../components/vps/VPSHero"
import VPSTablePricing from "../components/vps/VPSTablePricing"
import VPSComparison from "../components/vps/VPSComparison"
import VPSTerminal from "../components/vps/VPSTerminal"
import VPSOsSection from "../components/vps/VPSOsSection"
import VPSOrderFlow from "../components/vps/VPSOrderFlow"
import VPSFaqSection from "../components/vps/VPSFaqSection"
import VPSSupportSection from "../components/vps/VPSSupportSection"
import Footer from "../components/Footer"

export default function VPSPage() {
  return (
    <div className="min-h-screen bg-[#090a0d] text-gray-100 transition-colors duration-300">
      <Navbar />
      <VPSHero />
      <VPSTablePricing />
      <VPSComparison />
      <VPSTerminal />
      <VPSOsSection />
      <VPSOrderFlow />
      <VPSFaqSection />
      <VPSSupportSection />
      <Footer />
    </div>
  )
}
