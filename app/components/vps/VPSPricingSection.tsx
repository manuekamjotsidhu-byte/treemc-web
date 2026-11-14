'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  VPS_LOCATIONS,
  type VPSLocation,
  type VPSPlan,
  type CpuModelOption,
  getPlansByLocation,
  getCategoriesByLocation
} from '../../data/vpsPlans'
import {
  Cpu,
  MemoryStick,
  HardDrive,
  ShieldCheck,
  Wifi,
  ChevronRight,
  Info
} from 'lucide-react'
import { CurrencySelector, useCurrency } from '../ui/CurrencySelector'
import { useLanguage } from '../../contexts/LanguageContext'

const LOCATION_META: Record<VPSLocation, { name: string; flag: string }> = {
  India: { name: "India", flag: "/flags/india.png" },
  Germany: { name: "Germany", flag: "/flags/germany.png" },
  Singapore: { name: "Singapore", flag: "/flags/singapore.png" },
  USA: { name: "USA", flag: "/flags/usa.png" },
  Canada: { name: "Canada", flag: "/flags/canada.png" }
}

const CATEGORY_IMAGES: Record<string, string> = {
  "xeon-standard": "/cpu/intel.png",
  "epyc-premium": "/cpu/epyc.png",
  "ryzen-premium": "/cpu/ryzen9.png"
}

interface CpuInfoNote {
  note: string;
  models?: string[];
}

const CPU_INFO_NOTES: Record<string, CpuInfoNote> = {
  "India_xeon-standard": {
    note: "Our India Intel Xeon plans come with 4 CPU options. You can choose your preferred CPU model using the selector on each plan card before deploying.",
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz (Up to 3.50 GHz)",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz (Up to 3.00 GHz)",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz (Up to 3.70 GHz)",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz (Up to 3.80 GHz)"
    ]
  },
  "India_epyc-premium": {
    note: "High-performance enterprise cloud virtualization powered by AMD EPYC 7002 / 7003 series server hardware.",
    models: [
      "AMD EPYC™ 7763 (64 Cores / 128 Threads @ Up to 3.50 GHz)",
      "AMD EPYC™ 7402P (24 Cores / 48 Threads @ Up to 3.35 GHz)"
    ]
  },
  "India_ryzen-premium": {
    note: "Flagship single-thread frequency compute instances with high-speed DDR5 ECC memory and Gen4 NVMe arrays.",
    models: [
      "AMD Ryzen™ 9 9950X (16 Cores / 32 Threads @ Up to 5.70 GHz)",
      "AMD Ryzen™ 9 5900X (12 Cores / 24 Threads @ Up to 4.80 GHz)"
    ]
  },
  "Germany_epyc-premium": {
    note: "Equipped with 1 Tbps Always-On Anti-DDoS Mitigation and low-latency central European routing.",
    models: [
      "AMD EPYC™ Enterprise Series (High-Throughput NVMe Cluster)"
    ]
  },
  "Singapore_epyc-premium": {
    note: "Regional Southeast Asia cloud compute node with direct Tier-1 peering and low latency across the APAC region.",
    models: [
      "AMD EPYC™ Enterprise Series (Gen4 NVMe Architecture)"
    ]
  },
  "USA_epyc-premium": {
    note: "High-bandwidth North American cloud datacenter with redundant 10 Gbps uplinks and multi-layer DDoS defense.",
    models: [
      "AMD EPYC™ Enterprise Series (Gen4 NVMe Architecture)"
    ]
  },
  "Canada_epyc-premium": {
    note: "Low-latency North American regional node with unmetered port connectivity and automated DDoS mitigation.",
    models: [
      "AMD EPYC™ Enterprise Series (Gen4 NVMe Architecture)"
    ]
  }
}

