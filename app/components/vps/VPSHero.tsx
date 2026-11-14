'use client'

import Link from 'next/link'
import { ArrowRight, Server, ShieldCheck, Cpu, HardDrive, Network, Terminal } from 'lucide-react'

export default function VPSHero() {
  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#090a0d] text-gray-100 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Left-aligned Editorial Headline */}
          <div className="lg:col-span-7">
            
            {/* Direct Context Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#16201a] border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              <span>INDIA DATA CENTER • KVM VIRTUALIZATION</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              High-Frequency Cloud VPS in India.
            </h1>

            {/* Factual Subheading */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed mb-6 font-sans">
              Dedicated KVM compute on Intel® Xeon® and AMD EPYC™ processors. Pure PCIe Gen4 NVMe storage, 1 Gbps port speeds, and always-on DDoS mitigation. Plans start at <strong className="text-white font-mono">₹359/mo</strong>.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <Link
                href="#plans"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#22c55e] text-[#041c14] hover:bg-[#16a34a] transition-all shadow-sm active:scale-95 text-center font-sans"
              >
                <span>View VPS Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/order?plan=xeon-xl"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-mono font-medium bg-[#14161c] text-gray-200 hover:text-white hover:bg-[#1c2029] border border-white/[0.1] transition-colors text-center"
              >
                <span>Order Xeon XL (₹1,429/mo)</span>
              </Link>
            </div>

            {/* Factual Technical Spec Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.08] text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <Server className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>India data center</span>
              </div>
              <div className="flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>Gen4 NVMe SSDs</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>1 Gbps Port Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>Always-On DDoS Shield</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>Zero CPU Throttling</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>Full Root Access</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Spec Card (Xeon XL Benchmark Factsheet) */}
          <div className="lg:col-span-5">
            <div className="bg-[#111317] border border-white/[0.1] rounded-xl p-6 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                <div>
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">Recommended Tier</span>
                  <span className="text-lg font-bold text-white font-sans">Xeon Standard XL</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-mono text-white">₹1,429</span>
                  <span className="text-xs font-mono text-gray-400">/mo</span>
                </div>
              </div>

              {/* Hardware Spec Rows */}
              <div className="space-y-3 text-xs font-mono mb-6">
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-400">Processor</span>
                  <span className="text-white font-semibold">Intel® Xeon® (6 Dedicated vCores)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-400">Memory</span>
                  <span className="text-white font-semibold">24 GB DDR4 ECC</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-400">Storage</span>
                  <span className="text-white font-semibold">200 GB NVMe Gen4 SSD</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-400">Network Uplink</span>
                  <span className="text-white font-semibold">1 Gbps Unmetered Fair-Use</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
                  <span className="text-gray-400">Virtualization</span>
                  <span className="text-white font-semibold">Hardware KVM</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-gray-400">IP Allocation</span>
                  <span className="text-white font-semibold">1 Dedicated IPv4 Included</span>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href="/order?plan=xeon-xl"
                className="w-full py-2.5 px-4 rounded-lg text-xs font-mono font-semibold bg-[#22c55e] hover:bg-[#16a34a] text-[#041c14] transition-all flex items-center justify-center gap-1.5 shadow-sm text-center"
              >
                <span>Deploy Xeon Standard XL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
