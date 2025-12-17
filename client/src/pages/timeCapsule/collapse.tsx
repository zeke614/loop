import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
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
  (article) => article.id === "collapsed-empires"
)!;

const empires = [
  {
    title: "1. The Roman Empire: Slow Decay Behind the Spectacle",
    content:
      "Rome didn't fall in a single year. It unraveled over centuries. Historians highlight several converging factors: political instability, overexpansion, a costly military, and economic decline accelerated by debased currency and heavy taxation. Climatic shifts in Late Antiquity caused agricultural disruption, while repeated invasions — most famously the Visigoths in 410 CE — exposed its military weakness. Contemporary scholarship also highlights internal fragmentation. The empire split into eastern and western halves by 395 CE, and the West lacked the bureaucratic strength that helped the East survive for nearly a millennium more. Rome's fall shows that empires can look magnificent on the surface while hollowing out underneath.",
  },
  {
    title: "2. The Mongol Empire: Too Big to Hold Together",
    content:
      "In the 1200s, the Mongol Empire became the largest contiguous land empire in history. Its speed of expansion was extraordinary, but maintaining control over such vast territory proved impossible. After the death of Möngke Khan in 1259, succession disputes divided the empire into khanates — the Golden Horde, the Ilkhanate, the Chagatai Khanate, and the Yuan Dynasty in China. These states weakened at different times, destabilized by internal conflict, disease (the Black Death decimated population and trade networks), and local resistance. The Mongol collapse illustrates how rapid expansion without long-term administrative integration eventually fractures.",
  },
  {
    title: "3. The Aztec Empire: Conquest Meets Contagion",
    content:
      "The Aztec Empire fell in 1521, but not solely because of Spanish military might. Hernán Cortés had just a few hundred men. The decisive forces were internal politics and epidemiology. Several Indigenous groups, unhappy with Aztec tribute demands and military dominance, allied with the Spanish. The arrival of smallpox in 1520 devastated Tenochtitlan's population — historians estimate up to half of the city's residents died. The empire's centralized structure made it vulnerable: when leadership faltered during the epidemic and siege, administrative functions collapsed quickly. The Aztec case is one of history's clearest examples of disease as a geopolitical force.",
  },
  {
    title: "4. The Ottoman Empire: Reform That Came Too Late",
    content:
      "For centuries, the Ottomans controlled territory across Europe, Asia, and Africa. By the 19th century, the empire's military technology and administrative systems lagged behind European powers. Attempts at modernization — the Tanzimat reforms (1839–1876) — expanded civil rights and updated institutions, but internal resistance, nationalist uprisings in the Balkans, and uneven implementation weakened the state. World War I delivered the final blow. Aligning with the Central Powers led to military defeat in 1918, and the empire was formally dissolved in 1922. The Ottoman story emphasizes how delayed reform can be as dangerous as no reform at all.",
  },
  {
    title: "5. The Soviet Union: Collapse From Inside",
    content:
      "The Soviet Union's dissolution in 1991 came from internal economic stagnation, political rigidity, and a failure to compete with Western technological and productivity advances. Scholars point to declining oil revenues in the 1980s, burdensome military spending, and systemic inefficiencies in the planned economy. Mikhail Gorbachev's reforms — perestroika (economic restructuring) and glasnost (political openness) — were meant to save the system, but they exposed long-suppressed grievances and weakened centralized control. Republics from the Baltics to Central Asia seized the opportunity to declare independence. The Soviet collapse shows how transparency and liberalization can destabilize an already fragile structure.",
  },
];

const patterns = [
  "Environmental pressure — drought shaped the decline of the Maya; the Little Ice Age stressed Ottoman and European agriculture.",
  "Economic imbalance — empires falter when revenue can't support armies, infrastructure, or bureaucracy.",
  "Elite conflict — succession crises fractured Rome, the Mongols, and countless dynasties in China.",
  "Resistance at the edges — colonies, vassal states, and conquered peoples often push back when imperial authority weakens.",
  "Failure to adapt — whether through technology, governance, or social reform, stagnation invites collapse.",
];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.02,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: 0.05,
    },
  },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -10px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      transition={{ type: "tween", ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Collapses() {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-start pb-4 px-4 mx-auto max-w-4xl relative"
      >
        <BackToTopButton showBackToTop={showBackToTop} />

        <AnimatedSection>
          <div className="relative overflow-hidden mb-4 -mx-4">
            <div
              onClick={() => window.history.back()}
              className="absolute left-3 top-2 cursor-pointer z-50 p-2 bg-black text-white rounded-full transition-colors"
            >
              <ChevronLeftIcon className="size-4.5" />
            </div>
            <motion.img
              src={articleData.img}
              alt="Collapsing empires and historical ruins"
              className="w-full h-60 sm:h-[24rem] object-cover"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.15 }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <motion.h1
            className="text-[1.438rem] md:text-[1.75rem] font-semibold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            When Empires Collapsed: Lessons From History's Great Falls
          </motion.h1>

          <motion.div
            className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="font-medium text-gray-600">
              {articleData.author},
            </span>
            <span className="mr-3">{articleData.date}</span>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-4">
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Empires never imagine themselves as temporary. From Rome to the
              Aztecs to the Soviet Union, each believed its political machinery,
              cultural identity, and military strength would outlast the
              generations running it.
            </motion.p>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              History paints a different picture. Empires fall for many reasons,
              but patterns recur: ecological pressure, economic strain,
              leadership failures, technological mismatches, and resistance from
              those they once controlled. Looking across centuries reveals not
              just how empires collapse, but how complex systems break when they
              stop adapting.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="my-10 space-y-10">
          {empires.map((empire, index) => (
            <AnimatedSection key={index} className="space-y-4">
              <motion.h2
                className="text-[1.375rem] md:text-2xl font-medium text-gray-900"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {empire.title}
              </motion.h2>
              <motion.p
                className="text-[#767676] leading-7"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {empire.content}
              </motion.p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="space-y-6">
            <motion.h2
              className="text-[1.375rem] md:text-2xl font-medium text-gray-900"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Patterns Across Centuries
            </motion.h2>

            <motion.div
              className="bg-gray-50 rounded-xl p-6 space-y-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-[#767676] mb-4">
                Though separated by culture and technology, collapsing empires
                share recognizable stresses:
              </p>

              <div className="space-y-3">
                {patterns.map((pattern, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 border-2 border-[#0ab39c] text-[#0ab39c] rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                      •
                    </span>
                    <p className="text-[#767676] leading-7">{pattern}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-4 mt-10">
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              The fall of an empire is rarely a single event; it is a long
              negotiation between internal weakness and external pressure.
              Studying these collapses is less about mourning past power than
              recognizing how complex systems depend on flexibility, legitimacy,
              and ecological balance.
            </motion.p>
            <motion.p
              className="leading-6.5 font-medium text-gray-700 italic"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              History's fallen empires remind modern institutions — from
              governments to global companies — that resilience isn't about
              scale or strength. It's about the ability to adapt before the
              breaking point arrives.
            </motion.p>
          </div>
        </AnimatedSection>
      </motion.div>
    </>
  );
}
