import { Terminal, Shield, Disc, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function VPSOsSection() {
  const osList = [
    { name: "Ubuntu", versions: "24.04 LTS / 22.04 LTS", kernel: "Linux 6.8+", type: "Community Standard" },
    { name: "Debian", versions: "12 Bookworm / 11 Bullseye", kernel: "Stable Kernel", type: "Server Standard" },
    { name: "AlmaLinux", versions: "9.4 / 8.9", kernel: "RHEL Binary Compatible", type: "Enterprise Linux" },
    { name: "Rocky Linux", versions: "9.3 / 8.8", kernel: "RHEL Binary Compatible", type: "Enterprise Linux" },
    { name: "Windows Server", versions: "2022 / 2019 Standard", kernel: "NT 10.0", type: "RDP & Active Directory" },
    { name: "Custom ISO", versions: "BYO Bootable ISO", kernel: "Any x86_64", type: "Virtualizor Mount" }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090a0d] text-gray-100 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#16201a] border border-[#22c55e]/30 text-[#22c55e] text-xs font-mono font-medium mb-3">
            <span>READY-TO-BOOT TEMPLATES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Operating Systems &amp; Image Catalog
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl font-sans">
            Deploy your preferred distribution in seconds via 1-click installer or mount your own custom x86_64 bootable ISO through the client control panel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {osList.map((os, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-xl bg-[#111317] border border-white/[0.08] hover:border-white/[0.16] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]">
                  {os.type}
                </span>
                <Disc className="w-4 h-4 text-[#22c55e]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-1 font-sans">
                {os.name}
              </h3>
              <p className="text-xs font-mono text-gray-300 mb-2">
                {os.versions}
              </p>
              <p className="text-[11px] font-mono text-gray-400">
                Kernel: {os.kernel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
