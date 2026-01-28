"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container, Card } from "@/components/ui";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: { url: string; alt?: string };
  publishedAt: string;
  readingTime?: number;
  categories?: string[];
  featured?: boolean;
  author?: {
    name: string;
    image?: string;
  };
}

interface BlogPageClientProps {
  posts: BlogPost[];
}

// Default posts fallback
const defaultPosts: BlogPost[] = [
  {
    _id: "1",
    slug: "ransomware-protection-strategies-2025",
    title: "7 Ransomware Protection Strategies Every Business Needs in 2025",
    excerpt: "Ransomware attacks are becoming more sophisticated. Learn the essential strategies to protect your organization.",
    categories: ["Cyber Security"],
    publishedAt: "2025-01-15",
    readingTime: 8,
    featured: true,
  },
  {
    _id: "2",
    slug: "cloud-backup-best-practices",
    title: "Cloud Backup Best Practices: A Complete Guide for IT Teams",
    excerpt: "Discover the proven cloud backup strategies that leading organizations use to protect their data.",
    categories: ["Cloud Backup"],
    publishedAt: "2025-01-10",
    readingTime: 6,
  },
  {
    _id: "3",
    slug: "gdpr-compliance-data-backup",
    title: "GDPR Compliance: How Your Backup Strategy Affects Regulatory Compliance",
    excerpt: "Understanding the intersection of data protection regulations and backup solutions.",
    categories: ["Compliance"],
    publishedAt: "2025-01-05",
    readingTime: 10,
  },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  const blogPosts = posts.length > 0 ? posts : defaultPosts;
  const featuredPosts = blogPosts.slice(0, 3);

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
                    key={post._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden p-0">
                      {/* Featured Image */}
                      <div className="relative h-48 bg-gradient-to-br from-brand-slate/40 to-brand-navy overflow-hidden group">
                        {post.featuredImage?.url ? (
                          <Image
                            src={post.featuredImage.url}
                            alt={post.featuredImage.alt || post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Shield className="h-16 w-16 text-brand-accent/30" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />

                        {/* Category Tag */}
                        {post.categories?.[0] && (
                          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-brand-accent/90 text-brand-dark text-xs font-semibold px-3 py-1 rounded-full z-10">
                            <Tag className="h-3 w-3" />
                            {post.categories[0]}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-brand-text text-sm mb-3">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(post.publishedAt)}
                          </span>
                          {post.readingTime && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {post.readingTime} min read
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 hover:text-brand-accent transition-colors">
                          <Link href={`/resources/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        <p className="text-brand-text text-sm mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>

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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
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
                      {featuredPosts.map((post) => (
                        <Link
                          key={post._id}
                          href={`/resources/blog/${post.slug}`}
                          className="group block"
                        >
                          <div className="flex gap-3">
                            <div className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-brand-navy">
                              {post.featuredImage?.url ? (
                                <Image
                                  src={post.featuredImage.url}
                                  alt={post.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <Shield className="h-6 w-6 text-brand-accent/30" />
                                </div>
                              )}
                            </div>
                            <div className="flex-grow min-w-0">
                              <h4 className="text-sm font-medium text-white group-hover:text-brand-accent transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-brand-text mt-1">
                                {formatDate(post.publishedAt)}
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
