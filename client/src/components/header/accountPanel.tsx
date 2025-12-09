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
  profileOpen,
  setProfileOpen,
  handleSignOut,
}: AccountPanelProps) {
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
              fixed top-16.5 right-4 md:top-19 md:right-12 z-50
              flex flex-col items-end gap-2.5
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
                bg-red-500 backdrop-blur-xl
                shadow-lg text-white font-medium 
                flex items-center gap-2 cursor-pointer
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
