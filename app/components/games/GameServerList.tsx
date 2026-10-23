"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Server, Shield, Cpu, HardDrive, MemoryStick, ChevronRight, Network, Archive, Database, Sliders, ShieldCheck, ArrowRight } from "lucide-react"
import gamesConfig from "../../config/sections/games.json"
import type { GamesConfig, Game, GamePlan, GameLocation } from "../../types/games"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"
import uiConfig from "../../config/sections/ui.json"

const config = gamesConfig as GamesConfig

const getPlanBlockImage = (plan: GamePlan, gameId: string) => {
  if (gameId !== "minecraft") {
    return "/placeholder.svg"
  }
  const ramNum = parseInt(plan.ram) || 2
  const name = (plan.name || "").toLowerCase()
  if (name.includes("gravel") || ramNum <= 2) return "/blocks/gravel.png"
  if (name.includes("andesite") || ramNum === 3) return "/blocks/andesite.png"
  if (name.includes("cobble") || ramNum === 4) return "/blocks/cobblestone.png"
  if (name.includes("stone") || ramNum === 5) return "/blocks/stone.png"
  if (name.includes("deepslate") || ramNum === 6) return "/blocks/deepslate.png"
  if (name.includes("dirt") || ramNum === 7) return "/blocks/dirt.png"
  if (name.includes("iron") || ramNum === 8) return "/blocks/iron.png"
  if (name.includes("copper") || ramNum === 9) return "/blocks/gold.png"
  if (name.includes("gold") || ramNum === 10) return "/blocks/gold.png"
  if (name.includes("emerald") || ramNum === 12) return "/blocks/emerald.png"
  if (name.includes("diamond") || ramNum <= 18) return "/blocks/diamond.png"
  if (name.includes("netherite") || ramNum <= 24) return "/blocks/netherite.png"
  if (name.includes("obsidian") || ramNum <= 28) return "/blocks/obsidian.png"
  return "/blocks/bedrock.png"
}


