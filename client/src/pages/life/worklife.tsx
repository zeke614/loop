import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import articles from "../../constants/articles";
import { BackToTopButton } from "../../components/scrollToTop";

import worklife from "../../assets/imgs/worklife.jpg";

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
  (article) => article.id === "work-life-balance"
)!;

const sections = [
  {
    title: "1. The 1950s: Stability, Routine, and the Cult of the Office",
    content:
      "In the post-WWII boom, work was anchored in a predictable rhythm: 9 to 5, five days a week, in a centralized physical office. Most jobs were local, companies offered clear hierarchies, and the ideal worker was someone who rarely questioned the routine. Work-life balance wasn't a phrase yet — the 'balance' was enforced by strict boundaries. When you left the office, work stayed behind. This stability was comforting but often exclusionary, especially for women and anyone outside the traditional breadwinner model.",
  },
  {
    title: "2. The 1970s–80s: Two-Income Households and the Pressure Cooker",
    content:
      "As more women entered the workforce and inflation tightened household budgets, the single-earner model collapsed. Families suddenly had two jobs to juggle, but organizational policies hadn't evolved to support them. The phrase 'work-life balance' appeared during this period because people felt its absence. Companies introduced early forms of flextime, but culturally, the expectation remained: be present, be visible, be loyal.",
  },
  {
    title: "3. The 1990s: Technology Redraws the Boundary",
    content:
      "Personal computers and early mobile phones promised efficiency but quietly dissolved the wall between work and home. Email followed workers everywhere. The idea of 'availability' grew — and with it, the first real tension between digital tools and personal time. Yet this era also brought telecommuting experiments, as corporations discovered that some tasks didn't need a physical desk at all. The seeds of remote work were planted, even if they were still rare.",
  },
  {
    title: "4. The 2000s: Globalization and the 'Always-On' Culture",
    content:
      "As the internet threaded the world together, businesses stretched across time zones. Instant messaging, online dashboards, and early cloud platforms increased speed but also expectations. People were now reachable anytime. The BlackBerry era symbolized a shift: productivity was measured not by presence, but by responsiveness. Work-life balance became a strategic priority for HR departments trying to manage burnout — wellness programs, compressed workweeks, and optional remote days popped up in corporate playbooks.",
  },
  {
    title: "5. The 2010s: Remote Work Goes Mainstream (Slowly)",
    content:
      "Broadband access and cloud collaboration tools finally made remote work viable at scale. Tech companies led the experiment, offering flexible schedules and partial remote days. Coworking spaces boomed because workers craved flexibility but still wanted community. The rise of freelancing pushed the idea further: control your hours, pick your clients, keep your autonomy. Still, most traditional industries held onto in-person culture, wary of losing oversight and cohesion.",
  },
  {
    title: "6. 2020–2022: The Pandemic Breaks the Mold",
    content:
      "Global lockdowns created the largest involuntary work experiment in history. Overnight, millions discovered they could work from their kitchen tables, spare bedrooms, or balconies. Companies saw productivity rise or remain stable, while workers reevaluated how much of their identity was tied to commuting and office culture. Hybrid work emerged as the compromise: a few days in the office, a few days out. But the underlying question had changed — not 'Can we work remotely?' but 'Why not?'",
  },
  {
    title: "7. The Modern Remote Nomad: Flexibility as a Lifestyle",
    content:
      "As 2020s tech matured, remote work stopped being a stopgap and became a lifestyle strategy. People migrated to more affordable cities, lived abroad temporarily, or became 'digital nomads' staying productive from hostels, cafés, and beach towns with reliable Wi-Fi. Work-life balance now meant designing a personal rhythm: asynchronous schedules, microbreaks, travel-friendly setups, and workdays that flex around energy instead of clock time. Still, challenges remain — isolation, blurred boundaries, and global competition for remote roles keep the conversation lively.",
  },
  {
    title: "8. The Next Frontier: Redefining Balance Itself",
    content:
      "Today, the debate is less about where we work and more about how work fits into a meaningful life. Countries are experimenting with four-day weeks. Companies are redesigning roles around outcomes instead of hours. AI tools handle repetitive tasks, freeing people to focus on creative or interpersonal work. The future may favor fluid arrangements: seasonal workloads, shorter weeks, asynchronous teams, and location-agnostic careers that decouple identity from geography.",
  },
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

export default function Worklife() {
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
              className="absolute left-2 top-2 cursor-pointer z-50 p-2 bg-black text-white rounded-full transition-colors"
            >
              <ChevronLeftIcon className="size-4.5" />
            </div>
            <motion.img
              src={worklife}
              alt="Evolution of work from office to remote work"
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
            The Evolution of Work-Life Balance: From 1950s Office to Remote
            Nomad
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
              Work hasn't just changed — the very idea of what a "workday" is
              has mutated across decades of policy, technology, and culture. The
              journey from the postwar cubicle age to the era of remote nomads
              is less a straight line and more a renegotiation of what humans
              owe their jobs and what they owe their lives.
            </motion.p>
            <motion.p
              className="leading-6.5 font-medium text-gray-700"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Here's how we got from the 1950s to now.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="my-10 space-y-10">
          {sections.map((section, index) => (
            <AnimatedSection key={index} className="space-y-4">
              <motion.h2
                className="text-[1.375rem] md:text-2xl font-medium text-gray-900"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {section.title}
              </motion.h2>
              <motion.p
                className="text-[#767676] leading-7"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {section.content}
              </motion.p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-[#767676] text-start space-y-4">
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              From the rigid 1950s schedule to the fluid 2020s lifestyle,
              work-life balance has never been a static ideal. It shifts with
              technology, culture, and personal values.
            </motion.p>
            <motion.p
              className="leading-6.5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Today's workers aren't looking for a perfect equilibrium. They're
              crafting arrangements that let them thrive professionally without
              sacrificing family, autonomy, or the texture of everyday life.
            </motion.p>
            <motion.p
              className="leading-6.5 font-medium text-gray-700 italic"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              The evolution isn't over — it's simply entered a phase where
              individuals can shape the rhythm instead of inheriting it.
            </motion.p>
          </div>
        </AnimatedSection>
      </motion.div>
    </>
  );
}
