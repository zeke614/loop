import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// import { useEffect } from "react";
import navLinks from "../../constants/data";
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
  "Genius & Folly": LightBulbIcon,
  "Human Currents": UserGroupIcon,
  "The Living Planet": GlobeEuropeAfricaIcon,
  "Money & Madness": BanknotesIcon,
  "Arena of Fame": TrophyIcon,
  "Time Capsule": HourglassIcon,
};

export default function Sidebar({ menuOpen, closeMenu }: SidebarProps) {
  const location = useLocation();

  // // Prevent background scrolling when sidebar is open
  // useEffect(() => {
  //   if (menuOpen) {
  //     const scrollY = window.scrollY;

  //     document.body.style.overflow = "hidden";
  //     document.body.style.position = "fixed";
  //     document.body.style.top = `-${scrollY}px`;
  //     document.body.style.width = "100%";

  //     return () => {
  //       document.body.style.overflow = "";
  //       document.body.style.position = "";
  //       document.body.style.top = "";
  //       document.body.style.width = "";
  //       window.scrollTo(0, scrollY);
  //     };
  //   }
  // }, [menuOpen]);

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
              fixed left-4 top-16 
              w-[55%] max-w-sm max-h-[60vh]
              z-50 md:hidden 
              rounded-xl shadow-xl overflow-y-auto
              backdrop-blur-xl bg-white
            "
          >
            <div className="flex flex-col justify-between h-full py-1.5">
              <div className="flex flex-col pt-2">
                {navLinks.map(({ path, label }: any) => {
                  const isActive = location.pathname === path;
                  const IconComponent = iconMap[label];

                  return (
                    <Link
                      key={path}
                      to={path}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 py-3 text-[1.063rem] transition-colors ${
                        isActive
                          ? "border-l-4 border-black pl-3 font-semibold text-black"
                          : "pl-3.5 font-medium text-gray-700"
                      }`}
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`size-5 ${
                            isActive ? "text-black" : "text-gray-700"
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
                  className="flex items-center justify-between mb-4 pl-4 text-gray-700 transition-colors"
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
