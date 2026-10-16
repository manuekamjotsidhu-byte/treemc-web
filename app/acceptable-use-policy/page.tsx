'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import { ShieldAlert, FileText, AlertTriangle } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import legalConfig from "../config/sections/legal.json"

export default function AupPage() {
  const aupData = (legalConfig as any).acceptableUsePolicy
  const [activeSection, setActiveSection] = useState<string>(aupData.sections[0]?.title || "")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setActiveSection(sectionId)
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
            <ShieldAlert className="w-4 h-4 icon-text-primary" />
            <span className="icon-text-primary text-sm font-semibold tracking-wide">Infrastructure Safety</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 orbitron-font">
            TreeMC Host <span className="icon-text-primary">Acceptable Use Policy</span> (AUP)
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {aupData.lastUpdated} • Applies to Web, Games, VPS, VDS, Dedicated &amp; IPs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents Sticky Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 bg-white/70 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-4 shadow-sm">
              <h2 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                AUP Sections
              </h2>
              <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1">
                {aupData.sections.map((section: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(section.title)}
                    className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors truncate ${
                      activeSection === section.title
                        ? "button-primary text-button-primary font-bold shadow-sm"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Policy Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong>Notice:</strong> {aupData.intro}
              </div>
            </div>

            {aupData.sections.map((section: any, index: number) => (
              <div
                key={index}
                id={section.title}
                className="p-6 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm hover:border-emerald-500/30 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2.5 orbitron-font">
                  {section.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
