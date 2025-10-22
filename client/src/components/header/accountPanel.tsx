import { Link } from "react-router-dom";

interface AccountPanelProps {
  user: any;
  profileOpen: boolean;
  setProfileOpen: (value: boolean) => void;
  handleSignOut: () => void;
}

export default function AccountPanel({
  user,
  profileOpen,
  setProfileOpen,
  handleSignOut,
}: AccountPanelProps) {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-4/6  bg-white max-w-sm z-50 transform transition-transform duration-300 ease-in-out pointer-events-auto ${
          profileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!profileOpen}
      >
        <div className="flex justify-end pt-2 pr-2">
          <button
            onClick={() => setProfileOpen(false)}
            className="cursor-pointer"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>
        <h3 className="text-xl font-medium ml-3 py-1.5">Your Account</h3>

        <div className="pl-3 flex-1 text-[1.063rem] overflow-auto">
          <Link
            to="/settings"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 transition"
          >
            <i className="bx bx-cog"></i>
            <span>Settings</span>
          </Link>

          <Link
            to="/saved"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 transition"
          >
            <i className="bx bx-book-bookmark"></i>
            <span>Saved</span>
          </Link>

          <button
            onClick={handleSignOut}
            className="w-full text-left flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 transition cursor-pointer text-red-400"
          >
            <i className="bx  bx-arrow-out-right-square-half"></i>{" "}
            <span>Sign Out</span>
          </button>
        </div>

        <p className="py-3 text-xs w-full text-center fixed bottom-0 text-[#6e7780]">
          Signed in as <span className="font-medium">{user?.email}</span>
        </p>
      </div>

      {profileOpen && (
        <div
          onClick={() => setProfileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        ></div>
      )}
    </>
  );
}
