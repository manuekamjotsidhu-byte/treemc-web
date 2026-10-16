'use client'

import { motion } from "framer-motion"
import { Check, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CurrencySelector, useCurrency } from "./ui/CurrencySelector"
import pricingConfig from "../config/sections/pricing.json"
import type { PricingConfig } from "../types/pricing"
import { useLanguage } from '../contexts/LanguageContext'

const config = pricingConfig as PricingConfig

export default function PricingSection() {
  const { t } = useLanguage()
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()

  return (
    <div id="plans" className="bg-gray-50 dark:bg-[#0a0b0f] py-24 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative z-20 max-w-7xl mx-auto text-left mb-12"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>Enterprise Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-2 orbitron-font">
              {t('pricingSection.title')}{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {t('pricingSection.titleHighlight')}
              </span>
            </h2>
            <p className="text-sm max-w-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('pricingSection.description')}
            </p>
          </div>

          <CurrencySelector
            selectedCurrency={selectedCurrency}
            onCurrencyChange={setSelectedCurrency}
            className="w-full sm:w-64"
          />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {config.section.plans.map((plan, index) => {
            const isPopular = plan.popular
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-xl rounded-2xl overflow-hidden border transition-all duration-300 shadow-xl shadow-black/5 hover:shadow-emerald-950/20 hover:-translate-y-1.5 group ${
                  isPopular
                    ? "border-emerald-500/50 dark:border-emerald-500/40 ring-1 ring-emerald-500/30"
                    : "border-gray-200 dark:border-white/[0.08] hover:border-emerald-500/40"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-[11px] font-bold text-gray-950 bg-emerald-400 rounded-full shadow-md">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card Live Image Banner Header */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={plan.image || "/placeholder.svg"}
                    alt={t(plan.titleKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-[#0e111a] via-gray-900/60 dark:via-[#0e111a]/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white orbitron-font">
                      {t(plan.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-300 line-clamp-1">
                      {t(plan.descriptionKey)}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  {/* Price Block */}
                  <div className="mb-6 pb-4 border-b border-gray-100 dark:border-white/[0.06]">
                    <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1">
                      Starting at
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black orbitron-font text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        {convertPrice(plan.basePrice.toString())}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">/month</span>
                    </div>
                  </div>

                  {/* Features Specifications List */}
                  <ul className="space-y-2 mb-8">
                    {plan.featuresKeys.map((featureKey, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2.5 text-xs sm:text-sm py-2 px-3 rounded-xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] text-gray-700 dark:text-gray-300"
                      >
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="font-medium">{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Action Button */}
                  <div>
                    <Link
                      href={plan.link}
                      className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-between group/btn ${
                        isPopular
                          ? "button-primary text-button-primary shadow-emerald-950/20 hover:scale-[1.02]"
                          : "bg-gray-100 dark:bg-white/[0.05] hover:bg-emerald-500 hover:text-gray-950 dark:hover:bg-emerald-500 dark:hover:text-gray-950 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white"
                      }`}
                    >
                      <span className="w-full text-center orbitron-font">
                        {t(plan.buttonTextKey)}
                      </span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 shrink-0" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 pt-6 border-t border-gray-200/70 dark:border-white/[0.06]"
        >
          <p className="orbitron-font text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {t('pricingSection.footerText')}{" "}
            <a
              href="https://discord.gg/MJFPbjAdJY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 font-bold underline underline-offset-4 ml-1"
            >
              {t('pricingSection.footerLinkText')}
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
