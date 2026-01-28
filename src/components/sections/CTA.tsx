"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, Button } from "@/components/ui";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 via-brand-navy to-brand-accent/10" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Data's Future?
          </h2>
          <p className="text-brand-text text-lg mb-8">
            Join thousands of companies who have eliminated backup complexity and achieved
            true cyber resilience with iNovuus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button size="lg" className="group">
                Take the Resilience Quiz
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="https://calendly.com/inovuus" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                Book a Discovery Call
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
