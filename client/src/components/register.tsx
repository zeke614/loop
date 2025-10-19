import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Signing up...");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      setMessage(res.data.message || "Registration successful!");
      setForm({ username: "", email: "", password: "" });
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="
        flex flex-col justify-center items-center
        min-h-screen px-6 sm:px-10 md:px-16 lg:px-20
        bg-white
      "
    >
      <div className="w-full max-w-md">
        <h1 className="text-2xl md:text-3xl text-center font-semibold mb-3">
          Create your account
        </h1>
        <p className="text-center text-[#6e7780] mb-10 text-sm md:text-base">
          Join Loop and get news that matters to you.
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
          <span className="mx-3 text-gray-500 text-sm">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Username *
            </label>
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
            <label className="text-sm font-medium text-gray-700">Email *</label>
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
            <label className="text-sm font-medium text-gray-700">
              Password *
            </label>
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

          {/* <label className="flex items-center space-x-2 ml-2 mt-2 text-sm md:text-base">
            <input type="checkbox" className="accent-[#239276]" required />
            <span className="text-[#6e7780]">
              I agree to all Terms & Privacy Policy
            </span>
          </label> */}

          <button
            type="submit"
            className="
              w-full bg-[#202124] text-white rounded-full py-3 mt-10 font-medium
              hover:bg-[#000000] transition cursor-pointer
            "
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p className="text-center text-sm mt-4 text-[#6e7780]">{message}</p>
        )}

        <p className="text-center text-[#6e7780] mt-6 text-sm md:text-base">
          Already have an account?
          <Link to="/login" className="text-[#04aa6d] ml-1 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
