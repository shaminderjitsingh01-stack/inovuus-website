"use client";

import { motion } from "framer-motion";
import { Server, Laptop, Cloud, Eye, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading, Card, Button } from "@/components/ui";

const platforms = [
  {
    icon: Eye,
    title: "Platform Overview",
    subtitle: "The Single Pane of Glass",
    description: "Manage all your data protection from one unified dashboard. See your entire environment at a glance - endpoints, data centers, and cloud workloads.",
    image: "/images/platform-overview.png",
  },
  {
    icon: Server,
    title: "Data Center Protection",
    subtitle: "Powered by Druva Phoenix",
    description: "Cloud-first backup and recovery for your data centers. Eliminate hardware dependencies and achieve instant scalability with 100% SaaS delivery.",
    features: [
      "VMware & Hyper-V support",
      "NAS/File server backup",
      "Oracle & SQL databases",
      "Kubernetes protection",
    ],
  },
  {
    icon: Laptop,
    title: "Endpoint Protection",
    subtitle: "Powered by Druva inSync",
    description: "Protect your mobile workforce with automated endpoint backup. Invisible to users, powerful for IT, and secure against any threat.",
    features: [
      "Windows & macOS",
      "Automatic backup",
      "Legal hold & eDiscovery",
      "Remote wipe capability",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Workload Protection",
    subtitle: "AWS & Azure Native",
    description: "Protect your cloud infrastructure with native integration. Automated snapshots, cross-region recovery, and cost optimization built in.",
    features: [
      "AWS EC2 & RDS",
      "Azure VMs",
      "Cross-region DR",
      "Cost optimization",
    ],
  },
];

export default function PlatformPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          label="Platform"
          title="The Druva Cloud Platform"
          description="One platform for all your data protection needs. Cloud-native, infinitely scalable, and powered by AWS."
        />

        {/* Platform Overview Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-brand-navy to-brand-dark border-brand-accent/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-brand-accent text-sm font-semibold mb-2 block">
                  THE SINGLE PANE OF GLASS
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Unified Data Protection
                </h2>
                <p className="text-brand-text text-lg mb-6">
                  Stop juggling multiple backup tools. The Druva Cloud Platform brings
                  all your data protection under one roof - endpoints, servers, SaaS apps,
                  and cloud workloads.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Centralized management", "Real-time visibility", "Automated policies", "Global deduplication"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-accent" />
                      <span className="text-brand-text-light text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button>Request a Demo</Button>
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-video bg-brand-slate/30 rounded-xl flex items-center justify-center">
                  <span className="text-brand-text">Platform Dashboard Preview</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Platform Products */}
        <div className="grid md:grid-cols-3 gap-8">
          {platforms.slice(1).map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="p-3 bg-brand-accent/10 rounded-lg w-fit mb-4">
                  <platform.icon className="h-6 w-6 text-brand-accent" />
                </div>
                <span className="text-brand-accent text-xs font-semibold uppercase tracking-wider">
                  {platform.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">
                  {platform.title}
                </h3>
                <p className="text-brand-text text-sm mb-4 flex-grow">
                  {platform.description}
                </p>
                {platform.features && (
                  <ul className="space-y-2 mb-4">
                    {platform.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-brand-text-light">
                        <div className="h-1.5 w-1.5 bg-brand-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
