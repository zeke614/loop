import worklife from "../assets/imgs/worklife.jpg";
import spaceJunk from "../assets/imgs/spaceJunk.jpg";
import biomimicry from "../assets/imgs/biomimicry.webp";
import amateur from "../assets/imgs/amateur.jpg";
import recyclingPlant from "../assets/imgs/recyclingPlant.jpg";
import ruins from "../assets/imgs/ruins.jpg";
import lab from "../assets/imgs/lab.avif";
import sports from "../assets/imgs/sports.avif";
import boardroom from "../assets/imgs/boardroom.jpg";
import psyche from "../assets/imgs/psyche.jpg";
import typewriter from "../assets/imgs/typewriter.jpg";
import aiEthics from "../assets/imgs/aiEthics.png";
import intimacy from "../assets/imgs/intimacy.jpg";
import college from "../assets/imgs/college.jpg";
import timeWeird from "../assets/imgs/time-weird.jpg";
import fpioneer from "../assets/imgs/fpioneer.jpg";
import foodMedicine from "../assets/imgs/foodMedicine.jpg";
import newspaper from "../assets/imgs/newspaper.jpg";
import collapse from "../assets/imgs/collapse.webp";
import secondAct from "../assets/imgs/2ndact.jpg";

interface Article {
  id: string;
  category?: string;
  title?: string;
  description?: string;
  img?: string;
  alt?: string;
  author?: string;
  date?: string;
}

