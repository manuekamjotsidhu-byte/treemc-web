import React from "react";
import VpsExplorer from "../../src/components/VpsExplorer";
import { ComparisonMatrix, CtaBanner, FaqSection, InfrastructureGrid, OsAndPanelShowcase } from "../../src/components/ServiceDetails";

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
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1 text-xs font-semibold text-[var(--muted)]">
            KVM Cloud VPS · 5 Countries · Gen4 NVMe
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Cloud VPS hosting <span className="serif-it font-normal">worldwide</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--muted)] sm:text-base">
            Choose your region below to view available processor families, real-time currency pricing, and full root KVM access.
          </p>
          <div className="rv card-clean mx-auto mt-8 grid max-w-4xl items-center gap-6 overflow-hidden rounded-3xl p-5 text-left sm:grid-cols-12">
            <div className="sm:col-span-5">
              <img src="/images/vps.png" alt="TreeMC Cloud VPS Infrastructure" className="h-44 w-full rounded-2xl object-cover" />
            </div>
            <div className="space-y-3 sm:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                ● 99.99% Uptime · True KVM Isolation
              </div>
              <h2 className="text-xl font-extrabold">Enterprise CPUs &amp; Gen4 NVMe across 5 Countries</h2>
              <p className="text-xs leading-relaxed text-[var(--muted)]">
                Powered by Intel® Xeon® Standard/Gold, AMD EPYC™ 7F72/7K62/Milan, and AMD Ryzen™ 9 5900X/9950X with 10 Gbps uplinks and always-on DDoS scrubbing.
              </p>
            </div>
          </div>
        </div>
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
