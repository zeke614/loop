import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../contexts/authContext";

export default function EmailReset() {
  const { user } = useAuth();
  const [newEmail, setNewEmail] = useState(user?.email || "");
  const [loading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating email to:", newEmail);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-white w-full max-w-md px-5 mx-auto pt-10">
      <div>
        <Link
          to="/settings/details"
          className="inline-flex items-center font-medium transition-colors mb-7"
        >
          <ChevronLeftIcon className="size-5.5 -ml-1" />
        </Link>

        <h3 className="text-2xl font-frozen mb-3.5">Email</h3>

        <p className="text-gray-600 mb-5 md:hidden">
          You'll use this email to receive messages, <br /> sign in and recover
          your account.
        </p>

        <p className="text-gray-600 mb-5 hidden md:block">
          You'll use this email to receive messages, sign in and recover your
          account.
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
              className="w-full px-4 py-3 rounded-xl border border-gray-30 focus:outline-none focus:border-[#6e7780] transition
                  "
            />
          </div>
        </form>
      </div>

      <p className="text-sm text-gray-500">
        A verification code will be sent to this email.
      </p>

      <div className="mt-auto safe-bottom pb-6">
        <button
          type="submit"
          disabled={newEmail === user?.email || loading}
          className={`w-full rounded-full py-[0.844rem] text-white 
                    font-medium transition 
                    ${
                      newEmail === user?.email
                        ? "bg-[#babcc0] white cursor-not-allowed"
                        : "bg-[#0ab39c] hover:bg-[#089c8a] cursor-pointer"
                    }`}
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Updating Email...</span>
            </span>
          ) : (
            "Update Email"
          )}{" "}
        </button>
      </div>
    </div>
  );
}
