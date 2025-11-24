import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";
import DeleteAccountPopup from "../user/delete";
import DeleteSuccessPopup from "../user/deleteSuccess";
import { getCountryName } from "../../constants/data";
import {
  ArrowLeftIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function PersonalDetails() {
  const [user, setUser] = useState<any>(null);
  const [, setLoading] = useState(true);
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // Add this state
  const [isDeleting, setIsDeleting] = useState(false);
  const { logout, token } = useAuth();
  const ipInfoToken = import.meta.env.VITE_IPINFO_TOKEN;
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

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

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      await axios.delete(`${API_URL}/api/users/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setPopUp(false);
      setShowSuccess(true);

      setTimeout(() => {
        logout();
        window.location.href = "/";
      }, 3000);
    } catch (error: any) {
      console.error("Account deletion failed:", error);
      alert(
        error.response?.data?.message ||
          "Failed to delete account. Please try again."
      );
      setIsDeleting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    logout();
    window.location.href = "/";
  };

  if (!user) return null;

  return (
    <div className="min-h-screen py-25 md:pt-40 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <Link
            to="/settings"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeftIcon className="size-4 mr-2" />
            Back to Settings
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Personal Details</h1>
          <p className="mt-2 text-gray-500">
            Manage your profile information and account preferences.
          </p>
        </div>

        <div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 mb-1">
              Email Address
            </p>
            <p className="text-base font-semibold text-gray-900">
              {user.email || "—"}
            </p>
          </div>
          <button className="p-2 text-gray-400 hover:text-[#0ab39c] hover:bg-[#0ab39c]/10 rounded-full transition-all opacity-100  md:group-hover:opacity-100 focus:opacity-100">
            <PencilSquareIcon className="size-5" />
          </button>
        </div>

        <div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 mb-1">Password</p>
            <p className="text-base font-semibold text-gray-900 tracking-widest">
              ●●●●●●●●
            </p>
          </div>
          <button className="p-2 text-gray-400 hover:text-[#0ab39c] hover:bg-[#0ab39c]/10 rounded-full transition-all opacity-100  md:group-hover:opacity-100 focus:opacity-100">
            <PencilSquareIcon className="size-5" />
          </button>
        </div>

        <div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 mb-1">
              Display Name
            </p>
            <p className="text-base font-semibold text-gray-900">
              {user.username || "None added"}
            </p>
          </div>
          <button className="p-2 text-gray-400 hover:text-[#0ab39c] hover:bg-[#0ab39c]/10 rounded-full transition-all opacity-100  md:group-hover:opacity-100 focus:opacity-100">
            <PencilSquareIcon className="size-5" />
          </button>
        </div>

        <div className="flex items-center justify-between py-5">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 mb-1">
              Country of Residence
            </p>
            <p className="text-base font-semibold text-gray-900">
              {user.country || "Fetching..."}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900">Danger Zone</h3>
        <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-medium text-gray-900">Delete Account</p>
            <p className="text-sm text-gray-500 mt-1">
              Permanently remove your profile and all data.
            </p>
          </div>
          <button
            onClick={togglePopUp}
            className="flex items-center justify-center gap-2.5 px-4 py-2.5 bg-white border border-red-200 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors text-sm whitespace-nowrap"
          >
            <span>
              <TrashIcon className="size-5" />
            </span>
            Delete Account
          </button>
        </div>
      </div>

      {popUp && (
        <DeleteAccountPopup
          togglePopUp={togglePopUp}
          handleDeleteAccount={handleDeleteAccount}
          isDeleting={isDeleting}
        />
      )}

      <DeleteSuccessPopup
        isVisible={showSuccess}
        onClose={handleSuccessClose}
      />
    </div>
  );
}
