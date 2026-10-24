export interface CpuInfo {
  note: string;
  models: string[];
}

export const vpsCpuInfo: Record<string, CpuInfo> = {
  // India
  "india_xeon-standard": {
    note: 'Our India (Noida) Intel Xeon plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
  "india_ryzen-ddr5": {
    note: "Our India AMD Ryzen plans feature Ryzen 9 9950X (Delhi) with Cloudflare Magic Transit DDoS protection (engineered for performance users) and Ryzen 9 5900X (Mumbai) with OVHcloud Anti-DDoS VAC (17+ Tbit/s mitigation capacity, engineered for DDoS protection users), delivering maximum single-thread clock speeds.",
    models: [
      "AMD Ryzen™ 9 9950X (Delhi) — Cloudflare Magic Transit (Performance Users)",
      "AMD Ryzen™ 9 5900X (Mumbai) — OVHcloud 17+ Tbit/s Anti-DDoS VAC (DDoS Protection Users)",
    ],
  },
  "india_epyc-milan": {
    note: "Our India (Noida / Delhi) AMD EPYC nodes offer dedicated enterprise vCores with DDR4 ECC memory and fast NVMe storage.",
    models: [
      "AMD EPYC 7F72 @ 3.20 GHz",
      "AMD EPYC 7K62 @ 2.60 GHz",
    ],
  },

  // Germany
  "germany_xeon-gold": {
    note: "Our Germany Intel Xeon Gold nodes deliver enterprise compute hosted in Frankfurt am Main with low European latency.",
    models: [
      "Intel® Xeon® Gold 6150 @ 2.70 GHz",
    ],
  },
  "germany_ryzen-5900x": {
    note: "Our Germany AMD Ryzen nodes deliver high-performance compute engineered for gaming and demanding workloads.",
    models: [
      "AMD Ryzen™ 9 5900X",
    ],
  },
  "germany_epyc-milan": {
    note: "Our Germany EPYC nodes are connected directly to DE-CIX Frankfurt with enterprise hardware options.",
    models: [
      "AMD EPYC",
    ],
  },

  // Singapore
  "singapore_epyc-milan": {
    note: "Our Singapore nodes operate inside Equinix SG1, delivering sub-25ms regional routing across Southeast Asia.",
    models: [
      "AMD EPYC",
    ],
  },

  // USA
  "usa_epyc-milan": {
    note: "Our United States nodes feature dedicated enterprise compute with DDR4 ECC memory and fast NVMe storage.",
    models: [
      "AMD EPYC",
    ],
  },

  // Canada
  "canada_epyc-milan": {
    note: "Our Canada nodes feature dedicated enterprise compute with DDR4 ECC memory and fast NVMe storage.",
    models: [
      "AMD EPYC",
    ],
  },

  // Fallbacks by CPU Type
  "xeon-standard": {
    note: 'Our Intel Xeon plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
  "ryzen-ddr5": {
    note: "Our India AMD Ryzen plans feature Ryzen 9 9950X (Delhi) with Cloudflare Magic Transit DDoS protection (engineered for performance users) and Ryzen 9 5900X (Mumbai) with OVHcloud Anti-DDoS VAC (17+ Tbit/s mitigation capacity, engineered for DDoS protection users), delivering maximum single-thread clock speeds.",
    models: [
      "AMD Ryzen™ 9 9950X (Delhi) — Cloudflare Magic Transit (Performance Users)",
      "AMD Ryzen™ 9 5900X (Mumbai) — OVHcloud 17+ Tbit/s Anti-DDoS VAC (DDoS Protection Users)",
    ],
  },
  "epyc-milan": {
    note: "Our AMD EPYC nodes offer dedicated enterprise vCores with DDR4 ECC memory and fast NVMe storage.",
    models: [
      "AMD EPYC",
    ],
  },
  "xeon-gold": {
    note: "Our Germany Intel Xeon Gold nodes deliver enterprise compute hosted in Frankfurt am Main with low European latency.",
    models: [
      "Intel® Xeon® Gold 6150 @ 2.70 GHz",
    ],
  },
  "ryzen-5900x": {
    note: "Our Germany AMD Ryzen nodes deliver high-performance compute engineered for gaming and demanding workloads.",
    models: [
      "AMD Ryzen™ 9 5900X",
    ],
  },
};

export const vdsCpuInfo: Record<string, CpuInfo> = {
  "xeon-vds": {
    note: 'Our India (Noida) Intel Xeon VDS plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
  "epyc-vds": {
    note: "Our India (Noida / Delhi) AMD EPYC VDS instances deliver dedicated CPU vCores with DDR4 ECC memory and enterprise NVMe storage.",
    models: [
      "AMD EPYC 7F72 @ 3.20 GHz",
      "AMD EPYC 7K62 @ 2.60 GHz",
    ],
  },
  "india_xeon-vds": {
    note: 'Our India (Noida) Intel Xeon VDS plans come with 4 CPU options. You can choose any available option based on current stock by clicking on the "Order Now" button.',
    models: [
      "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
      "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
      "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
      "Intel® Xeon® Platinum 8269CY @ 2.50 GHz",
    ],
  },
  "india_epyc-vds": {
    note: "Our India (Noida / Delhi) AMD EPYC VDS instances deliver dedicated CPU vCores with DDR4 ECC memory and enterprise NVMe storage.",
    models: [
      "AMD EPYC 7F72 @ 3.20 GHz",
      "AMD EPYC 7K62 @ 2.60 GHz",
    ],
  },
};
