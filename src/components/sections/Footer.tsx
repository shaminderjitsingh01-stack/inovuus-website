"use client";

import { useState } from "react";
import Link from "next/link";

// Types for Sanity data
interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
}

interface FooterSettings {
  copyrightText?: string;
  footerLinks?: Array<{ title: string; url: string }>;
}

interface FooterProps {
  socialLinks?: SocialLinks;
  footer?: FooterSettings;
  contactEmail?: string;
  phone?: string;
}

const defaultFooterLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { name: "Cyber Resilience", href: "/solutions/cyber-resilience" },
      { name: "Cloud Backup", href: "/solutions/cloud-backup" },
      { name: "Compliance", href: "/solutions/compliance" },
      { name: "Data Center", href: "/solutions/data-center" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Platform Overview", href: "/platform" },
      { name: "Blog", href: "/resources/blog" },
      { name: "Resources Library", href: "/resources" },
      { name: "Resilience Quiz", href: "/quiz" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about/team" },
      { name: "Partners", href: "/about/partners" },
      { name: "Contact", href: "/contact" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { name: "Book a Consultation", href: "https://calendly.com/inovuus" },
      { name: "Emergency Support", href: "/contact?type=emergency" },
      { name: "Get Assessment", href: "/quiz" },
    ],
  },
};

// Social icon components
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

function buildSocialLinks(social?: SocialLinks) {
  const links: Array<{ name: string; href: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }> = [];

  if (social?.linkedin) links.push({ name: "LinkedIn", href: social.linkedin, icon: LinkedInIcon });
  if (social?.twitter) links.push({ name: "X", href: social.twitter, icon: XIcon });
  if (social?.youtube) links.push({ name: "YouTube", href: social.youtube, icon: YouTubeIcon });
  if (social?.facebook) links.push({ name: "Facebook", href: social.facebook, icon: FacebookIcon });
  if (social?.instagram) links.push({ name: "Instagram", href: social.instagram, icon: InstagramIcon });
  if (social?.github) links.push({ name: "GitHub", href: social.github, icon: GitHubIcon });

  // Default links if none from Sanity
  if (links.length === 0) {
    return [
      { name: "LinkedIn", href: "https://linkedin.com/company/inovuus", icon: LinkedInIcon },
      { name: "X", href: "https://x.com/inovuus", icon: XIcon },
      { name: "YouTube", href: "https://youtube.com/@inovuus", icon: YouTubeIcon },
    ];
  }

  return links;
}

export default function Footer({ socialLinks, footer, contactEmail, phone }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinksList = buildSocialLinks(socialLinks);
  const copyrightText = footer?.copyrightText || `© ${new Date().getFullYear()} iNovuus Technologies. All rights reserved.`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter signup error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-navy">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Newsletter Section */}
        <div className="mb-12 rounded-xl bg-brand-navy/50 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between">
          <div className="mb-6 lg:mb-0 lg:max-w-md">
            <h3 className="text-lg font-semibold text-white">
              Stay updated with our newsletter
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Get the latest insights on cyber resilience and data protection.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="sm:flex sm:max-w-md lg:max-w-none">
            {subscribed ? (
              <p className="text-brand-accent font-medium">
                Thanks for subscribing!
              </p>
            ) : (
              <>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-w-0 rounded-md border border-brand-navy bg-brand-dark px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent sm:w-64"
                  placeholder="Enter your email"
                />
                <div className="mt-3 sm:ml-3 sm:mt-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-brand-accent px-4 py-2.5 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-accent/90 hover:shadow-lg hover:shadow-brand-accent/25"
                  >
                    Subscribe
                  </button>
                </div>
              </>
            )}
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.values(defaultFooterLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-brand-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-brand-navy pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
              <Link href="/" className="text-xl font-bold text-white">
                i<span className="text-brand-accent">Novuus</span>
              </Link>
              <p className="text-sm text-gray-400">
                {copyrightText}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinksList.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-brand-accent"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
