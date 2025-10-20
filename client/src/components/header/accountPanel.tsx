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
        className={`fixed top-0 right-0 h-full w-80  bg-white max-w-sm z-50 transform transition-transform duration-300 ease-in-out pointer-events-auto ${
          profileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!profileOpen}
      >
        <div className="flex justify-end pt-3 pr-3">
          <button onClick={() => setProfileOpen(false)}>
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>
        <h3 className="text-lg font-semibold ml-4 pb-1.5">Your Account</h3>

        <div className="px-4 py-1 space-y-2.5 flex-1 overflow-auto">
          <Link
            to="/saved"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 transition"
          >
            <i className="bx bx-book-bookmark"></i>
            <span>Saved</span>
          </Link>

          <Link
            to="/settings"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 transition"
          >
            <i className="bx bx-cog"></i>
            <span>Settings</span>
          </Link>

          <button
            onClick={handleSignOut}
            className="w-full text-left flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white/5 transition cursor-pointer text-red-400"
          >
            <i className="bx  bx-arrow-out-right-square-half"></i>{" "}
            <span>Sign Out</span>
          </button>
        </div>

        <p className="py-3 text-sm w-full text-center fixed bottom-0 text-[#6e7780]">
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
