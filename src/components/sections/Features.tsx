"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Shield, AlertTriangle } from "lucide-react";
import Link from "next/link";

interface ComparisonRow {
  feature: string;
  legacy: string | boolean;
  inovuus: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Infrastructure",
    legacy: "On-premises hardware, high CAPEX",
    inovuus: "100% SaaS, zero infrastructure",
  },
  {
    feature: "Ransomware Protection",
    legacy: false,
    inovuus: "Air-gapped, immutable backups",
  },
  {
    feature: "Scalability",
    legacy: "Manual capacity planning",
    inovuus: "Infinite scale on-demand",
  },
  {
    feature: "Recovery Speed",
    legacy: "Hours to days",
    inovuus: "Minutes with instant recovery",
  },
  {
    feature: "Administration",
    legacy: "Complex, multiple consoles",
    inovuus: "Single pane of glass",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function LegacyCell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
          <X className="w-5 h-5 text-red-400" />
        </div>
        <span className="text-red-400 font-medium">Not Available</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
        <AlertTriangle className="w-5 h-5 text-yellow-400" />
      </div>
      <span className="text-brand-text">{value}</span>
    </div>
  );
}

function InovuusCell({ value }: { value: string | boolean }) {
  const displayValue = typeof value === "boolean" ? "Full Protection" : value;
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
        <Check className="w-5 h-5 text-brand-accent" />
      </div>
      <span className="text-brand-accent font-medium">{displayValue}</span>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-6"
          >
            <Shield className="w-5 h-5 text-brand-accent" />
            <span className="text-brand-accent font-medium text-sm">Cloud-Native Advantage</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why <span className="gradient-text">iNovuus</span>?
          </h2>
          <p className="text-brand-text text-xl max-w-3xl mx-auto leading-relaxed">
            See how cloud-native data protection outperforms legacy backup solutions
          </p>
        </motion.div>

        {/* Comparison Table - Card Style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          {/* Table Container */}
          <div className="bg-brand-dark/60 backdrop-blur-sm rounded-2xl border border-brand-slate/30 overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] border-b border-brand-slate/30">
              <div className="p-6 lg:p-8 bg-brand-dark/50 border-b lg:border-b-0 lg:border-r border-brand-slate/30">
                <span className="text-xl font-bold text-white">Feature</span>
              </div>
              <div className="p-6 lg:p-8 bg-brand-dark/50 text-center border-b lg:border-b-0 lg:border-r border-brand-slate/30">
                <span className="text-xl font-bold text-gray-400">Legacy Backup</span>
              </div>
              <div className="p-6 lg:p-8 bg-brand-accent/10 text-center relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50" />
                <span className="text-xl font-bold text-brand-accent">iNovuus</span>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <motion.div
                key={row.feature}
                variants={rowVariants}
                className={`grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] ${
                  index !== comparisonData.length - 1 ? "border-b border-brand-slate/20" : ""
                }`}
              >
                {/* Feature Column */}
                <div className="p-6 lg:p-8 bg-brand-dark/30 border-b lg:border-b-0 lg:border-r border-brand-slate/20">
                  <span className="text-lg font-semibold text-white">{row.feature}</span>
                </div>

                {/* Legacy Column */}
                <div className="p-6 lg:p-8 bg-brand-dark/20 border-b lg:border-b-0 lg:border-r border-brand-slate/20">
                  <LegacyCell value={row.legacy} />
                </div>

                {/* iNovuus Column */}
                <div className="p-6 lg:p-8 bg-brand-accent/5 hover:bg-brand-accent/10 transition-colors">
                  <InovuusCell value={row.inovuus} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating accent */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-b from-brand-accent/0 via-brand-accent to-brand-accent/0 rounded-full hidden lg:block" />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-brand-text text-lg mb-8">
            Ready to modernize your data protection?
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-accent text-brand-dark font-semibold text-lg rounded-lg hover:bg-brand-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 group"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
