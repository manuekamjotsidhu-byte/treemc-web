"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, ChevronDown, Cloud, Cpu, Gamepad2, Globe, Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { CurrencyCode, useCurrency } from "../context/CurrencyContext";

const SERVICE_ITEMS = [
  { href: "/vps", label: "Cloud VPS", desc: "Root KVM across 5 countries", icon: Cloud },
  { href: "/minecraft-hosting", label: "Minecraft Hosting", desc: "Java & Bedrock · India & Dubai", icon: Gamepad2 },
  { href: "/rdp-hosting", label: "Windows RDP", desc: "Full Admin Remote Desktop", icon: Monitor },
  { href: "/bot-hosting", label: "Bot Hosting", desc: "24/7 Node, Python & Lavalink", icon: Bot },
  { href: "/webhosting", label: "Web Hosting", desc: "NVMe cPanel + AutoSSL", icon: Globe },
  { href: "/vds-hosting", label: "India VDS", desc: "100% Dedicated CPU Slices", icon: Cpu },
];

export default function Navbar() {
  const pathname = usePathname();
  const { currency, setCurrency, currencies, symbols } = useCurrency();
  const [open, setOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("treemc_theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("treemc_theme", next ? "dark" : "light");
  };

  const navLinkCls = (href: string) =>
    `rounded-full px-3.5 py-1.5 text-sm font-medium transition ${pathname === href
      ? "bg-slate-900/5 text-[var(--ink)] font-semibold dark:bg-white/10"
      : "text-[var(--muted)] hover:text-[var(--ink)]"
    }`;

  return (
    <div className={`sticky z-50 px-3 sm:px-6 transition-all duration-200 ${scrolled ? "top-2" : "top-4"}`}>
      <header className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/95 px-4 py-2 backdrop-blur-xl transition-shadow duration-200 ${scrolled ? "shadow-xl shadow-slate-900/10" : "shadow-md shadow-slate-900/5"}`}>
        <Link href="/" className="flex items-center gap-2 shrink-0 pl-1">
          <img src="/treemc-icon.png" alt="TreeMC" className="h-7 w-7 rounded-lg object-contain" />
          <span className="text-base font-extrabold tracking-tight">
            <span>Tree</span><span className="text-blue-600 dark:text-blue-400">MC</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className={navLinkCls("/")}>Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setDdOpen(true)}
            onMouseLeave={() => setDdOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDdOpen((v) => !v)}
              className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>

            {ddOpen && (
              <div className="absolute left-0 top-full pt-2 w-72 animate-[fadeDown_0.16s_ease-out]">
                <div className="card-clean rounded-2xl p-2 shadow-xl">
                  {SERVICE_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDdOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-500/10"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/5 dark:bg-white/10">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[var(--ink)]">{item.label}</div>
                          <div className="text-[11px] text-[var(--muted)]">{item.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link href="/minecraft-hosting" className={navLinkCls("/minecraft-hosting")}>Minecraft</Link>
          <Link href="/vps" className={navLinkCls("/vps")}>VPS</Link>
          <Link href="/pricing" className={navLinkCls("/pricing")}>Pricing</Link>
          <Link href="/blog" className={navLinkCls("/blog")}>Blog</Link>
          <Link href="/guides" className={navLinkCls("/guides")}>Guides</Link>
        </nav>

        <div className="flex items-center gap-2">
          <select
            id="treemc-currency"
            aria-label="Select currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1.5 text-xs font-semibold outline-none cursor-pointer"
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] transition hover:bg-slate-500/10"
          >
            {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
          </button>

          <a
            href="https://panel.treemchost.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--muted)] hover:text-[var(--ink)]"
          >
            Log in
          </a>

          <a
            href="https://discord.gg/wbH8ZVAsYg"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950"
          >
            Join Discord
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-[var(--border)]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {SERVICE_ITEMS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl bg-[var(--bg)] px-3 py-2 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/pricing" onClick={() => setOpen(false)} className="rounded-xl bg-[var(--bg)] px-3 py-2 text-sm font-medium">
              All Pricing
            </Link>
          </div>
          <div className="mt-3 flex gap-2">
            <a href="https://panel.treemchost.pro" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border border-[var(--border)] py-2 text-center text-xs font-semibold">
              Log in
            </a>
            <a href="https://discord.gg/wbH8ZVAsYg" target="_blank" rel="noopener noreferrer" className="btn-lime flex-1 rounded-full py-2 text-center text-xs font-bold">
              Join Discord
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
