import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center">
      <div className="bg-black text-white px-6 text-[0.938rem] pb-3 pt-5 md:pb-2 mx-auto rounded-t-2xl flex flex-col space-x-2.5 md:gap-0 md:flex-row md:justify-between items-center">
        {/* <div className="border-t border-[#5452521f] pb-4 mx-auto max-w-7xl"></div> */}
        <div className="gap-3 my-0.5 items-center justify-center flex">
          <a
            href="https://x.com/devzeke146"
            target="_blank"
            aria-label="Visit our X(formally twitter) page"
            className="flex items-center justify-center"
          >
            <i className="bxl  bx-twitter-x text-[1.375rem]"></i>{" "}
          </a>
          <a
            href="https://instagram.com/zeke.146/"
            target="_blank"
            aria-label="Visit our Instagram page"
            className="flex items-center justify-center"
          >
            <i className="bxl  bx-instagram text-[1.375rem]"></i>{" "}
          </a>
          <a
            href="https://github.com/zeke614/loop.git"
            target="_blank"
            aria-label="View project on Github"
            className="flex items-center justify-center"
          >
            <i className="bxl  bx-github text-[1.375rem]"></i>{" "}
          </a>
          <a
            href="mailto:ezekielarkohamissah@gmail.com"
            aria-label="Send an email"
            className="flex items-center justify-center"
          >
            <i className="bxl  bx-gmail text-[1.375rem]"></i>{" "}
          </a>
        </div>
        <div className="md:hidden flex flex-row gap-4 md:gap-6">
          <Link to="/privacy">
            <p>Privacy policy</p>
          </Link>
          <Link to="/info">
            <p>About us</p>
          </Link>
        </div>
        <div>
          <p className="space-x-1 text-center">
            <span>&copy;</span>
            <span>{new Date().getFullYear()}</span>
            <span className="font-bold text-[1.063rem]"> loop</span>
            <span> All rights reserved.</span>
          </p>
        </div>
        <div className="hidden md:flex flex-row gap-4 md:gap-6">
          <Link to="/privacy">
            <p>Privacy policy</p>
          </Link>
          <Link to="/info">
            <p>About us</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
