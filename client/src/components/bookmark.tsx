import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import {
  BookmarkSlashIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface BookmarkPopupProps {
  type: "added" | "removed";
  popUpShows: boolean;
  closeMenu: () => void;
}

export default function BookmarkPopup({
  type,
  popUpShows,
  closeMenu,
}: BookmarkPopupProps) {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!popUpShows) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popUpShows, closeMenu]);

  const message = type === "added" ? "Saved" : "Removed from bookmarks";

  return (
    <motion.div
      ref={popupRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[97.5%] max-w-md px-4"
    >
      <motion.div
        initial={{
          backdropFilter: "blur(0px)",
          backgroundColor: "rgba(30,30,30,0)",
        }}
        animate={{
          backdropFilter: "blur(16px)",
          backgroundColor: "rgba(30,30,30,0.35)",
        }}
        transition={{ duration: 0.1 }}
        className="
          border border-white/20
          rounded-2xl
          shadow-lg
          p-4
          flex items-center justify-between
          relative
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl" />

        <div className="flex items-center gap-3 relative z-10">
          {type === "added" ? (
            <BookmarkIcon className="size-5 text-[#0ab39c]" />
          ) : (
            <BookmarkSlashIcon className="size-5 text-white" />
          )}
          <p className="font-medium text-white drop-shadow-sm">{message}</p>
        </div>

        {type === "added" && (
          <Link
            to="/saved"
            className="flex items-center gap-1 text-white font-medium hover:text-[#0ab39c] transition-colors relative z-10"
          >
            <p className="drop-shadow-sm">View</p>
            <ChevronRightIcon className="w-5 h-5 drop-shadow-sm" />
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
}
