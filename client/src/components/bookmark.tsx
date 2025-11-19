// import { motion, AnimatePresence } from "framer-motion";
// import { BookmarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function BookmarkPopup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-sm"
    >
      <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">
        <div className="bg-white px-4 py-2.5 flex items-center gap-3">
          <BookmarkIcon className="size-6 text-[#0ab39c]" />{" "}
          <span className="font-medium">Article added to your Bookmarks</span>
        </div>

        <div className="bg-white px-4 pb-2.5">
          <Link
            to={"/saved"}
            className="block w-full bg-[#0ab39c] hover:bg-[#129684] text-white text-center font-medium py-1.5 rounded-full transition-colors"
          >
            View Bookmarks
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
