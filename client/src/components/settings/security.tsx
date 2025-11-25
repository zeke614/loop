import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { motion, type Variants } from "framer-motion";

interface SecuritySettings {
  loginAlerts: boolean;
  authenticator: boolean;
  publicProfile: boolean;
  searchIndexing: boolean;
}

const defaultSecuritySettings: SecuritySettings = {
  loginAlerts: true,
  authenticator: false,
  publicProfile: false,
  searchIndexing: true,
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

export default function Security() {
  const [settings, setSettings] = useState<SecuritySettings>(
    defaultSecuritySettings
  );

  useEffect(() => {
    const savedSettings = localStorage.getItem("securitySettings");

    if (savedSettings) {
      try {
        const parsedPreferences = JSON.parse(savedSettings);
        setSettings(parsedPreferences);
      } catch (error) {
        console.error("Error loading security settings:", error);
        setSettings(defaultSecuritySettings);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("securitySettings", JSON.stringify(settings));
  }, [settings]);

  const handleToggle = (key: keyof SecuritySettings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.div
      key="security-page"
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="min-h-screen py-25 px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto md:mt-10">
          <div className="mb-7">
            <Link
              to="/settings"
              className="inline-flex items-center font-medium transition-colors mb-5"
            >
              <ChevronLeftIcon className="size-5.5 -ml-1" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">
              Security & Privacy
            </h1>
            <p className="mt-2 text-gray-500 md:hidden">
              Manage your account privacy, <br /> login alerts and
              authenticattion settings.
            </p>
            <p className="mt-2 text-gray-500 hidden md:block">
              Manage your account privacy, login alerts and authenticattion
              settings.
            </p>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-gray-100">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Login Alerts
              </h3>
              <p className="text-gray-500 mt-1">
                Get notified when your account <br /> is accessed from a new
                device.
              </p>
            </div>
            <button
              onClick={() => handleToggle("loginAlerts")}
              className="cursor-pointer focus:outline-none"
              aria-label="Toggle Login Alerts"
            >
              <i
                className={`text-4xl transition-colors duration-200 ${
                  settings.loginAlerts
                    ? "bx bxs-toggle-right text-[#0ab39c]"
                    : "bx bx-toggle-left text-gray-300"
                }`}
              ></i>
            </button>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-gray-100">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Authenticator app
              </h3>
              <p className="text-gray-500 mt-1">
                Set up an authenticator app <br /> to add an extra layer of
                security.
              </p>
            </div>
            <button
              onClick={() => handleToggle("authenticator")}
              className="cursor-pointer focus:outline-none"
              aria-label="Toggle 2FA"
            >
              <i
                className={`text-4xl transition-colors duration-200 ${
                  settings.authenticator
                    ? "bx bxs-toggle-right text-[#0ab39c]"
                    : "bx bx-toggle-left text-gray-300"
                }`}
              ></i>
            </button>
          </div>

          <div className="flex items-center justify-between py-5 border-b border-gray-100">
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-lg text-gray-900">
                Public Profile
              </h3>
              <p className="text-gray-500 mt-1">
                Allow others to find your profile <br /> and view your reading
                lists.
              </p>
            </div>
            <button
              onClick={() => handleToggle("publicProfile")}
              className="cursor-pointer focus:outline-none"
              aria-label="Toggle Public Profile"
            >
              <i
                className={`text-4xl transition-colors duration-200 ${
                  settings.publicProfile
                    ? "bx bxs-toggle-right text-[#0ab39c]"
                    : "bx bx-toggle-left text-gray-300"
                }`}
              ></i>
            </button>
          </div>

          <div className="flex items-center justify-between py-5">
            <div className="flex-1 pr-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Search Engine Indexing
              </h3>
              <p className="text-gray-500 mt-1">
                Allow search engines like Google <br /> to index your public
                profile page.
              </p>
            </div>
            <button
              onClick={() => handleToggle("searchIndexing")}
              className="cursor-pointer focus:outline-none"
              aria-label="Toggle Search Indexing"
            >
              <i
                className={`text-4xl transition-colors duration-200 ${
                  settings.searchIndexing
                    ? "bx bxs-toggle-right text-[#0ab39c]"
                    : "bx bx-toggle-left text-gray-300"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
