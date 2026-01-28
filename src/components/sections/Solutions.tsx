"use client";

import { motion } from "framer-motion";
import { Shield, Cloud, FileCheck, Server, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Solution {
  _id?: string;
  title: string;
  slug?: string;
  shortDescription: string;
  icon?: string;
  image?: string;
}

interface SolutionsProps {
  solutions?: Solution[];
}

// Default solutions (fallback)
const defaultSolutions: Solution[] = [
  {
    _id: "1",
    title: "Cyber Resilience",
    slug: "cyber-resilience",
    shortDescription: "Automated ransomware detection and one-click clean recovery",
    icon: "shield",
  },
  {
    _id: "2",
    title: "Cloud Modernization",
    slug: "cloud-backup",
    shortDescription: "Retire your hardware. Move your data center and endpoint backups to the Cloud seamlessly",
    icon: "cloud",
  },
  {
    _id: "3",
    title: "Compliance & Governance",
    slug: "compliance",
    shortDescription: "Meet GDPR and local regulations with automated eDiscovery and data residency",
    icon: "file-check",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-12 h-12" />,
  cloud: <Cloud className="w-12 h-12" />,
  "file-check": <FileCheck className="w-12 h-12" />,
  server: <Server className="w-12 h-12" />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Solutions({ solutions }: SolutionsProps) {
  // Use Sanity data or fallback to defaults
  const solutionList = solutions?.length ? solutions : defaultSolutions;

  return (
    <section className="section-padding bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-brand-text text-lg max-w-2xl mx-auto">
            Comprehensive data protection solutions designed for modern
            enterprises
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionList.map((solution, index) => (
            <motion.div
              key={solution._id || solution.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Link
                href={`/solutions/${solution.slug || solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="block group h-full"
              >
                <div
                  className="relative h-full bg-brand-navy border border-brand-slate/30 rounded-xl p-8
                             transition-all duration-300 ease-out
                             hover:-translate-y-2 hover:border-brand-accent/50
                             hover:shadow-[0_0_30px_rgba(100,255,218,0.15)]"
                >
                  {/* Icon Container */}
                  <div
                    className="mb-6 text-brand-accent transition-transform duration-300
                               group-hover:scale-110"
                  >
                    {solution.icon && iconMap[solution.icon]
                      ? iconMap[solution.icon]
                      : <Shield className="w-12 h-12" />}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-text leading-relaxed mb-6">
                    {solution.shortDescription}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-brand-accent font-medium">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300
                                 group-hover:translate-x-1"
                    />
                  </div>

                  {/* Decorative Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-0
                               group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div
                      className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2
                                 border-brand-accent/30 rounded-tr-lg"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
