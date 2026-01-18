import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import articles from "../../constants/articles";
import BookmarkPopup from "../../components/bookmark";
import AnimatedArticleCard from "../../components/articleCard";
import Newsletter from "../../components/newsletter";

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

export default function Life() {
  const humanCurrentsArticles: Article[] =
    (articles as any)["Human Currents"] || [];
  const [popUp, setPopUp] = useState<boolean>(false);
  const [popUpType, setPopUpType] = useState<"added" | "removed">("added");
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const saved: Article[] = JSON.parse(
      localStorage.getItem("savedLoopArticles") || "[]",
    );
    setSavedIds(saved.map((item) => item.id));
  }, []);

  const handleBookmarkClick = (article: Article) => {
    const saved: Article[] = JSON.parse(
      localStorage.getItem("savedLoopArticles") || "[]",
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
    <div className="pt-10">
      <h1 className="text-center text-[1.375rem] mt-10 font-frozen">
        Human Currents
      </h1>

      <p className="text-center text-[#767676]  text-lg">
        The pulse of people, in all their messy glory.{" "}
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid grid-cols-1 max-w-[75rem] mx-auto py-14 gap-14 lg:grid-cols-2 xl:grid-cols-3 md:gap-x-10 md:gap-y-14 px-5 lg:px-3 relative"
      >
        {humanCurrentsArticles.map((article) => {
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

      <Newsletter />
    </div>
  );
}
