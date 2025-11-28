import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import articles from "../../constants/articles";
import BookmarkPopup from "../../components/bookmark";
import AnimatedArticleCard from "../../components/articleCard";

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 max-w-[75rem] mx-auto py-14 gap-12 sm:grid-cols-2 xl:grid-cols-3 md:gap-y-14 px-7 sm:px-5 relative"
    >
      {frontPageArticles.map((article, index) => {
        const isSaved = savedIds.includes(article.id);

        return (
          <motion.div
            key={article.id}
            variants={itemVariants}
            custom={index}
            layout
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <AnimatedArticleCard
              article={article}
              isSaved={isSaved}
              handleBookmarkClick={handleBookmarkClick}
            />
          </motion.div>
        );
      })}

      <AnimatePresence mode="wait">
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
