import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Security() {
  return (
    <div className="px-8 pt-20 max-w-3xl md:mx-auto flex flex-col justify-center space-y-4">
      <div className="flex items-center pt-4">
        <Link
          to="/settings"
          className="text-gray-600 hover:text-black flex items-center gap-1"
        >
          <ArrowLeftIcon className="size-5" />
          <span className="font-medium">Settings</span>
        </Link>
      </div>
      <h1 className="text-xl font-semibold">Security and Privacy</h1>
      <p className="text-center text-[#6e7780] mt-8">
        You haven't set any security preferences yet.
      </p>
    </div>
  );
}
