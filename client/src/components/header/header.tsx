import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navLinks from "../../constants/data";
import Sidebar from "../header/sidebar";
import AccountPanel from "../header/accountPanel";
import { useAuth } from "../../contexts/authContext";
import logo from "../../assets/imgs/loopLogo.png";
import { UserIcon as UserSolid } from "@heroicons/react/24/solid";
import { UserIcon as UserOutline } from "@heroicons/react/24/outline";
// import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((s) => !s);
  const toggleProfile = () => setProfileOpen((s) => !s);

  const handleSignOut = () => {
    logout();
    setProfileOpen(false);
    navigate("/logout");
  };

  return (
    <header className="bg-white text-black shadow-2xs fixed top-0 left-0 w-full z-50">
      <div
        className="max-w-6xl mx-auto flex items-center justify-between 
               px-3.5 border-b border-b-[#928f8f1f] md:h-16"
      >
        <button
          onClick={toggleMenu}
          aria-label="close button"
          className="flex items-center justify-center cursor-pointer md:hidden"
        >
          <i className="bx bx-menu-left text-2xl"></i>
        </button>

        <Link
          to="/"
          className={`text-[1.688rem] font-bold ${
            user ? "pl-4" : "pl-10"
          } md:p-0`}
        >
          <img src={logo} alt="loop logo" className="h-12 w-auto text-black" />{" "}
        </Link>

        <div className="flex items-center space-x-10">
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-[1.063rem] ${
                  location.pathname === path ? "font-semibold" : "font-medium"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {!user ? (
            <Link
              to="/login"
              className="flex items-center justify-center space-x-1"
            >
              <UserOutline className="size-[1.063rem]" />
              <span className="text-[1.063rem]">Sign In</span>
            </Link>
          ) : (
            <button
              onClick={toggleProfile}
              aria-label="Open profile"
              className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-gray-100"
            >
              <UserSolid className="size-6" />
            </button>
          )}
        </div>
      </div>
      <Sidebar menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
      <AccountPanel
        user={user}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
        handleSignOut={handleSignOut}
      />
    </header>
  );
}
