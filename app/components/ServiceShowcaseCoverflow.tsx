"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import { useCurrency } from "./ui/CurrencySelector"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Server,
  Zap,
  Cpu,
  Monitor,
  Cloud,
  Globe,
  Bot
} from "lucide-react"

export interface ShowcaseService {
  id: string
  title: string
  subtitle: string
  badge: string
  image: string
  specs: string
  basePrice: number
  href: string
  icon: React.ElementType
  color: string
}

const services: ShowcaseService[] = [
  {
    id: "game-hosting",
    title: "Game Hosting",
    subtitle: "Minecraft & High-Tick Game Servers",
    badge: "Flagship Tier",
    image: "/showcase/3d/game-hosting.jpg",
    specs: "AMD EPYC DDR5 / Intel Xeon • 1 Gbps Shield",
    basePrice: 99,
    href: "/games",
    icon: Server,
    color: "emerald"
  },
  {
    id: "rdp-server",
    title: "RDP Server",
    subtitle: "Dedicated Windows Server Remote Desktop",
    badge: "Noida Datacenter",
    image: "/showcase/3d/rdp-server.jpg",
    specs: "Full Admin Access • NVMe SSD • Advanced DDoS Mitigation",
    basePrice: 548,
    href: "/rdp",
    icon: Monitor,
    color: "blue"
  },
  {
    id: "cloud-vps",
    title: "Cloud VPS",
    subtitle: "High-Frequency KVM Cloud Infrastructure",
    badge: "Global Edge",
    image: "/showcase/3d/cloud-vps.jpg",
    specs: "India, Germany, SG, US, CA • NVMe • IPv4",
    basePrice: 399,
    href: "/vps",
    icon: Cloud,
    color: "cyan"
  },
  {
    id: "vds-hosting",
    title: "VDS Hosting",
    subtitle: "Virtual Dedicated Servers with 100% Slices",
    badge: "India Cluster",
    image: "/showcase/3d/vds-hosting.jpg",
    specs: "100% Dedicated Cores • Noida & Delhi Nodes",
    basePrice: 1699,
    href: "/dedicated",
    icon: Cpu,
    color: "indigo"
  },
  {
    id: "web-hosting",
    title: "Web Hosting",
    subtitle: "Enterprise cPanel & High-Clock Hosting",
    badge: "Free SSL Included",
    image: "/showcase/3d/web-hosting.jpg",
    specs: "cPanel Panel • Fast Disk • Unmetered Port",
    basePrice: 100,
    href: "/webhosting",
    icon: Globe,
    color: "orange"
  },
  {
    id: "bot-hosting",
    title: "Bot Hosting",
    subtitle: "24/7 Always-On Discord Bot Runtimes",
    badge: "Instant Git Deploy",
    image: "/showcase/3d/bot-hosting.jpg",
    specs: "NodeJS, Python, Java, Rust • Zero Crash Lag",
    basePrice: 80,
    href: "/discord",
    icon: Bot,
    color: "purple"
  }
]

