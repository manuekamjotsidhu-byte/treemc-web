"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Server, Shield, Cpu, HardDrive, MemoryStick, ChevronRight } from "lucide-react"
import gamesConfig from "../../config/sections/games.json"
import type { GamesConfig, Game, GamePlan, GameLocation } from "../../types/games"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"
import uiConfig from "../../config/sections/ui.json"

const config = gamesConfig as GamesConfig

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plansToDisplay.map((plan: GamePlan, index: number) => {
                const cpuImage = selectedPlanType === "budget"
                  ? "/cpu/intel.png"
                  : selectedPlanType === "premium"
                  ? "/cpu/epyc.png"
                  : "/cpu/ryzen5.png"

                const cpuSubtitle = selectedPlanType === "budget"
                  ? "Intel Xeon High-Freq"
                  : selectedPlanType === "premium"
                  ? "AMD EPYC (Zen 4)"
                  : "AMD Ryzen 5 Peak Single-Thread"

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative flex flex-col justify-between bg-white dark:bg-[#11131c]/70 backdrop-blur-xl border border-secondary hover:border-primary/60 dark:hover:border-primary/60 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group"
                  >
                    {plan.badge && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 border border-primary/30 text-primary backdrop-blur-md">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800/40 border border-secondary flex items-center justify-center p-2 flex-shrink-0">
                          <Image
                            src={cpuImage}
                            alt="CPU"
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white orbitron-font">{plan.name}</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{cpuSubtitle}</p>
                        </div>
                      </div>

                      <div className="mb-6 pb-4 border-b border-gray-200/50 dark:border-gray-800/60">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold orbitron-font icon-text-primary">
                            {convertPrice(String(plan.price))}
                          </span>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">/mo</span>
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Instant High-Performance Panel Provisioning</p>
                      </div>

                      <div className="space-y-2.5 mb-6">
                        <div className="flex items-center justify-between text-sm py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-secondary">
                          <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <MemoryStick className="w-4 h-4 icon-primary" />
                            <span>RAM</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.ram}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-secondary">
                          <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Cpu className="w-4 h-4 icon-primary" />
                            <span>CPU Power</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.cpu}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-secondary">
                          <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <HardDrive className="w-4 h-4 icon-primary" />
                            <span>NVMe Storage</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.storage}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-secondary">
                          <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Shield className="w-4 h-4 icon-primary" />
                            <span>DDoS Shield</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.ddos || "1 Gbps Always-On"}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-secondary">
                          <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Server className="w-4 h-4 icon-primary" />
                            <span>Backups</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.backups || "Automated Backups"}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm py-2 px-3 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-secondary">
                          <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Server className="w-4 h-4 icon-primary" />
                            <span>Panel</span>
                          </span>
                          <span className="font-semibold text-gray-900 dark:text-white">High Performance Panel</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={plan.orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="orbitron-font w-full button-primary text-button-primary py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-transparent shadow-md hover:shadow-lg hover:scale-[1.02] no-underline"
                    >
                      <span>{t('gameServerList.orderNow')}</span>
                      <ChevronRight className="w-4 h-4" />
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
