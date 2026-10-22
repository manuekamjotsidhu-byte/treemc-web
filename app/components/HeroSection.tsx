'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Server,
  ShieldCheck,
  Zap,
  Cpu,
  HardDrive,
  Network,
  Check,
  ChevronRight,
  Gamepad2,
  Monitor,
  Activity
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
  ping: string
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
  cpu: string
  allocations: string
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
    badge: "Paper • Fabric • Purpur",
    cpu: "AMD Ryzen™ 9 9950X / 5900X",
    allocations: "2 to 8 Ports (1 Main + Extra)",
    storage: "Gen4 NVMe SSDs",
    ddos: "17+ Tbit/s BGP Shield",
    basePrice: 99,
    link: "/games",
    locations: [
      {
        name: "India (Noida)",
        flag: "/flags/india.png",
        ping: "< 8ms",
        cpu: "AMD Ryzen™ 9 9950X / Intel Xeon",
        ram: "2 GB - 32 GB Scalable",
        storage: "Enterprise Gen4 NVMe",
        ddos: "Sub-15ms Anti-DDoS Scrubbing",
        basePrice: 99,
        link: "/games?game=minecraft&location=india"
      },
      {
        name: "Germany (FRA)",
        flag: "/flags/germany.png",
        ping: "< 24ms",
        cpu: "AMD Ryzen™ 9 5900X / EPYC",
        ram: "2 GB - 32 GB Scalable",
        storage: "Pure NVMe SSD Storage",
        ddos: "European Edge 2+ Tbit/s Scrubbing",
        basePrice: 99,
        link: "/games?game=minecraft&location=germany"
      },
      {
        name: "Singapore",
        flag: "/flags/singapore.png",
        ping: "< 28ms",
        cpu: "AMD EPYC™ 9654 Compute",
        ram: "2 GB - 32 GB Scalable",
        storage: "Enterprise Gen4 NVMe",
        ddos: "Low-Latency Anycast Scrubbing",
        basePrice: 99,
        link: "/games?game=minecraft&location=singapore"
      },
      {
        name: "Dubai (UAE)",
        flag: "/flags/dubai.png",
        ping: "< 32ms",
        cpu: "Intel® Xeon® & AMD EPYC™",
        ram: "2 GB - 32 GB Scalable",
        storage: "Ultra Gen4 NVMe SSD",
        ddos: "Middle East Low-Ping Shield",
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
    cpu: "AMD EPYC™ & Intel® Xeon®",
    allocations: "Dedicated IPv4 + IPv6",
    storage: "Up to 500 GB NVMe",
    ddos: "17+ Tbit/s Anti-DDoS",
    basePrice: 399,
    link: "/vps",
    locations: [
      {
        name: "India (Noida)",
        flag: "/flags/india.png",
        ping: "< 8ms",
        cpu: "Intel® Xeon® & AMD EPYC™",
        ram: "4 GB - 32 GB Memory",
        storage: "Enterprise NVMe SSD",
        ddos: "17+ Tbit/s DDoS Protection",
        basePrice: 399,
        link: "/vps?location=india"
      },
      {
        name: "Singapore",
        flag: "/flags/singapore.png",
        ping: "< 28ms",
        cpu: "AMD EPYC™ Cloud Hypervisor",
        ram: "4 GB - 32 GB Memory",
        storage: "Pure NVMe SSD Storage",
        ddos: "Asia Anycast 2+ Tbit/s",
        basePrice: 1399,
        link: "/vps?location=singapore"
      },
      {
        name: "Germany",
        flag: "/flags/germany.png",
        ping: "< 24ms",
        cpu: "Intel® Xeon® & AMD EPYC™",
        ram: "4 GB - 32 GB Memory",
        storage: "Enterprise NVMe Storage",
        ddos: "Voxility & OVH Mitigation",
        basePrice: 449,
        link: "/vps?location=germany"
      }
    ]
  },
  {
    id: "vds",
    label: "Dedicated VDS",
    icon: Cpu,
    badge: "100% Dedicated Cores",
    cpu: "AMD EPYC™ (Up to 12 Dedicated)",
    allocations: "Dedicated Slices + IPv4",
    storage: "Up to 400 GB NVMe",
    ddos: "Hardware Firewall Included",
    basePrice: 1699,
    link: "/dedicated",
    locations: [
      {
        name: "India (Noida - Intel)",
        flag: "/flags/india.png",
        ping: "< 8ms",
        cpu: "Intel® Xeon® Dedicated Cores",
        ram: "Up to 64 GB Dedicated RAM",
        storage: "Up to 400 GB NVMe SSD",
        ddos: "Multi-Layer BGP Mitigation",
        basePrice: 1699,
        link: "/dedicated?cpu=xeon-vds"
      },
      {
        name: "India (Delhi - AMD)",
        flag: "/flags/india.png",
        ping: "< 10ms",
        cpu: "AMD EPYC™ Dedicated Cores",
        ram: "Up to 64 GB Dedicated RAM",
        storage: "Up to 400 GB NVMe SSD",
        ddos: "Multi-Layer BGP Mitigation",
        basePrice: 1999,
        link: "/dedicated?cpu=epyc-vds"
      }
    ]
  },
  {
    id: "rdp",
    label: "Windows RDP",
    icon: Monitor,
    badge: "Administrator Access",
    cpu: "Intel® Xeon® (Up to 16 vCores)",
    allocations: "Dedicated Remote Desktop",
    storage: "Up to 400 GB NVMe",
    ddos: "Advanced L4/L7 Mitigation",
    basePrice: 548,
    link: "/rdp",
    locations: [
      {
        name: "India (Noida)",
        flag: "/flags/india.png",
        ping: "< 8ms",
        cpu: "Intel® Xeon® High-Clock",
        ram: "Up to 64 GB Memory",
        storage: "Up to 400 GB NVMe SSD",
        ddos: "Advanced L4/L7 Mitigation",
        basePrice: 548,
        link: "/rdp"
      }
    ]
  }
]

