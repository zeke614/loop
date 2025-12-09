import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import spaceJunk from "../../assets/imgs/spaceJunk.jpg";

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
  (article) => article.id === "space-junk-to-mining"
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

export default function SpaceMining() {
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
        className="text-start pb-4 px-4 mx-auto max-w-4xl relative"
      >
        <BackToTopButton showBackToTop={showBackToTop} />

        <AnimatedSection>
          <div className="relative overflow-hidden mb-4 -mx-4">
            <div
              onClick={() => window.history.back()}
              className="absolute left-2 top-2 cursor-pointer z-50 p-2 bg-black text-white rounded-full transition-colors"
            >
              <ChevronLeftIcon className="size-4.5" />
            </div>
            <motion.img
              src={spaceJunk}
              alt="Space mining concept with asteroids and spacecraft"
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
            Space Junk to Space Mining: The Next Frontier of Tech
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
              Earth's orbit is becoming a junkyard. Thousands of defunct
              satellites, spent rocket stages, and fragments of debris drift
              silently at tens of thousands of kilometers per hour. Meanwhile,
              on the horizon is a more ambitious dream: mining asteroids and
              other celestial bodies for metals, water, and resources that could
              fuel life and industry—beyond Earth.
            </motion.p>

            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              But transforming orbital trash and distant rocks into a
              sustainable space economy won't be simple. It requires technology,
              law, and a global sense of stewardship. Here's a look at the two
              overlapping frontiers—cleaning up space, and reaching beyond
              it—and what their collision might mean for humanity.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-6 mt-8">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium text-gray-900"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              1. The Growing Hazard of Space Junk
            </motion.h2>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Researchers estimate that there are more than 40,000 tracked
              objects larger than 10 cm in Earth orbit, and likely millions of
              smaller items. Each collision—or even near miss—with active
              satellites or manned spacecraft adds fragment clouds that multiply
              collision risk exponentially, a cascade sometimes called the
              "Kessler Syndrome."
            </motion.p>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              The orbiting junk isn't just theoretical risk: falling debris has
              begun re-entering Earth's atmosphere unpredictably. As
              constellations of thousands of satellites launch for broadband,
              Earth observation, and communications, the debris problem
              accelerates—pushing the need for active debris removal and robust
              space-traffic management. Space orbit risks becoming a dead zone
              before we realize it.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-6 mt-8">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium text-gray-900"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              2. The Rise of Orbital Cleanup — "Space Janitors" Take Off
            </motion.h2>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Companies are pioneering active debris-removal technologies:
              robotic arms, rendezvous capture, deorbiting defunct objects, and
              satellite servicing. The concept is shifting from idealistic
              cleanup to viable business: satellite operators are being offered
              "end-of-life" plans to tag and retrieve their hardware, reducing
              long-term debris accumulation.
            </motion.p>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Some proposals even envision a "circular space economy": recycling
              materials in orbit or repurposing components—turning trash into
              resources, rather than leaving it to decay or burn unpredictably
              entering the atmosphere. If humanity is to keep using orbit
              sustainably, cleanup needs to scale—and soon.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-6 mt-8">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium text-gray-900"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              3. Asteroid Mining Is No Longer Sci-Fi — Companies Are Taking the
              Lead
            </motion.h2>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              The idea of harvesting resources from asteroids—metals, water,
              rare elements—has moved from theoretical to actionable. Private
              firms are already working on asteroid-mining technologies—refining
              metal extraction processes in small spacecraft, planning missions,
              and raising capital to launch the first commercial deep-space
              mineral missions.
            </motion.p>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Advances that lower launch costs, combined with growing demand for
              rare metals and space-derived resources, are turning what once
              looked like fantasy into a plausible mid-to-long-term strategy.
              What was science fiction a few decades ago is now being engineered
              as science fact.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-6 mt-8">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium text-gray-900"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              4. The Regulatory and Ethical Void
            </motion.h2>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              International frameworks govern peaceful use of space—but they
              don't clearly define rights to extract or own resources from
              asteroids or celestial bodies, leaving serious legal ambiguity
              around space mining. The possibility of "claim jumping"—one entity
              racing to mine or process a resource another identified—looms
              large.
            </motion.p>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Some nations have begun national legislation to regulate resource
              extraction in space, but there is still no comprehensive
              international agreement. Fragmented laws create a risky
              environment for investors and make long-term cooperation
              uncertain. Mining asteroids or the Moon may also generate
              environmental risks and complicate the already fragile orbital
              environment.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-6 mt-8">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium text-gray-900"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              5. Why Space Junk Cleanup and Space Mining Must Be Part of a
              Single Vision
            </motion.h2>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Mining asteroids without cleaning up orbit would be short-sighted:
              more launches, more missions, more debris. If debris accumulates
              unchecked, low Earth orbit and other strategic orbital zones could
              become unusable.
            </motion.p>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              A sustainable "circular space economy" should combine tight debris
              management, recycling of materials, mission-end cleanup, and
              resource extraction—creating a closed-loop model rather than
              continuous expansion. Success in this domain could redefine
              resource scarcity on Earth, reduce the environmental damage of
              terrestrial mining, and expand human activity in space—but only if
              managed with foresight, regulation, and global cooperation.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-6 mt-12">
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Humanity stands at a crossroads: continue piling junk into orbit
              until the highway becomes impassable—or build a new paradigm where
              cleanup and resource use walk hand in hand. The rising
              private-sector interest, combined with early regulatory frameworks
              and active cleanup efforts, suggests this isn't just a dream
              anymore.
            </motion.p>
            <motion.p
              className="leading-6.5 font-medium text-gray-700 italic"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Space's next frontier isn't just about going farther—it's about
              going cleaner and smarter. With luck, the history of the next
              century will show we didn't just reach for the stars—we learned to
              respect the space between them.
            </motion.p>
          </div>
        </AnimatedSection>
      </motion.div>
    </>
  );
}
