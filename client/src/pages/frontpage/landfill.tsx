import recyclingPlant from "../../assets/imgs/recyclingPlant.jpg";
import copenhill from "../../assets/imgs/copenhill.jpg";
import reppie from "../../assets/imgs/reppie.jpg";
import sweden from "../../assets/imgs/sweden.jpg";
import instanbul from "../../assets/imgs/turkplant.png";
import beijing from "../../assets/imgs/chinaPlant.jpg";
import tuasone from "../../assets/imgs/tuasone.png";
import plant from "../../assets/imgs/manilaPlant.jpeg";

export default function Landfill() {
  return (
    <div className="text-start py-22 px-5.5 mx-auto">
      <h1 className="text-center text-2xl md:text-3xl font-semibold pt-4">
        Seven Cities Turning{" "}
        <span className="block md:inline">Trash into Power</span>
      </h1>

      <div className="flex items-center justify-center pt-3 text-gray-500 mb-10">
        <span className="mr-3">October 29, 2025</span>
        <span>•</span>
        <span className="ml-3">
          by
          <span className="ml-1.5 font-medium text-gray-700">Daniel Opoku</span>
        </span>
      </div>

      <div className="overflow-hidden mb-6">
        <img
          src={recyclingPlant}
          alt="Recycling Plant"
          className="w-full h-48 md:h-[30rem] object-cover transition-transform duration-500"
        />
      </div>

      <div className="text-[#767676] text-start">
        <p className="leading-6.5 px-2">
          The modern city faces two ancient problems: waste and want. What to do
          with mountains of trash — and how to feed the endless appetite for
          energy. Across the globe, some cities are discovering that the answer
          to both problems can come from the same source. Here are 7 cities that
          have turned waste into power, lighting homes and warming streets from
          what once filled their landfills.
        </p>
      </div>

      <div className="my-14 space-y-14 px-1.5">
        <div className="space-y-6">
          <h2 className="text-[1.375rem] md:text-2xl font-medium">
            1. Copenhagen, Denmark — Where Waste Powers Homes and Skiers
          </h2>
          <div className="overflow-hidden mb-6 md:mx-20">
            <img
              src={copenhill}
              alt="Recycling Plant"
              className="w-full h-48 md:h-105 object-cover transition-transform duration-500"
            />
          </div>
          <p className="mb-6 text-[#767676] leading-7">
            The plant at Amager Bakke (also known as CopenHill) in Copenhagen
            not only burns nearly 400,000 tons of municipal waste annually to
            generate both electricity and district heating, but it also
            transforms the facility’s rooftop into an 85-metre ski slope,
            climbing wall and public recreation space. By embedding energy
            recovery into civic life and making the waste-plant a landmark,
            Copenhagen demonstrates how infrastructure and urban life can merge.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-[1.375rem] md:text-2xl font-medium">
            2. Stockholm, Sweden — Keeping Landfills Almost Empty
          </h2>
          <div className="overflow-hidden mb-6 md:mx-20">
            <img
              src={sweden}
              alt="Recycling Plant"
              className="w-full h-48 md:h-105 object-cover transition-transform duration-500"
            />
          </div>
          <p className="mb-6 text-[#767676] leading-7">
            Sweden, known for its high recycling rates, sends less than 1 % of
            its municipal waste to landfills. The rest is recycled or
            incinerated to produce power and heat for homes and industries. The
            country’s success lies in combining policy (strict landfill bans),
            infrastructure (34 + waste-to-energy plants) and culture (waste is
            seen as resource). That integrated model gives Stockholm one of the
            strongest circular-economy examples in the world.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-[1.375rem] md:text-2xl font-medium">
            3. Istanbul, Turkey — A Megacity’s Waste Becomes Energy
          </h2>
          <div className="overflow-hidden mb-6 md:mx-20">
            <img
              src={instanbul}
              alt="Recycling Plant"
              className="w-full h-48 md:h-105 object-cover transition-transform duration-500"
            />
          </div>
          <p className="mb-6 text-[#767676] leading-7">
            In the Eyüp district, the Istanbul Waste Power Plant processes
            around 3,000 tons of waste daily and produces approximately 78 MWh
            of electricity and 175 MWh of thermal energy — sufficient to meet
            the needs of a million people. The scale of the operation and the
            fact that it addresses both disposal and urban energy stress in one
            of the world’s largest cities makes it a model for rapidly
            urbanising regions.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-[1.375rem] md:text-2xl font-medium">
            4. Addis Ababa, Ethiopia — Africa’s First Big Waste-to-Energy Plan
          </h2>
          <div className="overflow-hidden mb-6 md:mx-20">
            <img
              src={reppie}
              alt="Recycling Plant"
              className="w-full h-48 md:h-105 object-cover transition-transform duration-500"
            />
          </div>
          <p className="mb-6 text-[#767676] leading-7">
            The Reppie Waste‑to‑Energy Plant in Addis Ababa was built on a
            reclaimed landfill site, converting the city’s waste into roughly 25
            MW of electricity while cutting methane emissions that would
            otherwise escape from open dumps. In doing so, it shows that
            waste-to-energy is not only for rich countries — with the right
            design and financing, it can work in emerging cities with rapid
            growth and major waste challenges.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-[1.375rem] md:text-2xl font-medium">
            5. Beijing, China — Scaling Up Waste-to-Energy at National Level
          </h2>
          <div className="overflow-hidden mb-6 md:mx-20">
            <img
              src={beijing}
              alt="Recycling Plant"
              className="w-full h-48 md:h-105 object-cover transition-transform duration-500"
            />
          </div>
          <p className="mb-6 text-[#767676] leading-7">
            In China, plants such as the Asuwei Domestic Waste Incineration
            Power Plant handle thousands of tons of household waste daily,
            convert it into 420 million kWh of green electricity per year, and
            reclaim metals and other materials from the slag. China’s massive
            deployment of waste-to-energy technology — combined with
            waste-sorting policies and local innovation — presents not just a
            city-level example but a national strategy for converting waste into
            energy and materials.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-[1.375rem] md:text-2xl font-medium">
            6. Singapore — An Island That Eats Its Own Trash
          </h2>
          <div className="overflow-hidden mb-6 md:mx-20">
            <img
              src={tuasone}
              alt="Recycling Plant"
              className="w-full h-48 md:h-105 object-cover transition-transform duration-500"
            />
          </div>
          <p className="mb-6 text-[#767676] leading-7">
            The city-state of Singapore is advancing the Tuas Nexus project,
            which integrates waste-to-energy, water reclamation and high-density
            land use. With little space for landfills and a premium on land and
            resources, Singapore turns its municipal solid waste into fuel and
            reclaim water in a closed-loop system. (See reports on Gulf / Asian
            cities turning waste into wealth.) This dual-loop model offers
            lessons for dense cities everywhere: when waste and utilities are
            re-imagined as interconnected, radical efficiency becomes possible.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-[1.375rem] md:text-2xl font-medium">
            7. Manila, Philippines — From Wasteland to Waste-to-Energy Model
          </h2>
          <div className="overflow-hidden mb-6 md:mx-20">
            <img
              src={plant}
              alt="Recycling Plant"
              className="w-full h-48 md:h-105 object-cover transition-transform duration-500"
            />
          </div>
          <p className="mb-6 text-[#767676] leading-7">
            In the Quezon City area of Metro Manila, a former uncontrolled
            landfill is being transformed into a waste-to-energy model project,
            showing how legacy disposal sites can become engines for clean
            energy and land regeneration. Through design, extraction and
            reclamation, the city illustrates how strategic intervention and
            public-private partnerships can convert urban waste legacies into
            sustainable infrastructure.
          </p>
        </div>
      </div>

      <p className="text-[#767676] pt-3">
        From these cities, a quiet revolution burns: garbage turned into green
        gold. Their success shows that the future of energy might not lie deep
        underground, but in what we throw away every day. These cities span
        different geographies, income levels and waste-profiles — yet they share
        a common pattern: waste is treated not as an after-thought but as a
        feedstock. Energy systems that integrate thermal recovery, recycling,
        and civic engagement are outperforming traditional disposal models. As
        more urban centres grow, the question shifts from “What do we do with
        trash?” to “What do we do with the value embedded in it?”
      </p>
    </div>
  );
}
