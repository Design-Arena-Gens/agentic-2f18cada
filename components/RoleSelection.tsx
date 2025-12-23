"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Globe, Brain, Code2, Database, Cloud } from "lucide-react";

interface RoleSelectionProps {
  onSelect: (role: string) => void;
}

const roles = [
  {
    id: "backend",
    title: "Backend Developer",
    icon: Server,
    description: "Build scalable server-side applications",
    skills: ["Node.js", "Python", "Java", "SQL", "REST APIs", "Docker"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "web",
    title: "Web Developer",
    icon: Globe,
    description: "Create modern, responsive web applications",
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Next.js", "TailwindCSS"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "ml",
    title: "Machine Learning / AI",
    icon: Brain,
    description: "Develop intelligent systems and models",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Data Analysis", "Statistics"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    icon: Code2,
    description: "Master both frontend and backend",
    skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "AWS"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    icon: Cloud,
    description: "Automate and optimize infrastructure",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Linux", "Terraform"],
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    id: "data",
    title: "Data Engineer",
    icon: Database,
    description: "Build data pipelines and warehouses",
    skills: ["SQL", "Python", "Spark", "Airflow", "ETL", "Big Data"],
    gradient: "from-yellow-500 to-orange-500"
  }
];

export default function RoleSelection({ onSelect }: RoleSelectionProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleSelect = (roleId: string, roleTitle: string) => {
    setSelectedRole(roleId);
    setTimeout(() => {
      onSelect(roleTitle);
    }, 500);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Select Your <span className="gradient-text">Target Role</span>
        </h1>
        <p className="text-xl text-slate-400">
          Choose the role you're applying for to get a personalized skill gap analysis
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, index) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;

          return (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSelect(role.id, role.title)}
              className={`relative p-6 rounded-2xl cursor-pointer transition-all group ${
                isSelected
                  ? "bg-gradient-to-br from-accent-600/30 to-primary-600/30 border-2 border-accent-500"
                  : "bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-accent-500/50"
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${role.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4">
                  {role.description}
                </p>

                {/* Skills */}
                <div className="space-y-2">
                  <div className="text-xs text-slate-500 uppercase font-semibold">Key Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Selected indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-slate-500 text-sm">
          Not sure which role? Choose the one you're most interested in—you can always analyze again.
        </p>
      </motion.div>
    </div>
  );
}
