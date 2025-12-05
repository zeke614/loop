import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";

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

const articleData = (articles["Genius & Folly"] as Article[]).find(
  (article) => article.id === "tech-in-nature"
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
      "The lotus plant thrives in murky water yet keeps its petals flawlessly clean thanks to a waxy, nano-textured surface that repels moisture and dirt. The Lotus Temple in India, for example, uses petal-like marble panels whose smooth, water-shedding geometry draws from the plant's natural cleanliness. Modern coatings based on the “lotus effect” now help buildings stay brighter for longer, reduce maintenance costs, and keep pollution from clinging to exteriors. Nature didn’t invent a cleaning system—it invented a surface that refuses to get dirty in the first place, and architecture is finally catching up.",
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

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.02,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: 0.05,
    },
  },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -10px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      transition={{ type: "tween", ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function BackToTopButton({ showBackToTop }: { showBackToTop: boolean }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-12 md:right-42 z-50 p-2.5 bg-[#0ab39c] text-white rounded-full shadow-lg hover:bg-[#089c8a] transition-all duration-200 hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUpIcon className="size-4.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function BiomimicryItem({
  example,
}: {
  example: (typeof biomimicryExamples)[0];
  index: number;
}) {
  return (
    <AnimatedSection className="space-y-6">
      <motion.h2
        className="text-[1.375rem] md:text-2xl font-medium"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {example.title}
      </motion.h2>
      <motion.div className="overflow-hidden mb-6" variants={imageVariants}>
        <img
          src={example.img}
          alt={example.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </motion.div>
      <motion.p
        className="mb-6 text-[#767676] leading-7"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {example.content}
      </motion.p>
    </AnimatedSection>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-start pb-24 px-4 mx-auto max-w-4xl relative"
      >
        <BackToTopButton showBackToTop={showBackToTop} />

        <AnimatedSection>
          <div className="overflow-hidden mb-4 -mx-4">
            <motion.img
              src={articleData.img}
              alt={articleData.alt}
              className="w-full h-60 sm:h-[24rem] object-cover"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.15 }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.h1
            className="text-[1.438rem] md:text-[1.75rem] font-semibold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Biomimicry: When Nature Designs Better Than Engineers
          </motion.h1>

          <motion.div
            className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="font-medium text-gray-600">
              {articleData.author},
            </span>
            <span className="mr-3">{articleData.date}</span>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start">
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Engineers often pride themselves on cutting-edge tools, yet many
              of the cleverest ideas arrive pre-installed in the living world.
              Plants, insects, birds, and marine life have spent billions of
              years refining designs humans are only beginning to notice.
              Biomimicry takes these natural strategies and turns them into
              practical technologies—sometimes simple, sometimes wildly
              futuristic. The examples below illustrate how looking to nature
              can reshape everything from architecture to robotics.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="my-14 space-y-14">
          {biomimicryExamples.map((example, index) => (
            <BiomimicryItem key={index} example={example} index={index} />
          ))}
        </div>

        <AnimatedSection>
          <motion.div
            className="text-[#767676] pt-3 space-y-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <p>
              Biomimicry doesn't claim nature has all the answers, but it does
              remind us that some of the best engineering ideas already exist
              around us—in leaves, feathers, shells, and bone. Each natural
              system carries lessons about efficiency, resilience, and
              sustainability.
            </p>
            <p className="font-medium text-gray-700">
              As technology pushes forward, the smartest tools may come from
              paying closer attention to designs that have been quietly
              succeeding for millennia.
            </p>
          </motion.div>
        </AnimatedSection>
      </motion.div>
    </>
  );
}
