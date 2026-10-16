'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Server,
  Shield,
  Zap,
  Cpu,
  Activity,
  HardDrive,
  Globe,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Terminal,
  Gamepad2,
  Monitor
} from "lucide-react"
import { FaDiscord } from "react-icons/fa6"
import { useCurrency } from "./ui/CurrencySelector"

const partners = [
  { name: "AMD EPYC", src: "/cpu/epyc.png" },
  { name: "Intel", src: "/advertisement/intel.png" },
  { name: "Samsung NVMe", src: "/advertisement/samsung.png" },
  { name: "Pterodactyl", src: "/advertisement/pterodactyl.png" },
  { name: "Hetzner", src: "/advertisement/hetzner.png" },
  { name: "NeoProtect", src: "/advertisement/neoprotect.png" },
]

const liveNodes = [
  {
    id: "minecraft",
    label: "Minecraft Hosting",
    icon: Gamepad2,
    badge: "Most Popular",
    cpu: "Ryzen™ 9 9950X / 5900X",
    clock: "Up to 5.7 GHz",
    ram: "DDR4 / DDR5 ECC",
    storage: "Gen4/Gen5 NVMe",
    ddos: "17+ Tbit/s L3–L7 Active",
    basePrice: 199,
    deployLink: "/games",
    pings: [
      { loc: "Noida / Delhi", ms: "8 ms", status: "optimal" },
      { loc: "Mumbai", ms: "18 ms", status: "optimal" },
      { loc: "Lahore (PK)", ms: "14 ms", status: "optimal" },
      { loc: "Singapore", ms: "42 ms", status: "good" },
      { loc: "Frankfurt (DE)", ms: "115 ms", status: "good" },
    ]
  },
  {
    id: "vps",
    label: "Cloud VPS",
    icon: Server,
    badge: "KVM Virtualization",
    cpu: "AMD EPYC™ & Intel® Xeon®",
    clock: "Dedicated Compute",
    ram: "DDR4 ECC Memory",
    storage: "Enterprise NVMe",
    ddos: "Standard & Premium Tier",
    basePrice: 399,
    deployLink: "/vps",
    pings: [
      { loc: "Noida / Delhi", ms: "11 ms", status: "optimal" },
      { loc: "Singapore", ms: "38 ms", status: "optimal" },
      { loc: "Germany", ms: "110 ms", status: "good" },
      { loc: "USA East", ms: "175 ms", status: "good" },
      { loc: "Canada", ms: "185 ms", status: "good" },
    ]
  },
  {
    id: "rdp",
    label: "Windows Server RDP",
    icon: Monitor,
    badge: "Administrator Access",
    cpu: "Intel® Xeon® (Up to 12 vCPU)",
    clock: "High Frequency",
    ram: "Up to 48 GB DDR4 ECC",
    storage: "Up to 350 GB NVMe",
    ddos: "Advance DDoS Migration",
    basePrice: 548,
    deployLink: "/rdp",
    pings: [
      { loc: "Noida, IN", ms: "7 ms", status: "optimal" },
      { loc: "Delhi NCR", ms: "9 ms", status: "optimal" },
      { loc: "Mumbai", ms: "19 ms", status: "optimal" },
      { loc: "Bengaluru", ms: "28 ms", status: "optimal" },
      { loc: "Dubai (UAE)", ms: "48 ms", status: "good" },
    ]
  }
]

