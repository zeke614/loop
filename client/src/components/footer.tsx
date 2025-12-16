import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="bg-black text-white mx-auto rounded-t-2xl px-6 pt-12 pb-7 md:px-38">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/devzeke146"
              target="_blank"
              aria-label="Visit our X(formally twitter) page"
              className="text-white transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <i className="bxl bx-twitter-x text-[1.375rem]"></i>{" "}
            </a>

            <a
              href="https://instagram.com/zeke.146/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <i className="bxl bx-instagram text-[1.375rem]"></i>{" "}
            </a>
            <a
              href="https://github.com/zeke614/loop.git"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <i className="bxl bx-github text-[1.375rem]"></i>{" "}
            </a>
            <a
              href="mailto:ezekielarkohamissah@gmail.com"
              aria-label="Email"
              className="text-white transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              <i className="bxl bx-gmail text-[1.375rem]"></i>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[0.938rem] font-medium">
            <Link to="/" className="hover:text-[#0ab39c] transition-colors">
              Home
            </Link>
            <Link to="/info" className="hover:text-[#0ab39c] transition-colors">
              About Us
            </Link>
            <Link
              to="/privacy"
              className="hover:text-[#0ab39c] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-2.5">
          <p className="flex items-center gap-2">
            <span className="text-lg -mx-1 mt-1">&copy;</span>
            <span> {new Date().getFullYear()}</span>
            <span className="font-bold text-white tracking-wide">loop</span>
            <span>All rights reserved.</span>
          </p>
          <p>
            Designed & Built by <span className="font-bold">Zeke</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
