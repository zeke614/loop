import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import timeWeird from "../../assets/imgs/time-weird.jpg";

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
  (article) => article.id === "how-time-got-weird",
)!;

const sections = [
  {
    title: "1. Pandemic Disruption Broke Our Internal Clocks",
    content:
      "When lockdowns hit, the usual markers of time—commutes, social gatherings, school terms, seasonal events—vanished. Psychological and neuroscientific research from the University of Nevada, Las Vegas found that when routine collapses, the brain loses the cues it uses to measure duration. Weeks of sameness stretch in memory but feel short in the moment, creating a paradox: slow days, fast months. That effect lingered well into the mid-2020s.",
  },
  {
    title: "2. The Digital Firehose Speeds Up Perception",
    content:
      "Humans evolved to process a handful of inputs at a time; the modern internet shoves thousands into a morning. TikTok clips, rapid-scroll feeds, alerts, micro-trends—experiments in cognitive science show that constant novelty compresses subjective time. When the brain hops rapidly between stimuli, it creates the illusion that more time has passed than actually has. Life feels packed, dense, and quick.",
  },
  {
    title: "3. The News Cycle Has No Brakes",
    content:
      "Scholars who study media temporality point out that the pace of global events has accelerated—not necessarily because more is happening, but because coverage is instantaneous. Crises overlap. Stories mutate daily. Historians argue that the 2020s mimic 'long emergencies,' where the tail of one event blends into the next. Without clear endings, it's harder for people to anchor memories in narrative chunks.",
  },
  {
    title: "4. Technology Compresses Everything: Waiting Is Almost Gone",
    content:
      "Waiting used to shape life: letters, shipping, film development, travel. Now most friction has been engineered out. Psychologists studying 'temporal scarcity' argue that faster technology paradoxically makes people feel they have less time, because expectations rise even faster than convenience. The more instant life becomes, the more rushed we feel.",
  },
  {
    title: "5. Social Comparison Warps Temporal Benchmarks",
    content:
      "Seeing thousands of people's milestones—graduations, trips, promotions—creates the illusion that everyone else moves faster. Social scientists describe this as 'accelerated life pacing', a concept within the social acceleration theory. People feel behind even when they're on track. That emotional mismatch makes time feel like it's outrunning them.",
  },
  {
    title: "6. Memory Compression Makes Recent Years Feel Shorter",
    content:
      "Neuroscientists studying autobiographical memory note that when life is repetitive or high-stress, the brain stores fewer detailed memories. Sparse memories make time feel shorter in hindsight. Many adults find that 2020–2025 feels like one long, smeared chapter rather than five distinct years.",
  },
  {
    title: "7. A Culture Obsessed With Productivity Warps Time Into a Resource",
    content:
      "Once time becomes a currency—billable hours, quantified habits, efficiency hacks—it stops feeling like a natural rhythm. Sociologists argue that the modern pressure to 'optimize' every minute reinforces the idea that time is scarce. Feeling constantly behind intensifies the sense that life is sprinting.",
  },
];

export default function Weird() {
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
            src={timeWeird}
            alt="Visual representation of time perception and distortion"
            className="w-full h-60 sm:h-[24rem] object-cover"
          />
        </div>

        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          How Time Got Weird: Why Everyone Feels Like Life Is Speeding Up
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-4">
          <p className="leading-6.5">
            Across conversations, journals, therapy rooms, and social feeds, one
            idea keeps surfacing: the sense that time has slipped into
            fast-forward. Weeks blur, years feel compressed, and even memories
            from 2019 feel strangely distant.
          </p>
          <p className="leading-6.5">
            Psychologists call this a "temporal distortion," and the 2020s have
            provided a perfect storm of conditions that bend our perception of
            time. From disrupted routines to hyper-digital living, the feeling
            isn't just poetic—it has scientific fingerprints.
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

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-4">
          <p className="leading-6.5">
            The sense that time is speeding up isn't a personal failing; it's a
            cultural, technological, and neurological reality. The 2020s rewired
            how people move, work, remember, and connect, creating a decade
            where the clock ticks normally but life moves unusually fast.
          </p>
          <p className="leading-6.5 font-medium text-gray-700 dark:text-white dark:font-semibold">
            As psychologists often note, slowing time isn't about controlling
            the seconds—it's about rebuilding meaningful markers, restoring
            pauses, and living with enough texture that memories can breathe.
            The next chapter of the decade may feel different if we learn to
            widen it.
          </p>
        </div>
      </div>
    </>
  );
}
