"use client";

import { motion } from "framer-motion";
import { Shield, Cloud, FileCheck, Server, Smartphone, Database, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading, Card, Button } from "@/components/ui";

const solutions = [
  {
    icon: Shield,
    title: "Cyber Resilience & Ransomware Recovery",
    description: "Don't just backup. Recover. Our air-gapped cloud architecture ensures your snapshots are immutable and invisible to attackers. When you get hit, we ensure you're back online in hours, not weeks.",
    features: [
      "Automated ransomware detection",
      "One-click clean recovery",
      "Air-gapped immutable backups",
      "Threat hunting before restore",
    ],
    href: "/solutions/ransomware-recovery",
  },
  {
    icon: Cloud,
    title: "Cloud Backup & Disaster Recovery (DRaaS)",
    description: "Retire your hardware. Revolutionize your recovery. Transition to a 100% cloud-native architecture that scales instantly, costs 60% less, and recovers in minutes.",
    features: [
      "Zero hardware maintenance",
      "Instant elastic scaling",
      "Global deduplication",
      "One-click disaster recovery",
    ],
    href: "/solutions/cloud-backup",
  },
  {
    icon: Smartphone,
    title: "SaaS Application Protection",
    description: "Your data is mobile. Your protection should be too. Secure your Microsoft 365, Salesforce, and Google Workspace data with automated, invisible backups.",
    features: [
      "Microsoft 365 protection",
      "Salesforce backup",
      "Google Workspace security",
      "Automated compliance",
    ],
    href: "/solutions/saas-protection",
  },
  {
    icon: FileCheck,
    title: "Data Governance & Compliance",
    description: "Meet GDPR and local regulations with automated eDiscovery and data residency. Simplify compliance monitoring for global enterprises.",
    features: [
      "GDPR compliance",
      "eDiscovery enablement",
      "Data residency controls",
      "Audit-ready reporting",
    ],
    href: "/solutions/compliance",
  },
];

export default function SolutionsPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          label="Solutions"
          title="Protect What Matters Most"
          description="Comprehensive data protection solutions designed for the modern threat landscape. From ransomware recovery to compliance, we've got you covered."
        />

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center p-3 bg-brand-accent/10 rounded-lg mb-6">
                      <solution.icon className="h-8 w-8 text-brand-accent" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {solution.title}
                    </h2>
                    <p className="text-brand-text mb-6">
                      {solution.description}
                    </p>
                    <Link href={solution.href}>
                      <Button className="group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {solution.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-center gap-2 text-brand-text-light"
                      >
                        <div className="h-2 w-2 bg-brand-accent rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
