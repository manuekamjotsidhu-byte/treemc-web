'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Server,
  ShieldCheck,
  Zap,
  Cpu,
  HardDrive,
  Globe,
  Check,
  ChevronRight,
  Gamepad2,
  Monitor
} from "lucide-react"
import { useCurrency } from "./ui/CurrencySelector"

const partners = [
  { name: "AMD EPYC", src: "/cpu/epyc.png" },
  { name: "Intel", src: "/advertisement/intel.png" },
  { name: "Samsung NVMe", src: "/advertisement/samsung.png" },
  { name: "Pterodactyl", src: "/advertisement/pterodactyl.png" },
  { name: "Hetzner", src: "/advertisement/hetzner.png" },
  { name: "NeoProtect", src: "/advertisement/neoprotect.png" },
]

interface ServiceConfig {
  id: string
  label: string
  icon: React.ElementType
  badge: string
  image: string
  cpu: string
  ram: string
  storage: string
  ddos: string
  basePrice: number
  link: string
  locations: { name: string; flag: string }[]
}

const services: ServiceConfig[] = [
  {
    id: "minecraft",
    label: "Minecraft",
    icon: Gamepad2,
    badge: "Popular Game",
    image: "/banners/minecraft-banners.webp",
    cpu: "AMD Ryzen™ 9 9950X / 5900X",
    ram: "DDR4 / DDR5 ECC",
    storage: "Gen4 NVMe SSDs",
    ddos: "17+ Tbit/s Protection",
    basePrice: 99,
    link: "/games",
    locations: [
      { name: "India (Noida)", flag: "/flags/india.png" },
      { name: "Germany", flag: "/flags/germany.png" },
      { name: "Singapore", flag: "/flags/singapore.png" }
    ]
  },
  {
    id: "vps",
    label: "Cloud VPS",
    icon: Server,
    badge: "KVM Virtualization",
    image: "/vps.png",
    cpu: "AMD EPYC™ & Intel® Xeon®",
    ram: "High-Frequency DDR4 ECC",
    storage: "Enterprise NVMe SSD",
    ddos: "Standard & Premium Tier",
    basePrice: 399,
    link: "/vps",
    locations: [
      { name: "India", flag: "/flags/india.png" },
      { name: "Singapore", flag: "/flags/singapore.png" },
      { name: "Germany", flag: "/flags/germany.png" },
      { name: "USA", flag: "/flags/usa.png" }
    ]
  },
  {
    id: "vds",
    label: "Dedicated VDS",
    icon: Cpu,
    badge: "100% Dedicated Slices",
    image: "/showcase/3d/vds-hosting.jpg",
    cpu: "AMD EPYC™ & Intel® Xeon®",
    ram: "Up to 64 GB DDR4 ECC",
    storage: "Up to 400 GB NVMe SSD",
    ddos: "Advanced DDoS Mitigation",
    basePrice: 1699,
    link: "/dedicated",
    locations: [
      { name: "Noida & Delhi", flag: "/flags/india.png" }
    ]
  },
  {
    id: "rdp",
    label: "Windows RDP",
    icon: Monitor,
    badge: "Full Administrator",
    image: "/showcase/3d/rdp-server.jpg",
    cpu: "Intel® Xeon® (Up to 16 vCores)",
    ram: "Up to 64 GB DDR4 ECC",
    storage: "Up to 400 GB NVMe SSD",
    ddos: "Advanced DDoS Mitigation",
    basePrice: 548,
    link: "/rdp",
    locations: [
      { name: "Noida, India", flag: "/flags/india.png" }
    ]
  },
  {
    id: "web",
    label: "Web Hosting",
    icon: Globe,
    badge: "cPanel & Free SSL",
    image: "/banners/webhosting.png",
    cpu: "Ultra-Fast Multi-Core",
    ram: "DDR4 ECC Allocation",
    storage: "NVMe Web Storage",
    ddos: "Layer 7 Web Shield",
    basePrice: 100,
    link: "/webhosting",
    locations: [
      { name: "India", flag: "/flags/india.png" },
      { name: "Germany", flag: "/flags/germany.png" }
    ]
  }
]

