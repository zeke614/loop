import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../contexts/authContext";

export default function EmailReset() {
  const { user } = useAuth();
  const [newEmail, setNewEmail] = useState(user?.email || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating email to:", newEmail);
  };

  return (
    <>
      <div className="min-h-screen bg-white w-full max-w-md px-4 mx-auto pt-20">
        <Link
          to="/settings/details"
          className="inline-flex items-center font-medium transition-colors mb-5"
        >
          <ChevronLeftIcon className="size-5.5 -ml-1" />
        </Link>

        <h3 className="text-2xl font-bold mb-3.5">Email</h3>

        <p className="text-gray-600 mb-5">
          You'll use this email to receive messages, <br /> sign in and recover
          your account.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-medium block mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-30 focus:outline-none focus:border-[#6e7780] transition
                "
            />
          </div>

          <p className="text-sm text-gray-500 mb-6">
            A verification code will be sent to this email.
          </p>

          <button
            type="submit"
            className="
                w-full rounded-lg py-3 bg-[#0ab39c] text-white 
                font-medium hover:bg-[#089c8a] transition cursor-pointer
              "
          >
            Update Email
          </button>
        </form>
      </div>
    </>
  );
}
