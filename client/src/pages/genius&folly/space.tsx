import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../data/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import spaceJunk from "../../assets/imgs/spaceJunk.jpg";

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
  (article) => article.id === "space-junk-to-mining",
)!;

export default function SpaceMining() {
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
            src={spaceJunk}
            alt="Space mining concept with asteroids and spacecraft"
            className="w-full h-60 sm:h-[24rem] object-cover"
          />
        </div>

        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          Space Junk to Space Mining: The Next Frontier of Tech
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-6">
          <p className="leading-6.5">
            Earth's orbit is becoming a junkyard. Thousands of defunct
            satellites, spent rocket stages, and fragments of debris drift
            silently at tens of thousands of kilometers per hour. Meanwhile, on
            the horizon is a more ambitious dream: mining asteroids and other
            celestial bodies for metals, water, and resources that could fuel
            life and industry—beyond Earth.
          </p>

          <p className="leading-6.5">
            But transforming orbital trash and distant rocks into a sustainable
            space economy won't be simple. It requires technology, law, and a
            global sense of stewardship. Here's a look at the two overlapping
            frontiers—cleaning up space, and reaching beyond it—and what their
            collision might mean for humanity.
          </p>
        </div>

        <div className=" text-start space-y-6 mt-8">
          <h2 className="text-[1.375rem] md:text-2xl font-medium ">
            1. The Growing Hazard of Space Junk
          </h2>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            Researchers estimate that there are more than 40,000 tracked objects
            larger than 10 cm in Earth orbit, and likely millions of smaller
            items. Each collision—or even near miss—with active satellites or
            manned spacecraft adds fragment clouds that multiply collision risk
            exponentially, a cascade sometimes called the "Kessler Syndrome."
          </p>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            The orbiting junk isn't just theoretical risk: falling debris has
            begun re-entering Earth's atmosphere unpredictably. As
            constellations of thousands of satellites launch for broadband,
            Earth observation, and communications, the debris problem
            accelerates—pushing the need for active debris removal and robust
            space-traffic management. Space orbit risks becoming a dead zone
            before we realize it.
          </p>
        </div>

        <div className=" text-start space-y-6 mt-8">
          <h2 className="text-[1.375rem] md:text-2xl font-medium ">
            2. The Rise of Orbital Cleanup — "Space Janitors" Take Off
          </h2>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            Companies are pioneering active debris-removal technologies: robotic
            arms, rendezvous capture, deorbiting defunct objects, and satellite
            servicing. The concept is shifting from idealistic cleanup to viable
            business: satellite operators are being offered "end-of-life" plans
            to tag and retrieve their hardware, reducing long-term debris
            accumulation.
          </p>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            Some proposals even envision a "circular space economy": recycling
            materials in orbit or repurposing components—turning trash into
            resources, rather than leaving it to decay or burn unpredictably
            entering the atmosphere. If humanity is to keep using orbit
            sustainably, cleanup needs to scale—and soon.
          </p>
        </div>

        <div className=" text-start space-y-6 mt-8">
          <h2 className="text-[1.375rem] md:text-2xl font-medium ">
            3. Asteroid Mining Is No Longer Sci-Fi — Companies Are Taking the
            Lead
          </h2>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            The idea of harvesting resources from asteroids—metals, water, rare
            elements—has moved from theoretical to actionable. Private firms are
            already working on asteroid-mining technologies—refining metal
            extraction processes in small spacecraft, planning missions, and
            raising capital to launch the first commercial deep-space mineral
            missions.
          </p>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            Advances that lower launch costs, combined with growing demand for
            rare metals and space-derived resources, are turning what once
            looked like fantasy into a plausible mid-to-long-term strategy. What
            was science fiction a few decades ago is now being engineered as
            science fact.
          </p>
        </div>

        <div className=" text-start space-y-6 mt-8">
          <h2 className="text-[1.375rem] md:text-2xl font-medium ">
            4. The Regulatory and Ethical Void
          </h2>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            International frameworks govern peaceful use of space—but they don't
            clearly define rights to extract or own resources from asteroids or
            celestial bodies, leaving serious legal ambiguity around space
            mining. The possibility of "claim jumping"—one entity racing to mine
            or process a resource another identified—looms large.
          </p>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            Some nations have begun national legislation to regulate resource
            extraction in space, but there is still no comprehensive
            international agreement. Fragmented laws create a risky environment
            for investors and make long-term cooperation uncertain. Mining
            asteroids or the Moon may also generate environmental risks and
            complicate the already fragile orbital environment.
          </p>
        </div>

        <div className=" text-start space-y-6 mt-8">
          <h2 className="text-[1.375rem] md:text-2xl font-medium ">
            5. Why Space Junk Cleanup and Space Mining Must Be Part of a Single
            Vision
          </h2>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            Mining asteroids without cleaning up orbit would be short-sighted:
            more launches, more missions, more debris. If debris accumulates
            unchecked, low Earth orbit and other strategic orbital zones could
            become unusable.
          </p>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            A sustainable "circular space economy" should combine tight debris
            management, recycling of materials, mission-end cleanup, and
            resource extraction—creating a closed-loop model rather than
            continuous expansion. Success in this domain could redefine resource
            scarcity on Earth, reduce the environmental damage of terrestrial
            mining, and expand human activity in space—but only if managed with
            foresight, regulation, and global cooperation.
          </p>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-6 mt-12">
          <p className="leading-6.5">
            Humanity stands at a crossroads: continue piling junk into orbit
            until the highway becomes impassable—or build a new paradigm where
            cleanup and resource use walk hand in hand. The rising
            private-sector interest, combined with early regulatory frameworks
            and active cleanup efforts, suggests this isn't just a dream
            anymore.
          </p>
          <p className="leading-6.5 font-medium text-gray-700 dark:text-white dark:font-semibold">
            Space's next frontier isn't just about going farther—it's about
            going cleaner and smarter. With luck, the history of the next
            century will show we didn't just reach for the stars—we learned to
            respect the space between them.
          </p>
        </div>
      </div>
    </>
  );
}