const articles: Record<string, Article[]> = {
  "Front Page": [
    {
      id: "failures-to-breakthroughs",
      category: "Genius and Folly",
      title: "Scientific Failures That Sparked Big Discoveries",
      date: "October 27, 2025",
      author: "Loop Editorial",
      img: lab,
      alt: "Laboratory experiment scene",
      description:
        "Science is often portrayed as a straight staircase to truth, but many of its greatest leaps started with a misstep. Failed experiments, stray bacteria, overheated equipment—these tiny disasters reshaped medicine, physics, technology and even daily life. This feature explores six moments where mistakes didn’t just guide innovation; they became the spark that rewrote what humanity thought possible.",
    },
    {
      id: "architectural-ruins",
      category: "Time Capsule",
      title: "Architectural Marvels That Are Now Ruins — But Still Awe",
      date: "March 14, 2025",
      author: "Loop Editorial",
      img: ruins,
      alt: "Ruined architectural marvel",
      description:
        "Ruins invite imagination in ways polished monuments never can. They are the bones of past civilizations, exposed to wind, rain, and time, yet still powerful enough to shift how we think about beauty, ambition, and impermanence.",
    },
    {
      id: "landfill-to-loop",
      category: "The Living Planet",
      title: "From Landfill to Loop: Cities That Turned Waste into Power",
      date: "March 19, 2025",
      author: "Loop Editorial",
      img: recyclingPlant,
      alt: "Waste-to-energy facility",
      description:
        "The modern city faces two ancient problems: waste and want. What to do with mountains of trash — and how to feed the endless appetite for energy. Across the globe, some cities are discovering that the answer to both problems can come from the same source.",
    },
    {
      id: "the-will-to-win",
      category: "Arena of Fame",
      title: "The Will to Win: Sports Comebacks That Redefined Grit",
      date: "February 20, 2025",
      author: "Loop Editorial",
      img: sports,
      alt: "Athlete celebrating a comeback win",
      description:
        "Resilience in sport rarely arrives neatly wrapped; it erupts in moments when defeat seems inevitable and adrenaline rewrites the script. This feature revisits five astonishing comebacks across different eras and disciplines, examining not just the scorelines but the psychological swings, tactical recalibrations, and cultural ripples they left behind. These are the matches that turned despair into legend.",
    },
    {
      id: "corporate-failures-to-better-governance",
      category: "Money and Madness",
      title: "The Corporate Failures That Led to Better Governance Models",
      date: "July 26, 2025",
      author: "Loop Editorial",
      img: boardroom,
      alt: "Boardroom with empty chairs",
      description:
        "Corporate collapse is rarely sudden—it's usually the slow unraveling of ambition, secrecy, and flawed incentives. This article revisits seven infamous failures whose shockwaves reshaped modern oversight, from manipulated accounts to reckless cultures that prized growth over truth. Through financial autopsies and governance lessons, it explores how disaster became the catalyst for stronger rules, sharper scrutiny, and a deeper understanding of what responsible leadership truly demands.",
    },
    {
      id: "forgotten-inventions",
      category: "Time Capsule",
      title: "Inventions Forgotten by Time That Were Ahead of Their Era",
      date: "May 14, 2025",
      author: "Loop Editorial",
      img: typewriter,
      alt: "Vintage mechanical invention",
      description:
        "History treats innovation like a spotlight: a few names glow bright, while the rest dissolve into the dim backstage. Yet scattered across that backstage are inventions so forward-thinking they feel like they slipped through a crack in time — ideas born decades too early, misunderstood by their century, only to reappear later in more successful forms. These are the prototypes of the future that the world wasn’t ready to adopt. This article dusts off five such inventions. They weren’t failures of imagination; they were failures of timing, infrastructure, market readiness, or sheer luck. Their stories show how an idea can be brilliant and still fall flat, and how innovation is often less about genius and more about catching the wave exactly when it rises.",
    },
    {
      id: "performance-hacks",
      category: "Human Currents",
      title:
        "Psychological Hacks Elite Performers Use to Stay Calm Under Pressure",
      date: "April 5, 2025",
      author: "Loop Editorial",
      img: psyche,
      alt: "Athlete closing eyes before a race",
      description:
        "Elite performers live in environments where heart rates spike, crowds roar, expectations tighten the chest, and errors carry consequences. Yet their defining skill isn’t a genetic gift—it’s the ability to regulate stress so effectively that pressure becomes a tailwind rather than an anchor. Across sports psychology, performing arts research, and high-stakes science, several mental techniques show up again and again. What follows is a breakdown of six evidence-backed tools and real people who use them.",
    },
  ],
  "Human Currents": [
    {
      id: "work-life-balance",
      category: "Human Currents",
      title:
        "The Evolution of Work-Life Balance: From 1950s Office to Remote Nomad",
      date: "May 2, 2025",
      author: "Loop Editorial",
      img: worklife,
      alt: "Vintage office and modern remote workspace split image",
      description: `Work hasn't just changed — the very idea of what a "workday" is has mutated across decades of policy, technology, and culture. The journey from the postwar cubicle age to the era of remote nomads is less a straight line and more a renegotiation of what humans owe their jobs and what they owe their lives.`,
    },
    {
      id: "performance-hacks",
      category: "Human Currents",
      title:
        "Psychological Hacks Elite Performers Use to Stay Calm Under Pressure",
      date: "April 5, 2025",
      author: "Loop Editorial",
      img: psyche,
      alt: "Athlete closing eyes before a race",
      description:
        "Elite performers live in environments where heart rates spike, crowds roar, expectations tighten the chest, and errors carry consequences. Yet their defining skill isn’t a genetic gift—it’s the ability to regulate stress so effectively that pressure becomes a tailwind rather than an anchor. Across sports psychology, performing arts research, and high-stakes science, several mental techniques show up again and again. What follows is a breakdown of six evidence-backed tools and real people who use them.",
    },
    {
      id: "toughest-colleges-to-get-into",
      category: "Human Currents",
      title:
        "The Hardest Colleges to Get Into Today — And What Makes Them So Selective",
      date: "March 19, 2025",
      author: "Loop Editorial",
      img: college,
      alt: "College graduates holding caps in the air",
      description: `Selectivity has become its own global sport. As applications surge and digital recruitment expands the applicant pool, a handful of institutions now admit only a tiny fraction of hopefuls. A low acceptance rate isn't a guarantee of "better education", but it does reflect capacity limits, intense demand, and decades of reputation-building.`,
    },
    {
      id: "how-time-got-weird",
      category: "Human Currents",
      title: "How Time Got Weird: Why Everyone Feels Like Life Is Speeding Up",
      date: "June 25, 2025",
      author: "Loop Editorial",
      img: timeWeird,
      alt: "People participating in a traditional ritual",
      description:
        "Across conversations, journals, therapy rooms, and social feeds, one idea keeps surfacing: the sense that time has slipped into fast-forward. Weeks blur, years feel compressed, and even memories from 2019 feel strangely distant.",
    },
    {
      id: "digital-intimacy",
      category: "Human Currents",
      title:
        "How Digital Intimacy Is Reshaping the Way We Date, Relate and Connect",
      date: "July 5, 2025",
      author: "Loop Editorial",
      img: intimacy,
      alt: "Two phones with chat bubbles overlapping",
      description:
        "Digital intimacy used to mean sending a late-night text. Now it's a whole emotional ecosystem built from notifications, swipes, voice notes, and tiny glowing screens that follow us everywhere. Romance hasn't disappeared; it's simply migrated into a new environment—one where desire, anxiety, connection, and misunderstanding all play by updated rules.",
    },
    // {
    //   id: "hidden-lives-of-gig-workers",
    //   category: "Human Currents",
    //   title: "The Hidden Lives of Gig Workers: Stories from the New Economy",
    //   date: "October 17, 2025",
    //   author: "Mariela Santos",
    //   img: "",
    //   alt: "Delivery rider taking a break",
    //   description:
    //     "Gig work reshaped incomes, schedules, and expectations about stability — but behind the statistics are human stories of resilience, risk and reinvention. This longform narrative follows five workers across regions to reveal the real tradeoffs and survival strategies of platform labor.",
    // },
    // {
    //   id: "human-001",
    //   category: "Human Currents",
    //   title: "Five Subcultures That Redefined Fashion in the 21st Century",
    //   date: "February 3, 2025",
    //   author: "Lena Duarte",
    //   img: "",
    //   alt: "Street fashion crowd in Tokyo",
    //   description:
    //     "Exploring how underground movements—from Harajuku street style to Afrofuturism—converged with mainstream fashion, changing runways, retail and identity in subtle and seismic ways. This piece traces designers, communities, and moments that turned fringe looks into global statements, and shows how cultural exchange reshaped aesthetics across continents.",
    // },
    // },
    // {
    //   id: "human-007",
    //   category: "Human Currents",
    //   title:
    //     "Five Times the 'Self-Help' Movement Tangibly Shifted Society’s Mindset",
    //   date: "August 29, 2025",
    //   author: "Elise Moretti",
    //   img: "",
    //   alt: "Books and journals on a table",
    //   description:
    //     "From productivity mantras to therapeutic trends, the self-help industry has periodically reshaped values, labor practices, and public health approaches. This history tracks five moments where self-improvement narratives migrated into policy, workplace design, and cultural norms...",
    // },
    // {
    //   id: "human-008",
    //   category: "Human Currents",
    //   title:
    //     "Cultural Appropriation vs. Cultural Exchange: A Deep Dive Through Case Studies",
    //   date: "September 12, 2025",
    //   author: "Sanjay Rao",
    //   img: "",
    //   alt: "Collage of cultural artifacts",
    //   description:
    //     "The line between homage and harm often depends on context, power, and intent. Through concrete case studies in music, fashion, and cuisine, this article clarifies the ethical questions and offers frameworks for creators and consumers navigating cultural borrowing...",
    // },
    // {
    //   id: "human-010",
    //   category: "Human Currents",
    //   title:
    //     "How Loneliness Became a Global Epidemic — And What Communities Are Doing About It",
    //   date: "November 23, 2025",
    //   author: "Theo Ramsey",
    //   img: "",
    //   alt: "People in a supportive circle",
    //   description:
    //     "Loneliness has medical, social and economic consequences, but solutions are emerging from unlikely places—libraries, co-housing and peer networks. This investigation surveys interventions that actually reduce isolation and how local design can rebuild meaningful connection.",
    // },
  ],
  "The Living Planet": [
    {
      id: "landfill-to-loop",
      category: "The Living Planet",
      title: "From Landfill to Loop: Cities That Turned Waste into Power",
      date: "March 19, 2025",
      author: "Loop Editorial",
      img: recyclingPlant,
      alt: "Waste-to-energy facility",
      description:
        "The modern city faces two ancient problems: waste and want. What to do with mountains of trash — and how to feed the endless appetite for energy. Across the globe, some cities are discovering that the answer to both problems can come from the same source.",
    },
    {
      id: "resilient-ecosystems",
      category: "The Living Planet",
      title: "Seven Ecosystems That Should Have Collapsed — But Didn’t",
      date: "September 12, 2025",
      author: "Loop Editorial",
      img: "/images/planet-001.jpg",
      alt: "Lush resilient ecosystem landscape",
      description:
        "Despite extreme pressures, some ecosystems show surprising resilience, from mangroves to alpine meadows. This piece examines seven such systems, the ecological mechanisms that stabilized them, and what resilience teaches us about conservation in a changing climate...",
    },
    {
      id: "antarctica-ice-coastal-impact",
      category: "The Living Planet",
      title: "What Antarctica’s Melting Ice Really Means for Coastal Cities",
      date: "April 24, 2025",
      author: "Loop Editorial",
      img: "/images/planet-009.jpg",
      alt: "Antarctic ice shelf calving",
      description:
        "Melting Antarctic ice is a global issue with site-specific consequences for coastal planning, insurance markets and migration. This analytical article explains the science of ice loss, models of sea-level rise, and practical adaptation measures for risk-exposed communities...",
    },
    {
      id: "fungal-networks",
      category: "The Living Planet",
      title: "The Underground Networks of Mycorrhizal Fungi: Nature’s Internet",
      date: "October 17, 2025",
      author: "Loop Editorial",
      img: "/images/planet-005.jpg",
      alt: "Fungal networks in soil closeup",
      description:
        "Mycorrhizal fungi form vast subterranean networks that shuttle nutrients and signals between plants, reshaping our understanding of forest communities. This piece synthesizes ecology research and explores implications for reforestation and carbon sequestration strategies...",
    },
    {
      id: "water-scarcity-solutions",
      category: "The Living Planet",
      title:
        "The Future of Water: Ancient Aqueducts, Modern Desalination, and Scarcity",
      date: "November 24, 2025",
      author: "Loop Editorial",
      img: "/images/planet-008.jpg",
      alt: "A modern desalination plant",
      description:
        "Water scarcity is a technical problem wrapped in social and political complexity. By tracing infrastructure from Roman aqueducts to present desalination and watershed management, this piece highlights solutions that are technically possible and socially equitable...",
    },
    {
      id: "microplastics-biological-systems",
      category: "The Living Planet",
      title: "The Unexpected Role of Microplastics in Biological Systems",
      date: "July 5, 2025",
      author: "Loop Editorial",
      img: "/images/planet-010.jpg",
      alt: "Microplastics on a beach",
      description:
        "Microplastics are pervasive, but their ecological and physiological impacts are complex and only partially understood. This investigation compiles recent research on how tiny particles move through food webs, alter microbial communities, and affect human health risks...",
    },
  ],
  //   {
  //     id: "planet-002",
  //     category: "The Living Planet",
  //     title:
  //       "The Rise and Fall of Coral Reefs: What They Tell Us About Climate Resilience",
  //     date: "February 3, 2025",
  //     author: "Hiroko Tanaka",
  //     img: "/images/planet-002.jpg",
  //     alt: "Coral reef underwater",
  //     description:
  //       "Coral reefs are both fragile and adaptive, offering an early warning system for ocean health. This longform explores bleaching events, restoration experiments, and community efforts that aim to protect reefs and the coastal economies that depend on them...",
  //   },
  //   {
  //     id: "planet-003",
  //     category: "The Living Planet",
  //     title: "Five Urban Wildlife Comebacks That Surprise Ecologists",
  //     date: "June 25, 2025",
  //     author: "Lucas Ferreira",
  //     img: "/images/planet-003.jpg",
  //     alt: "City skyline with wildlife",
  //     description:
  //       "From peregrine falcons nesting on skyscrapers to coyotes in metropolitan parks, wildlife has reasserted itself in cities worldwide. This report chronicles five surprising comebacks and the urban policies and habitat designs that enabled them...",
  //   },
  //   {
  //     id: "planet-004",
  //     category: "The Living Planet",
  //     title:
  //       "How Indigenous Land Management Practices Are Reshaping Conservation",
  //     date: "August 29, 2025",
  //     author: "Aroha Te Rangi",
  //     img: "/images/planet-004.jpg",
  //     alt: "Indigenous people tending land",
  //     description:
  //       "Indigenous stewardship often holds long-tested ecological knowledge that modern conservation is rediscovering and integrating. Through field studies and interviews, this article shows how traditional fire regimes, rotational harvesting, and sacred site protection deliver measurable biodiversity benefits...",
  //   },
  //   {
  //     id: "planet-006",
  //     category: "The Living Planet",
  //     title: "Six Invasive Species That Became Unexpected Benefactors",
  //     date: "May 2, 2025",
  //     author: "Maya Alvarez",
  //     img: "/images/planet-006.jpg",
  //     alt: "Invasive species in a landscape",
  //     description:
  //       "Not all introductions are purely destructive — in some contexts invasive species have altered ecosystems in surprising ways that benefited other species or human uses. This nuanced analysis traces six cases where management and adaptation reframed an invasive narrative...",
  //   },

  // ],

  "Money and Madness": [
    {
      id: "corporate-failures-to-better-governance",
      category: "Money and Madness",
      title: "The Corporate Failures That Led to Better Governance Models",
      date: "July 26, 2025",
      author: "Loop Editorial",
      img: boardroom,
      alt: "handcuff on a newspaper",
      description:
        "Corporate collapse is rarely sudden—it's usually the slow unraveling of ambition, secrecy, and flawed incentives. This article revisits seven infamous failures whose shockwaves reshaped modern oversight, from manipulated accounts to reckless cultures that prized growth over truth. Through financial autopsies and governance lessons, it explores how disaster became the catalyst for stronger rules, sharper scrutiny, and a deeper understanding of what responsible leadership truly demands...",
    },
    {
      id: "art-investment-safer-than-stocks",
      category: "Money and Madness",
      title: "Five Times Art Became Safer Than Stocks",
      date: "October 10, 2025",
      author: "Loop Editorial",
      img: "/images/finance-007.jpg",
      alt: "Art gallery interior",
      description:
        "When financial markets wobble, collectors sometimes turn to art for preservation and profit. This feature analyzes moments when art markets outperformed equities, why that happened, and what risks and myths surround art as an investment class...",
    },
    {
      id: "carbon-credits",
      category: "Money and Madness",
      title: "The Bizarre World of Carbon Credits: Betting on Cleaner Air",
      date: "April 28, 2025",
      author: "Loop Editorial",
      img: "/images/finance-004.jpg",
      alt: "Industrial smokestacks and wind turbines",
      description:
        "Carbon markets promise cost-effective emissions reductions, but their design has produced paradoxes and controversies. This investigative piece explains how credits are created, traded, and sometimes gamed, and profiles reforms that could make the system more credible...",
    },
    {
      id: "niche-cryptocurrencies",
      category: "Money and Madness",
      title:
        "Six Cryptocurrencies You've Never Heard Of That Carved Their Own Niche",
      date: "March 1, 2025",
      author: "Loop Editorial",
      img: "/images/finance-003.jpg",
      alt: "Crypto coins on a table",
      description:
        "Beyond Bitcoin and Ethereum, niche blockchains tackled supply chain provenance, microtransactions, and decentralized identity. This exploration profiles six lesser-known projects, what problems they pursued, and whether their approaches offer long-term value...",
    },
    {
      id: "gig-economy-hidden-math",
      category: "Money and Madness",
      title:
        "The Gig Economy’s Hidden Math: Why the Numbers Don’t Add Up for Many",
      date: "June 7, 2025",
      author: "Loop Editorial",
      img: "/images/finance-008.jpg",
      alt: "Worker using a gig economy app",
      description:
        "Piece rates and algorithmic tasking obscure the real costs and earnings of platform work. Using data and interviews, this analysis exposes why headline earnings often mask precariousness and which policy fixes could rebalance power and pay...",
    },
    // {
    //   id: "finance-009",
    //   category: "Money and Madness",
    //   title: "Emerging Markets That Are Defying Global Recession Trends",
    //   date: "August 21, 2025",
    //   author: "Loop Editorial",
    //   img: "/images/finance-009.jpg",
    //   alt: "Bustling marketplace in emerging city",
    //   description:
    //     "While global growth slowed, a handful of countries sustained momentum through structural reforms, exports or unique demographic advantages. This survey identifies resilient markets, the policies that helped them, and risks that could change their trajectories...",
    // },
    //    {
    //   id: "finance-005",
    //   category: "Money and Madness",
    //   title:
    //     "How Subsistence Economies Are Being Reinvented in the Digital Age",
    //   date: "September 5, 2025",
    //   author: "Loop Editorial",
    //   img: "/images/finance-005.jpg",
    //   alt: "Local market in rural area",
    //   description:
    //     "Digital tools are reshaping informal and subsistence economies—improving access to markets, credit and resilience while introducing new risks. This reporting looks at grassroots fintech, cooperatives, and local adaptation strategies that are closing information gaps...",
    // },
    // {
    //   id: "finance-010",
    //   category: "Money and Madness",
    //   title: "The Rise of Social Impact Investing: Profit With Purpose?",
    //   date: "February 11, 2025",
    //   author: "Loop Editorial",
    //   img: "/images/finance-010.jpg",
    //   alt: "People planting a tree with investors watching",
    //   description:
    //     "Impact investing blends financial returns with measurable social outcomes, but measuring impact is hard and contested. This piece examines frameworks, case studies, and the tensions between scale and accountability in investments that claim to do good...",
    // },
    //   {
    //   id: "finance-001",
    //   category: "Money and Madness",
    //   title: "Five Financial Crises That Were Avoided at the Last Minute",
    //   date: "January 21, 2025",
    //   author: "Loop Editorial",
    //   img: "/images/finance-001.jpg",
    //   alt: "Financial market closeup",
    //   description:
    //     "From central bank interventions to decisive regulatory acts, several near-disasters were defused before markets collapsed entirely. This piece reconstructs five tense moments, the actors who steered outcomes, and the structural lessons learned about fragility in finance...",
    // },
    // {
    //   id: "finance-002",
    //   category: "Money and Madness",
    //   title:
    //     "The Free Economy: How Open-Source Is Upending Traditional Business Models",
    //   date: "November 22, 2025",
    //   author: "Loop Editorial",
    //   img: "/images/finance-002.jpg",
    //   alt: "Open source collaboration on screen",
    //   description:
    //     "Open-source software and hardware redefined how goods are created and shared, creating new pathways for revenue beyond license fees. This article examines companies and communities harnessing openness to scale, compete and reimagine intellectual property norms...",
    // },
  ],

  "Arena of Fame": [
    {
      id: "second-act-icons-who-reinvented-themselves",
      category: "Arena of Fame",
      title: "The Second Act: Icons Who Reinvented Themselves After Failure",
      date: "June 11, 2025",
      author: "Loop Editorial",
      img: secondAct,
      alt: "global icon athlete celebrating",
      description:
        "Public failure has a way of freezing people in time. An early loss, a public stumble, a bad season or scandal can become the headline that follows someone forever. In sports and entertainment alike, the first narrative tends to stick.",
    },
    {
      id: "mega-events-economics",
      category: "Arena of Fame",
      title:
        "The Economics of Mega-Events: Olympics, World Cups & Legacy Questions",
      date: "January 7, 2025",
      author: "Loop Editorial",
      img: "/images/stage-005.jpg",
      alt: "Stadium lit up at night",
      description:
        "Hosting mega-events promises jobs and prestige but often leaves mixed legacies and large debts. This analysis weighs costs, urban planning outcomes, and the lived experiences of residents in cities that hosted global spectacles...",
    },
    {
      id: "box-office-flops-cult-classics",
      category: "Arena of Fame",
      title: "Six Films That Were Box-Office Flops — Then Became Cult Classics",
      date: "May 18, 2025",
      author: "Loop Editorial",
      img: "/images/stage-002.jpg",
      alt: "Film poster collage",
      description:
        "Some films fail commercially but thrive culturally, building passionate followings and affecting art for decades. This article traces six such journeys from initial flop to cult status and asks what this reveals about taste, distribution and fandom...",
    },
    {
      id: "fandom-identity-sociology",
      category: "Arena of Fame",
      title: "When Fandom Becomes Identity: The Sociology of Fan Cultures",
      date: "October 1, 2025",
      author: "Loop Editorial",
      img: "/images/stage-010.jpg",
      alt: "Crowd of fans at a concert",
      description:
        "Fan cultures do more than consume; they create communities, rituals and identity markers. This sociological account explores how fans organize, build subcultures, and influence creative industries through participation, curation and activism...",
    },
    {
      id: "stage-design-audience-emotion",
      category: "Arena of Fame",
      title: "Behind the Curtain: How Stage Design Shapes Audience Emotion",
      date: "August 11, 2025",
      author: "Loop Editorial",
      img: "/images/stage-007.jpg",
      alt: "Intricate stage set design",
      description:
        "Set, light and sound design choreograph audience feeling as much as script or score. This piece interviews designers and directors about the craft of spatial storytelling and how physical environments guide collective experience during live shows...",
    },
    {
      id: "the-will-to-win",
      category: "Arena of Fame",
      title: "The Will to Win: Incredible Sports Comebacks That Redefined Grit",
      date: "February 20, 2025",
      author: "Loop Editorial",
      img: sports,
      alt: "Athlete celebrating a comeback win",
      description:
        "Comebacks endure because they reveal something elemental about competition: talent matters, but resolve is its own kind of physics. These five stories capture the moment when athletes and teams refused to accept predictable endings.",
    },
    //   {
    //   id: "arena-009",
    //   category: "Arena of Fame",
    //   title: "Six Underdog Athletes Who Became Global Icons",
    //   date: "March 28, 2025",
    //   author: "Loop Editorial",
    //   img: "/images/stage-009.jpg",
    //   alt: "Underdog athlete celebrating",
    //   description:
    //     "Stories of underdogs who rose to global acclaim illuminate sport’s narrative power and the social forces that elevate certain heroes. This feature profiles six athletes whose unlikely ascents reshaped their sports and inspired broader cultural conversations...",
    // },
    // {
    //   id: "arena-003",
    //   category: "Arena of Fame",
    //   title:
    //     "The Rise of Esports: How Virtual Arenas Are Challenging Traditional Stadiums",
    //   date: "July 9, 2025",
    //   author: "Zoe Park",
    //   img: "/images/stage-003.jpg",
    //   alt: "Esports arena with LED screens",
    //   description:
    //     "Esports transformed niche gaming communities into professional leagues, global audiences and massive sponsorships. This exploration charts the business models, fan practices, and infrastructural demands that make virtual competition a stadium-scale spectacle...",
    // },
    // {
    //   id: "arena-004",
    //   category: "Arena of Fame",
    //   title: "Seven Artists Who Reinvented Themselves — And Their Industries",
    //   date: "November 2, 2025",
    //   author: "Rashid Alawi",
    //   img: "/images/stage-004.jpg",
    //   alt: "Artist mid-performance",
    //   description:
    //     "Creative reinvention can reshape careers and entire mediums. Through profiles of seven artists who radically changed direction, this feature uncovers the risks, strategies and cultural conditions that enable successful transformation in the public eye...",
    // },
    // {
    //   id: "arena-006",
    //   category: "Arena of Fame",
    //   title:
    //     "When Sports and Politics Collide: Landmark Moments in Arena History",
    //   date: "June 15, 2025",
    //   author: "Soren Lind",
    //   img: "/images/stage-006.jpg",
    //   alt: "Athlete protest during an event",
    //   description:
    //     "From boycotts to symbolic gestures, arenas have long been stages for political expression. This historical overview examines pivotal moments when sport intersected with politics and the lasting cultural repercussions of those clashes...",
    // },
    // {
    //   id: "arena-008",
    //   category: "Arena of Fame",
    //   title:
    //     "From Stadium to Screen: The Evolution of Live Performance Broadcasts",
    //   date: "April 1, 2025",
    //   author: "Diego Santos",
    //   img: "/images/stage-008.jpg",
    //   alt: "Cameras broadcasting a live event",
    //   description:
    //     "Broadcasting technologies transformed how audiences consume live performance, expanding reach but changing intimacy. This article traces radio, television and streaming innovations and how the mediation of presence affects artistic choices and fan rituals...",
    // },
  ],

  "Genius and Folly": [
    {
      id: "tech-in-nature",
      category: "Genius and Folly",
      title: "Hidden Tech in Nature: Biomimicry From Shark Skin to Gecko Feet",
      date: "February 27, 2025",
      author: "Loop Editorial",
      img: biomimicry,
      alt: "Gecko climbing glass closeup",
      description:
        "Engineers often pride themselves on cutting-edge tools, yet many of the cleverest ideas arrive pre-installed in the living world. Plants, insects, birds, and marine life have spent billions of years refining designs humans are only beginning to notice. Biomimicry takes these natural strategies and turns them into practical technologies—sometimes simple, sometimes wildly futuristic. The examples below illustrate how looking to nature can reshape everything from architecture to robotics.",
    },
    {
      id: "ai-ethics-dilemmas",
      category: "Genius and Folly",
      title: "The Ethics of AI: Dilemmas We Still Can’t Solve",
      date: "May 3, 2025",
      author: "Loop Editorial",
      img: aiEthics,
      alt: "Abstract representation of AI ethics",
      description:
        "Artificial intelligence promises dazzling leaps in medicine, climate modeling, education, and creativity. Yet every breakthrough seems to drag behind it a small parade of ethical thorns. The core problem isn't evil robots or runaway superintelligence—it's that our systems are becoming powerful in ways that challenge long-standing norms about fairness, duty, autonomy, and responsibility.",
    },
    {
      id: "amateur-inventors",
      category: "Genius and Folly",
      title: "How Amateur Inventors Are Disrupting Big Tech",
      date: "April 19, 2025",
      author: "Loop Editorial",
      img: amateur,
      alt: "kid building a robot",
      description:
        "There's a romantic myth that all groundbreaking inventions begin in gleaming labs guarded by PhD-level gatekeepers. In reality, many of the tools we now treat as inevitable were born in garages, sheds, cramped bedrooms, and badly lit basements that smelled faintly of solder and ambition. The amateur inventor has always been the sneaky wildcard in the world of innovation—untethered from bureaucracy, unburdened by product roadmaps, and propelled mostly by stubborn curiosity. What's surprising isn't that this tradition continues. It's that it is accelerating.",
    },
    {
      id: "space-junk-to-mining",
      category: "Genius and Folly",
      title: "Space Junk to Space Mining: The Next Frontier of Tech",
      date: "July 14, 2025",
      author: "Loop Editorial",
      img: spaceJunk,
      alt: "Satellites and orbitals",
      description:
        // "As orbital congestion grows, entrepreneurs and governments are exploring cleanup tech and extraction from asteroids. This article surveys technological possibilities, legal questions, and the environmental calculus of bringing industry into near-Earth space...",
        " Earth's orbit is becoming a junkyard. Thousands of defunct satellites, spent rocket stages, and fragments of debris drift silently at tens of thousands of kilometers per hour. Meanwhile, on the horizon is a more ambitious dream: mining asteroids and other celestial bodies for metals, water, and resources that could fuel life and industry—beyond Earth.",
    },
    {
      id: "failures-to-breakthroughs",
      category: "Genius and Folly",
      title: "Scientific Failures That Sparked Big Discoveries",
      date: "October 27, 2025",
      author: "Loop Editorial",
      img: lab,
      alt: "Laboratory experiment scene",
      description:
        "Science is often portrayed as a straight staircase to truth, but many of its greatest leaps started with a misstep. Failed experiments, stray bacteria, overheated equipment—these tiny disasters reshaped medicine, physics, technology and even daily life. This feature explores six moments where mistakes didn’t just guide innovation; they became the spark that rewrote what humanity thought possible.",
    },
    // {
    //   id: "science-001",
    //   category: "Genius & Folly",
    //   title: "The Most Unlikely Tech Inventions That Changed the World",
    //   date: "August 2, 2025",
    //   author: "Rhea Kapoor",
    //   img: "/images/science-001.jpg",
    //   alt: "Collage of surprising inventions",
    //   description:
    //     "Some inventions began as curiosities or failed projects, but later became indispensable. This exploration highlights unexpected breakthroughs—like microwave ovens, Velcro, and penicillin analogies in tech—tracing the accidents, contexts and adopters that made them transformative...",
    // },
    // {
    //   id: "science-006",
    //   category: "Genius & Folly",
    //   title: "Six Bio-hacks That Went Too Far — and What We Learned",
    //   date: "March 23, 2025",
    //   author: "Karim Hassan",
    //   img: "/images/science-006.jpg",
    //   alt: "Lab equipment and biohacking tools",
    //   description:
    //     "Biohacking sits at the intersection of curiosity and risk, and some experiments have provoked ethical alarms. This investigative piece documents cases where DIY biology crossed lines, the consequences that followed, and how communities responded to normalize safer practices...",
    // },
    // {
    //   id: "science-009",
    //   category: "Genius & Folly",
    //   title: "Quantum Computing: Six Milestones on the Road Ahead",
    //   date: "June 2, 2025",
    //   author: "Sofia Gutiérrez",
    //   img: "/images/science-009.jpg",
    //   alt: "Quantum chip closeup",
    //   description:
    //     "Quantum computing is advancing through incremental technical breakthroughs and conceptual milestones. This explanatory article outlines six markers—both practical and theoretical—that researchers interpret as meaningful progress toward useful quantum advantage...",
    // },
    // {
    //   id: "science-008",
    //   category: "Genius & Folly",
    //   title: "When the Internet Goes Dark: Tech Failures That Paralyzed Cities",
    //   date: "January 10, 2025",
    //   author: "Beom-Jun Park",
    //   img: "/images/science-008.jpg",
    //   alt: "City at night with network outage overlay",
    //   description:
    //     "Network outages can cascade into public-safety and economic threats. This piece reconstructs incidents where digital infrastructure failed, the systemic vulnerabilities they exposed, and the design changes aimed at building more resilient urban systems...",
    // },
    // {
    //   id: "science-010",
    //   category: "Genius & Folly",
    //   title:
    //     "Why Some Innovations Succeed and Others Vanish: A Sociotechnical Study",
    //   date: "November 18, 2025",
    //   author: "Alejandro Ruiz",
    //   img: "/images/science-010.jpg",
    //   alt: "Old technology in a display case",
    //   description:
    //     "An invention’s fate depends on networks, timing, regulation and narratives as much as engineering. This analytical study examines historical cases to map the social and technical conditions that turn inventions into enduring tools or forgotten curiosities...",
    // },
  ],

  "Time Capsule": [
    {
      id: "overlooked-pioneers",
      category: "Time Capsule",
      title: "The Forgotten Scientists: Pioneers Who Didn’t Get the Credit",
      date: "April 10, 2025",
      author: "Loop Editorial",
      img: fpioneer,
      alt: "Portraits of historical scientists",
      description:
        "Scientific breakthroughs are rarely solo achievements, yet history books often spotlight only a handful of names. Behind every celebrated discovery are researchers whose contributions went unrecognized—sometimes for decades.",
    },
    {
      id: "collapsed-empires",
      category: "Time Capsule",
      title: "When Empires Collapsed: Lessons From History’s Great Falls",
      date: "February 18, 2025",
      author: "Loop Editorial",
      img: collapse,
      alt: "Ancient ruins and fallen columns",
      description:
        "Empires never imagine themselves as temporary. From Rome to the Aztecs to the Soviet Union, each believed its political machinery, cultural identity, and military strength would outlast the generations running it.",
    },
    {
      id: "forgotten-inventions",
      category: "Time Capsule",
      title: "Inventions Forgotten by Time That Were Ahead of Their Era",
      date: "May 14, 2025",
      author: "Loop Editorial",
      img: typewriter,
      alt: "Vintage mechanical invention",
      description:
        "History treats innovation like a spotlight: a few names glow bright, while the rest dissolve into the dim backstage. Yet scattered across that backstage are inventions so forward-thinking they feel like they slipped through a crack in time — ideas born decades too early, misunderstood by their century, only to reappear later in more successful forms.",
    },
    {
      id: "when-food-was-medicine",
      category: "Time Capsule",
      title:
        "When Food Was Medicine: Historic Diets That Influenced Civilization",
      date: "July 30, 2025",
      author: "Loop Editorial",
      img: foodMedicine,
      alt: "Medicinal foods",
      description:
        "Long before pharmacies, people turned to kitchens, farms, temples, and marketplaces for healing. Ancient medical systems didn't separate diet from treatment; they treated food as chemistry, cosmology, and cultural identity.",
    },
    {
      id: "how-newspapers-shaped-20th-century",
      category: "Time Capsule",
      title: "Old Media, New Lessons: How Newspapers Shaped the 1900s",
      date: "November 29, 2025",
      author: "Loop Editorial",
      img: newspaper,
      alt: "Archive of newspapers",
      description:
        "Newspapers were the algorithm before the algorithm — the daily engine that sorted chaos into a shared story. Across the 20th century, they didn't just report events; they organized civic life, popularized new norms, and set political agendas.",
    },
    {
      id: "architectural-ruins",
      category: "Time Capsule",
      title: "Architectural Marvels That Are Now Ruins — But Still Awe",
      date: "March 14, 2025",
      author: "Loop Editorial",
      img: ruins,
      alt: "Ruined architectural marvel",
      description:
        "Ruins invite the imagination in ways polished monuments never can. They are the bones of past civilizations, exposed to wind, rain, and time, yet still powerful enough to shift how we think about beauty, ambition, and impermanence.",
    },
    // {
    //   id: "time-002",
    //   category: "Time Capsule",
    //   title:
    //     "The Lost Cities Rediscovered: How Archaeology Is Rewriting the Past",
    //   date: "January 14, 2025",
    //   author: "Pablo Mendes",
    //   img: "/images/time-002.jpg",
    //   alt: "Ruins in a desert landscape",
    //   description:
    //     "New digs and remote sensing are rewriting timelines and trade networks once considered settled. This report profiles recent discoveries that changed historical narratives and the methods archaeologists used to unearth hidden chapters of human history...",
    // },
    // {
    //   id: "time-003",
    //   category: "Time Capsule",
    //   title: "Six Cultural Movements That Vanished But Left a Mark",
    //   date: "September 29, 2025",
    //   author: "Rashmi Kapoor",
    //   img: "/images/time-003.jpg",
    //   alt: "Vintage poster collage",
    //   description:
    //     "Some cultural movements flame out quickly yet seed ideas that reappear later in altered forms. This piece charts six fleeting movements and traces their afterlives in music, design, politics and street practice, uncovering hidden continuities across time...",
    // },
    // {
    //   id: "time-008",
    //   category: "Time Capsule",
    //   title: "What 19th Century Technology Can Teach Us About Sustainability",
    //   date: "October 6, 2025",
    //   author: "Gustav Holm",
    //   img: "/images/time-008.jpg",
    //   alt: "19th century industrial machinery",
    //   description:
    //     "Victorian innovations mixed durability and material intensity in ways that both inspired and warned future generations. This investigatory piece extracts lessons from historic engineering and manufacturing about longevity, repairability and resource use for modern design...",
    // },
    // {
    //   id: "time-009",
    //   category: "Time Capsule",
    //   title:
    //     "The Artifacts of Everyday Life From a Century Ago — And What They Tell Us",
    //   date: "August 7, 2025",
    //   author: "Naomi Adler",
    //   img: "/images/time-009.jpg",
    //   alt: "Vintage household objects",
    //   description:
    //     "Household objects reveal daily priorities, gender roles and economic conditions that larger histories can miss. This curated collection examines everyday artifacts—tools, toys, cookware—and reads them as windows into changing social routines and values...",
    // },
  ],
};

