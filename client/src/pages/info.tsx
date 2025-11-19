export default function Info() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen mx-4">
      <div>
        <h1 className="text-center text-xl mt-12 font-medium">About Loop</h1>
        <p className="mt-2 text-center px-8">
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
        <p className="mt-2 text-center px-8">
          Reach out to the developer,{" "}
          <span className="font-semibold">Zeke</span>, via the socials below.
          You can also check out the project on GitHub or send feedback by
          email.
        </p>
      </div>
    </div>
  );
}
