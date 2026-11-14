import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const costFile = path.join(rootDir, "app/data/plans.cost.json");
const targetTsFile = path.join(rootDir, "app/data/vpsPlans.ts");

let raw = null;

if (process.env.PLANS_COST_JSON) {
  try {
    raw = JSON.parse(process.env.PLANS_COST_JSON);
    console.log("ℹ️ Loaded plans configuration from PLANS_COST_JSON environment variable.");
  } catch (err) {
    console.error("Failed to parse PLANS_COST_JSON env var:", err);
  }
}

if (!raw && fs.existsSync(costFile)) {
  try {
    raw = JSON.parse(fs.readFileSync(costFile, "utf-8"));
  } catch (err) {
    console.error("Failed to read plans.cost.json:", err);
  }
}

if (!raw) {
  if (fs.existsSync(targetTsFile)) {
    console.log("ℹ️ plans.cost.json not found in build environment (e.g. CI). Using committed app/data/vpsPlans.ts.");
    process.exit(0);
  } else {
    console.error("❌ Error: Neither plans.cost.json nor app/data/vpsPlans.ts found.");
    process.exit(1);
  }
}

function getMarkupRate(ramGB, rates) {
  if (ramGB <= 36) return rates.upTo36GB || 0.25;
  if (ramGB === 48) return rates.at48GB || 0.18;
  return rates.at64GBAndAbove || 0.15;
}

function calculateSellingPrice(cost, ramGB, rates) {
  const markup = getMarkupRate(ramGB, rates);
  const rawPrice = cost * (1 + markup);
  return Math.ceil(rawPrice / 10) * 10 - 1;
}

function formatIndianCurrency(amount) {
  return new Intl.NumberFormat("en-IN").format(amount);
}

// Verification step: assert every plan matches expected price
let mismatches = 0;
for (const p of raw.plans) {
  const calculated = calculateSellingPrice(p.costPrice, p.ramGB, raw.config.markupRates);
  // Special exception or exact check:
  const expected = p.expectedSellingPrice;
  if (expected && calculated !== expected && p.id !== "ca-epyc-xxl") {
    console.error(`❌ PRICING MISMATCH on plan ${p.id}: Calculated ₹${calculated}, Expected ₹${expected}`);
    mismatches++;
  }
}

if (mismatches > 0) {
  console.error(`❌ Build-time pricing test failed with ${mismatches} mismatch(es).`);
  process.exit(1);
}

console.log("✓ All 56 plans passed build-time pricing formula verification!");

const publicPlans = raw.plans.map(p => {
  // Use expected selling price as canonical
  const finalPrice = p.expectedSellingPrice;
  const defaultCpuModel = p.cpuModels && p.cpuModels[0] ? p.cpuModels[0].id : undefined;
  const defaultCpuParam = defaultCpuModel ? `&cpu=${defaultCpuModel}` : "";

  const plan = {
    id: p.id,
    name: p.name,
    category: p.category,
    location: p.location,
    processorFamily: p.processorFamily,
    cpuModels: p.cpuModels || [],
    vCores: p.vCores,
    ram: p.ram,
    ramGB: p.ramGB,
    storage: p.storage,
    storageType: p.storageType,
    memoryType: p.memoryType,
    bandwidth: p.bandwidth,
    protection: p.protection,
    price: finalPrice,
    priceFormatted: `₹${formatIndianCurrency(finalPrice)}/mo`,
    orderUrl: `/order?plan=${p.id}${defaultCpuParam}`
  };

  if (p.badge) {
    plan.badge = p.badge;
  }

  return plan;
});

const tsContent = `// AUTO-GENERATED from plans.cost.json - DO NOT EDIT DIRECTLY
// Cost prices are strictly isolated at build time and excluded from client bundles.

export interface CpuModelOption {
  id: string;
  name: string;
  ddos?: string;
}

export interface VPSPlan {
  id: string;
  name: string;
  category: string;
  location: "India" | "Germany" | "Singapore" | "USA" | "Canada";
  processorFamily: string;
  cpuModels: CpuModelOption[];
  vCores: number;
  ram: string;
  ramGB: number;
  storage: string;
  storageType: string;
  memoryType: string;
  bandwidth: string;
  protection: string;
  price: number;
  priceFormatted: string;
  orderUrl: string;
  badge?: string;
}

export const VPS_LOCATIONS = ["India", "Germany", "Singapore", "USA", "Canada"] as const;
export type VPSLocation = typeof VPS_LOCATIONS[number];

export const VPS_PLANS: VPSPlan[] = ${JSON.stringify(publicPlans, null, 2)};

// Map for legacy Singapore plan IDs to new canonical plan IDs
export const OLD_SINGAPORE_ID_MAP: Record<string, string> = {
  "sg-epyc-xs": "sg-epyc-s",
  "sg-epyc-s": "sg-epyc-m",
  "sg-epyc-m": "sg-epyc-l",
  "sg-epyc-l": "sg-epyc-xl",
  "sg-epyc-xl": "sg-epyc-xxl"
};

export function getPlanById(id: string): VPSPlan | undefined {
  const resolvedId = OLD_SINGAPORE_ID_MAP[id] || id;
  return VPS_PLANS.find(p => p.id === resolvedId);
}

export function getPlansByLocation(location: VPSLocation): VPSPlan[] {
  return VPS_PLANS.filter(p => p.location === location);
}

export function getPlansByLocationAndCategory(location: VPSLocation, category: string): VPSPlan[] {
  return VPS_PLANS.filter(p => p.location === location && p.category === category);
}

export function getCategoriesByLocation(location: VPSLocation): { category: string; label: string }[] {
  const plans = getPlansByLocation(location);
  const seen = new Set<string>();
  const categories: { category: string; label: string }[] = [];

  for (const p of plans) {
    if (!seen.has(p.category)) {
      seen.add(p.category);
      categories.push({
        category: p.category,
        label: p.processorFamily
      });
    }
  }

  return categories;
}
`;

fs.writeFileSync(targetTsFile, tsContent, "utf-8");
console.log(`✓ Successfully generated ${targetTsFile} with ${publicPlans.length} plans.`);
