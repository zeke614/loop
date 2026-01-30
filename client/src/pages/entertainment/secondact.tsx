import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import jordan from "../../assets/imgs/jordan.jpg";
import federer from "../../assets/imgs/federer.avif";
import pirlo from "../../assets/imgs/pirlo.webp";
import ironman from "../../assets/imgs/ironman.webp";
import madonna from "../../assets/imgs/madonna.webp";

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

const articleData = (articles["Arena of Fame"] as Article[]).find(
  (article) => article.id === "second-act-icons-who-reinvented-themselves",
)!;

const icons = [
  {
    title: "1. Michael Jordan: Building Greatness From Rejection",
    img: jordan,
    alt: "Michael Jordan during his comeback with the Chicago Bulls",
    content:
      "Before global dominance, Michael Jordan was cut from his high school varsity team. The story matters not because it's dramatic, but because of what followed. Jordan rebuilt his game through relentless skill development, defensive intensity, and competitive discipline. The second act came early, but it shaped everything after: failure didn't break him—it trained him. That early rejection hardened his relationship with preparation and self-belief. It also seeded the obsessive competitiveness that would later define his professional career.",
  },
  {
    title: "2. Roger Federer: Aging Into a New Game",
    img: federer,
    alt: "Roger Federer during his later career resurgence",
    content:
      "By his early thirties, Roger Federer faced physical decline, younger rivals, and repeated losses to Rafael Nadal and Novak Djokovic. Instead of chasing his old style, Federer retooled it—shorter points, a more aggressive backhand, and a lighter tournament schedule. His later Grand Slam wins weren't nostalgic victories; they were proof that adaptation can outlast raw dominance. Federer's second act demonstrated that elegance in sport isn't static. It evolves, trims excess, and learns when to let go.",
  },
  {
    title: "3. Andrea Pirlo: When a Role Change Becomes a Renaissance",
    img: pirlo,
    alt: "Andrea Pirlo in his deeper playmaker role for Juventus",
    content:
      "Andrea Pirlo's early career stalled when he was deployed as an attacking midfielder. His second act arrived when coaches moved him deeper, allowing him to dictate tempo rather than chase goals. The shift transformed him into one of football's most influential playmakers and reshaped how the position itself is understood. Sometimes reinvention is simply standing in the right place. Pirlo's success showed that intelligence and vision can peak later than speed or stamina, redefining what aging in sport can look like.",
  },
  {
    title: "4. Robert Downey Jr.: From Career Collapse to Cultural Icon",
    img: ironman,
    alt: "Robert Downey Jr. as Iron Man after his career comeback",
    content:
      "Downey's early career was nearly erased by addiction, arrests, and industry distrust. By the early 2000s, he was considered uninsurable in Hollywood. His second act came through sustained recovery, smaller roles, and eventually his casting as Iron Man—an unlikely choice that redefined both his career and modern blockbuster cinema. Reinvention here wasn't flashy. It was earned slowly, under skepticism. His resurgence also changed how the industry talks about risk, redemption, and long-term investment in people, not just projects.",
  },
  {
    title: "5. Madonna: Outgrowing Each Era She Creates",
    img: madonna,
    alt: "Madonna during one of her many career reinventions",
    content:
      "Few entertainers have reinvented themselves as systematically as Madonna. Each phase of her career involved shedding a previous identity—musically, visually, culturally—often provoking backlash before acceptance. Her second acts weren't reactions to failure, but defenses against stagnation. Longevity, in her case, came from refusing nostalgia. By treating reinvention as a constant rather than a correction, she normalized evolution as a creative strategy.",
  },
];

const requirements = [
  "Humility — accepting that what worked before may no longer work",
  "Patience — trusting that competence will eventually catch up with courage",
  "Willingness to be bad at something new — embracing the learning curve publicly",
  "Shedding applause along with ego — letting go of past success to create new success",
  "Working away from spotlights — reinvention often happens privately before returning publicly",
];

export default function SecondAct() {
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
            alt="Michael Jordan representing the spirit of reinvention"
            className="w-full h-60 sm:h-[24rem] object-cover"
          />
        </div>

        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          The Second Act: Athletes and Icons Who Reinvented Themselves After
          Failure
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] text-start space-y-4">
          <p className="leading-6.5">
            Public failure has a way of freezing people in time. An early loss,
            a public stumble, a bad season or scandal can become the headline
            that follows someone forever. In sports and entertainment alike, the
            first narrative tends to stick.
          </p>
          <p className="leading-6.5">
            What's rarer—and more revealing—is the second act: the moment
            someone refuses to be defined by the version of themselves that
            didn't work. Reinvention is not a comeback tour. It's
            reconstruction. The people who manage it don't just return—they
            return different.
          </p>
        </div>

        <div className="my-10 space-y-14">
          {icons.map((icon, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-[1.375rem] md:text-2xl font-medium text-gray-900">
                {icon.title}
              </h2>

              <div className="overflow-hidden mb-6">
                <img
                  src={icon.img}
                  alt={icon.alt}
                  className="w-full h-50 md:h-96 object-cover"
                />
              </div>

              <p className="text-[#767676] leading-7">{icon.content}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-[1.375rem] md:text-2xl font-medium text-gray-900">
            What Reinvention Actually Requires
          </h2>

          <div className="bg-gray-50 rounded-xl p-6 space-y-4">
            <p className="text-[#767676] mb-4">
              Across fields, second acts share the same demands. Reinvention is
              quieter than ascent and lonelier than success. It often happens
              away from spotlights before returning to them. The process
              involves:
            </p>

            <div className="space-y-3">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#0ab39c] text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-[#767676] leading-7">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-[#767676] text-start space-y-4 mt-10">
          <p className="leading-6.5">
            First acts reveal ability. Second acts reveal character. In a
            culture obsessed with early success, reinvention reminds us that
            identity is not fixed—and that mastery isn't about never failing,
            but about learning how to evolve when old versions stop working.
          </p>
          <p className="leading-6.5 font-medium text-gray-700">
            Greatness, it turns out, is less about arrival and more about
            revision.
          </p>
        </div>
      </div>
    </>
  );
}
