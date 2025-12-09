import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/authContext";
// import logo from "../../assets/imgs/loopLogo.png";
import {
  EyeIcon,
  EyeSlashIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";
// import ForgotPasswordModal from "./forgotPassword";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  // const [forgotOpen, setForgotOpen] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/users/login`, form, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.token && response.data.user) {
        login(response.data.user, response.data.token);
        navigate("/");
      } else {
        throw new Error("No token or user data received");
      }
    } catch (error: any) {
      if (error.code === "ECONNABORTED") {
        setErrorMessage("Request timeout - server is not responding");
      } else if (error.response) {
        setErrorMessage(
          error.response?.data?.message || "Sign-in failed. Please try again."
        );
      } else if (error.request) {
        setErrorMessage(
          "Cannot connect to server. Please check your connection."
        );
      } else {
        setErrorMessage("An unexpected error occurred.");
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
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md py-10 px-7">
        {/* <Link to="/" className="text-center block mb-6">
          <img src={logo} alt="loop logo" className="h-20 w-auto mx-auto" />
        </Link> */}

        <Link to="/">
          <HomeModernIcon className="size-5 mb-7" />
        </Link>

        <h1 className="text-2xl md:text-3xl text-center font-semibold mb-2">
          Sign in
        </h1>
        <p className="text-center text-[#6e7780] mb-8">
          Stay informed. Stay in the <strong>'loop'</strong>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage && (
            <p className="text-center text-[#e6044c] text-[0.938rem] mb-2">
              {errorMessage}
            </p>
          )}

          <div>
            {/* <label className="font-medium text-gray-700">Email *</label> */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-4 py-3 mt-1.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#6e7780] placeholder-gray-400 transition"
            />
          </div>

          <div className="relative">
            {/* <label className="font-medium text-gray-700">Password *</label> */}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full px-4 py-3 mt-1.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#6e7780] placeholder-gray-400 pr-10 transition"
            />
            {showPassword ? (
              <EyeSlashIcon
                className="size-5 absolute right-4 top-[59%] -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeIcon
                className="size-5 absolute right-4 top-[59%] -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <div className="flex items-center justify-between -mt-2 text-[0.938rem] px-1">
            <label className="flex items-center space-x-1.5 cursor-pointer">
              <input
                type="checkbox"
                className="accent-[#0ab39c] size-[0.8rem]"
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <Link to="/forgotPassword">
              <span className="text-[#0ab39c] font-medium cursor-pointer">
                Forgot Password?
              </span>
            </Link>
          </div>

          <button
            type="submit"
            disabled={!form.email || !form.password || loading}
            className={`w-full rounded-full py-3 mt-6 font-medium transition flex items-center justify-center
              ${
                !form.email || !form.password || loading
                  ? "bg-[#babcc0] text-gray-500 cursor-not-allowed"
                  : "bg-[#0ab39c] hover:bg-[#089c8a] text-white cursor-pointer"
              }`}
          >
            {loading ? (
              <span className="flex items-center space-x-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Signing in...</span>
              </span>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        <div className="flex items-center justify-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-3.5">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 w-full hover:bg-gray-50 transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="md:hidden">Continue with Google</span>
            <span className="hidden md:block">Google</span>
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
            <span className="md:hidden">Continue with GitHub</span>
            <span className="hidden md:block">Google</span>
          </button>
        </div>

        {/* <p className="pt-2 text-center text-[#6e7780]">
          By continuing, you're agreeing to our{" "}
          <Link to="/privacy" className="underline">
            Privacy Policy
          </Link>
        </p> */}

        <p className="text-center text-[#6e7780] mt-8">
          New here?
          <Link to="/register" className="text-[#0ab39c] ml-1 font-medium">
            Sign Up
          </Link>
        </p>
      </div>

      {/* <ForgotPasswordModal
        isOpen={forgotOpen}
        close={() => setForgotOpen(false)}
      /> */}
    </div>
  );
}
