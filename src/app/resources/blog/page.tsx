import { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { sanityFetch } from "@/sanity/client";
import { allBlogPostsQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Blog | iNovuus Technologies",
  description: "Stay ahead with the latest insights on data protection, cyber security, and cloud backup solutions.",
};

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

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await sanityFetch<BlogPost[]>(allBlogPostsQuery, {}, { next: { revalidate: 60 } }).catch(() => []);

  return <BlogPageClient posts={posts} />;
}
