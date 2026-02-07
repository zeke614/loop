import { useParams } from "react-router-dom";
import { getArticleComponent } from "../data/articleRoutes";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function ComingSoon({ label }: { label?: string }) {
  return (
    <>
      <div
        onClick={() => window.history.back()}
        className="fixed top-3 left-3 z-50 cursor-pointer p-2 bg-black dark:bg-transparent text-white rounded-full"
      >
        <ChevronLeftIcon className="size-4.5" />
      </div>

      <div className="flex flex-col items-center justify-center h-[90vh] px-4 text-center">
        <h1 className="text-[1.375rem] font-semibold text-gray-900 dark:text-white mb-3">
          This one’s loading into the loop
        </h1>
        <p className="text-gray-600 dark:text-[#d4d4d8]">
          {label
            ? `"${label}" is on the way. We’re putting the final touches on it.`
            : "This article is on the way. Stay close."}
        </p>
      </div>
    </>
  );
}

export default function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();

  if (!articleId) {
    return <ComingSoon />;
  }

  const ArticleComponent = getArticleComponent(articleId);

  if (!ArticleComponent) {
    return <ComingSoon label={articleId} />;
  }

  return <ArticleComponent />;
}
