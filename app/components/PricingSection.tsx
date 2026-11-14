'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Cpu,
  HardDrive,
  MemoryStick,
  Network,
  Archive,
  Database,
  Sliders,
  ShieldCheck,
  Globe,
  ArrowRight,
  Gamepad2,
  Server,
  Sparkles,
  RefreshCw
} from "lucide-react"
import { CurrencySelector, useCurrency } from "./ui/CurrencySelector"

interface PlanItem {
  id: string
  name: string
  subtitle: string
  badge?: string
  price: number
  blockImage: string
  cpu: string
  ram: string
  storage: string
  backups?: string
  bandwidth?: string
  ports: string
  databases?: string
  virtualization?: string
  panel: string
  ddos: string
  link: string
}

// Starter Minecraft Tiers
const minecraftStarterPlans: PlanItem[] = [
  {
    id: "mc-gravel",
    name: "Gravel",
    subtitle: "Minecraft Server",
    price: 99,
    blockImage: "/blocks/gravel.png",
    cpu: "100% CPU",
    ram: "2 GB",
    storage: "10 GB NVMe",
    backups: "1 Backup",
    ports: "2 Ports (1 Main + 1 Extra)",
    databases: "1 Database",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/wbH8ZVAsYg"
  },
  {
    id: "mc-andesite",
    name: "Andesite",
    subtitle: "Minecraft Server",
    price: 149,
    blockImage: "/blocks/andesite.png",
    cpu: "100% CPU",
    ram: "3 GB",
    storage: "15 GB NVMe",
    backups: "1 Backup",
    ports: "2 Ports (1 Main + 1 Extra)",
    databases: "2 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/wbH8ZVAsYg"
  },
  {
    id: "mc-cobblestone",
    name: "Cobblestone",
    subtitle: "Minecraft Server",
    badge: "POPULAR",
    price: 249,
    blockImage: "/blocks/cobblestone.png",
    cpu: "150% CPU",
    ram: "4 GB",
    storage: "20 GB NVMe",
    backups: "1 Backup",
    ports: "3 Ports (1 Main + 2 Extra)",
    databases: "2 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/wbH8ZVAsYg"
  },
  {
    id: "mc-deepslate",
    name: "Deepslate",
    subtitle: "Minecraft Server",
    price: 349,
    blockImage: "/blocks/deepslate.png",
    cpu: "200% CPU",
    ram: "5 GB",
    storage: "25 GB NVMe",
    backups: "2 Backups",
    ports: "3 Ports (1 Main + 2 Extra)",
    databases: "3 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/wbH8ZVAsYg"
  }
]

// Performance Minecraft Tiers
const minecraftPerformancePlans: PlanItem[] = [
  {
    id: "mc-iron",
    name: "Iron",
    subtitle: "Minecraft Server",
    price: 549,
    blockImage: "/blocks/iron.png",
    cpu: "250% CPU",
    ram: "8 GB",
    storage: "40 GB NVMe",
    backups: "2 Backups",
    ports: "4 Ports (1 Main + 3 Extra)",
    databases: "3 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/wbH8ZVAsYg"
  },
  {
    id: "mc-gold",
    name: "Gold",
    subtitle: "Minecraft Server",
    badge: "RECOMMENDED",
    price: 849,
    blockImage: "/blocks/gold.png",
    cpu: "300% CPU",
    ram: "12 GB",
    storage: "60 GB NVMe",
    backups: "3 Backups",
    ports: "5 Ports (1 Main + 4 Extra)",
    databases: "4 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/wbH8ZVAsYg"
  },
  {
    id: "mc-diamond",
    name: "Diamond",
    subtitle: "Minecraft Server",
    price: 1149,
    blockImage: "/blocks/diamond.png",
    cpu: "400% CPU",
    ram: "16 GB",
    storage: "80 GB NVMe",
    backups: "3 Backups",
    ports: "6 Ports (1 Main + 5 Extra)",
    databases: "5 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/wbH8ZVAsYg"
  },
  {
    id: "mc-netherite",
    name: "Netherite",
    subtitle: "Minecraft Server",
    badge: "ULTIMATE",
    price: 2199,
    blockImage: "/blocks/netherite.png",
    cpu: "600% CPU",
    ram: "32 GB",
    storage: "160 GB NVMe",
    backups: "5 Backups",
    ports: "8 Ports (1 Main + 7 Extra)",
    databases: "8 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/wbH8ZVAsYg"
  }
]

