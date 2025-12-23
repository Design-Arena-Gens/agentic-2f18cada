"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FileSearch, Brain, TrendingUp, CheckCircle2 } from "lucide-react";

interface AnalysisLoadingProps {
  role: string;
}

const steps = [
  {
    icon: FileSearch,
    message: "Parsing your CV...",
    subtext: "Extracting skills, experience, and projects",
    duration: 1500
  },
  {
    icon: Brain,
    message: "Comparing with industry standards...",
    subtext: "Analyzing against 10,000+ job postings",
    duration: 1500
  },
  {
    icon: TrendingUp,
    message: "Generating your personalized roadmap...",
    subtext: "Creating learning path and project ideas",
    duration: 2000
  }
];

export default function AnalysisLoading({ role }: AnalysisLoadingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentStep < steps.length) {
      timeout = setTimeout(() => {
        setCompletedSteps(prev => [...prev, currentStep]);
        setCurrentStep(prev => prev + 1);
      }, steps[currentStep].duration);
    }

    return () => clearTimeout(timeout);
  }, [currentStep]);

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Analyzing Your Profile for <span className="gradient-text">{role}</span>
        </h1>
        <p className="text-xl text-slate-400">
          AI is working its magic... This will take about 60 seconds
        </p>
      </motion.div>

      {/* Terminal-style loading */}
      <div className="p-8 bg-slate-900 rounded-2xl border border-slate-700 font-mono">
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.includes(index);
            const isCurrent = currentStep === index;
            const isPending = index > currentStep;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-start gap-4 transition-all ${
                  isPending ? "opacity-40" : "opacity-100"
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </motion.div>
                  ) : (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isCurrent
                        ? "bg-gradient-to-br from-primary-500 to-accent-600"
                        : "bg-slate-700"
                    }`}>
                      <Icon className={`w-5 h-5 ${isCurrent ? "text-white" : "text-slate-400"}`} />
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-lg font-semibold ${
                      isCompleted
                        ? "text-green-400"
                        : isCurrent
                        ? "text-white"
                        : "text-slate-500"
                    }`}>
                      {step.message}
                    </span>
                    {isCurrent && (
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex gap-1"
                      >
                        <span className="w-2 h-2 bg-accent-400 rounded-full" />
                        <span className="w-2 h-2 bg-accent-400 rounded-full" />
                        <span className="w-2 h-2 bg-accent-400 rounded-full" />
                      </motion.div>
                    )}
                  </div>
                  <span className="text-sm text-slate-400">{step.subtext}</span>

                  {/* Progress bar */}
                  {isCurrent && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: step.duration / 1000, ease: "linear" }}
                      className="mt-3 h-1 bg-gradient-to-r from-primary-500 to-accent-600 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Code-style output */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 pt-8 border-t border-slate-700"
        >
          <div className="space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Skills extracted: 12 technical skills identified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Projects analyzed: 4 portfolio projects found</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Experience level: Intermediate</span>
            </div>
            {currentStep >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                <span className="text-accent-400">→</span>
                <span className="text-accent-400">Preparing your personalized report...</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Fun fact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="mt-8 text-center"
      >
        <div className="inline-block p-6 bg-accent-900/20 rounded-xl border border-accent-700/30">
          <p className="text-sm text-slate-400">
            <span className="text-accent-400 font-semibold">Did you know?</span> 73% of hiring managers say they prioritize specific skill sets over degrees when reviewing candidates.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
