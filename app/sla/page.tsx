'use client'

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ShieldCheck, Clock, CheckCircle2, AlertCircle } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import legalConfig from "../config/sections/legal.json"

export default function SlaPage() {
  const slaData = (legalConfig as any).slaPolicy
  const [activeSection, setActiveSection] = useState<string>(slaData.sections[0]?.title || "")
  const isManualScrolling = useRef(false)

  // Automatic Scroll-Spy: detect which section is currently in view as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return

      const scrollPosition = window.scrollY + 160 // offset for navbar and top padding
      const sections = slaData.sections.map((section: any) => {
        const el = document.getElementById(section.title)
        return {
          title: section.title,
          top: el ? el.offsetTop : 0,
          height: el ? el.offsetHeight : 0
        }
      })

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].top - 20) {
          setActiveSection(sections[i].title)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [slaData.sections])

  const scrollToSection = (sectionId: string) => {
    isManualScrolling.current = true
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -120
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setTimeout(() => {
      isManualScrolling.current = false
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />

      <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 card-primary px-4 py-2 rounded-full mb-4">
            <Clock className="w-4 h-4 icon-text-primary" />
            <span className="icon-text-primary text-sm font-semibold tracking-wide">Uptime Assurance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 orbitron-font">
            Service Level Agreement <span className="icon-text-primary">(SLA)</span>
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {slaData.lastUpdated} • 95% Uptime Guarantee &amp; Service Credit Policy
          </p>
        </motion.div>

        {/* SLA Credits Table Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 p-6 rounded-2xl bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-emerald-500" />
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white orbitron-font">
                95% Uptime Guarantee Credit Schedule
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                A minimum of 2 hours continuous downtime is required before SLA credit eligibility.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 uppercase text-[11px] font-bold">
                  <th className="py-3 px-4">Continuous Downtime Period</th>
                  <th className="py-3 px-4 text-emerald-600 dark:text-emerald-400">Eligible Service Credit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                {slaData.downtimeTable.map((tier: any, i: number) => (
                  <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                    <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">{tier.period}</td>
                    <td className="py-3 px-4 font-bold text-emerald-500 dark:text-emerald-400">{tier.credit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents Sticky Sidebar with Auto-Scroll Spy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-4 shadow-lg shadow-black/5">
              <div className="flex items-center justify-between mb-3 px-1">
                <h2 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  SLA Sections
                </h2>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <nav className="space-y-1.5">
                {slaData.sections.map((section: any, index: number) => {
                  const isActive = activeSection === section.title
                  return (
                    <button
                      key={index}
                      onClick={() => scrollToSection(section.title)}
                      className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl transition-all duration-200 flex items-center justify-between group ${
                        isActive
                          ? "bg-emerald-500 text-gray-950 font-extrabold shadow-md shadow-emerald-500/20 scale-[1.02]"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.05]"
                      }`}
                    >
                      <span className="truncate">{section.title}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-950 shrink-0 ml-1.5" />
                      )}
                    </button>
                  )
                })}
              </nav>
            </div>
          </motion.div>

          {/* SLA Content with Scroll Margins */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            {slaData.sections.map((section: any, index: number) => {
              const isActive = activeSection === section.title
              return (
                <div
                  key={index}
                  id={section.title}
                  className={`scroll-mt-28 p-6 sm:p-7 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md rounded-2xl shadow-sm transition-all duration-300 ${
                    isActive
                      ? "border-2 border-emerald-500/60 dark:border-emerald-500/50 shadow-emerald-950/10 shadow-xl"
                      : "border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                      0{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white orbitron-font">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
