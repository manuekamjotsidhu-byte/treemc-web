import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "../src/context/CurrencyContext";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "TreeMC — Global Cloud VPS, Minecraft & Server Hosting",
  description:
    "Cloud VPS across India, Germany, Singapore, USA, and Canada, plus Minecraft (Java & Bedrock), Windows RDP, Bot Hosting, Web Hosting, and India VDS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
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
