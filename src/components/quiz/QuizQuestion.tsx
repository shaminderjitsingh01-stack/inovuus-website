'use client';

import { motion } from 'framer-motion';

export interface QuizOption {
  label: string;
  points: number;
}

export interface Question {
  id: number;
  text: string;
  options: QuizOption[];
}

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  onSelectAnswer,
  onNext,
  onPrevious,
  isFirst,
  isLast,
}: QuizQuestionProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="w-full"
    >
      <h3 className="text-xl md:text-2xl font-semibold text-brand-text-light mb-8 leading-relaxed">
        {question.text}
      </h3>

      <div className="space-y-4 mb-10">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 flex items-center gap-4 ${
              selectedAnswer === index
                ? 'border-brand-accent bg-brand-accent/10 text-brand-accent'
                : 'border-brand-slate bg-brand-navy/50 text-brand-text-light hover:border-brand-accent/50 hover:bg-brand-navy'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                selectedAnswer === index
                  ? 'border-brand-accent bg-brand-accent'
                  : 'border-brand-slate'
              }`}
            >
              {selectedAnswer === index && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 rounded-full bg-brand-dark"
                />
              )}
            </span>
            <span className="text-base md:text-lg">{option.label}</span>
          </motion.button>
        ))}
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            isFirst
              ? 'opacity-0 cursor-default'
              : 'border border-brand-accent text-brand-accent hover:bg-brand-accent/10'
          }`}
        >
          Previous
        </button>
        <motion.button
          onClick={onNext}
          disabled={selectedAnswer === null}
          className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
            selectedAnswer === null
              ? 'bg-brand-slate text-brand-text cursor-not-allowed'
              : 'bg-brand-accent text-brand-dark hover:bg-brand-accent/90'
          }`}
          whileHover={selectedAnswer !== null ? { scale: 1.05 } : {}}
          whileTap={selectedAnswer !== null ? { scale: 0.95 } : {}}
        >
          {isLast ? 'See Results' : 'Next'}
        </motion.button>
      </div>
    </motion.div>
  );
}
