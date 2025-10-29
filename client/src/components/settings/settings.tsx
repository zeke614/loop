import { Link } from "react-router-dom";
import {
  IdentificationIcon,
  AtSymbolIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function Settings() {
  return (
    <div className="py-20 px-8 max-w-3xl mx-auto flex flex-col justify-center space-y-6">
      <h1 className="text-2xl sm:text-3xl font-semibold sm:text-left">
        Settings
      </h1>

      <div className="flex flex-col text-lg">
        <Link to="/settings/details">
          <div className="flex items-center space-x-3 py-3 rounded-lg transition">
            <IdentificationIcon className="size-5" />
            <span className="font-medium">Personal details</span>
          </div>
        </Link>

        <Link to="/settings/emailPrefs">
          <div className="flex items-center space-x-3 py-3 rounded-lg transition">
            <AtSymbolIcon className="size-5" />
            <span className="font-medium">Email preferences</span>
          </div>
        </Link>

        <Link to="/settings/security">
          <div className="flex items-center space-x-3 py-3 rounded-lg transition">
            <LockClosedIcon className="size-5" />
            <span className="font-medium">Security and privacy</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
