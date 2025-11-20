import { Link } from "react-router-dom";
import { ArrowLeftIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function EmailPrefs() {
  return (
    <div className="min-h-screen py-25 md:pt-40 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <Link
            to="/settings"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeftIcon className="size-4 mr-2" />
            Back to Settings
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Email Preferences
          </h1>
          <p className="mt-2 text-gray-500">
            Choose which emails and notifications you receive from us.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 mb-6">
            <EnvelopeIcon className="h-7 w-7 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            No preferences set
          </h3>
          <p className="mt-2 text-gray-500 max-w-sm mx-auto">
            You haven't configured any email preferences yet. When we send
            updates, you'll see options here.
          </p>
        </div>
      </div>
    </div>
  );
}
