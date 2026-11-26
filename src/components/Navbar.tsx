"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, ChevronDown, Cloud, Cpu, Gamepad2, Globe, Menu, Monitor, Moon, Shield, Sun, X } from "lucide-react";
import { CurrencyCode, useCurrency } from "../context/CurrencyContext";

const SERVICE_ITEMS = [
  { href: "/minecraft-hosting", label: "Minecraft Hosting", desc: "Java & Bedrock servers in India & Dubai.", icon: Gamepad2 },
  { href: "/vps", label: "VPS Hosting", desc: "Intel Xeon, AMD EPYC & Ryzen across 5 countries.", icon: Cloud },
  { href: "/rdp-hosting", label: "Windows VPS (RDP)", desc: "Windows Remote Desktop with administrator access.", icon: Monitor },
  { href: "/bot-hosting", label: "Bot Hosting", desc: "24/7 Discord bot runtimes & Lavalink.", icon: Bot },
  { href: "/webhosting", label: "Web Hosting", desc: "Fast NVMe cPanel hosting with AutoSSL.", icon: Globe },
  { href: "/vds-hosting", label: "VDS Hosting", desc: "Dedicated CPU cores in Noida & Delhi.", icon: Cpu },
];

const POLICY_ITEMS = [
  { href: "/terms", label: "Terms of Service", desc: "Service agreement & billing rules" },
  { href: "/privacy", label: "Privacy Policy", desc: "How we handle & secure your data" },
  { href: "/refund-policy", label: "Refund Policy", desc: "Eligibility & refund conditions" },
  { href: "/sla", label: "Uptime SLA", desc: "99.99% uptime target & credits" },
  { href: "/aup", label: "Acceptable Use", desc: "Permitted workloads & rules" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { currency, setCurrency, currencies, symbols } = useCurrency();
  const [open, setOpen] = useState(false);
  const [mobServices, setMobServices] = useState(true);
  const [mobPolicies, setMobPolicies] = useState(false);
  const [activeDd, setActiveDd] = useState<"services" | "policies" | null>(null);
  const [dark, setDark] = useState(() => {
    // Read synchronously on client to avoid icon flicker
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("treemc_theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Sync classList with current state (the pre-paint script already set it, this is a safety net)
    document.documentElement.classList.toggle("dark", dark);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    const d = document.documentElement;
    d.classList.toggle("dark", next);
    d.style.backgroundColor = next ? "#080c14" : "#f6f7f9";
    d.style.colorScheme = next ? "dark" : "light";
    localStorage.setItem("treemc_theme", next ? "dark" : "light");
  };

  const navLinkCls = (href: string) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition whitespace-nowrap ${
      pathname === href || (href !== "/" && pathname.startsWith(href))
        ? "bg-slate-900/10 text-[var(--ink)] font-semibold dark:bg-white/15"
        : "text-[var(--muted)] hover:text-[var(--ink)]"
    }`;

  return (
    <div className={`sticky z-50 px-2.5 sm:px-6 transition-all duration-200 ${scrolled ? "top-2" : "top-3"}`}>
      <header className={`mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/95 px-3 py-2 sm:px-4 backdrop-blur-xl transition-shadow duration-200 ${scrolled ? "shadow-xl shadow-slate-900/10" : "shadow-md shadow-slate-900/5"}`}>
        <Link href="/" className="flex items-center gap-2 shrink-0 pl-1">
          <img src="/treemc-icon.png" alt="TreeMC" className="h-7 w-7 rounded-lg object-contain" />
          <span className="text-base font-extrabold tracking-tight">
            <span>Tree</span><span className="text-blue-600 dark:text-blue-400">MC</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          <Link href="/" className={navLinkCls("/")}>Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setActiveDd("services")}
            onMouseLeave={() => setActiveDd(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDd((v) => (v === "services" ? null : "services"))}
              className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              Services <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDd === "services" ? "rotate-180" : ""}`} />
            </button>

            {activeDd === "services" && (
              <div className="absolute left-0 top-full pt-2.5 w-[540px] animate-[fadeDown_0.16s_ease-out]">
                <div className="card-clean grid grid-cols-2 gap-1.5 rounded-3xl p-3 shadow-2xl">
                  {SERVICE_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveDd(null)}
                        className="group flex items-start gap-3 rounded-2xl p-3 transition hover:bg-slate-900/5 dark:hover:bg-white/5"
                      >
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900/5 text-blue-600 transition group-hover:bg-[var(--lime)] group-hover:text-[var(--lime-ink)] dark:bg-white/10 dark:text-blue-400">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[var(--ink)]">{item.label}</div>
                          <div className="mt-0.5 text-[11px] leading-snug text-[var(--muted)]">{item.desc}</div>
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

          <div
            className="relative"
            onMouseEnter={() => setActiveDd("policies")}
            onMouseLeave={() => setActiveDd(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDd((v) => (v === "policies" ? null : "policies"))}
              className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--ink)]"
            >
              Policies <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeDd === "policies" ? "rotate-180" : ""}`} />
            </button>

            {activeDd === "policies" && (
              <div className="absolute right-0 top-full pt-2.5 w-72 animate-[fadeDown_0.16s_ease-out]">
                <div className="card-clean space-y-1 rounded-3xl p-2.5 shadow-2xl">
                  {POLICY_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveDd(null)}
                      className="group flex items-start gap-3 rounded-2xl p-2.5 transition hover:bg-slate-900/5 dark:hover:bg-white/5"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-900/5 text-blue-600 transition group-hover:bg-[var(--lime)] group-hover:text-[var(--lime-ink)] dark:bg-white/10 dark:text-blue-400">
                        <Shield className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--ink)]">{item.label}</div>
                        <div className="text-[11px] text-[var(--muted)]">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <select
            id="treemc-currency"
            aria-label="Select currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
            className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-2 py-1.5 text-[11px] sm:text-xs font-semibold outline-none cursor-pointer"
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
            className="inline-flex lg:hidden h-8 w-8 items-center justify-center rounded-full border border-[var(--border)]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {open && (
        <div className="mx-auto mt-2 max-h-[80vh] max-w-6xl overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl lg:hidden animate-[fadeDown_0.16s_ease-out]">
          <div className="space-y-2">
            {/* Collapsible Services */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-2">
              <button
                type="button"
                onClick={() => setMobServices((v) => !v)}
                className="flex w-full items-center justify-between px-2 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobServices ? "rotate-180" : ""}`} />
              </button>
              {mobServices && (
                <div className="mt-1.5 grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {SERVICE_ITEMS.map((l) => {
                    const Icon = l.icon;
                    return (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-semibold hover:bg-slate-500/10"
                      >
                        <Icon className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        <span>{l.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Direct links */}
            <div className="grid grid-cols-3 gap-1.5">
              <Link href="/pricing" onClick={() => setOpen(false)} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] py-2 text-center text-xs font-semibold">Pricing</Link>
              <Link href="/blog" onClick={() => setOpen(false)} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] py-2 text-center text-xs font-semibold">Blog</Link>
              <Link href="/guides" onClick={() => setOpen(false)} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] py-2 text-center text-xs font-semibold">Guides</Link>
            </div>

            {/* Collapsible Policies */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-2">
              <button
                type="button"
                onClick={() => setMobPolicies((v) => !v)}
                className="flex w-full items-center justify-between px-2 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
              >
                <span>Policies</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobPolicies ? "rotate-180" : ""}`} />
              </button>
              {mobPolicies && (
                <div className="mt-1.5 grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {POLICY_ITEMS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs font-semibold hover:bg-slate-500/10"
                    >
                      <Shield className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span>{p.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-1">
              <a href="https://panel.treemchost.pro" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-full border border-[var(--border)] py-2.5 text-center text-xs font-semibold">Log in</a>
              <a href="https://discord.gg/wbH8ZVAsYg" target="_blank" rel="noopener noreferrer" className="btn-lime flex-1 rounded-full py-2.5 text-center text-xs font-bold">Join Discord</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
