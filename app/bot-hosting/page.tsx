"use client";

import React from "react";
import { Bot, Cpu, HardDrive } from "lucide-react";
import catalog from "../../src/data/catalog.json";
import { useCurrency } from "../../src/context/CurrencyContext";

export default function BotHostingPage() {
  const { formatPrice } = useCurrency();
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-10 text-center">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300">
          24/7 Always-On Bot Runtimes
        </span>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
          Discord <span className="text-emerald-400">Bot Hosting</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
          Run Node.js, Python, Java, Go, and Lavalink bots 24/7 with instant Pterodactyl panel access.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {catalog.botPlans.map((p) => (
          <div key={p.id} className={`flex flex-col justify-between rounded-2xl border p-6 ${p.popular ? "border-emerald-400/60 bg-[#14202b]" : "border-white/10 bg-[#121a24]"}`}>
            <div>
              <h2 className="text-xl font-bold text-white">{p.name}</h2>
              <div className="mt-4 text-3xl font-extrabold text-white">
                {formatPrice(p.price)}<span className="text-xs font-normal text-slate-400">/month</span>
              </div>
              <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2"><Cpu className="h-3.5 w-3.5 text-emerald-400" /> {p.cpu}</li>
                <li className="flex items-center gap-2"><Bot className="h-3.5 w-3.5 text-emerald-400" /> {p.ram}</li>
                <li className="flex items-center gap-2"><HardDrive className="h-3.5 w-3.5 text-emerald-400" /> {p.storage}</li>
              </ul>
              <p className="mt-4 text-xs text-emerald-400">{p.runtime}</p>
            </div>
            <a href={catalog.discordUrl} target="_blank" rel="noopener noreferrer" className="mt-6 block rounded-xl bg-emerald-500 py-2.5 text-center text-xs font-bold text-slate-950 hover:bg-emerald-400">
              Order on Discord
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