// Approved Featured VPS Landing Plans (Calculated with new pricing)
const cloudVpsFeaturedPlans: PlanItem[] = [
  {
    id: "in-xeon-xs",
    name: "Xeon Standard XS",
    subtitle: "India Data Center",
    price: 359,
    blockImage: "/cpu/intel.png",
    cpu: "2 vCores (Intel® Xeon®)",
    ram: "6 GB DDR4 ECC",
    storage: "50 GB Enterprise NVMe",
    bandwidth: "10 Gbps Port",
    ports: "1 Dedicated IPv4",
    virtualization: "Isolated KVM",
    panel: "Full Root & SSH",
    ddos: "Always-On DDoS Shield",
    link: "/order?plan=in-xeon-xs"
  },
  {
    id: "in-xeon-m",
    name: "Xeon Standard M",
    subtitle: "India Data Center",
    price: 719,
    blockImage: "/cpu/intel.png",
    cpu: "4 vCores (Intel® Xeon®)",
    ram: "12 GB DDR4 ECC",
    storage: "100 GB Enterprise NVMe",
    bandwidth: "10 Gbps Port",
    ports: "1 Dedicated IPv4",
    virtualization: "Isolated KVM",
    panel: "Full Root & SSH",
    ddos: "Always-On DDoS Shield",
    link: "/order?plan=in-xeon-m"
  },
  {
    id: "in-xeon-xl",
    name: "Xeon Standard XL",
    subtitle: "India Data Center",
    badge: "RECOMMENDED",
    price: 1429,
    blockImage: "/cpu/intel.png",
    cpu: "6 vCores (Intel® Xeon®)",
    ram: "24 GB DDR4 ECC",
    storage: "200 GB Enterprise NVMe",
    bandwidth: "10 Gbps Port",
    ports: "1 Dedicated IPv4",
    virtualization: "High-Frequency KVM",
    panel: "Full Root & SSH",
    ddos: "Always-On DDoS Shield",
    link: "/order?plan=in-xeon-xl"
  },
  {
    id: "in-ryzen-xl",
    name: "AMD Ryzen XL",
    subtitle: "India Data Center",
    badge: "PERFORMANCE",
    price: 3149,
    blockImage: "/cpu/ryzen9.png",
    cpu: "5 vCores (Ryzen 9 9950X / 5900X)",
    ram: "24 GB DDR5 ECC",
    storage: "180 GB Gen4 NVMe",
    bandwidth: "10 Gbps Port",
    ports: "1 Dedicated IPv4",
    virtualization: "High-Compute KVM",
    panel: "Full Root & SSH",
    ddos: "OVH VAC up to 17 Tbps",
    link: "/order?plan=in-ryzen-xl"
  }
]

