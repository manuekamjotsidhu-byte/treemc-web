# 🌲 TreeMC Host — Official Website

High-Performance Game & Cloud Infrastructure Portal for **TreeMC Host** ([treemc.host](https://treemc.host)).

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, and custom Framer Motion interactive components.

---

## ⚡ Quick Links & Endpoints

| Service | Address | Description |
|---|---|---|
| **Official Domain** | `https://treemc.host` | Primary Web Portal |
| **Game Panel** | `https://panel.treemc.host` | Pterodactyl-Powered Control Panel |
| **System Status** | `https://status.treemc.host` | Real-time Global Node Status |
| **Discord Community & Orders** | `https://discord.gg/MJFPbjAdJY` | Ticket Support, Custom Deployments & Billing |

---

## 🚀 Key Features

1. **TreeMC Branding**:
   - Official hexagonal crystalline emerald tree logo (`/treemc-logo.png`).
   - Official banner with illuminated edge-glow styling (`/treemc-banner.png`).
   - Unified dark-mode obsidian aesthetic (`#070a0e`) with electric emerald (`#10b981`) and cyan highlights.

2. **Minecraft Hosting Line**:
   - **Budget Tier**: High Single-Thread Intel Xeon E-2288G / E5 v4 processors.
   - **Performance Tier**: AMD EPYC 9654 DDR5 / AMD Ryzen 9 7950X processors.
   - **Interactive Billing Toggle**: Monthly and Annual (20% off) calculation.
   - **Comprehensive 9-Row Feature Matrix**: CPU allocation, NVMe RAID-10 storage, L3/L4/L7 DDoS mitigation, automated backups, and 99.9% uptime SLA.

3. **Cloud Infrastructure Selector (VPS & VDS)**:
   - Zero-pagination real-time filter.
   - Region Selection: India (Noida/Delhi/Mumbai), Pakistan (Lahore), Singapore, Germany, USA, Canada.
   - Real-time CPU notices per country (e.g. India Xeon Platinum 8275CL / E-2388G, Pakistan AMD EPYC 7763, etc.).
   - Switch between **KVM Cloud VPS** and **Dedicated Bare-Metal VDS**.

4. **Global Low-Ping Edge Nodes**:
   - Interactive 3D globe and node list highlighting regional transit tiers, sub-15ms regional routing, and live status telemetry.

5. **Direct Discord Integration**:
   - All purchase and deployment buttons route directly to `https://discord.gg/MJFPbjAdJY` ticket system.

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js 18.x or 20.x+
- npm / pnpm / yarn

### Installation
```bash
# Install dependencies
npm install

# Start local development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server on port 3000
npm run start
```

---

## 🌐 Production Deployment

### 1. Running with PM2
```bash
# Install PM2 globally if not already installed
npm install -g pm2

# Build the project
npm run build

# Launch the production instance
pm2 start npm --name "treemc-host" -- start

# Save process list for auto-boot on reboot
pm2 save
pm2 startup
```

### 2. Nginx Reverse Proxy Setup (`/etc/nginx/sites-available/treemc.host`)
```nginx
server {
    listen 80;
    server_name treemc.host www.treemc.host;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and obtain SSL with Certbot:
```bash
sudo ln -s /etc/nginx/sites-available/treemc.host /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d treemc.host -d www.treemc.host
```

---

## 📁 Directory Structure

```
├── app/
│   ├── components/
│   │   ├── Navbar.tsx                   # Top navigation with TreeMC logo, Panel & Discord CTAs
│   │   ├── HeroSection.tsx              # Banner preview, headline, and real-time stats
│   │   ├── FeaturesSection.tsx          # 6 core TreeMC pillars
│   │   ├── PricingSection.tsx           # Budget & Performance plans with comparison matrix
│   │   ├── CloudInfrastructureSection.tsx # Country & CPU selector for VPS/VDS (no pagination)
│   │   ├── LocationsSection.tsx         # Global edge datacenter points with copyable test IPs
│   │   ├── PanelShowcase.tsx            # Interactive game panel preview (panel.treemc.host)
│   │   ├── DiscordBanner.tsx            # Discord community card (discord.gg/MJFPbjAdJY)
│   │   └── Footer.tsx                   # Clean branded footer with legal & status links
│   ├── data/
│   │   └── treeMcPlans.ts               # Plans, pricing, nodes, and hardware specifications
│   ├── layout.tsx                       # Root layout with OpenGraph, favicon, SEO for treemc.host
│   └── page.tsx                         # Main landing page
└── public/
    ├── treemc-logo.png                  # Official Hexagonal Crystal Tree Logo
    ├── treemc-banner.png                # Official TreeMC Host Banner
    ├── flags/                           # Country flags (including Pakistan, India, etc.)
    └── cpu/                             # Hardware tier badges (Intel Xeon, AMD EPYC, Ryzen)
```

---

© 2026 TreeMC Host (`treemc.host`). All rights reserved.