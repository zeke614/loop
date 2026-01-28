import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import penicillin from "../../assets/imgs/penicillin.jpg";
import xray from "../../assets/imgs/xray.jpg";
import pacemaker from "../../assets/imgs/pacemaker.jpg";
import microwave from "../../assets/imgs/microwave.jpg";
import glue from "../../assets/imgs/glue.jpg";
import nuclear from "../../assets/imgs/nuclear.jpg";

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
  (article) => article.id === "failures-to-breakthroughs",
)!;

const breakthroughs = [
  {
    title: "1. Penicillin — A Dirty Petri Dish That Saved the World",
    img: penicillin,
    alt: "Penicillium drug",
    content:
      "Alexander Fleming didn't set out to change medicine in 1928. He was simply studying staphylococcal bacteria, went on holiday, and returned to find mold blooming across a forgotten petri dish. Instead of tossing the spoiled sample, he noticed something odd: the bacteria around the mold were dead, as if an invisible barrier had formed. The mold, Penicillium notatum, produced a substance that erased bacteria with ruthless precision. Fleming recognized its power, but even he didn't foresee antibiotics transforming human survival. What began as laboratory sloppiness became a new medical era—one where infections that once killed millions became treatable within days. The world owes an immeasurable debt to one unwashed dish.",
  },
  {
    title: "2. X-Rays — Wilhelm Röntgen's Glowing Accident",
    img: xray,
    alt: "doctor assessing an X-ray image",
    content:
      "In 1895, Wilhelm Röntgen was investigating cathode rays—harmless, low-energy stuff—when a fluorescent screen across the room began to glow. The rays he was studying shouldn't have caused that. Puzzled, he darkened the room and continued experimenting, eventually placing his hand between the tube and the screen. He saw his bones. Röntgen had stumbled upon a hidden slice of the electromagnetic spectrum, soon named 'X-rays.' This accidental glow became one of medicine's most powerful diagnostic tools. In weeks, scientists replicated the discovery; in months, hospitals adopted it. A failure to predict the behavior of mysterious rays opened a window into the human body itself.",
  },
  {
    title: "3. The Pacemaker — A Circuit Running Too Slowly",
    img: pacemaker,
    alt: "Doctor holding a pacemaker device",
    content:
      "Electrical engineer Wilson Greatbatch was building a device to record irregular heartbeats. While assembling the circuit, he reached for a resistor but grabbed the wrong one—a mistake every engineering student knows all too well. Instead of recording pulses, the circuit produced a gentle, rhythmic electrical signal—eerily similar to a human heartbeat. Greatbatch immediately knew what he had in his hands: not a diagnostic tool, but something that could restore a failing heart's rhythm. His 'error' became the first implantable pacemaker, a device now carried by millions. A swapped component meant for data capture became an instrument of life.",
  },
  {
    title:
      "4. Microwave Ovens — A Melted Candy Bar Sparks a Kitchen Revolution",
    img: microwave,
    alt: "Microwave oven",
    content:
      "Percy Spencer, a self-taught engineer, was testing magnetrons—the vacuum tubes used in radar systems—when he noticed a chocolate bar in his pocket begin to melt. Confused, he placed popcorn kernels near the device. They popped. Spencer had unknowingly exposed the food to microwave radiation, which agitates water molecules and heats food rapidly. What was supposed to be a dry engineering test became the origin of a household appliance that redefined cooking convenience. A radar engineer trying to improve communication systems accidentally modernized the global kitchen.",
  },
  {
    title: "5. Superglue — A Material Too Sticky to Use... Until It Was",
    img: glue,
    alt: "glue illustration",
    content:
      "During World War II, chemist Harry Coover was searching for heat-resistant materials for gun sights. Instead, he created cyanoacrylates—compounds that stuck to everything, including the instruments meant to measure them. The substance was shelved as useless. Years later, while working on another project, Coover and his colleague Fred Joyner rediscovered the glue and finally recognized its potential. What had once been an annoyance became one of the strongest, most versatile adhesives ever produced—vital in manufacturing, medicine, and everyday household repairs. Failure transformed into a multi-billion dollar innovation hiding in plain sight.",
  },
  {
    title: "6. Nuclear Fission — A Measurement That Seemed Impossible",
    img: nuclear,
    alt: "Nuclear fission illustration",
    content:
      "In 1938, physicists Otto Hahn and Fritz Strassmann found that uranium bombarded with neutrons produced barium—an impossibly lighter element. Their calculations suggested the atom had split, but that wasn't supposed to happen. They assumed they were wrong. Lise Meitner and her nephew Otto Frisch later explained the process: the uranium nucleus had indeed fractured, releasing vast energy. What began as an 'impossible result' became a cornerstone of nuclear physics—leading to reactors, weapons, and a new understanding of atomic structure. A result dismissed as experimental error revealed a force powerful enough to reshape geopolitics and energy for generations.",
  },
];

function BreakthroughItem({
  breakthrough,
}: {
  breakthrough: (typeof breakthroughs)[0];
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-[1.375rem] md:text-2xl font-medium">
        {breakthrough.title}
      </h2>
      <div className="overflow-hidden mb-6">
        <img
          src={breakthrough.img}
          alt={breakthrough.alt}
          className="w-full h-48 md:h-105 object-cover"
        />
      </div>
      <p className="mb-6 text-[#767676] leading-7">{breakthrough.content}</p>
    </div>
  );
}

export default function Breakthroughs() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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

      <div>
        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          Six Scientific Failures, Now Major Breakthroughs
        </h1>
        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>
      </div>

      <div className="text-[#767676] text-start">
        <p className="leading-6.5">
          Science is often portrayed as a straight staircase to truth, but many
          of its greatest leaps started with a misstep. Failed experiments,
          stray bacteria, overheated equipment—these tiny disasters reshaped
          medicine, physics, technology and even daily life. This feature
          explores six moments where mistakes didn't just guide innovation; they
          became the spark that rewrote what humanity thought possible.
        </p>
      </div>

      <div className="my-10 space-y-14">
        {breakthroughs.map((breakthrough, index) => (
          <BreakthroughItem key={index} breakthrough={breakthrough} />
        ))}
      </div>

      <div className="text-[#767676] pt-3">
        <p>
          These six stories share a quiet, universal truth: discovery is rarely
          a straight path. The human instinct to pause, notice, and question the
          unexpected has given us antibiotics, modern medicine, global
          communication, faster cooking, sticky miracles, and the key to the
          atom. Science advances not only from brilliance but from curiosity in
          the face of failure. Every misstep holds the potential for
          transformation when examined with patient, stubborn wonder.
        </p>
      </div>
    </div>
  );
}
