import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import caltech from "../../assets/imgs/caltech.jpg";
import harvard from "../../assets/imgs/harvard.jpg";
import stanford from "../../assets/imgs/stanford.jpg";
import mit from "../../assets/imgs/mit.jpg";
import columbia from "../../assets/imgs/columbia.jpg";
import princeton from "../../assets/imgs/princeton.jpg";
import yale from "../../assets/imgs/yale.webp";
import brown from "../../assets/imgs/brown.jpg";
import uchicago from "../../assets/imgs/chicago.jpg";
import duke from "../../assets/imgs/duke.png";

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

const articleData = (articles["Human Currents"] as Article[]).find(
  (article) => article.id === "toughest-colleges-to-get-into",
)!;

const colleges = [
  {
    title: "1. California Institute of Technology (Caltech)",
    img: caltech,
    alt: "aerial view of Caltech campus",
    content: `Pasadena, California — founded in 1891. Known for its microscopic size and gigantic scientific output, Caltech helped pioneer modern physics, chemistry, and aerospace. The Jet Propulsion Laboratory partnership cements its role in space exploration. Recent standing: routinely in the global top 10 for science and engineering. Acceptance rate: `,
    rate: "3.1%",
  },
  {
    title: "2. Harvard University",
    img: harvard,
    alt: "Harvard Yard with historic buildings",
    content: `Cambridge, Massachusetts — founded in 1636. The oldest U.S. university and one of its most influential, shaping law, medicine, politics, and scholarship for centuries. Recent standing: consistently top-ranked globally across disciplines. Acceptance rate: `,
    rate: "3-4%",
  },
  {
    title: "3. Stanford University",
    img: stanford,
    alt: "Stanford University entrance",
    content: `Stanford, California — founded in 1885. Deeply interwoven with Silicon Valley's growth, Stanford remains a powerhouse in engineering, business, and social sciences. Recent standing: among the world's top universities, especially for technology and entrepreneurship. Acceptance rate: `,
    rate: "4%",
  },
  {
    title: "4. Massachusetts Institute of Technology (MIT)",
    img: mit,
    alt: "aerial view MIT campus",
    content: `Cambridge, Massachusetts — founded in 1861. MIT has shaped modern computing, AI, robotics, and advanced engineering, with alumni driving countless innovations. Recent standing: frequently top 5 globally for STEM and economics. Acceptance rate: `,
    rate: "4-5%",
  },
  {
    title: "5. Columbia University",
    img: columbia,
    alt: "Columbia University Low Memorial Library",
    content: `New York City — founded in 1754. A major Ivy League campus in the middle of Manhattan, blending humanities, sciences, business, and global policy. Recent standing: consistently top 20 in U.S. rankings. Acceptance rate: `,
    rate: "3.8-4.3%",
  },
  {
    title: "6. Princeton University",
    img: princeton,
    alt: "Princeton University Nassau Hall",
    content: `Princeton, New Jersey — founded in 1746. A university known for combining elite research with unusually strong undergraduate teaching. Recent standing: often #1 in U.S. national rankings. Acceptance rate: `,
    rate: "4-5%",
  },
  {
    title: "7. Yale University",
    img: yale,
    alt: "Yale University Sterling Memorial Library",
    content: `New Haven, Connecticut — founded in 1701. Famous for law, drama, humanities, and a historically influential alumni network. Recent standing: consistently top 10 in multiple global and national lists. Acceptance rate: `,
    rate: "4.6%",
  },
  {
    title: "8. Brown University",
    img: brown,
    alt: "Brown University Van Wickle Gates",
    content: `Providence, Rhode Island — founded in 1764. The Ivy League school known for its open curriculum, interdisciplinary freedom, and creative culture. Recent standing: solid top 20 institution in U.S. rankings. Acceptance rate: `,
    rate: "5.1%",
  },
  {
    title: "9. University of Chicago",
    img: uchicago,
    alt: "University of Chicago Rockefeller Chapel",
    content: `Chicago, Illinois — founded in 1890. A rigorous, theory-driven university shaping economics, physics, sociology, and public policy. Recent standing: top-10 nationally, top 10–20 globally. Acceptance rate: `,
    rate: "5-6%",
  },
  {
    title: "10. Duke University",
    img: duke,
    alt: "Duke University Chapel",
    content: `Durham, North Carolina — founded in 1838. Known for medicine, public policy, business, and a blend of academic and athletic prestige. Recent standing: reliably top 10 in the U.S. Acceptance rate: `,
    rate: "6%",
  },
];

function CollegeItem({
  college,
}: {
  college: (typeof colleges)[0];
  index: number;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-[1.375rem] md:text-2xl font-medium dark:text-[#d4d4d8]">
        {college.title}
      </h2>
      <div className="overflow-hidden mb-6">
        <img
          src={college.img}
          alt={college.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </div>
      <p className="mb-6 text-[#767676] dark:text-[#d4d4d8] leading-7">
        {college.content}
        <span className="font-bold">{college.rate}</span>.
      </p>
    </div>
  );
}

export default function Colleges() {
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
          The 10 Hardest Colleges to Get Into Today
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start">
          <p className="leading-6.5">
            Selectivity has become its own global sport. As applications surge
            and digital recruitment expands the applicant pool, a handful of
            institutions now admit only a tiny fraction of hopefuls. A low
            acceptance rate isn't a guarantee of "better education", but it does
            reflect capacity limits, intense demand, and decades of
            reputation-building.
          </p>
          <p className="leading-6.5 mt-4">
            This overview highlights ten universities widely recognized for
            their extremely low acceptance rates, combining a bit of history,
            location, recent ranking status, and their most recent publicly
            available admit percentages.
          </p>
        </div>

        <div className="my-10 space-y-14">
          {colleges.map((college, index) => (
            <CollegeItem key={index} college={college} index={index} />
          ))}
        </div>

        <p className="text-[#767676] pt-3">
          This list shifts slightly year to year, but the trend is clear: the
          most competitive universities aren't becoming easier to enter. Massive
          applicant pools, global visibility, and limited class sizes keep
          acceptance rates in single digits. Still, selectivity isn't destiny.
          Students thrive at hundreds of institutions worldwide where
          opportunity, mentorship, and curiosity intersect. Understanding
          acceptance rates simply helps clarify how competitive certain schools
          have become—and how much the landscape of higher education has
          changed.
        </p>
      </div>
    </>
  );
}
