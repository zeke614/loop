import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div className="px-5 py-6 sm:px-8 md:px-12 lg:px-20 max-w-3xl mx-auto flex flex-col justify-center space-y-6">
      <h1 className="text-2xl sm:text-3xl font-semibold sm:text-left">
        Settings
      </h1>

      <div className="flex flex-col space-y-1 text-lg">
        <Link to="/settings/details">
          <div className="flex items-center space-x-3 p-3 rounded-lg transition">
            <i className="bx bx-user-id-card text-lg"></i>
            <span className="font-medium">Personal details</span>
          </div>
        </Link>

        <Link to="/settings/emailPrefs">
          <div className="flex items-center space-x-3 p-3 rounded-lg transition">
            <i className="bx bx-at text-lg"></i>
            <span className="font-medium">Email preferences</span>
          </div>
        </Link>

        <Link to="/settings/security">
          <div className="flex items-center space-x-3 p-3 rounded-lg transition">
            <i className="bx bx-lock text-lg"></i>
            <span className="font-medium">Security and privacy</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
