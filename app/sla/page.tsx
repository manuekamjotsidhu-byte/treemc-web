import React from "react";
import legal from "../../src/data/legal.json";
import LegalDocument from "../../src/components/LegalDocument";

export const metadata = { title: "Uptime SLA Policy | TreeMC" };
export default function SlaPage() {
  return <LegalDocument data={legal.slaPolicy as any} />;
}
