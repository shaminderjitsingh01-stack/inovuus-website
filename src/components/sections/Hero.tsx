'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, X } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
                  Cloud-Native Data Protection
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Achieve{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-blue">
                  Unstoppable
                </span>{' '}
                Cyber Resilience
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-brand-text-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Legacy backup isn&apos;t enough for 2025. Protect your business with
                cloud-native data protection that guarantees 100% recovery from
                ransomware and site failure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group px-8 py-4 bg-brand-accent text-brand-dark font-semibold rounded-lg hover:bg-brand-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/25 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Product Tour
                </button>
                <Link
                  href="/quiz"
                  className="px-8 py-4 border-2 border-brand-accent text-brand-accent font-semibold rounded-lg hover:bg-brand-accent/10 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
                >
                  Get Free Assessment
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Futuristic Cyber Visualization */}
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
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-radial from-brand-accent/30 via-brand-blue/20 to-transparent blur-3xl"
                />

                {/* Outer rotating ring 1 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#64FFDA" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#48C6EF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#64FFDA" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <circle cx="200" cy="200" r="190" fill="none" stroke="url(#ringGradient1)" strokeWidth="1" strokeDasharray="20 10 5 10" />
                  </svg>
                </motion.div>

                {/* Outer rotating ring 2 - counter direction */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-4"
                >
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                      <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#48C6EF" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#64FFDA" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#48C6EF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <circle cx="200" cy="200" r="180" fill="none" stroke="url(#ringGradient2)" strokeWidth="2" strokeDasharray="40 20" />
                  </svg>
                </motion.div>

                {/* Pulsing rings */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`pulse-${i}`}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.5, opacity: 0.8 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: 'easeOut',
                    }}
                  >
                    <div className="w-48 h-48 rounded-full border border-brand-accent/50" />
                  </motion.div>
                ))}

                {/* Central floating data sphere */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotateY: [0, 360],
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    rotateY: { duration: 20, repeat: Infinity, ease: 'linear' },
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ perspective: '1000px' }}
                >
                  {/* Core sphere glow */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-accent/40 to-brand-blue/40 blur-xl"
                    />
                    {/* Glass sphere effect */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-brand-navy/80 via-brand-slate/60 to-brand-navy/80 border border-brand-accent/30 backdrop-blur-sm shadow-2xl shadow-brand-accent/20">
                      {/* Inner highlight */}
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-sm" />
                      {/* Grid lines on sphere */}
                      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-30">
                        <ellipse cx="50" cy="50" rx="40" ry="40" fill="none" stroke="#64FFDA" strokeWidth="0.5" />
                        <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="#64FFDA" strokeWidth="0.5" />
                        <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke="#48C6EF" strokeWidth="0.5" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="#64FFDA" strokeWidth="0.5" />
                        <line x1="50" y1="10" x2="50" y2="90" stroke="#48C6EF" strokeWidth="0.5" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Orbiting nodes */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={`orbit-${i}`}
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.5,
                    }}
                    style={{
                      transformOrigin: 'center center',
                    }}
                  >
                    <motion.div
                      className="absolute"
                      style={{
                        top: '50%',
                        left: `${10 + i * 8}%`,
                        transform: 'translateY(-50%)',
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-brand-accent' : 'bg-brand-blue'} shadow-lg ${i % 2 === 0 ? 'shadow-brand-accent/50' : 'shadow-brand-blue/50'}`} />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Network connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#64FFDA" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#48C6EF" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Animated connection lines */}
                  <motion.line
                    x1="200" y1="200" x2="50" y2="100"
                    stroke="url(#lineGradient)" strokeWidth="1" filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.line
                    x1="200" y1="200" x2="350" y2="80"
                    stroke="url(#lineGradient)" strokeWidth="1" filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.line
                    x1="200" y1="200" x2="380" y2="250"
                    stroke="url(#lineGradient)" strokeWidth="1" filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                  <motion.line
                    x1="200" y1="200" x2="320" y2="350"
                    stroke="url(#lineGradient)" strokeWidth="1" filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  />
                  <motion.line
                    x1="200" y1="200" x2="80" y2="320"
                    stroke="url(#lineGradient)" strokeWidth="1" filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                  />
                  <motion.line
                    x1="200" y1="200" x2="30" y2="200"
                    stroke="url(#lineGradient)" strokeWidth="1" filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
                  />
                </svg>

                {/* Floating data particles */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30 - Math.random() * 20, 0],
                      x: [0, (Math.random() - 0.5) * 20, 0],
                      opacity: [0, 0.8, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-brand-accent' : i % 3 === 1 ? 'bg-brand-blue' : 'bg-white/60'}`} />
                  </motion.div>
                ))}

                {/* Holographic hexagon rings */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                  transition={{
                    rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="absolute inset-12"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
                    <polygon
                      points="100,10 178,55 178,145 100,190 22,145 22,55"
                      fill="none"
                      stroke="#64FFDA"
                      strokeWidth="1"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360, scale: [1.05, 1, 1.05] }}
                  transition={{
                    rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                  className="absolute inset-16"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
                    <polygon
                      points="100,20 168,60 168,140 100,180 32,140 32,60"
                      fill="none"
                      stroke="#48C6EF"
                      strokeWidth="1"
                      strokeDasharray="10 5"
                    />
                  </svg>
                </motion.div>

                {/* Corner accent nodes with glow */}
                {[
                  { top: '5%', left: '15%' },
                  { top: '10%', right: '10%' },
                  { bottom: '15%', right: '8%' },
                  { bottom: '8%', left: '20%' },
                ].map((pos, i) => (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute"
                    style={pos}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  >
                    <div className="relative">
                      <div className={`w-4 h-4 rounded-full ${i % 2 === 0 ? 'bg-brand-accent' : 'bg-brand-blue'} blur-sm`} />
                      <div className={`absolute inset-1 w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-brand-accent' : 'bg-brand-blue'}`} />
                    </div>
                  </motion.div>
                ))}

                {/* Data stream effect */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`stream-${i}`}
                      className="absolute h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent"
                      style={{
                        top: `${20 + i * 10}%`,
                        left: 0,
                        right: 0,
                      }}
                      animate={{
                        x: ['-100%', '100%'],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'linear',
                      }}
                    />
                  ))}
                </div>
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
              {/* Close button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-brand-dark/80 text-white hover:bg-brand-dark transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Druva Product Tour Video */}
              <iframe
                src="https://fast.wistia.net/embed/iframe/lsf97gj4mk?autoplay=1"
                title="Druva Product Tour"
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
