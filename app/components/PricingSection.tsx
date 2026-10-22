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
  Server
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

const minecraftLandingPlans: PlanItem[] = [
  {
    id: "mc-gravel",
    name: "Gravel",
    subtitle: "Minecraft Server",
    price: 99,
    blockImage: "/blocks/gravel.png",
    cpu: "100% CPU",
    ram: "2 GB",
    storage: "12 GB NVMe",
    backups: "1 Backup",
    ports: "1 Port",
    databases: "1 Database",
    panel: "Premium Game Panel",
    ddos: "Advanced DDoS Protection",
    link: "https://discord.gg/MJFPbjAdJY"
  },
  {
    id: "mc-andesite",
    name: "Andesite",
    subtitle: "Minecraft Server",
    price: 149,
    blockImage: "/blocks/andesite.png",
    cpu: "150% CPU",
    ram: "3 GB",
    storage: "18 GB NVMe",
    backups: "2 Backups",
    ports: "2 Ports",
    databases: "2 Databases",
    panel: "Premium Game Panel",
    ddos: "Advanced DDoS Protection",
    link: "https://discord.gg/MJFPbjAdJY"
  },
  {
    id: "mc-cobblestone",
    name: "Cobblestone",
    subtitle: "Minecraft Server",
    badge: "POPULAR",
    price: 249,
    blockImage: "/blocks/cobblestone.png",
    cpu: "180% CPU",
    ram: "4 GB",
    storage: "25 GB NVMe",
    backups: "2 Backups",
    ports: "2 Ports",
    databases: "4 Databases",
    panel: "Premium Game Panel",
    ddos: "Advanced DDoS Protection",
    link: "https://discord.gg/MJFPbjAdJY"
  },
  {
    id: "mc-stone",
    name: "Stone",
    subtitle: "Minecraft Server",
    badge: "BEST VALUE",
    price: 299,
    blockImage: "/blocks/stone.png",
    cpu: "200% CPU",
    ram: "5 GB",
    storage: "30 GB NVMe",
    backups: "2 Backups",
    ports: "2 Ports",
    databases: "4 Databases",
    panel: "Premium Game Panel",
    ddos: "Advanced DDoS Protection",
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
    cpu: "2 vCPU Cores",
    ram: "4 GB",
    storage: "50 GB NVMe",
    backups: "Automated",
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
    cpu: "4 vCPU Cores",
    ram: "8 GB",
    storage: "100 GB NVMe",
    backups: "Automated",
    ports: "1 Dedicated IPv4",
    databases: "Unlimited DBs",
    panel: "Full Root & SSH",
    ddos: "17+ Tbit/s Protection",
    link: "/vps"
  },
  {
    id: "vps-pro",
    name: "VPS Pro",
    subtitle: "Extreme Performance",
    badge: "RECOMMENDED",
    price: 1399,
    blockImage: "/cpu/ryzen7.png",
    cpu: "6 vCPU Cores",
    ram: "16 GB",
    storage: "200 GB NVMe",
    backups: "Daily Snapshots",
    ports: "1 Dedicated IPv4",
    databases: "Unlimited DBs",
    panel: "Full Root & SSH",
    ddos: "17+ Tbit/s Protection",
    link: "/vps"
  },
  {
    id: "vps-enterprise",
    name: "Dedicated Node",
    subtitle: "Enterprise Bare Metal",
    price: 2499,
    blockImage: "/cpu/epyc-silver.png",
    cpu: "8 Dedicated Cores",
    ram: "32 GB",
    storage: "400 GB NVMe",
    backups: "Disaster Recovery",
    ports: "2 Dedicated IPv4",
    databases: "Unlimited DBs",
    panel: "IPMI & KVM Access",
    ddos: "Custom BGP Scrubbing",
    link: "/dedicated"
  }
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"minecraft" | "cloud">("minecraft")
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()

  const displayedPlans = activeTab === "minecraft" ? minecraftLandingPlans : cloudVpsLandingPlans

  return (
    <section id="plans" className="bg-gray-50 dark:bg-[#0a0b0f] py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Enterprise Hosting Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-3 orbitron-font">
              Featured{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Hosting Plans
              </span>
            </h2>
            <p className="text-sm max-w-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ultra-low latency game nodes and enterprise cloud hardware deployed instantly with 17+ Tbit/s DDoS mitigation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Category Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-gray-200/60 dark:bg-white/[0.05] border border-gray-300/60 dark:border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab("minecraft")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "minecraft"
                    ? "bg-emerald-500 text-gray-950 shadow-md shadow-emerald-500/20"
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
                    ? "bg-emerald-500 text-gray-950 shadow-md shadow-emerald-500/20"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Server className="w-4 h-4" />
                <span>Cloud VPS</span>
              </button>
            </div>

            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              className="w-full sm:w-44"
            />
          </div>
        </motion.div>

        {/* 4-Column Professional Cards Grid (Synced with Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {displayedPlans.map((plan, index) => {
            const isPopular = !!plan.badge

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative flex flex-col justify-between bg-white/90 dark:bg-[#0c0e14]/95 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 hover:-translate-y-1.5 group ${
                  isPopular
                    ? "border-2 border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg shadow-emerald-950/20"
                    : "border border-gray-200/80 dark:border-white/[0.08] hover:border-emerald-500/50"
                }`}
              >
                <div>
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Header: 3D Block Image + Title + Subtitle */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative w-12 h-12 shrink-0 drop-shadow-md">
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
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight orbitron-font">
                        {convertPrice(String(plan.price))}
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                  </div>

                  {/* 2x2 Specs Grid with Green Icons (Matching Screenshot) */}
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

                  {/* Horizontal Divider */}
                  <div className="border-t border-gray-100 dark:border-white/[0.08] mb-6" />

                  {/* Included Features List with Green Icons */}
                  <div className="space-y-3 mb-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2.5">
                      <Network className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{plan.ports}</span>
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
                  className="w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase text-center transition-all duration-200 bg-emerald-500 hover:bg-emerald-400 text-gray-950 shadow-lg shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-2 group/btn no-underline"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white orbitron-font">
              {activeTab === "minecraft"
                ? "Looking for higher memory or custom modpack performance?"
                : "Need high-core dedicated bare metal or custom private networks?"}
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              {activeTab === "minecraft"
                ? "We provide 17 scalable Minecraft tiers up to 32 GB Bedrock across India, Germany, Singapore & UAE."
                : "Deploy multi-socket AMD EPYC & Intel Xeon hypervisors with direct 10 Gbps uplinks."}
            </p>
          </div>

          <Link
            href={activeTab === "minecraft" ? "/games" : "/vps"}
            className="px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-950 font-bold text-xs sm:text-sm hover:bg-emerald-500 dark:hover:bg-emerald-400 transition-colors shrink-0 flex items-center gap-2"
          >
            <span>{activeTab === "minecraft" ? "View All 17 Minecraft Plans" : "Explore All Cloud VPS Plans"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
