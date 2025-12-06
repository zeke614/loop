import Breakthrough from "../pages/frontpage/breakthroughs";
import Landfill from "../pages/frontpage/landfill";
import Ruins from "../pages/frontpage/ruins";
import Grit from "../pages/frontpage/grit";
import CorporateFailures from "../pages/frontpage/failures";
import Forgotten from "../pages/frontpage/forgotten";
import Hacks from "../pages/frontpage/hacks";
import Ethics from "../pages/science/ethics";
import Amateurs from "../pages/science/amateurs";
import Biomimicry from "../pages/science/biomimicry";
import SpaceMining from "../pages/science/space";
import Worklife from "../pages/life/worklife";
import Intimacy from "../pages/life/intimacy";

type ArticleComponent = React.ComponentType;

interface ArticleRoutes {
  [key: string]: ArticleComponent;
}

export const articleRoutes: ArticleRoutes = {
  "landfill-to-loop": Landfill,
  "failures-to-breakthroughs": Breakthrough,
  "architectural-ruins": Ruins,
  "the-will-to-win": Grit,
  "corporate-failures-to-better-governance": CorporateFailures,
  "forgotten-inventions": Forgotten,
  "performance-hacks": Hacks,
  "ai-ethics-dilemmas": Ethics,
  "amateur-inventors": Amateurs,
  "tech-in-nature": Biomimicry,
  "space-junk-to-mining": SpaceMining,
  "work-life-balance": Worklife,
  "digital-intimacy": Intimacy,
};

export const getArticleComponent = (
  articleId: string
): ArticleComponent | null => {
  return articleRoutes[articleId] || null;
};
