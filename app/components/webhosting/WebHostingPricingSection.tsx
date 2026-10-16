'use client'

import { motion } from "framer-motion"
import { Server, Cpu, MemoryStick, HardDrive, Wifi, HeartPulse, ChevronRight, Globe, Shield } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import webhostingConfig from "../../config/sections/webhosting.json"
import type { WebHostingConfig } from "../../types/webhosting"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"

const config = webhostingConfig as WebHostingConfig

export default function WebHostingPricingSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const { t } = useLanguage()
  const [selectedPlanType, setSelectedPlanType] = useState(config.planTypes[0].id)

  const currentPlans = config.plans[selectedPlanType] || config.plans[config.planTypes[0].id]

  return (
    <div className="bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/banners/webhosting.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/70 to-transparent dark:from-[#0a0b0f] dark:via-[#0a0b0f]/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/90 to-gray-50/70 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/85 dark:to-[#0a0b0f]/75" />
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>{t('webHostingPricing.badge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-3 orbitron-font">
                {t('webHostingPricing.title').split(" ").slice(0, -1).join(" ")}{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('webHostingPricing.title').split(" ").slice(-1)[0]}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Ultra-fast cPanel NVMe web hosting with free SSL, automated daily backups, and 99.9% uptime guarantee.
              </p>
            </div>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              className="w-full sm:w-64 mt-4 sm:mt-0"
            />
          </div>
        </motion.div>

        {/* Step 1: Select Plan Type */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
            {t('webHostingPricing.step1')}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {config.planTypes.map((planType) => (
              <button
                key={planType.id}
                onClick={() => setSelectedPlanType(planType.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  selectedPlanType === planType.id
                    ? "button-primary border-primary text-button-primary shadow-lg shadow-emerald-950/20 scale-[1.02]"
                    : "bg-gray-200/80 dark:bg-white/[0.04] border border-gray-300/80 dark:border-white/[0.08] text-gray-700 dark:text-gray-200 hover:bg-gray-300/80 dark:hover:bg-white/[0.08]"
                }`}
              >
                <Image
                  src={planType.image || "/placeholder.svg"}
                  alt={planType.name}
                  width={24}
                  height={24}
                  className="rounded object-contain bg-transparent"
                />
                <span className="text-sm font-bold">{planType.displayName}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Step 2: Plans Grid (Standardized Unified rounded-2xl Card Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.05 }}
                className="relative bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-white/[0.08] hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between p-6 shadow-xl shadow-black/5 hover:shadow-emerald-950/20 hover:-translate-y-1.5 group"
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 text-[11px] font-bold text-gray-950 bg-emerald-400 rounded-full shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black orbitron-font text-gray-900 dark:text-white">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        cPanel NVMe Hosting
                      </p>
                    </div>
                  </div>

                  {/* Price Header */}
                  <div className="mb-6 pb-4 border-b border-gray-100 dark:border-white/[0.06]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black orbitron-font text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        {convertPrice(plan.price)}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{plan.period}</span>
                    </div>
                  </div>

                  {/* Standardized Specification Pill Rows */}
                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>vCPU Allocation</span>
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">{plan.cpu}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MemoryStick className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span>RAM Memory</span>
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">{plan.ram}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <HardDrive className="w-4 h-4 text-indigo-500 shrink-0" />
                        <span>NVMe Storage</span>
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">{plan.storage}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Wifi className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Bandwidth</span>
                      </span>
                      <span className="font-bold text-gray-900 dark:text-white">{plan.bandwidth}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <HeartPulse className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>Network SLA</span>
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{plan.uptime}</span>
                    </div>
                  </div>
                </div>

                {/* Primary Card Action Button */}
                <div>
                  <a
                    href={plan.orderLink}
                    className="w-full py-3.5 px-6 rounded-xl font-bold button-primary text-button-primary shadow-lg shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-between group/btn"
                  >
                    <span className="w-full text-center orbitron-font text-xs sm:text-sm">
                      {t('webHostingPricing.orderNow')}
                    </span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 shrink-0" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
