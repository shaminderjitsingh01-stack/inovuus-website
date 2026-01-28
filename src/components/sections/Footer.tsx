"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = {
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

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/inovuus",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/inovuus",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@inovuus",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setSubscribed(true);
    setEmail("");
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
          {Object.values(footerLinks).map((section) => (
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
                &copy; 2026 iNovuus Technologies. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
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
