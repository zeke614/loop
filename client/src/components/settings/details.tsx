import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DeleteAccountPopup from "../user/delete";
import { getCountryName } from "../../constants/data";

export default function PersonalDetails() {
  const [user, setUser] = useState<any>(null);
  const [, setLoading] = useState(true);
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const ipInfoToken = import.meta.env.VITE_IPINFO_TOKEN;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);

      if (!userData.country) {
        fetchUserCountry(userData);
      } else {
        setLoading(false);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchUserCountry = async (userData: any) => {
    try {
      const response = await fetch(
        `https://ipinfo.io/json?token=${ipInfoToken}`
      );
      const ipData = await response.json();

      if (ipData.country) {
        const countryName = getCountryName(ipData.country);

        const updatedUser = {
          ...userData,
          country: countryName,
        };

        setUser(updatedUser);

        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error("Failed to fetch country data:", error);
    } finally {
      setLoading(false);
    }
  };

  const togglePopUp = () => setPopUp((prev) => !prev);

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-6 md:mx-auto bg-white pt-20">
      <div className="pt-4 flex items-center">
        <Link
          to="/settings"
          className="text-gray-600 hover:text-black flex items-center gap-[0.188rem]"
        >
          <i className="bx bx-arrow-in-left-square-half"></i>
          <span className="font-medium">Settings</span>
        </Link>
      </div>

      <div className="px-4 py-6 space-y-8">
        <h3 className="text-xl font-semibold">Personal details</h3>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p>Email</p>
            <p className="font-medium text-lg text-[#6e7780] truncate w-60 sm:w-80">
              {user.email || "—"}
            </p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx bx-edit-alt"></i>
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p>Password</p>
            <p className="font-medium text-lg text-[#6e7780]">
              ● ● ● ● ● ● ● ●
            </p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx bx-edit-alt"></i>
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p>Display name</p>
            <p className="font-medium text-lg text-[#6e7780]">
              {user.username || "None added"}
            </p>
          </div>
          <button className="text-black font-medium text-lg">
            {user.username ? (
              <i className="bx bx-edit-alt text-2xl"></i>
            ) : (
              "Add"
            )}
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p>Country of residence</p>
            <p className="font-medium text-lg text-[#6e7780]">
              {user.country || "Fetching..."}
            </p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx bx-edit-alt"></i>
          </button>
        </div>

        <div className="pt-6 pb-10">
          <p className="font-semibold text-lg text-gray-900">
            Delete your account
          </p>
          <button
            onClick={togglePopUp}
            className="font-semibold underline underline-offset-2 text-red-500 mt-1 cursor-pointer"
          >
            Remove your profile and information
          </button>
        </div>
      </div>

      {popUp && (
        <DeleteAccountPopup
          togglePopUp={togglePopUp}
          handleDeleteAccount={() =>
            console.log("Delete button pressed (UI only)")
          }
        />
      )}
    </div>
  );
}