export default articles;

// const articles = [
//   {
//     id: 1,
//     title: "The Forgotten Pioneers of Space Travel",
//     category: "Earth",
//     date: "September 2, 2024",
//     author: "Aria Bennett",
//     img: space,
//     alt: "outer space",
//     description:
//       "Before Neil Armstrong took his famous step, dozens of scientists and cosmonauts risked everything to test the unknown. Their stories—often lost in the archives—reveal the true human cost of reaching the stars...",
//   },
//   {
//     id: 2,
//     title: "The Prototype That Dreamed in Code",
//     category: "Tech",
//     date: "February 20, 2025",
//     author: "Adrian Park",
//     img: code,
//     alt: "code(programming)",
//     description:
//       "Engineers built an AI meant to compose music—but one night, it generated a sound file titled 'Let Me Out.' What the team heard when they played it back silenced the room...",
//   },
//   {
//     id: 3,
//     title: "The Secret Lives of Lost Currencies",
//     category: "Finance",
//     date: "August 10, 2024",
//     author: "Elias Koomson",
//     img: finance,
//     alt: "finance",
//     description:
//       "When a nation abandons its currency, what happens to the money left behind? From Zimbabwe’s trillion-dollar notes to forgotten European francs, some now sell for more than they ever could buy. Their strange afterlife reveals how value isn’t always about worth, but about memory…",
//   },
//   {
//     id: 4,
//     title: "The Movie That Was Erased From History",
//     category: "Entertainment",
//     date: "August 10, 2024",
//     author: "Rina Solis",
//     img: movie,
//     alt: "movie",

