import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

import BookmarkPopup from "../../components/bookmark";
import { BookmarkIcon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import lab from "../../assets/imgs/lab.jpg";
import penicillin from "../../assets/imgs/penicillin.jpg";
import xray from "../../assets/imgs/xray.jpg";
import pacemaker from "../../assets/imgs/pacemaker.jpg";
import microwave from "../../assets/imgs/microwave.jpg";
import glue from "../../assets/imgs/glue.jpg";
import nuclear from "../../assets/imgs/nuclear.jpg";

interface Article {
  id: string;
  category: string;
  title: string;
  date: string;
  author: string;
  img: string;
  alt: string;
  description: string;
}

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

export default function Breakthrough() {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<"added" | "removed">("added");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [showShareFeedback, setShowShareFeedback] = useState(false);

  const articleData: Article = {
    id: "failures-to-breakthroughs",
    category: "Genius & Folly",
    title: "Six Scientific Failures That Led to Major Breakthroughs",
    date: "October 27, 2025",
    author: "Olu Jacobs",
    img: lab,
    alt: "Laboratory experiment scene",
    description:
      "Science is often portrayed as a straight staircase to truth, but many of its greatest leaps started with a misstep. Failed experiments, stray bacteria, overheated equipment—these tiny disasters reshaped medicine, physics, technology and even daily life. This feature explores six moments where mistakes didn’t just guide innovation; they became the spark that rewrote what humanity thought possible.",
  };

  useEffect(() => {
    const saved: Article[] = JSON.parse(
      localStorage.getItem("savedLoopArticles") || "[]"
    );
    setSavedIds(saved.map((item) => item.id));
  }, []);

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
      className="text-start py-22 px-4 mx-auto max-w-4xl relative"
    >
      <motion.div
        variants={floatingButtonVariants}
        initial="hidden"
        animate="visible"
        className="fixed right-4 md:right-40 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200"
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
          Six Scientific Failures,
          <span className="block md:inline">Now Breakthroughs</span>
        </motion.h1>

        <motion.div
          className="flex items-center justify-center pt-3 text-gray-500 mb-10"
          variants={textVariants}
        >
          <span className="mr-3">{articleData.date}</span>
          <span>•</span>
          <span className="ml-3">
            by
            <span className="ml-1.5 font-medium text-gray-700">
              {articleData.author}
            </span>
          </span>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="overflow-hidden mb-6 px-3">
          <motion.img
            src={lab}
            alt="Laboratory experiment scene"
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
            {/* Failure is often a hidden ingredient of discovery; some experiments
            that 'failed' paved the way for paradigm shifts. Through archival
            research and interviews, this article follows six cases where
            apparent setbacks revealed new routes to understanding the world—and
            in doing so, saved lives, transformed medicine, and reshaped modern
            civilization. */}
            Science is often portrayed as a straight staircase to truth, but
            many of its greatest leaps started with a misstep. Failed
            experiments, stray bacteria, overheated equipment—these tiny
            disasters reshaped medicine, physics, technology and even daily
            life. This feature explores six moments where mistakes didn’t just
            guide innovation; they became the spark that rewrote what humanity
            thought possible.
          </motion.p>
        </div>
      </AnimatedSection>

      <div className="my-14 space-y-14 px-1.5">
        {[
          {
            title: "1. Penicillin — A Dirty Petri Dish That Saved the World",
            img: penicillin,
            alt: "Penicillium drug",
            content:
              "Alexander Fleming didn't set out to change medicine in 1928. He was simply studying staphylococcal bacteria, went on holiday, and returned to find mold blooming across a forgotten petri dish. Instead of tossing the spoiled sample, he noticed something odd: the bacteria around the mold were dead, as if an invisible barrier had formed. The mold, Penicillium notatum, produced a substance that erased bacteria with ruthless precision. Fleming recognized its power, but even he didn't foresee antibiotics transforming human survival. What began as laboratory sloppiness became a new medical era—one where infections that once killed millions became treatable within days. The world owes an immeasurable debt to one unwashed dish.",
          },
          {
            title: "2. X-Rays — Wilhelm Röntgen's Glowing Accident",
            img: xray,
            alt: "doctor assessing an X-ray image",
            content:
              "In 1895, Wilhelm Röntgen was investigating cathode rays—harmless, low-energy stuff—when a fluorescent screen across the room began to glow. The rays he was studying shouldn't have caused that. Puzzled, he darkened the room and continued experimenting, eventually placing his hand between the tube and the screen. He saw his bones. Röntgen had stumbled upon a hidden slice of the electromagnetic spectrum, soon named 'X-rays.' This accidental glow became one of medicine's most powerful diagnostic tools. In weeks, scientists replicated the discovery; in months, hospitals adopted it. A failure to predict the behavior of mysterious rays opened a window into the human body itself.",
          },
          {
            title: "3. The Pacemaker — A Circuit Running Too Slowly",
            img: pacemaker,
            alt: "Doctor holding a pacemaker device",
            content:
              "Electrical engineer Wilson Greatbatch was building a device to record irregular heartbeats. While assembling the circuit, he reached for a resistor but grabbed the wrong one—a mistake every engineering student knows all too well. Instead of recording pulses, the circuit produced a gentle, rhythmic electrical signal—eerily similar to a human heartbeat. Greatbatch immediately knew what he had in his hands: not a diagnostic tool, but something that could restore a failing heart's rhythm. His 'error' became the first implantable pacemaker, a device now carried by millions. A swapped component meant for data capture became an instrument of life.",
          },
          {
            title:
              "4. Microwave Ovens — A Melted Candy Bar Sparks a Kitchen Revolution",
            img: microwave,
            alt: "Microwave oven",
            content:
              "Percy Spencer, a self-taught engineer, was testing magnetrons—the vacuum tubes used in radar systems—when he noticed a chocolate bar in his pocket begin to melt. Confused, he placed popcorn kernels near the device. They popped. Spencer had unknowingly exposed the food to microwave radiation, which agitates water molecules and heats food rapidly. What was supposed to be a dry engineering test became the origin of a household appliance that redefined cooking convenience. A radar engineer trying to improve communication systems accidentally modernized the global kitchen.",
          },
          {
            title:
              "5. Superglue — A Material Too Sticky to Use... Until It Was",
            img: glue,
            alt: "glue illustration",
            content:
              "During World War II, chemist Harry Coover was searching for heat-resistant materials for gun sights. Instead, he created cyanoacrylates—compounds that stuck to everything, including the instruments meant to measure them. The substance was shelved as useless. Years later, while working on another project, Coover and his colleague Fred Joyner rediscovered the glue and finally recognized its potential. What had once been an annoyance became one of the strongest, most versatile adhesives ever produced—vital in manufacturing, medicine, and everyday household repairs. Failure transformed into a multi-billion dollar innovation hiding in plain sight.",
          },
          {
            title: "6. Nuclear Fission — A Measurement That Seemed Impossible",
            img: nuclear,
            alt: "Nuclear fission illustration",
            content:
              "In 1938, physicists Otto Hahn and Fritz Strassmann found that uranium bombarded with neutrons produced barium—an impossibly lighter element. Their calculations suggested the atom had split, but that wasn't supposed to happen. They assumed they were wrong. Lise Meitner and her nephew Otto Frisch later explained the process: the uranium nucleus had indeed fractured, releasing vast energy. What began as an 'impossible result' became a cornerstone of nuclear physics—leading to reactors, weapons, and a new understanding of atomic structure. A result dismissed as experimental error revealed a force powerful enough to reshape geopolitics and energy for generations.",
          },
        ].map((breakthrough, index) => (
          <AnimatedSection key={index} className="space-y-6">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium"
              variants={textVariants}
            >
              {breakthrough.title}
            </motion.h2>
            <motion.div
              className="overflow-hidden mb-6 md:mx-20"
              variants={imageVariants}
            >
              <img
                src={breakthrough.img}
                alt={breakthrough.alt}
                className="w-full h-48 md:h-105 object-cover"
              />
            </motion.div>
            <motion.p
              className="mb-6 text-[#767676] leading-7"
              variants={textVariants}
            >
              {breakthrough.content}
            </motion.p>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <motion.p className="text-[#767676] pt-3" variants={textVariants}>
          These six stories share a quiet, universal truth: discovery is rarely
          a straight path. The human instinct to pause, notice, and question the
          unexpected has given us antibiotics, modern medicine, global
          communication, faster cooking, sticky miracles, and the key to the
          atom. Science advances not only from brilliance but from curiosity in
          the face of failure. Every misstep holds the potential for
          transformation when examined with patient, stubborn wonder.
        </motion.p>
      </AnimatedSection>

      <AnimatePresence>
        {popUp && <BookmarkPopup key="bookmark-popup" type={popUpType} />}
      </AnimatePresence>
    </motion.div>
  );
}
