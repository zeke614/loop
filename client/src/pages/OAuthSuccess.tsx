import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function OAuthSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    const userParam = searchParams.get("user");
    const errorParam = searchParams.get("error");

    if (errorParam) {
      setError("OAuth authentication failed. Please try again.");
      setTimeout(() => navigate("/login"), 3000);
      return;
    }

    if (token && userParam) {
      try {
        const user = JSON.parse(decodeURIComponent(userParam));
        login(user, token);
        navigate("/");
      } catch (error) {
        console.error("Error parsing user data:", error);
        setError("Invalid authentication data. Please try again.");
        setTimeout(() => navigate("/login"), 3000);
      }
    } else {
      setError("Missing authentication data. Please try again.");
      setTimeout(() => navigate("/login"), 3000);
    }
  }, [searchParams, login, navigate]);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <p className="text-lg text-red-600">{error}</p>
          <p className="text-gray-500 mt-2">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
        <p className="mt-4 text-lg">Completing sign in...</p>
      </div>
    </div>
  );
}
