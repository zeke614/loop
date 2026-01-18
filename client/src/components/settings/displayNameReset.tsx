import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../contexts/authContext";

export default function UsernameReset() {
  const { user } = useAuth();
  const [newUsername, setNewUsername] = useState(user?.username || "");
  const [loading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating username to:", newUsername);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-white w-full max-w-md px-4 mx-auto pt-10">
      <div>
        <Link
          to="/settings/details"
          className="inline-flex items-center font-medium transition-colors mb-7"
        >
          <ChevronLeftIcon className="size-5.5 -ml-1" />
        </Link>

        <h3 className="text-2xl font-frozen mb-3.5">Display Name</h3>

        <p className="text-gray-600 mb-5 md:hidden">
          This name will appear on your profile <br /> and any comments or posts
          you make.
        </p>

        <p className="text-gray-600 mb-5 hidden md:block">
          This name will appear on your profile and any comments or posts you
          make.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="font-medium block mb-2 text-gray-700">
              Display Name
            </label>
            <input
              type="email"
              name="email"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-30 focus:outline-none focus:border-[#6e7780] transition
                "
            />
          </div>
        </form>
      </div>

      <p className="text-sm text-gray-500">
        Nice name, eh? 😉 You can change it anytime.
      </p>

      <div className="mt-auto safe-bottom pb-6">
        <button
          type="submit"
          disabled={newUsername === user?.username || loading}
          className={`w-full rounded-full py-[0.844rem] sm:mt-56 text-white 
                  font-medium transition 
                  ${
                    newUsername === user?.username
                      ? "bg-[#babcc0] white cursor-not-allowed"
                      : "bg-[#0ab39c] hover:bg-[#089c8a] cursor-pointer"
                  }`}
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Updating Name...</span>
            </span>
          ) : (
            "Update Name"
          )}{" "}
        </button>
      </div>
    </div>
  );
}
