import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import DeleteAccountPopup from "../user/delete";

export default function PersonalDetails() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const togglePopUp = () => setPopUp((prev) => !prev);

  const handleDeleteAccount = () => {
    console.log("Account deleted");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setPopUp(false);
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-8 md:mx-auto bg-white pt-20">
      <div className="pl-1.5 pt-4 flex items-center">
        <Link
          to="/settings"
          className="text-gray-600 hover:text-black flex items-center gap-[0.188rem]"
        >
          <i className="bx  bx-arrow-in-left-square-half"></i>{" "}
          <span className="font-medium">Settings</span>
        </Link>
      </div>

      <div className="p-6 space-y-8">
        <h3 className="text-xl font-semibold">Personal details</h3>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p>Email</p>
            <p className="font-medium text-lg text-[#6e7780] truncate w-60 sm:w-80">
              {user.email || "—"}
            </p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx  bx-edit-alt"></i>
          </button>{" "}
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p>Password</p>
            <p className="font-medium text-lg text-[#6e7780]">
              ● ● ● ● ● ● ● ●
            </p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx  bx-edit-alt"></i>
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p>Display name</p>
            <p className="font-medium text-lg text-[#6e7780]">
              {user.displayName || "None added"}
            </p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx  bx-edit-alt"></i>
          </button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <div>
            <p>Country of residence</p>
            <p className="font-medium text-lg text-[#6e7780]">
              {user.country || "—"}
            </p>
          </div>
          <button className="text-black font-medium text-2xl">
            <i className="bx  bx-edit-alt"></i>
          </button>
        </div>

        <div className="pt-6 pb-10">
          <p className="font-semibold text-lg text-gray-900">Delete account</p>
          <button
            onClick={togglePopUp}
            className="font-semibold underline underline-offset-2 text-red-500 mt-1 cursor-pointer"
          >
            Delete my account
          </button>
        </div>
      </div>

      {popUp && (
        <DeleteAccountPopup
          togglePopUp={togglePopUp}
          handleDeleteAccount={handleDeleteAccount}
        />
      )}
    </div>
  );
}
