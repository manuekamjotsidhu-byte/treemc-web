'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import {
  ShieldCheck,
  ShieldAlert,
  Shield,
  Zap,
  Network,
  Cpu,
  Server,
  Activity,
  Layers,
  Lock,
  Gauge,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Flame,
  Globe
} from "lucide-react"
import { FaDiscord } from "react-icons/fa6"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ddosConfigData from "../config/sections/ddos.json"
import { DdosConfig } from "../types/ddos"

const config = ddosConfigData as DdosConfig

export default function DdosProtectionPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{config.header.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black orbitron-font tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
          >
            {config.header.title}{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              {config.header.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {config.header.subtitle}
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/80 dark:border-white/[0.08] shadow-sm hover:border-emerald-500/40 transition-all text-center">
              <div className="text-2xl sm:text-3xl font-black orbitron-font text-emerald-500 dark:text-emerald-400 mb-1">
                17+ Tbit/s
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                Mitigation Capacity
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/80 dark:border-white/[0.08] shadow-sm hover:border-emerald-500/40 transition-all text-center">
              <div className="text-2xl sm:text-3xl font-black orbitron-font text-cyan-500 dark:text-cyan-400 mb-1">
                L3 – L7
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                Full-Stack Scrubbing
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/80 dark:border-white/[0.08] shadow-sm hover:border-emerald-500/40 transition-all text-center">
              <div className="text-2xl sm:text-3xl font-black orbitron-font text-emerald-500 dark:text-emerald-400 mb-1">
                Free
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                Always Included
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/80 dark:border-white/[0.08] shadow-sm hover:border-emerald-500/40 transition-all text-center">
              <div className="text-2xl sm:text-3xl font-black orbitron-font text-indigo-500 dark:text-indigo-400 mb-1">
                Uncapped
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider">
                Zero Time Restrictions
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Understanding the Threat */}
      <section className="py-16 relative border-t border-gray-200/70 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5" /> Threat Analysis
            </div>
            <h2 className="text-2xl sm:text-3xl font-black orbitron-font text-gray-900 dark:text-white mb-4">
              {config.threatOverview.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {config.threatOverview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.threatOverview.layers.map((layer, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0e111a]/80 backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4">
                    {layer.badge}
                  </div>
                  <h3 className="text-xl font-bold orbitron-font text-gray-900 dark:text-white mb-3">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {layer.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 dark:border-white/[0.06]">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Target Vector:</span>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 mt-1">
                    {layer.targets}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Architecture — OSI 7 Layer Model */}
      <section className="py-16 bg-gray-100/50 dark:bg-[#07090e] border-y border-gray-200/70 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-500 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" /> OSI Model Mapping
            </div>
            <h2 className="text-2xl sm:text-3xl font-black orbitron-font text-gray-900 dark:text-white mb-3">
              {config.osiModel.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {config.osiModel.subtitle}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-xl shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] text-gray-500 dark:text-gray-400 uppercase text-[11px] font-bold tracking-wider">
                    <th className="py-4 px-4 sm:px-6">Layer</th>
                    <th className="py-4 px-4 sm:px-6">Application</th>
                    <th className="py-4 px-4 sm:px-6">Data Unit</th>
                    <th className="py-4 px-4 sm:px-6">Description</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-600 dark:text-emerald-400">Vector Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                  {config.osiModel.layers.map((layer) => (
                    <tr
                      key={layer.layer}
                      className={`hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors ${
                        layer.isCommonAttackVector ? "bg-emerald-500/[0.02] dark:bg-emerald-500/[0.02]" : ""
                      }`}
                    >
                      <td className="py-4 px-4 sm:px-6 font-bold orbitron-font">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                              layer.isCommonAttackVector
                                ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/30"
                                : "bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            L{layer.layer}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900 dark:text-white">
                        {layer.name}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-gray-500 dark:text-gray-400 font-mono text-xs">
                        {layer.data}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-gray-600 dark:text-gray-300">
                        {layer.description}
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-medium text-emerald-600 dark:text-emerald-400">
                        {layer.vectorExample !== "-" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs">
                            <ShieldAlert className="w-3 h-3 text-emerald-500 shrink-0" />
                            {layer.vectorExample}
                          </span>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Core Infrastructure — Powered by OVHcloud */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> Backbone Scrubbing
            </div>
            <h2 className="text-2xl sm:text-3xl font-black orbitron-font text-gray-900 dark:text-white mb-3">
              {config.coreInfrastructure.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {config.coreInfrastructure.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.coreInfrastructure.features.map((feat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/80 dark:bg-[#0e111a]/80 backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] shadow-sm hover:border-emerald-500/40 hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold orbitron-font text-gray-900 dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Protection — Cloudflare Magic Transit & Spectrum */}
      <section className="py-16 bg-gray-100/50 dark:bg-[#07090e] border-y border-gray-200/70 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" /> Layer 7 Defense
            </div>
            <h2 className="text-2xl sm:text-3xl font-black orbitron-font text-gray-900 dark:text-white mb-3">
              {config.hybridProtection.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {config.hybridProtection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.hybridProtection.features.map((feat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/80 dark:bg-[#0e111a]/80 backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] shadow-sm hover:border-indigo-500/40 hover:-translate-y-1 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-4 group-hover:scale-110 transition-transform">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold orbitron-font text-gray-900 dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Tiers: Standard vs Premium */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-3">
              <Server className="w-3.5 h-3.5" /> Tier Breakdown
            </div>
            <h2 className="text-2xl sm:text-3xl font-black orbitron-font text-gray-900 dark:text-white mb-3">
              {config.protectionCategories.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {config.protectionCategories.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {config.protectionCategories.categories.map((tier) => (
              <div
                key={tier.id}
                className={`p-8 rounded-3xl backdrop-blur-xl border shadow-xl flex flex-col justify-between ${
                  tier.id === 'premium'
                    ? 'bg-gradient-to-b from-white/90 to-white/70 dark:from-[#111726]/90 dark:to-[#0d101a]/90 border-emerald-500/40 ring-1 ring-emerald-500/30'
                    : 'bg-white/80 dark:bg-[#0e111a]/80 border-gray-200 dark:border-white/[0.08]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        tier.id === 'premium'
                          ? 'bg-emerald-500 text-black shadow-md'
                          : 'bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      {tier.id === 'premium' ? 'High-Risk Workloads' : 'Essential Workloads'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black orbitron-font text-gray-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
                    {tier.tagline}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Available On List */}
                  <div className="mb-6 p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-emerald-500" />
                      Available On Infrastructure:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                      {tier.availableOn.map((loc, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span>{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How it works / Advanced Mitigation */}
                  {tier.howItWorks && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-2">
                        How it Works:
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        {tier.howItWorks}
                      </p>
                      {tier.mitigationNotice && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-400 text-xs flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{tier.mitigationNotice}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {tier.advancedMitigation && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                        Advanced Multi-Upstream Mitigation:
                      </h4>
                      <ul className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                        {tier.advancedMitigation.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-5 border-t border-gray-200/80 dark:border-white/[0.08]">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Best Suited For:
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                    {tier.bestSuitedFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-16 bg-gray-100/50 dark:bg-[#07090e] border-y border-gray-200/70 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5" /> Side-by-Side Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-black orbitron-font text-gray-900 dark:text-white mb-3">
              {config.comparisonMatrix.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {config.comparisonMatrix.subtitle}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/[0.08] bg-white/80 dark:bg-[#0e111a]/90 backdrop-blur-xl shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] text-gray-500 dark:text-gray-400 uppercase text-[11px] font-bold tracking-wider">
                    <th className="py-4 px-6">Feature / Capability</th>
                    <th className="py-4 px-6 text-center w-1/4">Standard Protection</th>
                    <th className="py-4 px-6 text-center w-1/4 text-emerald-600 dark:text-emerald-400 bg-emerald-500/[0.03]">
                      Premium Protection
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                  {config.comparisonMatrix.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-md text-xs font-bold ${
                            row.standardStatus === 'yes'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                              : row.standardStatus === 'warning'
                              ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                              : row.standardStatus === 'limited'
                              ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20'
                              : 'text-gray-400'
                          }`}
                        >
                          {row.standard}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center bg-emerald-500/[0.02]">
                        <span
                          className={`inline-block px-3 py-1 rounded-md text-xs font-bold ${
                            row.premiumStatus === 'yes'
                              ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              : row.premiumStatus === 'limited'
                              ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                              : 'text-gray-400'
                          }`}
                        >
                          {row.premium}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Which Protection Should You Choose? */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-500 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" /> Recommendation Guide
            </div>
            <h2 className="text-2xl sm:text-3xl font-black orbitron-font text-gray-900 dark:text-white">
              {config.recommendations.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0e111a]/80 backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] shadow-sm">
              <div className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Choose Standard Protection If:
              </div>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {config.recommendations.standardRecommendation}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/[0.04] backdrop-blur-xl border border-emerald-500/30 shadow-sm">
              <div className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                Choose Premium Protection If:
              </div>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                {config.recommendations.premiumRecommendation}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy & Important Disclaimer */}
      <section className="py-16 bg-gray-100/50 dark:bg-[#07090e] border-t border-gray-200/70 dark:border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Policy */}
          <div className="p-8 rounded-3xl bg-white/80 dark:bg-[#0e111a]/80 backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] shadow-sm">
            <h3 className="text-xl font-bold orbitron-font text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              {config.policy.title}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {config.policy.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-8 rounded-3xl bg-amber-500/5 dark:bg-amber-500/[0.03] backdrop-blur-xl border border-amber-500/20 shadow-sm">
            <h3 className="text-lg font-bold orbitron-font text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              {config.disclaimer.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {config.disclaimer.content}
            </p>
          </div>

          {/* Deploy CTA */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-black orbitron-font mb-2">
                Deploy with Multi-Layer Protection
              </h3>
              <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
                All game servers, Cloud VPS, and Windows RDP instances feature automated DDoS mitigation out of the box.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/games"
                className="px-6 py-3 rounded-xl bg-white text-gray-900 font-bold text-xs sm:text-sm shadow-lg hover:bg-emerald-50 transition-all flex items-center gap-2"
              >
                <span>Game Servers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/vps"
                className="px-6 py-3 rounded-xl bg-emerald-800/60 border border-white/20 text-white font-bold text-xs sm:text-sm hover:bg-emerald-800 transition-all"
              >
                Cloud VPS
              </Link>
              <a
                href="https://discord.gg/wbH8ZVAsYg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all"
                title="Discord Community"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
