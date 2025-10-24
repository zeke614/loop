import { Link, useLocation } from "react-router-dom";
import navLinks from "../../constants/data";

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
        className={`fixed top-0 left-0 h-full w-[69%] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={closeMenu} className="pr-2 pt-2 cursor-pointer">
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>

        <div className="flex flex-col mt-4">
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

        <div className="px-3 mt-10 fixed text-sm bottom-0 w-full text-[#6e7780] pb-2">
          <p className="space-x-1">
            <span>&copy;</span>
            <span>{new Date().getFullYear()}</span>
            <span className="font-bold text-black"> loop</span>
            <span> All rights reserved.</span>
          </p>
        </div>
      </nav>
    </>
  );
}
