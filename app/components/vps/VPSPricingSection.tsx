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
  Network,
  ArrowRight,
  Server,
  Check,
  Layers,
  ChevronDown
} from 'lucide-react'

const LOCATION_META: Record<VPSLocation, { name: string; flag: string }> = {
  India: { name: "India", flag: "/flags/india.png" },
  Germany: { name: "Germany", flag: "/flags/germany.png" },
  Singapore: { name: "Singapore", flag: "/flags/singapore.png" },
  USA: { name: "USA", flag: "/flags/usa.png" },
  Canada: { name: "Canada", flag: "/flags/canada.png" }
}

const CATEGORY_IMAGES: Record<string, string> = {
  "xeon-standard": "/cpu/intel.png",
  "xeon-gold": "/cpu/intel.png",
  "epyc-premium": "/cpu/epyc.png",
  "epyc-milan": "/cpu/epyc.png",
  "ryzen-premium": "/cpu/ryzen9.png",
  "ryzen-5900x": "/cpu/ryzen9.png"
}

export default function VPSPricingSection() {
  const [selectedLocation, setSelectedLocation] = useState<VPSLocation>("India")
  
  // Available categories for currently selected location
  const availableCategories = useMemo(() => {
    return getCategoriesByLocation(selectedLocation)
  }, [selectedLocation])

  const [selectedCategory, setSelectedCategory] = useState<string>(
    availableCategories[0]?.category || "xeon-standard"
  )

  // Sync category when location changes
  const handleLocationChange = (loc: VPSLocation) => {
    setSelectedLocation(loc)
    const cats = getCategoriesByLocation(loc)
    if (cats.length > 0) {
      setSelectedCategory(cats[0].category)
    }
  }

  // Current plans list
  const currentPlans = useMemo(() => {
    const plans = getPlansByLocation(selectedLocation)
    return plans.filter(p => p.category === selectedCategory)
  }, [selectedLocation, selectedCategory])

  // Track selected CPU model per plan: Record<planId, cpuModelId>
  const [chosenCpuModels, setChosenCpuModels] = useState<Record<string, string>>({})

  const handleCpuModelSelect = (planId: string, modelId: string) => {
    setChosenCpuModels(prev => ({ ...prev, [planId]: modelId }))
  }

  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0b0f] text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 dark:bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>CLOUD VPS &amp; DEDICATED KVM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font text-gray-900 dark:text-white tracking-tight mb-4">
            Cloud VPS Plans &amp; Specifications
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Select your preferred deployment region and processor architecture to inspect available configurations with guaranteed resource isolation.
          </p>
        </div>

        {/* Step 1: Location Tabs (Country names only) */}
        <div className="mb-8">
          <div className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 text-center sm:text-left">
            1. Select Deployment Location
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {VPS_LOCATIONS.map((loc) => {
              const meta = LOCATION_META[loc]
              const isSelected = selectedLocation === loc
              return (
                <button
                  key={loc}
                  type="button"
                  onClick={() => handleLocationChange(loc)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 border ${
                    isSelected
                      ? "bg-emerald-500 text-gray-950 border-emerald-500 shadow-md shadow-emerald-500/20 scale-[1.02]"
                      : "bg-white dark:bg-[#12141c] text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/[0.08] hover:border-emerald-500/40 hover:bg-gray-100 dark:hover:bg-[#171a24]"
                  }`}
                >
                  <div className="relative w-5 h-5 rounded-full overflow-hidden border border-black/10 shrink-0">
                    <Image
                      src={meta.flag}
                      alt={`${meta.name} flag`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{meta.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 2: Processor Architecture Sub-Tabs */}
        <div className="mb-10">
          <div className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 text-center sm:text-left">
            2. Select Processor Architecture
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {availableCategories.map((cat) => {
              const isSelected = selectedCategory === cat.category
              const imgSrc = CATEGORY_IMAGES[cat.category] || "/cpu/intel.png"
              return (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`flex items-center gap-3 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 border ${
                    isSelected
                      ? "bg-white dark:bg-[#161a26] text-emerald-600 dark:text-emerald-400 border-emerald-500 shadow-sm ring-1 ring-emerald-500/40"
                      : "bg-white/60 dark:bg-[#10121a] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/[0.06] hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="relative w-5 h-5 shrink-0">
                    <Image
                      src={imgSrc}
                      alt={cat.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 3: Plans Cards Grid (5 to 8 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {currentPlans.map((plan, idx) => {
            const isRecommended = plan.badge === "Recommended"
            const categoryImg = CATEGORY_IMAGES[plan.category] || "/cpu/intel.png"
            const activeCpuModel = chosenCpuModels[plan.id] || (plan.cpuModels[0] ? plan.cpuModels[0].id : "")
            const selectedModelObj = plan.cpuModels.find(m => m.id === activeCpuModel) || plan.cpuModels[0]
            
            // Dynamic DDoS text if model defines one
            const displayProtection = (selectedModelObj && selectedModelObj.ddos) ? selectedModelObj.ddos : plan.protection

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 bg-white dark:bg-[#0e111a] border ${
                  isRecommended
                    ? "border-emerald-500/70 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/30"
                    : "border-gray-200/90 dark:border-white/[0.08] hover:border-emerald-500/50 hover:shadow-xl dark:hover:shadow-emerald-950/20"
                } hover:-translate-y-1 group`}
              >
                <div>
                  
                  {/* Top Badge & Category Icon */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.05] border border-gray-200 dark:border-white/10 flex items-center justify-center p-2 shrink-0">
                      <Image
                        src={categoryImg}
                        alt="Processor Family"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    {isRecommended ? (
                      <span className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-600 dark:text-emerald-400 shadow-sm shrink-0">
                        Recommended
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-gray-400 dark:text-gray-500">
                        {plan.location}
                      </span>
                    )}
                  </div>

                  {/* Plan Name & Processor Family */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white orbitron-font leading-snug">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mt-0.5">
                      {plan.processorFamily}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-5 pb-4 border-b border-gray-100 dark:border-white/[0.08]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold orbitron-font text-gray-900 dark:text-white">
                        {plan.priceFormatted.replace('/mo', '')}
                      </span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/mo</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 font-mono">
                      Unthrottled KVM • Fixed monthly billing
                    </p>
                  </div>

                  {/* CPU Model Selector (for plans with choice) */}
                  {plan.cpuModels.length > 1 ? (
                    <div className="mb-5 p-3 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/80 dark:border-white/[0.08]">
                      <div className="flex items-center justify-between mb-2">
                        <label 
                          htmlFor={`cpu-select-${plan.id}`}
                          className="text-[11px] font-mono font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        >
                          Select CPU Model:
                        </label>
                      </div>
                      <div className="relative">
                        <select
                          id={`cpu-select-${plan.id}`}
                          value={activeCpuModel}
                          onChange={(e) => handleCpuModelSelect(plan.id, e.target.value)}
                          className="w-full text-xs font-mono font-medium py-2 px-3 rounded-lg bg-white dark:bg-[#141722] text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer appearance-none pr-8"
                        >
                          {plan.cpuModels.map((m) => (
                            <option key={m.id} value={m.id}>
                              {m.name}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  ) : plan.cpuModels.length === 1 ? (
                    <div className="mb-5 py-2 px-3 rounded-xl bg-gray-50/70 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/[0.06] text-xs font-mono text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{plan.cpuModels[0].name}</span>
                    </div>
                  ) : null}

                  {/* Hardware Spec Rows */}
                  <div className="space-y-2 mb-6 text-xs sm:text-sm font-mono">
                    
                    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                        <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>vCores</span>
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {plan.vCores} vCores
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                        <MemoryStick className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Memory</span>
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {plan.ram} {plan.memoryType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                        <HardDrive className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Storage</span>
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {plan.storage} {plan.storageType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                        <Network className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Port</span>
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {plan.bandwidth}
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06]">
                      <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 shrink-0">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>DDoS Shield</span>
                      </span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400 truncate max-w-[170px] text-right">
                        {displayProtection}
                      </span>
                    </div>

                  </div>

                </div>

                {/* Specific CTA Button */}
                <Link
                  href={`/order?plan=${plan.id}${activeCpuModel ? `&cpu=${activeCpuModel}` : ''}`}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm tracking-wide text-center transition-all duration-200 bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-gray-950 shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Order {plan.name}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>

              </motion.div>
            )
          })}
        </div>

        {/* Spec Comparison Table with horizontal scroll on mobile */}
        <div className="mt-16 pt-10 border-t border-gray-200/80 dark:border-white/[0.08]">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold orbitron-font text-gray-900 dark:text-white">
              Full Tier Specification Comparison ({selectedLocation})
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 font-mono">
              Direct technical specification matrix for all tiers under {availableCategories.find(c => c.category === selectedCategory)?.label || selectedCategory}.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-[#0c0e15] shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm font-mono">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.03] text-gray-500 dark:text-gray-400">
                  <th className="py-3 px-4 font-semibold">Tier Plan</th>
                  <th className="py-3 px-4 font-semibold">vCores</th>
                  <th className="py-3 px-4 font-semibold">RAM</th>
                  <th className="py-3 px-4 font-semibold">Storage</th>
                  <th className="py-3 px-4 font-semibold">Port Speed</th>
                  <th className="py-3 px-4 font-semibold">DDoS Mitigation</th>
                  <th className="py-3 px-4 font-semibold">Price</th>
                  <th className="py-3 px-4 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/[0.04] text-gray-700 dark:text-gray-300">
                {currentPlans.map((p) => {
                  const activeCpu = chosenCpuModels[p.id] || (p.cpuModels[0] ? p.cpuModels[0].id : "")
                  return (
                    <tr key={p.id} className="hover:bg-gray-50/60 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4 font-bold text-gray-900 dark:text-white">
                        <div className="flex items-center gap-2">
                          <span>{p.name}</span>
                          {p.badge && (
                            <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                              {p.badge}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">{p.vCores} vCores</td>
                      <td className="py-3 px-4">{p.ram} {p.memoryType}</td>
                      <td className="py-3 px-4">{p.storage} {p.storageType}</td>
                      <td className="py-3 px-4">{p.bandwidth}</td>
                      <td className="py-3 px-4 text-emerald-600 dark:text-emerald-400">{p.protection}</td>
                      <td className="py-3 px-4 font-bold text-gray-900 dark:text-white">{p.priceFormatted}</td>
                      <td className="py-3 px-4 text-right">
                        <Link
                          href={`/order?plan=${p.id}${activeCpu ? `&cpu=${activeCpu}` : ''}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-gray-950 transition-colors"
                        >
                          <span>Order</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}
