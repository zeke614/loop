import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

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

const articleData = (articles["Time Capsule"] as Article[]).find(
  (article) => article.id === "overlooked-pioneers",
)!;

const pioneers = [
  {
    title:
      "1. Rosalind Franklin — The Scientist Whose Data Unlocked DNA Structure",
    field: "Molecular biology",
    era: "1950s (King's College London)",
    content:
      "Rosalind Franklin was an expert in X-ray crystallography at King's College London in the early 1950s. Working with her PhD student Raymond Gosling, she led the research that produced Photo 51, the most critical X-ray diffraction image of DNA. Gosling physically took the photograph, but he did so using the equipment Franklin configured and the method she refined. Without her knowledge, Photo 51 and her unpublished data were shown to Watson and Crick, giving them the missing pieces needed to deduce the double-helix structure. When the Nobel Prize was awarded in 1962, Franklin was not included.",
  },
  {
    title: "2. Chien-Shiung Wu — The Woman Behind the Nobel-Winning Discovery",
    field: "Experimental physics",
    era: "1950s (Columbia University)",
    content:
      "Chien-Shiung Wu conducted the Wu experiment, which provided the first experimental proof that parity is not conserved in weak nuclear interactions — a revolutionary finding. The 1957 Nobel Prize went to theorists Tsung-Dao Lee and Chen-Ning Yang; Wu's experimental confirmation was indispensable but not recognized by the committee. She is now widely known as 'the First Lady of Physics.'",
  },
  {
    title: "3. George Washington Carver — Far More Than the 'Peanut Guy'",
    field: "Agricultural science, environmental sustainability",
    era: "1890s–1940s",
    content:
      "Popular culture reduced Carver to someone who made peanut recipes, but his real legacy is clear: he was a pioneer in soil restoration, crop rotation, and sustainable farming that helped save overworked farmland in the American South. His bulletins for farmers and his experiments with legumes dramatically improved soil nitrogen levels. His scientific work laid foundations for modern regenerative agriculture.",
  },
  {
    title: "4. Alice Ball — The Breakthrough That Treated Leprosy",
    field: "Chemistry and pharmacology",
    era: "Early 1900s (University of Hawai'i)",
    content:
      "Alice Ball developed the 'Ball Method', the first effective injectable treatment for Hansen's disease (leprosy), by chemically modifying chaulmoogra oil to make it absorbable by the body. She died at age 24, and the university's president, Arthur Dean, initially published the method under his own name. Her role was restored decades later by historians and chemists reviewing original lab notes.",
  },
  {
    title: "5. Henrietta Lacks — The Woman Whose Cells Transformed Medicine",
    field: "Cellular biology (involuntary contribution)",
    era: "1951 onward",
    content:
      "Henrietta Lacks never intended to become a scientific figure, but her cervical cancer cells — taken without consent — became the HeLa cell line, the first immortalized human cell line. These cells enabled breakthroughs in polio vaccines, gene mapping, virology, cancer research, and more. For decades, she received no credit; her family wasn't even informed until the 1970s. Recognition grew only after investigative work by medical historians and bioethicists.",
  },
];

export default function Pioneers() {
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
            alt="Portraits of overlooked scientific pioneers"
            className="w-full h-60 sm:h-[24rem] object-cover"
          />
        </div>

        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          The Overlooked Pioneers: Scientists History Almost Forgot
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-4">
          <p className="leading-6.5">
            Scientific breakthroughs are rarely solo achievements, yet history
            books often spotlight only a handful of names. Behind every
            celebrated discovery are researchers whose contributions went
            unrecognized—sometimes for decades.
          </p>
          <p className="leading-6.5">
            These five scientists transformed their fields but were sidelined by
            circumstance, bias, or simple historical oversight. Their stories
            reveal how scientific progress truly unfolds—and why correcting the
            record matters.
          </p>
        </div>

        <div className="my-10 space-y-10">
          {pioneers.map((pioneer, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-[1.375rem] md:text-2xl font-medium dark:text-[#d4d4d8] text-gray-900">
                {pioneer.title}
              </h2>

              <div className="bg-gray-50 dark:bg-[#1e1e1e] p-4 rounded-lg mb-3">
                <p className="text-gray-700 dark:text-[#d4d4d8]">
                  <span className="font-medium">Field:</span> {pioneer.field}
                </p>
                <p className="text-gray-700 dark:text-[#d4d4d8] mt-1">
                  <span className="font-medium">Era:</span> {pioneer.era}
                </p>
              </div>

              <p className="text-[#767676] dark:text-[#d4d4d8] leading-7">
                {pioneer.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-4">
          <p className="leading-6.5">
            Science is a collective enterprise, but the historical record hasn't
            always reflected that truth. Recovering the stories of overlooked
            pioneers isn't simply an act of moral correction — it deepens our
            understanding of how discovery actually happens: collaboratively,
            unevenly, and often under conditions shaped by social context rather
            than pure merit.
          </p>
          <p className="leading-6.5 font-medium text-gray-700 dark:text-white dark:font-semibold">
            By remembering these scientists, we get a more honest picture of
            scientific progress — and we widen the lens for future innovators.
          </p>
        </div>
      </div>
    </>
  );
}
