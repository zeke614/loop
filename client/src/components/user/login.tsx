import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      console.log("Attempting login to:", `${API_URL}/api/users/login`);

      const response = await axios.post(`${API_URL}/api/users/login`, form, {
        headers: { "Content-Type": "application/json" },
        timeout: 10000,
      });

      console.log("Login response:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        throw new Error("No token received");
      }
    } catch (error: any) {
      console.error("Login error details:", error);

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
    console.log("Google login clicked");
  };

  return (
    <div
      className="
        flex flex-col justify-center items-center 
        min-h-screen my-10 px-6 sm:px-10 md:px-16 lg:px-20
        bg-white
      "
    >
      <div className="w-full max-w-md">
        <h1 className="text-2xl md:text-3xl text-center font-semibold mb-3">
          Sign in
        </h1>
        <p className="text-center text-[#6e7780] mb-10">
          Stay informed. Stay in the 'loop'.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMessage && (
            <p className="text-center text-red-500 font-medium">
              {errorMessage}
            </p>
          )}

          <div>
            <label className="font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="
                w-full px-4 py-3 mt-1.5 rounded-full border border-gray-300 
                focus:outline-none focus:border-[#6e7780] placeholder-gray-400
                transition
              "
            />
          </div>

          <div className="relative">
            <label className="font-medium text-gray-700">Password *</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="
                w-full px-4 py-3 mt-1.5 rounded-full border border-gray-300 
                focus:outline-none focus:border-[#6e7780] placeholder-gray-400 pr-10
                transition
              "
            />
            <i
              className={`bx ${
                showPassword ? "bx-eye-slash" : "bx-eye"
              } absolute right-4 top-[68%] -translate-y-1/2 text-xl cursor-pointer`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <div className="flex items-center justify-between mt-3 mx-1">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-[#04aa6d]" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-[#04aa6d] font-medium">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={!form.email || !form.password || loading}
            className={`
              w-full rounded-full py-3 mt-6 font-medium transition flex items-center justify-center
              ${
                !form.email || !form.password || loading
                  ? "bg-[#d4d6dc] text-gray-500 cursor-not-allowed"
                  : "bg-[#202124] text-white hover:bg-[#000000] cursor-pointer"
              }
            `}
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

        <div className="flex items-center justify-center my-6 mx-10">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">Or login with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 w-full hover:bg-gray-50 transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Google</span>
          </button>

          <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 w-full hover:bg-gray-50 transition cursor-pointer">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            <span>Apple</span>
          </button>
        </div>

        <p className="text-center text-[#6e7780] mt-6">
          New here?
          <Link to="/register" className="text-[#04aa6d] ml-1 font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
