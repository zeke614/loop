import newsletter from "../assets/imgs/newsletter.png";
import { BellAlertIcon } from "@heroicons/react/24/outline";

export default function Newsletter() {
  return (
    <div className="flex items-center justify-center">
      <section className="relative w-full bg-white overflow-hidden rounded-2xl max-w-xl py-18 sm:py-30 mx-6">
        <img
          src={newsletter}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none"
        />

        <div className="relative max-w-lg mx-auto text-center space-y-6">
          <h2 className="text-2xl font-semibold">Stay in the 'loop'</h2>
          <p className="text-gray-800 px-3">
            A periodic dose of insight, curiosity, and updates—minus the spammy
            nonsense.
          </p>

          <form className="flex gap-5 justify-center mx-4">
            <div className="relative w-full max-w-xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-300 text-black placeholder-[#989797] px-4 pr-16 py-[0.688rem] rounded-full outline-none focus:ring-2 focus:ring-gray-100 transition"
              />
              <button
                type="submit"
                className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black flex items-center justify-center text-white"
              >
                <BellAlertIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
