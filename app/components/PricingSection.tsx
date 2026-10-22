'use client'

import { useState } from "react"
import { motion } from "framer-motion"
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
  ArrowRight,
  Gamepad2,
  Server,
  Sparkles
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
  ram: string // strictly without RAM type
  storage: string
  backups: string
  ports: string
  databases: string
  panel: string
  ddos: string
  link: string
}

// Starter Tiers (2 GB - 5 GB) with exact authentic allocations & specs from old configuration
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
    link: "https://discord.gg/MJFPbjAdJY"
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
    link: "https://discord.gg/MJFPbjAdJY"
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
    link: "https://discord.gg/MJFPbjAdJY"
  },
  {
    id: "mc-stone",
    name: "Stone",
    subtitle: "Minecraft Server",
    badge: "BEST VALUE",
    price: 299,
    blockImage: "/blocks/stone.png",
    cpu: "150% CPU",
    ram: "5 GB",
    storage: "25 GB NVMe",
    backups: "2 Backups",
    ports: "3 Ports (1 Main + 2 Extra)",
    databases: "3 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/MJFPbjAdJY"
  }
]

// Performance Tiers (8 GB - 32 GB) displaying higher-tier allocations from old configuration
const minecraftPerformancePlans: PlanItem[] = [
  {
    id: "mc-iron",
    name: "Iron",
    subtitle: "High-Tick SMP Node",
    price: 449,
    blockImage: "/blocks/iron.png",
    cpu: "250% CPU",
    ram: "8 GB",
    storage: "40 GB NVMe",
    backups: "2 Backups",
    ports: "4 Ports (1 Main + 3 Extra)",
    databases: "3 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/MJFPbjAdJY"
  },
  {
    id: "mc-gold",
    name: "Gold",
    subtitle: "Community Scale",
    badge: "RECOMMENDED",
    price: 599,
    blockImage: "/blocks/gold.png",
    cpu: "300% CPU",
    ram: "10 GB",
    storage: "50 GB NVMe",
    backups: "3 Backups",
    ports: "4 Ports (1 Main + 3 Extra)",
    databases: "4 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/MJFPbjAdJY"
  },
  {
    id: "mc-diamond",
    name: "Diamond",
    subtitle: "Modpack & Plugins",
    badge: "BEST VALUE",
    price: 849,
    blockImage: "/blocks/diamond.png",
    cpu: "400% CPU",
    ram: "16 GB",
    storage: "75 GB NVMe",
    backups: "4 Backups",
    ports: "5 Ports (1 Main + 4 Extra)",
    databases: "5 Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/MJFPbjAdJY"
  },
  {
    id: "mc-netherite",
    name: "Netherite",
    subtitle: "Mega Network Node",
    badge: "FLAGSHIP",
    price: 1649,
    blockImage: "/blocks/netherite.png",
    cpu: "800% CPU",
    ram: "32 GB",
    storage: "140 GB NVMe",
    backups: "6 Backups",
    ports: "8 Ports (1 Main + 7 Extra)",
    databases: "Unlimited Databases",
    panel: "Premium Game Panel",
    ddos: "1 Gbps DDoS Shield",
    link: "https://discord.gg/MJFPbjAdJY"
  }
]

