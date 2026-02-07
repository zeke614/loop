import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../data/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import dynasphere from "../../assets/imgs/dynasphere.jpg";
import telharmonium from "../../assets/imgs/telharmonium.jpg";
import antikythera from "../../assets/imgs/antikythera.webp";
import picturephone from "../../assets/imgs/picturephone.webp";
import aerialSteam from "../../assets/imgs/aerialSteam.jpg";

type Article = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  author?: string;
  img?: string;
  alt?: string;
  [key: string]: any;
};

const articleData = (articles["Time Capsule"] as Article[]).find(
  (article) => article.id === "forgotten-inventions",
)!;

const inventions = [
  {
    title: "1. The Dynasphere (1932)",
    img: dynasphere,
    alt: "The Dynasphere single-wheel vehicle",
    content:
      "A single giant wheel you sat inside, designed to revolutionize personal transport. The inventor imagined a world where people glided down roads in sleek rolling circles. In practice, it looked spectacular but had the unfortunate habit of rolling uncontrollably downhill and struggling to steer. The concept, though, showed up years later in robotics and specialty vehicles.",
  },
  {
    title: "2. The Telharmonium (1906)",
    img: telharmonium,
    alt: "The massive Telharmonium music machine",
    content:
      "A 200-ton massive electrical music machine — basically the grandfather of the synthesizer. You could 'stream' its music over telephone lines to hotel lobbies and restaurants. But it generated so much electrical interference that phone lines buzzed with unwanted symphonies. The world wasn't ready, but electronic music absolutely was.",
  },
  {
    title: "3. The Antikythera Mechanism (100 BCE)",
    img: antikythera,
    alt: "fragment of Antikythera mechanism",
    content:
      "An ancient Greek device so intricate it feels like time travelers dropped it in the Aegean Sea. Using bronze gears and astonishing precision, it predicted eclipses, tracked celestial cycles, and modeled the cosmos. Its sophistication wouldn't be matched for over a thousand years, making it one of history's most astonishing technological outliers.",
  },
  {
    title: "4. The Picturephone (1964)",
    img: picturephone,
    alt: "AT&T Picturephone prototype",
    content:
      "AT&T demonstrated video calling at the World's Fair, predicting that face-to-face communication would become normal. The prediction was spot-on, but the product cost more than some cars, required special installations, and arrived in a society that simply didn't need video calls yet. Fast-forward to the smartphone age: the world caught up.",
  },
  {
    title: "5. The Aerial Steam Carriage (1842)",
    img: aerialSteam,
    alt: "Victorian-era Aerial Steam Carriage design",
    content:
      "A Victorian-era flying machine designed before internal combustion engines, aviation principles, or suitable materials existed. The inventors envisioned commercial air travel — a radical idea that sounded like fiction. Their machine never got off the ground (literally), but the blueprint eerily resembles early aircraft from decades later.",
  },
];

function InventionItem({ invention }: { invention: (typeof inventions)[0] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-[1.375rem] md:text-2xl font-medium ">
        {invention.title}
      </h2>
      <div className="overflow-hidden mb-6">
        <img
          src={invention.img}
          alt={invention.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </div>
      <p className="mb-6 text-[#767676] dark:text-[#d4d4d8] leading-7">
        {invention.content}
      </p>
    </div>
  );
}

export default function Forgotten() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="text-start pb-4 px-4 mx-auto max-w-4xl relative">
        <BackToTopButton showBackToTop={showBackToTop} />

        <div>
          <div className="relative overflow-hidden mb-4 -mx-4">
            <div
              onClick={() => window.history.back()}
              className="absolute left-3 top-2 cursor-pointer z-50 p-2 bg-black text-white rounded-full transition-colors"
            >
              <ChevronLeftIcon className="size-4.5" />
            </div>
            <img
              src={articleData.img}
              alt={articleData.alt}
              className="w-full h-60 sm:h-[24rem] object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
            Ahead of Their Time: Forgotten Inventions
          </h1>

          <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
            <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
              {articleData.author},
            </span>
            <span className="mr-3">{articleData.date}</span>
          </div>
        </div>

        <div>
          <div className="text-[#767676] dark:text-[#d4d4d8] text-start">
            <p className="leading-6.5">
              History treats innovation like a spotlight: a few names glow
              bright, while the rest dissolve into the dim backstage. Yet
              scattered across that backstage are inventions so forward-thinking
              they feel like they slipped through a crack in time — ideas born
              decades too early, misunderstood by their century, only to
              reappear later in more successful forms. These are the prototypes
              of the future that the world wasn't ready to adopt.
            </p>
            <p className="leading-6.5 mt-4">
              This article dusts off five such inventions. They weren't failures
              of imagination; they were failures of timing, infrastructure,
              market readiness, or sheer luck. Their stories show how an idea
              can be brilliant and still fall flat, and how innovation is often
              less about genius and more about catching the wave exactly when it
              rises.
            </p>
          </div>
        </div>

        <div className="my-14 space-y-14">
          {inventions.map((invention, index) => (
            <InventionItem key={index} invention={invention} />
          ))}
        </div>

        <div>
          <div className="text-[#767676] dark:text-[#d4d4d8] pt-3">
            <p className="mb-4">
              They remind us that innovation is a dance between possibility and
              readiness. Being "too early" can look a lot like being wrong, but
              only temporarily. When these inventions are placed back into
              context, they read like precursors — the first drafts of
              technologies that shape modern life.
            </p>
            <p>
              If anything, they show that the future tends to arrive twice: once
              as an oddity misunderstood, and later as a revolution embraced.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
