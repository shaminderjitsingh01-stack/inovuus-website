'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, X } from 'lucide-react';
import Link from 'next/link';

interface HeroData {
  headline?: string;
  subheadline?: string;
  badge?: string;
  backgroundImage?: string;
  videoUrl?: string;
  ctas?: { text: string; link: string; style: string }[];
}

interface HeroProps {
  data?: HeroData | null;
}

// Default content (fallback)
const defaults = {
  badge: "Cloud-Native Data Protection",
  headline: "Achieve Unstoppable Cyber Resilience",
  subheadline: "Legacy backup isn't enough for 2025. Protect your business with cloud-native data protection that guarantees 100% recovery from ransomware and site failure.",
  videoUrl: "https://fast.wistia.net/embed/iframe/lsf97gj4mk",
  ctas: [
    { text: "Watch Product Tour", link: "#video", style: "primary" },
    { text: "Get Free Assessment", link: "/quiz", style: "secondary" },
  ],
};

export default function Hero({ data }: HeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Use Sanity data or fallback to defaults - check each field individually
  const badge = (data?.badge && data.badge.trim()) || defaults.badge;
  const headline = (data?.headline && data.headline.trim()) || defaults.headline;
  const subheadline = (data?.subheadline && data.subheadline.trim()) || defaults.subheadline;
  const videoUrl = (data?.videoUrl && data.videoUrl.trim()) || defaults.videoUrl;
  const ctas = (data?.ctas && data.ctas.length > 0 && data.ctas[0]?.text) ? data.ctas : defaults.ctas;

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-brand-accent" />
                <span className="text-brand-accent text-sm font-medium">
                  {badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                {headline.includes('Unstoppable') ? (
                  <>
                    Achieve{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-blue">
                      Unstoppable
                    </span>{' '}
                    Cyber Resilience
                  </>
                ) : (
                  headline
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-brand-text-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              >
                {subheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {ctas.map((cta, index) => (
                  cta.style === 'primary' || index === 0 ? (
                    <button
                      key={cta.text}
                      onClick={() => setIsVideoOpen(true)}
                      className="group px-8 py-4 bg-brand-accent text-brand-dark font-semibold rounded-lg hover:bg-brand-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      {cta.text}
                    </button>
                  ) : (
                    <Link
                      key={cta.text}
                      href={cta.link}
                      className="px-8 py-4 border-2 border-brand-accent text-brand-accent font-semibold rounded-lg hover:bg-brand-accent/10 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
                    >
                      {cta.text}
                    </Link>
                  )
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Data Shield Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                {/* Ambient glow background */}
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-radial from-brand-accent/40 via-brand-blue/20 to-transparent blur-3xl"
                />

                {/* Outer hexagonal ring - rotating */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <linearGradient id="hexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#64FFDA" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#48C6EF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#64FFDA" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="200,20 360,110 360,290 200,380 40,290 40,110"
                      fill="none"
                      stroke="url(#hexGradient1)"
                      strokeWidth="1"
                      strokeDasharray="15 8"
                    />
                  </svg>
                </motion.div>

                {/* Middle hexagonal ring - counter rotating */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8 flex items-center justify-center"
                >
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <linearGradient id="hexGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#48C6EF" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#64FFDA" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="200,40 340,120 340,280 200,360 60,280 60,120"
                      fill="none"
                      stroke="url(#hexGradient2)"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>

                {/* Pulsing hexagonal waves */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`hex-pulse-${i}`}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.6, opacity: 0.8 }}
                    animate={{ scale: 1.3, opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: 'easeOut',
                    }}
                  >
                    <svg viewBox="0 0 400 400" className="w-3/4 h-3/4">
                      <polygon
                        points="200,50 330,125 330,275 200,350 70,275 70,125"
                        fill="none"
                        stroke="#64FFDA"
                        strokeWidth="1"
                        opacity="0.5"
                      />
                    </svg>
                  </motion.div>
                ))}

                {/* Central Shield */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative">
                    {/* Shield glow */}
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -inset-4 bg-gradient-to-b from-brand-accent/30 to-brand-blue/30 blur-2xl"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    />

                    {/* Main shield shape */}
                    <svg viewBox="0 0 120 140" className="w-28 h-32 md:w-36 md:h-40 lg:w-44 lg:h-48">
                      <defs>
                        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#112240" />
                          <stop offset="50%" stopColor="#1E3A5F" />
                          <stop offset="100%" stopColor="#112240" />
                        </linearGradient>
                        <linearGradient id="shieldStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#64FFDA" />
                          <stop offset="50%" stopColor="#48C6EF" />
                          <stop offset="100%" stopColor="#64FFDA" />
                        </linearGradient>
                        <filter id="shieldGlow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Shield body */}
                      <path
                        d="M60 5 L110 25 L110 80 Q110 120 60 135 Q10 120 10 80 L10 25 Z"
                        fill="url(#shieldGradient)"
                        stroke="url(#shieldStroke)"
                        strokeWidth="2"
                        filter="url(#shieldGlow)"
                      />

                      {/* Inner hexagon pattern */}
                      <path
                        d="M60 25 L85 40 L85 70 L60 85 L35 70 L35 40 Z"
                        fill="none"
                        stroke="#64FFDA"
                        strokeWidth="1"
                        opacity="0.6"
                      />

                      {/* Center checkmark/lock icon */}
                      <motion.path
                        d="M45 55 L55 65 L75 45"
                        fill="none"
                        stroke="#64FFDA"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      />

                      {/* Decorative lines */}
                      <line x1="60" y1="90" x2="60" y2="120" stroke="#64FFDA" strokeWidth="1" opacity="0.4" />
                      <line x1="30" y1="35" x2="20" y2="30" stroke="#48C6EF" strokeWidth="1" opacity="0.4" />
                      <line x1="90" y1="35" x2="100" y2="30" stroke="#48C6EF" strokeWidth="1" opacity="0.4" />
                    </svg>
                  </div>
                </motion.div>

                {/* Data stream particles */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: i % 2 === 0 ? '#64FFDA' : '#48C6EF',
                      boxShadow: i % 2 === 0 ? '0 0 10px #64FFDA' : '0 0 10px #48C6EF',
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: [0, Math.cos((i * 30 * Math.PI) / 180) * 180],
                      y: [0, Math.sin((i * 30 * Math.PI) / 180) * 180],
                      opacity: [1, 0],
                      scale: [1, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeOut',
                    }}
                  />
                ))}

                {/* Floating data nodes */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute"
                    style={{
                      top: `${20 + (i % 3) * 30}%`,
                      left: `${i < 3 ? 5 : 85}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-brand-accent' : 'bg-brand-blue'} shadow-lg`} />
                    {/* Connection line to center */}
                    <motion.div
                      className={`absolute top-1/2 ${i < 3 ? 'left-full' : 'right-full'} h-px w-16 ${i % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-brand-accent/50 to-transparent`}
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video bg-brand-navy rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-dark/80 text-white hover:bg-brand-dark transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={`${videoUrl}?autoplay=1`}
                title="Product Tour"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
