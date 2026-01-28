"use client";

import { motion } from "framer-motion";
import { Award, Handshake, Building, Cloud, Server, Shield, ArrowRight } from "lucide-react";
import { Container, SectionHeading, Card, Button } from "@/components/ui";
import Link from "next/link";

const partners = [
  {
    name: "AWS",
    icon: Cloud,
    description: "Amazon Web Services provides the scalable cloud infrastructure that powers our enterprise solutions, ensuring high availability and global reach for your data protection needs.",
    tier: "Technology Partner",
  },
  {
    name: "Microsoft",
    icon: Server,
    description: "As a Microsoft partner, we deliver seamless integration with Microsoft 365, Azure, and Dynamics 365, protecting your Microsoft ecosystem with enterprise-grade backup solutions.",
    tier: "Technology Partner",
  },
  {
    name: "VMware",
    icon: Shield,
    description: "Our VMware partnership enables comprehensive protection for virtualized environments, ensuring your VMs and virtual infrastructure are always recoverable.",
    tier: "Technology Partner",
  },
];

const partnerBenefits = [
  {
    icon: Award,
    title: "Access to Expertise",
    description: "Leverage our 25+ years of data protection experience and certified technical team.",
  },
  {
    icon: Handshake,
    title: "Co-Marketing Opportunities",
    description: "Joint marketing initiatives, case studies, and thought leadership content.",
  },
  {
    icon: Building,
    title: "Business Growth",
    description: "Expand your portfolio with industry-leading data protection solutions.",
  },
];

export default function PartnersPage() {
  return (
    <section className="py-20">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-2 block">
            Our Partners
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Strategic Technology Partnerships
          </h1>
          <p className="text-brand-text text-lg max-w-3xl mx-auto">
            We collaborate with industry-leading technology providers to deliver
            comprehensive, enterprise-grade data protection solutions. Our partnerships
            ensure you get the best-in-class tools backed by proven expertise.
          </p>
        </motion.div>

        {/* Featured Partner - Druva */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-brand-accent/15 via-brand-navy to-brand-accent/5 border-brand-accent/30" glow>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-brand-dark flex items-center justify-center border border-brand-accent/50">
                  <span className="text-4xl lg:text-5xl font-bold text-brand-accent">Druva</span>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block px-3 py-1 bg-brand-accent/20 rounded-full text-brand-accent text-sm font-semibold mb-4">
                  Premier Partner
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Druva - Our Primary Technology Partner
                </h2>
                <p className="text-brand-text-light text-lg mb-4">
                  As Druva's trusted partner in Singapore since 2015, we deliver their
                  industry-leading cloud-native data protection platform to enterprises
                  across Asia Pacific. Druva's 100% SaaS architecture eliminates the need
                  for hardware, reduces complexity, and provides guaranteed data protection.
                </p>
                <ul className="text-brand-text space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">✓</span>
                    Cloud-native backup for endpoints, SaaS apps, and data centers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">✓</span>
                    Ransomware recovery with immutable backups
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">✓</span>
                    Unified management across your entire data estate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-accent">✓</span>
                    Predictable costs with no hidden infrastructure expenses
                  </li>
                </ul>
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Learn More About Druva
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Technology Partners */}
        <SectionHeading
          label="Technology Partners"
          title="Ecosystem of Excellence"
          description="Our technology partnerships enable us to deliver comprehensive solutions across cloud, virtualization, and enterprise platforms."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="inline-flex items-center justify-center p-4 bg-brand-accent/10 rounded-xl mb-6">
                  <partner.icon className="h-10 w-10 text-brand-accent" />
                </div>
                <span className="text-brand-accent text-xs font-semibold tracking-widest uppercase block mb-2">
                  {partner.tier}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{partner.name}</h3>
                <p className="text-brand-text">{partner.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Partner With Us */}
        <div className="mb-20">
          <SectionHeading
            label="Partnership Benefits"
            title="Why Partner With iNovuus"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-brand-accent/10 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-brand-text">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Become a Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-brand-accent/10 via-brand-navy to-brand-accent/10 border-brand-accent/20">
            <Handshake className="h-16 w-16 text-brand-accent mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-brand-text-light text-lg max-w-2xl mx-auto mb-8">
              Join our partner ecosystem and unlock new opportunities. Whether you're
              a reseller, system integrator, or technology provider, we have partnership
              programs designed to help you grow your business while delivering exceptional
              value to your customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Apply to Partner Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
