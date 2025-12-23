"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CVUpload from "@/components/CVUpload";
import RoleSelection from "@/components/RoleSelection";
import AnalysisLoading from "@/components/AnalysisLoading";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AnalyzePage() {
  const [step, setStep] = useState<"upload" | "role" | "analyzing">("upload");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const router = useRouter();

  const handleCVUpload = (file: File) => {
    setCvFile(file);
    setStep("role");
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setStep("analyzing");

    // Simulate analysis and redirect to results
    setTimeout(() => {
      router.push(`/results?role=${encodeURIComponent(role)}`);
    }, 5000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-12 lg:px-24">
        {/* Back button */}
        <Link href="/">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </Link>

        {/* Progress indicator */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[
              { id: "upload", label: "Upload CV" },
              { id: "role", label: "Select Role" },
              { id: "analyzing", label: "Analysis" }
            ].map((item, index) => (
              <div key={item.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step === item.id
                        ? "bg-gradient-to-r from-primary-500 to-accent-600 text-white shadow-lg"
                        : (step === "role" && item.id === "upload") || (step === "analyzing" && item.id !== "analyzing")
                        ? "bg-green-500 text-white"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {(step === "role" && item.id === "upload") || (step === "analyzing" && item.id !== "analyzing") ? "✓" : index + 1}
                  </div>
                  <span className="text-sm mt-2 text-slate-400">{item.label}</span>
                </div>
                {index < 2 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-all ${
                      (step === "role" && index === 0) || (step === "analyzing" && index <= 1)
                        ? "bg-green-500"
                        : "bg-slate-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {step === "upload" && <CVUpload onUpload={handleCVUpload} />}
          {step === "role" && <RoleSelection onSelect={handleRoleSelect} />}
          {step === "analyzing" && <AnalysisLoading role={selectedRole} />}
        </motion.div>
      </div>
    </main>
  );
}
