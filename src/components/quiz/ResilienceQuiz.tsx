'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Mail, Building2, ArrowRight } from 'lucide-react';
import ProgressBar from './ProgressBar';
import QuizQuestion, { Question } from './QuizQuestion';
import QuizResults from './QuizResults';

// Quiz questions data - hardcoded for now, will connect to Sanity later
const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Are your backups 'Air-Gapped' (completely isolated from your primary network)?",
    options: [
      { label: 'Yes', points: 20 },
      { label: 'No', points: 0 },
      { label: 'Unsure', points: 0 },
    ],
  },
  {
    id: 2,
    text: 'In a total site failure, how long would it take to restore your critical systems?',
    options: [
      { label: 'Less than 4 Hours', points: 20 },
      { label: '24 Hours', points: 10 },
      { label: '1+ Weeks', points: 0 },
    ],
  },
  {
    id: 3,
    text: 'Do you test your data recovery process at least once a quarter?',
    options: [
      { label: 'Yes', points: 20 },
      { label: 'No', points: 0 },
    ],
  },
  {
    id: 4,
    text: 'Are your SaaS apps (M365/Salesforce) backed up by a third-party cloud provider?',
    options: [
      { label: 'Yes', points: 20 },
      { label: 'No', points: 0 },
      { label: 'Unsure', points: 0 },
    ],
  },
  {
    id: 5,
    text: 'Do you have a documented Ransomware Playbook that has been tested by your team?',
    options: [
      { label: 'Yes', points: 20 },
      { label: 'In Progress', points: 10 },
      { label: 'No', points: 0 },
    ],
  },
];

type QuizStage = 'intro' | 'questions' | 'leadCapture' | 'results';

interface LeadData {
  email: string;
  companyName: string;
}

export default function ResilienceQuiz() {
  const [stage, setStage] = useState<QuizStage>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [leadData, setLeadData] = useState<LeadData>({ email: '', companyName: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalQuestions = quizQuestions.length;
  const maxScore = quizQuestions.reduce(
    (sum, q) => sum + Math.max(...q.options.map((o) => o.points)),
    0
  );

  const calculateScore = (): number => {
    return answers.reduce<number>((total, answerIndex, questionIndex) => {
      if (answerIndex === null) return total;
      return total + quizQuestions[questionIndex].options[answerIndex].points;
    }, 0);
  };

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStage('leadCapture');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual Sanity/API integration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, save lead data to Sanity or CRM
    console.log('Lead captured:', leadData, 'Score:', calculateScore());

    setIsSubmitting(false);
    setStage('results');
  };

  const handleReset = () => {
    setStage('intro');
    setCurrentQuestionIndex(0);
    setAnswers(new Array(quizQuestions.length).fill(null));
    setLeadData({ email: '', companyName: '' });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-brand-dark/80 backdrop-blur-sm border border-brand-slate rounded-2xl p-6 md:p-10">
        <AnimatePresence mode="wait">
          {/* Intro Stage */}
          {stage === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-accent/10 text-brand-accent mb-6"
              >
                <ShieldCheck className="w-10 h-10" />
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-text-light mb-4">
                Ransomware Resilience Assessment
              </h2>

              <p className="text-brand-text text-lg mb-8 max-w-xl mx-auto">
                Evaluate your organization&apos;s preparedness against ransomware attacks
                with our quick 5-question assessment. Get personalized recommendations
                based on your score.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center gap-2 text-brand-text">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  <span>5 Questions</span>
                </div>
                <div className="flex items-center gap-2 text-brand-text">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  <span>2 Minutes</span>
                </div>
                <div className="flex items-center gap-2 text-brand-text">
                  <span className="w-2 h-2 rounded-full bg-brand-accent" />
                  <span>Instant Results</span>
                </div>
              </div>

              <motion.button
                onClick={() => setStage('questions')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-brand-dark font-semibold rounded-lg hover:bg-brand-accent/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}

          {/* Questions Stage */}
          {stage === 'questions' && (
            <motion.div
              key="questions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProgressBar
                currentStep={currentQuestionIndex + 1}
                totalSteps={totalQuestions}
              />

              <AnimatePresence mode="wait">
                <QuizQuestion
                  key={currentQuestionIndex}
                  question={quizQuestions[currentQuestionIndex]}
                  selectedAnswer={answers[currentQuestionIndex]}
                  onSelectAnswer={handleSelectAnswer}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  isFirst={currentQuestionIndex === 0}
                  isLast={currentQuestionIndex === totalQuestions - 1}
                />
              </AnimatePresence>
            </motion.div>
          )}

          {/* Lead Capture Stage */}
          {stage === 'leadCapture' && (
            <motion.div
              key="leadCapture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6"
              >
                <Mail className="w-8 h-8" />
              </motion.div>

              <h2 className="text-2xl md:text-3xl font-bold text-brand-text-light mb-4">
                Almost There!
              </h2>

              <p className="text-brand-text text-lg mb-8 max-w-md mx-auto">
                Enter your details below to see your personalized resilience score and
                recommendations.
              </p>

              <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-text" />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    value={leadData.email}
                    onChange={(e) =>
                      setLeadData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="w-full pl-12 pr-4 py-4 bg-brand-navy border border-brand-slate rounded-lg text-brand-text-light placeholder-brand-text focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-brand-text" />
                  <input
                    type="text"
                    required
                    placeholder="Company Name"
                    value={leadData.companyName}
                    onChange={(e) =>
                      setLeadData((prev) => ({ ...prev, companyName: e.target.value }))
                    }
                    className="w-full pl-12 pr-4 py-4 bg-brand-navy border border-brand-slate rounded-lg text-brand-text-light placeholder-brand-text focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all duration-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-accent text-brand-dark font-semibold rounded-lg hover:bg-brand-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full"
                      />
                      Processing...
                    </span>
                  ) : (
                    'View My Results'
                  )}
                </motion.button>

                <p className="text-sm text-brand-text">
                  By submitting, you agree to receive communications from iNovuus.
                </p>
              </form>
            </motion.div>
          )}

          {/* Results Stage */}
          {stage === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <QuizResults
                score={calculateScore()}
                maxScore={maxScore}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
