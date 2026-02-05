import { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
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
    <div className="min-h-[100dvh] w-full max-w-md mx-auto px-6 pt-10 flex flex-col">
      <div>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center font-medium transition-colors mb-7"
        >
          <ChevronLeftIcon className="size-5.5 -ml-1" />
        </button>

        <h3 className="text-2xl font-frozen mb-3.5">Forgot Password</h3>

        <p className="text-gray-600 dark:text-[#d4d4d8] mb-5">
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
              className="w-full px-4 py-3 rounded-xl border border-zinc-950/10 dark:border-white/15 focus:outline-none focus:border-[#6e7780] transition"
            />
          </div>

          <p className="text-sm text-gray-500 dark:text-[#d4d4d8] mb-6">
            Try not to forget your password again, buddy.
          </p>
        </form>
      </div>

      <div className="mt-auto safe-bottom pb-6">
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full rounded-full py-[0.844rem] text-white dark:text-black font-medium transition ${
            isButtonDisabled
              ? "bg-[#babcc0] dark:bg-[#d1d1d1] cursor-not-allowed"
              : "bg-[#0ab39c] hover:bg-[#089c8a] cursor-pointer"
          }`}
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
