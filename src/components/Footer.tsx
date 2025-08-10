import { Activity } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <>
      {/* Research Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Project Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <Activity className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-gray-900 dark:text-white">
                  YCCE Wound Analysis (Research)
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-md">
                An academic research initiative by Yeshwantrao Chavan College of
                Engineering, focused on AI-assisted wound analysis using deep
                learning and computer vision.
              </p>
              {/* Counter Embed */}

              <img
                src="https://counter1.optistats.ovh/private/freecounterstat.php?c=wg6p6c4uah6z23rzgmfnjkmf4rqrbx7l"
                alt="web counter"
                className="pt-4"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                Research
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>Overview</div>
                <div>Publications</div>
                <div>Datasets</div>
                <div>Experiments</div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                Contact
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div>Email: research@ycce.edu</div>
                <div>Address: YCCE, Hingna Road, Nagpur, India</div>
                <div>GitHub Repository</div>
                <div>Collaborations</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-500 text-center">
              © 2025 YCCE Wound Analysis Research Project. For academic use
              only.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