export default function PricingSection() {
  // Dynamic periodic menu: 1st Games ("minecraft"), then VPS ("cloud") periodically
  const [activeTab, setActiveTab] = useState<"minecraft" | "cloud">("minecraft")
  const [mcTierGroup, setMcTierGroup] = useState<"starter" | "performance">("starter")
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()

  const ROTATION_INTERVAL_MS = 7000 // 7 seconds per view

  useEffect(() => {
    if (isPaused) return

    const tickInterval = 100 // update progress bar every 100ms
    const step = (tickInterval / ROTATION_INTERVAL_MS) * 100

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Switch tab periodically: 1st Games -> then VPS -> then Games
          setActiveTab((current) => (current === "minecraft" ? "cloud" : "minecraft"))
          return 0
        }
        return prev + step
      })
    }, tickInterval)

    return () => clearInterval(timer)
  }, [isPaused, activeTab])

  // Manual tab selection resets progress
  const handleTabSelect = (tab: "minecraft" | "cloud") => {
    setActiveTab(tab)
    setProgress(0)
  }

  const displayedPlans = activeTab === "minecraft"
    ? (mcTierGroup === "starter" ? minecraftStarterPlans : minecraftPerformancePlans)
    : cloudVpsFeaturedPlans

  return (
    <section 
      id="plans" 
      className="bg-gray-50 dark:bg-[#090a10] py-20 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Transparent Infrastructure Hosting</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 orbitron-font tracking-tight">
              Featured Hosting Plans
            </h2>
            <p className="text-sm max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Guaranteed compute allocations with enterprise NVMe storage and continuous DDoS mitigation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Dynamic Auto-Rotating Menu (1st Games, then VPS periodically) */}
            <div className="relative p-1 rounded-xl bg-gray-200/60 dark:bg-[#111420] border border-gray-300/60 dark:border-white/[0.08] flex items-center">
              
              {/* Active Tab Progress Indicator Bar */}
              <div 
                className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 transition-all duration-100 rounded-full"
                style={{
                  width: `${progress}%`,
                  opacity: isPaused ? 0.3 : 0.8
                }}
              />

              <button
                type="button"
                onClick={() => handleTabSelect("minecraft")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "minecraft"
                    ? "bg-emerald-500 text-gray-950 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>1. Game Servers</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleTabSelect("cloud")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "cloud"
                    ? "bg-emerald-500 text-gray-950 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Server className="w-4 h-4" />
                <span>2. Cloud VPS</span>
              </button>

              <div 
                className="pl-2 pr-1 hidden sm:flex items-center text-[10px] font-mono text-gray-400 cursor-help"
                title={isPaused ? "Rotation paused on hover" : "Dynamic rotation: 1st Games, then VPS periodically"}
              >
                <RefreshCw className={`w-3 h-3 ${isPaused ? 'opacity-40' : 'animate-spin opacity-80'}`} style={{ animationDuration: '6s' }} />
              </div>
            </div>

            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              className="w-full sm:w-44"
            />
          </div>
        </motion.div>

        {/* Sub-tier Switcher for Minecraft */}
        {activeTab === "minecraft" && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200/80 dark:border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Scale Tier:</span>
              <div className="inline-flex p-0.5 rounded-lg bg-gray-200/50 dark:bg-[#111420] border border-gray-300/60 dark:border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setMcTierGroup("starter")}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    mcTierGroup === "starter"
                      ? "bg-white dark:bg-[#1a1f30] text-gray-900 dark:text-white shadow-xs"
                      : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Starter (2 - 5 GB)
                </button>
                <button
                  type="button"
                  onClick={() => setMcTierGroup("performance")}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    mcTierGroup === "performance"
                      ? "bg-white dark:bg-[#1a1f30] text-gray-900 dark:text-white shadow-xs"
                      : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-emerald-500" />
                  <span>Performance (8 - 32 GB)</span>
                </button>
              </div>
            </div>

            <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline font-mono">
              2 to 8 Ports per node • Instant Provisioning
            </span>
          </div>
        )}

        {/* VPS Banner Bar when on Cloud tab */}
        {activeTab === "cloud" && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200/80 dark:border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Featured VPS Plans:</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Ground-Level KVM Compute
              </span>
            </div>

            <Link
              href="/vps"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 group font-mono"
            >
              <span>Explore All 56 Plans Across 5 Locations</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (activeTab === "minecraft" ? mcTierGroup : "vps")}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {displayedPlans.map((plan) => {
              const isRecommended = plan.badge === "RECOMMENDED" || plan.badge === "POPULAR" || plan.badge === "ULTIMATE"

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 bg-white dark:bg-[#0c0f18] hover:shadow-2xl hover:-translate-y-1.5 group ${
                    isRecommended
                      ? "border-2 border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg shadow-emerald-950/20"
                      : "border border-gray-200/80 dark:border-white/[0.08] hover:border-emerald-500/50"
                  }`}
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="relative w-12 h-12 shrink-0 drop-shadow-md">
                        <Image
                          src={plan.blockImage}
                          alt={plan.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {plan.badge && (
                        <span className="px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Plan Name */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white orbitron-font leading-tight truncate">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6 pb-4 border-b border-gray-100 dark:border-white/[0.08]">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight orbitron-font">
                          {convertPrice(String(plan.price))}
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/mo</span>
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="space-y-3 mb-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-mono">
                      <div className="flex items-center gap-2.5">
                        <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="truncate">{plan.cpu}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MemoryStick className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="truncate">{plan.ram}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <HardDrive className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="truncate">{plan.storage}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Network className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="truncate">{plan.ports || plan.bandwidth}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="truncate text-emerald-600 dark:text-emerald-400 font-semibold">{plan.ddos}</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Button */}
                  <Link
                    href={plan.link}
                    className="w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase text-center transition-all duration-200 bg-emerald-500 hover:bg-emerald-400 text-gray-950 shadow-lg shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-2 group/btn no-underline"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
