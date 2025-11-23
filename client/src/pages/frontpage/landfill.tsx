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

import copenhill from "../../assets/imgs/copenhill.jpg";
import reppie from "../../assets/imgs/reppie.jpg";
import sweden from "../../assets/imgs/sweden.jpg";
import instanbul from "../../assets/imgs/turkplant.png";
import beijing from "../../assets/imgs/chinaPlant.jpg";
import tuasone from "../../assets/imgs/tuasone.png";
import plant from "../../assets/imgs/manilaPlant.jpeg";

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

const articleData = (articles["The Living Planet"] as Article[]).find(
  (article) => article.id === "landfill-to-loop"
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

export default function LandfillToLoop() {
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
          Seven Cities Turning
          <span className="block md:inline"> Trash into Power</span>
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
            The modern city faces two ancient problems: waste and want. What to
            do with mountains of trash — and how to feed the endless appetite
            for energy. Across the globe, some cities are discovering that the
            answer to both problems can come from the same source. Here are 7
            cities that have turned waste into power, lighting homes and warming
            streets from what once filled their landfills.
          </motion.p>
        </div>
      </AnimatedSection>

      <div className="my-14 space-y-14 px-1.5">
        {[
          {
            title:
              "1. Copenhagen, Denmark — Where Waste Powers Homes and Skiers",
            img: copenhill,
            alt: "CopenHill Waste to Energy Plant",
            content:
              "The plant at Amager Bakke (also known as CopenHill) in Copenhagen not only burns nearly 400,000 tons of municipal waste annually to generate both electricity and district heating, but it also transforms the facility's rooftop into an 85-metre ski slope, climbing wall and public recreation space. By embedding energy recovery into civic life and making the waste-plant a landmark, Copenhagen demonstrates how infrastructure and urban life can merge.",
          },
          {
            title: "2. Stockholm, Sweden — Keeping Landfills Almost Empty",
            img: sweden,
            alt: "Stockholm Waste to Energy Plant",
            content:
              "Sweden, known for its high recycling rates, sends less than 1 % of its municipal waste to landfills. The rest is recycled or incinerated to produce power and heat for homes and industries. The country's success lies in combining policy (strict landfill bans), infrastructure (34 + waste-to-energy plants) and culture (waste is seen as resource). That integrated model gives Stockholm one of the strongest circular-economy examples in the world.",
          },
          {
            title: "3. Istanbul, Turkey — A Megacity's Waste Becomes Energy",
            img: instanbul,
            alt: "Istanbul Waste to Energy Plant",
            content:
              "In the Eyüp district, the Istanbul Waste Power Plant processes around 3,000 tons of waste daily and produces approximately 78 MWh of electricity and 175 MWh of thermal energy — sufficient to meet the needs of a million people. The scale of the operation and the fact that it addresses both disposal and urban energy stress in one of the world's largest cities makes it a model for rapidly urbanising regions.",
          },
          {
            title:
              "4. Addis Ababa, Ethiopia — Africa's First Big Waste-to-Energy Plant",
            img: reppie,
            alt: "Reppie Waste to Energy Plant",
            content:
              "The Reppie Waste‑to‑Energy Plant in Addis Ababa was built on a reclaimed landfill site, converting the city's waste into roughly 25 MW of electricity while cutting methane emissions that would otherwise escape from open dumps. In doing so, it shows that waste-to-energy is not only for rich countries — with the right design and financing, it can work in emerging cities with rapid growth and major waste challenges.",
          },
          {
            title:
              "5. Beijing, China — Scaling Up Waste-to-Energy at National Level",
            img: beijing,
            alt: "Beijing Waste to Energy Plant",
            content:
              "In China, plants such as the Asuwei Domestic Waste Incineration Power Plant handle thousands of tons of household waste daily, convert it into 420 million kWh of green electricity per year, and reclaim metals and other materials from the slag. China's massive deployment of waste-to-energy technology — combined with waste-sorting policies and local innovation — presents not just a city-level example but a national strategy for converting waste into energy and materials.",
          },
          {
            title: "6. Singapore — An Island That Eats Its Own Trash",
            img: tuasone,
            alt: "Tuas Nexus Waste to Energy Plant",
            content:
              "The city-state of Singapore is advancing the Tuas Nexus project, which integrates waste-to-energy, water reclamation and high-density land use. With little space for landfills and a premium on land and resources, Singapore turns its municipal solid waste into fuel and reclaim water in a closed-loop system. (See reports on Gulf / Asian cities turning waste into wealth.) This dual-loop model offers lessons for dense cities everywhere: when waste and utilities are re-imagined as interconnected, radical efficiency becomes possible.",
          },
          {
            title:
              "7. Manila, Philippines — From Wasteland to Waste-to-Energy Model",
            img: plant,
            alt: "Manila Waste to Energy Plant",
            content:
              "In the Quezon City area of Metro Manila, a former uncontrolled landfill is being transformed into a waste-to-energy model project, showing how legacy disposal sites can become engines for clean energy and land regeneration. Through design, extraction and reclamation, the city illustrates how strategic intervention and public-private partnerships can convert urban waste legacies into sustainable infrastructure.",
          },
        ].map((city, index) => (
          <AnimatedSection key={index} className="space-y-6">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium"
              variants={textVariants}
            >
              {city.title}
            </motion.h2>
            <motion.div
              className="overflow-hidden mb-6 md:mx-20"
              variants={imageVariants}
            >
              <img
                src={city.img}
                alt={city.alt}
                className="w-full h-48 md:h-105 object-cover"
              />
            </motion.div>
            <motion.p
              className="mb-6 text-[#767676] leading-7"
              variants={textVariants}
            >
              {city.content}
            </motion.p>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <motion.p className="text-[#767676] pt-3" variants={textVariants}>
          From these cities, a quiet revolution burns: garbage turned into green
          gold. Their success shows that the future of energy might not lie deep
          underground, but in what we throw away every day. These cities span
          different geographies, income levels and waste-profiles — yet they
          share a common pattern: waste is treated not as an after-thought but
          as a feedstock. Energy systems that integrate thermal recovery,
          recycling, and civic engagement are outperforming traditional disposal
          models. As more urban centres grow, the question shifts from "What do
          we do with trash?" to "What do we do with the value embedded in it?"
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
  );
}
