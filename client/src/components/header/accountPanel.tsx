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
        className={`fixed bg-white z-50 transform transition-transform duration-300 ease-in-out pointer-events-auto
        
          bottom-0 left-0 w-full rounded-t-2xl shadow-2xl
          
          md:top-0 md:right-0 md:h-full md:w-[63%] md:max-w-sm
          md:bottom-auto md:left-auto md:rounded-none md:shadow-lg

          ${
            profileOpen
              ? "translate-y-0 md:translate-x-0"
              : "translate-y-full md:translate-y-0 md:translate-x-full"
          }
        `}
        aria-hidden={!profileOpen}
      >
        <div className="w-full flex justify-center pt-2 pb-2 md:hidden">
          <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
        </div>

        <div className="flex justify-end pr-2 md:mt-1.5">
          <button
            onClick={() => setProfileOpen(false)}
            className="cursor-pointer rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-100"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>

        <div className="flex justify-between items-center pt-2 pr-4 pl-5 md:hidden">
          <h3 className="text-xl font-medium md:hidden">My Account</h3>
        </div>

        <h3 className="text-xl font-medium ml-3 py-1.5 hidden md:block">
          My Account
        </h3>

        <div className="px-3 pt-2 pb-3 flex-1 text-lg overflow-auto">
          <Link
            to="/settings"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <i className="bx bx-cog text-xl"></i> <span>Settings</span>
          </Link>

          <Link
            to="/saved"
            onClick={() => setProfileOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
          >
            <i className="bx bx-bookmarks text-xl"></i> <span>Saved</span>
          </Link>

          <button
            onClick={handleSignOut}
            className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer text-red-500"
          >
            <i className="bx  bx-arrow-out-right-square-half text-xl"></i>{" "}
            <span>Sign Out</span>
          </button>
        </div>

        <div className="md:hidden border border-gray-100 mx-6"></div>

        <p className="py-4 md:bottom-0 text-xs w-full md:fixed text-center text-[#6e7780]">
          Signed in as <span className="font-medium">{user?.email}</span>
        </p>
      </div>

      {profileOpen && (
        <div
          onClick={() => setProfileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs"
        ></div>
      )}
    </>
  );
}
