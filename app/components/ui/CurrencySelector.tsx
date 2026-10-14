"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import uiConfig from "../../config/sections/ui.json";
import type { UIConfig, Currency } from "../../types/ui";

const config = uiConfig as UIConfig;

interface CurrencySelectorProps {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  className?: string;
}

export function CurrencySelector({ 
  selectedCurrency, 
  onCurrencyChange, 
  className = "" 
}: CurrencySelectorProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.15,
        ease: "easeInOut" as const,
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
      },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className="flex items-center justify-between w-full bg-white/20 dark:bg-white/5 hover:bg-white/30 dark:hover:bg-white/10 border border-white/20 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-blue-400/40 rounded-lg px-3 sm:px-4 py-2 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm"
      >
        <span>
          {selectedCurrency.symbol} {selectedCurrency.code}
        </span>
        <motion.div
          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
       {uiConfig.christmasTheme.enabled && (
        <>
          <Image
            src="/christmas/button-deco-up.png"
            alt="Christmas decoration"
            width={28}
            height={28}
            className="absolute -top-2 -right-2 pointer-events-none"
          />
          <Image
            src="/christmas/button-deco-down.png"
            alt="Christmas decoration"
            width={28}
            height={28}
            className="absolute -bottom-2 -left-2 pointer-events-none"
          />
        </>
      )}

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full mt-2 right-0 w-full sm:w-64 bg-white/20 dark:bg-[#0a0b0f]/90 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-lg shadow-xl z-[100] overflow-hidden"
          >
            {config.currency.supportedCurrencies.map((currency, index) => (
              <motion.button
                key={currency.code}
                onClick={() => {
                  onCurrencyChange(currency);
                  setIsDropdownOpen(false);
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.05 }
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.2 }
                }}
                className="w-full px-4 py-2 text-left hover:bg-white/10 dark:hover:bg-white/10 text-gray-900 dark:text-white transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
              >
                {currency.symbol} {currency.code} - {currency.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface UseCurrencyReturn {
  selectedCurrency: Currency;
  setSelectedCurrency: (currency: Currency) => void;
  exchangeRates: Record<string, number>;
  convertPrice: (price: string) => string;
  isLoading: boolean;
}

export function useCurrency(): UseCurrencyReturn {
  const defaultCurrency = config.currency.supportedCurrencies.find(
    c => c.code === config.currency.defaultCurrency
  ) || config.currency.supportedCurrencies[0];

  const defaultFallbackRates: Record<string, number> = {
    INR: 1,
    PKR: 2.91,
    USD: 0.0105,
  };

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(() => {
    if (typeof window !== "undefined") {
      const savedCode = localStorage.getItem("selectedCurrencyCode");
      const found = config.currency.supportedCurrencies.find(c => c.code === savedCode);
      if (found) return found;
    }
    return defaultCurrency;
  });

  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("exchangeRates");
      if (stored) {
        try {
          const { rates } = JSON.parse(stored);
          if (rates?.USD && rates?.PKR) return rates;
        } catch {}
      }
    }
    return defaultFallbackRates;
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleCurrencySelect = (currency: Currency) => {
    setSelectedCurrency(currency);
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedCurrencyCode", currency.code);
    }
  };

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setIsLoading(true);
      try {
        // Use free, high-availability open exchange rate API for live INR conversion
        const response = await fetch("https://open.er-api.com/v6/latest/INR", {
          cache: "no-store"
        });
        const data = await response.json();

        const rates = data.rates || data.conversion_rates;
        if (rates && rates.USD && rates.PKR) {
          setExchangeRates(rates);
          localStorage.setItem(
            "exchangeRates",
            JSON.stringify({
              rates,
              timestamp: Date.now(),
            })
          );
        }
      } catch (error) {
        console.warn("Using offline fallback exchange rates for TreeMC currencies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  const convertPrice = (price: string): string => {
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    
    if (isNaN(numericPrice)) {
      return `${selectedCurrency.symbol}0`;
    }

    const rate = exchangeRates[selectedCurrency.code] || defaultFallbackRates[selectedCurrency.code] || 1;
    const converted = numericPrice * rate;

    if (selectedCurrency.code === "INR") {
      return `₹${Math.round(converted).toLocaleString()}`;
    }
    if (selectedCurrency.code === "PKR") {
      return `Rs ${Math.round(converted).toLocaleString()}`;
    }
    if (selectedCurrency.code === "USD") {
      return `$${converted.toFixed(2)}`;
    }

    return `${selectedCurrency.symbol}${converted.toFixed(2)}`;
  };

  return {
    selectedCurrency,
    setSelectedCurrency: handleCurrencySelect,
    exchangeRates,
    convertPrice,
    isLoading,
  };
}
