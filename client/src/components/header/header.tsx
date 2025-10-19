import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navLinks from "../../constants/data";
import Sidebar from "../header/sidebar";
import AccountPanel from "../header/accountPanel";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);

    const handleUserChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
      if (!updatedUser) setProfileOpen(false);
    };

    window.addEventListener("userStateChange", handleUserChange);
    window.addEventListener("storage", handleUserChange);

    return () => {
      window.removeEventListener("userStateChange", handleUserChange);
      window.removeEventListener("storage", handleUserChange);
    };
  }, []);

  const toggleMenu = () => setMenuOpen((s) => !s);
  const toggleProfile = () => setProfileOpen((s) => !s);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setProfileOpen(false);
    window.dispatchEvent(new Event("userStateChange"));
    navigate("/logout");
  };

  return (
    <header className="bg-white text-black ">
      <div className="sticky top-0 z-50 max-w-7xl md:mx-auto flex items-center justify-between px-4 py-3 border-b border-b-[#0000001f]">
        <button
          onClick={toggleMenu}
          className="text-[1.625rem] flex items-center justify-center cursor-pointer md:hidden"
        >
          <i className={menuOpen ? "bx bx-x" : "bx bx-menu-left"}></i>
        </button>

        <Link to="/" className="text-[1.688rem] pl-6 font-semibold">
          loop
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
              className="flex items-center space-x-1 rounded-full hover:bg-gray-100"
            >
              <i className="bx bx-user"></i>
              <span>Sign In</span>
            </Link>
          ) : (
            <button
              onClick={toggleProfile}
              aria-label={profileOpen ? "Close profile" : "Open profile"}
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
            >
              <i
                className={
                  profileOpen ? "bx bx-x text-2xl" : "bx bxs-user text-2xl"
                }
              ></i>
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
