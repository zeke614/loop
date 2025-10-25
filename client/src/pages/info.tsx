export default function Info() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-4">
      <div>
        <h1 className="text-center text-xl mt-12 font-medium">About Loop</h1>
        <p className="mt-1.5 text-center px-6">
          Loop is a space for stories that linger — the kind that loop in your
          mind long after you've read them. From scientific wonders to untold
          sports triumphs, from financial turns that shaped lives to cultural
          moments that defined eras, Loop gathers thoughtful write-ups about the
          extraordinary sides of ordinary things. Our goal is simple: to make
          curiosity a habit, one story at a time.
        </p>
      </div>
      <div className="mt-14">
        <h1 className="text-center text-xl font-medium">Contact Us</h1>
        <p className="mt-1.5 text-center px-6">
          Reach out to the developer, Zeke, via the socials below. You can also
          check out the project on GitHub or send feedback by email.
        </p>
        <div className="gap-1.5 mt-2 items-center justify-center flex">
          <a
            href="https://x.com/devzeke146"
            target="_blank"
            aria-label="Visit our X(formally twitter) page"
            className="w-[2rem] h-[2.25rem] flex items-center justify-center"
          >
            <i className="bxl  bx-twitter-x text-[1.375rem]"></i>{" "}
          </a>
          <a
            href="https://instagram.com/zeke.146/"
            target="_blank"
            aria-label="Visit our Instagram page"
            className="w-[2rem] h-[2.25rem] flex items-center justify-center"
          >
            <i className="bxl  bx-instagram text-[1.375rem]"></i>{" "}
          </a>
          <a
            href="https://github.com/zeke614/loop.git"
            target="_blank"
            aria-label="View project on Github"
            className="w-[2rem] h-[2.25rem] flex items-center justify-center"
          >
            <i className="bxl  bx-github text-[1.375rem]"></i>{" "}
          </a>
          <a
            href="mailto:ezekielarkohamissah@gmail.com"
            aria-label="Send an email"
            className="w-[2rem] h-[2.25rem] flex items-center justify-center"
          >
            <i className="bxl  bx-gmail text-[1.375rem]"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
