import { motion } from "framer-motion";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import {
  BookmarkSlashIcon,
  // CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface BookmarkPopupProps {
  type: "added" | "removed";
}

export default function BookmarkPopup({ type }: BookmarkPopupProps) {
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
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-sm"
    >
      <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
        <div className="bg-white px-3 py-2.5 flex items-center justify-center gap-3">
          {icon}
          <span className="font-medium text-[0.906rem]">{message}</span>
        </div>

        {type === "added" && (
          <div className="bg-white px-3 pb-2.5">
            <Link
              to={"/saved"}
              className="block w-full bg-[#0ab39c] hover:bg-[#129684] text-white text-center text-[0.906rem] font-medium py-1.5 rounded-full transition-colors"
            >
              View Bookmarks
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
