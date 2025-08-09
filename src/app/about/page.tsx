"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f19] text-gray-800 dark:text-gray-100 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            About YCCE Wound Analysis
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            The YCCE Wound Analysis Portal is an AI-powered platform designed
            for healthcare professionals to assess, classify, and track the
            healing progress of wounds in real time. Leveraging deep learning
            and computer vision, the system enables precise wound measurements,
            stage identification, and treatment tracking.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our goal is to provide accessible, accurate, and efficient wound
            assessment tools to enhance patient care, reduce healing time, and
            assist doctors in decision-making through AI-assisted insights.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Technologies Used
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
            <li>Deep Learning Models (CNNs for image processing)</li>
            <li>Computer Vision algorithms for wound measurement</li>
            <li>Next.js + TailwindCSS for a responsive web interface</li>
            <li>
              Gradio & Hugging Face Spaces for interactive model deployment
            </li>
          </ul>

          {/* Address Section */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">Contact & Address</h2>
          <address className="not-italic text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong>YCCE Wound Analysis Team</strong>
            <br />
            Department of Computer Technology
            <br />
            Yeshwantrao Chavan College of Engineering
            <br />
            Hingna Road, Wanadongri, Nagpur, Maharashtra, 441110
            <br />
            India
            <br />
            <span className="block mt-2">
              📧 Email:{" "}
              <a
                href="mailto:yccewoundanalysis@example.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                yccewoundanalysis@example.com
              </a>
            </span>
            <span className="block">
              📞 Phone:{" "}
              <a
                href="tel:+911234567890"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                +91 12345 67890
              </a>
            </span>
          </address>
        </div>
      </div>
      <Footer />
    </>
  );
}
