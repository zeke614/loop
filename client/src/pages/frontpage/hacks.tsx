import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import BookmarkPopup from "../../components/bookmark";
import {
  BookmarkIcon,
  ArrowUpOnSquareIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";

import articles from "../../constants/articles";

// import tacticalBreathing from "../../assets/imgs/tactical-breathing.jpg";
// import cognitiveRehearsal from "../../assets/imgs/cognitive-rehearsal.jpg";
// import cueWords from "../../assets/imgs/cue-words.jpg";
// import attentionalNarrowing from "../../assets/imgs/attentional-narrowing.jpg";
// import prePerformance from "../../assets/imgs/pre-performance.jpg";
// import reframingStress from "../../assets/imgs/reframing-stress.jpg";

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

const articleData = (articles["Human Currents"] as Article[]).find(
  (article) => article.id === "performance-hacks"
)!;

const hacks = [
  {
    title: "1. Tactical Breathing: The Nervous System Reset",
    // img: "tacticalBreathing",
    alt: "Person practicing tactical breathing technique",
    content:
      "Navy SEALs use a regulated breath pattern called 'box breathing,' a simple 4-4-4-4 rhythm (inhale, hold, exhale, hold). Sports psychologists note that this slows activity in the sympathetic nervous system—the part responsible for fight-or-flight. Example: Mikaela Shiffrin, the world-class skier, openly attributes her between-run breathing routines to helping her stay emotionally level on the world stage. She treats each breath like a reset button.",
  },
  {
    title: "2. Cognitive Rehearsal: Mental Reps for Real Performance",
    // img: "cognitiveRehearsal",
    alt: "Athlete visualizing performance mentally",
    content:
      "Neuroscience shows that mentally simulating an action activates nearly identical brain circuits as physically doing it. Elite performers rehearse entire sequences—from starting stance to final gesture—until the brain treats the event like déjà vu. Example: Violinist Hilary Hahn is known for silently walking through finger placements and bowing patterns backstage. She says it makes the concert feel 'already lived once' before she steps onstage.",
  },
  {
    title: "3. Cue Words: Shortcuts to the Optimal Mindset",
    // img: "cueWords",
    alt: "Basketball player at free throw line using cue words",
    content:
      "These are single words or tiny phrases that instantly redirect attention. Runners use 'relax.' Actors use 'presence.' Chess players use 'clarity.' The brain develops an association so strong that the word triggers an entire psychological routine. Example: NBA players frequently whisper their cue words at the free-throw line. Steph Curry has mentioned using 'rhythm' as his internal anchor.",
  },
  {
    title: "4. Attentional Narrowing: Shrinking the Universe on Purpose",
    // img: "attentionalNarrowing",
    alt: "Astronaut focusing during spacewalk",
    content:
      "Under pressure, humans often choke because they take in too much sensory information. Elite performers intentionally narrow focus to a single tactile, visual, or auditory point. Example: Astronaut Sunita Williams described focusing exclusively on her glove seals during critical spacewalk moments. She said it kept her brain 'anchored to one real thing' in an environment full of danger.",
  },
  {
    title: "5. Pre-Performance Routines: Your Own Personal Launch Sequence",
    // img: "prePerformance",
    alt: "Tennis player with pre-serve routine",
    content:
      "A consistent ritual—tying shoes the same way, stretching in the same order—tells the brain that stress is predictable, not chaotic. Studies show this reduces cortisol spikes and increases confidence. Example: Serena Williams bounces the ball exactly the same number of times before serving. She calls it 'a comfort pattern' when pressure rises.",
  },
  {
    title: "6. Reframing Stress as Fuel, Not Danger",
    // img: "reframingStress",
    alt: "Performer backstage preparing for show",
    content:
      "Psychologists have long known that the body's stress response is similar to excitement. Elite performers train themselves to interpret a racing heart as readiness instead of fear. Example: Stage actor Rami Malek once said he tells himself, 'This energy is my edge,' right as the curtain rises. The nerves don't disappear—they get repurposed.",
  },
];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.05,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

const floatingButtonVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.2,
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
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
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
    >
      {children}
    </motion.div>
  );
}

