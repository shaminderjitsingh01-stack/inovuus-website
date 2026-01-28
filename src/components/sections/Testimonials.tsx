"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container, SectionHeading, Card } from "@/components/ui";

const testimonials = [
  {
    quote: "iNovuus helped us recover 50TB of data in under 2 hours after a breach. Their cloud-native approach saved our business.",
    author: "Michael Chen",
    role: "CTO",
    company: "TechVentures Singapore",
  },
  {
    quote: "Moving from legacy backup to Druva through iNovuus cut our TCO by 60% while dramatically improving our recovery times.",
    author: "Sarah Lim",
    role: "IT Director",
    company: "Pacific Holdings",
  },
  {
    quote: "The ransomware resilience assessment opened our eyes to critical gaps. iNovuus's team guided us through every step of modernization.",
    author: "David Tan",
    role: "CISO",
    company: "FinServe Asia",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-dark">
      <Container>
        <SectionHeading
          label="Success Stories"
          title="Trusted by Industry Leaders"
          description="See how organizations across Singapore have transformed their data protection with iNovuus."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <Quote className="h-8 w-8 text-brand-accent mb-4" />
                <p className="text-brand-text-light flex-grow mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-brand-slate/30 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-brand-text text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
