'use client'

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ShieldCheck, Clock, CheckCircle2, XCircle, AlertCircle, Server, Check, X, FileText } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import legalConfig from "../config/sections/legal.json"

export default function SlaPage() {
  const slaData = (legalConfig as any).slaPolicy
  const [activeSection, setActiveSection] = useState<string>(slaData.sections[0]?.title || "1. Uptime Guarantee")
  const isManualScrolling = useRef(false)

  // Automatic Scroll-Spy: detect which section is currently in view as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return

      const scrollPosition = window.scrollY + 160
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

  const qualifyingIncidents = [
    "Network outages",
    "Power outages",
    "Datacenter failures",
    "Host node failures or issues",
    "Infrastructure-level service disruptions"
  ]

  const notEligibleItems = [
    "Network packet loss",
    "Network throughput limitations",
    "Issues caused by customer configuration or actions",
    "Failures affecting only an individual VPS",
    "Performance-related issues",
    "Scheduled maintenance",
    "VPS cancellation or suspension",
    "DDoS attacks"
  ]

  const eligibilityRequirements = [
    "The account must be active and in good standing.",
    "No chargeback or payment dispute must have been filed.",
    "A support ticket must be created within 24 hours of the qualifying incident.",
    "The affected service must still be active and not cancelled or suspended.",
    "SLA credits can only be claimed once per incident."
  ]

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

        {/* SLA Key Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          <div className="p-4 rounded-xl bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm">
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Uptime Target</div>
            <div className="text-2xl font-black text-emerald-500 orbitron-font">95%</div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Guaranteed across services</div>
          </div>
          <div className="p-4 rounded-xl bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm">
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Min. Continuous Downtime</div>
            <div className="text-2xl font-black text-gray-900 dark:text-white orbitron-font">2 Hours</div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Required for credit claim</div>
          </div>
          <div className="p-4 rounded-xl bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm">
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Claim Window</div>
            <div className="text-2xl font-black text-emerald-500 orbitron-font">72 Hours</div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Submit ticket from incident</div>
          </div>
          <div className="p-4 rounded-xl bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm">
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">Max. Compensation</div>
            <div className="text-2xl font-black text-gray-900 dark:text-white orbitron-font">2 Weeks</div>
            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">Service credit extension</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents Sticky Sidebar */}
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

          {/* SLA Main Detailed Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Section 1: Uptime Guarantee */}
            <div
              id="1. Uptime Guarantee"
              className={`scroll-mt-28 p-6 sm:p-7 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md rounded-2xl shadow-sm transition-all duration-300 ${
                activeSection === "1. Uptime Guarantee"
                  ? "border-2 border-emerald-500/60 dark:border-emerald-500/50 shadow-emerald-950/10 shadow-xl"
                  : "border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  01
                </span>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white orbitron-font">
                  1. Uptime Guarantee
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                95% Uptime Guarantee
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We guarantee a 95% uptime SLA across our services. A minimum of 2 hours of continuous downtime is required before SLA credits can be issued.
              </p>

              <div className="mt-4 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden bg-gray-50/50 dark:bg-black/20">
                <div className="px-4 py-3 bg-gray-100/70 dark:bg-white/[0.03] border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    Eligible Downtime Credits
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">Service Extensions</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 uppercase text-[11px] font-bold">
                        <th className="py-3 px-4">Downtime Period</th>
                        <th className="py-3 px-4 text-emerald-600 dark:text-emerald-400">Service Credit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                      {slaData.downtimeTable.map((tier: any, i: number) => (
                        <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-800 dark:text-gray-200">
                            {tier.period}
                          </td>
                          <td className="py-3 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                            {tier.credit}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Section 2: SLA Credit Requests */}
            <div
              id="2. SLA Credit Requests"
              className={`scroll-mt-28 p-6 sm:p-7 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md rounded-2xl shadow-sm transition-all duration-300 ${
                activeSection === "2. SLA Credit Requests"
                  ? "border-2 border-emerald-500/60 dark:border-emerald-500/50 shadow-emerald-950/10 shadow-xl"
                  : "border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  02
                </span>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white orbitron-font">
                  2. SLA Credit Requests
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                SLA credits are provided upon request through a support ticket. Customers must submit an SLA claim ticket within 72 hours of a qualifying incident to be eligible for compensation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Qualifying Incidents */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <h3 className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                      Qualifying Incidents
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {qualifyingIncidents.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Eligible */}
                <div className="p-4 rounded-xl bg-rose-500/[0.04] border border-rose-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <h3 className="text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wide">
                      Not Eligible
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {notEligibleItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Eligibility Requirements */}
            <div
              id="3. Eligibility Requirements"
              className={`scroll-mt-28 p-6 sm:p-7 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md rounded-2xl shadow-sm transition-all duration-300 ${
                activeSection === "3. Eligibility Requirements"
                  ? "border-2 border-emerald-500/60 dark:border-emerald-500/50 shadow-emerald-950/10 shadow-xl"
                  : "border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  03
                </span>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white orbitron-font">
                  3. Eligibility Requirements
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                To claim SLA credits, customers must meet all of the following requirements:
              </p>

              <div className="space-y-2.5">
                {eligibilityRequirements.map((req, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-gray-50/70 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/10 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: Incident Handling */}
            <div
              id="4. Incident Handling"
              className={`scroll-mt-28 p-6 sm:p-7 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md rounded-2xl shadow-sm transition-all duration-300 ${
                activeSection === "4. Incident Handling"
                  ? "border-2 border-emerald-500/60 dark:border-emerald-500/50 shadow-emerald-950/10 shadow-xl"
                  : "border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  04
                </span>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white orbitron-font">
                  4. Incident Handling
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Multiple outages may be considered a single incident if they share the same root cause.
              </p>

              {/* Example Incident Box */}
              <div className="p-4 rounded-xl bg-amber-500/[0.04] dark:bg-amber-500/[0.03] border border-amber-500/20 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  <h3 className="text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                    Example Incident
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  If a host node experiences an SSD failure, temporarily recovers, and then goes offline again due to the same hardware issue, it will be treated as one SLA incident and only one SLA claim will be eligible.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
                We reserve the right to review each SLA claim and deny compensation where the incident does not qualify under this policy.
              </p>
            </div>

            {/* Section 5: Policy Changes */}
            <div
              id="5. Policy Changes"
              className={`scroll-mt-28 p-6 sm:p-7 bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-md rounded-2xl shadow-sm transition-all duration-300 ${
                activeSection === "5. Policy Changes"
                  ? "border-2 border-emerald-500/60 dark:border-emerald-500/50 shadow-emerald-950/10 shadow-xl"
                  : "border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  05
                </span>
                <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white orbitron-font">
                  5. Policy Changes
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                We may update this SLA policy from time to time. Customers are responsible for reviewing the latest version of this policy.
              </p>

              <div className="p-3.5 rounded-xl bg-gray-50/70 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/10 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                For significant changes, we may provide notification through official communication channels.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
