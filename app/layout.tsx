import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "../src/context/CurrencyContext";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "TreeMC — Global Cloud VPS, Minecraft & Server Hosting",
  description:
    "High-performance Cloud VPS, Minecraft (Java & Bedrock), Windows RDP, Discord Bot, Web Hosting, and India VDS across India, Germany, Singapore, USA, Canada, and Dubai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <CurrencyProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
