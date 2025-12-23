"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Brain, Globe, Zap, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: Target,
      title: "Precise Skill Gap Analysis",
      description: "AI identifies exact skills missing from your profile compared to job requirements"
    },
    {
      icon: TrendingUp,
      title: "Personalized Roadmap",
      description: "30/60/90 day learning plans tailored to your target role and current level"
    },
    {
      icon: Code2,
      title: "Real Project Ideas",
      description: "Industry-relevant projects to build portfolio pieces that actually get interviews"
    }
  ];

  const stats = [
    { value: "89%", label: "Students lack clear direction" },
    { value: "67%", label: "Apply without right skills" },
    { value: "3x", label: "More calls with strategy" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:px-12 lg:px-24">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-accent-600/20 to-primary-600/20 animate-gradient" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-full mb-8"
            >
              <Zap className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-accent-300 font-medium">AI-Powered Career Intelligence</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Not Getting <span className="gradient-text">Internship Calls?</span>
              <br />Let AI Fix Your Skill Gap.
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
              Stop sending blind applications. Know exactly what skills you need, how to learn them, and what to build.
            </p>

            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Built for passionate CSE students who work hard but don't get callbacks. Your degree isn't the problem—your skill strategy is.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/analyze">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
                >
                  Analyze My CV Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold text-lg border border-slate-700 hover:border-slate-600 transition-all"
              >
                See Example Report
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>100% Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>No Sign-up Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Results in 60 Seconds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 sm:px-12 lg:px-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              How We Help You Get <span className="gradient-text">Interview Calls</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Three powerful tools to transform your profile from invisible to interview-ready
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-accent-500/50 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-600/0 to-accent-600/0 group-hover:from-accent-600/5 group-hover:to-transparent rounded-2xl transition-all" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-24 sm:px-12 lg:px-24 bg-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Final Year Students <span className="gradient-text">Struggle</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Blind Applications", desc: "Sending 100+ CVs without knowing which skills matter" },
              { title: "Tutorial Hell", desc: "Following random courses without a clear path" },
              { title: "Weak Portfolio", desc: "Building toy projects that don't impress recruiters" },
              { title: "No Direction", desc: "Confused about what to learn next and in what order" }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900 rounded-xl border border-red-900/30 hover:border-red-700/50 transition-all"
              >
                <h3 className="text-xl font-bold text-red-400 mb-2">{problem.title}</h3>
                <p className="text-slate-400">{problem.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 bg-gradient-to-br from-accent-600/20 to-primary-600/20 rounded-2xl border border-accent-500/30">
              <p className="text-2xl text-white font-semibold mb-4">
                You're not failing. <span className="gradient-text">You're just fighting blind.</span>
              </p>
              <p className="text-slate-300 text-lg">
                Let's fix that. Right now.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Your Degree Isn't the Problem.
              <br />
              <span className="gradient-text">Your Skill Strategy Is.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Upload your CV. Get a clear plan. Start getting interview calls.
            </p>
            <Link href="/analyze">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-5 bg-gradient-to-r from-primary-500 to-accent-600 text-white rounded-lg font-bold text-xl shadow-2xl hover:shadow-accent-500/50 transition-all flex items-center gap-3 mx-auto"
              >
                Start Skill Gap Analysis
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
            <p className="text-sm text-slate-500 mt-6">Free analysis • 60 seconds • No sign-up</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
