"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { CurrencyCode, useCurrency } from "../context/CurrencyContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/minecraft-hosting", label: "Minecraft" },
  { href: "/vps", label: "VPS" },
  { href: "/rdp-hosting", label: "RDP" },
  { href: "/bot-hosting", label: "Bots" },
  { href: "/webhosting", label: "Web" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const { currency, setCurrency, currencies, symbols } = useCurrency();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("treemc_theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("treemc_theme", next ? "dark" : "light");
  };

  return (
    <div className="sticky top-3 z-50 px-3 sm:px-6">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/92 px-4 py-2.5 shadow-lg shadow-slate-900/5 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/treemc-icon.png" alt="TreeMC" className="h-8 w-8 rounded-lg object-contain" />
          <span className="text-base font-bold tracking-tight">
            Tree<span className="text-emerald-600 dark:text-emerald-400">MC</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-1.5 text-sm font-medium text-[var(--muted)] transition hover:bg-slate-500/10 hover:text-[var(--ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <select
            id="treemc-currency"
            aria-label="Select currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1.5 text-xs font-semibold outline-none cursor-pointer"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {symbols[c].trim()} {c}
              </option>
            ))}
          </select>

          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] transition hover:bg-slate-500/10"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="https://panel.treemchost.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-xl px-3 py-1.5 text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]"
          >
            Log in
          </a>

          <a
            href="https://discord.gg/wbH8ZVAsYg"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-xl bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950"
          >
            Join Discord
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex md:hidden h-8 w-8 items-center justify-center rounded-xl border border-[var(--border)]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-[var(--bg)] px-3 py-2 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <a href="https://panel.treemchost.pro" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl border border-[var(--border)] py-2 text-center text-xs font-semibold">
              Panel
            </a>
            <a href="https://discord.gg/wbH8ZVAsYg" target="_blank" rel="noopener noreferrer" className="btn-lime flex-1 rounded-xl py-2 text-center text-xs font-bold">
              Join Discord
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
