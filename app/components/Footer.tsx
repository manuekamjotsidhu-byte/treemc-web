"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mail, Gamepad2, ExternalLink, Activity, Globe } from "lucide-react"
import { FaDiscord } from "react-icons/fa6"
import DiscordBanner from "./DiscordBanner"
import { useLanguage } from "../contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: "Minecraft Hosting", href: "/games" },
    { name: "Cloud VPS", href: "/vps" },
    { name: "VDS Hosting (India)", href: "/dedicated" },
    { name: "Windows RDP (India)", href: "/rdp" },
    { name: "Discord Bot Hosting", href: "/discord" },
    { name: "Web Hosting", href: "/webhosting" },
    { name: "Pakistan Portal (PKR)", href: "https://pakistan.treemc.host/", external: true },
  ]

  const legalLinks = [
    { name: "Terms of Service", href: "/terms-of-services" },
    { name: "Acceptable Use Policy", href: "/acceptable-use-policy" },
    { name: "Uptime SLA Guarantee", href: "/sla" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email Support", value: "support@treemc.host", href: "mailto:support@treemc.host" },
    { icon: FaDiscord, label: "Discord Community", value: "discord.gg/MJFPbjAdJY", href: "https://discord.gg/MJFPbjAdJY" },
    { icon: Gamepad2, label: "Pterodactyl Panel", value: "panel.treemc.host", href: "https://panel.treemc.host" },
    { icon: Activity, label: "Network Status", value: "status.treemc.host", href: "https://status.treemc.host" },
    { icon: Globe, label: "Pakistan Portal", value: "pakistan.treemc.host", href: "https://pakistan.treemc.host/" },
  ]

  return (
    <div className="relative">
      <div className="relative z-30 -mb-47">
        <DiscordBanner />
      </div>

      <footer className="bg-gray-100 dark:bg-[#0a0b0f] border-t border-gray-200 dark:border-white/10 relative z-10 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 mt-24 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="mb-6 flex items-center gap-3">
                <Image
                  src="/treemc-logo.png"
                  alt="TreeMC Host Logo"
                  width={44}
                  height={44}
                  className="h-11 w-auto rounded-lg shadow-md"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-black text-gray-900 dark:text-white leading-none">
                    Tree<span className="icon-text-primary">MC</span>
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase mt-0.5">
                    HOSTING
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                High-Performance Game & Cloud Infrastructure powered by AMD EPYC & Intel Xeon processors with multi-layer DDoS protection.
              </p>
              <div className="p-3 rounded-xl bg-gray-200/60 dark:bg-white/[0.04] border border-gray-300/50 dark:border-white/[0.08] mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-500 mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Executive Leadership</span>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Abdullah</span>
                    <span className="text-gray-500 dark:text-gray-400"> — Founder &amp; CEO</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">Ekamjot Singh</span>
                    <span className="text-gray-500 dark:text-gray-400"> — CEO &amp; CTO</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 orbitron-font">
                Hosting Services
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors duration-300 text-sm flex items-center group font-medium"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 orbitron-font">
                Legal & Policies
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-6 orbitron-font">
                Support & Contact
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gray-600 dark:text-gray-400 hover:text-icon-text-primary dark:hover:text-icon-text-primary transition-colors duration-300 text-sm flex items-center group"
                    >
                      <contact.icon className="w-4 h-4 mr-3 icon-text-primary shrink-0" />
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">{contact.label}</div>
                        <div className="group-hover:text-icon-text-primary dark:group-hover:text-icon-text-primary transition-colors duration-300">{contact.value}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
                © {new Date().getFullYear()} TreeMC Host. All rights reserved. • Founded by <span className="font-medium text-gray-800 dark:text-gray-200">Abdullah</span> (Founder &amp; CEO) &amp; <span className="font-medium text-gray-800 dark:text-gray-200">Ekamjot Singh</span> (CEO &amp; CTO)
              </div>
              <div className="flex items-center space-x-6 text-xs text-emerald-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5" />
                All Systems Operational (99.9% SLA)
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
