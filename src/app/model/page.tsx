"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";

export default function WoundAnalysisEmbed() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <iframe
          src="https://rakhi-2025-wound-analysis-le.hf.space"
          style={{
            width: "100%",
            height: "100vh", // Fill screen height
            border: "none",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
