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
    y: 40,
    scale: 0.97,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: "easeIn",
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
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on visibility
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px", // Slight negative margin at bottom
      }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array - runs once

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      whileHover={{
        y: -6,
        scale: 1.02,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={article.img}
          alt={article.alt}
          className="w-full h-48 md:h-52 lg:h-48 object-cover"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -15 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="absolute top-3 left-2.5 animate-bounce [animation-duration:2s] bg-[#0ab39c] text-white text-sm px-2.5 py-1.5 rounded-full tracking-wider font-medium shadow-sm"
        >
          {article.category}
        </motion.div>
      </div>

      <div className="flex-1 p-4 flex flex-col">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link
            to={`/articles/${article.id}`}
            className="text-[1.313rem] font-bold leading-6.5 text-gray-900 hover:text-[#0ab39c] transition-colors duration-200 mb-3 group block"
          >
            {article.title}
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center text-sm text-[#989797] mb-3 flex-wrap gap-2"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3, duration: 0.35 }}
        >
          <span className="font-medium text-gray-600">{article.author},</span>
          <span className="mr-3">{article.date}</span>
        </motion.div>

        <motion.p
          className="text-[#767676] leading-5.5 mb-5 flex-1 line-clamp-5"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.4, duration: 0.35 }}
        >
          {article.description}
        </motion.p>

        <motion.div
          className="flex justify-between pt-3.5 border-t border-gray-200"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5, duration: 0.35 }}
        >
          <div>
            <Link
              to={`/articles/${article.id}`}
              className="inline-flex items-center text-[#0ab39c] font-semibold hover:text-[#089c8a] transition-colors duration-200 group"
            >
              Read Me
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <ChevronDoubleRightIcon className="size-3.5 ml-1" />
              </motion.div>
            </Link>
          </div>
          <div className="space-x-3 flex">
            <motion.div
              onClick={() => handleBookmarkClick(article)}
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="cursor-pointer"
            >
              {isSaved ? (
                <BookmarkIconSolid className="size-4.5 transition-transform text-[#0ab39c]" />
              ) : (
                <BookmarkIcon className="size-4.5 transition-transform text-gray-800 hover:text-[#0ab39c]" />
              )}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
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
  );
}
