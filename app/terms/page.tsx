import React from "react";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold text-white">Terms of Service</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
        <p>By using TreeMC Host services (Cloud VPS, Game Hosting, Windows RDP, Discord Bot Hosting, Web Hosting, and India VDS), you agree to abide by these Terms of Service and our Acceptable Use Policy.</p>
        <p>Accounts must maintain accurate billing details and timely renewals. Abusive, illegal, or disruptive workloads may result in immediate suspension.</p>
        <p>Questions? Contact <span className="text-emerald-400">support@treemchost.pro</span>.</p>
      </div>
    </div>
  );
}
