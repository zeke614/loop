import { Link } from "react-router-dom";
import articles from "../constants/articles";

export default function ArticleCard() {
  return (
    <div className="grid grid-cols-1 mx-3 gap-12 lg:grid-cols-2 xl:grid-cols-3 md:gap-x-6 md:gap-y-14 px-4 sm:px-6 lg:px-8">
      {articles.map((article) => (
        <div
          key={article.id}
          className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
        >
          <div className="relative overflow-hidden">
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-48 sm:h-56 md:h-52 lg:h-48 xl:h-56 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute animate-bounce [animation-duration:2s] top-3 left-3 bg-[#04aa6d] text-white text-xs px-3 py-1.5 rounded-full tracking-wider uppercase font-medium shadow-sm">
              {article.category}
            </div>
          </div>

          <div className="flex-1 p-5 sm:p-6 flex flex-col">
            <Link
              to={`/articles/${article.id}`}
              className="text-[1.37rem] font-bold leading-tight text-gray-900 hover:text-[#04aa6d] transition-colors duration-200 line-clamp-2 mb-3"
            >
              {article.title}
            </Link>

            <div className="flex items-center text-sm text-gray-500 mb-4 flex-wrap gap-2">
              <span className="whitespace-nowrap">{article.date}</span>
              <span className="mx-1">•</span>
              <span className="text-gray-700 font-medium whitespace-nowrap">
                by {article.author}
              </span>
            </div>

            <p className="text-[#767676] leading-relaxed mb-6 flex-1 line-clamp-3">
              {article.description}
            </p>

            <div className="flex justify-between pt-4 border-t border-gray-200">
              <div>
                <Link
                  to={`/articles/${article.id}`}
                  className="inline-flex items-center text-[#04aa6d] font-semibold hover:text-[#038c5a] transition-colors duration-200 group"
                >
                  Read Me
                  <i className="bx bx-chevrons-right ml-1 group-hover:translate-x-1 transition-transform duration-200"></i>
                </Link>
              </div>
              <div className="space-x-4">
                <i className="bx  bx-bookmark"></i>
                <i className="bx  bx-share"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
