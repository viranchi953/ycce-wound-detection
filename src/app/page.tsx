"use client";
import { Eye, Zap, Play, BarChart3 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Gradio-style Navbar */}
      <Navbar />

      {/* Gradio-style Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            AI-Powered Wound Analysis
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Upload medical images and get instant wound classification, severity
            assessment, and healing progress analysis using state-of-the-art
            deep learning models.
          </p>

          {/* Gradio-style Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/model"
              className="cursor-pointer flex items-center justify-center space-x-2 px-8 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-sm"
            >
              <Play className="w-5 h-5" />
              <span>Launch Interface</span>
            </Link>

            <Link
              href="https://huggingface.co/spaces/Rakhi-2025/Wound-Analysis-LE/tree/main"
              className="inline-block px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              View on HF
            </Link>
          </div>

          {/* Model Performance Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-2xl font-bold text-orange-500 mb-1">
                96.8%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Accuracy
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-2xl font-bold text-orange-500 mb-1">45k</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Images Trained
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-2xl font-bold text-orange-500 mb-1">15</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Wound Types
              </div>
            </div>
          </div>
        </div>

        {/* Interface Preview */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <h3 className="font-medium text-gray-900 dark:text-white">
                Wound Analysis Interface
              </h3>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upload Area */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Upload Medical Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center bg-gray-50 dark:bg-gray-700">
                    <div className="w-12 h-12 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Drop image here or click to browse
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Supports JPG, PNG, DICOM formats
                    </p>
                  </div>
                </div>

                {/* Results Panel */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Analysis Results
                  </label>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Wound Type:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Pressure Ulcer
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Severity:
                      </span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded text-sm">
                        Stage II
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Confidence:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        94.2%
                      </span>
                    </div>
                    <div className="pt-2">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full w-[94%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <FeatureCard
            icon={<Eye className="w-6 h-6 text-orange-500" />}
            title="Computer Vision"
            description="Advanced image processing for precise wound detection and measurement using convolutional neural networks."
          />
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6 text-orange-500" />}
            title="Classification"
            description="Multi-class wound type identification with confidence scores and detailed analysis reports."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-orange-500" />}
            title="Real-time"
            description="Instant processing and results with optimized inference pipeline for clinical workflows."
          />
        </div>

        {/* Usage Stats */}
        {/* <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by Healthcare Professionals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            <div>
              <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">150+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div>
              <Activity className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">25k+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Images Analyzed</div>
            </div>
            <div>
              <BarChart3 className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">User Satisfaction</div>
            </div>
            <div>
              <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2.3s</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg Analysis Time</div>
            </div>
          </div>
        </div> */}
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
