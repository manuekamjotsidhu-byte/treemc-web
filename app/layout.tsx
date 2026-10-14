import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron, Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { LayoutWrapper } from "./components/layout-wrapper";
import { LanguageProvider } from "./contexts/LanguageContext";
import CookieConsent from "./components/CookieConsent";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ChristmasSnowfall from "./components/ChristmasSnowfall";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
// hi there
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
});
// hello again
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" }
  ],
}

export const metadata: Metadata = {
  title: {
    default: "TreeMC Host - High-Performance Game, Bot & Web Hosting",
    template: "%s | TreeMC Host"
  },
  description: "High-performance Minecraft, Discord Bot, Web Hosting and Cloud Infrastructure by TreeMC Host. Powered by Ryzen & Intel Xeon CPUs, NVMe SSD, and 24/7 DDoS Protection.",
  keywords: [
    "TreeMC Host",
    "minecraft hosting",
    "bot hosting",
    "web hosting",
    "pterodactyl panel",
    "game servers",
    "cPanel web hosting",
    "low latency hosting",
    "DDoS protection",
    "24/7 support",
    "budget minecraft hosting"
  ],
  authors: [
    { name: "Abdullah", url: "https://treemc.host" },
    { name: "Ekamjot Singh", url: "https://treemc.host" },
    { name: "TreeMC Host Team" }
  ],
  creator: "Abdullah (Founder & CEO) & Ekamjot Singh (CEO & CTO)",
  publisher: "TreeMC Host",
  category: "Game & Web Hosting Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://treemc.host",
    siteName: "TreeMC Host",
    title: "TreeMC Host - High-Performance Game, Bot & Web Hosting",
    description: "Reliable, high-performance game hosting, discord bot hosting, and web hosting with enterprise DDoS protection and instant Pterodactyl panel provisioning.",
    images: [
      {
        url: "https://treemc.host/treemc-banner.png",
        width: 1200,
        height: 630,
        alt: "TreeMC Host - High-Performance Game, Bot & Web Hosting",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TreeMC Host - High-Performance Game, Bot & Web Hosting",
    description: "Reliable, high-performance game hosting, discord bot hosting, and web hosting with enterprise DDoS protection and 24/7 support.",
    images: ["https://treemc.host/treemc-banner.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: "TreeMC Host",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/treemc-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/treemc-logo.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/treemc-logo.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/treemc-logo.png"
  },
  alternates: {
    canonical: "https://treemc.host"
  },
  other: {
    "terms-of-service": "https://treemc.host/terms-of-services",
    "refund-policy": "https://treemc.host/refund-policy",
    "privacy-policy": "https://treemc.host/privacy-policy"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TreeMC Host" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TreeMC Host",
              "url": "https://treemc.host",
              "logo": "https://treemc.host/treemc-logo.png",
              "description": "High-performance Minecraft, Discord Bot, Web Hosting and Cloud Infrastructure.",
              "serviceType": ["Minecraft Server Hosting", "Discord Bot Hosting", "Web Hosting", "Pterodactyl Panel"],
              "areaServed": "Worldwide",
              "sameAs": [
                "https://discord.gg/MJFPbjAdJY"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English",
                "serviceType": "Technical Support",
                "url": "https://discord.gg/MJFPbjAdJY"
              },
              "termsOfService": "https://treemc.host/terms-of-services",
              "refundPolicy": "https://treemc.host/refund-policy"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${quicksand.variable} antialiased min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <ChristmasSnowfall />
            <LayoutWrapper>
              {children}
              <Analytics />
            </LayoutWrapper>
            <CookieConsent />
            <ThemeSwitcher />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
