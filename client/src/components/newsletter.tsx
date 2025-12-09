import newsletter from "../assets/imgs/newsletter.png";

export default function Newsletter() {
  return (
    <section className="relative w-full bg-white overflow-hidden rounded-2xl pt-10 px-10">
      <img
        src={newsletter}
        className="absolute inset-0 w-full h-full object-cover opacity-[0.12] pointer-events-none"
      />

      <div className="relative max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-semibold">Stay in the 'loop'</h2>
        <p className="text-gray-800">
          A periodic dose of insight, curiosity, and updates—minus the spammy
          nonsense.
        </p>

        <form className="flex flex-col sm:flex-row gap-5 justify-center mx-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-3 py-3 rounded-xl border focus:ring-gray-300"
          />
          <button
            type="submit"
            className="px-8 py-3.5 rounded-full bg-black text-white font-medium hover:opacity-80 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
