import { useParams } from "react-router-dom";
import { getArticleComponent } from "../constants/articleRoutes";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();

  if (!articleId) {
    return (
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600">No article ID provided.</p>
        </div>
      </div>
    );
  }

  const ArticleComponent = getArticleComponent(articleId);

  if (!ArticleComponent) {
    return (
      <>
        <div
          onClick={() => window.history.back()}
          className="fixed top-3 left-3 z-50 cursor-pointer p-2 bg-black text-white rounded-full"
        >
          <ChevronLeftIcon className="size-4.5" />
        </div>

        <div className="flex flex-col px-3 items-center justify-center h-[90vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600">
              The article "{articleId}" doesn't exist.
            </p>
          </div>
        </div>
      </>
    );
  }

  return <ArticleComponent />;
}
