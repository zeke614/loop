import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import FrontPageArticlesCard from "../../components/articleCard";

const getFirstName = (user: any) => {
  if (!user) return "";

  if (user.firstName) {
    return user.firstName;
  }

  if (user.username) {
    return user.username;
  }

  if (user.email) {
    const emailPrefix = user.email.split("@")[0];

    const firstName = emailPrefix
      .replace(/[0-9._-]/g, " ")
      .split(" ")[0]
      .replace(/\b\w/g, (char: string) => char.toUpperCase());

    return firstName || user.email.split("@")[0];
  }

  return "";
};

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

  const displayName = getFirstName(user);

  return (
    <div className="py-10 mb-20">
      <h1 className="text-center text-2xl mt-8 font-medium">
        {user ? (
          <>
            <span>Hello, </span>
            <span className="font-semibold">{displayName}</span>
          </>
        ) : (
          "Welcome"
        )}
      </h1>

      <p className="text-center text-[#767676] text-lg">
        Your next great discovery starts below.
      </p>

      <FrontPageArticlesCard />
    </div>
  );
}
