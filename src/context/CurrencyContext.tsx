"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type CurrencyCode = "INR" | "USD" | "EUR" | "GBP" | "PKR" | "AED" | "SGD" | "CAD" | "AUD";

const SYMS: Record<CurrencyCode, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
  PKR: "Rs ",
  AED: "د.إ ",
  SGD: "S$",
  CAD: "C$",
  AUD: "A$",
};

const DEFAULT_RATES: Record<CurrencyCode, number> = {
  INR: 1,
  USD: 0.0118,
  EUR: 0.0112,
  GBP: 0.0094,
  PKR: 3.3,
  AED: 0.0435,
  SGD: 0.0159,
  CAD: 0.0166,
  AUD: 0.0182,
};

interface CurrencyCtx {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  formatPrice: (inr: number) => string;
  currencies: CurrencyCode[];
  symbols: Record<CurrencyCode, string>;
}

const Context = createContext<CurrencyCtx>({
  currency: "INR",
  setCurrency: () => {},
  formatPrice: (inr) => `₹${inr.toLocaleString("en-IN")}`,
  currencies: Object.keys(SYMS) as CurrencyCode[],
  symbols: SYMS,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("INR");
  const [rates, setRates] = useState<Record<CurrencyCode, number>>(DEFAULT_RATES);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("treemc_currency") as CurrencyCode | null;
      if (saved && SYMS[saved]) setCurrencyState(saved);
      const cached = localStorage.getItem("treemc_fx_rates");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.rates) setRates((prev) => ({ ...prev, ...parsed.rates }));
        if (parsed?.ts && Date.now() - parsed.ts < 3600000) return;
      }
    } catch {}

    fetch("https://open.er-api.com/v6/latest/INR")
      .then((r) => r.json())
      .then((data) => {
        if (data?.result === "success" && data?.rates) {
          const next = { ...DEFAULT_RATES };
          (Object.keys(SYMS) as CurrencyCode[]).forEach((k) => {
            if (data.rates[k]) next[k] = data.rates[k];
          });
          setRates(next);
          try {
            localStorage.setItem("treemc_fx_rates", JSON.stringify({ ts: Date.now(), rates: next }));
          } catch {}
        }
      })
      .catch(() => {});
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("treemc_currency", c);
    } catch {}
  };

  const formatPrice = (inr: number) => {
    const sym = SYMS[currency];
    if (currency === "INR") return `${sym}${Math.round(inr).toLocaleString("en-IN")}`;
    const v = inr * (rates[currency] || 1);
    return `${sym}${v >= 100 ? v.toFixed(0) : v.toFixed(2)}`;
  };

  return (
    <Context.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        currencies: Object.keys(SYMS) as CurrencyCode[],
        symbols: SYMS,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useCurrency() {
  return useContext(Context);
}
