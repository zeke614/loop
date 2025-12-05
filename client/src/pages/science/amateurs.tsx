import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";

import amateurs from "../../assets/imgs/amateur.jpg";

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
  (article) => article.id === "amateur-inventors"
)!;

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

export default function Amateurs() {
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
              src={amateurs}
              alt="kid building a robot"
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
            The Amateurs Building the Future in Garages and Basements
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
          <div className="text-[#767676] text-start space-y-6">
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              There's a romantic myth that all groundbreaking inventions begin
              in gleaming labs guarded by PhD-level gatekeepers. In reality,
              many of the tools we now treat as inevitable were born in garages,
              sheds, cramped bedrooms, and badly lit basements that smelled
              faintly of solder and ambition. The amateur inventor has always
              been the sneaky wildcard in the world of innovation—untethered
              from bureaucracy, unburdened by product roadmaps, and propelled
              mostly by stubborn curiosity. What's surprising isn't that this
              tradition continues. It's that it is accelerating.
            </motion.p>

            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Before diving in, one note for clarity: the stories in this piece
              aren't strict historical accounts. They're composites, stitched
              from patterns that appear again and again in real grassroots
              invention. Every detail reflects something that happens out there
              in the wild, even if the characters themselves are narrative
              stand-ins rather than specific individuals.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-6 mt-8">
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              The past decade has seen a strange reversal: while Big Tech's R&D
              machine grows larger and more risk-averse, scrappy individuals and
              tiny teams are building things that punch clean through the
              expectations of trillion-dollar companies. Their secret isn't
              magic. It's freedom—freedom from committee thinking, freedom from
              shareholder anxiety, and freedom to chase ideas that look too
              weird to live until suddenly they do.
            </motion.p>

            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Take the wave of "micro-makers" building hyper-specialized
              hardware. One Ghanaian electrical engineer with a backyard
              workshop prototyped a low-cost soil sensor network that
              outperformed commercial systems in local farms because it solved
              problems only a farmer-engineer would notice. A pair of UK teens
              built an affordable cochlear-inspired audio processor after one of
              them got tired of watching his cousin struggle with bulky hearing
              tech. A retired machinist in Brazil created an elegantly simple
              water-purification turbine using spare engine parts and PVC
              pipes—and the design spread across three continents before any
              major company realized it existed.
            </motion.p>

            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              None of these inventors had formal R&D budgets. They had
              constraints, which turned out to be their competitive advantage.
              Constraints force elegance. Constraints encourage weirdness. And
              weirdness, in innovation, is where the good stuff hides.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-6 mt-8">
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Software tinkerers haven't been idle either. While giants wrestle
              with monolithic AI stacks, hobbyists are building clever
              domain-specific tools—AI tutors that whisper insights in local
              dialects, vision models trained on a village's historical crafts,
              scheduling bots optimized for small roadside shops instead of
              corporate workflows. These projects aren't trying to "scale to
              billions." They're trying to matter. And ironically, because they
              chase real human pain points instead of metrics dashboards, they
              sometimes hit technological sweet spots faster.
            </motion.p>

            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Established labs, to their credit, are paying attention. Some have
              launched partnerships with community makerspaces and small-town
              robotics clubs. But institutional culture moves slowly. Grassroots
              inventors move on instinct—they build because something in the
              world annoys them and they decide to wrestle it into a better
              shape. They don't need permission. They only need tools, time, and
              occasionally a forgiving landlord.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-6 mt-8">
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              The deeper lesson here is both humbling and exciting. Innovation
              doesn't obey hierarchy. It obeys curiosity. The next breakthrough
              in sensor tech, education tools, AI interaction, or sustainable
              energy might not emerge from a corporate mega-lab at all. It might
              come from someone welding scrap metal at 2 a.m., someone with a
              half-broken laptop and a head full of stubborn questions, someone
              hacking together a prototype simply because nobody told them they
              couldn't.
            </motion.p>

            <motion.p
              className="leading-6.5 font-medium text-gray-700"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              The future of invention looks less like a campus and more like a
              constellation—thousands of small lights flickering in garages,
              dorm rooms, workshops, and makeshift studios around the world. Big
              Tech may have the budgets, but amateurs have the surprise factor.
              And in the long arc of innovation, surprise is often the sharper
              blade.
            </motion.p>
          </div>
        </AnimatedSection>
      </motion.div>
    </>
  );
}
