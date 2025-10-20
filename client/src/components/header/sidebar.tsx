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
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        ></div>
      )}

      <nav
        className={`fixed top-0 left-0 h-full w-[70%] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={closeMenu} className="px-4 pt-3 cursor-pointer">
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>

        <div className="flex flex-col px-4 mt-5">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                onClick={closeMenu}
                className={`block transition-transform duration-200 text-xl py-2.5 ${
                  isActive
                    ? "border-l-[3px] border-black pl-2 font-extrabold"
                    : "pl-3 font-semibold"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="px-4 mt-10 fixed bottom-0 w-full text-[#6e7780] pb-3">
          <p className="space-x-1 text-center">
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
