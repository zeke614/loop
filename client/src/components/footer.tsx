import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-7 md:px-12 lg:px-20">
        <div className="border-t border-gray-100 pb-10"></div>

        <div className="grid gap-7 md:grid-cols-2 md:items-start md:justify-between">
          <div className="text-center md:text-start">
            <h1 className="text-[1.375rem] font-frozen font-semibold tracking-wide">
              loop
            </h1>

            <p className="text-gray-600 max-w-sm mx-auto md:mx-0 text-[0.938rem]">
              Stories worth circling back to.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
            <div className="mb-10 flex flex-col items-center md:items-end font-frozen font-normal">
              <h2 className="text-center md:text-right mb-3.5  text-gray-900">
                Quick Links
              </h2>
              <div className="flex gap-6 text-[0.938rem] text-gray-600">
                <Link
                  to="/info"
                  className="hover:text-[#0ab39c] transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-[#0ab39c] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link to="/" className="hover:text-[#0ab39c] transition-colors">
                  Home
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <h2 className="text-center md:text-right mb-4 font-frozen text-gray-900">
                Our Socials
              </h2>
              <div className="flex items-center gap-6">
                <a
                  href="https://x.com/devzeke146"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="transition-all duration-300 hover:-translate-y-1 hover:text-[#0ab39c]"
                >
                  <i className="bxl bx-twitter-x text-[1.375rem]"></i>
                </a>

                <a
                  href="https://instagram.com/zeke.146/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-all duration-300 hover:-translate-y-1 hover:text-[#0ab39c]"
                >
                  <i className="bxl bx-instagram text-[1.375rem]"></i>
                </a>

                <a
                  href="https://github.com/zeke614/loop.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="transition-all duration-300 hover:-translate-y-1 hover:text-[#0ab39c]"
                >
                  <i className="bxl bx-github text-[1.375rem]"></i>
                </a>

                <a
                  href="mailto:ezekielarkohamissah@gmail.com"
                  aria-label="Email"
                  className="transition-all duration-300 hover:-translate-y-1 hover:text-[#0ab39c]"
                >
                  <i className="bxl bx-gmail text-[1.375rem]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm gap-2 text-gray-600">
          <p className="flex items-center gap-2">
            <span className="text-lg -mx-1 mt-1">&copy;</span>
            <span>{new Date().getFullYear()}</span>
            <span className="font-bold font-frozen tracking-wide text-[0.937rem] text-gray-900">
              loop
            </span>
            <span>All rights reserved.</span>
          </p>

          <p>
            Designed & Built by{" "}
            <span className="font-frozen text-gray-900">Zeke</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
