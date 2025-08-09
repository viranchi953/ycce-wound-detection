"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function DocsPage() {
  return (
    <>
      {/* Gradio-style Navbar */}
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f19] text-gray-800 dark:text-gray-100 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Documentation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            This guide will walk you through how to use the YCCE Wound Analysis
            Portal and its AI-powered tools.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                1. Accessing the Model
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Navigate to the <strong>Model</strong> page and click{" "}
                <em>Launch Interface</em> to open the interactive Gradio-based
                wound analysis tool.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                2. Uploading Images
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Upload a clear image of the wound in good lighting. The AI will
                automatically process the image and provide wound segmentation,
                classification, and size estimation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                3. Understanding the Output
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>
                  <strong>Wound Classification:</strong> The type/stage of the
                  wound.
                </li>
                <li>
                  <strong>Size Measurement:</strong> Estimated wound dimensions.
                </li>
                <li>
                  <strong>Healing Progress:</strong> Comparison with previous
                  scans (if available).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Best Practices</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                <li>Ensure consistent lighting for all wound images.</li>
                <li>
                  Capture the wound from the same angle for progress tracking.
                </li>
                <li>
                  Use high-resolution images for more accurate AI results.
                </li>
              </ul>
            </section>

            {/* New Section: Research Papers */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                5. Related Research Papers
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Explore academic papers and publications related to wound
                analysis, AI in healthcare, and medical imaging.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "AI-Based Wound Analysis Using Deep Learning",
                    link: "https://doi.org/10.xxxx/wound-analysis",
                  },
                  {
                    title: "Medical Image Segmentation for Wound Care",
                    link: "https://doi.org/10.xxxx/image-segmentation",
                  },
                  {
                    title: "Healthcare AI for Chronic Wound Management",
                    link: "https://doi.org/10.xxxx/chronic-wounds",
                  },
                  {
                    title: "Advances in Wound Size Measurement Techniques",
                    link: "https://doi.org/10.xxxx/size-measurement",
                  },
                ].map((paper, index) => (
                  <Link
                    key={index}
                    href={paper.link}
                    target="_blank"
                    className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800"
                  >
                    <h3 className="font-semibold text-lg text-orange-500 hover:underline">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Click to view full paper
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
