'use client'

import { motion } from "framer-motion"
import { Cpu, MemoryStick, HardDrive, Wifi, ShieldCheck, MapPin, ChevronRight, Monitor } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import rdpConfig from "../../config/sections/rdp.json"
import type { RdpConfig } from "../../types/rdp"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"

const config = rdpConfig as RdpConfig

export default function RdpPricingSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const [selectedPlanType, setSelectedPlanType] = useState(config.planTypes[0]?.id || "windows")

  const currentPlans = config.plans[selectedPlanType] || config.plans[config.planTypes[0]?.id] || []

  return (
    <div className="bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Enterprise Windows RDP</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-3 orbitron-font">
                Windows Server{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  RDP Hosting
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                Dedicated Windows Server Remote Desktop instances hosted in Noida, India. Powered by enterprise Intel® Xeon® processors, fast NVMe SSDs, unmetered 1 Gbps port, and Advance DDoS Mitigation.
              </p>
            </div>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              className="w-full sm:w-64 mt-4 sm:mt-0"
            />
          </div>
        </motion.div>

        {/* Plan Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6"
        >
          <div className="flex flex-col items-left">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              Available RDP Clusters
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {config.planTypes.map((planType) => (
                <button
                  key={planType.id}
                  onClick={() => setSelectedPlanType(planType.id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                    selectedPlanType === planType.id
                      ? "button-primary border-primary text-button-primary shadow-lg shadow-emerald-950/20"
                      : "bg-gray-200/80 dark:bg-white/[0.04] border border-gray-300 dark:border-white/[0.08] text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-white/[0.08]"
                  }`}
                >
                  <Image
                    src={planType.image || "/os/windows.png"}
                    alt={planType.name}
                    width={24}
                    height={24}
                    className="rounded object-contain bg-transparent"
                  />
                  <span className="text-sm font-bold">{planType.displayName}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8 p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/[0.03] border border-emerald-500/20 text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex flex-wrap items-center justify-between gap-3 backdrop-blur-md"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>
              <strong>Included with all plans:</strong> Full Administrator Access, Advance DDoS Mitigation, Low-Latency Indian Peering &amp; 99.9% Network Uptime.
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
            <MapPin className="w-4 h-4" />
            <span>Datacenter: Noida, India</span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid (Unified Standard - Zero Badge Overlap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.05 }}
              className="relative flex flex-col justify-between bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] hover:border-emerald-500/50 dark:hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group"
            >
              <div>
                {/* Top Meta Row: Icon on left, Badge Tag on right (PHYSICALLY CANNOT OVERLAP) */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 flex items-center justify-center p-2 text-emerald-500 shrink-0">
                    <Monitor className="w-5 h-5" />
                  </div>
                  {plan.badge ? (
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-sm shrink-0">
                      {plan.badge}
                    </span>
                  ) : (
                    <span className="w-2 h-2" />
                  )}
                </div>

                {/* Plan Name & Subtitle on their own line */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white orbitron-font leading-snug">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                    Intel Xeon • Windows Server RDP
                  </p>
                </div>

                {/* Price Block: Right below title, big green font */}
                <div className="mb-6 pb-4 border-b border-gray-100 dark:border-white/[0.06]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold orbitron-font text-emerald-500 dark:text-emerald-400">
                      {convertPrice(plan.price)}
                    </span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{plan.period}</span>
                  </div>
                </div>

                {/* Specification Rows */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                    <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                      <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Processor</span>
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white text-right">
                      {plan.cpu}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                    <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                      <MemoryStick className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>Memory</span>
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white text-right">
                      {plan.ram} {plan.ramDetail}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                    <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                      <HardDrive className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>Storage</span>
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white text-right">
                      {plan.storage} {plan.storageDetail}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                    <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                      <Wifi className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Bandwidth</span>
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white text-right">
                      {plan.bandwidth} ({plan.bandwidthDetail})
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                    <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Protection</span>
                    </span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-right">
                      {plan.ddos}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={plan.orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl font-bold button-primary text-button-primary shadow-lg shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Order Now</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
