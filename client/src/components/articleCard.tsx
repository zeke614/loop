import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

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
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Only trigger once - remove observer after animation
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      {
        threshold: 0.15, // Slightly higher threshold
        rootMargin: "50px 0px -50px 0px", // Better margins
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
  }, [hasAnimated]);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      whileHover={{
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={article.img}
          alt={article.alt}
          className="w-full h-48 md:h-52 lg:h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.2, duration: 0.4 }}
          className="absolute top-3 left-3 bg-[#0ab39c] text-white text-xs px-3 py-1.5 rounded-full tracking-wider uppercase font-medium shadow-sm"
        >
          {article.category}
        </motion.div>
      </div>

      <div className="flex-1 py-4 px-4.5 flex flex-col">
        <Link
          to={`/articles/${article.id}`}
          className="text-[1.313rem] font-bold leading-6.5 text-gray-900 hover:text-[#0ab39c] transition-colors duration-200 mb-3 group"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            whileHover={{ x: 2 }}
            className="inline-block"
          >
            {article.title}
          </motion.span>
        </Link>

        <motion.div
          className="flex items-center text-sm text-[#989797] mb-3 flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <span className="font-medium text-gray-600">{article.author},</span>
          <span className="mr-3">{article.date}</span>
        </motion.div>

        <motion.p
          className="text-[#767676] leading-5.5 mb-5 flex-1 line-clamp-5"
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {article.description}
        </motion.p>

        <motion.div
          className="flex justify-between pt-3.5 border-t border-gray-200"
          initial={{ opacity: 0, y: 5 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <div>
            <Link
              to={`/articles/${article.id}`}
              className="inline-flex items-center text-[#0ab39c] font-semibold hover:text-[#0ab39c] transition-colors duration-200 group"
            >
              Read Me
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <ChevronDoubleRightIcon className="size-3.5 ml-1 transition-transform duration-200" />
              </motion.div>
            </Link>
          </div>
          <div className="space-x-4 flex">
            <motion.div
              onClick={() => handleBookmarkClick(article)}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {isSaved ? (
                <BookmarkIconSolid className="size-5 cursor-pointer transition-transform text-[#0ab39c]" />
              ) : (
                <BookmarkIcon className="size-5 cursor-pointer transition-transform text-gray-800 hover:text-[#0ab39c]" />
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
      </div>
    </motion.div>
  );
}
