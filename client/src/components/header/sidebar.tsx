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
        className={`fixed top-0 left-0 h-full w-[63%] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={closeMenu} className="pr-2 pt-2 cursor-pointer">
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>

        <div className="flex flex-col justify-between h-full pb-12">
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
              className="flex items-center justify-between mb-3 px-4"
            >
              <div className="flex items-center text-xl gap-2.5 font-medium">
                <i className="bx bx-info-circle"></i>
                <span>More</span>
              </div>
              <div className="flex items-center text-2xl">
                <i className="bx  bx-chevron-right"></i>
              </div>
            </Link>

            <div className="pl-3.5 text-sm text-[#6e7780]">
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
