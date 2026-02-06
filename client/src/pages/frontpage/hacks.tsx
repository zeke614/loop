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

const articleData = (articles["Human Currents"] as Article[]).find(
  (article) => article.id === "performance-hacks",
)!;

const hacks = [
  {
    title: "1. Tactical Breathing: The Nervous System Reset",
    alt: "Person practicing tactical breathing technique",
    content:
      "Navy SEALs use a regulated breath pattern called 'box breathing,' a simple 4-4-4-4 rhythm (inhale, hold, exhale, hold). Sports psychologists note that this slows activity in the sympathetic nervous system—the part responsible for fight-or-flight. Example: Mikaela Shiffrin, the world-class skier, openly attributes her between-run breathing routines to helping her stay emotionally level on the world stage. She treats each breath like a reset button.",
  },
  {
    title: "2. Cognitive Rehearsal: Mental Reps for Real Performance",
    alt: "Athlete visualizing performance mentally",
    content:
      "Neuroscience shows that mentally simulating an action activates nearly identical brain circuits as physically doing it. Elite performers rehearse entire sequences—from starting stance to final gesture—until the brain treats the event like déjà vu. Example: Violinist Hilary Hahn is known for silently walking through finger placements and bowing patterns backstage. She says it makes the concert feel 'already lived once' before she steps onstage.",
  },
  {
    title: "3. Cue Words: Shortcuts to the Optimal Mindset",
    alt: "Basketball player at free throw line using cue words",
    content:
      "These are single words or tiny phrases that instantly redirect attention. Runners use 'relax.' Actors use 'presence.' Chess players use 'clarity.' The brain develops an association so strong that the word triggers an entire psychological routine. Example: NBA players frequently whisper their cue words at the free-throw line. Steph Curry has mentioned using 'rhythm' as his internal anchor.",
  },
  {
    title: "4. Attentional Narrowing: Shrinking the Universe on Purpose",
    alt: "Astronaut focusing during spacewalk",
    content:
      "Under pressure, humans often choke because they take in too much sensory information. Elite performers intentionally narrow focus to a single tactile, visual, or auditory point. Example: Astronaut Sunita Williams described focusing exclusively on her glove seals during critical spacewalk moments. She said it kept her brain 'anchored to one real thing' in an environment full of danger.",
  },
  {
    title: "5. Pre-Performance Routines: Your Own Personal Launch Sequence",
    alt: "Tennis player with pre-serve routine",
    content:
      "A consistent ritual—tying shoes the same way, stretching in the same order—tells the brain that stress is predictable, not chaotic. Studies show this reduces cortisol spikes and increases confidence. Example: Serena Williams bounces the ball exactly the same number of times before serving. She calls it 'a comfort pattern' when pressure rises.",
  },
  {
    title: "6. Reframing Stress as Fuel, Not Danger",
    alt: "Performer backstage preparing for show",
    content:
      "Psychologists have long known that the body's stress response is similar to excitement. Elite performers train themselves to interpret a racing heart as readiness instead of fear. Example: Stage actor Rami Malek once said he tells himself, 'This energy is my edge,' right as the curtain rises. The nerves don't disappear—they get repurposed.",
  },
];

function HackItem({ hack }: { hack: (typeof hacks)[0] }) {
  return (
    <div className="space-y-6">
      <h2 className="text-[1.375rem] md:text-2xl font-medium dark:text-[#d4d4d8]">
        {hack.title}
      </h2>
      <p className="mb-6 text-[#767676] dark:text-[#d4d4d8] leading-7">
        {hack.content}
      </p>
    </div>
  );
}

export default function Hacks() {
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
            Six Mental Performance Hacks Used by Elite Performers
          </h1>

          <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
            <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
              {articleData.author},
            </span>
            <span className="mr-3">{articleData.date}</span>
          </div>
        </div>

        <div>
          <div className="text-[#767676] dark:text-[#d4d4d8] text-start">
            <p className="leading-6.5">
              Elite performers live in environments where heart rates spike,
              crowds roar, expectations tighten the chest, and errors carry
              consequences. Yet their defining skill isn't a genetic gift—it's
              the ability to regulate stress so effectively that pressure
              becomes a tailwind rather than an anchor.
            </p>
            <p className="leading-6.5 mt-4">
              Across sports psychology, performing arts research, and
              high-stakes science, several mental techniques show up again and
              again. What follows is a breakdown of six evidence-backed tools
              and real people who use them.
            </p>
          </div>
        </div>

        <div className="my-14 space-y-14">
          {hacks.map((hack, index) => (
            <HackItem key={index} hack={hack} />
          ))}
        </div>

        <div>
          <p className="text-[#767676] dark:text-[#d4d4d8] pt-3">
            All six strategies share a theme: they regulate uncertainty.
            Pressure becomes overwhelming only when the brain feels out of
            control. These tools restore predictability, control, and agency.
            The more repeatable the technique, the more powerful it becomes.
            Elite performance isn't magic—it's the mastery of internal weather.
          </p>
        </div>
      </div>
    </>
  );
}
