import React from "react";

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold text-white">Refund Policy</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
        <p>TreeMC Host provides transparent refund eligibility for eligible first-time orders when hardware or network issues cannot be resolved by our support team.</p>
        <p>VPS, VDS, and Windows RDP orders with custom provisioning or IP allocations may be subject to non-refundable setup fees once deployed.</p>
        <p>To request a review, open a ticket on our Discord server or email <span className="text-emerald-400">support@treemchost.pro</span>.</p>
      </div>
    </div>
  );
}
