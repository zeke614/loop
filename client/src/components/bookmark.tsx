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
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {type === "added" ? (
              <BookmarkIcon className="size-5 text-[#0ab39c]" />
            ) : (
              <BookmarkSlashIcon className="size-5 text-gray-500" />
            )}
            <div>
              <p className="font-medium text-gray-800">{message}</p>
            </div>
          </div>
          {type === "added" && (
            <Link
              to="/saved"
              className="flex items-center text-[#0ab39c] font-medium cursor-pointer"
            >
              <p>View</p>
              <ChevronRightIcon />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
