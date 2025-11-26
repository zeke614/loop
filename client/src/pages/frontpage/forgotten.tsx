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
  (article) => article.id === "forgotten-inventions"
)!;

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

export default function Forgotten() {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        setShowShareFeedback(true);
        setTimeout(() => setShowShareFeedback(false), 2000);
      } catch (error) {
        // Older browser fallback
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

  useEffect(() => {
    if (popUp) {
      const timer = setTimeout(() => {
        setPopUp(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popUp]);

  const isSaved = savedIds.includes(articleData.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-start pt-19 pb-24 px-4 mx-auto max-w-4xl relative"
    >
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

      <motion.div
        variants={floatingButtonVariants}
        initial="hidden"
        animate="visible"
        className="fixed right-4 md:right-40 top-2/3 transform -translate-y-1/2 z-40 flex flex-col items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200"
      >
        <motion.div
          onClick={handleBookmarkClick}
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
            onClick={handleShare}
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

      <AnimatedSection className="text-center">
        <motion.h1
          className="text-2xl md:text-3xl font-semibold pt-1"
          variants={textVariants}
        >
          Inventions Forgotten by Time
          <span className="block md:inline">That Were Ahead of Their Era</span>
        </motion.h1>

        <motion.div
          className="flex items-center justify-center pt-3 text-[#989797] mb-10"
          variants={textVariants}
        >
          <span className="mr-3">{articleData.date}</span>
          <span>•</span>
          <span className="ml-3">
            by
            <span className="ml-1.5 font-medium text-gray-600">
              {articleData.author}
            </span>
          </span>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="overflow-hidden mb-6 px-3">
          <motion.img
            src={articleData.img}
            alt={articleData.alt}
            className="w-full h-48 md:h-[30rem] object-cover"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-[#767676] text-start">
          <motion.p className="leading-6.5 px-3" variants={textVariants}>
            History treats innovation like a spotlight: a few names glow bright,
            while the rest dissolve into the dim backstage. Yet scattered across
            that backstage are inventions so forward-thinking they feel like
            they slipped through a crack in time — ideas born decades too early,
            misunderstood by their century, only to reappear later in more
            successful forms. These are the prototypes of the future that the
            world wasn't ready to adopt.
          </motion.p>
          <motion.p className="leading-6.5 px-3 mt-4" variants={textVariants}>
            This article dusts off five such inventions. They weren't failures
            of imagination; they were failures of timing, infrastructure, market
            readiness, or sheer luck. Their stories show how an idea can be
            brilliant and still fall flat, and how innovation is often less
            about genius and more about catching the wave exactly when it rises.
          </motion.p>
        </div>
      </AnimatedSection>

      <div className="my-14 space-y-14 px-1.5">
        {[
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
              "An ancient Greek device so intricate it feels like time travelers dropped it in the Aegean Sea. Using bronze gears and astonishing precision, it predicted eclipses, tracked celestial cycles, and modeled the cosmos. Its sophistication wouldn’t be matched for over a thousand years, making it one of history’s most astonishing technological outliers.",
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
        ].map((invention, index) => (
          <AnimatedSection key={index} className="space-y-6">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium"
              variants={textVariants}
            >
              {invention.title}
            </motion.h2>
            <motion.div
              className="overflow-hidden mb-6"
              variants={imageVariants}
            >
              <img
                src={invention.img}
                alt={invention.alt}
                className="w-full h-48 md:h-105 object-cover"
              />
            </motion.div>
            <motion.p
              className="mb-6 text-[#767676] leading-7"
              variants={textVariants}
            >
              {invention.content}
            </motion.p>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <motion.div className="text-[#767676] pt-3" variants={textVariants}>
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
        </motion.div>
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
  );
}
