import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

interface Preferences {
  weeklyDigest: boolean;
  newArticles: boolean;
  productUpdates: boolean;
  securityAlerts: boolean;
}

const defaultPreferences: Preferences = {
  weeklyDigest: true,
  newArticles: false,
  productUpdates: true,
  securityAlerts: true,
};

const pageVariants: Variants = {
  initial: {
    y: "100vh",
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  out: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export default function EmailPrefs() {
  const [preferences, setPreferences] =
    useState<Preferences>(defaultPreferences);

  useEffect(() => {
    const savedPreferences = localStorage.getItem("emailPreferences");

    if (savedPreferences) {
      try {
        const parsedPreferences = JSON.parse(savedPreferences);

        setPreferences(parsedPreferences);
      } catch (error) {
        console.error("Error loading email preferences:", error);
        setPreferences(defaultPreferences);
      }
    }
  }, []);

  useEffect(() => {
    console.log("Saving preferences to localStorage:", preferences);
    localStorage.setItem("emailPreferences", JSON.stringify(preferences));
  }, [preferences]);

  const handleToggle = (key: keyof Preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.div
      key="security-page"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      className="pt-25"
    >
      <div className="min-h-screen pb-25 px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto md:mt-10">
          <div className="mb-7">
            <Link
              to="/settings"
              className="inline-flex items-center font-medium transition-colors mb-5"
            >
              <ChevronLeftIcon className="size-5.5 -ml-1" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Email Preferences
            </h1>
            <p className="mt-2 text-gray-500">
              Choose which emails and notifications you receive, from digests to
              alerts.
            </p>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-gray-100">
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-lg text-gray-900">
                Weekly Digest
              </h3>
              <p className="text-gray-500 mt-1">
                A curated summary of the week's <br /> top stories and editor's
                picks.{" "}
              </p>
            </div>
            <button
              onClick={() => handleToggle("weeklyDigest")}
              className="cursor-pointer focus:outline-none"
              aria-label="Toggle Weekly Digest"
            >
              <i
                className={`text-4xl transition-colors duration-200 ${
                  preferences.weeklyDigest
                    ? "bx bxs-toggle-right text-[#0ab39c]"
                    : "bx bx-toggle-left text-gray-300"
                }`}
              ></i>
            </button>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-gray-100">
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-lg text-gray-900">
                New Article Alerts
              </h3>
              <p className="text-gray-500 mt-1">
                Get notified when new articles are published.
              </p>
            </div>
            <button
              onClick={() => handleToggle("newArticles")}
              className="cursor-pointer focus:outline-none"
              aria-label="Toggle New Article Alerts"
            >
              <i
                className={`text-4xl transition-colors duration-200 ${
                  preferences.newArticles
                    ? "bx bxs-toggle-right text-[#0ab39c]"
                    : "bx bx-toggle-left text-gray-300"
                }`}
              ></i>
            </button>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-gray-100">
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-lg text-gray-900">
                Product Updates
              </h3>
              <p className="text-gray-500 mt-1">
                News about new features on <strong>loop</strong>.
              </p>
            </div>
            <button
              onClick={() => handleToggle("productUpdates")}
              className="cursor-pointer focus:outline-none"
              aria-label="Toggle Product Updates"
            >
              <i
                className={`text-4xl transition-colors duration-200 ${
                  preferences.productUpdates
                    ? "bx bxs-toggle-right text-[#0ab39c]"
                    : "bx bx-toggle-left text-gray-300"
                }`}
              ></i>
            </button>
          </div>

          <div className="flex items-center justify-between py-5 ">
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-lg text-gray-900">
                Security Alerts
              </h3>
              <p className="text-gray-500 mt-1">
                Notifications about security and <br /> attempts.
              </p>
            </div>
            <button
              disabled
              className="cursor-not-allowed focus:outline-none opacity-50"
              aria-label="Security Alerts (Locked)"
            >
              <i className="bx bxs-toggle-right text-4xl text-[#0ab39c]"></i>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
