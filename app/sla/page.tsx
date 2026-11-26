import React from "react";

export default function SlaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold text-white">Uptime SLA</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
        <p>TreeMC Host targets 99.9% network and power availability across our global regions (India, Germany, Singapore, USA, Canada, and Dubai).</p>
        <p>Scheduled maintenance windows are announced in advance on our Discord community.</p>
      </div>
    </div>
  );
}
