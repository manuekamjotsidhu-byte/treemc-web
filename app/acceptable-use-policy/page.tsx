'use client'

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ShieldAlert, AlertTriangle, ChevronDown, ListOrdered, ArrowUp } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import legalConfig from "../config/sections/legal.json"

export default function AupPage() {
  const aupData = (legalConfig as any).acceptableUsePolicy
  const [activeSection, setActiveSection] = useState<string>(aupData.sections[0]?.title || "")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const isManualScrolling = useRef(false)
  const navContainerRef = useRef<HTMLDivElement>(null)

  // High-performance throttled Scroll-Spy with requestAnimationFrame
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      // Toggle back-to-top visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }

      if (isManualScrolling.current) {
        ticking = false
        return
      }

      const scrollPosition = window.scrollY + 140
      const sections = aupData.sections

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].title)
        if (el && scrollPosition >= el.offsetTop - 20) {
          setActiveSection(sections[i].title)
          break
        }
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", onScroll)
  }, [aupData.sections])

  // Scroll active nav item ONLY inside the desktop sidebar list.
  // Note: We use container.scrollTo() instead of element.scrollIntoView() to prevent
  // mobile viewport jitter and window-scroll interruptions.
  useEffect(() => {
    if (!activeSection) return
    if (typeof window !== "undefined" && window.innerWidth >= 1024 && navContainerRef.current) {
      const activeBtn = document.getElementById(`nav-btn-${activeSection}`)
      if (activeBtn) {
        const container = navContainerRef.current
        const btnOffset = activeBtn.offsetTop - container.offsetTop
        container.scrollTo({
          top: Math.max(0, btnOffset - 30),
          behavior: "smooth"
        })
      }
    }
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    isManualScrolling.current = true
    setActiveSection(sectionId)
    setMobileMenuOpen(false)

    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -90
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }

    setTimeout(() => {
      isManualScrolling.current = false
    }, 900)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />

      <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
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

        {/* Mobile Sticky Quick Navigation Bar (phones & tablets) */}
        <div className="lg:hidden sticky top-20 z-20 mb-6">
          <div className="bg-white/95 dark:bg-[#0e111a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg shadow-black/5 p-3">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex-1 flex items-center justify-between px-3 py-2 rounded-xl bg-gray-100 dark:bg-white/[0.04] text-xs font-semibold text-gray-900 dark:text-white"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <ListOrdered className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="truncate">{activeSection || "Select Section"}</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ml-1.5 ${
                    mobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="mt-2 pt-2 border-t border-gray-200/60 dark:border-white/10 max-h-60 overflow-y-auto space-y-1 overscroll-contain pr-1 scrollbar-thin scrollbar-thumb-emerald-500/20">
                {aupData.sections.map((section: any, index: number) => {
                  const isActive = activeSection === section.title
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => scrollToSection(section.title)}
                      className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-emerald-500 text-gray-950 font-bold"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.05]"
                      }`}
                    >
                      <span className="truncate">{section.title}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gray-950 shrink-0 ml-2" />}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Table of Contents Sticky Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block lg:col-span-1"
          >
            <div className="sticky top-28 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-4 shadow-lg shadow-black/5">
              <div className="flex items-center justify-between mb-3 px-1">
                <h2 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  AUP Sections
                </h2>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <nav
                ref={navContainerRef}
                className="space-y-1.5 max-h-[68vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-emerald-500/20 overscroll-contain"
              >
                {aupData.sections.map((section: any, index: number) => {
                  const isActive = activeSection === section.title
                  return (
                    <button
                      id={`nav-btn-${section.title}`}
                      key={index}
                      type="button"
                      onClick={() => scrollToSection(section.title)}
                      className={`w-full text-left px-3.5 py-2.5 text-xs rounded-xl transition-all duration-150 flex items-center justify-between group ${
                        isActive
                          ? "bg-emerald-500 text-gray-950 font-extrabold shadow-md shadow-emerald-500/20"
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

          {/* Policy Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 lg:col-span-3 space-y-6"
          >
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong>Notice:</strong> {aupData.intro}
              </div>
            </div>

            {aupData.sections.map((section: any, index: number) => {
              const isActive = activeSection === section.title
              return (
                <div
                  key={index}
                  id={section.title}
                  className={`scroll-mt-24 p-5 sm:p-7 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md rounded-2xl shadow-sm border transition-colors duration-200 ${
                    isActive
                      ? "border-emerald-500/70 dark:border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-emerald-950/10 shadow-lg"
                      : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                      {index < 9 ? `0${index + 1}` : index + 1}
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

      {/* Floating Back-To-Top Button for phone / mobile ergonomics */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-emerald-500 text-gray-950 shadow-xl shadow-emerald-500/25 hover:bg-emerald-400 active:scale-95 transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  )
}
