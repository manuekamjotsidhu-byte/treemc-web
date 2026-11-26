import React from "react";
import legal from "../../src/data/legal.json";
import LegalDocument from "../../src/components/LegalDocument";

export const metadata = { title: "Refund Policy | TreeMC" };
export default function RefundPolicyPage() {
  return <LegalDocument data={legal.refundPolicy as any} />;
}
