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
  (article) => article.id === "how-newspapers-shaped-20th-century",
)!;

const sections = [
  {
    title: "1. The Rise of Mass Circulation",
    content:
      "By the early 1900s, newspapers had become industrial powerhouses. Advances such as the rotary press, cheaper newsprint, and railway distribution networks allowed publishers like Joseph Pulitzer and William Randolph Hearst to reach millions. These massive audiences meant that a front-page headline could sway markets, shift political opinion, or spark national debates. The era also birthed 'yellow journalism'—sensationalist reporting that exaggerated or slanted facts to boost sales. Historians still debate how much this style contributed to the U.S. entry into the Spanish–American War in 1898, but there's no doubt newspapers were powerful enough that government officials paid close attention.",
  },
  {
    title: "2. Shaping Public Health and Everyday Life",
    content:
      "Throughout the 20th century, newspapers acted as public-health megaphones. During the 1918 influenza pandemic, local papers printed infection counts, prevention tips, and closure orders. Although scientific understanding was limited, newspapers were often the only source of timely information most households had. Later in the century, newspapers standardized modern consumer culture. Food sections popularized refrigeration habits and new cooking trends. Classified ads shaped job markets. Sunday editions became family rituals — complete with comics, puzzles, and serialized fiction that built shared cultural references.",
  },
  {
    title: "3. The Watchdog Era and Investigative Power",
    content:
      "From the 1950s onward, investigative reporting hit its stride. Papers like The New York Times, The Washington Post, The Guardian, and The Times of India dug into government corruption, corporate abuses, and civil-rights violations. The Watergate investigation (1972–74) remains the most iconic example. Reporting by Bob Woodward and Carl Bernstein — backed by editors with the courage to publish — contributed to the resignation of U.S. President Richard Nixon. This moment cemented the idea of newspapers as democratic watchdogs. Beyond politics, investigative desks broke stories on environmental contamination, unsafe consumer products, and labor exploitation.",
  },
  {
    title: "4. The Business Model That Built (and Broke) an Empire",
    content:
      "For most of the century, newspapers followed a simple formula: low cover price, huge circulation, and advertising revenue as the financial backbone. That model funded foreign bureaus, fact-checking departments, copy desks, and specialized beats. By the 1990s, cracks were forming. The internet began siphoning classified ads (Craigslist's launch in 1995 was a turning point), and search engines redirected attention. Print circulation declined sharply, leading to newsroom layoffs and reduced local coverage. Ironically, the things newspapers pioneered — concise headlines, quick updates, serialized stories — became the DNA of digital media, while the business structures that funded them struggled to adapt.",
  },
];

const lessons = [
  "Shared information builds social cohesion. Newspapers helped entire cities operate from a single set of facts and schedules. Today's fragmented media environment struggles to replicate that common ground.",
  "Investigative journalism requires long-term financial support. Many landmark investigations took months or years — something only sustainable with robust backing.",
  "Credibility is fragile. Sensationalism boosted readership in the early 1900s but also damaged trust. The same tension echoes across today's click-driven media.",
  "Local journalism is civic infrastructure. Studies by political scientists show that towns losing newspapers often see drops in voter turnout, reduced government oversight, and increased political polarization.",
];

export default function Newspapers() {
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
            alt="Historical newspapers and printing presses from the 20th century"
            className="w-full h-60 sm:h-[24rem] object-cover"
          />
        </div>

        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          Old Media, New Lessons: How Newspapers Shaped the 20th Century
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-4">
          <p className="leading-6.5">
            Newspapers were the algorithm before the algorithm — the daily
            engine that sorted chaos into a shared story. Across the 20th
            century, they didn't just report events; they organized civic life,
            popularized new norms, and set political agendas.
          </p>
          <p className="leading-6.5">
            Their influence came from a combination of mass circulation,
            relatively limited competition, and a deep public belief that the
            printed word carried civic weight. Looking back at how they operated
            reveals lessons that still matter in today's fractured media
            landscape.
          </p>
        </div>

        <div className="my-10 space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-[1.375rem] md:text-2xl font-medium dark:text-[#d4d4d8] text-gray-900">
                {section.title}
              </h2>
              <p className="text-[#767676] dark:text-[#d4d4d8] leading-7">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-[1.375rem] md:text-2xl font-medium dark:text-[#d4d4d8] text-gray-900">
            Lessons for the Digital Age
          </h2>

          <div className="bg-gray-100 dark:bg-[#1e1e1e] rounded-xl p-5 space-y-4">
            <p className="text-[#767676] dark:text-[#d4d4d8] mb-4">
              Looking at the 20th century from today's vantage point, several
              takeaways stand out:
            </p>

            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0ab39c] text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-[#767676] dark:text-[#d4d4d8] leading-7">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-4 mt-10">
          <p className="leading-6.5">
            The 20th century belonged to newspapers not just because they were
            fast or widespread, but because they stitched communities together
            with shared narratives. Their triumphs and failures offer a
            blueprint for modern media grappling with misinformation, fragmented
            audiences, and economic uncertainty.
          </p>
          <p className="leading-6.5 font-medium text-gray-700 dark:text-white dark:font-semibold">
            Newspapers may no longer dominate daily life, but the principles
            they sharpened — accountability, depth, and communal storytelling —
            remain vital for any society trying to make sense of itself.
          </p>
        </div>
      </div>
    </>
  );
}
