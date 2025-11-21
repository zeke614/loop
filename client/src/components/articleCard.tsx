import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import articles from "../constants/articles";
import BookmarkPopup from "./bookmark";
import {
  ChevronDoubleRightIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import ShareButton from "./shareButton";

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

const cardVariants: Variants = {
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
  hidden: { scale: 1.05 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

function AnimatedArticleCard({
  article,
  isSaved,
  handleBookmarkClick,
}: {
  article: Article;
  isSaved: boolean;
  handleBookmarkClick: (article: Article) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        y: -6,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img
            src={article.img}
            alt={article.alt}
            className="w-full h-48 md:h-52 lg:h-48 object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="absolute animate-bounce [animation-duration:2s] top-3 left-3 bg-[#0ab39c] text-white text-xs px-3 py-1.5 rounded-full tracking-wider uppercase font-medium shadow-sm"
        >
          {article.category}
        </motion.div>
      </div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex-1 px-4 py-3 flex flex-col"
      >
        <Link
          to={`/articles/${article.id}`}
          className="text-[1.37rem] font-bold leading-tight text-gray-900 hover:text-[#0ab39c] transition-colors duration-200 mb-2.5 group"
        >
          <motion.span
            whileHover={{ x: 3 }}
            transition={{ duration: 0.15 }}
            className="inline-block"
          >
            {article.title}
          </motion.span>
        </Link>

        <motion.div
          className="flex items-center text-sm text-gray-500 mb-2.5 flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <span className="whitespace-nowrap">{article.date}</span>
          <span className="mx-1">•</span>
          <span>
            by
            <span className="text-gray-700 font-medium whitespace-nowrap ml-1.5">
              {article.author}
            </span>
          </span>
        </motion.div>

        <motion.p
          className="text-[#767676] leading-5 mb-5 flex-1 line-clamp-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {article.description}
        </motion.p>

        <motion.div
          className="flex justify-between pt-3 border-t border-gray-200"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div>
            <Link
              to={`/articles/${article.id}`}
              className="inline-flex items-center text-[#0ab39c] font-semibold hover:text-[#0ab39c] transition-colors duration-200 group"
            >
              Read Me
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
                <ChevronDoubleRightIcon className="size-3.5 ml-1 transition-transform duration-200" />
              </motion.div>
            </Link>
          </div>
          <div className="space-x-4 flex">
            <motion.div
              onClick={() => handleBookmarkClick(article)}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {isSaved ? (
                <BookmarkIconSolid className="size-5 cursor-pointer transition-transform text-[#0ab39c]" />
              ) : (
                <BookmarkIcon className="size-5 cursor-pointer transition-transform" />
              )}
            </motion.div>
            <ShareButton
              article={{
                title: article.title,
                url: `/articles/${article.id}`,
                description: article.description,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function FrontPageArticlesCard() {
  const frontPageArticles: Article[] = (articles as any)["Front Page"] || [];

  const [popUp, setPopUp] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<"added" | "removed">("added");
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const saved: Article[] = JSON.parse(
      localStorage.getItem("savedLoopArticles") || "[]"
    );
    setSavedIds(saved.map((item) => item.id));
  }, []);

  const handleBookmarkClick = (article: Article) => {
    const saved: Article[] = JSON.parse(
      localStorage.getItem("savedLoopArticles") || "[]"
    );
    const isAlreadySaved = saved.some((item) => item.id === article.id);

    let newSaved: Article[];

    if (isAlreadySaved) {
      newSaved = saved.filter((item) => item.id !== article.id);
      setPopUp(true);
      setPopUpType("removed");
    } else {
      newSaved = [...saved, article];
      setPopUpType("added");
      setPopUp(true);
    }

    localStorage.setItem("savedLoopArticles", JSON.stringify(newSaved));
    setSavedIds(newSaved.map((item) => item.id));
  };

  useEffect(() => {
    if (popUp) {
      const timer = setTimeout(() => {
        setPopUp(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popUp]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 max-w-[75rem] mx-auto py-14 gap-14 lg:grid-cols-2 xl:grid-cols-3 md:gap-x-10 md:gap-y-14 px-6 lg:px-3 relative"
    >
      {frontPageArticles.map((article) => {
        const isSaved = savedIds.includes(article.id);

        return (
          <AnimatedArticleCard
            key={article.id}
            article={article}
            isSaved={isSaved}
            handleBookmarkClick={handleBookmarkClick}
          />
        );
      })}

      <AnimatePresence>
        {popUp && <BookmarkPopup key="bookmark-popup" type={popUpType} />}
      </AnimatePresence>
    </motion.div>
  );
}