export default function HeroSection() {
  const { convertPrice } = useCurrency()
  const [selectedServiceId, setSelectedServiceId] = useState("minecraft")

  const currentService = services.find((s) => s.id === selectedServiceId) || services[0]
  const [selectedLocationName, setSelectedLocationName] = useState(currentService.locations[0]?.name || "India (Noida)")

  const handleServiceChange = (id: string) => {
    setSelectedServiceId(id)
    const svc = services.find((s) => s.id === id)
    if (svc && svc.locations.length > 0) {
      setSelectedLocationName(svc.locations[0].name)
    }
  }

  const activeLocation = currentService.locations.find((l) => l.name === selectedLocationName) || currentService.locations[0]

  const activeCpu = activeLocation?.cpu || currentService.cpu
  const activeStorage = activeLocation?.storage || currentService.storage
  const activeDdos = activeLocation?.ddos || currentService.ddos
  const activePrice = activeLocation?.basePrice ?? currentService.basePrice
  const activeLink = activeLocation?.link || currentService.link

  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-gray-50 dark:bg-[#090a10] transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Command Narrative Column (Asymmetric Bento 60%) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Indicator Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Edge Nodes Operational • Anycast Routing Active</span>
            </motion.div>

            {/* Authoritative Primary Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black orbitron-font text-gray-900 dark:text-white tracking-tight leading-[1.12] mb-6"
            >
              Enterprise Game Servers &amp; High-Frequency Cloud VPS
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Deploy unmetered, low-latency Minecraft nodes and enterprise KVM cloud servers powered by AMD Ryzen™ 9 9950X and Intel Xeon processors with 17+ Tbit/s DDoS mitigation and authentic port allocations.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                href="/games"
                className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-gray-950 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm group"
              >
                <span>Deploy A Server</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/vps"
                className="px-7 py-3.5 rounded-xl bg-white dark:bg-[#111420] hover:bg-gray-100 dark:hover:bg-[#171b2c] border border-gray-200 dark:border-white/[0.08] text-gray-900 dark:text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2 active:scale-[0.98]"
              >
                <Server className="w-4 h-4 text-emerald-500" />
                <span>Explore Cloud VPS</span>
              </Link>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-6 border-t border-gray-200/80 dark:border-white/[0.08]"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sub-15ms Edge Nodes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>2 to 8 Ports per Node</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Enterprise Gen4 NVMe</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Instant Pterodactyl Deploy</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Infrastructure Telemetry Hub (Asymmetric Bento 40%) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-white dark:bg-[#111420] border border-gray-200 dark:border-white/[0.08] shadow-xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
              
              {/* Top Service Selector Rail */}
              <div className="p-3 bg-gray-100/70 dark:bg-[#171b2c] border-b border-gray-200 dark:border-white/[0.06] flex gap-1.5 overflow-x-auto">
                {services.map((svc) => {
                  const isSelected = selectedServiceId === svc.id
                  const Icon = svc.icon
                  return (
                    <button
                      key={svc.id}
                      onClick={() => handleServiceChange(svc.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        isSelected
                          ? "bg-emerald-500 text-gray-950 shadow-xs"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/60 dark:hover:bg-white/[0.04]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{svc.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Node Telemetry Header */}
              <div className="p-5 pb-3 border-b border-gray-100 dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Active Telemetry Matrix
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white orbitron-font mt-0.5">
                    {currentService.label} Node Config
                  </h3>
                </div>

                <span className="px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  {currentService.badge}
                </span>
              </div>

              {/* 2x2 Telemetry Matrix */}
              <div className="p-5 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#171b2c] border border-gray-200/60 dark:border-white/[0.05]">
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-[11px] font-mono uppercase mb-1">
                    <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Processor</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                    {activeCpu.split(" ")[0]} {activeCpu.split(" ")[1] || ""}
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 block truncate mt-0.5">
                    High Single-Thread Clock
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#171b2c] border border-gray-200/60 dark:border-white/[0.05]">
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-[11px] font-mono uppercase mb-1">
                    <Network className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Allocations</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                    {currentService.allocations}
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 block truncate mt-0.5">
                    Full Port Control
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#171b2c] border border-gray-200/60 dark:border-white/[0.05]">
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-[11px] font-mono uppercase mb-1">
                    <HardDrive className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Storage I/O</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                    {activeStorage}
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 block truncate mt-0.5">
                    7,000 MB/s Read Speed
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#171b2c] border border-gray-200/60 dark:border-white/[0.05]">
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-[11px] font-mono uppercase mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Mitigation</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate">
                    {activeDdos}
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 block truncate mt-0.5">
                    17+ Tbit/s BGP Shield
                  </span>
                </div>
              </div>

              {/* Edge Node Datacenter Selector */}
              <div className="px-5 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Datacenter Edge Latency
                  </label>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                    {activeLocation?.ping}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {currentService.locations.map((loc) => {
                    const isLocActive = activeLocation?.name === loc.name
                    return (
                      <button
                        key={loc.name}
                        onClick={() => setSelectedLocationName(loc.name)}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          isLocActive
                            ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
                            : "bg-gray-50 dark:bg-[#171b2c] border border-gray-200/60 dark:border-white/[0.05] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Image
                            src={loc.flag}
                            alt=""
                            aria-hidden="true"
                            width={16}
                            height={12}
                            className="rounded-xs object-cover"
                          />
                          <span className="truncate">{loc.name}</span>
                        </div>
                        <span className="font-mono text-[11px] opacity-80">{loc.ping}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-5 bg-gray-50/80 dark:bg-[#171b2c]/60 border-t border-gray-200/80 dark:border-white/[0.06] flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 block font-mono">Starting at</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black orbitron-font tabular-nums text-gray-900 dark:text-white">
                      {convertPrice(activePrice.toString())}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">/mo</span>
                  </div>
                </div>

                <Link
                  href={activeLink}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs sm:text-sm active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-sm group"
                >
                  <span>Configure Node</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Enterprise Partners Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
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