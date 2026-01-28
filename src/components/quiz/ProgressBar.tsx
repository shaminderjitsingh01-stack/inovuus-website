'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-brand-text">
          Question {currentStep} of {totalSteps}
        </span>
        <span className="text-sm text-brand-accent font-medium">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full h-2 bg-brand-navy rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-accent to-brand-blue rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
