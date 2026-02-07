import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// import { useEffect } from "react";
import navLinks from "../../data/data";
import {
  // XMarkIcon,
  // ChevronRightIcon,
  InformationCircleIcon,
  HomeModernIcon,
  LightBulbIcon,
  UserGroupIcon,
  GlobeEuropeAfricaIcon,
  BanknotesIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

const HourglassIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 22h14" />
    <path d="M5 2h14" />
    <path d="M17 22v-4.5a1 1 0 0 0-.3-.7l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 0 .3-.7V2" />
    <path d="M7 2v4.5a1 1 0 0 0 .3.7l4 4a1 1 0 1 1 0 1.4l-4 4a1 1 0 0 0-.3.7V22" />
  </svg>
);

const iconMap: { [key: string]: React.ElementType } = {
  "Front Page": HomeModernIcon,
  "Genius and Folly": LightBulbIcon,
  "Human Currents": UserGroupIcon,
  "The Living Planet": GlobeEuropeAfricaIcon,
  "Money and Madness": BanknotesIcon,
  "Arena of Fame": TrophyIcon,
  "Time Capsule": HourglassIcon,
};

export default function Sidebar({ menuOpen, closeMenu }: SidebarProps) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMenu}
            className="fixed inset-0 z-40 md:hidden"
          />

          <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="
              fixed left-5.5 top-16.5 w-fit
               max-w-sm max-h-[60vh]
              z-50 md:hidden 
              rounded-xl shadow-xl overflow-y-auto
              backdrop-blur-xl
            "
          >
            <div className="flex flex-col justify-between h-full py-2 bg-white dark:bg-transparent">
              <div className="flex flex-col">
                {navLinks.map(({ path, label }: any) => {
                  const isActive = location.pathname === path;
                  const IconComponent = iconMap[label];

                  return (
                    <Link
                      key={path}
                      to={path}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 py-2.5 text-[1.063rem] transition-colors ${
                        isActive
                          ? "border-l-4 px-2.5 font-bold"
                          : "px-3.5 font-medium text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`size-5 ${
                            isActive ? "" : "text-gray-700 dark:text-gray-300"
                          }`}
                        />
                      )}
                      <span>{label}</span>
                    </Link>
                  );
                })}
              </div>

              <div>
                <Link
                  to="/info"
                  onClick={closeMenu}
                  className="flex items-center justify-between py-3 pl-4 dark:text-gray-300 text-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3 text-[1.063rem] font-medium">
                    <InformationCircleIcon className="size-5" />
                    <span>More</span>
                  </div>
                </Link>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
