import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkIconSolid } from "@heroicons/react/24/solid";
import ShareButton from "../components/shareButton";

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

export default function Saved() {
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const stored: Article[] = JSON.parse(
      localStorage.getItem("savedLoopArticles") || "[]",
    );
    setSavedArticles(stored);
  }, []);

  const removeArticle = (id: string) => {
    const updated = savedArticles.filter((item) => item.id !== id);
    setSavedArticles(updated);
    localStorage.setItem("savedLoopArticles", JSON.stringify(updated));
  };

  if (savedArticles.length === 0) {
    return (
      <div className="px-5 max-w-lg mx-auto flex flex-col items-center justify-center h-[90vh] space-y-4">
        <h1 className="text-[1.375rem] font-semibold">Your Saved Articles</h1>
        <p className="text-center mt-3 text-[#6e7780] dark:text-[#d4d4d8]">
          You haven't saved anything yet, but when you <br /> do, it will show
          up. Use the Save button <br /> on articles to save items for later.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-5.5 lg:px-3">
      <div className="max-w-[75rem] mx-auto">
        <div className="mb-10">
          <h1 className="text-[1.375rem] pt-1.5 font-semibold">
            Your Saved Articles
          </h1>
          <p className="text-[#6e7780] mt-2 dark:text-[#d4d4d8]">
            Read them anytime, even offline.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 xl:grid-cols-3 md:gap-x-10 md:gap-y-14">
          {savedArticles.map((article) => (
            <div
              key={article.id}
              className="flex flex-col rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-black/5 dark:border-[#333333] dark:bg-[#2c2c2e]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.img}
                  alt={article.alt}
                  className="w-full h-48 md:h-52 lg:h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute animate-bounce [animation-duration:2s] top-3 left-2.5 bg-[#0ab39c] text-white text-sm px-2.5 py-1.5 rounded-full tracking-wider font-frozen shadow-sm">
                  {article.category}
                </div>
              </div>

              <div className="flex-1 px-4 py-3 flex flex-col">
                <Link
                  to={`/articles/${article.id}`}
                  className="text-[1.37rem] font-bold leading-tight hover:text-[#0ab39c] transition-colors duration-200 mb-2.5"
                >
                  {article.title}
                </Link>

                <div className="flex items-center text-sm text-[#989797] mb-2.5 flex-wrap gap-2">
                  <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
                    {article.author},
                  </span>
                  <span className="mr-3">{article.date}</span>
                </div>

                <p className="text-[#767676] dark:text-[#d4d4d8] leading-5.5 mb-5 flex-1 line-clamp-5">
                  {article.description}
                </p>

                <div className="flex justify-between pt-3.5 border-t border-gray-200 dark:border-[#333333]">
                  <div>
                    <Link
                      to={`/articles/${article.id}`}
                      className="inline-flex items-center text-[#0ab39c] font-frozen hover:text-[#0ab39c] transition-colors duration-200 group"
                    >
                      Continue
                      <ChevronDoubleRightIcon className="size-3.5 ml-1 group-hover:translate-x-1 transition-transform duration-200" />{" "}
                    </Link>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => removeArticle(article.id)}
                      className="hover:bg-gray-50 p-1 rounded-full transition-colors group/icon"
                      title="Unsave"
                    >
                      <BookmarkIconSolid className="size-4.5 cursor-pointer active:scale-90 transition-transform text-[#0ab39c]" />
                    </button>
                    <ShareButton
                      article={{
                        title: article.title,
                        url: `/articles/${article.id}`,
                        description: article.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
