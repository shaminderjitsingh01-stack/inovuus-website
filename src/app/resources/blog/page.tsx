"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Shield,
  Cloud,
  FileCheck,
  Mail,
  Database,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container, SectionHeading, Card } from "@/components/ui";

const blogPosts = [
  {
    id: 1,
    slug: "ransomware-protection-strategies-2025",
    title: "7 Ransomware Protection Strategies Every Business Needs in 2025",
    excerpt:
      "Ransomware attacks are becoming more sophisticated. Learn the essential strategies to protect your organization from the latest threats and ensure rapid recovery.",
    category: "Cyber Security",
    categoryIcon: Shield,
    date: "January 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop",
    featured: true,
  },
  {
    id: 2,
    slug: "cloud-backup-best-practices",
    title: "Cloud Backup Best Practices: A Complete Guide for IT Teams",
    excerpt:
      "Discover the proven cloud backup strategies that leading organizations use to protect their data. From 3-2-1 rules to immutable storage.",
    category: "Cloud Backup",
    categoryIcon: Cloud,
    date: "January 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 3,
    slug: "gdpr-compliance-data-backup",
    title: "GDPR Compliance: How Your Backup Strategy Affects Regulatory Compliance",
    excerpt:
      "Understanding the intersection of data protection regulations and backup solutions. Ensure your organization meets compliance requirements.",
    category: "Compliance",
    categoryIcon: FileCheck,
    date: "January 5, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 4,
    slug: "microsoft-365-backup-protection",
    title: "Why Native Microsoft 365 Backup Isn't Enough: Complete Protection Guide",
    excerpt:
      "Microsoft's shared responsibility model leaves gaps in your data protection. Learn why you need third-party M365 backup solutions.",
    category: "M365 Protection",
    categoryIcon: Mail,
    date: "December 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 5,
    slug: "building-data-resilience",
    title: "Building Data Resilience: Beyond Traditional Backup Approaches",
    excerpt:
      "Data resilience goes beyond simple backup. Explore modern approaches to ensuring your organization can recover from any data loss scenario.",
    category: "Data Resilience",
    categoryIcon: Database,
    date: "December 20, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    featured: false,
  },
  {
    id: 6,
    slug: "cyber-security-trends-2025",
    title: "Top 10 Cyber Security Trends Shaping Data Protection in 2025",
    excerpt:
      "From AI-powered threat detection to zero-trust architecture, explore the trends that will define cyber security and data protection this year.",
    category: "Cyber Security",
    categoryIcon: TrendingUp,
    date: "December 15, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop",
    featured: false,
  },
];

const categories = [
  { name: "All Posts", count: 24 },
  { name: "Cyber Security", count: 8 },
  { name: "Cloud Backup", count: 6 },
  { name: "Compliance", count: 4 },
  { name: "M365 Protection", count: 3 },
  { name: "Data Resilience", count: 3 },
];

const featuredPosts = blogPosts.slice(0, 3);

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 to-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block text-brand-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-brand-text text-lg md:text-xl max-w-2xl mx-auto">
              Stay ahead with the latest insights, best practices, and expert advice
              on data protection, cyber security, and cloud backup solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <Container size="xl">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
                <div className="h-1 w-16 bg-brand-accent mt-2" />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden p-0">
                      {/* Featured Image */}
                      <div className="relative h-48 bg-gradient-to-br from-brand-slate/40 to-brand-navy overflow-hidden group">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />

                        {/* Category Tag */}
                        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-brand-accent/90 text-brand-dark text-xs font-semibold px-3 py-1 rounded-full z-10">
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-brand-text text-sm mb-3">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 hover:text-brand-accent transition-colors">
                          <Link href={`/resources/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        {/* Excerpt */}
                        <p className="text-brand-text text-sm mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Read More Link */}
                        <Link
                          href={`/resources/blog/${post.slug}`}
                          className="inline-flex items-center text-brand-accent hover:text-brand-accent/80 text-sm font-medium group"
                        >
                          Read More
                          <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-10 text-center"
              >
                <button className="inline-flex items-center justify-center px-8 py-3 bg-brand-navy border border-brand-accent/50 text-brand-accent font-medium rounded-lg hover:bg-brand-accent hover:text-brand-dark transition-all duration-300">
                  Load More Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Tag className="h-5 w-5 text-brand-accent" />
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <Link
                            href={`/resources/blog?category=${category.name.toLowerCase().replace(" ", "-")}`}
                            className="flex items-center justify-between py-2 px-3 rounded-lg text-brand-text hover:text-white hover:bg-brand-slate/30 transition-colors group"
                          >
                            <span>{category.name}</span>
                            <span className="bg-brand-slate/50 text-brand-accent text-xs font-medium px-2 py-0.5 rounded-full group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
                              {category.count}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>

                {/* Featured Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-brand-accent" />
                      Featured Posts
                    </h3>
                    <div className="space-y-4">
                      {featuredPosts.map((post, index) => (
                        <Link
                          key={post.id}
                          href={`/resources/blog/${post.slug}`}
                          className="group block"
                        >
                          <div className="flex gap-3">
                            <div className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                            </div>
                            <div className="flex-grow min-w-0">
                              <h4 className="text-sm font-medium text-white group-hover:text-brand-accent transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-brand-text mt-1">
                                {post.date}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Newsletter CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-brand-accent/10 to-brand-navy border-brand-accent/30">
                    <h3 className="text-lg font-bold text-white mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-brand-text text-sm mb-4">
                      Get the latest insights delivered to your inbox weekly.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2.5 bg-brand-dark/50 border border-brand-slate/30 rounded-lg text-white placeholder:text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
                      />
                      <button className="w-full px-4 py-2.5 bg-brand-accent text-brand-dark font-medium rounded-lg hover:bg-brand-accent/90 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
