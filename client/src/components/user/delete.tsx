import { motion, AnimatePresence } from "framer-motion";

interface DeleteAccountPopupProps {
  togglePopUp: () => void;
  handleDeleteAccount: () => void;
}

export default function DeleteAccountPopup({
  togglePopUp,
  handleDeleteAccount,
}: DeleteAccountPopupProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg max-w-sm w-3/4 text-center"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 20,
            transition: { duration: 0.2 },
          }}
        >
          <i className="bx bx-trash text-2xl text-red-500 mb-4"></i>
          <h3 className="text-lg font-semibold text-gray-900 mb-10">
            Are you sure?
          </h3>
          <p className="text-gray-600 text-sm mb-3">
            This action cannot be undone! <br /> Your account and data will be
            deleted.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDeleteAccount}
              className="bg-red-500 text-white px-4 py-1.5 rounded-xl font-medium hover:bg-red-600 transition cursor-pointer"
            >
              Yes, delete
            </button>
            <button
              onClick={togglePopUp}
              className="bg-gray-200 text-gray-800 px-4 py-1.5 rounded-xl font-medium hover:bg-gray-300 transition cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
