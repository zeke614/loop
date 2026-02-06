import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import sharkSkin from "../../assets/imgs/sharkSkin.jpg";
import geckoFoot from "../../assets/imgs/geckoFoot.jpg";
import lotusLeaf from "../../assets/imgs/lotusLeaf.jpg";
import termiteMound from "../../assets/imgs/termiteMound.jpg";
import butterflyWing from "../../assets/imgs/butterflyWing.jpg";
import woodpecker from "../../assets/imgs/woodpecker.jpg";

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

const articleData = (articles["Genius and Folly"] as Article[]).find(
  (article) => article.id === "tech-in-nature",
)!;

const biomimicryExamples = [
  {
    title: "1. Shark Skin and the Quest for Speed",
    img: sharkSkin,
    alt: "swimming suit texture inspired by shark skin",
    content:
      "Sharks glide through water with remarkable efficiency thanks to microscopic rib-like textures on their skin called dermal denticles. These patterns reduce drag and disrupt turbulence. Engineers who replicated this texture saw improvements in racing swimsuits, aircraft surfaces, and even antibacterial coatings. The shark's advantage comes not from brute force, but from small-scale patterning that changes fluid behavior.",
  },
  {
    title: "2. Gecko Feet and the Future of Adhesion",
    img: geckoFoot,
    alt: "Gecko foot illustration",
    content:
      "Geckos cling to walls using millions of tiny hairs on their toes that generate molecular-level grip. Scientists reproduced this mechanism to create reusable adhesives, climbing aids, and robotic grippers. Unlike glue, this type of adhesion leaves no residue and doesn't weaken easily. A gecko's casual defiance of gravity opened the door to a new class of clean, reversible sticking technologies.",
  },
  {
    title: "3. Lotus-Inspired Architecture and Self-Purifying Surfaces",
    img: lotusLeaf,
    alt: "lotus temple in india",
    content:
      "The lotus plant thrives in murky water yet keeps its petals flawlessly clean thanks to a waxy, nano-textured surface that repels moisture and dirt. The Lotus Temple in India, for example, uses petal-like marble panels whose smooth, water-shedding geometry draws from the plant's natural cleanliness. Modern coatings based on the 'lotus effect' now help buildings stay brighter for longer, reduce maintenance costs, and keep pollution from clinging to exteriors. Nature didn't invent a cleaning system—it invented a surface that refuses to get dirty in the first place, and architecture is finally catching up.",
  },
  {
    title: "4. Termite Mounds and Passive Cooling Systems",
    img: termiteMound,
    alt: "Architectural design inspired by termite mound ventilation systems",
    content:
      "Certain termite species build mounds with carefully arranged tunnels that stabilize temperature without any mechanical cooling. Architects translated this method into energy-efficient buildings that circulate air naturally, reducing reliance on powered ventilation. Termites solved the heat problem with structure, not machinery, and their approach scales surprisingly well.",
  },
  {
    title: "5. Butterfly Wings and Structural Color",
    img: butterflyWing,
    alt: "Microscopic structure of butterfly wing showing structural color",
    content:
      "Many butterflies shimmer with vivid hues not because of pigment, but because microscopic layers bend and scatter light. This structural color inspired anti-counterfeit patterns on currency, durable paints that never fade, and low-energy reflective displays. A single wing can manipulate light more effectively than many human-made coatings.",
  },
  {
    title: "6. Woodpecker Skulls and Impact Protection",
    img: woodpecker,
    alt: "Woodpecker head anatomy showing shock-absorbing bone structure",
    content:
      "A woodpecker's skull is designed to absorb repeated impacts without injury, using specialized bone architecture and shock-damping tissues. Engineers adapted this system for improved helmets, protective casings, and aircraft black-box housings. The bird's resilience shows how evolution often solves mechanical problems with elegance rather than complexity.",
  },
];

function BiomimicryItem({
  example,
}: {
  example: (typeof biomimicryExamples)[0];
  index: number;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-[1.375rem] md:text-2xl font-medium dark:text-[#d4d4d8]">
        {example.title}
      </h2>
      <div className="overflow-hidden mb-6">
        <img
          src={example.img}
          alt={example.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </div>
      <p className="mb-6 text-[#767676] dark:text-[#d4d4d8] leading-7">
        {example.content}
      </p>
    </div>
  );
}

export default function Biomimicry() {
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

        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          Biomimicry: When Nature Designs Better Than Engineers
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start">
          <p className="leading-6.5">
            Engineers often pride themselves on cutting-edge tools, yet many of
            the cleverest ideas arrive pre-installed in the living world.
            Plants, insects, birds, and marine life have spent billions of years
            refining designs humans are only beginning to notice. Biomimicry
            takes these natural strategies and turns them into practical
            technologies—sometimes simple, sometimes wildly futuristic. The
            examples below illustrate how looking to nature can reshape
            everything from architecture to robotics.
          </p>
        </div>

        <div className="my-14 space-y-14">
          {biomimicryExamples.map((example, index) => (
            <BiomimicryItem key={index} example={example} index={index} />
          ))}
        </div>

        <div className="text-[#767676] pt-3 space-y-4">
          <p>
            Biomimicry doesn't claim nature has all the answers, but it does
            remind us that some of the best engineering ideas already exist
            around us—in leaves, feathers, shells, and bone. Each natural system
            carries lessons about efficiency, resilience, and sustainability.
          </p>
          <p className="font-medium text-gray-700">
            As technology pushes forward, the smartest tools may come from
            paying closer attention to designs that have been quietly succeeding
            for millennia.
          </p>
        </div>
      </div>
    </>
  );
}
