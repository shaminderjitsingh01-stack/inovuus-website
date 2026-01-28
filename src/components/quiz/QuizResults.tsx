'use client';

import { motion } from 'framer-motion';
import { Shield, AlertTriangle, AlertOctagon, RotateCcw } from 'lucide-react';
import Link from 'next/link';

interface SanityQuizResult {
  _id: string;
  tier: string;
  title: string;
  description: string;
  minScore: number;
  maxScore: number;
  recommendations?: string[];
  ctas?: { text: string; link: string; style: string }[];
}

interface QuizResultsProps {
  score: number;
  maxScore: number;
  onReset: () => void;
  resultsData?: SanityQuizResult[];
}

type ResultTier = 'resilient' | 'at-risk' | 'critical';

interface TierConfig {
  tier: ResultTier;
  title: string;
  message: string;
  ctaText: string;
  ctaLink: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  gaugeColor: string;
  recommendations?: string[];
}

function getResultTier(score: number, maxScore: number, resultsData?: SanityQuizResult[]): TierConfig {
  const percentage = (score / maxScore) * 100;

  // Try to find matching result from Sanity data
  if (resultsData?.length && resultsData[0]?.tier) {
    const matchingResult = resultsData.find(
      r => percentage >= r.minScore && percentage <= r.maxScore
    );

    if (matchingResult) {
      const tierColors: Record<string, { color: string; bgColor: string; gaugeColor: string; icon: React.ReactNode }> = {
        resilient: {
          color: 'text-green-400',
          bgColor: 'bg-green-400/10',
          gaugeColor: '#4ade80',
          icon: <Shield className="w-8 h-8" />,
        },
        'at-risk': {
          color: 'text-yellow-400',
          bgColor: 'bg-yellow-400/10',
          gaugeColor: '#facc15',
          icon: <AlertTriangle className="w-8 h-8" />,
        },
        critical: {
          color: 'text-red-400',
          bgColor: 'bg-red-400/10',
          gaugeColor: '#f87171',
          icon: <AlertOctagon className="w-8 h-8" />,
        },
      };

      const colors = tierColors[matchingResult.tier] || tierColors.critical;

      return {
        tier: matchingResult.tier as ResultTier,
        title: matchingResult.title,
        message: matchingResult.description,
        ctaText: matchingResult.ctas?.[0]?.text || 'Book a Consultation',
        ctaLink: matchingResult.ctas?.[0]?.link || 'https://calendly.com/inovuus',
        recommendations: matchingResult.recommendations,
        ...colors,
      };
    }
  }

  // Fallback to default tiers
  if (percentage >= 80) {
    return {
      tier: 'resilient',
      title: 'Resilient',
      message:
        'Congratulations! Your organization demonstrates strong ransomware resilience practices. Your backup strategy, recovery processes, and documentation are well-established.',
      ctaText: 'Schedule Optimization Audit',
      ctaLink: '/contact?type=audit',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      icon: <Shield className="w-8 h-8" />,
      gaugeColor: '#4ade80',
    };
  } else if (percentage >= 40) {
    return {
      tier: 'at-risk',
      title: 'At Risk',
      message:
        'Your organization has some resilience measures in place, but there are significant gaps that could leave you vulnerable to ransomware attacks.',
      ctaText: 'Download Recovery Playbook',
      ctaLink: '/resources/recovery-playbook',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      icon: <AlertTriangle className="w-8 h-8" />,
      gaugeColor: '#facc15',
    };
  } else {
    return {
      tier: 'critical',
      title: 'Critical',
      message:
        'Your organization is at critical risk of significant damage from a ransomware attack. Immediate action is needed.',
      ctaText: 'Request Emergency Consultation',
      ctaLink: '/contact?type=emergency',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      icon: <AlertOctagon className="w-8 h-8" />,
      gaugeColor: '#f87171',
    };
  }
}

function CircularGauge({
  score,
  maxScore,
  color,
}: {
  score: number;
  maxScore: number;
  color: string;
}) {
  const percentage = (score / maxScore) * 100;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-48 h-48">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#1E3A5F"
          strokeWidth="12"
        />
        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-4xl font-bold text-brand-text-light"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {score}
        </motion.span>
        <span className="text-sm text-brand-text">out of {maxScore}</span>
      </div>
    </div>
  );
}

export default function QuizResults({ score, maxScore, onReset, resultsData }: QuizResultsProps) {
  const result = getResultTier(score, maxScore, resultsData);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${result.bgColor} ${result.color} mb-6`}
      >
        {result.icon}
        <span className="font-semibold text-lg">{result.title}</span>
      </motion.div>

      <h2 className="text-2xl md:text-3xl font-bold text-brand-text-light mb-8">
        Your Ransomware Resilience Score
      </h2>

      <div className="flex justify-center mb-8">
        <CircularGauge score={score} maxScore={maxScore} color={result.gaugeColor} />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-brand-text text-lg mb-6 leading-relaxed"
      >
        {result.message}
      </motion.p>

      {/* Recommendations from Sanity */}
      {result.recommendations && result.recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-8 text-left bg-brand-navy/50 rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-3">Recommendations:</h3>
          <ul className="space-y-2">
            {result.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2 text-brand-text">
                <span className="w-2 h-2 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                {rec}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href={result.ctaLink}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-brand-dark bg-brand-accent hover:bg-brand-accent/90 transition-all duration-300"
          >
            {result.ctaText}
          </Link>
        </motion.div>

        <motion.button
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-medium border border-brand-slate text-brand-text-light hover:border-brand-accent hover:text-brand-accent transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw className="w-5 h-5" />
          Retake Quiz
        </motion.button>
      </div>
    </motion.div>
  );
}
