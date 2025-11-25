import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/authContext";
import logo from "../../assets/imgs/logo.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await axios.post(`${API_URL}/api/users/register`, form, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.token && res.data.user) {
        login(res.data.user, res.data.token);
        navigate("/");
      } else {
        throw new Error("No token or user data received after registration");
      }
    } catch (error: any) {
      if (error.code === "ECONNABORTED") {
        setErrorMessage("Request timeout - server is not responding");
      } else if (error.response) {
        setErrorMessage(
          error.response?.data?.message ||
            "Registration failed. Please try again."
        );
      } else if (error.request) {
        setErrorMessage(
          "Cannot connect to server. Please check if the backend is running."
        );
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/api/users/google`;
  };

  const handleGitHubLogin = () => {
    window.location.href = `${API_URL}/api/users/github`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-5.5 py-8">
      <div className="w-full max-w-md bg-white shadow-lg shadow-gray-300/20 rounded-xl py-4.5 px-5.5">
        <Link to="/" className="text-center block mb-6">
          <img src={logo} alt="loop logo" className="h-20 w-auto mx-auto" />
        </Link>

        <h1 className="text-2xl md:text-3xl text-center font-semibold mb-3">
          Create your account
        </h1>
        <p className="text-center text-[#6e7780] mb-8 md:text-base">
          Join Loop — dive into stories that spark curiosity and conversation.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-3 mb-6">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 w-full hover:bg-gray-50 transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>

          <button
            onClick={handleGitHubLogin}
            className="flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 w-full hover:bg-gray-50 transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
            <span>Sign up with GitHub</span>
          </button>
        </div>

        <div className="flex items-center justify-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {errorMessage && (
          <p className="text-center text-red-500 mb-4 text-sm">
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-medium text-gray-700">Username *</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="your fanfiction pseudonym"
              required
              className="w-full px-4 py-3 mt-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#6e7780] placeholder-gray-400 transition"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="please.be.valid@i.beg.you.com"
              required
              className="w-full px-4 py-3 mt-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#6e7780] placeholder-gray-400 transition"
            />
          </div>

          <div className="relative">
            <label className="font-medium text-gray-700">Password *</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="i bet you forget me in 5 mins"
              required
              className="w-full px-4 py-3 mt-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#6e7780] placeholder-gray-400 pr-10 transition"
            />
            {showPassword ? (
              <EyeSlashIcon
                className="size-4.5 absolute right-4 top-[68%] -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeIcon
                className="size-4.5 absolute right-4 top-[68%] -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <button
            type="submit"
            disabled={
              !form.username || !form.email || !form.password || loading
            }
            className={`w-full rounded-full py-3 mt-6 font-medium transition
              ${
                !form.username || !form.email || !form.password || loading
                  ? "bg-[#d4d6dc] text-gray-500 cursor-not-allowed"
                  : "bg-[#202124] text-white hover:bg-[#000000] cursor-pointer"
              }`}
          >
            {loading ? (
              <span className="flex items-center justify-center space-x-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Signing up...</span>
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-center text-[#6e7780] mt-10 md:text-base">
          Have an account?
          <Link to="/login" className="text-[#0ab39c] ml-1 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
