// AUTO-GENERATED from plans.cost.json - DO NOT EDIT DIRECTLY
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

export const VPS_PLANS: VPSPlan[] = [
  {
    "id": "in-xeon-xs",
    "name": "Xeon Standard XS",
    "category": "xeon-standard",
    "location": "India",
    "processorFamily": "Intel® Xeon® Standard",
    "cpuModels": [
      {
        "id": "e5-2673",
        "name": "Intel® Xeon® E5-2673 v4 (2.30 GHz)"
      },
      {
        "id": "e5-2682",
        "name": "Intel® Xeon® E5-2682 v4 (2.50 GHz)"
      },
      {
        "id": "plat-8168",
        "name": "Intel® Xeon® Platinum 8168 (2.70 GHz)"
      },
      {
        "id": "plat-8269cy",
        "name": "Intel® Xeon® Platinum 8269CY (2.50 GHz)"
      }
    ],
    "vCores": 2,
    "ram": "6 GB",
    "ramGB": 6,
    "storage": "50 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 359,
    "priceFormatted": "₹359/mo",
    "orderUrl": "/order?plan=in-xeon-xs&cpu=e5-2673"
  },
  {
    "id": "in-xeon-s",
    "name": "Xeon Standard S",
    "category": "xeon-standard",
    "location": "India",
    "processorFamily": "Intel® Xeon® Standard",
    "cpuModels": [
      {
        "id": "e5-2673",
        "name": "Intel® Xeon® E5-2673 v4 (2.30 GHz)"
      },
      {
        "id": "e5-2682",
        "name": "Intel® Xeon® E5-2682 v4 (2.50 GHz)"
      },
      {
        "id": "plat-8168",
        "name": "Intel® Xeon® Platinum 8168 (2.70 GHz)"
      },
      {
        "id": "plat-8269cy",
        "name": "Intel® Xeon® Platinum 8269CY (2.50 GHz)"
      }
    ],
    "vCores": 2,
    "ram": "8 GB",
    "ramGB": 8,
    "storage": "80 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 479,
    "priceFormatted": "₹479/mo",
    "orderUrl": "/order?plan=in-xeon-s&cpu=e5-2673"
  },
  {
    "id": "in-xeon-m",
    "name": "Xeon Standard M",
    "category": "xeon-standard",
    "location": "India",
    "processorFamily": "Intel® Xeon® Standard",
    "cpuModels": [
      {
        "id": "e5-2673",
        "name": "Intel® Xeon® E5-2673 v4 (2.30 GHz)"
      },
      {
        "id": "e5-2682",
        "name": "Intel® Xeon® E5-2682 v4 (2.50 GHz)"
      },
      {
        "id": "plat-8168",
        "name": "Intel® Xeon® Platinum 8168 (2.70 GHz)"
      },
      {
        "id": "plat-8269cy",
        "name": "Intel® Xeon® Platinum 8269CY (2.50 GHz)"
      }
    ],
    "vCores": 4,
    "ram": "12 GB",
    "ramGB": 12,
    "storage": "100 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 719,
    "priceFormatted": "₹719/mo",
    "orderUrl": "/order?plan=in-xeon-m&cpu=e5-2673"
  },
  {
    "id": "in-xeon-l",
    "name": "Xeon Standard L",
    "category": "xeon-standard",
    "location": "India",
    "processorFamily": "Intel® Xeon® Standard",
    "cpuModels": [
      {
        "id": "e5-2673",
        "name": "Intel® Xeon® E5-2673 v4 (2.30 GHz)"
      },
      {
        "id": "e5-2682",
        "name": "Intel® Xeon® E5-2682 v4 (2.50 GHz)"
      },
      {
        "id": "plat-8168",
        "name": "Intel® Xeon® Platinum 8168 (2.70 GHz)"
      },
      {
        "id": "plat-8269cy",
        "name": "Intel® Xeon® Platinum 8269CY (2.50 GHz)"
      }
    ],
    "vCores": 6,
    "ram": "16 GB",
    "ramGB": 16,
    "storage": "150 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 959,
    "priceFormatted": "₹959/mo",
    "orderUrl": "/order?plan=in-xeon-l&cpu=e5-2673"
  },
  {
    "id": "in-xeon-xl",
    "name": "Xeon Standard XL",
    "category": "xeon-standard",
    "location": "India",
    "processorFamily": "Intel® Xeon® Standard",
    "cpuModels": [
      {
        "id": "e5-2673",
        "name": "Intel® Xeon® E5-2673 v4 (2.30 GHz)"
      },
      {
        "id": "e5-2682",
        "name": "Intel® Xeon® E5-2682 v4 (2.50 GHz)"
      },
      {
        "id": "plat-8168",
        "name": "Intel® Xeon® Platinum 8168 (2.70 GHz)"
      },
      {
        "id": "plat-8269cy",
        "name": "Intel® Xeon® Platinum 8269CY (2.50 GHz)"
      }
    ],
    "vCores": 6,
    "ram": "24 GB",
    "ramGB": 24,
    "storage": "200 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1429,
    "priceFormatted": "₹1,429/mo",
    "orderUrl": "/order?plan=in-xeon-xl&cpu=e5-2673",
    "badge": "Recommended"
  },
  {
    "id": "in-xeon-xxl",
    "name": "Xeon Standard XXL",
    "category": "xeon-standard",
    "location": "India",
    "processorFamily": "Intel® Xeon® Standard",
    "cpuModels": [
      {
        "id": "e5-2673",
        "name": "Intel® Xeon® E5-2673 v4 (2.30 GHz)"
      },
      {
        "id": "e5-2682",
        "name": "Intel® Xeon® E5-2682 v4 (2.50 GHz)"
      },
      {
        "id": "plat-8168",
        "name": "Intel® Xeon® Platinum 8168 (2.70 GHz)"
      },
      {
        "id": "plat-8269cy",
        "name": "Intel® Xeon® Platinum 8269CY (2.50 GHz)"
      }
    ],
    "vCores": 8,
    "ram": "32 GB",
    "ramGB": 32,
    "storage": "300 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1909,
    "priceFormatted": "₹1,909/mo",
    "orderUrl": "/order?plan=in-xeon-xxl&cpu=e5-2673"
  },
  {
    "id": "in-xeon-2xl",
    "name": "Xeon Standard 2XL",
    "category": "xeon-standard",
    "location": "India",
    "processorFamily": "Intel® Xeon® Standard",
    "cpuModels": [
      {
        "id": "e5-2673",
        "name": "Intel® Xeon® E5-2673 v4 (2.30 GHz)"
      },
      {
        "id": "e5-2682",
        "name": "Intel® Xeon® E5-2682 v4 (2.50 GHz)"
      },
      {
        "id": "plat-8168",
        "name": "Intel® Xeon® Platinum 8168 (2.70 GHz)"
      },
      {
        "id": "plat-8269cy",
        "name": "Intel® Xeon® Platinum 8269CY (2.50 GHz)"
      }
    ],
    "vCores": 10,
    "ram": "48 GB",
    "ramGB": 48,
    "storage": "350 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 2699,
    "priceFormatted": "₹2,699/mo",
    "orderUrl": "/order?plan=in-xeon-2xl&cpu=e5-2673"
  },
  {
    "id": "in-xeon-3xl",
    "name": "Xeon Standard 3XL",
    "category": "xeon-standard",
    "location": "India",
    "processorFamily": "Intel® Xeon® Standard",
    "cpuModels": [
      {
        "id": "e5-2673",
        "name": "Intel® Xeon® E5-2673 v4 (2.30 GHz)"
      },
      {
        "id": "e5-2682",
        "name": "Intel® Xeon® E5-2682 v4 (2.50 GHz)"
      },
      {
        "id": "plat-8168",
        "name": "Intel® Xeon® Platinum 8168 (2.70 GHz)"
      },
      {
        "id": "plat-8269cy",
        "name": "Intel® Xeon® Platinum 8269CY (2.50 GHz)"
      }
    ],
    "vCores": 12,
    "ram": "64 GB",
    "ramGB": 64,
    "storage": "400 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 3509,
    "priceFormatted": "₹3,509/mo",
    "orderUrl": "/order?plan=in-xeon-3xl&cpu=e5-2673"
  },
  {
    "id": "in-epyc-xs",
    "name": "EPYC Premium XS",
    "category": "epyc-premium",
    "location": "India",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-7f72",
        "name": "EPYC 7F72 (3.20 GHz)"
      },
      {
        "id": "epyc-7k62",
        "name": "EPYC 7K62 (2.60 GHz)"
      }
    ],
    "vCores": 2,
    "ram": "6 GB",
    "ramGB": 6,
    "storage": "50 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 479,
    "priceFormatted": "₹479/mo",
    "orderUrl": "/order?plan=in-epyc-xs&cpu=epyc-7f72"
  },
  {
    "id": "in-epyc-s",
    "name": "EPYC Premium S",
    "category": "epyc-premium",
    "location": "India",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-7f72",
        "name": "EPYC 7F72 (3.20 GHz)"
      },
      {
        "id": "epyc-7k62",
        "name": "EPYC 7K62 (2.60 GHz)"
      }
    ],
    "vCores": 2,
    "ram": "8 GB",
    "ramGB": 8,
    "storage": "80 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 719,
    "priceFormatted": "₹719/mo",
    "orderUrl": "/order?plan=in-epyc-s&cpu=epyc-7f72"
  },
  {
    "id": "in-epyc-m",
    "name": "EPYC Premium M",
    "category": "epyc-premium",
    "location": "India",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-7f72",
        "name": "EPYC 7F72 (3.20 GHz)"
      },
      {
        "id": "epyc-7k62",
        "name": "EPYC 7K62 (2.60 GHz)"
      }
    ],
    "vCores": 4,
    "ram": "12 GB",
    "ramGB": 12,
    "storage": "100 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1199,
    "priceFormatted": "₹1,199/mo",
    "orderUrl": "/order?plan=in-epyc-m&cpu=epyc-7f72"
  },
  {
    "id": "in-epyc-l",
    "name": "EPYC Premium L",
    "category": "epyc-premium",
    "location": "India",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-7f72",
        "name": "EPYC 7F72 (3.20 GHz)"
      },
      {
        "id": "epyc-7k62",
        "name": "EPYC 7K62 (2.60 GHz)"
      }
    ],
    "vCores": 6,
    "ram": "16 GB",
    "ramGB": 16,
    "storage": "150 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1429,
    "priceFormatted": "₹1,429/mo",
    "orderUrl": "/order?plan=in-epyc-l&cpu=epyc-7f72"
  },
  {
    "id": "in-epyc-xl",
    "name": "EPYC Premium XL",
    "category": "epyc-premium",
    "location": "India",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-7f72",
        "name": "EPYC 7F72 (3.20 GHz)"
      },
      {
        "id": "epyc-7k62",
        "name": "EPYC 7K62 (2.60 GHz)"
      }
    ],
    "vCores": 6,
    "ram": "24 GB",
    "ramGB": 24,
    "storage": "200 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1909,
    "priceFormatted": "₹1,909/mo",
    "orderUrl": "/order?plan=in-epyc-xl&cpu=epyc-7f72",
    "badge": "Recommended"
  },
  {
    "id": "in-epyc-xxl",
    "name": "EPYC Premium XXL",
    "category": "epyc-premium",
    "location": "India",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-7f72",
        "name": "EPYC 7F72 (3.20 GHz)"
      },
      {
        "id": "epyc-7k62",
        "name": "EPYC 7K62 (2.60 GHz)"
      }
    ],
    "vCores": 8,
    "ram": "32 GB",
    "ramGB": 32,
    "storage": "300 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 2389,
    "priceFormatted": "₹2,389/mo",
    "orderUrl": "/order?plan=in-epyc-xxl&cpu=epyc-7f72"
  },
  {
    "id": "in-epyc-2xl",
    "name": "EPYC Premium 2XL",
    "category": "epyc-premium",
    "location": "India",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-7f72",
        "name": "EPYC 7F72 (3.20 GHz)"
      },
      {
        "id": "epyc-7k62",
        "name": "EPYC 7K62 (2.60 GHz)"
      }
    ],
    "vCores": 10,
    "ram": "48 GB",
    "ramGB": 48,
    "storage": "350 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 3379,
    "priceFormatted": "₹3,379/mo",
    "orderUrl": "/order?plan=in-epyc-2xl&cpu=epyc-7f72"
  },
  {
    "id": "in-epyc-3xl",
    "name": "EPYC Premium 3XL",
    "category": "epyc-premium",
    "location": "India",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-7f72",
        "name": "EPYC 7F72 (3.20 GHz)"
      },
      {
        "id": "epyc-7k62",
        "name": "EPYC 7K62 (2.60 GHz)"
      }
    ],
    "vCores": 12,
    "ram": "64 GB",
    "ramGB": 64,
    "storage": "400 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 4389,
    "priceFormatted": "₹4,389/mo",
    "orderUrl": "/order?plan=in-epyc-3xl&cpu=epyc-7f72"
  },
  {
    "id": "in-ryzen-xs",
    "name": "AMD Ryzen XS",
    "category": "ryzen-premium",
    "location": "India",
    "processorFamily": "AMD Ryzen™ Premium",
    "cpuModels": [
      {
        "id": "ryzen-9950x",
        "name": "Ryzen 9 9950X",
        "ddos": "up to 100 Gbps DDoS"
      },
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X",
        "ddos": "OVH VAC up to 17 Tbps"
      }
    ],
    "vCores": 1,
    "ram": "4 GB",
    "ramGB": 4,
    "storage": "50 GB",
    "storageType": "Gen4 NVMe SSD",
    "memoryType": "DDR5 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "up to 100 Gbps / OVH VAC up to 17 Tbps",
    "price": 779,
    "priceFormatted": "₹779/mo",
    "orderUrl": "/order?plan=in-ryzen-xs&cpu=ryzen-9950x"
  },
  {
    "id": "in-ryzen-s",
    "name": "AMD Ryzen S",
    "category": "ryzen-premium",
    "location": "India",
    "processorFamily": "AMD Ryzen™ Premium",
    "cpuModels": [
      {
        "id": "ryzen-9950x",
        "name": "Ryzen 9 9950X",
        "ddos": "up to 100 Gbps DDoS"
      },
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X",
        "ddos": "OVH VAC up to 17 Tbps"
      }
    ],
    "vCores": 2,
    "ram": "8 GB",
    "ramGB": 8,
    "storage": "80 GB",
    "storageType": "Gen4 NVMe SSD",
    "memoryType": "DDR5 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "up to 100 Gbps / OVH VAC up to 17 Tbps",
    "price": 1339,
    "priceFormatted": "₹1,339/mo",
    "orderUrl": "/order?plan=in-ryzen-s&cpu=ryzen-9950x"
  },
  {
    "id": "in-ryzen-l",
    "name": "AMD Ryzen L",
    "category": "ryzen-premium",
    "location": "India",
    "processorFamily": "AMD Ryzen™ Premium",
    "cpuModels": [
      {
        "id": "ryzen-9950x",
        "name": "Ryzen 9 9950X",
        "ddos": "up to 100 Gbps DDoS"
      },
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X",
        "ddos": "OVH VAC up to 17 Tbps"
      }
    ],
    "vCores": 4,
    "ram": "16 GB",
    "ramGB": 16,
    "storage": "150 GB",
    "storageType": "Gen4 NVMe SSD",
    "memoryType": "DDR5 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "up to 100 Gbps / OVH VAC up to 17 Tbps",
    "price": 2299,
    "priceFormatted": "₹2,299/mo",
    "orderUrl": "/order?plan=in-ryzen-l&cpu=ryzen-9950x"
  },
  {
    "id": "in-ryzen-xl",
    "name": "AMD Ryzen XL",
    "category": "ryzen-premium",
    "location": "India",
    "processorFamily": "AMD Ryzen™ Premium",
    "cpuModels": [
      {
        "id": "ryzen-9950x",
        "name": "Ryzen 9 9950X",
        "ddos": "up to 100 Gbps DDoS"
      },
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X",
        "ddos": "OVH VAC up to 17 Tbps"
      }
    ],
    "vCores": 5,
    "ram": "24 GB",
    "ramGB": 24,
    "storage": "180 GB",
    "storageType": "Gen4 NVMe SSD",
    "memoryType": "DDR5 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "up to 100 Gbps / OVH VAC up to 17 Tbps",
    "price": 3149,
    "priceFormatted": "₹3,149/mo",
    "orderUrl": "/order?plan=in-ryzen-xl&cpu=ryzen-9950x",
    "badge": "Recommended"
  },
  {
    "id": "in-ryzen-xxl",
    "name": "AMD Ryzen XXL",
    "category": "ryzen-premium",
    "location": "India",
    "processorFamily": "AMD Ryzen™ Premium",
    "cpuModels": [
      {
        "id": "ryzen-9950x",
        "name": "Ryzen 9 9950X",
        "ddos": "up to 100 Gbps DDoS"
      },
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X",
        "ddos": "OVH VAC up to 17 Tbps"
      }
    ],
    "vCores": 6,
    "ram": "32 GB",
    "ramGB": 32,
    "storage": "200 GB",
    "storageType": "Gen4 NVMe SSD",
    "memoryType": "DDR5 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "up to 100 Gbps / OVH VAC up to 17 Tbps",
    "price": 4599,
    "priceFormatted": "₹4,599/mo",
    "orderUrl": "/order?plan=in-ryzen-xxl&cpu=ryzen-9950x"
  },
  {
    "id": "in-ryzen-3xl",
    "name": "AMD Ryzen 3XL",
    "category": "ryzen-premium",
    "location": "India",
    "processorFamily": "AMD Ryzen™ Premium",
    "cpuModels": [
      {
        "id": "ryzen-9950x",
        "name": "Ryzen 9 9950X",
        "ddos": "up to 100 Gbps DDoS"
      },
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X",
        "ddos": "OVH VAC up to 17 Tbps"
      }
    ],
    "vCores": 8,
    "ram": "48 GB",
    "ramGB": 48,
    "storage": "250 GB",
    "storageType": "Gen4 NVMe SSD",
    "memoryType": "DDR5 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "up to 100 Gbps / OVH VAC up to 17 Tbps",
    "price": 5709,
    "priceFormatted": "₹5,709/mo",
    "orderUrl": "/order?plan=in-ryzen-3xl&cpu=ryzen-9950x"
  },
  {
    "id": "de-gold-xs",
    "name": "Intel Gold XS",
    "category": "xeon-gold",
    "location": "Germany",
    "processorFamily": "Intel® Xeon® Gold",
    "cpuModels": [
      {
        "id": "gold-6150",
        "name": "Xeon Gold 6150"
      }
    ],
    "vCores": 1,
    "ram": "6 GB",
    "ramGB": 6,
    "storage": "40 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Fortified",
    "price": 479,
    "priceFormatted": "₹479/mo",
    "orderUrl": "/order?plan=de-gold-xs&cpu=gold-6150"
  },
  {
    "id": "de-gold-s",
    "name": "Intel Gold S",
    "category": "xeon-gold",
    "location": "Germany",
    "processorFamily": "Intel® Xeon® Gold",
    "cpuModels": [
      {
        "id": "gold-6150",
        "name": "Xeon Gold 6150"
      }
    ],
    "vCores": 2,
    "ram": "8 GB",
    "ramGB": 8,
    "storage": "50 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Fortified",
    "price": 719,
    "priceFormatted": "₹719/mo",
    "orderUrl": "/order?plan=de-gold-s&cpu=gold-6150"
  },
  {
    "id": "de-gold-m",
    "name": "Intel Gold M",
    "category": "xeon-gold",
    "location": "Germany",
    "processorFamily": "Intel® Xeon® Gold",
    "cpuModels": [
      {
        "id": "gold-6150",
        "name": "Xeon Gold 6150"
      }
    ],
    "vCores": 4,
    "ram": "12 GB",
    "ramGB": 12,
    "storage": "100 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Fortified",
    "price": 959,
    "priceFormatted": "₹959/mo",
    "orderUrl": "/order?plan=de-gold-m&cpu=gold-6150"
  },
  {
    "id": "de-gold-l",
    "name": "Intel Gold L",
    "category": "xeon-gold",
    "location": "Germany",
    "processorFamily": "Intel® Xeon® Gold",
    "cpuModels": [
      {
        "id": "gold-6150",
        "name": "Xeon Gold 6150"
      }
    ],
    "vCores": 4,
    "ram": "16 GB",
    "ramGB": 16,
    "storage": "150 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Fortified",
    "price": 1199,
    "priceFormatted": "₹1,199/mo",
    "orderUrl": "/order?plan=de-gold-l&cpu=gold-6150"
  },
  {
    "id": "de-gold-xl",
    "name": "Intel Gold XL",
    "category": "xeon-gold",
    "location": "Germany",
    "processorFamily": "Intel® Xeon® Gold",
    "cpuModels": [
      {
        "id": "gold-6150",
        "name": "Xeon Gold 6150"
      }
    ],
    "vCores": 6,
    "ram": "24 GB",
    "ramGB": 24,
    "storage": "200 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Fortified",
    "price": 1789,
    "priceFormatted": "₹1,789/mo",
    "orderUrl": "/order?plan=de-gold-xl&cpu=gold-6150",
    "badge": "Recommended"
  },
  {
    "id": "de-gold-xxl",
    "name": "Intel Gold XXL",
    "category": "xeon-gold",
    "location": "Germany",
    "processorFamily": "Intel® Xeon® Gold",
    "cpuModels": [
      {
        "id": "gold-6150",
        "name": "Xeon Gold 6150"
      }
    ],
    "vCores": 6,
    "ram": "36 GB",
    "ramGB": 36,
    "storage": "250 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Fortified",
    "price": 2389,
    "priceFormatted": "₹2,389/mo",
    "orderUrl": "/order?plan=de-gold-xxl&cpu=gold-6150"
  },
  {
    "id": "de-gold-2xl",
    "name": "Intel Gold 2XL",
    "category": "xeon-gold",
    "location": "Germany",
    "processorFamily": "Intel® Xeon® Gold",
    "cpuModels": [
      {
        "id": "gold-6150",
        "name": "Xeon Gold 6150"
      }
    ],
    "vCores": 8,
    "ram": "48 GB",
    "ramGB": 48,
    "storage": "300 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Fortified",
    "price": 3149,
    "priceFormatted": "₹3,149/mo",
    "orderUrl": "/order?plan=de-gold-2xl&cpu=gold-6150"
  },
  {
    "id": "de-gold-3xl",
    "name": "Intel Gold 3XL",
    "category": "xeon-gold",
    "location": "Germany",
    "processorFamily": "Intel® Xeon® Gold",
    "cpuModels": [
      {
        "id": "gold-6150",
        "name": "Xeon Gold 6150"
      }
    ],
    "vCores": 8,
    "ram": "64 GB",
    "ramGB": 64,
    "storage": "350 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Fortified",
    "price": 4169,
    "priceFormatted": "₹4,169/mo",
    "orderUrl": "/order?plan=de-gold-3xl&cpu=gold-6150"
  },
  {
    "id": "de-ryzen-xs",
    "name": "Ryzen XS",
    "category": "ryzen-5900x",
    "location": "Germany",
    "processorFamily": "AMD Ryzen™ 9 5900X",
    "cpuModels": [
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X (17+ Tbit/s OVH VAC)"
      }
    ],
    "vCores": 2,
    "ram": "6 GB",
    "ramGB": 6,
    "storage": "50 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "17+ Tbit/s OVH VAC",
    "price": 959,
    "priceFormatted": "₹959/mo",
    "orderUrl": "/order?plan=de-ryzen-xs&cpu=ryzen-5900x"
  },
  {
    "id": "de-ryzen-s",
    "name": "Ryzen S",
    "category": "ryzen-5900x",
    "location": "Germany",
    "processorFamily": "AMD Ryzen™ 9 5900X",
    "cpuModels": [
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X (17+ Tbit/s OVH VAC)"
      }
    ],
    "vCores": 2,
    "ram": "8 GB",
    "ramGB": 8,
    "storage": "50 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "17+ Tbit/s OVH VAC",
    "price": 1199,
    "priceFormatted": "₹1,199/mo",
    "orderUrl": "/order?plan=de-ryzen-s&cpu=ryzen-5900x"
  },
  {
    "id": "de-ryzen-m",
    "name": "Ryzen M",
    "category": "ryzen-5900x",
    "location": "Germany",
    "processorFamily": "AMD Ryzen™ 9 5900X",
    "cpuModels": [
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X (17+ Tbit/s OVH VAC)"
      }
    ],
    "vCores": 3,
    "ram": "12 GB",
    "ramGB": 12,
    "storage": "75 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "17+ Tbit/s OVH VAC",
    "price": 1789,
    "priceFormatted": "₹1,789/mo",
    "orderUrl": "/order?plan=de-ryzen-m&cpu=ryzen-5900x"
  },
  {
    "id": "de-ryzen-l",
    "name": "Ryzen L",
    "category": "ryzen-5900x",
    "location": "Germany",
    "processorFamily": "AMD Ryzen™ 9 5900X",
    "cpuModels": [
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X (17+ Tbit/s OVH VAC)"
      }
    ],
    "vCores": 4,
    "ram": "16 GB",
    "ramGB": 16,
    "storage": "120 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "17+ Tbit/s OVH VAC",
    "price": 2389,
    "priceFormatted": "₹2,389/mo",
    "orderUrl": "/order?plan=de-ryzen-l&cpu=ryzen-5900x",
    "badge": "Recommended"
  },
  {
    "id": "de-ryzen-xl",
    "name": "Ryzen XL",
    "category": "ryzen-5900x",
    "location": "Germany",
    "processorFamily": "AMD Ryzen™ 9 5900X",
    "cpuModels": [
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X (17+ Tbit/s OVH VAC)"
      }
    ],
    "vCores": 6,
    "ram": "24 GB",
    "ramGB": 24,
    "storage": "160 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "17+ Tbit/s OVH VAC",
    "price": 3219,
    "priceFormatted": "₹3,219/mo",
    "orderUrl": "/order?plan=de-ryzen-xl&cpu=ryzen-5900x"
  },
  {
    "id": "de-ryzen-xxl",
    "name": "Ryzen XXL",
    "category": "ryzen-5900x",
    "location": "Germany",
    "processorFamily": "AMD Ryzen™ 9 5900X",
    "cpuModels": [
      {
        "id": "ryzen-5900x",
        "name": "Ryzen 9 5900X (17+ Tbit/s OVH VAC)"
      }
    ],
    "vCores": 6,
    "ram": "32 GB",
    "ramGB": 32,
    "storage": "200 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "17+ Tbit/s OVH VAC",
    "price": 3819,
    "priceFormatted": "₹3,819/mo",
    "orderUrl": "/order?plan=de-ryzen-xxl&cpu=ryzen-5900x"
  },
  {
    "id": "de-milan-s",
    "name": "EPYC Milan S",
    "category": "epyc-milan",
    "location": "Germany",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 4,
    "ram": "6 GB",
    "ramGB": 6,
    "storage": "100 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 839,
    "priceFormatted": "₹839/mo",
    "orderUrl": "/order?plan=de-milan-s&cpu=epyc-milan"
  },
  {
    "id": "de-milan-m",
    "name": "EPYC Milan M",
    "category": "epyc-milan",
    "location": "Germany",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 6,
    "ram": "16 GB",
    "ramGB": 16,
    "storage": "200 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1549,
    "priceFormatted": "₹1,549/mo",
    "orderUrl": "/order?plan=de-milan-m&cpu=epyc-milan"
  },
  {
    "id": "de-milan-l",
    "name": "EPYC Milan L",
    "category": "epyc-milan",
    "location": "Germany",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 8,
    "ram": "24 GB",
    "ramGB": 24,
    "storage": "300 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 2389,
    "priceFormatted": "₹2,389/mo",
    "orderUrl": "/order?plan=de-milan-l&cpu=epyc-milan",
    "badge": "Recommended"
  },
  {
    "id": "de-milan-xl",
    "name": "EPYC Milan XL",
    "category": "epyc-milan",
    "location": "Germany",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 12,
    "ram": "48 GB",
    "ramGB": 48,
    "storage": "400 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 3939,
    "priceFormatted": "₹3,939/mo",
    "orderUrl": "/order?plan=de-milan-xl&cpu=epyc-milan"
  },
  {
    "id": "de-milan-xxl",
    "name": "EPYC Milan XXL",
    "category": "epyc-milan",
    "location": "Germany",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 16,
    "ram": "64 GB",
    "ramGB": 64,
    "storage": "500 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 4719,
    "priceFormatted": "₹4,719/mo",
    "orderUrl": "/order?plan=de-milan-xxl&cpu=epyc-milan"
  },
  {
    "id": "sg-epyc-s",
    "name": "EPYC Standard S",
    "category": "epyc-milan",
    "location": "Singapore",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 4,
    "ram": "6 GB",
    "ramGB": 6,
    "storage": "100 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1199,
    "priceFormatted": "₹1,199/mo",
    "orderUrl": "/order?plan=sg-epyc-s&cpu=epyc-milan"
  },
  {
    "id": "sg-epyc-m",
    "name": "EPYC Standard M",
    "category": "epyc-milan",
    "location": "Singapore",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 6,
    "ram": "16 GB",
    "ramGB": 16,
    "storage": "200 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 2149,
    "priceFormatted": "₹2,149/mo",
    "orderUrl": "/order?plan=sg-epyc-m&cpu=epyc-milan"
  },
  {
    "id": "sg-epyc-l",
    "name": "EPYC Standard L",
    "category": "epyc-milan",
    "location": "Singapore",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 8,
    "ram": "24 GB",
    "ramGB": 24,
    "storage": "300 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 3579,
    "priceFormatted": "₹3,579/mo",
    "orderUrl": "/order?plan=sg-epyc-l&cpu=epyc-milan",
    "badge": "Recommended"
  },
  {
    "id": "sg-epyc-xl",
    "name": "EPYC Standard XL",
    "category": "epyc-milan",
    "location": "Singapore",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 12,
    "ram": "48 GB",
    "ramGB": 48,
    "storage": "400 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 5629,
    "priceFormatted": "₹5,629/mo",
    "orderUrl": "/order?plan=sg-epyc-xl&cpu=epyc-milan"
  },
  {
    "id": "sg-epyc-xxl",
    "name": "EPYC Standard XXL",
    "category": "epyc-milan",
    "location": "Singapore",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 16,
    "ram": "64 GB",
    "ramGB": 64,
    "storage": "500 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 8219,
    "priceFormatted": "₹8,219/mo",
    "orderUrl": "/order?plan=sg-epyc-xxl&cpu=epyc-milan"
  },
  {
    "id": "us-epyc-s",
    "name": "AMD EPYC S",
    "category": "epyc-milan",
    "location": "USA",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 4,
    "ram": "6 GB",
    "ramGB": 6,
    "storage": "100 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1079,
    "priceFormatted": "₹1,079/mo",
    "orderUrl": "/order?plan=us-epyc-s&cpu=epyc-milan"
  },
  {
    "id": "us-epyc-m",
    "name": "AMD EPYC M",
    "category": "epyc-milan",
    "location": "USA",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 6,
    "ram": "16 GB",
    "ramGB": 16,
    "storage": "200 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1789,
    "priceFormatted": "₹1,789/mo",
    "orderUrl": "/order?plan=us-epyc-m&cpu=epyc-milan"
  },
  {
    "id": "us-epyc-l",
    "name": "AMD EPYC L",
    "category": "epyc-milan",
    "location": "USA",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 8,
    "ram": "24 GB",
    "ramGB": 24,
    "storage": "300 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 2859,
    "priceFormatted": "₹2,859/mo",
    "orderUrl": "/order?plan=us-epyc-l&cpu=epyc-milan",
    "badge": "Recommended"
  },
  {
    "id": "us-epyc-xl",
    "name": "AMD EPYC XL",
    "category": "epyc-milan",
    "location": "USA",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 12,
    "ram": "48 GB",
    "ramGB": 48,
    "storage": "400 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 4499,
    "priceFormatted": "₹4,499/mo",
    "orderUrl": "/order?plan=us-epyc-xl&cpu=epyc-milan"
  },
  {
    "id": "us-epyc-xxl",
    "name": "AMD EPYC XXL",
    "category": "epyc-milan",
    "location": "USA",
    "processorFamily": "AMD EPYC™ Milan",
    "cpuModels": [
      {
        "id": "epyc-milan",
        "name": "AMD EPYC™ Milan"
      }
    ],
    "vCores": 16,
    "ram": "64 GB",
    "ramGB": 64,
    "storage": "500 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 6579,
    "priceFormatted": "₹6,579/mo",
    "orderUrl": "/order?plan=us-epyc-xxl&cpu=epyc-milan"
  },
  {
    "id": "ca-epyc-s",
    "name": "AMD EPYC S",
    "category": "epyc-premium",
    "location": "Canada",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-premium",
        "name": "AMD EPYC™ Premium"
      }
    ],
    "vCores": 4,
    "ram": "6 GB",
    "ramGB": 6,
    "storage": "100 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 969,
    "priceFormatted": "₹969/mo",
    "orderUrl": "/order?plan=ca-epyc-s&cpu=epyc-premium"
  },
  {
    "id": "ca-epyc-m",
    "name": "AMD EPYC M",
    "category": "epyc-premium",
    "location": "Canada",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-premium",
        "name": "AMD EPYC™ Premium"
      }
    ],
    "vCores": 6,
    "ram": "16 GB",
    "ramGB": 16,
    "storage": "200 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 1819,
    "priceFormatted": "₹1,819/mo",
    "orderUrl": "/order?plan=ca-epyc-m&cpu=epyc-premium"
  },
  {
    "id": "ca-epyc-l",
    "name": "AMD EPYC L",
    "category": "epyc-premium",
    "location": "Canada",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-premium",
        "name": "AMD EPYC™ Premium"
      }
    ],
    "vCores": 8,
    "ram": "24 GB",
    "ramGB": 24,
    "storage": "300 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 2659,
    "priceFormatted": "₹2,659/mo",
    "orderUrl": "/order?plan=ca-epyc-l&cpu=epyc-premium",
    "badge": "Recommended"
  },
  {
    "id": "ca-epyc-xl",
    "name": "AMD EPYC XL",
    "category": "epyc-premium",
    "location": "Canada",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-premium",
        "name": "AMD EPYC™ Premium"
      }
    ],
    "vCores": 12,
    "ram": "48 GB",
    "ramGB": 48,
    "storage": "400 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 4109,
    "priceFormatted": "₹4,109/mo",
    "orderUrl": "/order?plan=ca-epyc-xl&cpu=epyc-premium"
  },
  {
    "id": "ca-epyc-xxl",
    "name": "AMD EPYC XXL",
    "category": "epyc-premium",
    "location": "Canada",
    "processorFamily": "AMD EPYC™ Premium",
    "cpuModels": [
      {
        "id": "epyc-premium",
        "name": "AMD EPYC™ Premium"
      }
    ],
    "vCores": 16,
    "ram": "64 GB",
    "ramGB": 64,
    "storage": "500 GB",
    "storageType": "Enterprise NVMe SSD",
    "memoryType": "DDR4 ECC",
    "bandwidth": "10 Gbps Port",
    "protection": "DDoS Always-On",
    "price": 6049,
    "priceFormatted": "₹6,049/mo",
    "orderUrl": "/order?plan=ca-epyc-xxl&cpu=epyc-premium"
  }
];

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
