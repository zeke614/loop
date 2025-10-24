import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, login } = useAuth();

  useEffect(() => {
    const token = searchParams.get("token");
    const userParam = searchParams.get("user");
    const oauthSuccess = searchParams.get("oauth");

    if (oauthSuccess === "success" && token && userParam) {
      console.log("OAuth redirect detected on home page");

      try {
        const user = JSON.parse(decodeURIComponent(userParam));
        console.log("OAuth login:", user.email);

        login(user, token);

        searchParams.delete("token");
        searchParams.delete("user");
        searchParams.delete("oauth");
        setSearchParams(searchParams);

        console.log("OAuth login completed successfully");
      } catch (error) {
        console.error("OAuth login error:", error);

        searchParams.delete("token");
        searchParams.delete("user");
        searchParams.delete("oauth");
        setSearchParams(searchParams);
      }
    }
  }, [searchParams, setSearchParams, login]);
  return (
    <div className="py-10">
      <h1 className="text-center text-2xl mt-12 font-medium">
        {user ? `Welcome, ${user.username}` : "Welcome"}
      </h1>{" "}
    </div>
  );
}
