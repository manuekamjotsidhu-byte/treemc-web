import RdpPricingSection from "../components/rdp/RdpPricingSection"
import FeaturesSection from "../components/FeaturesSection"
import FAQSection from "../components/FAQSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import LocationsSection from "../components/LocationsSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Windows Server RDP Hosting (India) | TreeMC Host",
  description: "High-performance Windows Server RDP hosted in Noida, India with enterprise Intel Xeon, NVMe SSDs, 1 Gbps unmetered port, and Advanced DDoS Mitigation.",
}

export default function RdpPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />
      <RdpPricingSection />
      <FeaturesSection />
      <LocationsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
