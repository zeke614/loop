import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import bias from "../../assets/imgs/bias.jpg";
import blackbox from "../../assets/imgs/blackbox.png";
import autonomy from "../../assets/imgs/autonomy.jpg";
import accountability from "../../assets/imgs/accountability.webp";
import displacement from "../../assets/imgs/displacement.jpg";
import crossroads from "../../assets/imgs/crossroads.png";

type Article = {
  id: string;
  title: string;
  description?: string;
  date?: string;
  author?: string;
  img?: string;
  alt?: string;
  [key: string]: any;
};

const articleData = (articles["Genius and Folly"] as Article[]).find(
  (article) => article.id === "ai-ethics-dilemmas",
)!;

const dilemmas = [
  {
    title: "1. Bias: When 'Objective' Machines Learn From an Unfair World",
    img: bias,
    alt: "Illustration of biased algorithmic decision making",
    content:
      "Bias isn't simply a bug in a few careless datasets. It's baked into the historical patterns our algorithms are trained on. Even when you scrub personal identifiers, systems can still infer race, gender, or socioeconomic status from subtle signals—zip codes, phrasing styles, or even browser metadata. Researchers build better datasets and fairness metrics, but no consensus exists on what fairness actually means. Equal outcomes? Equal opportunity? Proportional parity? Every definition changes who benefits. The dilemma is simple to state and almost impossible to solve: How do you make machines fair when the world they're trained on isn't?",
  },
  {
    title: "2. Explainability: Intelligence Without Comprehension",
    img: blackbox,
    alt: "Black box AI system with complex inner workings",
    content:
      "Modern AI models are astonishingly capable, yet often behave like black boxes. We can measure their outputs, but the steps between input and answer are buried within billions of parameters. Engineers can coax approximations—saliency maps, attribution techniques—but those explanations are more like shadows than blueprints. For high-stakes choices such as medical triage or loan approvals, 'the model says so' isn't good enough. Still, demanding perfect explainability often requires sacrificing accuracy. The deeper the model, the murkier the reasoning. We've built tools that can answer questions we can't trace, triggering an ancient unease: Can we trust a mind we don't fully understand?",
  },
  {
    title: "3. Autonomy: When Agencies Collide—Human or Machine?",
    img: autonomy,
    alt: "Human brain vs AI neural network",
    content:
      "Self-driving cars decide when to brake. Diagnostic systems suggest treatment plans. Recommendation engines steer billions of micro-choices daily. The tricky bit isn't replacing humans—it's blending with them. Who has the final say? Should an AI be allowed to veto a surgeon's decision? Should a car refuse a driver's command if it predicts danger? Philosophers debate levels of autonomy like engineers debate battery life, but no universal rule has emerged. Every industry is drawing its own blurry line. AI keeps gaining agency in ways that aren't dramatic, just quietly entwined with human judgment. The trouble starts when both agents disagree.",
  },
  {
    title: "4. Accountability: When Something Goes Wrong, Who Pays?",
    img: accountability,
    alt: "Legal scale balancing human and AI responsibility",
    content:
      "When a human makes a harmful decision, we have centuries of legal doctrine to sort out liability. When an AI system misclassifies a tumor or causes a traffic accident, responsibility scatters: the developer, the trainer, the company deploying it, the operator, or the regulator who approved it. Current laws usually fold AI mistakes back onto humans because our systems aren't considered moral agents. But as decision-making becomes more autonomous, this patch job looks thinner. Governments are scrambling to invent new categories—algorithmic liability, duty of oversight—but enforcement remains muddy. This dilemma haunts every sector: risk without a clear owner.",
  },
  {
    title: "5. Labor Displacement: Innovation That Eats Its Own Workforce",
    img: displacement,
    alt: "Humans and robots queing for jobs",
    content:
      "Automation anxiety is older than steam engines, but AI reshapes the labor market in a distinct way. It doesn't just replace physical tasks—it encroaches on creative, analytical, and professional roles once seen as 'safe.' Economists argue about magnitude, not direction. Jobs will change. Some will vanish. Others will be invented. But the transition costs—lost wages, retraining gaps, regional inequality—hit real people long before the benefits trickle through society. The ethical question isn't whether we should progress, but who absorbs the shock when progress arrives too fast.",
  },
  {
    title: "6. Alignment: Whose Values Should Machines Follow?",
    img: crossroads,
    alt: "AI at a crossroads representing virtues choices",
    content:
      "Even if AI never becomes sentient, it already requires a moral compass. Every content filter, reward function, and optimization target encodes values—usually those of developers, corporations, or governments. But values differ wildly across cultures. One society's free expression is another's harmful speech. One nation's privacy priority is another's security imperative. There's no global consensus on what we want AI to optimize for, or whose worldview should shape the behavior of global systems. Alignment isn't just a technical challenge—it's a political one.",
  },
];

