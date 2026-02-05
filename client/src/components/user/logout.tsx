import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.dispatchEvent(new Event("userStateChange"));
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="flex flex-col justify-center items-center h-[90vh] text-center
      px-6"
    >
      <h1 className="text-[1.375rem] font-frozen mb-4">Logging out...</h1>
      <span className="w-12 h-12 border-4 border-white border-t-[#04aa6d] rounded-full animate-spin mb-4"></span>
      <p className="text-[#6e7780] dark:text-[#d4d4d8]">
        You're being logged out from <span className="font-bold">loop</span>.
      </p>
    </div>
  );
}
