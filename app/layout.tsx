import type { Metadata } from "next";
import { Inter, Instrument_Serif, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "../src/context/CurrencyContext";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import AnimationController from "../src/components/AnimationController";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });
const pixel = Pixelify_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "TreeMC — Global Cloud VPS, Minecraft & Server Hosting",
  description:
    "Cloud VPS across India, Germany, Singapore, USA, and Canada, plus Minecraft (Java & Bedrock), Windows RDP, Bot Hosting, Web Hosting, and India VDS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${pixel.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem("treemc_theme");var isDark=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(isDark){d.classList.add("dark");d.style.backgroundColor="#080c14";d.style.colorScheme="dark";if(!t)localStorage.setItem("treemc_theme","dark");}else{d.style.backgroundColor="#f6f7f9";d.style.colorScheme="light";}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <CurrencyProvider>
          <AnimationController />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
