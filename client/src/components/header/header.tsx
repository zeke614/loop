import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navLinks from "../../constants/data";
import Sidebar from "../header/sidebar";
import AccountPanel from "../header/accountPanel";
import { useAuth } from "../../contexts/authContext";
// import logo from "../../assets/imgs/loopLogo.avif";
import { UserIcon as UserSolid } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent mt-0.5">
      <div
        className="max-w-7xl md:mx-auto sm:mx-3 mx-[1.428rem] rounded-full
               bg-white/15 backdrop-filter backdrop-blur-sm
               border border-black/5 shadow-md
               flex items-center justify-between
               px-3.5 py-2.5 sm:px-6"
      >
        <button
          onClick={toggleMenu}
          aria-label="menu button"
          className="flex items-center justify-center cursor-pointer md:hidden"
        >
          {!menuOpen ? (
            <Bars3Icon className="size-6" />
          ) : (
            <XMarkIcon className="size-6" />
          )}
        </button>

        <Link
          to="/"
          className={`text-[1.438rem] flex items-center ${
            user ? "pl-0" : "pl-6"
          } md:p-0`}
        >
          {/* <img src={logo} alt="loop logo" className="h-10 w-auto" /> */}
          <h1 className="font-bold">loop</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`${
                location.pathname === path
                  ? "font-bold"
                  : "font-medium text-[#444] dark:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {!user ? (
            <Link to="/login">
              <span className="text-[#0ab39c] font-medium">Sign in</span>
            </Link>
          ) : (
            <button
              onClick={toggleProfile}
              aria-label="Open profile"
              className="flex items-center justify-center md:w-10 md:h-10 
                     cursor-pointer md:rounded-full md:hover:bg-white/20"
            >
              {!profileOpen ? (
                <UserSolid className="size-5.5" />
              ) : (
                <XMarkIcon className="size-5.5" />
              )}
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