export default function VPSPricingSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const { t } = useLanguage()

  const [selectedLocation, setSelectedLocation] = useState<VPSLocation>("India")

  // Available categories for currently selected location
  const availableCategories = useMemo(() => {
    return getCategoriesByLocation(selectedLocation)
  }, [selectedLocation])

  const [selectedCategory, setSelectedCategory] = useState<string>("xeon-standard")

  // Location switch handler
  const handleLocationChange = (loc: VPSLocation) => {
    setSelectedLocation(loc)
    const cats = getCategoriesByLocation(loc)
    if (cats.length > 0) {
      // Keep existing category if available in new location, else pick first
      const stillValid = cats.some(c => c.category === selectedCategory)
      if (!stillValid) {
        setSelectedCategory(cats[0].category)
      }
    }
  }

  // Active plans
  const currentPlans = useMemo(() => {
    const plans = getPlansByLocation(selectedLocation)
    return plans.filter(p => p.category === selectedCategory)
  }, [selectedLocation, selectedCategory])

  // Current CPU Note / Information
  const currentCpuInfo = CPU_INFO_NOTES[`${selectedLocation}_${selectedCategory}`] || CPU_INFO_NOTES[`${selectedLocation}_epyc-premium`]

  // Track selected CPU model per plan: Record<planId, cpuModelId>
  const [chosenCpuModels, setChosenCpuModels] = useState<Record<string, string>>({})

  const handleCpuModelSelect = (planId: string, modelId: string) => {
    setChosenCpuModels(prev => ({ ...prev, [planId]: modelId }))
  }

  return (
    <div id="plans" className="bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/vps/vps-hero-2.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/40 to-transparent dark:from-[#0a0b0f] dark:via-[#0a0b0f]/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-gray-50/40 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/95 dark:to-[#0a0b0f]/60" />
      </div>

      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-left gap-2 card-primary px-4 py-2 rounded-tl-xl rounded-br-2xl mb-4 border border-secondary">
                <span className="icon-text-primary text-sm">{t('vps.badge') || "High-Performance Cloud VPS"}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 orbitron-font">
                Cloud VPS{" "}
                <span className="icon-text-primary relative">
                  Hosting
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1418 125"
                    className="absolute left-0 w-full text-icon-text-primary"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <path
                      d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"
                      fill="currentColor"
                    />
                  </motion.svg>
                </span>
              </h2>
              <p className="text-sm text-gray-600 max-w-3xl dark:text-gray-300">
                Deploy high-frequency KVM virtual private servers with enterprise NVMe storage, dedicated port allocations, and multi-layer DDoS protection across 5 global locations.
              </p>
            </div>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              className="w-full sm:w-64 mt-4 sm:mt-0"
            />
          </div>
        </motion.div>

        {/* Step 1 & 2 Selectors: Exact VDS UI Pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-6 justify-left items-left">
            {/* Step 1: Select Location */}
            <div className="flex flex-col items-left">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3.5">
                {t('vps.location') || "1. Select Location"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {VPS_LOCATIONS.map((loc) => {
                  const isSelected = selectedLocation === loc
                  const meta = LOCATION_META[loc]

                  return (
                    <button
                      key={loc}
                      onClick={() => handleLocationChange(loc)}
                      className={`flex items-center gap-3 px-6 py-3.5 rounded-tl-2xl rounded-br-2xl font-medium transition-all duration-300 ${
                        isSelected
                          ? "button-primary border-primary text-button-primary shadow-lg"
                          : "bg-gray-200 dark:bg-gray-800/20 border border-secondary text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700/30 hover:border-secondary"
                      }`}
                    >
                      <Image
                        src={meta.flag}
                        alt={`${loc} flag`}
                        width={28}
                        height={28}
                        className="rounded-full object-cover"
                      />
                      <span className="text-sm font-medium">{loc}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Select Processor */}
            <div className="flex flex-col items-left">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3.5">
                {t('vps.step1') || "2. Select Processor"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {availableCategories.map((cat) => {
                  const isSelected = selectedCategory === cat.category
                  const img = CATEGORY_IMAGES[cat.category] || "/cpu/intel.png"

                  return (
                    <button
                      key={cat.category}
                      onClick={() => setSelectedCategory(cat.category)}
                      className={`flex items-center gap-3 px-6 py-2 rounded-tl-2xl rounded-br-2xl font-medium transition-all duration-300 ${
                        isSelected
                          ? "button-primary border-primary text-button-primary shadow-lg"
                          : "bg-gray-200 dark:bg-gray-800/20 border border-secondary text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700/30 hover:border-secondary"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={cat.label}
                        width={32}
                        height={32}
                        className="rounded-md object-contain"
                      />
                      <span className="text-sm font-semibold">{cat.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CPU Model & Hardware Architecture Note Callout (Identical to VDS) */}
        {currentCpuInfo && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-[#0c0f18]/90 dark:bg-[#0c0f18]/90 border border-secondary/60 dark:border-white/10 p-5 sm:p-6 mb-8 backdrop-blur-xl shadow-lg"
          >
            <div className="flex items-start gap-3.5">
              <div className="p-1 rounded-full bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                <Info className="w-5 h-5 icon-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong className="font-bold text-gray-900 dark:text-white">Note: </strong>
                  {currentCpuInfo.note}
                </p>

                {currentCpuInfo.models && currentCpuInfo.models.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-200/40 dark:border-white/5">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2.5">
                      Available CPU Models:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
                      {currentCpuInfo.models.map((model, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{model}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Available Plans Grid */}
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          {t('vps.step2') || "3. Choose Your Plan"}
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4"
        >
          {currentPlans && currentPlans.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentPlans.map((plan, index) => {
                const chosenModelId = chosenCpuModels[plan.id] || (plan.cpuModels[0]?.id || "")
                const chosenModel = plan.cpuModels.find(m => m.id === chosenModelId) || plan.cpuModels[0]
                const orderLink = `/order?plan=${plan.id}${chosenModel ? `&cpu=${chosenModel.id}` : ''}`
                const flagSrc = LOCATION_META[plan.location]?.flag || "/flags/india.png"

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative flex flex-col justify-between bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] hover:border-emerald-500/50 dark:hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group"
                  >
                    <div>
                      {/* Top Meta Row: Location Flag on left, Recommended badge on right */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="relative w-11 h-11 rounded-xl bg-gray-100 dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                          <Image
                            src={flagSrc}
                            alt={plan.location}
                            width={32}
                            height={32}
                            className="rounded-lg object-cover"
                          />
                        </div>
                        {plan.badge ? (
                          <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-sm shrink-0">
                            {plan.badge}
                          </span>
                        ) : (
                          <span className="w-2 h-2" />
                        )}
                      </div>

                      {/* Plan Name & Location Subtitle */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white orbitron-font leading-snug">
                          {plan.name}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                          {plan.processorFamily} • {plan.location}
                        </p>
                      </div>

                      {/* Price Block: Big Green Emerald Price */}
                      <div className="mb-4 pb-4 border-b border-gray-200/50 dark:border-gray-800/60">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold orbitron-font text-emerald-500 dark:text-emerald-400">
                            {convertPrice(String(plan.price))}
                          </span>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/mo</span>
                        </div>
                      </div>

                      {/* CPU Model Selector Dropdown (When multiple CPUs exist for this plan) */}
                      {plan.cpuModels.length > 1 && (
                        <div className="mb-4 p-2.5 rounded-xl bg-gray-100/70 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                          <div className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 mb-1 flex items-center justify-between">
                            <span>Select CPU Model</span>
                            <span className="text-emerald-500 font-mono text-[10px]">{plan.cpuModels.length} Options</span>
                          </div>
                          <select
                            value={chosenModelId}
                            onChange={(e) => handleCpuModelSelect(plan.id, e.target.value)}
                            className="w-full text-xs font-medium py-1.5 px-2 rounded-lg bg-white dark:bg-[#111420] border border-gray-300/80 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                          >
                            {plan.cpuModels.map((model) => (
                              <option key={model.id} value={model.id}>
                                {model.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      {/* Specification Rows (Exact VDS Card Layout) */}
                      <div className="space-y-2 mb-6">
                        {/* Processor */}
                        <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                          <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                            <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>Processor</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white text-right truncate">
                            {plan.vCores} vCores
                          </span>
                        </div>

                        {/* Memory */}
                        <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                          <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                            <MemoryStick className="w-4 h-4 text-cyan-500 shrink-0" />
                            <span>Memory</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white text-right">
                            {plan.ram} {plan.memoryType}
                          </span>
                        </div>

                        {/* Storage */}
                        <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                          <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                            <HardDrive className="w-4 h-4 text-indigo-500 shrink-0" />
                            <span>Storage</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white text-right">
                            {plan.storage} {plan.storageType}
                          </span>
                        </div>

                        {/* Bandwidth */}
                        <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                          <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                            <Wifi className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>Bandwidth</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white text-right">
                            {plan.bandwidth}
                          </span>
                        </div>

                        {/* Protection */}
                        <div className="flex items-center justify-between text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] gap-2">
                          <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>Protection</span>
                          </span>
                          <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-right">
                            {chosenModel?.ddos || plan.protection}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button: Exact VDS Button */}
                    <div className="pt-2">
                      <Link
                        href={orderLink}
                        className="w-full py-3.5 px-6 rounded-xl font-bold button-primary text-button-primary shadow-lg shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        <span>{t('common.orderNow') || "Deploy VPS"}</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm">No plans available for this combination.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
