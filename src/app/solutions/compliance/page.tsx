"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Scale,
  Search,
  Clock,
  MapPin,
  Shield,
  Lock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading, Card, Button } from "@/components/ui";

const features = [
  {
    icon: Clock,
    title: "Automated Data Retention",
    description:
      "Set intelligent retention policies that automatically manage data lifecycle. Ensure compliance with industry-specific requirements while optimizing storage costs.",
  },
  {
    icon: Search,
    title: "eDiscovery",
    description:
      "Quickly locate, preserve, and export data for legal proceedings. Our powerful search capabilities make finding relevant information fast and efficient.",
  },
  {
    icon: Lock,
    title: "Legal Hold",
    description:
      "Instantly preserve data when litigation is anticipated. Prevent accidental deletion and maintain chain of custody with comprehensive audit trails.",
  },
  {
    icon: FileCheck,
    title: "Audit Trails",
    description:
      "Complete visibility into who accessed what, when, and why. Generate compliance reports instantly for auditors and regulatory bodies.",
  },
  {
    icon: MapPin,
    title: "Data Residency Controls",
    description:
      "Keep data where it needs to be. Enforce geographic boundaries for data storage to meet local regulations like GDPR and PDPA requirements.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "Stay ahead of evolving regulations including GDPR, PDPA, HIPAA, and SOC 2. Our platform adapts to new compliance requirements automatically.",
  },
];

const complianceStats = [
  { value: "100%", label: "Audit Success Rate" },
  { value: "<24h", label: "eDiscovery Response" },
  { value: "50+", label: "Countries Supported" },
  { value: "99.9%", label: "Data Accuracy" },
];

const regulations = [
  "GDPR (EU)",
  "PDPA (Singapore)",
  "HIPAA (Healthcare)",
  "SOC 2 Type II",
  "ISO 27001",
  "PCI DSS",
];

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4">
                <Shield className="h-4 w-4" />
                Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Compliance &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent/70">
                Governance
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-brand-text mb-8 max-w-3xl mx-auto"
            >
              Navigate the complex landscape of data regulations with confidence.
              From GDPR to PDPA, our intelligent compliance platform ensures your
              organization meets every requirement while simplifying governance
              across your entire data estate.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/quiz">
                <Button size="lg" className="w-full sm:w-auto group">
                  Assess Your Compliance
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

      {/* Stats Section */}
      <section className="py-16 border-y border-brand-slate/20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {complianceStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-brand-text text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            label="Capabilities"
            title="Enterprise-Grade Compliance Tools"
            description="Everything you need to maintain compliance, respond to legal requests, and protect sensitive data across your organization."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8" glow>
                  <div className="inline-flex items-center justify-center p-3 bg-brand-accent/10 rounded-lg mb-6">
                    <feature.icon className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-text">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Regulations Section */}
      <section className="py-20 lg:py-28 bg-brand-navy/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                Global Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Compliant Across{" "}
                <span className="text-brand-accent">Every Regulation</span>
              </h2>
              <p className="text-brand-text text-lg mb-8">
                Our platform is built to handle the most demanding compliance
                requirements. Whether you are operating in the EU, Asia-Pacific,
                or globally, we have got you covered with pre-built templates and
                automated workflows for all major regulations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {regulations.map((reg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0" />
                    <span className="text-white font-medium">{reg}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-brand-accent/5 rounded-2xl blur-3xl" />
              <Card className="relative p-8 lg:p-10" hover={false}>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Compliance Matters
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-accent text-sm font-bold">1</span>
                    </div>
                    <div>
                      <span className="text-white font-medium">Avoid Heavy Fines</span>
                      <p className="text-brand-text text-sm mt-1">
                        GDPR fines can reach up to 4% of global annual revenue
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-accent text-sm font-bold">2</span>
                    </div>
                    <div>
                      <span className="text-white font-medium">Build Customer Trust</span>
                      <p className="text-brand-text text-sm mt-1">
                        Demonstrate your commitment to data protection
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-brand-accent text-sm font-bold">3</span>
                    </div>
                    <div>
                      <span className="text-white font-medium">Streamline Operations</span>
                      <p className="text-brand-text text-sm mt-1">
                        Automate manual compliance tasks and reduce overhead
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-dark to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Simplify{" "}
              <span className="text-brand-accent">Compliance</span>?
            </h2>
            <p className="text-brand-text text-lg mb-8">
              Take our quick assessment to understand your current compliance posture,
              or speak directly with our experts to build a tailored governance strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
                <Button size="lg" className="w-full sm:w-auto group">
                  Start Compliance Assessment
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
