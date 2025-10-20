import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      await axios.post(`${API_BASE_URL}/api/auth/register`, {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      setForm({ username: "", email: "", password: "" });
      navigate("/");
    } catch (err: any) {
      setErrorMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        flex flex-col justify-center items-center
        min-h-screen px-6 mt-8 md:my-14 sm:px-10 md:px-16 lg:px-20
        bg-white
      "
    >
      <div className="w-full max-w-md">
        <h1 className="text-2xl md:text-3xl text-center font-semibold mb-3">
          Create your account
        </h1>
        <p className="text-center text-[#6e7780] mb-10 md:text-base">
          Join Loop — dive into stories that spark <br /> curiosity and
          conversation.{" "}
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-3">
          <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 w-full hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Log in with Google</span>
          </button>

          <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 w-full hover:bg-gray-50 transition">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            <span>Log in with Apple</span>
          </button>
        </div>

        <div className="flex items-center justify-center my-6 mx-10">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="font-medium text-gray-700">Username *</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="
                w-full px-4 py-3 mt-2 rounded-full border border-gray-300
                focus:outline-none focus:border-[#6e7780] placeholder-gray-400
                transition
              "
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="
                w-full px-4 py-3 mt-2 rounded-full border border-gray-300
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
              placeholder="Password"
              required
              className="
                w-full px-4 py-3 mt-2 rounded-full border border-gray-300
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

          <button
            type="submit"
            disabled={loading}
            className="
              w-full bg-[#202124] text-white rounded-full py-3 mt-10 font-medium
              hover:bg-[#000000] transition cursor-pointer disabled:opacity-70
            "
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

        {errorMessage && (
          <p className="text-center text-sm mt-4 text-red-500">
            {errorMessage}
          </p>
        )}

        <p className="text-center text-[#6e7780] mt-6 md:text-base">
          Already have an account?
          <Link to="/login" className="text-[#04aa6d] ml-1 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
