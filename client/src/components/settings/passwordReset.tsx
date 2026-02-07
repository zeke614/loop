import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function PasswordReset() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (form.password !== form.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (form.password.length < 8) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    if (!/\d/.test(form.password)) {
      setErrorMessage("Password must contain at least one number");
      setLoading(false);
      return;
    }

    if (!/\D/.test(form.password)) {
      setErrorMessage("Password must contain at least one letter or symbol");
      setLoading(false);
      return;
    }

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (!token) {
        throw new Error("Reset token is missing");
      }

      // mock
      const response = await axios.post(
        `${API_URL}/api/users/reset-password`,
        {
          token,
          password: form.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.data.message) {
        setSuccessMessage(
          "Password reset successfully! Redirecting to login...",
        );
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        throw new Error("No success message received");
      }
    } catch (error: any) {
      if (error.code === "ECONNABORTED") {
        setErrorMessage("Request timeout - server is not responding");
      } else if (error.response) {
        setErrorMessage(
          error.response?.data?.message ||
            "Password reset failed. Please try again.",
        );
      } else if (error.request) {
        setErrorMessage(
          "Cannot connect to server. Please check your connection.",
        );
      } else {
        setErrorMessage(error.message || "An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col w-full max-w-md px-5 mx-auto pt-10">
      <div>
        <Link
          to="/settings/details"
          className="inline-flex items-center font-medium transition-colors mb-7"
        >
          <ChevronLeftIcon className="size-5.5 -ml-1" />
        </Link>

        <h3 className="text-2xl font-semibold mb-3.5">Password</h3>

        <p className="text-gray-600 dark:text-[#d4d4d8] mb-5">
          Enter your new password below. Make sure it's strong and memorable.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <p className="text-center text-red-500 font-medium">
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p className="text-center text-green-500 font-medium">
              {successMessage}
            </p>
          )}

          <div className="relative pb-1">
            <label className="font-medium text-gray-700 dark:text-[#d4d4d8] block mb-2">
              New password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter your new password"
              className="w-full px-4 py-3 rounded-xl border border-zinc-950/10 dark:border-white/15 focus:outline-none focus:border-[#6e7780] placeholder-gray-400 pr-10 transition"
            />
            {showPassword ? (
              <EyeSlashIcon
                className="size-4.5 absolute right-4 top-[56%] text-gray-500 dark:text-[#d4d4d8] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeIcon
                className="size-4.5 absolute right-4 top-[56%] text-gray-500 dark:text-[#d4d4d8] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <div className="relative mb-2.5">
            <label className="font-medium text-gray-700 dark:text-[#d4d4d8] block mb-2">
              Confirm new password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your new password"
              className="w-full px-4 py-3 rounded-xl border border-zinc-950/10 dark:border-white/15 focus:outline-none focus:border-[#6e7780] placeholder-gray-400 pr-10 transition"
            />
            {showConfirmPassword ? (
              <EyeSlashIcon
                className="size-4.5 absolute right-4 top-[60%] text-gray-500 dark:text-[#d4d4d8] cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            ) : (
              <EyeIcon
                className="size-4.5 absolute right-4 top-[60%] text-gray-500 dark:text-[#d4d4d8] cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            )}
          </div>
        </form>
      </div>

      <p className="text-sm text-gray-500 dark:text-[#d4d4d8] mb-0.5">
        Password must be at least 8 characters long.
      </p>

      <p className="text-sm text-gray-500 dark:text-[#d4d4d8] mb-0.5">
        Password must include at least 1 digit.
      </p>

      <p className="text-sm text-gray-500 dark:text-[#d4d4d8]">
        Password must include at least 1 non-digit character.
      </p>

      <div className="mt-auto safe-bottom pb-6">
        <button
          type="submit"
          disabled={!form.password || !form.confirmPassword || loading}
          className={`w-full rounded-full py-[0.844rem] font-medium transition flex items-center justify-center
                ${
                  !form.password || !form.confirmPassword || loading
                    ? "bg-[#babcc0]  text-white cursor-not-allowed"
                    : "bg-[#0ab39c] text-white hover:bg-[#089c8a] cursor-pointer"
                }`}
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent animate-spin"></span>
              <span>Updating Password...</span>
            </span>
          ) : (
            "Update Password"
          )}
        </button>
      </div>
    </div>
  );
}
