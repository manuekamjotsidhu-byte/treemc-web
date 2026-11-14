// AUTO-GENERATED from plans.cost.json - DO NOT EDIT DIRECTLY
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

export const VPS_PLANS: VPSPlan[] = [
  {
    "id": "xeon-xs",
    "name": "Xeon Standard XS",
    "category": "xeon",
    "processor": "Intel® Xeon® Processor",
    "vCores": 2,
    "ram": "6 GB",
    "storage": "50 GB",
    "bandwidth": "1 Gbps",
    "protection": "Always-On DDoS Shield",
    "location": "India data center",
    "price": 359,
    "priceFormatted": "₹359/mo",
    "orderUrl": "/order?plan=xeon-xs",
    "verificationStatus": "UNVERIFIED"
  },
  {
    "id": "xeon-s",
    "name": "Xeon Standard S",
    "category": "xeon",
    "processor": "Intel® Xeon® Processor",
    "vCores": 2,
    "ram": "8 GB",
    "storage": "80 GB",
    "bandwidth": "1 Gbps",
    "protection": "Always-On DDoS Shield",
    "location": "India data center",
    "price": 479,
    "priceFormatted": "₹479/mo",
    "orderUrl": "/order?plan=xeon-s",
    "verificationStatus": "UNVERIFIED"
  },
  {
    "id": "xeon-m",
    "name": "Xeon Standard M",
    "category": "xeon",
    "processor": "Intel® Xeon® Processor",
    "vCores": 4,
    "ram": "12 GB",
    "storage": "100 GB",
    "bandwidth": "1 Gbps",
    "protection": "Always-On DDoS Shield",
    "location": "India data center",
    "price": 719,
    "priceFormatted": "₹719/mo",
    "orderUrl": "/order?plan=xeon-m",
    "verificationStatus": "UNVERIFIED"
  },
  {
    "id": "xeon-l",
    "name": "Xeon Standard L",
    "category": "xeon",
    "processor": "Intel® Xeon® Processor",
    "vCores": 6,
    "ram": "16 GB",
    "storage": "150 GB",
    "bandwidth": "1 Gbps",
    "protection": "Always-On DDoS Shield",
    "location": "India data center",
    "price": 959,
    "priceFormatted": "₹959/mo",
    "orderUrl": "/order?plan=xeon-l",
    "verificationStatus": "UNVERIFIED"
  },
  {
    "id": "xeon-xl",
    "name": "Xeon Standard XL",
    "category": "xeon",
    "processor": "Intel® Xeon® Processor",
    "vCores": 6,
    "ram": "24 GB",
    "storage": "200 GB",
    "bandwidth": "1 Gbps",
    "protection": "Always-On DDoS Shield",
    "location": "India data center",
    "price": 1429,
    "priceFormatted": "₹1,429/mo",
    "orderUrl": "/order?plan=xeon-xl",
    "verificationStatus": "VERIFIED",
    "badge": "Recommended"
  },
  {
    "id": "xeon-xxl",
    "name": "Xeon Standard XXL",
    "category": "xeon",
    "processor": "Intel® Xeon® Processor",
    "vCores": 8,
    "ram": "32 GB",
    "storage": "300 GB",
    "bandwidth": "1 Gbps",
    "protection": "Always-On DDoS Shield",
    "location": "India data center",
    "price": 1909,
    "priceFormatted": "₹1,909/mo",
    "orderUrl": "/order?plan=xeon-xxl",
    "verificationStatus": "VERIFIED"
  },
  {
    "id": "xeon-2xl",
    "name": "Xeon Standard 2XL",
    "category": "xeon",
    "processor": "Intel® Xeon® Processor",
    "vCores": 10,
    "ram": "48 GB",
    "storage": "350 GB",
    "bandwidth": "1 Gbps",
    "protection": "Always-On DDoS Shield",
    "location": "India data center",
    "price": 2859,
    "priceFormatted": "₹2,859/mo",
    "orderUrl": "/order?plan=xeon-2xl",
    "verificationStatus": "VERIFIED"
  },
  {
    "id": "xeon-3xl",
    "name": "Xeon Standard 3XL",
    "category": "xeon",
    "processor": "Intel® Xeon® Processor",
    "vCores": 12,
    "ram": "64 GB",
    "storage": "400 GB",
    "bandwidth": "1 Gbps",
    "protection": "Always-On DDoS Shield",
    "location": "India data center",
    "price": 3819,
    "priceFormatted": "₹3,819/mo",
    "orderUrl": "/order?plan=xeon-3xl",
    "verificationStatus": "VERIFIED"
  },
  {
    "id": "epyc-xs",
    "name": "EPYC Premium XS",
    "category": "epyc",
    "processor": "AMD EPYC™ Milan Processor",
    "vCores": 2,
    "ram": "6 GB",
    "storage": "50 GB",
    "bandwidth": "1 Gbps",
    "protection": "Enterprise DDoS Mitigation",
    "location": "India data center",
    "price": 419,
    "priceFormatted": "₹419/mo",
    "orderUrl": "/order?plan=epyc-xs",
    "verificationStatus": "UNVERIFIED"
  },
  {
    "id": "epyc-s",
    "name": "EPYC Premium S",
    "category": "epyc",
    "processor": "AMD EPYC™ Milan Processor",
    "vCores": 2,
    "ram": "8 GB",
    "storage": "80 GB",
    "bandwidth": "1 Gbps",
    "protection": "Enterprise DDoS Mitigation",
    "location": "India data center",
    "price": 599,
    "priceFormatted": "₹599/mo",
    "orderUrl": "/order?plan=epyc-s",
    "verificationStatus": "UNVERIFIED"
  },
  {
    "id": "epyc-m",
    "name": "EPYC Premium M",
    "category": "epyc",
    "processor": "AMD EPYC™ Milan Processor",
    "vCores": 4,
    "ram": "12 GB",
    "storage": "100 GB",
    "bandwidth": "1 Gbps",
    "protection": "Enterprise DDoS Mitigation",
    "location": "India data center",
    "price": 959,
    "priceFormatted": "₹959/mo",
    "orderUrl": "/order?plan=epyc-m",
    "verificationStatus": "UNVERIFIED"
  },
  {
    "id": "epyc-l",
    "name": "EPYC Premium L",
    "category": "epyc",
    "processor": "AMD EPYC™ Milan Processor",
    "vCores": 6,
    "ram": "16 GB",
    "storage": "150 GB",
    "bandwidth": "1 Gbps",
    "protection": "Enterprise DDoS Mitigation",
    "location": "India data center",
    "price": 1199,
    "priceFormatted": "₹1,199/mo",
    "orderUrl": "/order?plan=epyc-l",
    "verificationStatus": "UNVERIFIED"
  },
  {
    "id": "epyc-xl",
    "name": "EPYC Premium XL",
    "category": "epyc",
    "processor": "AMD EPYC™ Milan Processor",
    "vCores": 6,
    "ram": "24 GB",
    "storage": "200 GB",
    "bandwidth": "1 Gbps",
    "protection": "Enterprise DDoS Mitigation",
    "location": "India data center",
    "price": 1909,
    "priceFormatted": "₹1,909/mo",
    "orderUrl": "/order?plan=epyc-xl",
    "verificationStatus": "VERIFIED",
    "badge": "Recommended"
  },
  {
    "id": "epyc-xxl",
    "name": "EPYC Premium XXL",
    "category": "epyc",
    "processor": "AMD EPYC™ Milan Processor",
    "vCores": 8,
    "ram": "32 GB",
    "storage": "300 GB",
    "bandwidth": "1 Gbps",
    "protection": "Enterprise DDoS Mitigation",
    "location": "India data center",
    "price": 2389,
    "priceFormatted": "₹2,389/mo",
    "orderUrl": "/order?plan=epyc-xxl",
    "verificationStatus": "VERIFIED"
  },
  {
    "id": "epyc-2xl",
    "name": "EPYC Premium 2XL",
    "category": "epyc",
    "processor": "AMD EPYC™ Milan Processor",
    "vCores": 10,
    "ram": "48 GB",
    "storage": "350 GB",
    "bandwidth": "1 Gbps",
    "protection": "Enterprise DDoS Mitigation",
    "location": "India data center",
    "price": 3579,
    "priceFormatted": "₹3,579/mo",
    "orderUrl": "/order?plan=epyc-2xl",
    "verificationStatus": "VERIFIED"
  },
  {
    "id": "epyc-3xl",
    "name": "EPYC Premium 3XL",
    "category": "epyc",
    "processor": "AMD EPYC™ Milan Processor",
    "vCores": 12,
    "ram": "64 GB",
    "storage": "400 GB",
    "bandwidth": "1 Gbps",
    "protection": "Enterprise DDoS Mitigation",
    "location": "India data center",
    "price": 4769,
    "priceFormatted": "₹4,769/mo",
    "orderUrl": "/order?plan=epyc-3xl",
    "verificationStatus": "VERIFIED"
  }
];

export const XEON_PLANS = VPS_PLANS.filter(p => p.category === "xeon");
export const EPYC_PLANS = VPS_PLANS.filter(p => p.category === "epyc");

export function getPlanById(id: string): VPSPlan | undefined {
  return VPS_PLANS.find(p => p.id === id);
}
