import { useParams } from "react-router-dom";
import { getArticleComponent } from "../constants/articleRoutes";

export default function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();

  // Handle case where articleId is undefined
  if (!articleId) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-14">
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
      <div className="min-h-screen flex items-center justify-center mt-14">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600">
            The article "{articleId}" doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return <ArticleComponent />;
}
