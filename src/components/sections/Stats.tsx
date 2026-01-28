"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui";

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats?: Stat[];
}

// Default stats (fallback)
const defaultStats: Stat[] = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Clients Protected" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "<4hrs", label: "Recovery Time" },
];

export default function Stats({ stats }: StatsProps) {
  // Use Sanity data or fallback to defaults
  const statList = stats?.length ? stats : defaultStats;

  return (
    <section className="py-16 bg-brand-navy border-y border-brand-slate/30">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statList.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-accent mb-2">
                {stat.value}
              </div>
              <div className="text-brand-text text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
