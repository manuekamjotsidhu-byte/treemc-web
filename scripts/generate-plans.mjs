import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const costFile = path.join(rootDir, "app/data/plans.cost.json");

if (!fs.existsSync(costFile)) {
  console.error("Error: plans.cost.json not found at", costFile);
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(costFile, "utf-8"));

function calculateSellingPrice(cost, markup = 25) {
  const rawPrice = cost * (1 + markup / 100);
  return Math.ceil(rawPrice / 10) * 10 - 1;
}

function formatIndianCurrency(amount) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

const publicPlans = raw.plans.map(p => {
  const price = calculateSellingPrice(p.costPrice, raw.config.markupPercent);
  const plan = {
    id: p.id,
    name: p.name,
    category: p.category,
    processor: p.processor,
    vCores: p.vCores,
    ram: p.ram,
    storage: p.storage,
    bandwidth: p.bandwidth,
    protection: p.protection,
    location: "India data center",
    price: price,
    priceFormatted: `₹${formatIndianCurrency(price)}/mo`,
    orderUrl: `/order?plan=${p.id}`,
    verificationStatus: p.costStatus
  };
  if (p.badge) {
    plan.badge = p.badge;
  }
  return plan;
});

const tsContent = `// AUTO-GENERATED from plans.cost.json - DO NOT EDIT DIRECTLY
// Cost prices are strictly isolated at build time and excluded from client bundles.

export interface VPSPlan {
  id: string;
  name: string;
  category: "xeon" | "epyc";
  processor: string;
  vCores: number;
  ram: string;
  storage: string;
  bandwidth: string;
  protection: string;
  location: string;
  price: number;
  priceFormatted: string;
  orderUrl: string;
  badge?: string;
  verificationStatus: "VERIFIED" | "UNVERIFIED";
}

export const VPS_PLANS: VPSPlan[] = ${JSON.stringify(publicPlans, null, 2)};

export const XEON_PLANS = VPS_PLANS.filter(p => p.category === "xeon");
export const EPYC_PLANS = VPS_PLANS.filter(p => p.category === "epyc");

export function getPlanById(id: string): VPSPlan | undefined {
  return VPS_PLANS.find(p => p.id === id);
}
`;

fs.writeFileSync(path.join(rootDir, "app/data/vpsPlans.ts"), tsContent);
console.log("✓ Successfully generated app/data/vpsPlans.ts with", publicPlans.length, "plans");
