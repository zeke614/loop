import { Link } from "react-router-dom";
import {
  ArrowRightStartOnRectangleIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface AccountPanelProps {
  user: any;
  profileOpen: boolean;
  setProfileOpen: (value: boolean) => void;
  handleSignOut: () => void;
}

export default function AccountPanel({
  user,
  profileOpen,
  setProfileOpen,
  handleSignOut,
}: AccountPanelProps) {
  return (
    <>
      <div
        className={`fixed bg-white z-50 transform transition-transform duration-300 ease-in-out pointer-events-auto shadow-xl
        
          /* --- MOBILE (Default: Bottom Drawer) --- */
          bottom-0 left-0 w-full rounded-t-3xl
          
          /* Show/Hide for Mobile: Slide Up/Down */
          ${profileOpen ? "translate-y-0" : "translate-y-full"}

          /* --- DESKTOP (md: Dropdown Menu) --- */
          md:top-14 md:right-35 md:h-auto md:w-64 md:bottom-auto md:left-auto md:rounded-xl
          md:transition-opacity md:duration-100 md:ease-out
          
          /* Show/Hide for Desktop: Opacity/Visibility */
          ${
            profileOpen
              ? "md:opacity-100 md:pointer-events-auto"
              : "md:opacity-0 md:pointer-events-none"
          }
        `}
        aria-hidden={!profileOpen}
      >
        <div className="flex flex-col items-center">
          <div className="flex justify-between items-center w-full px-4 pt-3.5 md:hidden">
            <h3 className="text-[1.063rem] font-medium">My Account</h3>
          </div>

          <div className="hidden md:flex items-center gap-3 px-3.5 py-2.5 bg-gray-50 w-full rounded-lg border-b border-gray-100">
            <UserIcon className="size-5 text-gray-700" />
            <span className="text-gray-900 font-medium text-[1.032rem]">
              My Account
            </span>
          </div>
        </div>

        <div className="py-1 md:text-sm flex-1 overflow-auto md:py-1">
          <Link
            to="/saved"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2 md:py-2 rounded-md hover:bg-gray-100 transition"
          >
            <BookmarkIcon className="size-5" /> <span>Saved</span>
          </Link>

          <Link
            to="/settings"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-3 px-3.5 py-2 md:py-2 rounded-md hover:bg-gray-100 transition"
          >
            <Cog6ToothIcon className="size-5" /> <span>Settings</span>
          </Link>

          <button
            onClick={handleSignOut}
            className="w-full text-left flex items-center gap-3 px-3.5 py-2 md:py-2 rounded-md hover:bg-gray-100 transition cursor-pointer text-red-600"
          >
            <ArrowRightStartOnRectangleIcon className="size-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>

        <div className="border border-gray-100 mx-4 md:hidden"></div>

        <div className="md:hidden">
          <p className="text-sm text-center text-[#6e7780] py-1.5">
            Signed in as <span className="font-medium">{user?.email}</span>
          </p>
        </div>

        <p className="hidden md:block py-2 text-xs w-full text-center text-[#6e7780] border-t border-gray-100">
          <span className="font-medium">{user?.email}</span>
        </p>
      </div>

      {profileOpen && (
        <div
          onClick={() => setProfileOpen(false)}
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs
            md:bg-transparent
          `}
        ></div>
      )}
    </>
  );
}
