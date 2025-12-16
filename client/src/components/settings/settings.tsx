import { Link } from "react-router-dom";
import {
  IdentificationIcon,
  AtSymbolIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Settings() {
  return (
    <div className="max-w-4xl min-h-screen mx-auto py-25 md:pt-40 px-5">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
      <p className="text-gray-500 mb-10">
        Manage your account and preferences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/settings/details" className="group">
          <div className="h-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#0ab39c] hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#04aa6d]/10 transition-colors">
              <IdentificationIcon className="size-6 text-gray-600 group-hover:text-[#0ab39c]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Personal details
            </h3>
            <p className="text-sm text-gray-500">
              Update your name and bio information.
            </p>
          </div>
        </Link>

        <Link to="/settings/emailPrefs" className="group">
          <div className="h-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#0ab39c] hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#04aa6d]/10 transition-colors">
              <AtSymbolIcon className="size-6 text-gray-600 group-hover:text-[#0ab39c]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Email preferences
            </h3>
            <p className="text-sm text-gray-500">
              Manage your newsletter and notification settings.
            </p>
          </div>
        </Link>

        <Link to="/settings/security" className="group">
          <div className="h-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#0ab39c] hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#04aa6d]/10 transition-colors">
              <ShieldCheckIcon className="size-6 text-gray-600 group-hover:text-[#0ab39c]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Security
            </h3>
            <p className="text-sm text-gray-500">
              Change your password and privacy settings.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