export default function ServiceShowcaseCoverflow() {
  const { convertPrice } = useCurrency()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }, [])

  // Auto-advance carousel when not hovered
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [isHovered, nextSlide])

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50) nextSlide()
    if (diff < -50) prevSlide()
    touchStartX.current = null
  }

  const activeService = services[currentIndex]

  return (
    <section
      className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header section matching user screenshot */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mb-5 max-w-xl mx-auto leading-relaxed">
          Powering gaming communities &amp; high-concurrency workloads. Backed by enterprise AMD &amp; Intel hardware and unmatched DDoS protection.
        </p>

        {/* Primary Order Server CTA button matching screenshot */}
        <Link
          href={activeService.href}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-extrabold text-sm orbitron-font text-gray-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 transition-all duration-300 shadow-[0_0_35px_rgba(16,185,129,0.45)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] hover:scale-105 active:scale-95"
        >
          <span>ORDER A SERVER</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
      </div>

      {/* 3D Coverflow Container */}
      <div className="relative w-full h-[430px] sm:h-[470px] flex items-center justify-center [perspective:1400px]">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous service"
          className="absolute left-2 sm:left-6 md:left-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 dark:bg-black/70 hover:bg-emerald-500/20 text-white hover:text-emerald-400 backdrop-blur-xl border border-white/15 hover:border-emerald-500/50 flex items-center justify-center transition-all duration-300 shadow-xl active:scale-90 hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next service"
          className="absolute right-2 sm:right-6 md:right-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 dark:bg-black/70 hover:bg-emerald-500/20 text-white hover:text-emerald-400 backdrop-blur-xl border border-white/15 hover:border-emerald-500/50 flex items-center justify-center transition-all duration-300 shadow-xl active:scale-90 hover:scale-110 group"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* 3D Coverflow Cards */}
        <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[370px] sm:h-[410px] flex items-center justify-center">
          {services.map((service, index) => {
            const total = services.length
            let diff = index - currentIndex
            // Wrap shortest distance around circular array
            if (diff > total / 2) diff -= total
            if (diff < -total / 2) diff += total

            const isActive = diff === 0
            const isVisible = Math.abs(diff) <= 2

            if (!isVisible) return null

            // Calculate 3D transforms based on offset
            let translateX = 0
            let translateZ = 0
            let rotateY = 0
            let scale = 1
            let opacity = 1
            let zIndex = 20

            if (isActive) {
              translateX = 0
              translateZ = 80
              rotateY = 0
              scale = 1.08
              opacity = 1
              zIndex = 30
            } else if (diff === -1) {
              translateX = -240
              translateZ = -40
              rotateY = 28
              scale = 0.88
              opacity = 0.7
              zIndex = 20
            } else if (diff === 1) {
              translateX = 240
              translateZ = -40
              rotateY = -28
              scale = 0.88
              opacity = 0.7
              zIndex = 20
            } else if (diff === -2) {
              translateX = -430
              translateZ = -140
              rotateY = 42
              scale = 0.72
              opacity = 0.35
              zIndex = 10
            } else if (diff === 2) {
              translateX = 430
              translateZ = -140
              rotateY = -42
              scale = 0.72
              opacity = 0.35
              zIndex = 10
            }

            return (
              <motion.div
                key={service.id}
                animate={{
                  x: translateX,
                  z: translateZ,
                  rotateY: rotateY,
                  scale: scale,
                  opacity: opacity
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                style={{
                  zIndex: zIndex,
                  transformStyle: "preserve-3d"
                }}
                onClick={() => {
                  if (isActive) {
                    // Navigate to service
                    window.location.href = service.href
                  } else {
                    setCurrentIndex(index)
                  }
                }}
                className={`absolute w-full h-full rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "frosted-glass-active shadow-[0_25px_60px_-10px_rgba(16,185,129,0.35)] ring-1 ring-emerald-500/40"
                    : "frosted-glass-card hover:opacity-90"
                }`}
              >
                {/* Specular sheen on top edge */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20 pointer-events-none" />

                {/* Badge on active card */}
                {isActive && (
                  <div className="absolute top-3 right-3 z-30">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 rounded-full shadow-lg backdrop-blur-md">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Image Container with Pop-out 3D Effect */}
                <div className="relative w-full h-[250px] sm:h-[280px] overflow-hidden flex items-center justify-center bg-gradient-to-b from-black/40 via-transparent to-black/80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 340px, 380px"
                    className={`object-cover transition-transform duration-500 ${
                      isActive ? "scale-105 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]" : "filter brightness-90"
                    }`}
                    priority={isActive}
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/30 to-transparent" />
                </div>

                {/* Bottom Content Area */}
                <div className="p-4 sm:p-5 pt-1 text-center flex flex-col justify-end relative z-20 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/90 to-transparent">
                  <h3
                    className={`text-xl sm:text-2xl font-black orbitron-font tracking-tight transition-colors ${
                      isActive
                        ? "text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
                        : "text-gray-300 dark:text-gray-300"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1.5 space-y-1"
                    >
                      <p className="text-xs text-gray-400 font-medium truncate">
                        {service.specs}
                      </p>
                      <div className="flex items-center justify-center gap-2 pt-1">
                        <span className="text-xs font-bold text-emerald-400">
                          From {convertPrice(service.basePrice.toString())}/mo
                        </span>
                        <span className="text-gray-600 text-[10px]">•</span>
                        <span className="text-[11px] font-semibold text-gray-300 inline-flex items-center gap-1 hover:text-emerald-400 transition-colors">
                          Configure Server <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium truncate mt-1">
                      {service.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {services.map((service, idx) => (
          <button
            key={service.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Select ${service.title}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                : "w-2 bg-gray-400/40 hover:bg-gray-400/70 dark:bg-white/20 dark:hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
