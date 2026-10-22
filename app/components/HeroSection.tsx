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

interface ServiceLocation {
  name: string
  flag: string
  cpu?: string
  ram?: string
  storage?: string
  ddos?: string
  basePrice?: number
  link?: string
}

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
  locations: ServiceLocation[]
}

const services: ServiceConfig[] = [
  {
    id: "minecraft",
    label: "Minecraft",
    icon: Gamepad2,
    badge: "Popular Game",
    image: "/banners/minecraft-banners.webp",
    cpu: "AMD Ryzen™ 9 9950X / 5900X",
    ram: "2 GB - 32 GB Scalable",
    storage: "Gen4 NVMe SSDs",
    ddos: "17+ Tbit/s Protection",
    basePrice: 99,
    link: "/games",
    locations: [
      {
        name: "India (Noida)",
        flag: "/flags/india.png",
        cpu: "Intel® Xeon® & AMD EPYC™",
        ram: "High-Frequency Dedicated",
        storage: "Gen4 NVMe SSDs",
        ddos: "17+ Tbit/s Sub-15ms Protection",
        basePrice: 99,
        link: "/games?game=minecraft&location=india"
      },
      {
        name: "Germany",
        flag: "/flags/germany.png",
        cpu: "Intel® Xeon® & AMD EPYC™",
        ram: "High-Frequency Dedicated",
        storage: "Enterprise Gen4 NVMe",
        ddos: "Voxility & OVH 2+ Tbit/s Shield",
        basePrice: 99,
        link: "/games?game=minecraft&location=germany"
      },
      {
        name: "Singapore",
        flag: "/flags/singapore.png",
        cpu: "AMD EPYC™ & Intel® Xeon®",
        ram: "High-Frequency Dedicated",
        storage: "Pure NVMe SSD Storage",
        ddos: "Low-Latency Anycast Scrubbing",
        basePrice: 99,
        link: "/games?game=minecraft&location=singapore"
      },
      {
        name: "Dubai (UAE)",
        flag: "/flags/dubai.png",
        cpu: "Intel® Xeon® & AMD EPYC™",
        ram: "High-Frequency Dedicated",
        storage: "Ultra Gen4 NVMe SSD",
        ddos: "Middle East Sub-20ms DDoS Shield",
        basePrice: 199,
        link: "/games?game=minecraft&location=dubai"
      }
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
      {
        name: "India",
        flag: "/flags/india.png",
        cpu: "Intel® Xeon® & AMD EPYC™",
        ram: "High-Frequency DDR4 / DDR5 ECC",
        storage: "Up to 400 GB Enterprise NVMe",
        ddos: "17+ Tbit/s DDoS Scrubbing",
        basePrice: 399,
        link: "/vps?location=india"
      },
      {
        name: "Singapore",
        flag: "/flags/singapore.png",
        cpu: "AMD EPYC™ Enterprise Cloud",
        ram: "High-Frequency DDR4 ECC",
        storage: "Up to 500 GB Pure NVMe SSD",
        ddos: "Asia-Pacific Anycast Scrubbing",
        basePrice: 1399,
        link: "/vps?location=singapore"
      },
      {
        name: "Germany",
        flag: "/flags/germany.png",
        cpu: "Intel® Xeon® & AMD EPYC™",
        ram: "High-Frequency DDR4 ECC",
        storage: "Up to 400 GB NVMe Storage",
        ddos: "Voxility & OVH 2+ Tbit/s Shield",
        basePrice: 449,
        link: "/vps?location=germany"
      },
      {
        name: "USA",
        flag: "/flags/usa.png",
        cpu: "AMD EPYC™ High-Performance Compute",
        ram: "DDR4 ECC Server Memory",
        storage: "Up to 500 GB Gen4 NVMe",
        ddos: "North America Anycast 2+ Tbit/s",
        basePrice: 999,
        link: "/vps?location=usa"
      }
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
      {
        name: "India (Noida - Intel)",
        flag: "/flags/india.png",
        cpu: "Intel® Xeon® (Up to 12 Dedicated)",
        ram: "Up to 64 GB DDR4 ECC RAM",
        storage: "Up to 400 GB NVMe SSD",
        ddos: "Advanced DDoS Mitigation",
        basePrice: 1699,
        link: "/dedicated?cpu=xeon-vds"
      },
      {
        name: "India (Delhi - AMD)",
        flag: "/flags/india.png",
        cpu: "AMD EPYC™ (Up to 12 Dedicated)",
        ram: "Up to 64 GB DDR4 ECC RAM",
        storage: "Up to 400 GB NVMe SSD",
        ddos: "Advanced DDoS Mitigation",
        basePrice: 1999,
        link: "/dedicated?cpu=epyc-vds"
      }
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
      {
        name: "India (Noida)",
        flag: "/flags/india.png",
        cpu: "Intel® Xeon® (Up to 16 vCores)",
        ram: "Up to 64 GB DDR4 ECC",
        storage: "Up to 400 GB NVMe SSD",
        ddos: "Advanced Multi-Layer Mitigation",
        basePrice: 548,
        link: "/rdp"
      }
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
      {
        name: "India",
        flag: "/flags/india.png",
        cpu: "Ultra-Fast Multi-Core vCPU",
        ram: "DDR4 ECC Allocation",
        storage: "Fast NVMe Web Storage (cPanel)",
        ddos: "Layer 7 Web Shield",
        basePrice: 100,
        link: "/webhosting"
      },
      {
        name: "Germany",
        flag: "/flags/germany.png",
        cpu: "High-Frequency Cloud vCPU",
        ram: "DDR4 ECC Memory Pool",
        storage: "Pure NVMe SSD Storage",
        ddos: "European Edge DDoS Scrubbing",
        basePrice: 100,
        link: "/webhosting"
      }
    ]
  }
]