//     description:
//       "In 1973, a sci-fi film predicted our digital age with eerie precision—and then every reel vanished from circulation. What happened to the cast, and who didn't want it seen again...",
//   },
//   {
//     id: 5,
//     title: "The Bacterium That Refuses to Die",
//     category: "Science",
//     date: "March 8, 2025",
//     author: "Dr. Leo Karlin",
//     img: bacteria,
//     alt: "bacteria",
//     description:
//       "Discovered in a forgotten freezer, this ancient microbe survived for millennia without oxygen or light. But when scientists revived it, the organism began to behave in ways no one could explain...",
//   },
//   {
//     id: 6,
//     title: "The Team That Vanished Mid-Season",
//     category: "Sports",
//     date: "November 14, 2024",
//     author: "Carlos Deen",
//     img: football,
//     alt: "football",
//     description:
//       "A small-town football club took the world by storm—until one day they didn't show up for the semifinals. No statements, no traces, only a single voicemail left behind...",
//   },
//   {
//     id: 7,
//     title: "The Stranger Who Mailed 100 Letters to Himself",
//     category: "Life",
//     date: "July 29, 2024",
//     author: "Naomi Idris",
//     img: mailbox,
//     alt: "letters in a mailbox",
//     description:
//       "Every week for a year, a man sent a letter to his own address—each envelope containing a clue. What investigators found when they opened the final one changed everything they knew about him...",
//   },
//   {
//     id: 8,
//     title: "The Signal That Echoed Back From Nowhere",
//     category: "Tech",
//     date: "October 5, 2024",
//     author: "Dr. Mila Greene",
//     img: signal,
//     alt: "satellite in space",
//     description:
//       "In 1998, a satellite picked up a repeating transmission from deep space. Decades later, when the pattern resurfaced, it was traced to a frequency that no human had ever used before...",
//   },
//   {
//     id: 9,
//     title: "The Forest That Whispers Back",
//     category: "Earth",
//     date: "January 12, 2025",
//     author: "Eli Mora",
//     img: forest,
//     alt: "forest",
//     description:
//       "Deep in the Amazon, scientists discovered a grove that responds to sound frequencies—trees that tremble when you speak near them. The truth behind this strange resonance might change how we understand life itself...",
//   },

//   {
//     id: 10,
//     title: "The Mind Experiment That Went Too Far",
//     category: "Science",
//     date: "May 16, 2025",
//     author: "Harold Lin",
//     img: brain,
//     alt: "brain and lab apparatus",
//     description:
//       "A group of neuroscientists built a machine to map dreams in real time. The only volunteer to complete the trial refused to sleep again afterward...",
//   },
// ];

// export default articles;
