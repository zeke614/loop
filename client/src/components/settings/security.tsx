import { Link } from "react-router-dom";

export default function Security() {
  return (
    <div className="px-4 pt-20 max-w-3xl md:mx-auto flex flex-col justify-center space-y-4">
      <div className="flex items-center pl-1.5 pt-4">
        <Link
          to="/settings"
          className="text-gray-600 hover:text-black flex items-center gap-[0.188rem]"
        >
          <i className="bx  bx-arrow-in-left-square-half"></i>{" "}
          <span className="font-medium">Settings</span>
        </Link>
      </div>
      <h1 className="text-xl pl-6 font-semibold">Security and Privacy</h1>
      <p className="text-center text-[#6e7780] font-semibold mt-8">
        You haven't set any security preferences yet.
      </p>
    </div>
  );
}
