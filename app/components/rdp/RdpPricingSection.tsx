"use client"

import { motion } from "framer-motion"
import { Cpu, MemoryStick, HardDrive, Wifi, ShieldCheck, MapPin, Monitor, ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import rdpConfig from "../../config/sections/rdp.json"
import type { RdpConfig } from "../../types/rdp"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"

const config = rdpConfig as RdpConfig

export default function RdpPricingSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const [selectedPlanType, setSelectedPlanType] = useState(config.planTypes[0].id)

  const currentPlans = config.plans[selectedPlanType] || config.plans[config.planTypes[0].id]

  return (
    <div className="bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 dark:opacity-15"
          style={{
            backgroundImage: `url('/banners/node.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/50 to-transparent dark:from-[#0a0b0f] dark:via-[#0a0b0f]/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/90 to-gray-50/50 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/80 dark:to-[#0a0b0f]/70" />
      </div>

      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-600/20 px-4 py-2 rounded-tl-2xl rounded-br-2xl mb-4 border border-emerald-600/20 dark:border-emerald-400/20">
                <Monitor className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-xs sm:text-sm tracking-wide">
                  India Windows Server RDP • Noida Datacenter
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 orbitron-font tracking-tight">
                High-Performance <span className="text-emerald-500 relative">Windows RDP</span> Hosting
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
                Dedicated Windows Server Remote Desktop instances hosted in Noida, India. Powered by enterprise Intel® Xeon® processors, fast NVMe SSDs, unmetered 1 Gbps port, and Advanced DDoS Mitigation.
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
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-tl-2xl rounded-br-2xl font-medium transition-all duration-300 ${
                    selectedPlanType === planType.id
                      ? "button-primary border-primary text-button-primary shadow-lg shadow-emerald-950/20"
                      : "bg-gray-200/80 dark:bg-gray-800/40 border border-gray-300 dark:border-gray-700/60 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <Image
                    src={planType.image || "/os/windows.png"}
                    alt={planType.name}
                    width={26}
                    height={26}
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
          className="mb-8 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/20 text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex flex-wrap items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Included with all plans:</strong> Full Administrator Access, Advance DDoS Mitigation, Low-Latency Indian Peering &amp; 99.9% Network Uptime.
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-500 dark:text-emerald-400 font-bold">
            <MapPin className="w-4 h-4" />
            <span>Datacenter: Noida, India</span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.05 }}
              className="relative bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-white/[0.08] hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/5 hover:shadow-emerald-950/20 hover:-translate-y-1"
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2.5 py-0.5 text-[11px] font-bold text-gray-950 bg-emerald-400 rounded-full shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.08] text-emerald-500 shrink-0">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white orbitron-font leading-snug">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Windows Server RDP
                    </p>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="space-y-3 mb-6 bg-gray-50/80 dark:bg-white/[0.02] p-4 rounded-xl border border-gray-100 dark:border-white/[0.04]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-emerald-500" />
                      Processor
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {plan.cpuDetail} ({plan.cpu})
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <MemoryStick className="w-3.5 h-3.5 text-emerald-500" />
                      Memory
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {plan.ram} {plan.ramDetail}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5 text-emerald-500" />
                      Storage
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {plan.storage} {plan.storageDetail}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <Wifi className="w-3.5 h-3.5 text-emerald-500" />
                      Bandwidth
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {plan.bandwidth} ({plan.bandwidthDetail})
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs border-t border-gray-200/60 dark:border-white/[0.06] pt-2.5">
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      Location
                    </span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {plan.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Protection
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {plan.ddos}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 dark:border-white/[0.04]">
                <div className="flex items-baseline justify-between mb-4 mt-4">
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">
                    Monthly Price
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold orbitron-font text-gray-900 dark:text-white">
                      {convertPrice(plan.price)}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <a
                  href={plan.orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 transition-all duration-200 shadow-md shadow-emerald-500/20 active:scale-[0.98] text-center"
                >
                  <span>Order RDP Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
