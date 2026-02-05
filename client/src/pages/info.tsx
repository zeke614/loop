import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Info() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-23 sm:pt-25 pb-12 px-6 md:px-8">
      <div className="max-w-2xl w-full space-y-16">
        <section className="space-y-6 text-left">
          <div onClick={() => window.history.back()} className="mb-7">
            <ChevronLeftIcon className="size-5.5 -ml-1" />
          </div>

          <h1 className="text-xl font-semibold">About Loop</h1>
          <div className="prose-base md:prose-lg text-gray-600 dark:text-[#d4d4d8] leading-relaxed">
            <p>
              Loop is a space for stories that linger — the kind that loop in
              your mind long after you've read them.
            </p>
            <p className="mt-4">
              From scientific wonders to untold sports triumphs, from financial
              turns that shaped lives to cultural moments that defined eras,
              loop gathers thoughtful write-ups about the extraordinary sides of
              ordinary things.
            </p>
            <p className="mt-4 font-bold text-gray-900 dark:text-white">
              Our goal is simple: to make curiosity a habit, one story at a
              time.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-100 w-full"></div>

        <section className="space-y-6 text-left">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-[#d4d4d8] leading-relaxed">
            Reach out to the developer,{" "}
            <span className="font-semibold mr-1">Zeke</span>
            via the socials below. You can also check out the project on GitHub
            or send feedback by email.
          </p>
        </section>
      </div>
    </div>
  );
}
