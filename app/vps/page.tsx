import React from "react";
import VpsExplorer from "../../src/components/VpsExplorer";
import { ComparisonMatrix, CtaBanner, FaqSection, InfrastructureGrid, OsAndPanelShowcase } from "../../src/components/ServiceDetails";
import ServiceHeroBanner from "../../src/components/ServiceHeroBanner";

export const metadata = {
  title: "Cloud VPS Hosting Worldwide — India, Germany, Singapore, USA, Canada | TreeMC",
  description: "Deploy high-performance KVM Cloud VPS with Gen4 NVMe, ECC RAM, and always-on DDoS protection across India, Germany, Singapore, USA, and Canada.",
};

const VPS_FAQ = [
  { q: "What virtualization does TreeMC Cloud VPS use?", a: "All Cloud VPS plans run on true KVM hardware virtualization with dedicated RAM, isolated kernel access, and full root SSH + VNC console." },
  { q: "Which CPU models are available?", a: "Depending on region, we offer Intel Xeon Standard (E5/Platinum), Intel Xeon Gold, AMD EPYC Milan, and high-frequency AMD Ryzen 9 (5900X / 9950X)." },
  { q: "Which operating systems can I install?", a: "Ubuntu 24.04/22.04 LTS, Debian 12, AlmaLinux 9, Rocky Linux 9, and custom ISO images upon request." },
  { q: "Is DDoS protection included on all 5 countries?", a: "Yes. Always-on L4/L7 DDoS mitigation is included on India, Germany, Singapore, USA, and Canada VPS nodes." },
];

export default function VpsPage() {
  return (
    <div>
      <ServiceHeroBanner
        badge="KVM Cloud VPS · 5 Countries · Gen4 NVMe"
        title={<>Cloud VPS hosting <span className="serif-it font-normal">worldwide</span></>}
        subtitle="Choose your region below to view available processor families, real-time currency pricing, and full root KVM access."
        image="/images/vps.png"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <VpsExplorer />
      </div>
      <InfrastructureGrid variant="vps" />
      <OsAndPanelShowcase />
      <ComparisonMatrix />
      <FaqSection items={VPS_FAQ} title="Cloud VPS FAQ" />
      <CtaBanner />
    </div>
  );
}
