import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE_URL}/api/auth/login`, form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      window.dispatchEvent(new Event("userStateChange"));

      navigate("/");
    } catch (err: any) {
      alert(err.response?.data?.message || "Invalid credentials");
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${API_BASE_URL}/api/auth/google`;
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
              } absolute right-4 top-[68%] -translate-y-1/2 text-gray-500 text-xl cursor-pointer`}
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
            disabled={loading}
            className="
              w-full bg-[#202124] text-white rounded-full py-3 mt-6 
              font-medium hover:bg-[#000000] transition flex items-center cursor-pointer justify-center
            "
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
            className="flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 w-full hover:bg-gray-50 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Google</span>
          </button>

          <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 w-full hover:bg-gray-50 transition">
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