const cloudVpsLandingPlans: PlanItem[] = [
  {
    id: "vps-starter",
    name: "VPS Starter",
    subtitle: "Cloud Instance",
    price: 399,
    blockImage: "/cpu/intel.png",
    cpu: "2 vCores",
    ram: "6 GB",
    storage: "50 GB NVMe",
    backups: "Automated Backups",
    ports: "1 Dedicated IPv4",
    databases: "Unlimited DBs",
    panel: "Full Root & SSH",
    ddos: "17+ Tbit/s Protection",
    link: "/vps"
  },
  {
    id: "vps-value",
    name: "VPS Value",
    subtitle: "High-Freq Cloud",
    badge: "POPULAR",
    price: 749,
    blockImage: "/cpu/epyc.png",
    cpu: "4 vCores",
    ram: "12 GB",
    storage: "100 GB NVMe",
    backups: "Automated Backups",
    ports: "1 Dedicated IPv4",
    databases: "Unlimited DBs",
    panel: "Full Root & SSH",
    ddos: "17+ Tbit/s Protection",
    link: "/vps"
  },
  {
    id: "vps-pro",
    name: "VPS Pro",
    subtitle: "High-Performance Cloud",
    badge: "RECOMMENDED",
    price: 999,
    blockImage: "/cpu/epyc.png",
    cpu: "6 vCores",
    ram: "16 GB",
    storage: "150 GB NVMe",
    backups: "Automated Backups",
    ports: "1 Dedicated IPv4",
    databases: "Unlimited DBs",
    panel: "Full Root & SSH",
    ddos: "17+ Tbit/s Protection",
    link: "/vps"
  },
  {
    id: "vds-slice",
    name: "VDS Slice",
    subtitle: "Virtual Dedicated Server",
    badge: "DEDICATED",
    price: 1699,
    blockImage: "/cpu/ryzen7.png",
    cpu: "6 Dedicated vCores",
    ram: "16 GB",
    storage: "150 GB NVMe",
    backups: "Daily Snapshots",
    ports: "1 Dedicated IPv4 + IPv6",
    databases: "Unlimited DBs",
    panel: "Full Root & KVM Access",
    ddos: "17+ Tbit/s Protection",
    link: "/dedicated"
  }
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"minecraft" | "cloud">("minecraft")
  const [mcTierGroup, setMcTierGroup] = useState<"starter" | "performance">("starter")
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()

  const displayedPlans = activeTab === "minecraft"
    ? (mcTierGroup === "starter" ? minecraftStarterPlans : minecraftPerformancePlans)
    : cloudVpsLandingPlans

  return (
    <section id="plans" className="bg-gray-50 dark:bg-[#090a10] py-20 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
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
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Transparent Infrastructure Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 orbitron-font tracking-tight">
              Featured Hosting Plans
            </h2>
            <p className="text-sm max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Strictly unthrottled hardware with authentic port allocations, enterprise NVMe storage, and DDoS protection across global nodes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Category Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-gray-200/60 dark:bg-[#111420] border border-gray-300/60 dark:border-white/[0.08]">
              <button
                type="button"
                onClick={() => setActiveTab("minecraft")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "minecraft"
                    ? "bg-emerald-500 text-gray-950 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Minecraft Plans</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("cloud")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "cloud"
                    ? "bg-emerald-500 text-gray-950 shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Server className="w-4 h-4" />
                <span>Cloud VPS &amp; VDS</span>
              </button>
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

            <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
              Allocations scale from 2 up to 8 Ports per node
            </span>
          </div>
        )}

        {/* 4-Column Professional Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {displayedPlans.map((plan, index) => {
            const isPopular = !!plan.badge

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`relative flex flex-col justify-between bg-white dark:bg-[#111420] rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 group ${
                  isPopular
                    ? "border-2 border-emerald-500/70 shadow-lg shadow-emerald-950/20"
                    : "border border-gray-200 dark:border-white/[0.08] hover:border-emerald-500/40 hover:shadow-xl hover:shadow-black/20"
                }`}
              >
                <div>
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Header: 3D Block Image + Title + Subtitle */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative w-12 h-12 shrink-0 drop-shadow-sm">
                      <Image
                        src={plan.blockImage}
                        alt={plan.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0 pr-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white orbitron-font leading-tight truncate">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5 truncate">
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="mb-6 pb-4 border-b border-gray-100 dark:border-white/[0.06]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight tabular-nums orbitron-font">
                        {convertPrice(String(plan.price))}
                      </span>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                  </div>

                  {/* 2x2 Specs Grid with Green Icons */}
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 mb-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="truncate">{plan.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <MemoryStick className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="truncate">{plan.ram}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <HardDrive className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="truncate">{plan.storage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <Archive className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="truncate">{plan.backups}</span>
                    </div>
                  </div>

                  {/* Included Features List with Green Icons */}
                  <div className="space-y-3 mb-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2.5">
                      <Network className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="font-medium text-gray-900 dark:text-gray-200">{plan.ports}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{plan.databases}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Sliders className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{plan.panel}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{plan.ddos}</span>
                    </div>
                  </div>
                </div>

                {/* Full-Width Solid Green CTA Button */}
                <a
                  href={plan.link}
                  target={plan.link.startsWith("http") ? "_blank" : undefined}
                  rel={plan.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase text-center transition-all duration-150 bg-emerald-500 hover:bg-emerald-400 text-gray-950 active:scale-[0.98] flex items-center justify-center gap-2 group/btn no-underline shadow-sm"
                >
                  <span>ORDER NOW</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Navigation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111420] border border-gray-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white orbitron-font">
              {activeTab === "minecraft"
                ? "Looking for custom locations or enterprise modpacks?"
                : "Need dedicated hardware slices or high-memory VDS clusters?"}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              {activeTab === "minecraft"
                ? "All 17 Minecraft plans feature scaled port allocations from 2 up to 8 ports with instant panel provisioning."
                : "Deploy high-clock AMD EPYC & Intel Xeon VDS instances with 100% dedicated vCores."}
            </p>
          </div>

          <Link
            href={activeTab === "minecraft" ? "/games" : "/vps"}
            className="px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-bold text-xs sm:text-sm hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors shrink-0 flex items-center gap-2"
          >
            <span>{activeTab === "minecraft" ? "View Full Plans Catalog" : "Explore All VPS &amp; VDS Plans"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}