import Breakthrough from "../pages/frontpage/breakthroughs";
import Landfill from "../pages/frontpage/landfill";
import Ruins from "../pages/frontpage/ruins";
import Grit from "../pages/frontpage/grit";
import CorporateFailures from "../pages/frontpage/failures";
import Forgotten from "../pages/frontpage/forgotten";
import Hacks from "../pages/frontpage/hacks";
import Ethics from "../pages/genius&folly/ethics";
import Amateurs from "../pages/genius&folly/amateurs";
import Biomimicry from "../pages/genius&folly/biomimicry";
import SpaceMining from "../pages/genius&folly/space";
import Worklife from "../pages/life/worklife";
import Intimacy from "../pages/life/intimacy";
import Colleges from "../pages/life/colleges";
import Weird from "../pages/life/weird";
import Pioneers from "../pages/timeCapsule/pioneers";
import Medicine from "../pages/timeCapsule/medicine";
import Newspapers from "../pages/timeCapsule/newspapers";
import Collapses from "../pages/timeCapsule/collapse";
import SecondAct from "../pages/entertainment/secondact";

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
  "toughest-colleges-to-get-into": Colleges,
  "how-time-got-weird": Weird,
  "overlooked-pioneers": Pioneers,
  "when-food-was-medicine": Medicine,
  "how-newspapers-shaped-20th-century": Newspapers,
  "collapsed-empires": Collapses,
  "second-act-icons-who-reinvented-themselves": SecondAct,
};

export const getArticleComponent = (
  articleId: string
): ArticleComponent | null => {
  return articleRoutes[articleId] || null;
};
