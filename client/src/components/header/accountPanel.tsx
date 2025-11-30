import { Link } from "react-router-dom";
import {
  ArrowRightStartOnRectangleIcon,
  BookmarkIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
// import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AccountPanelProps {
  user: { email: string; username?: string } | null;
  profileOpen: boolean;
  setProfileOpen: (value: boolean) => void;
  handleSignOut: () => void;
}

export default function AccountPanel({
  // user,
  profileOpen,
  setProfileOpen,
  handleSignOut,
}: AccountPanelProps) {
  // useEffect(() => {
  //   if (profileOpen) {
  //     const scrollY = window.scrollY;
  //     document.body.style.overflow = "hidden";
  //     document.body.style.position = "fixed";
  //     document.body.style.top = `-${scrollY}px`;
  //     document.body.style.width = "100%";

  //     return () => {
  //       document.body.style.overflow = "";
  //       document.body.style.position = "";
  //       document.body.style.top = "";
  //       document.body.style.width = "";
  //       window.scrollTo(0, scrollY);
  //     };
  //   }
  // }, [profileOpen]);

  return (
    <>
      <div
        onClick={() => setProfileOpen(false)}
        className={`fixed inset-0 z-40 transition-all duration-300
          //  ${profileOpen ? "" : "bg-transparent pointer-events-none"}
        `}
      />

      <AnimatePresence>
        {profileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="
              fixed top-16 right-4 md:top-18 md:right-30 z-50
              flex flex-col items-end gap-3
            "
          >
            <Link
              to="/saved"
              onClick={() => setProfileOpen(false)}
              className="
                px-4 py-2 rounded-full 
                bg-black backdrop-blur-xl
                shadow-lg text-white
                flex items-center gap-2
              "
            >
              <BookmarkIcon className="size-5" /> Saved
            </Link>

            <Link
              to="/settings"
              onClick={() => setProfileOpen(false)}
              className="
                px-4 py-2 rounded-full 
                bg-black backdrop-blur-xl
                shadow-lg text-white
                flex items-center gap-2
              "
            >
              <Cog6ToothIcon className="size-5" /> Settings
            </Link>

            <button
              onClick={handleSignOut}
              className="
                px-4 py-2 rounded-full 
                bg-black backdrop-blur-xl
                shadow-lg text-red-500 font-medium 
                flex items-center gap-2
              "
            >
              <ArrowRightStartOnRectangleIcon className="size-5" />
              Sign Out
            </button>

            {/* <p className="text-white/70 text-sm mt-1 px-1">{user?.email}</p> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
