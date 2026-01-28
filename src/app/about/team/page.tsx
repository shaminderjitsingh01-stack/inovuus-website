import { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";
import { sanityFetch } from "@/sanity/client";
import { allTeamMembersQuery } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Our Team | iNovuus Technologies",
  description: "Meet the experts behind iNovuus Technologies - Singapore's trusted partner in cyber resilience and data protection.",
};

interface TeamMember {
  _id: string;
  name: string;
  slug?: string;
  role: string;
  bio: string;
  image?: { url: string; alt?: string };
  linkedin?: string;
  email?: string;
  department?: string;
  featured?: boolean;
}

export const revalidate = 60;

export default async function TeamPage() {
  const members = await sanityFetch<TeamMember[]>(allTeamMembersQuery, {}, { next: { revalidate: 60 } }).catch(() => []);

  return <TeamPageClient members={members} />;
}
