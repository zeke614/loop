import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface DeleteSuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function DeleteSuccessPopup({
  isVisible,
  onClose,
}: DeleteSuccessPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white py-6 px-8 rounded-2xl shadow-lg max-w-sm w-[80%] text-center"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: -50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: -50,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.2,
                },
              }}
            >
              <CheckCircleIcon className="size-12 text-[#0ab39c] mx-auto mb-4" />
            </motion.div>

            <motion.h3
              className="text-[1.375rem] font-frozen text-gray-900 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2 },
              }}
            >
              Account Deleted
            </motion.h3>

            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3 },
              }}
            >
              Account successfully deleted. <br />
              Redirecting to the home page...
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.4 },
              }}
            >
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                <motion.div
                  className="bg-[#0ab39c] h-1.5 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{
                    width: "100%",
                    transition: {
                      duration: 2.8,
                      ease: "linear",
                    },
                  }}
                  onAnimationComplete={onClose}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