export default function HeroSection() {
  const { convertPrice } = useCurrency()
  const [selectedNodeId, setSelectedNodeId] = useState("minecraft")

  const activeNode = liveNodes.find((n) => n.id === selectedNodeId) || liveNodes[0]

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      {/* High-Tech Cyber Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[550px] h-[400px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-10 w-[450px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/3 w-[350px] h-[250px] bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Cyber Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Hub */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Live Operational Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-inner"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>All Systems Operational • 99.9% Uptime SLA Active</span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black orbitron-font text-gray-900 dark:text-white tracking-tight leading-[1.12] mb-6"
            >
              Next-Gen Gaming &amp;{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Cloud Infrastructure
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Deploy ultra-low latency Minecraft game servers, AMD Ryzen™ 9 9950X / 5900X compute, and enterprise Cloud VPS backed by 17+ Tbit/s multi-layer DDoS mitigation powered by OVHcloud and Cloudflare Magic Transit.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                href="/games"
                className="px-7 py-3.5 rounded-xl button-primary text-button-primary font-bold text-sm sm:text-base shadow-xl shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <span>Deploy A Server</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/vps"
                className="px-7 py-3.5 rounded-xl bg-white/80 dark:bg-white/[0.05] hover:bg-white dark:hover:bg-white/[0.09] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold text-sm sm:text-base backdrop-blur-md shadow-sm transition-all flex items-center gap-2"
              >
                <Server className="w-4 h-4 text-emerald-500" />
                <span>Cloud VPS</span>
              </Link>

              <a
                href="https://panel.treemc.host"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
              >
                <span>Client Area</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-6 border-t border-gray-200/80 dark:border-white/[0.08]"
            >
              <div>
                <div className="text-xl sm:text-2xl font-black orbitron-font text-emerald-500 dark:text-emerald-400">
                  &lt; 60s
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  Instant Auto-Setup
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-black orbitron-font text-cyan-500 dark:text-cyan-400">
                  17+ Tbit/s
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  DDoS Scrubbing
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-black orbitron-font text-indigo-500 dark:text-indigo-400">
                  Sub-15ms
                </div>
                <div className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                  Low-Latency Peering
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Live Cluster Telemetry Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-white/85 dark:bg-[#0e111a]/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/50 overflow-hidden">
              {/* Terminal Window Header */}
              <div className="px-5 py-3.5 bg-gray-100/90 dark:bg-white/[0.04] border-b border-gray-200/80 dark:border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                    <span>treemc-cluster://in-noida-01</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE TELEMETRY
                </div>
              </div>

              {/* Service Switcher Tabs */}
              <div className="p-4 pb-0 flex gap-2 overflow-x-auto border-b border-gray-100 dark:border-white/[0.05]">
                {liveNodes.map((node) => {
                  const isSelected = selectedNodeId === node.id
                  const Icon = node.icon
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        isSelected
                          ? "bg-emerald-500 text-gray-950 shadow-md shadow-emerald-500/20 scale-[1.02]"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.05]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{node.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Cluster Hardware Telemetry */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      Compute Architecture
                    </span>
                    <h3 className="text-lg font-black orbitron-font text-gray-900 dark:text-white">
                      {activeNode.cpu}
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                    {activeNode.badge}
                  </span>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Clock Speed</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">{activeNode.clock}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                      <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                      <span>Memory Type</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">{activeNode.ram}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                      <HardDrive className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Storage I/O</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">{activeNode.storage}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mb-1">
                      <Shield className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Mitigation</span>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">{activeNode.ddos}</span>
                  </div>
                </div>

                {/* Real-Time Live Ping Matrix */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-gray-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Live Regional Latency (Edge Scrubber)</span>
                    </span>
                    <span className="text-emerald-500 font-bold">Sub-20ms Peering</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {activeNode.pings.map((ping, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/[0.05] flex items-center justify-between"
                      >
                        <span className="text-[11px] text-gray-600 dark:text-gray-400 truncate">
                          {ping.loc}
                        </span>
                        <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0 ml-1">
                          {ping.ms}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 block">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black orbitron-font text-gray-900 dark:text-white">
                        {convertPrice(activeNode.basePrice.toString())}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">/mo</span>
                    </div>
                  </div>

                  <Link
                    href={activeNode.deployLink}
                    className="px-5 py-2.5 rounded-xl button-primary text-button-primary font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 group"
                  >
                    <span>Deploy Now</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Partners Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200/70 dark:border-white/[0.08]"
        >
          <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">
            Enterprise Cloud &amp; Hardware Partners
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-100 transition-opacity">
            {partners.map((partner, index) => (
              <div key={index} className="h-9 w-24 sm:w-28 relative grayscale hover:grayscale-0 transition-all">
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
