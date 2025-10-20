import { Link } from "react-router-dom";

export default function EmailPrefs() {
  return (
    <div className="pt-20 max-w-3xl mx-8 md:mx-auto flex flex-col justify-center space-y-5">
      <div className="flex items-center gap-1 p-4">
        <Link
          to="/settings"
          className="text-gray-600 hover:text-black flex items-center gap-[0.188rem]"
        >
          <i className="bx  bx-arrow-in-left-square-half"></i>{" "}
          <span className="font-medium">Settings</span>
        </Link>
      </div>

      <h1 className="text-2xl pl-6 font-semibold">Email Preferences</h1>

      <p className="text-center font-semibold text-[#6e7780] mt-8">
        You haven't set any email preferences yet.
      </p>
    </div>
  );
}
