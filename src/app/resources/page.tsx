import { Metadata } from "next";
import ResourcesPageClient from "./ResourcesPageClient";
import { sanityFetch } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Resources | iNovuus Technologies",
  description: "Explore our library of guides, whitepapers, and webinars to strengthen your data protection strategy.",
};

const resourcesQuery = `*[_type == "resource"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  type,
  "thumbnail": thumbnail.asset->url,
  "file": file.asset->url,
  externalUrl,
  featured,
  publishedAt
}`;

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

export const revalidate = 60;

export default async function ResourcesPage() {
  const resources = await sanityFetch<Resource[]>(resourcesQuery, {}, { next: { revalidate: 60 } }).catch(() => []);

  return <ResourcesPageClient resources={resources} />;
}
