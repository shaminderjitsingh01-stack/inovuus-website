"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container, SectionHeading, Card } from "@/components/ui";
import Image from "next/image";

interface Testimonial {
  _id?: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  authorImage?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

// Default testimonials (fallback)
const defaultTestimonials: Testimonial[] = [
  {
    _id: "1",
    quote: "iNovuus helped us recover 50TB of data in under 2 hours after a breach. Their cloud-native approach saved our business.",
    authorName: "Michael Chen",
    authorRole: "CTO",
    company: "TechVentures Singapore",
  },
  {
    _id: "2",
    quote: "Moving from legacy backup to Druva through iNovuus cut our TCO by 60% while dramatically improving our recovery times.",
    authorName: "Sarah Lim",
    authorRole: "IT Director",
    company: "Pacific Holdings",
  },
  {
    _id: "3",
    quote: "The ransomware resilience assessment opened our eyes to critical gaps. iNovuus's team guided us through every step of modernization.",
    authorName: "David Tan",
    authorRole: "CISO",
    company: "FinServe Asia",
  },
];

export default function Testimonials({ testimonials }: TestimonialsProps) {
  // Use Sanity data or fallback to defaults - check for valid data with quotes
  const testimonialList = (testimonials?.length && testimonials[0]?.quote) ? testimonials : defaultTestimonials;

  return (
    <section className="py-20 bg-brand-dark">
      <Container>
        <SectionHeading
          label="Success Stories"
          title="Trusted by Industry Leaders"
          description="See how organizations across Singapore have transformed their data protection with iNovuus."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialList.map((testimonial, index) => (
            <motion.div
              key={testimonial._id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <Quote className="h-8 w-8 text-brand-accent mb-4" />
                <p className="text-brand-text-light flex-grow mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-brand-slate/30 pt-4 flex items-center gap-3">
                  {testimonial.authorImage && (
                    <Image
                      src={testimonial.authorImage}
                      alt={testimonial.authorName}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-white">{testimonial.authorName}</p>
                    <p className="text-brand-text text-sm">
                      {testimonial.authorRole}, {testimonial.company}
                    </p>
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