export default function HeroSection() {
  const { convertPrice } = useCurrency()
  const [selectedServiceId, setSelectedServiceId] = useState("minecraft")

  const currentService = services.find((s) => s.id === selectedServiceId) || services[0]
  const [selectedLocation, setSelectedLocation] = useState(currentService.locations[0]?.name || "India")

  const handleServiceChange = (id: string) => {
    setSelectedServiceId(id)
    const svc = services.find((s) => s.id === id)
    if (svc && svc.locations.length > 0) {
      setSelectedLocation(svc.locations[0].name)
    }
  }

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      {/* Subtle Ambient Lighting (No oversized purple blobs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/[0.07] rounded-full blur-[130px]" />
        <div className="absolute top-1/4 right-10 w-[400px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear, High-Impact Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All Systems Operational • 99.9% Uptime SLA</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black orbitron-font text-gray-900 dark:text-white tracking-tight leading-[1.12] mb-6"
            >
              Host High-Performance{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Game Servers &amp; Cloud VPS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Deploy ultra-low latency Minecraft, Steam game nodes, and enterprise Cloud VPS powered by AMD Ryzen™ and Intel Xeon hardware with multi-layer 17+ Tbit/s DDoS protection.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                href="/games"
                className="px-7 py-3.5 rounded-xl button-primary text-button-primary font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
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
            </motion.div>

            {/* Inline Trust Highlights Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-6 border-t border-gray-200/80 dark:border-white/[0.08]"
            >
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>17+ Tbit/s DDoS Shield</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>24/7 Expert Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Real Interactive Server Configurator Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white/85 dark:bg-[#0e111a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
              
              {/* Service Tab Switcher */}
              <div className="p-3 bg-gray-100/80 dark:bg-white/[0.03] border-b border-gray-200/80 dark:border-white/[0.08] flex gap-1.5 overflow-x-auto">
                {services.map((svc) => {
                  const isSelected = selectedServiceId === svc.id
                  const Icon = svc.icon
                  return (
                    <button
                      key={svc.id}
                      onClick={() => handleServiceChange(svc.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        isSelected
                          ? "bg-emerald-500 text-gray-950 shadow-md shadow-emerald-500/20"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/60 dark:hover:bg-white/[0.05]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{svc.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Live Image Header with Badge */}
              <div className="relative h-40 w-full overflow-hidden bg-gray-900">
                <Image
                  src={currentService.image}
                  alt={currentService.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-[11px] font-bold text-gray-950 bg-emerald-400 rounded-full shadow-sm">
                    {currentService.badge}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-black orbitron-font leading-tight">
                      {currentService.label}
                    </h3>
                    <span className="text-xs text-gray-300 font-medium">Enterprise Hosting Infrastructure</span>
                  </div>
                </div>
              </div>

              {/* Service Hardware Specifications */}
              <div className="p-5 space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Processor</span>
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">{currentService.cpu}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Zap className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>Memory</span>
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">{currentService.ram}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <HardDrive className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>Storage</span>
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">{currentService.storage}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Mitigation</span>
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">{currentService.ddos}</span>
                  </div>
                </div>

                {/* Location Selection Pills */}
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">
                    Available Datacenters
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {currentService.locations.map((loc) => {
                      const isLocActive = selectedLocation === loc.name
                      return (
                        <button
                          key={loc.name}
                          onClick={() => setSelectedLocation(loc.name)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            isLocActive
                              ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-bold"
                              : "bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          }`}
                        >
                          <Image
                            src={loc.flag}
                            alt={loc.name}
                            width={16}
                            height={12}
                            className="rounded-sm object-cover"
                          />
                          <span>{loc.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 block">Starting at</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black orbitron-font text-gray-900 dark:text-white">
                        {convertPrice(currentService.basePrice.toString())}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">/month</span>
                    </div>
                  </div>

                  <Link
                    href={currentService.link}
                    className="px-6 py-2.5 rounded-xl button-primary text-button-primary font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 group"
                  >
                    <span>Configure Server</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Partners Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-200/70 dark:border-white/[0.08]"
        >
          <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
            Enterprise Cloud &amp; Hardware Infrastructure
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-100 transition-opacity">
            {partners.map((partner, index) => (
              <div key={index} className="h-8 w-24 sm:w-28 relative grayscale hover:grayscale-0 transition-all">
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
