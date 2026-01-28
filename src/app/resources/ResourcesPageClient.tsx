"use client";

import { motion } from "framer-motion";
import { FileText, Video, BookOpen, Download, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading, Card, Button } from "@/components/ui";

interface Resource {
  _id: string;
  title: string;
  slug?: string;
  description: string;
  type: string;
  thumbnail?: string;
  file?: string;
  externalUrl?: string;
  featured?: boolean;
  publishedAt?: string;
}

interface ResourcesPageClientProps {
  resources: Resource[];
}

// Default resources fallback
const defaultResources: Resource[] = [
  {
    _id: "1",
    type: "whitepaper",
    title: "The 2025 Ransomware Resilience Playbook",
    description: "A CTO's guide to achieving immutable recovery and 100% backup success.",
    featured: true,
  },
  {
    _id: "2",
    type: "guide",
    title: "Legacy vs. Cloud-Native: A Cost Comparison",
    description: "See how much you could save by moving from traditional backup to the cloud.",
  },
  {
    _id: "3",
    type: "whitepaper",
    title: "GDPR Compliance for Singapore Businesses",
    description: "Your complete guide to data governance and regulatory compliance.",
  },
  {
    _id: "4",
    type: "webinar",
    title: "Securing Microsoft 365: Beyond Native Protection",
    description: "Learn why built-in M365 backup isn't enough and what to do about it.",
  },
];

const iconMap: Record<string, typeof FileText> = {
  whitepaper: FileText,
  guide: BookOpen,
  webinar: Video,
  casestudy: FileText,
};

const categories = ["All", "Whitepapers", "Guides", "Webinars", "Case Studies"];

export default function ResourcesPageClient({ resources }: ResourcesPageClientProps) {
  const resourceList = resources.length > 0 ? resources : defaultResources;
  const featuredResource = resourceList.find(r => r.featured) || resourceList[0];
  const otherResources = resourceList.filter(r => r._id !== featuredResource?._id);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          label="Resource Hub"
          title="Learn & Discover"
          description="Explore our library of guides, whitepapers, and webinars to strengthen your data protection strategy."
        />

        {/* Featured Resource */}
        {featuredResource && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="p-8 lg:p-12 bg-gradient-to-r from-brand-accent/10 via-brand-navy to-brand-accent/10 border-brand-accent/30">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider">
                    Featured Resource
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mt-2 mb-4">
                    {featuredResource.title}
                  </h2>
                  <p className="text-brand-text mb-6">
                    {featuredResource.description}
                  </p>
                  <Link href={featuredResource.file || featuredResource.externalUrl || "#"}>
                    <Button className="group">
                      <Download className="mr-2 h-5 w-5" />
                      Download Free Guide
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] bg-brand-slate/30 rounded-xl flex items-center justify-center">
                    <FileText className="h-20 w-20 text-brand-accent/50" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-brand-accent text-brand-dark"
                  : "bg-brand-navy text-brand-text hover:text-white border border-brand-slate/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherResources.map((resource, index) => {
            const IconComponent = iconMap[resource.type.toLowerCase()] || FileText;
            return (
              <motion.div
                key={resource._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <IconComponent className="h-5 w-5 text-brand-accent" />
                    <span className="text-brand-accent text-xs font-semibold uppercase tracking-wider">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                  <p className="text-brand-text text-sm mb-4 flex-grow">
                    {resource.description}
                  </p>
                  <Link
                    href={resource.file || resource.externalUrl || "#"}
                    className="inline-flex items-center text-brand-accent hover:text-brand-accent/80 text-sm font-medium"
                  >
                    Download
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-brand-text mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link href="/contact">
            <Button variant="secondary">Contact Our Experts</Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
