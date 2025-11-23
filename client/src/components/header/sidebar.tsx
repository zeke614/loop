import { Link, useLocation } from "react-router-dom";
import navLinks from "../../constants/data";
import {
  XMarkIcon,
  ChevronRightIcon,
  InformationCircleIcon,
  HomeIcon,
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
  <i className={`bx bx-hourglass text-xl ${className}`}></i>
);

const iconMap: { [key: string]: React.ElementType } = {
  "Front Page": HomeIcon,
  "Genius & Folly": LightBulbIcon,
  "Human Currents": UserGroupIcon,
  "The Living Planet": GlobeEuropeAfricaIcon,
  "Money & Madness": BanknotesIcon,
  "Arena of Fame": TrophyIcon,
  "Time Capsule": HourglassIcon,
};

export default function Sidebar({ menuOpen, closeMenu }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 md:hidden"
        ></div>
      )}

      <nav
        className={`fixed top-0 left-0 h-full w-8/12 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden rounded-br-lg rounded-tr-lg ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={closeMenu} className="pr-3.5 pt-2 cursor-pointer">
            <XMarkIcon className="size-6 text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full pb-10">
          <div className="flex flex-col pt-3">
            {navLinks.map(
              ({ path, label }: { path: string; label: string }) => {
                const isActive = location.pathname === path;
                const IconComponent = iconMap[label];

                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 transition-colors duration-200 text-lg py-2.5 ${
                      isActive
                        ? "border-l-[0.188rem] border-black pl-[0.813rem] font-semibold text-black"
                        : "pl-4 font-medium text-gray-700 hover:text-black"
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent
                        className={`size-5 ${
                          isActive ? "text-black" : "text-gray-600"
                        }`}
                      />
                    )}
                    <span>{label}</span>
                  </Link>
                );
              }
            )}
          </div>

          <div>
            <Link
              to="/info"
              onClick={closeMenu}
              className="flex items-center justify-between mb-4 pl-4 pr-3.5"
            >
              <div className="flex items-center text-lg gap-3 font-medium text-gray-700 hover:text-black transition-colors">
                <InformationCircleIcon className="size-5" />
                <span>More</span>
              </div>
              <div className="flex items-center justify-between">
                <ChevronRightIcon className="size-5 text-gray-700" />{" "}
              </div>
            </Link>

            <div className="pl-4 text-sm text-[#889397]">
              <p className="space-x-1">
                <span>&copy;</span>
                <span>{new Date().getFullYear()}</span>
                <span className="font-bold text-black"> loop</span>
                <span> All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
