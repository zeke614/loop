import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-7 md:px-12 lg:px-20">
        <div className="border-t border-gray-100 pb-10"></div>

        <div className="text-center mb-12">
          <h1 className="text-[1.438rem] font-bold tracking-normal">loop</h1>

          <p className="text-gray-600 mt-0.5">
            Stories worth circling back to.
          </p>
        </div>

        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-center text-lg mb-3 font-bold">Quick Links</h2>

          <div className="flex flex-col gap-3 items-center text-gray-60">
            <Link to="/info" className="hover:text-[#0ab39c] transition-colors">
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

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-lg mb-3 font-bold text-gray-900">
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

        <div className="mt-10 flex flex-col justify-between items-center gap-2 text-gray-600">
          <p className="flex items-center gap-2">
            <span className="-mx-1">&copy;</span>
            <span className="text-[0.969rem]">{new Date().getFullYear()}</span>
            <span className="font-boldtracking-normal text-black">loop</span>
            <span>All rights reserved</span>
          </p>

          <p>
            Built by{" "}
            <span className="text-gray-900">
              <a
                href="https://github.com/zeke614"
                target="_blank"
                className="font-semibold ml-0.5 text-[#256F5C] underline underline-offset-2"
              >
                Ezekiel
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
