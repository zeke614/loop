import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import enron from "../../assets/imgs/enron.jpg";
import worldcom from "../../assets/imgs/worldCom.png";
import wellsFargo from "../../assets/imgs/wellsFargo.jpg";
import toshiba from "../../assets/imgs/toshiba.jpg";
import lehman from "../../assets/imgs/lehman.jpg";
import ftx from "../../assets/imgs/ftx.jpg";
import wirecard from "../../assets/imgs/wirecard.avif";

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

const articleData = (articles["Money and Madness"] as Article[]).find(
  (article) => article.id === "corporate-failures-to-better-governance",
)!;

const failures = [
  {
    title: "1. Lehman Brothers (2008) — A Collapse Felt Around the Globe",
    img: lehman,
    alt: "Lehman Brothers headquarters during financial crisis",
    content:
      "Lehman masked its true financial risk through exotic mortgage-backed securities and the infamous Repo 105 maneuver, temporarily shifting debt off its balance sheet to appear stable. When the U.S. housing bubble burst, Lehman was exposed and ultimately filed the largest bankruptcy in American history. The aftermath froze global credit markets and triggered worldwide reforms, including the Dodd–Frank Act, stricter liquidity requirements, and mandatory stress testing to detect systemic risk before it spirals out of control.",
  },
  {
    title: "2. Enron (2001) — Innovation Built on Illusion",
    img: enron,
    alt: "Enron stocks plummet",
    content:
      "Enron dazzled the world with its reputation for bold energy trading, complex financial engineering, and oversized ambition. But beneath the glow sat an empire propped up by hidden debt, inflated profits, and a culture that rewarded deception over discipline. When its accounting tricks were exposed, Enron collapsed in spectacular fashion, wiping out billions and shattering public trust. The fallout birthed the Sarbanes–Oxley Act, which reshaped how corporations audit, disclose, and govern themselves, proving that transparency can't be optional.",
  },
  {
    title: "3. FTX (2022) — When Hype Outran Responsibility",
    img: ftx,
    alt: "FTX cryptocurrency exchange logo and branding",
    content:
      "FTX rose meteorically as the 'friendly, futuristic' crypto exchange run by a founder celebrated as a genius. Behind that façade, customer deposits were quietly funneled into speculative bets through a sister company with virtually no oversight. When cracks appeared, billions evaporated in days, shaking confidence across the entire crypto market. The collapse accelerated global efforts to regulate digital asset platforms, reinforcing that trust cannot be built on charisma or marketing alone.",
  },
  {
    title: "4. WorldCom (2002) — When Numbers Became Fiction",
    img: worldcom,
    alt: "WorldCom corporate headquarters",
    content:
      "WorldCom engineered one of the largest frauds in corporate history by disguising ordinary expenses as lucrative investments and inflating earnings by more than $11 billion. What looked like steady growth was really a spreadsheet built out of smoke. When internal auditors uncovered the scheme, the company imploded, and investors suffered massive losses. Its demise pushed regulators to strengthen internal auditing roles, clarify accounting standards, and demand clearer separation between executives and those tasked with monitoring them.",
  },
  {
    title: "5. Wirecard (2020) — A Fintech Mirage",
    img: wirecard,
    alt: "Wirecard fintech company offices",
    content:
      "Wirecard was long seen as Europe's answer to Silicon Valley fintech stars—until auditors revealed that €1.9 billion in supposed cash simply didn't exist. Forged documents, phantom subsidiaries, and a willingness to bully critics allowed the illusion to persist for years. Its downfall spurred a major overhaul of Germany's financial oversight systems, strengthened whistleblower protections, and forced regulators to confront the risks of being too cozy with rapid-growth tech companies.",
  },
  {
    title: "6. Wells Fargo (2016) — Growth at Any Cost",
    img: wellsFargo,
    alt: "Wells Fargo bank branch exterior",
    content:
      "For years, Wells Fargo employees were pressured to meet unrealistic sales quotas, leading to the creation of millions of fake accounts—often without customer permission or knowledge. What began as a culture of 'cross-selling excellence' spiraled into one of modern banking's biggest ethical breakdowns. The scandal triggered leadership turnovers, billions in fines, and strict oversight from U.S. regulators. It also prompted companies everywhere to rethink incentive structures and prioritize ethical performance over aggressive metrics.",
  },
  {
    title:
      "7. Toshiba Accounting Scandal (2015) — The Weight of Corporate Tradition",
    img: toshiba,
    alt: "Toshiba corporate headquarters in Tokyo",
    content:
      "Toshiba's leadership culture valued obedience and perfection, creating an internal environment where subordinates felt compelled to meet profits—even if they had to invent them. Over several years, profits were overstated by roughly $1.2 billion through improper accounting practices. The scandal forced resignations at the highest levels and drove Japan to strengthen corporate governance codes, mandate more independent directors, and address long-standing issues around hierarchy and transparency in major firms.",
  },
];

function FailureItem({ failure }: { failure: (typeof failures)[0] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-[1.375rem] md:text-2xl font-medium ">
        {failure.title}
      </h2>
      <div className="overflow-hidden mb-6">
        <img
          src={failure.img}
          alt={failure.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </div>
      <p className="mb-6 text-[#767676] dark:text-[#d4d4d8] leading-7">
        {failure.content}
      </p>
    </div>
  );
}

export default function CorporateFailures() {
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

        <div>
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
        </div>

        <div>
          <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
            Seven Corporate Failures, Governments' Hard Lessons
          </h1>

          <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
            <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
              {articleData.author},
            </span>
            <span>{articleData.date}</span>
          </div>
        </div>

        <div>
          <div className="text-[#767676] dark:text-[#d4d4d8] text-start">
            <p className="leading-6.5">
              Corporate collapse is rarely sudden—it's usually the slow
              unraveling of ambition, secrecy, and flawed incentives. This
              article revisits seven infamous failures whose shockwaves reshaped
              modern oversight, from manipulated accounts to reckless cultures
              that prized growth over truth. Through financial autopsies and
              governance lessons, it explores how disaster became the catalyst
              for stronger rules, sharper scrutiny, and a deeper understanding
              of what responsible leadership truly demands...
            </p>
          </div>
        </div>

        <div className="my-14 space-y-14">
          {failures.map((failure, index) => (
            <FailureItem key={index} failure={failure} />
          ))}
        </div>

        <div>
          <p className="text-[#767676] dark:text-[#d4d4d8] pt-3">
            Each scandal left wreckage: lost savings, broken trust, and
            industries forced to reckon with their blind spots. Yet every
            collapse also pushed global governance forward. Regulators tightened
            rules. Boards became more accountable. Auditing turned more
            independent and less ceremonial. Culture—often the invisible
            culprit—became a priority instead of an afterthought. These failures
            reveal a simple truth: corporate governance doesn't evolve when
            things go right, but when things go wrong. The world learns more
            from shattered empires than from flawless ones, and those lessons
            continue to define how companies operate today.
          </p>
        </div>
      </div>
    </>
  );
}