export default function HeroSection() {
  const { convertPrice } = useCurrency()
  const [selectedServiceId, setSelectedServiceId] = useState("minecraft")

  const currentService = services.find((s) => s.id === selectedServiceId) || services[0]
  const [selectedLocation, setSelectedLocation] = useState(currentService.locations[0]?.name || "India (Noida)")

  const handleServiceChange = (id: string) => {
    setSelectedServiceId(id)
    const svc = services.find((s) => s.id === id)
    if (svc && svc.locations.length > 0) {
      setSelectedLocation(svc.locations[0].name)
    }
  }

  const activeLocation = currentService.locations.find((l) => l.name === selectedLocation) || currentService.locations[0]

  const activeCpu = activeLocation?.cpu || currentService.cpu
  const activeRam = activeLocation?.ram || currentService.ram
  const activeStorage = activeLocation?.storage || currentService.storage
  const activeDdos = activeLocation?.ddos || currentService.ddos
  const activePrice = activeLocation?.basePrice ?? currentService.basePrice
  const activeLink = activeLocation?.link || currentService.link

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      {/* Subtle Ambient Lighting */}
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
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Enterprise Game & Cloud Infrastructure</span>
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
                <span>Enterprise Gen4 NVMe</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sub-15ms Low Latency</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Hardware Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
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
                    <motion.span
                      key={`cpu-${selectedServiceId}-${activeLocation?.name}`}
                      initial={{ opacity: 0, x: 4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-gray-900 dark:text-white text-right"
                    >
                      {activeCpu}
                    </motion.span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Zap className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>Memory</span>
                    </span>
                    <motion.span
                      key={`ram-${selectedServiceId}-${activeLocation?.name}`}
                      initial={{ opacity: 0, x: 4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-gray-900 dark:text-white text-right"
                    >
                      {activeRam}
                    </motion.span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <HardDrive className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>Storage</span>
                    </span>
                    <motion.span
                      key={`storage-${selectedServiceId}-${activeLocation?.name}`}
                      initial={{ opacity: 0, x: 4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-gray-900 dark:text-white text-right"
                    >
                      {activeStorage}
                    </motion.span>
                  </div>

                  <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Mitigation</span>
                    </span>
                    <motion.span
                      key={`ddos-${selectedServiceId}-${activeLocation?.name}`}
                      initial={{ opacity: 0, x: 4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-gray-900 dark:text-white text-right"
                    >
                      {activeDdos}
                    </motion.span>
                  </div>
                </div>

                {/* Location Selection Pills */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Available Datacenters
                    </label>
                    <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      {activeLocation?.name}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentService.locations.map((loc) => {
                      const isLocActive = activeLocation?.name === loc.name
                      return (
                        <button
                          key={loc.name}
                          onClick={() => setSelectedLocation(loc.name)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            isLocActive
                              ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-bold shadow-sm ring-1 ring-emerald-500/30 scale-[1.02]"
                              : "bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20"
                          }`}
                        >
                          <Image
                            src={loc.flag}
                            alt=""
                            aria-hidden="true"
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
                      <motion.span
                        key={`price-${selectedServiceId}-${activeLocation?.name}`}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-2xl font-black orbitron-font text-gray-900 dark:text-white"
                      >
                        {convertPrice(activePrice.toString())}
                      </motion.span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">/month</span>
                    </div>
                  </div>

                  <Link
                    href={activeLink}
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
