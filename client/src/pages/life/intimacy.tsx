import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import intimacy from "../../assets/imgs/intimacy.jpg";

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
  (article) => article.id === "digital-intimacy",
)!;

const sections = [
  {
    title: "1. Attraction in the Age of Swipes",
    content:
      "Dating apps flattened the world. Your romantic universe is no longer the neighborhood café or a friend's birthday; it's a shuffle of faces and bios shaped by filters, distance, and algorithms. Swiping is fun until it becomes work. People talk about 'choice fatigue'—too many options, too little depth. But they also credit apps for making it easier to meet people they'd never cross paths with otherwise. Introverts, queer folks in conservative areas, and anyone outside traditional social circles often find their first real shot at connection here. The irony is simple: limitless possibility makes commitment both easier and harder. Love is a field with more doors than ever, and every door whispers 'maybe.'",
  },
  {
    title: "2. Texting: Mini-Connections, Max Feelings",
    content:
      "Texting carries more emotional weight than it looks. The timing of a reply, the tone of a message, the presence or absence of punctuation—these tiny details shape how connected we feel. Quick exchanges throughout the day help couples stay close, even in busy seasons. But the same speed fuels overthinking. Many people admit their biggest relationship stressor is not knowing what a silence means. Our chats become archives of the entire relationship: the jokes, the mistakes, the late-night confessions. It's comforting and dangerous—everything is saved, for better or worse.",
  },
  {
    title: "3. Video Calls and 'Almost-There' Presence",
    content:
      "Video calls blur the line between together and apart. Partners cook dinner while on camera, study together silently, or fall asleep mid-call. It's a kind of virtual domestic life—intimate in its ordinariness. Still, screens have limits. Technical glitches break the mood. Eye contact never feels quite right. And without physical touch, couples rely more on conversation than ever before. Yet for long-distance relationships, this is a lifeline. It gives love a space to live, even across oceans.",
  },
  {
    title: "4. Social Media Etiquette and the New Boundaries",
    content:
      "Relationships now come with a digital layer. Should you follow each other's exes? Should you post your partner? How much online flirting counts as cheating? None of these questions existed twenty years ago, but they're normal now. Boundaries differ wildly from couple to couple. Some prefer digital privacy; others treat public posts as modern loyalty. What matters is alignment. Without it, misunderstandings multiply fast. Algorithms don't help. They surface old photos, serve up attractive strangers, and nudge you into comparisons—sometimes without you noticing.",
  },
  {
    title: "5. How Tech Rewrites Our Expectations of Love",
    content:
      "The biggest shifts are internal. Technology trains us to expect faster responses, constant availability, curated identities, and relationships that feel 'always online.' This can make romance feel more immediate—but also more fragile. When everything happens through a screen, small gaps feel bigger, and minor miscommunications echo louder. Still, people adapt. Many describe digital intimacy as a place where they're braver, more open, and more articulate than in person. Technology doesn't replace emotion; it reshapes the paths we take to reach it.",
  },
];

export default function Intimacy() {
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
            src={intimacy}
            alt="Digital intimacy and modern relationships"
            className="w-full h-60 sm:h-[24rem] object-cover"
          />
        </div>

        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          How Digital Intimacy Is Changing the Way We Date and Relate
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-4">
          <p className="leading-6.5">
            Digital intimacy used to mean sending a late-night text. Now it's a
            whole emotional ecosystem built from notifications, swipes, voice
            notes, and tiny glowing screens that follow us everywhere. Romance
            hasn't disappeared; it's simply migrated into a new environment—one
            where desire, anxiety, connection, and misunderstanding all play by
            updated rules.
          </p>
          <p className="leading-6.5 text-[#767676] dark:text-[#d4d4d8]">
            This is the landscape of modern affection: part convenience, part
            chaos, and entirely irreversible.
          </p>
        </div>

        <div className="my-14 space-y-10">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-[1.375rem] md:text-2xl font-medium ">
                {section.title}
              </h2>
              <p className="text-[#767676] dark:text-[#d4d4d8] leading-7">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start space-y-6">
          <p className="leading-6.5">
            Digital intimacy isn't ruining romance—it's remixing it. The tools
            change, the rituals evolve, but the core need stays the same: to
            feel known, chosen, and understood. As our devices keep weaving
            themselves into daily life, the challenge is simple but
            profound—using them to deepen connection rather than distract from
            it.
          </p>
          <p className="leading-6.5 font-medium text-gray-700 dark:text-white dark:font-semibold">
            The story continues wherever humans and technology keep bumping into
            each other, trying to figure out what closeness means in a world
            that never truly logs off.
          </p>
        </div>
      </div>
    </>
  );
}
