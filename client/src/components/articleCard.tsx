import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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

interface AnimatedArticleCardProps {
  article: Article;
  isSaved: boolean;
  handleBookmarkClick: (article: Article) => void;
}

export default function AnimatedArticleCard({
  article,
  isSaved,
  handleBookmarkClick,
}: AnimatedArticleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-black/5"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ y: -6, scale: 1.02 }}
      >
        <div className="relative overflow-hidden">
          <img
            src={article.img}
            alt={article.alt}
            className="w-full h-48 md:h-52 lg:h-48 object-cover"
          />

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -15 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="absolute top-3 left-2.5 bg-[#0ab39c] text-white text-sm px-2.5 py-1.5 rounded-full tracking-wider font-frozen shadow-sm"
          >
            {article.category}
          </motion.div>
        </div>

        <div className="flex-1 p-4 flex flex-col">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            <Link
              to={`/articles/${article.id}`}
              className="text-[1.313rem] font-bold leading-6.5 text-gray-900 hover:text-[#0ab39c] transition-colors duration-200 mb-3 block"
            >
              {article.title}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 8 }}
            transition={{ delay: 0.35, duration: 0.35 }}
            className="flex items-center text-sm text-[#989797] mb-3 flex-wrap gap-2"
          >
            <span className="font-medium text-gray-600">{article.author},</span>
            <span>{article.date}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 8 }}
            transition={{ delay: 0.45, duration: 0.35 }}
            className="text-[#767676] leading-5.5 mb-5 flex-1 line-clamp-5"
          >
            {article.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 8 }}
            transition={{ delay: 0.55, duration: 0.35 }}
            className="flex justify-between pt-3.5 border-t border-gray-200"
          >
            <Link
              to={`/articles/${article.id}`}
              className="inline-flex items-center text-[#0ab39c] font-frozen hover:text-[#089c8a] transition-colors duration-200"
            >
              Read Me
              <motion.span
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="ml-1"
              >
                <ChevronDoubleRightIcon className="size-3.5" />
              </motion.span>
            </Link>

            <div className="flex gap-3">
              <motion.div
                onClick={() => handleBookmarkClick(article)}
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="cursor-pointer"
              >
                {isSaved ? (
                  <BookmarkIconSolid className="size-4.5 text-[#0ab39c]" />
                ) : (
                  <BookmarkIcon className="size-4.5 text-gray-800 hover:text-[#0ab39c]" />
                )}
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <ShareButton
                  article={{
                    title: article.title,
                    url: `/articles/${article.id}`,
                    description: article.description,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
