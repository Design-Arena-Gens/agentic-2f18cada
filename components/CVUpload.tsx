"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Upload, FileText, CheckCircle2, Shield, Lock } from "lucide-react";

interface CVUploadProps {
  onUpload: (file: File) => void;
}

export default function CVUpload({ onUpload }: CVUploadProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1,
    multiple: false
  });

  const handleContinue = () => {
    if (uploadedFile) {
      onUpload(uploadedFile);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Upload Your <span className="gradient-text">CV</span>
        </h1>
        <p className="text-xl text-slate-400">
          Let's analyze your skills and identify gaps for your dream role
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div
          {...getRootProps()}
          className={`relative p-12 border-2 border-dashed rounded-2xl transition-all cursor-pointer ${
            isDragActive
              ? "border-accent-500 bg-accent-500/10"
              : uploadedFile
              ? "border-green-500 bg-green-500/5"
              : "border-slate-700 bg-slate-800/50 hover:border-accent-500/50 hover:bg-accent-500/5"
          }`}
        >
          <input {...getInputProps()} />

          <div className="flex flex-col items-center text-center">
            {uploadedFile ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">File Uploaded Successfully!</h3>
                <div className="flex items-center gap-2 text-slate-400 mb-4">
                  <FileText className="w-5 h-5" />
                  <span>{uploadedFile.name}</span>
                  <span className="text-sm">({(uploadedFile.size / 1024).toFixed(1)} KB)</span>
                </div>
                <p className="text-sm text-slate-500 mb-6">
                  Click or drag another file to replace
                </p>
              </>
            ) : (
              <>
                <Upload className={`w-16 h-16 mb-4 transition-colors ${
                  isDragActive ? "text-accent-400" : "text-slate-500"
                }`} />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {isDragActive ? "Drop your CV here" : "Drag & drop your CV"}
                </h3>
                <p className="text-slate-400 mb-6">
                  or click to browse your files
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-600 text-white rounded-lg font-semibold shadow-lg">
                  <Upload className="w-5 h-5" />
                  <span>Select File</span>
                </div>
              </>
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-sm text-slate-500 text-center">
              Supported formats: PDF, DOC, DOCX • Max size: 5MB
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <Shield className="w-6 h-6 text-green-400 flex-shrink-0" />
            <div>
              <div className="font-semibold text-white text-sm">100% Secure</div>
              <div className="text-xs text-slate-400">Your data is encrypted</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <Lock className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <div className="font-semibold text-white text-sm">Private</div>
              <div className="text-xs text-slate-400">Not stored or shared</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0" />
            <div>
              <div className="font-semibold text-white text-sm">Fast Analysis</div>
              <div className="text-xs text-slate-400">Results in 60 seconds</div>
            </div>
          </div>
        </div>

        {/* Continue button */}
        {uploadedFile && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContinue}
              className="px-12 py-4 bg-gradient-to-r from-primary-500 to-accent-600 text-white rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Continue to Role Selection
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
