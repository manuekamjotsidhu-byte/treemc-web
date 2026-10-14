'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, FileText, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import legalConfig from "../config/sections/legal.json";

export default function RefundPage() {
  const refundData = legalConfig.refundPolicy;
  const [activeSection, setActiveSection] = useState<string>(refundData.sections[0]?.title || "");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <Navbar />

      <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 card-primary px-4 py-2 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 icon-text-primary" />
            <span className="icon-text-primary text-sm font-medium">Refund Policy</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 orbitron-font">
            TreeMC Host <span className="icon-text-primary">Refund Policy</span>
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {refundData.lastUpdated}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents Sticky Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-secondary rounded-lg p-4">
              <h2 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Table of Contents
              </h2>
              <nav className="space-y-1">
                {refundData.sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(section.title)}
                    className={`w-full text-left px-3 py-2 text-xs rounded-md transition-colors ${
                      activeSection === section.title
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Refund Policy Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-secondary rounded-lg text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              This Refund Policy outlines the conditions under which refunds may or may not be issued for services purchased from TreeMC Host (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By purchasing any service, you agree to this policy.
            </div>

            {refundData.sections.map((section, index) => (
              <div
                key={index}
                id={section.title}
                className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-secondary rounded-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 orbitron-font">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
