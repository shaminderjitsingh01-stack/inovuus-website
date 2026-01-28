"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Database,
  Zap,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
  Layers,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading, Card, Button } from "@/components/ui";

const features = [
  {
    icon: Cloud,
    title: "Zero Infrastructure",
    description:
      "Eliminate hardware costs and maintenance headaches. Our fully managed cloud-native solution means no servers to buy, no storage to provision, no updates to manage.",
  },
  {
    icon: Layers,
    title: "Auto-Scaling",
    description:
      "Storage that grows with you. Automatically scale from gigabytes to petabytes without planning or provisioning. Pay only for what you use.",
  },
  {
    icon: Globe,
    title: "Multi-Cloud Support",
    description:
      "Deploy across AWS, Azure, or Google Cloud. Avoid vendor lock-in with our cloud-agnostic architecture that gives you ultimate flexibility.",
  },
  {
    icon: Database,
    title: "Global Deduplication",
    description:
      "Reduce storage costs by up to 65%. Our intelligent deduplication technology identifies duplicate data across your entire organization.",
  },
  {
    icon: Zap,
    title: "Instant Recovery",
    description:
      "Recover files in seconds, not hours. Our patented streaming technology enables near-zero RTO for critical workloads.",
  },
  {
    icon: Shield,
    title: "Immutable Backups",
    description:
      "Ransomware-proof your data with immutable snapshots. Once written, backups cannot be altered or deleted, even by admins.",
  },
];

const benefits = [
  "60% reduction in backup infrastructure costs",
  "99.999% data durability with geo-redundant storage",
  "Recovery time reduced from hours to minutes",
  "Single pane of glass for all backup operations",
  "24/7 monitoring and automated alerting",
  "SOC 2 Type II and ISO 27001 certified",
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

export default function CloudBackupPage() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(100, 255, 218, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 255, 218, 0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4">
                <Cloud className="h-4 w-4" />
                Cloud Backup Solution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Cloud Backup &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-cyan-400">
                Disaster Recovery
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-brand-text mb-8 max-w-3xl mx-auto"
            >
              Retire your hardware. Revolutionize your recovery. Our secure cloud-native
              backup solution scales instantly, costs 60% less than traditional approaches,
              and recovers your critical data in minutes, not hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/quiz">
                <Button size="lg" className="group w-full sm:w-auto">
                  Find Your Solution
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
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 to-transparent" />
        <Container className="relative z-10">
          <SectionHeading
            label="Features"
            title="Enterprise-Grade Cloud Backup"
            description="Purpose-built for modern enterprises, our cloud backup platform delivers unmatched performance, security, and reliability."
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
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-text">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
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
                Trusted by Enterprises Worldwide
              </h2>
              <p className="text-brand-text mb-8">
                Join thousands of organizations that have modernized their data protection
                with our cloud-native backup platform. Experience the difference of a
                solution designed for the challenges of today and tomorrow.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                    <span className="text-brand-text-light">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-brand-navy to-brand-dark border border-brand-slate/30 rounded-2xl p-8">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl" />

                <div className="relative grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-brand-dark/50 rounded-xl">
                    <div className="text-4xl font-bold text-brand-accent mb-2">99.999%</div>
                    <div className="text-sm text-brand-text">Data Durability</div>
                  </div>
                  <div className="text-center p-4 bg-brand-dark/50 rounded-xl">
                    <div className="text-4xl font-bold text-brand-accent mb-2">60%</div>
                    <div className="text-sm text-brand-text">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-brand-dark/50 rounded-xl">
                    <div className="text-4xl font-bold text-brand-accent mb-2">&lt;15min</div>
                    <div className="text-sm text-brand-text">Recovery Time</div>
                  </div>
                  <div className="text-center p-4 bg-brand-dark/50 rounded-xl">
                    <div className="text-4xl font-bold text-brand-accent mb-2">24/7</div>
                    <div className="text-sm text-brand-text">Expert Support</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-brand-navy/30">
        <Container>
          <SectionHeading
            label="How It Works"
            title="Simple, Secure, Scalable"
            description="Get started in minutes with our streamlined onboarding process."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Environment",
                description:
                  "Deploy our lightweight agent or connect via API. Supports VMs, containers, databases, and SaaS apps.",
                icon: Server,
              },
              {
                step: "02",
                title: "Configure Policies",
                description:
                  "Set backup schedules, retention rules, and recovery objectives. Our AI recommends optimal settings.",
                icon: RefreshCw,
              },
              {
                step: "03",
                title: "Recover Instantly",
                description:
                  "When you need your data, recover it in seconds. Granular recovery from files to full systems.",
                icon: Zap,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <Card className="p-8 h-full" hover={false}>
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-brand-accent to-cyan-400 text-brand-dark text-sm font-bold px-3 py-1 rounded-full">
                    Step {item.step}
                  </div>
                  <div className="mt-4">
                    <div className="inline-flex items-center justify-center p-3 bg-brand-accent/10 rounded-lg mb-4">
                      <item.icon className="h-6 w-6 text-brand-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-brand-text">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-brand-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your{" "}
              <span className="text-brand-accent">Data Protection</span>?
            </h2>
            <p className="text-xl text-brand-text mb-8">
              Take our quick assessment to discover the perfect backup solution for
              your organization, or speak directly with one of our experts.
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
    </div>
  );
}
