import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalDetails() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-8 md:mx-auto bg-white mt-6">
      <div className="p-4 flex items-center">
        <button
          onClick={() => navigate("/settings")}
          className="text-gray-600 hover:text-black flex items-center gap-[0.188rem]"
        >
          <i className="bx  bx-arrow-in-left-square-half"></i>{" "}
          <span className="font-medium">Settings</span>
        </button>
      </div>

      <div className="p-6 space-y-8">
        <h3 className="text-xl font-semibold">Personal details</h3>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p className="text-gray-600">Email</p>
            <p className="font-semibold text-gray-900 truncate w-60 sm:w-80">
              {user.email || "—"}
            </p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx  bx-edit-alt"></i>
          </button>{" "}
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p className="text-gray-600">Password</p>
            <p className="font-semibold text-gray-900">● ● ● ● ● ●</p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx  bx-edit-alt"></i>
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p className="text-gray-600">Display name</p>
            <p className="font-medium text-gray-900">
              {user.displayName || "—"}
            </p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx  bx-edit-alt"></i>
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p className="text-gray-600">Country of residence</p>
            <p className="font-medium text-gray-900">{user.country || "—"}</p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx  bx-edit-alt"></i>
          </button>
        </div>

        <div className="pt-6">
          <p className="font-semibold text-lg text-gray-900">
            Delete your account
          </p>
          <button className="font-semibold underline underline-offset-2 text-red-500 mt-1">
            I want to delete my account
          </button>
        </div>
      </div>
    </div>
  );
}
