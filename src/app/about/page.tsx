"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Globe } from "lucide-react";
import { Container, SectionHeading, Card } from "@/components/ui";

// SVG Logo Components
const DruvaLogo = () => (
  <svg viewBox="0 0 120 30" className="h-8 w-auto" fill="currentColor">
    <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#64FFDA">
      druva
    </text>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 100 60" className="h-10 w-auto">
    <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#FF9900">
      AWS
    </text>
    <text x="0" y="50" fontFamily="Arial, sans-serif" fontSize="10" fill="#fff">
      Amazon Web Services
    </text>
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 140 30" className="h-7 w-auto">
    <rect x="0" y="0" width="13" height="13" fill="#F25022"/>
    <rect x="15" y="0" width="13" height="13" fill="#7FBA00"/>
    <rect x="0" y="15" width="13" height="13" fill="#00A4EF"/>
    <rect x="15" y="15" width="13" height="13" fill="#FFB900"/>
    <text x="35" y="21" fontFamily="Segoe UI, Arial, sans-serif" fontSize="18" fontWeight="400" fill="#fff">
      Microsoft
    </text>
  </svg>
);

const VMwareLogo = () => (
  <svg viewBox="0 0 130 25" className="h-6 w-auto">
    <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#fff">
      vm
    </text>
    <text x="30" y="20" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="normal" fill="#fff">
      ware
    </text>
  </svg>
);

const partners = [
  { name: 'Druva', Logo: DruvaLogo },
  { name: 'AWS', Logo: AWSLogo },
  { name: 'Microsoft', Logo: MicrosoftLogo },
  { name: 'VMware', Logo: VMwareLogo },
];

const milestones = [
  { year: "2000", event: "iNovuus Technologies founded in Singapore" },
  { year: "2010", event: "Expanded to cloud-based solutions" },
  { year: "2015", event: "Strategic partnership with Druva established" },
  { year: "2020", event: "Celebrated 20 years of data protection excellence" },
  { year: "2024", event: "Launched Cyber Resilience initiative" },
  { year: "2025", event: "Serving 500+ clients across Asia Pacific" },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We treat your data as if it were our own. Every solution we implement follows the highest security standards.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "25+ years of experience has taught us that excellence is not a destination, but a continuous journey.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We don't just provide solutions; we become your trusted partner in data protection and cyber resilience.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "The threat landscape evolves daily. We stay ahead with cutting-edge cloud-native technologies.",
  },
];

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-2 block">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Singapore's Trusted Data Protection<br />Partner Since 2000
          </h1>
          <p className="text-brand-text text-lg max-w-3xl mx-auto">
            For over 25 years, iNovuus Technologies has been at the forefront of data
            protection in Singapore. From government agencies to SMEs, we've helped
            hundreds of organizations secure their most valuable asset: their data.
          </p>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-brand-accent/10 via-brand-navy to-brand-accent/10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-brand-text-light text-lg max-w-3xl mx-auto">
              To empower organizations with unstoppable cyber resilience through
              cloud-native data protection solutions that are simple to deploy,
              easy to manage, and guaranteed to recover.
            </p>
          </Card>
        </motion.div>

        {/* Values */}
        <SectionHeading
          label="Our Values"
          title="What Drives Us"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="inline-flex items-center justify-center p-3 bg-brand-accent/10 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-brand-text text-sm">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <SectionHeading
          label="Our Journey"
          title="25 Years of Excellence"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-brand-slate/50 hidden md:block" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <Card className="inline-block">
                    <span className="text-brand-accent font-bold text-xl">{milestone.year}</span>
                    <p className="text-brand-text-light mt-1">{milestone.event}</p>
                  </Card>
                </div>
                <div className="hidden md:flex items-center justify-center w-4 h-4 bg-brand-accent rounded-full z-10" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mt-20">
          <SectionHeading
            label="Strategic Partners"
            title="Powered by Industry Leaders"
          />

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative"
              >
                <div className="relative px-6 py-4 rounded-xl bg-brand-navy/30 border border-brand-slate/20 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/10">
                  <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <partner.Logo />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