export default function GameServerList() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const { t } = useLanguage()
  const [selectedGame, setSelectedGame] = useState<string>(config.games[0]?.id || "")
  const [selectedLocation, setSelectedLocation] = useState<string>(config.locations[0]?.id || "")
  const [selectedPlanType, setSelectedPlanType] = useState<string>(config.planTypes[0]?.id || "budget")

  useEffect(() => {
    const game = searchParams.get("game")
    const location = searchParams.get("location")
    const plan = searchParams.get("plan")

    if (game && config.games.some((g: Game) => g.id === game)) {
      setSelectedGame(game)
    }
    if (location && config.locations.some((l) => l.id === location)) {
      setSelectedLocation(location)
    }
    if (plan && config.planTypes.some((pt) => pt.id === plan)) {
      setSelectedPlanType(plan)
    }
  }, [searchParams])

  useEffect(() => {
    const params = new URLSearchParams()
    params.set("game", selectedGame)
    params.set("location", selectedLocation)
    params.set("plan", selectedPlanType)
    const newUrl = `/games?${params.toString()}`
    const currentUrl = window.location.pathname + window.location.search
    if (newUrl !== currentUrl) {
      router.replace(newUrl)
    }
  }, [selectedGame, selectedLocation, selectedPlanType, router])

  const getDisplayLocation = (loc: any, planType: string) => {
    if (!loc) return ""
    if (loc.id === "india") {
      return planType === "budget" ? "India (Noida)" : "India (Noida / Delhi)"
    }
    return loc.name || ""
  }

  const currentGame = config.games.find((g: Game) => g.id === selectedGame)
  const currentLocation = config.locations.find((loc) => loc.id === selectedLocation)
  const availablePlanTypes = currentLocation?.availablePlanTypes || []

  const handlePlanTypeSelection = (planType: string) => {
    setSelectedPlanType(planType)
    const currentLoc = config.locations.find((loc) => loc.id === selectedLocation)
    if (currentLoc && !currentLoc.availablePlanTypes.includes(planType)) {
      const compatibleLocation = config.locations.find((loc) => loc.availablePlanTypes.includes(planType))
      if (compatibleLocation) {
        setSelectedLocation(compatibleLocation.id)
      }
    }
  }

  const handleLocationSelection = (locationId: string) => {
    setSelectedLocation(locationId)
    const newLocation = config.locations.find((loc) => loc.id === locationId)
    if (newLocation && !newLocation.availablePlanTypes.includes(selectedPlanType)) {
      if (newLocation.availablePlanTypes.length > 0) {
        setSelectedPlanType(newLocation.availablePlanTypes[0])
      }
    }
  }

  if (!currentGame || !currentLocation) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 dark:bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${currentGame?.banner}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/40 to-transparent dark:from-[#0a0b0f] dark:via-[#0a0b0f]/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-gray-50/40 dark:from-[#0a0b0f] dark:via-[#0a0b0f]/95 dark:to-[#0a0b0f]/60" />
      </div>

      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-left mb-8"
          style={
            {
              "--game-color": currentGame?.primaryColor || "#3b82f6",
            } as React.CSSProperties
          }
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-left gap-2 bg-[var(--game-color)]/10 px-4 py-2 rounded-tl-xl rounded-br-xl mb-4">
                <span className="text-[var(--game-color)] text-sm">{t('gameServerList.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 orbitron-font">
                {t('gameServerList.title').split(' ').slice(0, -2).join(' ')}{' '}
                <span className="text-[var(--game-color)]">{t('gameServerList.title').split(' ').slice(-2).join(' ')}</span>
              </h2>
              <p className="text-md text-gray-600 max-w-3xl dark:text-gray-300">
                {t('gameServerList.description')}
              </p>
            </div>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              className="w-full sm:w-64 mt-4 sm:mt-0"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
          style={
            {
              "--game-color": currentGame?.primaryColor || "#3b82f6",
            } as React.CSSProperties
          }
        >
          <div className="flex flex-col lg:flex-row gap-6 justify-left items-left">
            <div className="flex flex-col items-left">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{t('gameServerList.step1')}</h3>
              <div className="flex flex-wrap gap-2">
                {config.planTypes
                  .filter((type) => availablePlanTypes.includes(type.id))
                  .map((type) => {
                    const isSelected = selectedPlanType === type.id

                    return (
                      <button
                        key={type.id}
                        onClick={() => handlePlanTypeSelection(type.id)}
                        className={`flex items-center gap-3 px-6 py-2 rounded-tl-xl rounded-br-xl font-medium transition-all duration-300 backdrop-blur-sm ${isSelected
                            ? "bg-[var(--game-color)]/10 border border-[var(--game-color)]/30 text-[var(--game-color)] shadow-lg backdrop-blur-sm"
                            : "bg-white/5 dark:bg-gray-800/20 border border-[var(--game-color)]/30 dark:border-white/10 text-gray-700 dark:text-gray-400 hover:bg-[radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.05)_0%,transparent_100%)] hover:border-[var(--game-color)]/30"
                          }`}
                      >
                        <Image
                          src={type.image || "/placeholder.svg"}
                          alt={type.name}
                          width={32}
                          height={32}
                          className="rounded-md object-contain"
                        />
                        <span className="text-sm font-semibold">{type.name}</span>
                      </button>
                    )
                  })}
              </div>
            </div>

            <div className="flex flex-col items-left">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3.5">{t('gameServerList.step2')}</h3>
              <div className="flex flex-wrap gap-2">
                {config.locations
                  .filter((location: GameLocation) => location.availablePlanTypes.length > 0)
                  .map((location: GameLocation) => {
                    const isSelected = selectedLocation === location.id

                    return (
                      <button
                        key={location.id}
                        onClick={() => handleLocationSelection(location.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-tl-xl rounded-br-xl font-medium transition-all duration-300 backdrop-blur-sm ${isSelected
                            ? "bg-[var(--game-color)]/10 border border-[var(--game-color)]/30 text-[var(--game-color)] shadow-lg backdrop-blur-sm"
                            : "bg-white/5 dark:bg-gray-800/20 border border-[var(--game-color)]/30 dark:border-white/10 text-gray-700 dark:text-gray-400 hover:bg-[radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.05)_0%,transparent_100%)] hover:border-[var(--game-color)]/30"
                          }`}
                      >
                        <Image
                          src={location.flag || "/placeholder.svg"}
                          alt={`${location.name} flag`}
                          width={24}
                          height={24}
                          className="rounded-full object-cover"
                        />
                        <span className="text-sm font-medium">{getDisplayLocation(location, selectedPlanType)}</span>
                      </button>
                    )
                  })}
              </div>
            </div>
          </div>
        </motion.div>

        {config.games.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4"
          >
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{t('gameServerList.step3')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
              {config.games.map((game: Game) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedGame(game.id)}
                  style={{ "--game-color": game.primaryColor } as React.CSSProperties}
                  className={`relative w-full group rounded-tl-xl rounded-br-xl transition-all duration-300 p-3 text-left backdrop-blur-sm ${selectedGame === game.id
                      ? "bg-[var(--game-color)]/30 text-white shadow-lg backdrop-blur-sm border border-[var(--game-color)]/40"
                      : "bg-white/20 dark:bg-gray-800/10 border border-[var(--game-color)]/40 hover:border-[var(--game-color)]/30 text-gray-700 dark:text-gray-300"
                    }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative w-8 h-8 rounded-lg flex-shrink-0">
                      <Image
                        src={game.icon || "/placeholder.svg"}
                        alt={game.name}
                        fill
                        sizes="48px"
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm truncate">{game.name}</h4>
                      <p className="text-xs opacity-80 line-clamp-2">{game.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          {config.games.length > 1 ? t('gameServerList.step4') : t('gameServerList.step3')}
        </h3>

        {(() => {
          const planKey = `${selectedLocation}_${selectedPlanType}`
          const plansToDisplay = (currentGame?.plans && (currentGame.plans[planKey] || currentGame.plans[selectedPlanType])) || []

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plansToDisplay.map((plan: GamePlan, index: number) => {
                const blockImage = currentGame.id === "minecraft" 
                  ? getPlanBlockImage(plan, currentGame.id)
                  : (currentGame.icon || "/icons/minecraft-icon.webp")

                const cleanRam = (plan.ram || "")
                  .replace(/\s*(DDR[45]|ECC|High-Frequency|DDR4 ECC).*/i, "")
                  .trim()

                const ramNum = parseInt(cleanRam) || 2

                const cpuText = plan.cpu?.includes("%")
                  ? plan.cpu.split(" ")[0] + " CPU"
                  : `${Math.min(100 + (ramNum - 2) * 20, 300)}% CPU`

                const storageText = (plan.storage || `${Math.max(12, ramNum * 6)} GB NVMe`)
                  .replace(/SSD/i, "")
                  .replace(/Gen4/i, "")
                  .replace(/NVMe NVMe/i, "NVMe")
                  .trim()

                const backupsText = plan.backups
                  ? plan.backups.replace(/Automated/i, "").trim()
                  : ramNum >= 4 ? "2 Backups" : "1 Backup"

                const portsText = plan.allocations
                  ? plan.allocations.replace(/allocations/i, "Ports")
                  : (
                      ramNum <= 3 ? "2 Ports (1 Main + 1 Extra)" :
                      ramNum <= 6 ? "3 Ports (1 Main + 2 Extra)" :
                      ramNum <= 10 ? "4 Ports (1 Main + 3 Extra)" :
                      ramNum <= 16 ? "5 Ports (1 Main + 4 Extra)" :
                      ramNum <= 22 ? "6 Ports (1 Main + 5 Extra)" :
                      ramNum === 24 ? "7 Ports (1 Main + 6 Extra)" :
                      "8 Ports (1 Main + 7 Extra)"
                    )

                const dbCount = ramNum >= 18 ? "Unlimited" : ramNum >= 9 ? 5 : ramNum >= 5 ? 3 : ramNum >= 3 ? 2 : 1
                const databasesText = typeof dbCount === "number" ? `${dbCount} Database${dbCount > 1 ? "s" : ""}` : "Unlimited Databases" 
                const isPopular = plan.badge || ramNum === 4

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className={`relative flex flex-col justify-between bg-white/90 dark:bg-[#0c0e14]/95 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/20 hover:-translate-y-1.5 group ${
                      isPopular
                        ? "border-2 border-emerald-500/60 ring-1 ring-emerald-500/30 shadow-lg shadow-emerald-950/20"
                        : "border border-gray-200/80 dark:border-white/[0.08] hover:border-emerald-500/50"
                    }`}
                  >
                    <div>
                      {/* Popular Badge */}
                      {plan.badge ? (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
                            {plan.badge}
                          </span>
                        </div>
                      ) : isPopular ? (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400">
                            POPULAR
                          </span>
                        </div>
                      ) : null}

                      {/* Header: 3D Block Image + Name + Subtitle */}
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className="relative w-12 h-12 shrink-0 drop-shadow-md">
                          <Image
                            src={blockImage}
                            alt={plan.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="min-w-0 pr-6">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white orbitron-font leading-tight truncate">
                            {plan.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                            {currentGame.name} Server
                          </p>
                        </div>
                      </div>

                      {/* Price Row */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight orbitron-font">
                            {convertPrice(String(plan.price))}
                          </span>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                      </div>

                      {/* 2x2 Specs Grid with Green Icons (Matching Screenshot) */}
                      <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 mb-6">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                          <Cpu className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="truncate">{cpuText}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                          <MemoryStick className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="truncate">{cleanRam}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                          <HardDrive className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="truncate">{storageText}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                          <Archive className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="truncate">{backupsText}</span>
                        </div>
                      </div>

                      {/* Horizontal Divider */}
                      <div className="border-t border-gray-100 dark:border-white/[0.08] mb-6" />

                      {/* Included Features List with Green Icons */}
                      <div className="space-y-3 mb-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2.5">
                          <Network className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{portsText}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Database className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{databasesText}</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Sliders className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>Premium Game Panel</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>Advanced DDoS Protection</span>
                        </div>
                      </div>
                    </div>

                    {/* Full-Width Solid Green CTA Button */}
                    <a
                      href={plan.orderLink || "https://discord.gg/wbH8ZVAsYg"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase text-center transition-all duration-200 bg-emerald-500 hover:bg-emerald-400 text-gray-950 shadow-lg shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-2 group/btn no-underline"
                    >
                      <span>ORDER NOW</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </motion.div>
                )
              })}
            </div>
          )
        })()}
      </div>
    </div>
  )
}
