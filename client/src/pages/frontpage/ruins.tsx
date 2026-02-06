import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import greatZimbabwe from "../../assets/imgs/great-zimbabwe.jpg";
import machuPicchu from "../../assets/imgs/machuPicchu.jpg";
import angkorWat from "../../assets/imgs/angkor-wat.jpg";
import palmyra from "../../assets/imgs/palmyra.jpg";
import parthenon from "../../assets/imgs/parthenon.jpg";
import colosseum from "../../assets/imgs/colosseum.jpg";

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
  (article) => article.id === "architectural-ruins",
)!;

const ruins = [
  {
    title:
      "1. The Colosseum — A Monument That Outlived Its Empire (Rome, Italy)",
    img: colosseum,
    alt: "Ruins of the Colosseum in Rome",
    content:
      "Rome's Colosseum is instantly recognizable: a massive amphitheater with missing walls, broken arches, and exposed interior chambers. Earthquakes, stone theft, and centuries of neglect transformed it from a complete oval into the iconic semi-ruin known today. But the Colosseum's story didn't end when its gladiators did. Even damaged, it remains a symbol of a civilization both brilliant and brutal. Its surviving corridors reveal engineering genius, while its fragmented stones echo the cost of entertainment built on human suffering. Millions visit each year not to see a ruined stadium, but to experience a structure that somehow feels alive in its incompleteness. Its ruin gives it depth, weight, and honesty.",
  },
  {
    title:
      "2. Machu Picchu — The Hidden Citadel That Outsmarted Time (Cusco Region, Peru)",
    img: machuPicchu,
    alt: "Machu Picchu ruins with mountainous background",
    content:
      "Machu Picchu rises in the Peruvian Andes like a vision that almost shouldn't be real. Once a royal Incan estate and ceremonial retreat, it was abandoned in the 16th century during the empire's collapse and quickly swallowed by cloud forest. For centuries, it existed mostly in local stories until its early 20th-century rediscovery revealed terraces, temples, and stairways brushed by mist. Its partial ruin only intensifies its magic. The broken stones, the fragments of sun-aligned structures, the way nature clings to every ledge—everything feels deliberate, like the Inca crafted a city to remain impressive even in decay. Machu Picchu endures as a monument to human ingenuity but also to nature's ability to cradle and conceal the past.",
  },
  {
    title:
      "3. Great Zimbabwe — The Stone Kingdom That Refused to Vanish (Masvingo Province, Zimbabwe)",
    img: greatZimbabwe,
    alt: "Great Zimbabwe ruins",
    content:
      "In southeastern Zimbabwe stand the remains of a once-thriving medieval capital: a sprawling stone city built entirely without mortar. Great Zimbabwe's curved walls and towering enclosures speak of a wealthy society that dominated regional trade. When its population dispersed in the 15th century—likely due to environmental pressure and political transition—the city was left to the elements. Yet the granite walls still lock together with stubborn precision, forming passageways and ceremonial spaces that draw archaeologists from around the world. Even in ruin, Great Zimbabwe challenges long-held assumptions about African architecture, reminding us that cultural sophistication flourished far beyond the borders of Europe and the Middle East. Its silence is a kind of power, a whispered insistence that forgotten kingdoms shaped history too.",
  },
  {
    title:
      "4. The Parthenon — A Shattered Temple Still Shaping Civilizations (Athens, Greece)",
    img: parthenon,
    alt: "Ruins of the Parthenon temple in Athens",
    content:
      "The Parthenon sits atop the Acropolis as if keeping watch over Western civilization itself. Built to celebrate Athena and the political confidence of classical Athens, it has endured invasions, fires, earthquakes, and a catastrophic explosion in the 17th century. What stands now is a graceful frame of columns and carved fragments. Its ruin, far from diminishing its value, has strengthened its symbolic weight. The Parthenon continues to shape global ideas about democracy, aesthetics, and cultural heritage. Even as restoration efforts work carefully to preserve what remains, its broken edges invite reflection on impermanence and the long arc of human ambition. It is a masterpiece precisely because it has survived in pieces.",
  },
  {
    title:
      "5. Angkor Wat (and the Greater Angkor Region) — Temples Entangled in a Living Jungle (Siem Reap Province, Cambodia)",
    img: angkorWat,
    alt: "Angkor Wat temple ruins",
    content:
      "Angkor Wat is only one piece of a vast temple complex that once formed the spiritual and political heart of the Khmer Empire. Over centuries, conflict, resource strain, and shifting capitals left many structures abandoned, offering the jungle an opportunity it seized with enthusiasm. Roots thicker than a person's arm curl through stone corridors, and trees burst through collapsed rooftops, turning every ruin into a collaboration between nature and forgotten artisans. Instead of diminishing the site's beauty, this entanglement enhances it. Angkor's half-buried towers and carved reliefs radiate a dreamlike intensity, as if the past is emerging and disappearing in the same moment. Even in ruin, Angkor remains one of humanity's most mesmerizing architectural feats.",
  },
  {
    title:
      "6. Palmyra — A Desert Crossroads Reduced but Not Erased (Homs Governorate, Syria)",
    img: palmyra,
    alt: "Ruins of Palmyra with desert background",
    content:
      "Once a wealthy caravan city connecting the Roman world to Persia, India, and Arabia, Palmyra flourished through cultural exchange. Its grand colonnades, triumphal arches, and temple complexes announced its importance to travelers crossing the Syrian desert. Time alone did not ruin Palmyra—conflicts, shifting trade routes, and more recently, devastating destruction contributed to its fragmentation. Yet even the broken sections carry a fierce dignity. Sunlight slides across the surviving columns as though illuminating an ancient memory. Palmyra's ruins speak of a city that once thrived on connection, negotiation, and cosmopolitan identity, reminding visitors today that cultural crossroads are fragile treasures worth defending.",
  },
];

function RuinItem({ ruin }: { ruin: (typeof ruins)[0]; index: number }) {
  return (
    <div className="space-y-6">
      <h2 className="text-[1.375rem] md:text-2xl font-medium ">{ruin.title}</h2>
      <div className="overflow-hidden mb-6">
        <img
          src={ruin.img}
          alt={ruin.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </div>
      <p className="mb-6 text-[#767676] dark:text-[#d4d4d8] leading-7">
        {ruin.content}
      </p>
    </div>
  );
}

export default function Ruins() {
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
          Six Architectural Marvels, Now Ruins — But Still Awe
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600 dark:text-[#d4d4d8]">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] dark:text-[#d4d4d8] text-start">
          <p className="leading-6.5">
            Ruins invite imagination in ways polished monuments never can. They
            are the bones of past civilizations, exposed to wind, rain, and
            time, yet still powerful enough to shift how we think about beauty,
            ambition, and impermanence. This feature explores six extraordinary
            structures that have partially crumbled into silence but continue to
            inspire awe, scholarship, and cultural fascination. Their stones may
            be fractured, but their stories remain unbroken.
          </p>
        </div>

        <div className="my-14 space-y-14">
          {ruins.map((ruin, index) => (
            <RuinItem key={index} ruin={ruin} index={index} />
          ))}
        </div>

        <p className="text-[#767676] dark:text-[#d4d4d8] pt-3">
          Ruins preserve what polished monuments can't: the reminders of
          fragility, ambition, and the unpredictable forces that shape
          civilizations. These six architectural marvels are incomplete, yet
          they continue to inspire curiosity, scholarship, preservation efforts,
          and storytelling. Their broken stones are not losses but
          invitations—proof that beauty can endure long after purpose fades, and
          that even shattered structures can cast long, astonishing shadows
          across history.
        </p>
      </div>
    </>
  );
}
