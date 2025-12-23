"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Share2, CheckCircle2, AlertCircle, XCircle, Calendar, Code2, Lightbulb, TrendingUp, Target } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "Web Developer";

  // Mock data - in production, this would come from AI analysis
  const skillsData = {
    score: 67,
    strong: ["JavaScript", "React", "HTML/CSS", "Git", "REST APIs"],
    weak: ["TypeScript", "Testing", "Node.js"],
    missing: ["Docker", "CI/CD", "MongoDB", "Redis", "AWS/Cloud"]
  };

  const roadmap = [
    {
      period: "Week 1-2",
      title: "TypeScript Fundamentals",
      skills: ["Type annotations", "Interfaces", "Generics"],
      resources: ["TypeScript Handbook", "Type Challenges"]
    },
    {
      period: "Week 3-4",
      title: "Backend with Node.js",
      skills: ["Express.js", "REST API Design", "Middleware"],
      resources: ["Node.js Official Docs", "Express Guide"]
    },
    {
      period: "Week 5-6",
      title: "Database & Authentication",
      skills: ["MongoDB", "JWT", "Session Management"],
      resources: ["MongoDB University", "Auth Best Practices"]
    },
    {
      period: "Week 7-8",
      title: "Testing & Quality",
      skills: ["Jest", "React Testing Library", "E2E Testing"],
      resources: ["Testing JavaScript", "Testing Trophy"]
    },
    {
      period: "Week 9-10",
      title: "DevOps Basics",
      skills: ["Docker", "CI/CD", "GitHub Actions"],
      resources: ["Docker Curriculum", "GitHub Actions Docs"]
    },
    {
      period: "Week 11-12",
      title: "Cloud Deployment",
      skills: ["AWS EC2", "S3", "RDS", "Environment Setup"],
      resources: ["AWS Free Tier", "Deploy Checklist"]
    }
  ];

  const projects = [
    {
      title: "Full-Stack Task Management System",
      description: "Build a Trello-like app with real-time updates, user authentication, and drag-and-drop",
      stack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
      difficulty: "Intermediate",
      impact: "High - Shows full-stack capability",
      estimatedTime: "3-4 weeks"
    },
    {
      title: "Developer Portfolio with CMS",
      description: "Personal portfolio with admin panel to manage projects, blog posts, and analytics",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
      difficulty: "Intermediate",
      impact: "High - Great for showcasing",
      estimatedTime: "2-3 weeks"
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat with rooms, file sharing, and message history",
      stack: ["React", "Node.js", "Socket.io", "Redis", "MongoDB"],
      difficulty: "Advanced",
      impact: "Very High - Real-time systems",
      estimatedTime: "3-4 weeks"
    },
    {
      title: "API Testing Dashboard",
      description: "Tool to test and monitor REST APIs with response time tracking and error logging",
      stack: ["React", "TypeScript", "Node.js", "Docker"],
      difficulty: "Intermediate",
      impact: "Medium - DevOps relevant",
      estimatedTime: "2 weeks"
    },
    {
      title: "Job Application Tracker",
      description: "Track applications, interviews, and follow-ups with analytics and reminders",
      stack: ["Next.js", "TypeScript", "Supabase", "TailwindCSS"],
      difficulty: "Beginner-Intermediate",
      impact: "Medium - Practical use case",
      estimatedTime: "1-2 weeks"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-12 lg:px-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/analyze">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Analyze Another CV</span>
            </motion.button>
          </Link>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-700 hover:border-slate-600 transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Report</span>
            </motion.button>
          </div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your <span className="gradient-text">Skill Gap Analysis</span>
          </h1>
          <p className="text-xl text-slate-400">
            for <span className="text-accent-400 font-semibold">{role}</span> Position
          </p>
        </motion.div>

        {/* Skill Score Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-2">Skill Readiness Score</h2>
                <p className="text-slate-400">Based on industry requirements for {role}</p>
              </div>
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-slate-700 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text">{skillsData.score}</div>
                    <div className="text-sm text-slate-400">/ 100</div>
                  </div>
                </div>
                <svg className="absolute inset-0 w-32 h-32 -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeDasharray={`${skillsData.score * 3.51} 351`}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Target className="w-8 h-8 text-accent-400" />
            Skill Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Strong Skills */}
            <div className="p-6 bg-gradient-to-br from-green-900/20 to-slate-900 rounded-xl border border-green-700/30">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-white">Strong Skills</h3>
              </div>
              <div className="space-y-2">
                {skillsData.strong.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-green-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weak Skills */}
            <div className="p-6 bg-gradient-to-br from-yellow-900/20 to-slate-900 rounded-xl border border-yellow-700/30">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Needs Improvement</h3>
              </div>
              <div className="space-y-2">
                {skillsData.weak.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-yellow-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Missing Skills */}
            <div className="p-6 bg-gradient-to-br from-red-900/20 to-slate-900 rounded-xl border border-red-700/30">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">Missing Skills</h3>
              </div>
              <div className="space-y-2">
                {skillsData.missing.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-red-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-accent-400" />
            Your 90-Day Learning Roadmap
          </h2>

          <div className="space-y-4">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-accent-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-start gap-4 md:w-48">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-600 rounded-lg flex items-center justify-center font-bold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-accent-400 font-semibold mb-1">
                        <Calendar className="w-4 h-4" />
                        {phase.period}
                      </div>
                      <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="text-sm text-slate-400 mb-2">Focus Areas:</div>
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-2">Resources:</div>
                      <div className="flex flex-wrap gap-2">
                        {phase.resources.map((resource, i) => (
                          <span key={i} className="px-3 py-1 bg-accent-900/30 text-accent-300 rounded-full text-sm border border-accent-700/30">
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Ideas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-accent-400" />
            Portfolio-Worthy Project Ideas
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-accent-500/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>
                  <Lightbulb className="w-6 h-6 text-accent-400 flex-shrink-0" />
                </div>

                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-slate-500 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-primary-900/30 text-primary-300 rounded text-xs border border-primary-700/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className={`px-3 py-1 rounded-full ${
                      project.difficulty === "Beginner-Intermediate"
                        ? "bg-green-900/30 text-green-300 border border-green-700/30"
                        : project.difficulty === "Intermediate"
                        ? "bg-yellow-900/30 text-yellow-300 border border-yellow-700/30"
                        : "bg-red-900/30 text-red-300 border border-red-700/30"
                    }`}>
                      {project.difficulty}
                    </span>
                    <span className="text-slate-400">{project.estimatedTime}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-700">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent-400" />
                      <span className="text-sm text-accent-300">{project.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center p-12 bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-2xl border border-accent-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Turn This Into <span className="gradient-text">Interview Calls?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Follow this roadmap, build these projects, and watch your profile transform from invisible to interview-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Download Full Report
            </motion.button>
            <Link href="/analyze">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold text-lg border border-slate-700 hover:border-slate-600 transition-all"
              >
                Analyze Another CV
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading results...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
