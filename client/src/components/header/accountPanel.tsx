import { Link } from "react-router-dom";
import {
  ArrowRightStartOnRectangleIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";

interface AccountPanelProps {
  user: { email: string; username?: string } | null;
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
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (profileOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Add overflow hidden to body
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        // Restore scrolling when modal closes
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [profileOpen]);

  return (
    <>
      <div
        onClick={() => setProfileOpen(false)}
        className={`fixed inset-0 z-40 transition-all duration-300
          ${
            profileOpen
              ? "bg-black/40 backdrop-blur-xs md:bg-transparent"
              : "bg-transparent pointer-events-none"
          }
          ${profileOpen ? "md:pointer-events-auto" : "md:pointer-events-none"}
        `}
      />

      <div
        className={`fixed bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl
        
          /* --- MOBILE (Default: Bottom Drawer) --- */
          bottom-0 left-0 w-full rounded-t-3xl max-h-[85vh] overflow-hidden
          flex flex-col
          
          /* Show/Hide for Mobile: Slide Up/Down */
          ${profileOpen ? "translate-y-0" : "translate-y-full"}

          /* --- DESKTOP (md: Dropdown Menu) --- */
          md:top-14 md:right-35 md:h-auto md:w-64 md:bottom-auto md:left-auto md:rounded-xl
          md:transition-opacity md:duration-200 md:ease-out
          md:max-h-none
          
          /* Show/Hide for Desktop: Opacity/Visibility */
          ${
            profileOpen
              ? "md:opacity-100 md:pointer-events-auto md:translate-y-0"
              : "md:opacity-0 md:pointer-events-none md:translate-y-2"
          }
        `}
        aria-hidden={!profileOpen}
      >
        <div className="w-10 h-[0.3rem] bg-black/20 rounded-full mx-auto mt-1.5" />

        <div className="flex flex-col items-center flex-shrink-0">
          {/* <div className="flex items-center w-full px-4 pt-2.5 md:hidden">
            <h3 className="text-[1.063rem] font-medium">My Account</h3>
          </div> */}

          <div className="hidden md:flex items-center gap-3 px-3.5 py-2.5 bg-gray-50 w-full rounded-lg border-b border-gray-100 flex-shrink-0">
            <UserIcon className="size-5 text-gray-700" />
            <span className="text-gray-900 font-medium text-[1.032rem]">
              My Account
            </span>
          </div>
        </div>

        <div className="py-1 md:text-sm flex-1 overflow-y-auto md:overflow-visible md:py-1 flex-shrink">
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

        <div className="flex-shrink-0">
          <div className="border-t border-gray-100 mx-4 md:hidden"></div>

          <div className="md:hidden">
            <p className="text-sm text-center text-[#6e7780] py-2 px-4">
              Signed in as <span className="font-medium">{user?.email}</span>
            </p>
          </div>

          <p className="hidden md:block py-2 text-xs w-full text-center text-[#6e7780] border-t border-gray-100 px-3">
            <span className="font-medium">{user?.email}</span>
          </p>
        </div>
      </div>
    </>
  );
}
