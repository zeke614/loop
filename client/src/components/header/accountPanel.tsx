import { Link } from "react-router-dom";
import {
  ArrowRightStartOnRectangleIcon,
  BookmarkIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
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
      <AnimatePresence>
        {profileOpen && (
          <motion.div
            onClick={() => setProfileOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-transparent"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {profileOpen && (
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="
              fixed top-16.5 md:top-19 right-6.5 md:right-29 z-50
              flex flex-col items-end gap-2
              text-[0.9375rem]
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
              <BookmarkIcon className="size-4.5" />
              Saved
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
              <Cog6ToothIcon className="size-4.5" />
              Settings
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
              <ArrowRightStartOnRectangleIcon className="size-4.5" />
              Sign Out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
