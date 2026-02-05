import { motion, AnimatePresence } from "framer-motion";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

interface DeleteAccountPopupProps {
  togglePopUp: () => void;
  handleDeleteAccount: () => void;
  isDeleting?: boolean;
}

export default function DeleteAccountPopup({
  togglePopUp,
  handleDeleteAccount,
  isDeleting = false,
}: DeleteAccountPopupProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="p-5 rounded-2xl shadow-lg max-w-sm w-[80%] text-center border border-zinc-950/10 dark:border-white/15"
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 200,
            transition: { type: "spring", stiffness: 300, damping: 12 },
          }}
          exit={{
            opacity: 0,
            y: -100,
            transition: { duration: 0.2 },
          }}
        >
          <ExclamationTriangleIcon className="size-8 text-red-500 mb-3.5 mx-auto" />
          <h3 className="text-lg font-frozen text-gray-900 dark:text-white mb-7">
            Are you sure?
          </h3>
          <p className="text-gray-600 dark:text-[#d4d4d8] mb-4.5">
            This action cannot be undone! <br /> Your account will be deleted.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDeleteAccount}
              disabled={isDeleting}
              className="bg-red-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-red-600 transition cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed flex items-center gap-2 min-w-20 justify-center"
            >
              {isDeleting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Deleting...
                </>
              ) : (
                "Yes, delete"
              )}
            </button>
            <button
              onClick={togglePopUp}
              disabled={isDeleting}
              className="bg-gray-200 dark:bg-[#d1d1d1] text-gray-800 dark:text-black px-4 py-1.5 rounded-lg font-medium hover:bg-gray-300 transition cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
