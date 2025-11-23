import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { BookmarkSlashIcon } from "@heroicons/react/24/outline";
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popUpShows, closeMenu]);

  const message =
    type === "added"
      ? "Article added to your Bookmarks"
      : "Article removed from Bookmarks";

  const icon =
    type === "added" ? (
      <BookmarkIcon className="size-4.5 text-[#0ab39c]" />
    ) : (
      <BookmarkSlashIcon className="size-4.5" />
    );

  return (
    <motion.div
      ref={popupRef}
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm p-2"
    >
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
        <div className="bg-white px-3 py-1.5 flex items-center justify-center gap-3">
          {icon}
          <span className="font-medium text-[0.906rem]">{message}</span>
        </div>

        {type === "added" && (
          <div className="bg-white px-3">
            <Link
              to={"/saved"}
              className="block w-full bg-[#0ab39c] hover:bg-[#129684] text-white text-center text-[0.906rem] font-medium py-1 rounded-full transition-colors"
            >
              View Bookmarks
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
