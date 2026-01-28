"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield, Cloud, FileCheck, Server, Database, Lock, BookOpen, FileText, Video, Users, Building, Mail, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const megaMenus = {
  Solutions: {
    title: "Solutions",
    description: "Comprehensive data protection for every need",
    href: "/solutions",
    items: [
      {
        icon: Shield,
        title: "Cyber Resilience",
        description: "Ransomware protection & instant recovery",
        href: "/solutions/cyber-resilience",
      },
      {
        icon: Cloud,
        title: "Cloud Backup",
        description: "Secure cloud-native backup solutions",
        href: "/solutions/cloud-backup",
      },
      {
        icon: FileCheck,
        title: "Compliance & Governance",
        description: "GDPR, PDPA & regulatory compliance",
        href: "/solutions/compliance",
      },
      {
        icon: Server,
        title: "Data Center Protection",
        description: "Enterprise-grade infrastructure backup",
        href: "/solutions/data-center",
      },
    ],
    featured: {
      title: "Ransomware Resilience Quiz",
      description: "Assess your organization's readiness in 2 minutes",
      href: "/quiz",
      cta: "Take the Quiz",
    },
  },
  Platform: {
    title: "Platform",
    description: "Powered by Druva - Cloud-native SaaS",
    href: "/platform",
    items: [
      {
        icon: Database,
        title: "Unified Data Protection",
        description: "Single platform for all workloads",
        href: "/platform#unified",
      },
      {
        icon: Lock,
        title: "Air-Gapped Security",
        description: "Immutable, isolated backups",
        href: "/platform#security",
      },
      {
        icon: Cloud,
        title: "Multi-Cloud Support",
        description: "AWS, Azure, Google Cloud ready",
        href: "/platform#multi-cloud",
      },
      {
        icon: Server,
        title: "Microsoft 365 Backup",
        description: "Complete M365 data protection",
        href: "/platform#m365",
      },
    ],
    featured: {
      title: "Why Druva?",
      description: "See how we compare to legacy backup solutions",
      href: "/platform#comparison",
      cta: "View Comparison",
    },
  },
  Resources: {
    title: "Resources",
    description: "Learn & stay informed",
    href: "/resources",
    items: [
      {
        icon: BookOpen,
        title: "Blog",
        description: "Latest insights & best practices",
        href: "/resources/blog",
      },
      {
        icon: FileText,
        title: "Whitepapers",
        description: "In-depth guides & research",
        href: "/resources#whitepapers",
      },
      {
        icon: Video,
        title: "Webinars",
        description: "On-demand video sessions",
        href: "/resources#webinars",
      },
      {
        icon: FileCheck,
        title: "Case Studies",
        description: "Customer success stories",
        href: "/resources#case-studies",
      },
    ],
    featured: {
      title: "2025 Ransomware Playbook",
      description: "Download our comprehensive recovery guide",
      href: "/resources#playbook",
      cta: "Download Free",
    },
  },
  Company: {
    title: "Company",
    description: "25+ years protecting Singapore's data",
    href: "/about",
    items: [
      {
        icon: Building,
        title: "About Us",
        description: "Our story & mission",
        href: "/about",
      },
      {
        icon: Users,
        title: "Our Team",
        description: "Meet the experts",
        href: "/about/team",
      },
      {
        icon: Award,
        title: "Partners",
        description: "Strategic technology partners",
        href: "/about/partners",
      },
      {
        icon: Mail,
        title: "Contact",
        description: "Get in touch with us",
        href: "/contact",
      },
    ],
    featured: {
      title: "Schedule a Consultation",
      description: "Speak with our data protection experts",
      href: "https://calendly.com/inovuus",
      cta: "Book Now",
    },
  },
};

const navigation = Object.keys(megaMenus) as (keyof typeof megaMenus)[];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-navy/10 bg-brand-dark/95 backdrop-blur supports-[backdrop-filter]:bg-brand-dark/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-white">
              i<span className="text-brand-accent">Novuus</span>
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={cn(
                  "group flex items-center gap-1 text-sm font-medium transition-colors",
                  activeMenu === item ? "text-brand-accent" : "text-gray-300 hover:text-brand-accent"
                )}
              >
                {item}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  activeMenu === item && "rotate-180"
                )} />
              </button>

              {/* Mega Menu Dropdown */}
              <div
                className={cn(
                  "absolute left-1/2 top-full pt-4 -translate-x-1/2 transition-all duration-200",
                  activeMenu === item ? "opacity-100 visible" : "opacity-0 invisible"
                )}
              >
                <div className="w-[600px] rounded-2xl border border-brand-slate/30 bg-brand-dark shadow-2xl shadow-black/40 overflow-hidden">
                  {/* Header */}
                  <Link
                    href={megaMenus[item].href || `/${item.toLowerCase()}`}
                    className="block px-6 py-4 border-b border-brand-slate/20 bg-brand-navy hover:bg-brand-navy/80 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white">{megaMenus[item].title}</h3>
                    <p className="text-sm text-brand-text">{megaMenus[item].description}</p>
                  </Link>

                  <div className="flex">
                    {/* Menu Items */}
                    <div className="flex-1 p-4 grid grid-cols-2 gap-2">
                      {megaMenus[item].items.map((menuItem) => (
                        <Link
                          key={menuItem.title}
                          href={menuItem.href}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-brand-navy/50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
                            <menuItem.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium text-white group-hover:text-brand-accent transition-colors">
                              {menuItem.title}
                            </p>
                            <p className="text-xs text-brand-text mt-0.5">
                              {menuItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Featured Section */}
                    <div className="w-48 p-4 bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 border-l border-brand-slate/10">
                      <div className="h-full flex flex-col justify-between">
                        <div>
                          <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-2">Featured</p>
                          <p className="font-medium text-white text-sm">{megaMenus[item].featured.title}</p>
                          <p className="text-xs text-brand-text mt-1">{megaMenus[item].featured.description}</p>
                        </div>
                        <Link
                          href={megaMenus[item].featured.href}
                          className="mt-4 inline-flex items-center justify-center rounded-lg bg-brand-accent px-3 py-2 text-xs font-semibold text-brand-dark hover:bg-brand-accent/90 transition-colors"
                        >
                          {megaMenus[item].featured.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/quiz"
            className="rounded-md bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-accent/90 hover:shadow-lg hover:shadow-brand-accent/25"
          >
            Get Assessment
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 border-t border-brand-navy px-4 pb-4 pt-2">
          {navigation.map((item) => (
            <div key={item}>
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-brand-navy hover:text-brand-accent"
                onClick={() => setActiveMenu(activeMenu === item ? null : item)}
              >
                {item}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  activeMenu === item && "rotate-180"
                )} />
              </button>

              {/* Mobile submenu */}
              <div className={cn(
                "overflow-hidden transition-all duration-200",
                activeMenu === item ? "max-h-96" : "max-h-0"
              )}>
                <div className="pl-4 py-2 space-y-1">
                  {megaMenus[item].items.map((menuItem) => (
                    <Link
                      key={menuItem.title}
                      href={menuItem.href}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-brand-navy hover:text-brand-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <menuItem.icon className="h-4 w-4" />
                      {menuItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div className="pt-4">
            <Link
              href="/quiz"
              className="block w-full rounded-md bg-brand-accent px-4 py-2.5 text-center text-sm font-semibold text-brand-dark transition-all hover:bg-brand-accent/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
