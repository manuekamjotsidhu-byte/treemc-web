export interface Article {
  slug: string;
  kind: "blog" | "guide";
  category: string;
  title: string;
  summary: string;
  readTime: string;
  sections: { heading: string; body: string }[];
}

export const ARTICLES: Article[] = [
  {
    slug: "how-to-choose-vps-location-and-cpu",
    kind: "blog",
    category: "Cloud VPS",
    title: "How to Choose the Right VPS Region & CPU Model",
    summary: "Compare Intel Xeon Standard, Xeon Gold, AMD EPYC Milan, and Ryzen 9 across India, Germany, Singapore, USA, and Canada.",
    readTime: "4 min read",
    sections: [
      { heading: "Pick the region closest to your users", body: "For Indian and South Asian audiences, Noida/Delhi and Singapore deliver sub-35ms latency. For European users, Frankfurt (Germany) offers direct Tier-1 peering, while USA and Canada cover North America." },
      { heading: "Match CPU architecture to your workload", body: "Intel Xeon Standard & Gold excel at steady multi-service workloads and web backends. AMD EPYC Milan gives strong multi-core density for Docker and databases, while AMD Ryzen 9 5900X/9950X delivers peak single-thread clock speeds." },
    ],
  },
  {
    slug: "windows-rdp-vs-cloud-vps",
    kind: "blog",
    category: "Windows RDP",
    title: "Windows RDP vs Linux Cloud VPS: Which Should You Buy?",
    summary: "Understand when a Windows Remote Desktop server (from ₹685/mo) beats a Linux KVM VPS (from ₹359/mo) for trading, automation, and apps.",
    readTime: "3 min read",
    sections: [
      { heading: "When to choose Windows RDP", body: "If you run Windows-only desktop software such as MetaTrader 4/5 (MT4/MT5), browser automation, or GUI tools 24/7, Windows RDP gives you an instant Administrator desktop ready out of the box." },
      { heading: "When to choose Linux Cloud VPS", body: "For web APIs, Node.js/Python backends, Reverse Proxies, Docker, and game servers, a Linux KVM VPS offers lower overhead and lower monthly cost." },
    ],
  },
  {
    slug: "minecraft-ram-and-cpu-guide",
    kind: "blog",
    category: "Minecraft",
    title: "How Much RAM & CPU Does Your Minecraft Server Need?",
    summary: "Size your Java or Bedrock server from 2 GB Sprout (₹99/mo) up to 32 GB Titan without overpaying or hitting TPS drops.",
    readTime: "4 min read",
    sections: [
      { heading: "Vanilla & Light SMP (2 GB – 4 GB)", body: "A 2 GB Sprout or 4 GB Sapling plan handles 5–15 friends on PaperMC or Purpur cleanly with pre-generated chunks." },
      { heading: "Modded & Large Networks (8 GB – 32 GB)", body: "Heavy modpacks and 40+ concurrent players benefit from AMD EPYC Performance tiers (Surge, Storm, Blaze, Titan) for faster garbage collection and chunk streaming." },
    ],
  },
  {
    slug: "setup-geysermc-java-bedrock-crossplay",
    kind: "guide",
    category: "Minecraft Guide",
    title: "Set Up Java & Bedrock Crossplay with GeyserMC & Floodgate",
    summary: "Step-by-step guide to letting Bedrock mobile/console players join your Java PaperMC server.",
    readTime: "5 min read",
    sections: [
      { heading: "1. Install GeyserMC & Floodgate", body: "Download Geyser-Spigot.jar and floodgate-spigot.jar into your server's /plugins directory via SFTP or the TreeMC Pterodactyl panel, then restart." },
      { heading: "2. Configure UDP Port", body: "Use your extra allocation port for Bedrock UDP traffic in Geyser's config.yml (port 19132 or your assigned extra port) and set auth-type: floodgate so Bedrock players don't need a Java account." },
    ],
  },
  {
    slug: "optimize-papermc-tps",
    kind: "guide",
    category: "Minecraft Guide",
    title: "Optimize PaperMC & Purpur Settings for Steady 20 TPS",
    summary: "Reduce MSPT spikes by tuning view-distance, simulation-distance, entity activation ranges, and chunk pre-generation.",
    readTime: "5 min read",
    sections: [
      { heading: "Tune simulation-distance", body: "Set simulation-distance=5 or 6 in server.properties while keeping view-distance=8 to cut mob AI tick load by over 40% without shrinking what players see." },
      { heading: "Pre-generate chunks with Chunky", body: "Run /chunky radius 3000 and /chunky start before opening your SMP so new players exploring the map never trigger live chunk generation lag." },
    ],
  },
  {
    slug: "run-mt5-24-7-on-windows-rdp",
    kind: "guide",
    category: "RDP Guide",
    title: "How to Run MetaTrader 5 (MT5) 24/7 on Windows RDP",
    summary: "Keep your Expert Advisors (EAs) and trading terminals online continuously on TreeMC Windows RDP.",
    readTime: "4 min read",
    sections: [
      { heading: "1. Connect via Remote Desktop", body: "Open Microsoft Remote Desktop on Windows, macOS, or mobile, enter your TreeMC RDP IPv4, username, and Administrator password." },
      { heading: "2. Leave Terminal Running on Disconnect", body: "Install MT4/MT5, log into your broker, attach your EA, and simply close the RDP window (do NOT click Sign Out or Shut Down) so it continues executing 24/7." },
    ],
  },
  {
    slug: "host-discord-bot-24-7",
    kind: "guide",
    category: "Bot Guide",
    title: "Deploy a 24/7 Discord Bot (Node.js / Python) on TreeMC",
    summary: "Upload your bot via SFTP, configure environment tokens, and enable automatic crash restarts.",
    readTime: "3 min read",
    sections: [
      { heading: "1. Upload Files & Install Dependencies", body: "Upload package.json or requirements.txt via SFTP to your TreeMC Bot Hosting container. The Pterodactyl startup script installs packages automatically on boot." },
      { heading: "2. Set Your Token & Start", body: "Paste your BOT_TOKEN in the Startup / .env config and click Start. Our watchdog keeps your bot online 24/7 from ₹49/month." },
    ],
  },
  {
    slug: "secure-linux-vps-checklist",
    kind: "guide",
    category: "VPS Guide",
    title: "First 5 Minutes Security Checklist for a New Linux VPS",
    summary: "Harden SSH keys, enable UFW firewall, and set up automatic security updates on Ubuntu or Debian.",
    readTime: "4 min read",
    sections: [
      { heading: "1. Update Packages & Enable UFW", body: "Run apt update && apt upgrade -y, allow SSH/HTTP/HTTPS (ufw allow OpenSSH && ufw enable), and verify active ports." },
      { heading: "2. Switch to SSH Keys", body: "Add your public key to ~/.ssh/authorized_keys and set PasswordAuthentication no in /etc/ssh/sshd_config to block brute-force logins." },
    ],
  },
];
