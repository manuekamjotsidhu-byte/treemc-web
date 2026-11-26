"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import { CurrencyCode, useCurrency } from "../context/CurrencyContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/vps", label: "Cloud VPS" },
  { href: "/minecraft-hosting", label: "Minecraft" },
  { href: "/rdp-hosting", label: "Windows RDP" },
  { href: "/bot-hosting", label: "Bot Hosting" },
  { href: "/webhosting", label: "Web Hosting" },
  { href: "/vds-hosting", label: "India VDS" },
  { href: "/pricing", label: "All Pricing" },
];

export default function Navbar() {
  const { currency, setCurrency, currencies, symbols } = useCurrency();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b0f]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/treemc-icon.png" alt="TreeMC" className="h-9 w-9 rounded-xl object-contain" />
          <span className="text-lg font-extrabold tracking-tight text-white">
            Tree<span className="text-emerald-400">MC</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
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
            className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-white outline-none hover:border-emerald-400/50"
          >
            {currencies.map((c) => (
              <option key={c} value={c} className="bg-[#0d131a] text-white">
                {symbols[c].trim()} {c}
              </option>
            ))}
          </select>

          <a
            href="https://panel.treemchost.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
          >
            Panel <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <a
            href="https://discord.gg/wbH8ZVAsYg"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-lg bg-emerald-500 px-3.5 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
          >
            Join Discord
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex lg:hidden items-center justify-center rounded-lg border border-white/15 p-2 text-slate-200 hover:bg-white/10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0d131a] px-4 py-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <a
              href="https://panel.treemchost.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-white/15 py-2 text-center text-xs font-semibold text-white"
            >
              Client Panel
            </a>
            <a
              href="https://discord.gg/wbH8ZVAsYg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-emerald-500 py-2 text-center text-xs font-bold text-slate-950"
            >
              Join Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
