import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

function collectHtmlRewrites() {
  const pubDir = path.join(process.cwd(), "public");
  const rewrites: { source: string; destination: string }[] = [
    { source: "/", destination: "/index.html" },
  ];
  function walk(dir: string, rel: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const nextRel = rel ? `${rel}/${entry.name}` : entry.name;
      const nextDir = path.join(dir, entry.name);
      if (fs.existsSync(path.join(nextDir, "index.html"))) {
        rewrites.push({ source: `/${nextRel}`, destination: `/${nextRel}/index.html` });
        rewrites.push({ source: `/${nextRel}/`, destination: `/${nextRel}/index.html` });
      }
      walk(nextDir, nextRel);
    }
  }
  walk(pubDir, "");
  return rewrites;
}

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async rewrites() {
    return {
      beforeFiles: collectHtmlRewrites(),
    };
  },
};

export default nextConfig;
