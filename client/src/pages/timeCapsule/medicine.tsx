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
  (article) => article.id === "when-food-was-medicine",
)!;

const diets = [
  {
    title: "The Egyptian Healing Pantry",
    content:
      "Ancient Egypt's medical papyri — including the Ebers Papyrus (c. 1550 BCE) — describe foods used as specific treatments. Garlic and onions were routinely given to laborers for strength and infection resistance. Modern biochemical studies confirm antibacterial compounds like allicin are present in garlic. Honey was applied to wounds because Egyptians observed its preservative properties; today we know honey's low water activity and hydrogen peroxide content inhibit bacterial growth. Bread and beer were staples not only for calories but for their probiotic fermentation, which offered safer hydration in a hot climate. Their reliance on food-as-remedy was so established that many prescriptions combined edible and inedible components, blurring medicine with cuisine.",
  },
  {
    title: "Ayurvedic Diets and the Philosophy of Balance",
    content:
      "In South Asia, Ayurvedic texts like the Charaka Samhita (compiled roughly 1st millennium BCE) offered an intricate dietary system based on balancing doshas — conceptual forces shaping body and mind. Foods were classified by taste (rasa) and energetic effect. Ginger, turmeric, and black pepper appear repeatedly as digestive and anti-inflammatory aids. Modern phytochemical studies support some of these traditional uses; for instance, curcumin in turmeric does show anti-inflammatory action in controlled experiments. Ayurveda also emphasized seasonal eating — heavier foods during winter, cooling foods in summer — a model that influenced Indian regional cuisines for centuries and still shapes health practices today.",
  },
  {
    title: "The Mediterranean Diet Before It Had a Name",
    content:
      "Ancient Greek and Roman physicians, including Hippocrates and Galen, framed diet as the primary tool of healing. Hippocrates' oft-quoted principle 'Let food be thy medicine' is debated as a direct quote, but his surviving texts make the idea clear: food should be the first line of treatment. Their 'humoral' system was flawed by modern standards, but many of their preferred foods — whole grains, legumes, olives, and fish — align with what researchers now call the Mediterranean diet. Olive oil was recommended for wounds, digestion, and skin health; modern clinical studies confirm benefits for cardiovascular function. The military rations of the Roman legions — barley, olive oil, vinegar, cured meats — were designed for stamina, which helped sustain the empire's long campaigns.",
  },
  {
    title: "Traditional Chinese Medicine and the Energetics of Eating",
    content:
      "In China, food therapy (shíliáo) emerged alongside Traditional Chinese Medicine (TCM). The foundational text Huangdi Neijing (compiled between the 2nd century BCE and 2nd century CE) categorized foods by their 'warming' or 'cooling' nature. Ginger, garlic, and scallions were favored for dispersing 'cold' illnesses; millet and rice porridges were used to treat digestive disorders. While TCM uses conceptual frameworks rather than biochemical ones, many recommended foods have measurable physiological effects — ginger reduces nausea, mushrooms contain β-glucans that support immune activity, and soybeans offer complete protein. Culinary practice and medicine were so intertwined that imperial kitchens employed both chefs and physicians to coordinate menus.",
  },
  {
    title: "Mesoamerican Maize and the Chemistry That Sustained Empires",
    content:
      "In ancient Mesoamerica, maize formed the backbone of Aztec, Maya, and earlier Olmec nutrition. But the crucial step was nixtamalization — cooking maize with alkaline substances like limewater. This process releases niacin (vitamin B3), prevents pellagra, and improves protein quality. Cultures that adopted maize without nixtamalization centuries later suffered deficiencies, while Mesoamerican civilizations thrived partly because this culinary-chemical innovation kept large populations healthy. Cacao was consumed as a bitter, spiced drink used in ritual and as a stimulant; its theobromine content offered mild cardiovascular effects. The Aztec tlatoani (ruler) maintained reserves of cacao beans not only as currency but as a medicinal resource.",
  },
  {
    title: "The Islamic Golden Age and the Science of Dietetics",
    content:
      "Between the 8th and 14th centuries, scholars of the Islamic Golden Age refined a system of dietetics drawing from Greek, Persian, and Arab sources. Physicians like Al-Razi (Rhazes) and Ibn Sina (Avicenna) classified foods by their therapeutic effects in texts such as The Canon of Medicine. Pomegranates were prescribed for digestive issues, dates for energy and nutrient density, and yogurt for cooling fevers — practices partly aligned with today's nutritional understanding of fiber, sugars, and probiotic cultures. Hospitals in Baghdad and Córdoba integrated dietary care into treatment, assigning specialized kitchens to prepare meals suited to different conditions.",
  },
  {
    title: "Medieval Europe: Monastic Hospitals and Herbal Diets",
    content:
      "European monasteries preserved and adapted classical medical knowledge. Monastic herb gardens cultivated plants used both for cooking and healing: sage for throat ailments, thyme for respiratory issues, and nettles for anemia due to iron content. Monks produced broths fortified with herbs, grains, and vegetables to treat the sick. The famed 'Hildegardian diet,' inspired by Hildegard of Bingen's 12th-century writings, promoted spelt, fennel, and quince for their balancing properties. While rooted in spiritual worldviews, many of these foods do contain vitamins, minerals, and antioxidants.",
  },
];

export default function Medicine() {
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
            alt="Historic foods used as medicine across civilizations"
            className="w-full h-60 sm:h-[24rem] object-cover"
          />
        </div>

        <h1 className="text-[1.438rem] md:text-[1.75rem] font-semibold">
          When Food Was Medicine: Historic Diets That Influenced Civilization
        </h1>

        <div className="flex items-center gap-1.5 text-sm pt-3 text-[#989797] mb-6">
          <span className="font-medium text-gray-600">
            {articleData.author},
          </span>
          <span className="mr-3">{articleData.date}</span>
        </div>

        <div className="text-[#767676] text-start space-y-4">
          <p className="leading-6.5">
            Long before pharmacies, people turned to kitchens, farms, temples,
            and marketplaces for healing. Ancient medical systems didn't
            separate diet from treatment; they treated food as chemistry,
            cosmology, and cultural identity.
          </p>
          <p className="leading-6.5">
            What people ate shaped armies, social hierarchies, religious
            practice, and even political stability. These historic diets weren't
            whimsical prescriptions — they were early experiments in nutrition,
            tuned through observation, necessity, and belief. They left
            fingerprints on civilizations that endure today.
          </p>
        </div>

        <div className="my-10 space-y-10">
          {diets.map((diet, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-[1.375rem] md:text-2xl font-medium text-gray-900">
                {diet.title}
              </h2>
              <p className="text-[#767676] leading-7">{diet.content}</p>
            </div>
          ))}
        </div>

        <div className="text-[#767676] text-start space-y-4">
          <p className="leading-6.5">
            Across cultures, food served as the earliest shared language of
            medicine. These historic diets were not proto-science by accident —
            they were responses to environmental pressures, careful observation,
            and cultural philosophy.
          </p>
          <p className="leading-6.5">
            While modern medicine has moved far beyond ancient models, many of
            the ingredients that once filled healing cupboards still occupy our
            pantries. The past shows that eating has never been just
            nourishment; it has been technology, identity, and a quiet form of
            survival strategy.
          </p>
          <p className="leading-6.5 font-medium text-gray-700">
            As nutrition science evolves, echoes of these older systems continue
            shaping how people think about food and wellness today.
          </p>
        </div>
      </div>
    </>
  );
}
