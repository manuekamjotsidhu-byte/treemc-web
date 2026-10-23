'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Server,
  Check
} from "lucide-react"

const partners = [
  { name: "AMD EPYC", src: "/cpu/epyc.png" },
  { name: "Intel", src: "/advertisement/intel.png" },
  { name: "Samsung NVMe", src: "/advertisement/samsung.png" },
  { name: "Pterodactyl", src: "/advertisement/pterodactyl.png" },
  { name: "Hetzner", src: "/advertisement/hetzner.png" },
  { name: "NeoProtect", src: "/advertisement/neoprotect.png" },
]

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-gray-50 dark:bg-[#090a10] transition-colors duration-300">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>High-Performance Game &amp; Cloud Infrastructure</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black orbitron-font text-gray-900 dark:text-white tracking-tight leading-[1.14] mb-6 max-w-4xl mx-auto"
        >
          Uncompromising Minecraft &amp; High-Frequency Cloud Servers
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Deploy unmetered, low-latency Minecraft servers and high-frequency cloud instances in seconds. Powered by AMD Ryzen™ 9 9950X, AMD EPYC™, and Intel® Xeon® processors with dedicated port allocations and automated enterprise DDoS mitigation.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/games"
            className="px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-gray-950 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm group"
          >
            <span>View Minecraft Plans</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/vps"
            className="px-8 py-4 rounded-xl bg-white dark:bg-[#111420] hover:bg-gray-100 dark:hover:bg-[#171b2c] border border-gray-200 dark:border-white/[0.08] text-gray-900 dark:text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2 active:scale-[0.98]"
          >
            <Server className="w-4 h-4 text-emerald-500" />
            <span>Explore Cloud VPS &amp; VDS</span>
          </Link>
        </motion.div>

        {/* Trust Highlights Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-8 border-t border-gray-200/80 dark:border-white/[0.08]"
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>2 to 8 Ports per Node</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Enterprise Gen4 NVMe Storage</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Sub-15ms Low Latency Routing</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Instant Pterodactyl Provisioning</span>
          </div>
        </motion.div>

        {/* Enterprise Partners Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-14 pt-8 border-t border-gray-200/80 dark:border-white/[0.06]"
        >
          <div className="text-center text-[11px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
            Enterprise Cloud &amp; Hardware Infrastructure Partners
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-100 transition-opacity">
            {partners.map((partner, index) => (
              <div key={index} className="h-7 w-24 sm:w-28 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
