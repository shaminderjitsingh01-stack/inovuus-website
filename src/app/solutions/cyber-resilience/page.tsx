"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  AlertTriangle,
  RefreshCw,
  Eye,
  Server,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading, Card, Button } from "@/components/ui";

const features = [
  {
    icon: Server,
    title: "Air-Gapped Backups",
    description:
      "Physically isolated backup infrastructure that remains invisible and inaccessible to ransomware attacks. Your data stays protected even when your primary systems are compromised.",
  },
  {
    icon: Lock,
    title: "Immutable Storage",
    description:
      "Write-once, read-many storage that cannot be modified, encrypted, or deleted by attackers. Your recovery points remain pristine and tamper-proof.",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    description:
      "AI-powered monitoring that identifies suspicious patterns and potential ransomware activity before it spreads. Early detection means faster response.",
  },
  {
    icon: RefreshCw,
    title: "One-Click Recovery",
    description:
      "Restore your entire infrastructure with a single click. Our automated recovery workflows get you back online in hours, not weeks.",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description:
      "Round-the-clock security operations center monitoring your backup health, detecting threats, and ensuring your recovery readiness at all times.",
  },
  {
    icon: Zap,
    title: "Instant Failover",
    description:
      "Automated disaster recovery orchestration that spins up your critical systems in the cloud within minutes of an attack detection.",
  },
];

const stats = [
  { value: "99.9%", label: "Recovery Success Rate" },
  { value: "<4hrs", label: "Average Recovery Time" },
  { value: "100%", label: "Ransomware Protection" },
  { value: "24/7", label: "Expert Support" },
];

const recoverySteps = [
  {
    step: "01",
    title: "Detect",
    description: "AI identifies anomalous behavior and potential ransomware activity in real-time.",
  },
  {
    step: "02",
    title: "Isolate",
    description: "Automatically quarantine affected systems to prevent lateral spread.",
  },
  {
    step: "03",
    title: "Validate",
    description: "Scan backup integrity and identify the last clean recovery point.",
  },
  {
    step: "04",
    title: "Recover",
    description: "One-click restoration of your entire infrastructure from immutable backups.",
  },
];

export default function CyberResiliencePage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(100, 255, 218, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(100, 255, 218, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 border border-brand-accent/30 rounded-full text-brand-accent text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Enterprise-Grade Protection
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Cyber Resilience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-text mb-8 leading-relaxed"
            >
              Ransomware protection and instant recovery for the modern enterprise.
              When attackers strike, be back online in hours, not weeks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/quiz">
                <Button size="lg" className="w-full sm:w-auto group">
                  Assess Your Resilience
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
      <section className="py-16 border-y border-brand-slate/20 bg-brand-navy/50">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                <div className="text-brand-text text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            label="Features"
            title="Complete Ransomware Protection"
            description="A multi-layered defense strategy that keeps your data safe and your business running, no matter what threats emerge."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-8" glow>
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-lg mb-6">
                    <feature.icon className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-brand-text leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recovery Process Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-dark via-brand-navy/30 to-brand-dark">
        <Container>
          <SectionHeading
            label="How It Works"
            title="Rapid Recovery Process"
            description="Our proven four-step process ensures you're back online quickly and safely after any cyber incident."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recoverySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < recoverySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-brand-accent/50 to-transparent" />
                )}

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-brand-accent/20 to-brand-navy border border-brand-accent/30 mb-6">
                    <span className="text-2xl font-bold text-brand-accent">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-brand-text">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for the Modern Threat Landscape
              </h2>
              <p className="text-brand-text text-lg mb-8">
                Traditional backup solutions weren't designed for today's sophisticated ransomware attacks.
                Our cyber resilience platform is purpose-built to ensure your business survives any threat.
              </p>

              <ul className="space-y-4">
                {[
                  "Zero-trust architecture with end-to-end encryption",
                  "Automated threat hunting before restore",
                  "Compliance-ready with SOC 2, ISO 27001, GDPR",
                  "Dedicated incident response team",
                  "Guaranteed recovery SLAs",
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-brand-accent mt-0.5 flex-shrink-0" />
                    <span className="text-brand-text-light">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Decorative card stack */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-brand-accent/5 rounded-2xl border border-brand-accent/20" />
                <div className="absolute -top-2 -left-2 w-full h-full bg-brand-accent/10 rounded-2xl border border-brand-accent/20" />
                <Card className="relative p-8 lg:p-10" hover={false}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-accent/10 rounded-lg">
                      <Clock className="h-8 w-8 text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-brand-text">Average Recovery Time</div>
                      <div className="text-3xl font-bold text-white">Under 4 Hours</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-brand-text">Detection</span>
                      <span className="text-brand-accent font-semibold">Real-time</span>
                    </div>
                    <div className="h-px bg-brand-slate/30" />
                    <div className="flex justify-between items-center">
                      <span className="text-brand-text">Isolation</span>
                      <span className="text-brand-accent font-semibold">&lt; 5 minutes</span>
                    </div>
                    <div className="h-px bg-brand-slate/30" />
                    <div className="flex justify-between items-center">
                      <span className="text-brand-text">Validation</span>
                      <span className="text-brand-accent font-semibold">&lt; 30 minutes</span>
                    </div>
                    <div className="h-px bg-brand-slate/30" />
                    <div className="flex justify-between items-center">
                      <span className="text-brand-text">Full Recovery</span>
                      <span className="text-brand-accent font-semibold">&lt; 4 hours</span>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-transparent to-transparent" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center p-4 bg-brand-accent/10 rounded-full mb-8">
              <Shield className="h-12 w-12 text-brand-accent" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Cyber Resilience?
            </h2>

            <p className="text-xl text-brand-text mb-10">
              Don't wait for an attack to test your defenses. Take our free assessment
              to understand your current resilience posture and get personalized recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quiz">
                <Button size="lg" className="w-full sm:w-auto group">
                  Take Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
