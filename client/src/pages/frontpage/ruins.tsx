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

import greatZimbabwe from "../../assets/imgs/great-zimbabwe.jpg";
import machuPicchu from "../../assets/imgs/machuPicchu.jpg";
import angkorWat from "../../assets/imgs/angkor-wat.jpg";
import palmyra from "../../assets/imgs/palmyra.jpg";
import parthenon from "../../assets/imgs/parthenon.jpg";
import colosseum from "../../assets/imgs/colosseum.jpg";

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
  (article) => article.id === "architectural-ruins"
)!;

const ruins = [
  {
    title:
      "1. The Colosseum — A Monument That Outlived Its Empire (Rome, Italy)",
    img: colosseum,
    alt: "Ruins of the Colosseum in Rome",
    content:
      "Rome's Colosseum is instantly recognizable: a massive amphitheater with missing walls, broken arches, and exposed interior chambers. Earthquakes, stone theft, and centuries of neglect transformed it from a complete oval into the iconic semi-ruin known today. But the Colosseum's story didn't end when its gladiators did. Even damaged, it remains a symbol of a civilization both brilliant and brutal. Its surviving corridors reveal engineering genius, while its fragmented stones echo the cost of entertainment built on human suffering. Millions visit each year not to see a ruined stadium, but to experience a structure that somehow feels alive in its incompleteness. Its ruin gives it depth, weight, and honesty.",
  },
  {
    title:
      "2. Machu Picchu — The Hidden Citadel That Outsmarted Time (Cusco Region, Peru)",
    img: machuPicchu,
    alt: "Machu Picchu ruins with mountainous background",
    content:
      "Machu Picchu rises in the Peruvian Andes like a vision that almost shouldn't be real. Once a royal Incan estate and ceremonial retreat, it was abandoned in the 16th century during the empire's collapse and quickly swallowed by cloud forest. For centuries, it existed mostly in local stories until its early 20th-century rediscovery revealed terraces, temples, and stairways brushed by mist. Its partial ruin only intensifies its magic. The broken stones, the fragments of sun-aligned structures, the way nature clings to every ledge—everything feels deliberate, like the Inca crafted a city to remain impressive even in decay. Machu Picchu endures as a monument to human ingenuity but also to nature's ability to cradle and conceal the past.",
  },
  {
    title:
      "3. Great Zimbabwe — The Stone Kingdom That Refused to Vanish (Masvingo Province, Zimbabwe)",
    img: greatZimbabwe,
    alt: "Great Zimbabwe ruins",
    content:
      "In southeastern Zimbabwe stand the remains of a once-thriving medieval capital: a sprawling stone city built entirely without mortar. Great Zimbabwe's curved walls and towering enclosures speak of a wealthy society that dominated regional trade. When its population dispersed in the 15th century—likely due to environmental pressure and political transition—the city was left to the elements. Yet the granite walls still lock together with stubborn precision, forming passageways and ceremonial spaces that draw archaeologists from around the world. Even in ruin, Great Zimbabwe challenges long-held assumptions about African architecture, reminding us that cultural sophistication flourished far beyond the borders of Europe and the Middle East. Its silence is a kind of power, a whispered insistence that forgotten kingdoms shaped history too.",
  },
  {
    title:
      "4. The Parthenon — A Shattered Temple Still Shaping Civilizations (Athens, Greece)",
    img: parthenon,
    alt: "Ruins of the Parthenon temple in Athens",
    content:
      "The Parthenon sits atop the Acropolis as if keeping watch over Western civilization itself. Built to celebrate Athena and the political confidence of classical Athens, it has endured invasions, fires, earthquakes, and a catastrophic explosion in the 17th century. What stands now is a graceful frame of columns and carved fragments. Its ruin, far from diminishing its value, has strengthened its symbolic weight. The Parthenon continues to shape global ideas about democracy, aesthetics, and cultural heritage. Even as restoration efforts work carefully to preserve what remains, its broken edges invite reflection on impermanence and the long arc of human ambition. It is a masterpiece precisely because it has survived in pieces.",
  },
  {
    title:
      "5. Angkor Wat (and the Greater Angkor Region) — Temples Entangled in a Living Jungle (Siem Reap Province, Cambodia)",
    img: angkorWat,
    alt: "Angkor Wat temple ruins",
    content:
      "Angkor Wat is only one piece of a vast temple complex that once formed the spiritual and political heart of the Khmer Empire. Over centuries, conflict, resource strain, and shifting capitals left many structures abandoned, offering the jungle an opportunity it seized with enthusiasm. Roots thicker than a person's arm curl through stone corridors, and trees burst through collapsed rooftops, turning every ruin into a collaboration between nature and forgotten artisans. Instead of diminishing the site's beauty, this entanglement enhances it. Angkor's half-buried towers and carved reliefs radiate a dreamlike intensity, as if the past is emerging and disappearing in the same moment. Even in ruin, Angkor remains one of humanity's most mesmerizing architectural feats.",
  },
  {
    title:
      "6. Palmyra — A Desert Crossroads Reduced but Not Erased (Homs Governorate, Syria)",
    img: palmyra,
    alt: "Ruins of Palmyra with desert background",
    content:
      "Once a wealthy caravan city connecting the Roman world to Persia, India, and Arabia, Palmyra flourished through cultural exchange. Its grand colonnades, triumphal arches, and temple complexes announced its importance to travelers crossing the Syrian desert. Time alone did not ruin Palmyra—conflicts, shifting trade routes, and more recently, devastating destruction contributed to its fragmentation. Yet even the broken sections carry a fierce dignity. Sunlight slides across the surviving columns as though illuminating an ancient memory. Palmyra's ruins speak of a city that once thrived on connection, negotiation, and cosmopolitan identity, reminding visitors today that cultural crossroads are fragile treasures worth defending.",
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

function RuinItem({ ruin }: { ruin: (typeof ruins)[0]; index: number }) {
  return (
    <AnimatedSection className="space-y-6">
      <motion.h2
        className="text-[1.375rem] md:text-2xl font-medium"
        variants={textVariants}
      >
        {ruin.title}
      </motion.h2>
      <motion.div className="overflow-hidden mb-6" variants={imageVariants}>
        <img
          src={ruin.img}
          alt={ruin.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </motion.div>
      <motion.p
        className="mb-6 text-[#767676] leading-7"
        variants={textVariants}
      >
        {ruin.content}
      </motion.p>
    </AnimatedSection>
  );
}

export default function Ruins() {
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
        className="text-start pb-24 px-4 mx-auto max-w-4xl relative"
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
            Six Architectural Marvels, Now Ruins — But Still Awe
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
              Ruins invite imagination in ways polished monuments never can.
              They are the bones of past civilizations, exposed to wind, rain,
              and time, yet still powerful enough to shift how we think about
              beauty, ambition, and impermanence. This feature explores six
              extraordinary structures that have partially crumbled into silence
              but continue to inspire awe, scholarship, and cultural
              fascination. Their stones may be fractured, but their stories
              remain unbroken.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="my-14 space-y-14">
          {ruins.map((ruin, index) => (
            <RuinItem key={index} ruin={ruin} index={index} />
          ))}
        </div>

        <AnimatedSection>
          <motion.p className="text-[#767676] pt-3" variants={textVariants}>
            Ruins preserve what polished monuments can't: the reminders of
            fragility, ambition, and the unpredictable forces that shape
            civilizations. These six architectural marvels are incomplete, yet
            they continue to inspire curiosity, scholarship, preservation
            efforts, and storytelling. Their broken stones are not losses but
            invitations—proof that beauty can endure long after purpose fades,
            and that even shattered structures can cast long, astonishing
            shadows across history.
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
