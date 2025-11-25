import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface SecuritySettings {
  twoFactor: boolean;
  loginAlerts: boolean;
  publicProfile: boolean;
  searchIndexing: boolean;
}

const defaultSecuritySettings: SecuritySettings = {
  twoFactor: false,
  loginAlerts: true,
  publicProfile: true,
  searchIndexing: false,
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
    <div className="min-h-screen py-25 px-5 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto md:mt-10">
        <div className="mb-8">
          <Link
            to="/settings"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeftIcon className="size-4 mr-2" />
            Back to Settings
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Security & Privacy
          </h1>
          <p className="mt-2 text-gray-500">
            Manage your login alerts, 2FA, and account privacy settings.
          </p>
        </div>

        <div className="flex items-center justify-between py-5 border-b border-gray-100">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Login Alerts
            </h3>
            <p className="text-gray-500 mt-1">
              Get notified about account access from different devices.
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
              Two-Factor Authentication
            </h3>
            <p className="text-gray-500 mt-1">
              Add an extra layer of security to your account using an
              authenticator app.
            </p>
          </div>
          <button
            onClick={() => handleToggle("twoFactor")}
            className="cursor-pointer focus:outline-none"
            aria-label="Toggle 2FA"
          >
            <i
              className={`text-4xl transition-colors duration-200 ${
                settings.twoFactor
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
              Allow others to find your profile and view your reading lists.
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
              Allow search engines like Google to index your public profile
              page.
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
  );
}
