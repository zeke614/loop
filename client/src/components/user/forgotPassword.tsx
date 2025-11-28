import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Check if email contains @ and has content after @
    setIsValidEmail(value.includes("@") && value.split("@")[1]?.length > 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail) {
      console.log("Sending reset link to:", email);
    }
  };

  const isButtonDisabled = !isValidEmail || email.trim() === "";

  return (
    <>
      <div className="min-h-screen bg-white w-full max-w-md px-4 mx-auto pt-21 sm:pt-24">
        <Link
          to="/settings/details"
          className="inline-flex items-center font-medium transition-colors mb-7"
        >
          <ChevronLeftIcon className="size-5.5 -ml-1" />
        </Link>

        <h3 className="text-2xl font-bold mb-3.5">Forgot Password</h3>

        <p className="text-gray-600 mb-5">
          Enter your email and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#6e7780] transition"
            />
          </div>

          <p className="text-sm text-gray-500 mb-7">
            Try not to forget your password again, buddy.{" "}
          </p>

          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`w-full rounded-lg py-3 sm:mt-56 text-white font-medium transition ${
              isButtonDisabled
                ? "bg-[#babcc0] cursor-not-allowed"
                : "bg-[#0ab39c] hover:bg-[#089c8a] cursor-pointer"
            }`}
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </>
  );
}
