import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

import BookmarkPopup from "../../components/bookmark";
import { BookmarkIcon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import boardroom from "../../assets/imgs/boardroom.jpg";
import enron from "../../assets/imgs/enron.jpg";
import worldcom from "../../assets/imgs/worldCom.png";
import wellsFargo from "../../assets/imgs/wellsFargo.jpg";
import toshiba from "../../assets/imgs/toshiba.jpg";
import lehman from "../../assets/imgs/lehman.jpg";
import ftx from "../../assets/imgs/ftx.jpg";
import wirecard from "../../assets/imgs/wirecard.jpg";

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

export default function CorporateFailures() {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<"added" | "removed">("added");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [showShareFeedback, setShowShareFeedback] = useState(false);

  const articleData: Article = {
    id: "corporate-failures-governance",
    category: "Money & Madness",
    title: "Seven Corporate Failures That Reshaped Modern Governance",
    date: "July 26, 2025",
    author: "David Chen",
    img: boardroom,
    alt: "Corporate building facade representing business failures",
    description:
      "Corporate collapse is rarely sudden—it's usually the slow unraveling of ambition, secrecy, and flawed incentives. This article revisits seven infamous failures whose shockwaves reshaped modern oversight and governance.",
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
      className="text-start pt-19 pb-24 px-4 mx-auto max-w-4xl relative"
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
          Seven Corporate Failures That{" "}
          <span className="block md:inline">Reshaped Modern Governance</span>
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
            src={boardroom}
            alt="Corporate building facade representing business failures"
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
            Corporate collapse is rarely sudden—it's usually the slow unraveling
            of ambition, secrecy, and flawed incentives. This article revisits
            seven infamous failures whose shockwaves reshaped modern oversight,
            from manipulated accounts to reckless cultures that prized growth
            over truth. Through financial autopsies and governance lessons, it
            explores how disaster became the catalyst for stronger rules,
            sharper scrutiny, and a deeper understanding of what responsible
            leadership truly demands...
          </motion.p>
        </div>
      </AnimatedSection>

      <div className="my-14 space-y-14 px-1.5">
        {[
          {
            title: "1. Enron (2001) — Innovation Built on Illusion",
            img: enron,
            alt: "Enron stocks plummet",
            content:
              "Enron dazzled the world with its reputation for bold energy trading, complex financial engineering, and oversized ambition. But beneath the glow sat an empire propped up by hidden debt, inflated profits, and a culture that rewarded deception over discipline. When its accounting tricks were exposed, Enron collapsed in spectacular fashion, wiping out billions and shattering public trust. The fallout birthed the Sarbanes–Oxley Act, which reshaped how corporations audit, disclose, and govern themselves, proving that transparency can't be optional.",
          },
          {
            title: "2. WorldCom (2002) — When Numbers Became Fiction",
            img: worldcom,
            alt: "WorldCom corporate headquarters",
            content:
              "WorldCom engineered one of the largest frauds in corporate history by disguising ordinary expenses as lucrative investments and inflating earnings by more than $11 billion. What looked like steady growth was really a spreadsheet built out of smoke. When internal auditors uncovered the scheme, the company imploded, and investors suffered massive losses. Its demise pushed regulators to strengthen internal auditing roles, clarify accounting standards, and demand clearer separation between executives and those tasked with monitoring them.",
          },
          {
            title: "3. Wells Fargo (2016) — Growth at Any Cost",
            img: wellsFargo,
            alt: "Wells Fargo bank branch exterior",
            content:
              "For years, Wells Fargo employees were pressured to meet unrealistic sales quotas, leading to the creation of millions of fake accounts—often without customer permission or knowledge. What began as a culture of 'cross-selling excellence' spiraled into one of modern banking's biggest ethical breakdowns. The scandal triggered leadership turnovers, billions in fines, and strict oversight from U.S. regulators. It also prompted companies everywhere to rethink incentive structures and prioritize ethical performance over aggressive metrics.",
          },
          {
            title:
              "4. Toshiba Accounting Scandal (2015) — The Weight of Corporate Tradition",
            img: toshiba,
            alt: "Toshiba corporate headquarters in Tokyo",
            content:
              "Toshiba's leadership culture valued obedience and perfection, creating an internal environment where subordinates felt compelled to meet profits—even if they had to invent them. Over several years, profits were overstated by roughly $1.2 billion through improper accounting practices. The scandal forced resignations at the highest levels and drove Japan to strengthen corporate governance codes, mandate more independent directors, and address long-standing issues around hierarchy and transparency in major firms.",
          },
          {
            title:
              "5. Lehman Brothers (2008) — A Collapse Felt Around the Globe",
            img: lehman,
            alt: "Lehman Brothers headquarters during financial crisis",
            content:
              "Lehman masked its true financial risk through exotic mortgage-backed securities and the infamous Repo 105 maneuver, temporarily shifting debt off its balance sheet to appear stable. When the U.S. housing bubble burst, Lehman was exposed and ultimately filed the largest bankruptcy in American history. The aftermath froze global credit markets and triggered worldwide reforms, including the Dodd–Frank Act, stricter liquidity requirements, and mandatory stress testing to detect systemic risk before it spirals out of control.",
          },
          {
            title: "6. FTX (2022) — When Hype Outran Responsibility",
            img: ftx,
            alt: "FTX cryptocurrency exchange logo and branding",
            content:
              "FTX rose meteorically as the 'friendly, futuristic' crypto exchange run by a founder celebrated as a genius. Behind that façade, customer deposits were quietly funneled into speculative bets through a sister company with virtually no oversight. When cracks appeared, billions evaporated in days, shaking confidence across the entire crypto market. The collapse accelerated global efforts to regulate digital asset platforms, reinforcing that trust cannot be built on charisma or marketing alone.",
          },
          {
            title: "7. Wirecard (2020) — A Fintech Mirage",
            img: wirecard,
            alt: "Wirecard fintech company offices",
            content:
              "Wirecard was long seen as Europe's answer to Silicon Valley fintech stars—until auditors revealed that €1.9 billion in supposed cash simply didn't exist. Forged documents, phantom subsidiaries, and a willingness to bully critics allowed the illusion to persist for years. Its downfall spurred a major overhaul of Germany's financial oversight systems, strengthened whistleblower protections, and forced regulators to confront the risks of being too cozy with rapid-growth tech companies.",
          },
        ].map((failure, index) => (
          <AnimatedSection key={index} className="space-y-6">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium"
              variants={textVariants}
            >
              {failure.title}
            </motion.h2>
            <motion.div
              className="overflow-hidden mb-6 md:mx-20"
              variants={imageVariants}
            >
              <img
                src={failure.img}
                alt={failure.alt}
                className="w-full h-48 md:h-105 object-cover"
              />
            </motion.div>
            <motion.p
              className="mb-6 text-[#767676] leading-7"
              variants={textVariants}
            >
              {failure.content}
            </motion.p>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <motion.p className="text-[#767676] pt-3" variants={textVariants}>
          Each scandal left wreckage: lost savings, broken trust, and industries
          forced to reckon with their blind spots. Yet every collapse also
          pushed global governance forward. Regulators tightened rules. Boards
          became more accountable. Auditing turned more independent and less
          ceremonial. Culture—often the invisible culprit—became a priority
          instead of an afterthought. These failures reveal a simple truth:
          corporate governance doesn't evolve when things go right, but when
          things go wrong. The world learns more from shattered empires than
          from flawless ones, and those lessons continue to define how companies
          operate today.
        </motion.p>
      </AnimatedSection>

      <AnimatePresence>
        {popUp && <BookmarkPopup key="bookmark-popup" type={popUpType} />}
      </AnimatePresence>
    </motion.div>
  );
}
