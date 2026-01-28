import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Solutions from "@/components/sections/Solutions";
import Features from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { sanityFetch } from "@/sanity/client";
import {
  heroQuery,
  allSolutionsQuery,
  allTestimonialsQuery,
  allPartnersQuery,
  siteSettingsQuery,
} from "@/sanity/queries";

// Types
interface HeroData {
  headline?: string;
  subheadline?: string;
  badge?: string;
  backgroundImage?: string;
  videoUrl?: string;
  ctas?: { text: string; link: string; style: string }[];
}

interface Solution {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  image?: string;
}

interface Testimonial {
  _id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  authorImage?: string;
}

interface Partner {
  _id: string;
  name: string;
  logo?: string;
  website?: string;
}

interface SiteSettings {
  stats?: { value: string; label: string }[];
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  // Fetch all data in parallel
  const [heroData, solutions, testimonials, partners, settings] = await Promise.all([
    sanityFetch<HeroData>(heroQuery, {}, { next: { revalidate: 60 } }).catch(() => null),
    sanityFetch<Solution[]>(allSolutionsQuery, {}, { next: { revalidate: 60 } }).catch(() => []),
    sanityFetch<Testimonial[]>(allTestimonialsQuery, {}, { next: { revalidate: 60 } }).catch(() => []),
    sanityFetch<Partner[]>(allPartnersQuery, {}, { next: { revalidate: 60 } }).catch(() => []),
    sanityFetch<SiteSettings>(siteSettingsQuery, {}, { next: { revalidate: 60 } }).catch(() => null),
  ]);

  return (
    <>
      <Hero data={heroData} />
      <TrustBar partners={partners} />
      <Solutions solutions={solutions} />
      <Stats stats={settings?.stats} />
      <Features />
      <Testimonials testimonials={testimonials} />
      <CTA />
    </>
  );
}