function DilemmaItem({
  dilemma,
}: {
  dilemma: (typeof dilemmas)[0];
  index: number;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-[1.375rem] md:text-2xl font-medium dark:text-[#d4d4d8]">
        {dilemma.title}
      </h2>
      <div className="overflow-hidden mb-6">
        <img
          src={dilemma.img}
          alt={dilemma.alt}
          className="w-full h-48 md:h-105 object-contain"
        />
      </div>
      <p className="mb-6 text-[#767676] dark:text-[#d4d4d8] leading-7">
        {dilemma.content}
      </p>
    </div>
  );
}

export default function Ethics() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="text-start pb-4 px-4 mx-auto max-w-4xl relative">
        <BackToTopButton showBackToTop={showBackToTop} />

        <div className="relative overflow-hidden mb-4 -mx-4">
          <div
            onClick={() => window.history.back()}
            className="absolute left-3 top-2 cursor-pointer z-50 p-2 bg-black text-white rounded-full transition-colors"
          >
            <ChevronLeftIcon className="size-4.5" />
          </div>
          <img
            src={articleData.img}
            alt={articleData.alt}
            className="w-full h-60 sm:h-[24rem] object-cover"
          />
        </div>

        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          Six Unsolved AI Ethics Dilemmas That Keep Philosophers Awake
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start">
          <p className="leading-6.5">
            Artificial intelligence promises dazzling leaps in medicine, climate
            modeling, education, and creativity. Yet every breakthrough seems to
            drag behind it a small parade of ethical thorns. The core problem
            isn't evil robots or runaway superintelligence—it's that our systems
            are becoming powerful in ways that challenge long-standing norms
            about fairness, duty, autonomy, and responsibility.
          </p>
          <p className="leading-6.5 mt-4">
            For all our AI ethics committees, regulatory frameworks, and
            principle documents, six dilemmas remain stubbornly unsolved. Not
            because no one is working on them, but because each one touches
            something messy at the heart of being human.
          </p>
        </div>

        <div className="my-14 space-y-14">
          {dilemmas.map((dilemma, index) => (
            <DilemmaItem key={index} dilemma={dilemma} index={index} />
          ))}
        </div>

        <div className="text-[#767676] pt-3 space-y-4">
          <p>
            These six dilemmas share a quiet, universal truth: AI magnifies
            tensions we never resolved in human society. Fairness, transparency,
            agency, autonomy, and shared prosperity were already complicated. AI
            simply makes the contradictions louder.
          </p>
          <p>
            Instead of tidy solutions, what we have is an evolving negotiation
            between technology, law, culture, and human psychology. Ethical AI
            might be less about achieving perfection and more about building
            systems that stay accountable, corrigible, and compatible with
            pluralistic societies.
          </p>
          <p className="font-medium text-gray-700 mt-6">
            AI isn't a mirror of our intelligence—it's a mirror of our
            unresolved debates.
          </p>
        </div>
      </div>
    </>
  );
}
