import { sanityFetch } from "@/sanity/client";
import { siteSettingsQuery } from "@/sanity/queries";
import Footer from "./Footer";

interface SiteSettings {
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
  };
  footer?: {
    copyrightText?: string;
    footerLinks?: Array<{ title: string; url: string }>;
  };
  contactEmail?: string;
  phone?: string;
}

export default async function FooterServer() {
  const settings = await sanityFetch<SiteSettings | null>(
    siteSettingsQuery,
    {},
    { next: { revalidate: 60 } }
  ).catch(() => null);

  return (
    <Footer
      socialLinks={settings?.socialLinks}
      footer={settings?.footer}
      contactEmail={settings?.contactEmail}
      phone={settings?.phone}
    />
  );
}
