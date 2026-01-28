"use client";

import { motion } from "framer-motion";
import {
  Server,
  HardDrive,
  Database,
  Layers,
  Box,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading, Card, Button } from "@/components/ui";

const features = [
  {
    icon: Server,
    title: "VMware Protection",
    description:
      "Complete backup and recovery for VMware vSphere environments with agentless protection, instant VM recovery, and granular file-level restore.",
  },
  {
    icon: Layers,
    title: "Hyper-V Support",
    description:
      "Native Microsoft Hyper-V backup with application-aware processing, cluster support, and seamless integration with Windows Server environments.",
  },
  {
    icon: Cpu,
    title: "Physical Servers",
    description:
      "Comprehensive bare-metal backup for Windows and Linux physical servers with full system recovery and P2V migration capabilities.",
  },
  {
    icon: HardDrive,
    title: "NAS Backup",
    description:
      "Enterprise NAS protection supporting NetApp, Dell EMC, Pure Storage, and other major vendors with NDMP and file-level backup options.",
  },
  {
    icon: Database,
    title: "Oracle Protection",
    description:
      "Oracle Database backup with RMAN integration, application-consistent snapshots, and point-in-time recovery for mission-critical databases.",
  },
  {
    icon: Box,
    title: "SAP Protection",
    description:
      "SAP HANA and SAP applications backup with certified integration, ensuring business continuity for your enterprise resource planning systems.",
  },
];

const benefits = [
  "99.99% uptime SLA guarantee",
  "Sub-15 minute RTO for critical workloads",
  "Automated backup verification",
  "Global deduplication across all data",
  "Unlimited retention policies",
  "24/7 expert support",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DataCenterProtectionPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(100, 255, 218, 0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(100, 255, 218, 0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 border border-brand-accent/30 rounded-full text-brand-accent text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Enterprise Solution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Data Center{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-400">
                Protection
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-brand-text mb-8 max-w-3xl mx-auto"
            >
              Enterprise-grade infrastructure backup for your entire data center.
              Protect VMware, Hyper-V, physical servers, NAS systems, and
              business-critical applications like Oracle and SAP with a unified,
              scalable solution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/quiz">
                <Button size="lg" className="group w-full sm:w-auto">
                  Get Your Custom Solution
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Talk to an Expert
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-dark relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 to-transparent" />

        <Container className="relative z-10">
          <SectionHeading
            label="Capabilities"
            title="Complete Infrastructure Protection"
            description="From virtual machines to enterprise databases, protect every layer of your data center with industry-leading backup and recovery solutions."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-8" glow>
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-xl mb-5">
                    <feature.icon className="h-7 w-7 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-text leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise-Grade Protection,{" "}
                <span className="text-brand-accent">Simplified</span>
              </h2>
              <p className="text-brand-text text-lg mb-8">
                Our data center protection solution combines powerful features
                with intuitive management, giving you complete control over your
                backup infrastructure without the complexity.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center" glow>
                  <div className="text-4xl font-bold text-brand-accent mb-2">60%</div>
                  <div className="text-brand-text text-sm">
                    Cost Reduction vs. Legacy Solutions
                  </div>
                </Card>
                <Card className="p-6 text-center" glow>
                  <div className="text-4xl font-bold text-brand-accent mb-2">15min</div>
                  <div className="text-brand-text text-sm">
                    Average Recovery Time
                  </div>
                </Card>
                <Card className="p-6 text-center" glow>
                  <div className="text-4xl font-bold text-brand-accent mb-2">99.99%</div>
                  <div className="text-brand-text text-sm">
                    Backup Success Rate
                  </div>
                </Card>
                <Card className="p-6 text-center" glow>
                  <div className="text-4xl font-bold text-brand-accent mb-2">10x</div>
                  <div className="text-brand-text text-sm">
                    Faster Than Traditional Backup
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-3xl opacity-20" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Protect Your{" "}
              <span className="text-brand-accent">Data Center</span>?
            </h2>
            <p className="text-brand-text text-lg mb-8">
              Take our quick assessment to get a customized protection plan, or
              speak directly with our data center specialists to discuss your
              specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
                <Button size="lg" className="group w-full sm:w-auto">
                  Start Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
