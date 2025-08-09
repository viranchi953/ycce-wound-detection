import { Activity, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Gradio-style Navbar */}
      <nav className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Simple Logo */}
            <div>
              <Link className="flex items-center space-x-3" href={"/"}>
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  YCCE Wound Analysis
                </span>
              </Link>
            </div>

            {/* Clean Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/model"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                Model
              </Link>
              <Link
                href="/docs"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                Docs
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors cursor-pointer"
                href={"/model"}
              >
                Try Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/model"
                className="block text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium py-2"
              >
                Model
              </Link>
              <Link
                href="/docs"
                className="block text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium py-2"
              >
                Docs
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium py-2"
              >
                About
              </Link>
              <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors mt-3">
                Try Model
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
