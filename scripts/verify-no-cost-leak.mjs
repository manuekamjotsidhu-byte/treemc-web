import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const costFile = path.join(rootDir, "app/data/plans.cost.json");

if (!fs.existsSync(costFile)) {
  console.log("ℹ️ No plans.cost.json found, skipping leak check.");
  process.exit(0);
}

const raw = JSON.parse(fs.readFileSync(costFile, "utf-8"));
const costPrices = raw.plans.map(p => p.costPrice.toString());

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
      if (file !== "cache") { // skip build cache
        scanDirectory(fullPath);
      }
    } else if (file.endsWith(".js") || file.endsWith(".html") || file.endsWith(".json") || file.endsWith(".map")) {
      // Ignore 3rd-party node_modules SSR bundle sourcemap files where SVG bezier curves might coincidentally contain substring coordinates
      const isNodeModulesMap = file.includes("node_modules") && file.endsWith(".map");
      const content = fs.readFileSync(fullPath, "utf-8");

      // 1. Strict check: the identifier "costPrice" must NEVER appear anywhere in .next
      if (content.includes("costPrice")) {
        leaks.push({ file: path.relative(rootDir, fullPath), keyword: "costPrice" });
      }

      // 2. Exact cost price numbers check
      if (!isNodeModulesMap) {
        for (const cost of costPrices) {
          // Check for token or exact number match
          const escaped = cost.replace(".", "\\.");
          const regex = new RegExp(`(^|[^0-9a-zA-Z_.])${escaped}([^0-9a-zA-Z_.]|$)`);
          if (regex.test(content)) {
            leaks.push({ file: path.relative(rootDir, fullPath), keyword: cost });
          }
        }
      }
    }
  }
}

scanDirectory(nextDir);

if (leaks.length > 0) {
  console.error("❌ CRITICAL SECURITY ERROR: Cost price / costPrice leaked into build bundle!");
  for (const leak of leaks) {
    console.error(`   Found "${leak.keyword}" in ${leak.file}`);
  }
  process.exit(1);
} else {
  console.log("✓ VERIFIED: Zero cost prices or costPrice identifiers found in shipped .next bundle!");
}
