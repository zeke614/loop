import Breakthrough from "../pages/frontpage/breakthroughs";
import Landfill from "../pages/frontpage/landfill";

import Ruins from "../pages/frontpage/ruins";
import Grit from "../pages/frontpage/grit";

type ArticleComponent = React.ComponentType;

interface ArticleRoutes {
  [key: string]: ArticleComponent;
}

export const articleRoutes: ArticleRoutes = {
  "landfill-to-loop": Landfill,
  "failures-to-breakthroughs": Breakthrough,
  "architectural-ruins": Ruins,
  "the-will-to-win": Grit,
  // "frontpage-005": Landfill,
  // "frontpage-006": Landfill,
  // "frontpage-007": Landfill,
};

export const getArticleComponent = (
  articleId: string
): ArticleComponent | null => {
  return articleRoutes[articleId] || null;
};
