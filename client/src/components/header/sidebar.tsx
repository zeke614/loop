import { Link, useLocation } from "react-router-dom";
import navLinks from "../../constants/data";
import {
  ChevronRightIcon,
  XMarkIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

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
        className={`fixed top-0 left-0 h-full w-8/12 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={closeMenu} className="pr-2 pt-2 cursor-pointer">
            <XMarkIcon className="size-6" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full pb-10">
          <div className="flex flex-col mt-3">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={`block transition-transform duration-200 text-xl py-2.5 ${
                    isActive
                      ? "border-l-[0.188rem] border-black pl-3.5 font-bold"
                      : "pl-4 font-medium"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          <div>
            <Link
              to="/info"
              onClick={closeMenu}
              className="flex items-center justify-between mb-3.5 px-4"
            >
              <div className="flex items-center text-xl gap-2.5 font-medium">
                <InformationCircleIcon className="size-5.5" />
                <span>More</span>
              </div>
              <div className="flex items-center justify-between">
                <ChevronRightIcon className="size-5" />{" "}
              </div>
            </Link>

            <div className="pl-3.5 text-sm text-[#889397]">
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
