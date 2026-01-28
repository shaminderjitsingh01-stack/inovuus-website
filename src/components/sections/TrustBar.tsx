'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface Partner {
  _id?: string;
  name: string;
  logo?: string;
  website?: string;
}

interface TrustBarProps {
  partners?: Partner[];
}

// SVG Logo Components (fallback)
const DruvaLogo = () => (
  <svg viewBox="0 0 120 30" className="h-8 w-auto" fill="currentColor">
    <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#64FFDA">
      druva
    </text>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 100 60" className="h-10 w-auto">
    <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#FF9900">
      AWS
    </text>
    <text x="0" y="50" fontFamily="Arial, sans-serif" fontSize="10" fill="#fff">
      Amazon Web Services
    </text>
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 140 30" className="h-7 w-auto">
    <rect x="0" y="0" width="13" height="13" fill="#F25022"/>
    <rect x="15" y="0" width="13" height="13" fill="#7FBA00"/>
    <rect x="0" y="15" width="13" height="13" fill="#00A4EF"/>
    <rect x="15" y="15" width="13" height="13" fill="#FFB900"/>
    <text x="35" y="21" fontFamily="Segoe UI, Arial, sans-serif" fontSize="18" fontWeight="400" fill="#fff">
      Microsoft
    </text>
  </svg>
);

const VMwareLogo = () => (
  <svg viewBox="0 0 130 25" className="h-6 w-auto">
    <text x="0" y="20" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#fff">
      vm
    </text>
    <text x="30" y="20" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="normal" fill="#fff">
      ware
    </text>
  </svg>
);

const defaultPartners = [
  { name: 'Druva', Logo: DruvaLogo },
  { name: 'AWS', Logo: AWSLogo },
  { name: 'Microsoft', Logo: MicrosoftLogo },
  { name: 'VMware', Logo: VMwareLogo },
];

export default function TrustBar({ partners }: TrustBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // Use Sanity data if available, otherwise use default SVG logos
  const hasPartnerLogos = partners && partners.length > 0 && partners.some(p => p.logo);

  return (
    <section ref={ref} className="relative py-16 bg-brand-dark border-y border-brand-navy/50">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-navy/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-brand-text text-sm md:text-base uppercase tracking-widest mb-10"
          >
            Trusted by Singapore&apos;s leading enterprises
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
          >
            {hasPartnerLogos ? (
              // Render Sanity partner logos
              partners!.map((partner) => (
                <motion.div
                  key={partner._id || partner.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group relative"
                >
                  <a
                    href={partner.website || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-6 py-4 rounded-xl bg-brand-navy/30 border border-brand-slate/20 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/10 block"
                  >
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={40}
                        className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 object-contain"
                      />
                    ) : (
                      <span className="text-white font-semibold">{partner.name}</span>
                    )}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </a>
                </motion.div>
              ))
            ) : (
              // Render default SVG logos
              defaultPartners.map((partner) => (
                <motion.div
                  key={partner.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group relative"
                >
                  <div className="relative px-6 py-4 rounded-xl bg-brand-navy/30 border border-brand-slate/20 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/10">
                    <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      <partner.Logo />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
