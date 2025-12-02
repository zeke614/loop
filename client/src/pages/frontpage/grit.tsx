import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";

import liverpool from "../../assets/imgs/liverpool.webp";
import serena from "../../assets/imgs/serena.webp";
import patriotsFalcons from "../../assets/imgs/patriotsFalcons.png";
import cleveland from "../../assets/imgs/cleveland.jpeg";
import tWoods from "../../assets/imgs/tWoods.jpg";

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

const articleData = (articles["Arena of Fame"] as Article[]).find(
  (article) => article.id === "the-will-to-win"
)!;

const comebacks = [
  {
    title:
      "1. Liverpool vs. AC Milan (2005 UEFA Champions League Final, Istanbul) — The Miracle of Instanbul",
    img: liverpool,
    alt: "Liverpool - Miracle of Istanbul",
    content:
      "In Istanbul on a warm May night, Liverpool trailed AC Milan 3 – 0 at halftime—a deficit so crushing that commentators had mentally engraved Milan's name on the trophy. Liverpool's players looked broken; their fans looked heartbroken. Yet within a six-minute burst early in the second half, something irrational happened. The underdogs scored three times, each goal a small rebellion against inevitability. What followed was a stretch of football where desire outweighed fatigue, tactics bent to willpower, and a goalkeeper named Jerzy Dudek turned into folklore during the penalty shootout. The comeback became more than a victory; it became an emblem of defiance, a reminder that sport is a stage where logic occasionally crumbles under the weight of belief.",
  },
  {
    title:
      "2. New England Patriots vs. Atlanta Falcons (Super Bowl LI, 2017) — The 28–3 Mythology",
    img: patriotsFalcons,
    alt: "Tom Brady leading the Patriots comeback in Super Bowl LI",
    content:
      "No deficit in American football carries as much cultural baggage as '28–3.' It's shorthand now, a meme, a memory, and a lesson. Midway through the third quarter, the Falcons had a 25-point lead and a statistical probability of winning that practically reached the moon. Yet the Patriots, with Tom Brady's unnerving calm, began eroding that lead point by point. Each drive was a thesis on persistence; each defensive stop felt like an argument against math itself. By the time the game entered overtime—something no Super Bowl had ever done—the momentum had entirely reversed. The comeback became immortal not simply because of the points, but because it illustrated how belief can be engineered through discipline, repetition, and refusal to panic.",
  },
  {
    title:
      "3. Serena Williams vs. Victoria Azarenka (2012 US Open Final) — A Champion Rewrites the Script",
    img: serena,
    alt: "Serena Williams celebrating her 2012 US Open victory",
    content:
      "When Serena Williams found herself down 5–3 in the third set of the US Open final, even seasoned analysts considered the match all but finished. Azarenka was dictating rallies, moving Serena across the baseline with the precision of a surgeon. But champions are strange creatures; just when the script appears sealed, they find a crack and climb through it. Williams summoned a level of ferocity that felt almost physical in the air, breaking Azarenka twice and unleashing serves that seemed charged with thunder. The comeback wasn't just athletic—it was psychological, a masterclass in emotional regulation under pressure. For many young athletes, this match became a template for learning that grit is often a choice made in one impossible moment.",
  },
  {
    title:
      "4. Cleveland Cavaliers vs. Golden State Warriors (2016 NBA Finals) — History Against the Odds",
    img: cleveland,
    alt: "LeBron James with the 2016 NBA Finals trophy",
    content:
      "The 2016 Finals seemed predetermined: the 73–9 Warriors up 3–1, Cleveland clinging to mathematical hope more than momentum. Then LeBron James and Kyrie Irving launched a three-game counterattack that felt equal parts resolve and rebellion. Game 7 in Oakland delivered the defining moments—LeBron's chase-down block, Kyrie's step-back three, and a final defensive stand that turned a superteam mortal. This wasn't just a scoreboard reversal; it was the first successful comeback from a 3–1 deficit in Finals history, a demolition of the impossible. Cleveland's long-suffering sports identity flipped overnight, leaving a victory remembered as much for its psychological weight as its athletic brilliance.",
  },
  {
    title: "5. Tiger Woods Wins the 2019 Masters — A Return from the Ashes",
    img: tWoods,
    alt: "Tiger Woods celebrating his 2019 Masters victory",
    content:
      "Tiger Woods' return at the 2019 Masters wasn't a comeback in a single match—it was a comeback from a decade of injuries, surgeries, personal crises, and doubts that mutated into headlines. Standing on the 12th hole during the final round, Woods played with a calmness that contrasted sharply with the chaos of the players ahead of him. Mistakes from his rivals created an opening, and Woods stepped through it with the heart of the champion he once was. His victory wasn't just about golf; it was about reinvention. It became one of the most emotional moments in modern sports—the resurrection of an athlete once considered unreachable, then lost, then astonishingly human.",
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

function ComebackItem({
  comeback,
}: {
  comeback: (typeof comebacks)[0];
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
        {comeback.title}
      </motion.h2>
      <motion.div className="overflow-hidden mb-6" variants={imageVariants}>
        <img
          src={comeback.img}
          alt={comeback.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </motion.div>
      <motion.p
        className="mb-6 text-[#767676] leading-7"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {comeback.content}
      </motion.p>
    </AnimatedSection>
  );
}

export default function Grit() {
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
            Five Sports Comebacks That Redefined Grit
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
              Resilience in sport rarely arrives neatly wrapped; it erupts in
              moments when defeat seems inevitable and adrenaline rewrites the
              script. This feature revisits five astonishing comebacks across
              different eras and disciplines, examining not just the scorelines
              but the psychological swings, tactical recalibrations, and
              cultural ripples they left behind. These are the matches that
              turned despair into legend…
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="my-14 space-y-14">
          {comebacks.map((comeback, index) => (
            <ComebackItem key={index} comeback={comeback} index={index} />
          ))}
        </div>

        <AnimatedSection>
          <motion.p
            className="text-[#767676] pt-3"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Comebacks endure because they reveal something elemental about
            competition: talent matters, but resolve is its own kind of physics.
            These five stories have lived far beyond their scorelines because
            they capture the moment when athletes and teams refused to accept
            predictable endings. Their victories remind us that sport is not
            only played on fields and courts but in the unresolved spaces of the
            human spirit.
          </motion.p>
        </AnimatedSection>
      </motion.div>
    </>
  );
}
