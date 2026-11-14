import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const costFile = path.join(rootDir, "app/data/plans.cost.json");

let raw = null;
if (process.env.PLANS_COST_JSON) {
  try {
    raw = JSON.parse(process.env.PLANS_COST_JSON);
  } catch {}
} else if (fs.existsSync(costFile)) {
  try {
    raw = JSON.parse(fs.readFileSync(costFile, "utf-8"));
  } catch {}
}

const costPrices = raw && raw.plans ? raw.plans.map(p => p.costPrice.toString()) : [];

const nextDir = path.join(rootDir, ".next");
if (!fs.existsSync(nextDir)) {
  console.log("ℹ️ .next directory does not exist yet; run after next build.");
  process.exit(0);
}

let leaks = [];

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== "cache") { // skip compiler cache
        scanDirectory(fullPath);
      }
    } else if (file.endsWith(".js") || file.endsWith(".html") || file.endsWith(".json") || file.endsWith(".map")) {
      const isNodeModulesMap = file.includes("node_modules") && file.endsWith(".map");
      const content = fs.readFileSync(fullPath, "utf-8");

      // 1. Strict check: Supplier name "ateex" (case-insensitive) must NEVER appear anywhere in shipped build
      // (Exclude node_modules maps if any)
      if (!isNodeModulesMap && /ateex/i.test(content)) {
        leaks.push({ file: path.relative(rootDir, fullPath), keyword: "ateex supplier mention" });
      }

      // 2. Strict check: Identifier "costPrice" must NEVER appear anywhere in .next
      if (content.includes("costPrice")) {
        leaks.push({ file: path.relative(rootDir, fullPath), keyword: "costPrice identifier" });
      }

      // 3. Exact cost price numbers check
      if (!isNodeModulesMap && costPrices.length > 0) {
        for (const cost of costPrices) {
          const escaped = cost.replace(".", "\\.");
          const regex = new RegExp(`(^|[^0-9a-zA-Z_.])${escaped}([^0-9a-zA-Z_.]|$)`);
          if (regex.test(content)) {
            leaks.push({ file: path.relative(rootDir, fullPath), keyword: `cost ${cost}` });
          }
        }
      }
    }
  }
}

scanDirectory(nextDir);

if (leaks.length > 0) {
  console.error("❌ CRITICAL SECURITY ERROR: Supplier mention or cost price leaked into build bundle!");
  for (const leak of leaks) {
    console.error(`   Found "${leak.keyword}" in ${leak.file}`);
  }
  process.exit(1);
} else {
  console.log("✓ SECURITY AUDIT PASSED: Zero supplier mentions (ateex) and zero cost prices found in shipped .next bundle!");
}
