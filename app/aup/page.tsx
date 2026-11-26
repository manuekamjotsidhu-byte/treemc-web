import React from "react";
import legal from "../../src/data/legal.json";
import LegalDocument from "../../src/components/LegalDocument";

export const metadata = { title: "Acceptable Use Policy | TreeMC" };
export default function AupPage() {
  return <LegalDocument data={legal.acceptableUsePolicy as any} />;
}