function FloatingActionButtons({
  onBookmarkClick,
  onShareClick,
  isSaved,
  showShareFeedback,
}: {
  onBookmarkClick: () => void;
  onShareClick: () => void;
  isSaved: boolean;
  showShareFeedback: boolean;
}) {
  return (
    <motion.div
      variants={floatingButtonVariants}
      initial="hidden"
      animate="visible"
      className="fixed right-4 md:right-40 top-2/3 transform -translate-y-1/2 z-40 flex flex-col items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200"
    >
      <motion.div
        onClick={onBookmarkClick}
        className="flex flex-col items-center group cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="p-1.5 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-200">
          {isSaved ? (
            <BookmarkIconSolid className="size-4 text-[#0ab39c]" />
          ) : (
            <BookmarkIcon className="size-4 text-gray-600 group-hover:text-gray-800" />
          )}
        </div>
        <span className="text-xs mt-1 text-gray-600 font-medium">
          {isSaved ? "Saved" : "Save"}
        </span>
      </motion.div>

      <motion.div
        className="flex flex-col items-center group relative"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          onClick={onShareClick}
          className="p-1.5 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
        >
          <ArrowUpOnSquareIcon className="size-4 text-gray-600 group-hover:text-gray-800" />
        </div>
        <span className="text-xs mt-1 text-gray-600 font-medium">Share</span>

        {showShareFeedback && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap z-50"
          >
            Link copied to clipboard!
          </motion.div>
        )}
      </motion.div>
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

function HackItem({ hack }: { hack: (typeof hacks)[0]; index: number }) {
  return (
    <AnimatedSection className="space-y-6">
      <motion.h2
        className="text-[1.375rem] md:text-2xl font-medium"
        variants={textVariants}
      >
        {hack.title}
      </motion.h2>
      <motion.div className="overflow-hidden mb-6" variants={imageVariants}>
        <img
          // src={ruin.img}
          alt={hack.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </motion.div>
      <motion.p
        className="mb-6 text-[#767676] leading-7"
        variants={textVariants}
      >
        {hack.content}
      </motion.p>
    </AnimatedSection>
  );
}

export default function Hacks() {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<"added" | "removed">("added");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [showShareFeedback, setShowShareFeedback] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const saved: Article[] = JSON.parse(
      localStorage.getItem("savedLoopArticles") || "[]"
    );
    setSavedIds(saved.map((item) => item.id));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (popUp) {
      const timer = setTimeout(() => {
        setPopUp(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popUp]);

  const handleBookmarkClick = () => {
    const saved: Article[] = JSON.parse(
      localStorage.getItem("savedLoopArticles") || "[]"
    );
    const isAlreadySaved = saved.some((item) => item.id === articleData.id);

    let newSaved: Article[];

    if (isAlreadySaved) {
      newSaved = saved.filter((item) => item.id !== articleData.id);
      setPopUpType("removed");
      setPopUp(true);
    } else {
      newSaved = [...saved, articleData];
      setPopUpType("added");
      setPopUp(true);
    }

    localStorage.setItem("savedLoopArticles", JSON.stringify(newSaved));
    setSavedIds(newSaved.map((item) => item.id));
  };

  const handleShare = async () => {
    const shareData = {
      title: articleData.title,
      text: articleData.description,
      url: `${window.location.origin}/articles/${articleData.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("Share canceled");
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setShowShareFeedback(true);
        setTimeout(() => setShowShareFeedback(false), 2000);
      } catch (error) {
        const textArea = document.createElement("textarea");
        textArea.value = shareData.url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setShowShareFeedback(true);
        setTimeout(() => setShowShareFeedback(false), 2000);
      }
    }
  };

  const isSaved = savedIds.includes(articleData.id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-start pb-24 px-4 mx-auto max-w-4xl pt-12 sm:mt-4 relative"
      >
        <BackToTopButton showBackToTop={showBackToTop} />

        <FloatingActionButtons
          onBookmarkClick={handleBookmarkClick}
          onShareClick={handleShare}
          isSaved={isSaved}
          showShareFeedback={showShareFeedback}
        />

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
              transition={{ duration: 0.2 }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.h1
            className="text-[1.438rem] md:text-[1.75rem] font-semibold"
            variants={textVariants}
          >
            Six Mental Performance Hacks Used by Elite Performers
          </motion.h1>

          <motion.div
            className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6"
            variants={textVariants}
          >
            <span className="font-medium text-gray-600">
              {articleData.author},
            </span>
            <span className="mr-3">{articleData.date}</span>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start">
            <motion.p className="leading-6.5" variants={textVariants}>
              Elite performers live in environments where heart rates spike,
              crowds roar, expectations tighten the chest, and errors carry
              consequences. Yet their defining skill isn't a genetic gift—it's
              the ability to regulate stress so effectively that pressure
              becomes a tailwind rather than an anchor.
            </motion.p>
            <motion.p className="leading-6.5 mt-4" variants={textVariants}>
              Across sports psychology, performing arts research, and
              high-stakes science, several mental techniques show up again and
              again. What follows is a breakdown of six evidence-backed tools
              and real people who use them.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="my-14 space-y-14">
          {hacks.map((hack, index) => (
            <HackItem key={index} hack={hack} index={index} />
          ))}
        </div>

        <AnimatedSection>
          <motion.p className="text-[#767676] pt-3" variants={textVariants}>
            All six strategies share a theme: they regulate uncertainty.
            Pressure becomes overwhelming only when the brain feels out of
            control. These tools restore predictability, control, and agency.
            The more repeatable the technique, the more powerful it becomes.
            Elite performance isn't magic—it's the mastery of internal weather.
          </motion.p>
        </AnimatedSection>

        <AnimatePresence>
          {popUp && (
            <BookmarkPopup
              key="bookmark-popup"
              type={popUpType}
              popUpShows={popUp}
              closeMenu={() => setPopUp(false)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
