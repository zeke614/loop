// import forest from "../assets/imgs/forest.png";
// import movie from "../assets/imgs/movie.png";
// import bacteria from "../assets/imgs/bacteria.png";
// import finance from "../assets/imgs/finance.jpg";
import recyclingPlant from "../assets/imgs/recyclingPlant.jpg";
import ruins from "../assets/imgs/ruins.avif";
import lab from "../assets/imgs/lab.avif";
import sports from "../assets/imgs/sports.avif";
import boardroom from "../assets/imgs/boardroom.jpg";
import psyche from "../assets/imgs/psyche.jpg";
import typewriter from "../assets/imgs/typewriter.jpg";

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
      category: "Genius & Folly",
      title: "Scientific Failures That Sparked Big Discoveries",
      date: "October 27, 2025",
      author: "Olu Jacobs",
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
      author: "Elena Rodriguez",
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
      author: "Daniel Opoku",
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
      author: "Hannah Clarke",
      img: sports,
      alt: "Athlete celebrating a comeback win",
      description:
        "Resilience in sport rarely arrives neatly wrapped; it erupts in moments when defeat seems inevitable and adrenaline rewrites the script. This feature revisits five astonishing comebacks across different eras and disciplines, examining not just the scorelines but the psychological swings, tactical recalibrations, and cultural ripples they left behind. These are the matches that turned despair into legend…",
    },
    {
      id: "corporate-failures-to-better-governance",
      category: "Money & Madness",
      title: "The Corporate Failures That Led to Better Governance Models",
      date: "July 26, 2025",
      author: "Yasmin Khalid",
      img: boardroom,
      alt: "Boardroom with empty chairs",
      description:
        "Corporate collapse is rarely sudden—it's usually the slow unraveling of ambition, secrecy, and flawed incentives. This article revisits seven infamous failures whose shockwaves reshaped modern oversight, from manipulated accounts to reckless cultures that prized growth over truth. Through financial autopsies and governance lessons, it explores how disaster became the catalyst for stronger rules, sharper scrutiny, and a deeper understanding of what responsible leadership truly demands...",
    },
    {
      id: "performance-hacks",
      category: "Human Currents",
      title:
        "Psychological Hacks Elite Performers Use to Stay Calm Under Pressure",
      date: "April 5, 2025",
      author: "Rina Patel",
      img: psyche,
      alt: "Athlete closing eyes before a race",
      description:
        "Elite performers live in environments where heart rates spike, crowds roar, expectations tighten the chest, and errors carry consequences. Yet their defining skill isn’t a genetic gift—it’s the ability to regulate stress so effectively that pressure becomes a tailwind rather than an anchor. Across sports psychology, performing arts research, and high-stakes science, several mental techniques show up again and again. What follows is a breakdown of six evidence-backed tools and real people who use them.",
    },
    {
      id: "forgotten-inventions",
      category: "Time Capsule",
      title: "Inventions Forgotten by Time That Were Ahead of Their Era",
      date: "May 14, 2025",
      author: "Ada Mensah",
      img: typewriter,
      alt: "Vintage mechanical invention",
      description:
        "History treats innovation like a spotlight: a few names glow bright, while the rest dissolve into the dim backstage. Yet scattered across that backstage are inventions so forward-thinking they feel like they slipped through a crack in time — ideas born decades too early, misunderstood by their century, only to reappear later in more successful forms. These are the prototypes of the future that the world wasn’t ready to adopt. This article dusts off five such inventions. They weren’t failures of imagination; they were failures of timing, infrastructure, market readiness, or sheer luck. Their stories show how an idea can be brilliant and still fall flat, and how innovation is often less about genius and more about catching the wave exactly when it rises.",
    },
  ],
  "Human Currents": [
    {
      id: "performance-hacks",
      category: "Human Currents",
      title:
        "Psychological Hacks Elite Performers Use to Stay Calm Under Pressure",
      date: "April 5, 2025",
      author: "Rina Patel",
      img: psyche,
      alt: "Athlete closing eyes before a race",
      description:
        "Elite performers live in environments where heart rates spike, crowds roar, expectations tighten the chest, and errors carry consequences. Yet their defining skill isn’t a genetic gift—it’s the ability to regulate stress so effectively that pressure becomes a tailwind rather than an anchor. Across sports psychology, performing arts research, and high-stakes science, several mental techniques show up again and again. What follows is a breakdown of six evidence-backed tools and real people who use them.",
    },
    {
      id: "human-001",
      category: "Human Currents",
      title: "Five Subcultures That Redefined Fashion in the 21st Century",
      date: "February 3, 2025",
      author: "Lena Duarte",
      img: "",
      alt: "Street fashion crowd in Tokyo",
      description:
        "Exploring how underground movements—from Harajuku street style to Afrofuturism—converged with mainstream fashion, changing runways, retail and identity in subtle and seismic ways. This piece traces designers, communities, and moments that turned fringe looks into global statements, and shows how cultural exchange reshaped aesthetics across continents...",
    },
    {
      id: "human-002",
      category: "Human Currents",
      title:
        "The Quiet Rise of Micro-Communities: How Local Networks Are Replacing Mass Media",
      date: "March 19, 2025",
      author: "Marcus Ibekwe",
      img: "",
      alt: "Community members sharing around a table",
      description:
        "From neighborhood newsletters to niche online forums, small, tightly knit groups are regaining cultural influence once held by mass outlets. This deep dive looks at case studies where micro-communities shaped policy, launched creators, and rebuilt trust in information flows...",
    },
    {
      id: "human-004",
      category: "Human Currents",
      title:
        "The Evolution of Work-Life Balance: From 1950s Office to Remote Nomad",
      date: "May 2, 2025",
      author: "Omar K. Benson",
      img: "",
      alt: "Vintage office and modern remote workspace split image",
      description:
        "Work has shifted from fixed hours and brick offices to distributed schedules and digital nomadism, but the cultural negotiations continue. This essay traces policies, technologies, and personal practices that reshaped how people think about time, productivity and family life across generations...",
    },
    {
      id: "human-005",
      category: "Human Currents",
      title:
        "Seven Rituals of Connection From Across the Globe That Survive Modernity",
      date: "June 25, 2025",
      author: "Nadia Fernández",
      img: "",
      alt: "People participating in a traditional ritual",
      description:
        "Rituals anchor communities with rhythms, shared language and symbolic acts — and many ancient practices still thrive in contemporary contexts. This piece visits seven living traditions to reveal how rituals adapt and why they remain essential to human belonging...",
    },
    {
      id: "human-006",
      category: "Human Currents",
      title: "How Digital Intimacy Is Changing the Way We Date and Relate",
      date: "July 5, 2025",
      author: "Kai Mwangi",
      img: "",
      alt: "Two phones with chat bubbles overlapping",
      description:
        "Dating apps, video calls, and social feeds have remapped the geography of intimacy, creating novel opportunities and novel anxieties. Drawing on studies and first-person accounts, this article tracks the rituals, etiquette and psychological consequences of love mediated by screens...",
    },
    {
      id: "human-007",
      category: "Human Currents",
      title:
        "Five Times the 'Self-Help' Movement Tangibly Shifted Society’s Mindset",
      date: "August 29, 2025",
      author: "Elise Moretti",
      img: "",
      alt: "Books and journals on a table",
      description:
        "From productivity mantras to therapeutic trends, the self-help industry has periodically reshaped values, labor practices, and public health approaches. This history tracks five moments where self-improvement narratives migrated into policy, workplace design, and cultural norms...",
    },
    {
      id: "human-008",
      category: "Human Currents",
      title:
        "Cultural Appropriation vs. Cultural Exchange: A Deep Dive Through Case Studies",
      date: "September 12, 2025",
      author: "Sanjay Rao",
      img: "",
      alt: "Collage of cultural artifacts",
      description:
        "The line between homage and harm often depends on context, power, and intent. Through concrete case studies in music, fashion, and cuisine, this article clarifies the ethical questions and offers frameworks for creators and consumers navigating cultural borrowing...",
    },
    {
      id: "human-009",
      category: "Human Currents",
      title: "The Hidden Lives of Gig Workers: Stories from the New Economy",
      date: "October 17, 2025",
      author: "Mariela Santos",
      img: "",
      alt: "Delivery rider taking a break",
      description:
        "Gig work reshaped incomes, schedules, and expectations about stability — but behind the statistics are human stories of resilience, risk and reinvention. This longform narrative follows five workers across regions to reveal the real tradeoffs and survival strategies of platform labor...",
    },
    {
      id: "human-010",
      category: "Human Currents",
      title:
        "How Loneliness Became a Global Epidemic — And What Communities Are Doing About It",
      date: "November 23, 2025",
      author: "Theo Ramsey",
      img: "",
      alt: "People in a supportive circle",
      description:
        "Loneliness has medical, social and economic consequences, but solutions are emerging from unlikely places — libraries, co-housing and peer networks. This investigation surveys interventions that actually reduce isolation and how local design can rebuild meaningful connection...",
    },
  ],
  "The Living Planet": [
    {
      id: "landfill-to-loop",
      category: "The Living Planet",
      title: "From Landfill to Loop: Cities That Turned Waste into Power",
      date: "March 19, 2025",
      author: "Daniel Opoku",
      img: recyclingPlant,
      alt: "Waste-to-energy facility",
      description:
        "The modern city faces two ancient problems: waste and want. What to do with mountains of trash — and how to feed the endless appetite for energy. Across the globe, some cities are discovering that the answer to both problems can come from the same source.",
    },
    {
      id: "planet-001",
      category: "The Living Planet",
      title: "Seven Ecosystems That Should Have Collapsed — But Didn’t",
      date: "September 12, 2025",
      author: "Amara N'diaye",
      img: "/images/planet-001.jpg",
      alt: "Lush resilient ecosystem landscape",
      description:
        "Despite extreme pressures, some ecosystems show surprising resilience, from mangroves to alpine meadows. This piece examines seven such systems, the ecological mechanisms that stabilized them, and what resilience teaches us about conservation in a changing climate...",
    },
    {
      id: "planet-002",
      category: "The Living Planet",
      title:
        "The Rise and Fall of Coral Reefs: What They Tell Us About Climate Resilience",
      date: "February 3, 2025",
      author: "Hiroko Tanaka",
      img: "/images/planet-002.jpg",
      alt: "Coral reef underwater",
      description:
        "Coral reefs are both fragile and adaptive, offering an early warning system for ocean health. This longform explores bleaching events, restoration experiments, and community efforts that aim to protect reefs and the coastal economies that depend on them...",
    },
    {
      id: "planet-003",
      category: "The Living Planet",
      title: "Five Urban Wildlife Comebacks That Surprise Ecologists",
      date: "June 25, 2025",
      author: "Lucas Ferreira",
      img: "/images/planet-003.jpg",
      alt: "City skyline with wildlife",
      description:
        "From peregrine falcons nesting on skyscrapers to coyotes in metropolitan parks, wildlife has reasserted itself in cities worldwide. This report chronicles five surprising comebacks and the urban policies and habitat designs that enabled them...",
    },
    {
      id: "planet-004",
      category: "The Living Planet",
      title:
        "How Indigenous Land Management Practices Are Reshaping Conservation",
      date: "August 29, 2025",
      author: "Aroha Te Rangi",
      img: "/images/planet-004.jpg",
      alt: "Indigenous people tending land",
      description:
        "Indigenous stewardship often holds long-tested ecological knowledge that modern conservation is rediscovering and integrating. Through field studies and interviews, this article shows how traditional fire regimes, rotational harvesting, and sacred site protection deliver measurable biodiversity benefits...",
    },
    {
      id: "planet-005",
      category: "The Living Planet",
      title: "The Underground Networks of Mycorrhizal Fungi: Nature’s Internet",
      date: "October 17, 2025",
      author: "Felix Nyarko",
      img: "/images/planet-005.jpg",
      alt: "Fungal networks in soil closeup",
      description:
        "Mycorrhizal fungi form vast subterranean networks that shuttle nutrients and signals between plants, reshaping our understanding of forest communities. This piece synthesizes ecology research and explores implications for reforestation and carbon sequestration strategies...",
    },
    {
      id: "planet-006",
      category: "The Living Planet",
      title: "Six Invasive Species That Became Unexpected Benefactors",
      date: "May 2, 2025",
      author: "Maya Alvarez",
      img: "/images/planet-006.jpg",
      alt: "Invasive species in a landscape",
      description:
        "Not all introductions are purely destructive — in some contexts invasive species have altered ecosystems in surprising ways that benefited other species or human uses. This nuanced analysis traces six cases where management and adaptation reframed an invasive narrative...",
    },
    {
      id: "planet-008",
      category: "The Living Planet",
      title:
        "The Future of Water: Ancient Aqueducts, Modern Desalination, and Scarcity",
      date: "November 24, 2025",
      author: "Evelyn Park",
      img: "/images/planet-008.jpg",
      alt: "A modern desalination plant",
      description:
        "Water scarcity is a technical problem wrapped in social and political complexity. By tracing infrastructure from Roman aqueducts to present desalination and watershed management, this piece highlights solutions that are technically possible and socially equitable...",
    },
    {
      id: "planet-009",
      category: "The Living Planet",
      title: "What Antarctica’s Melting Ice Really Means for Coastal Cities",
      date: "April 24, 2025",
      author: "Thomas Berg",
      img: "/images/planet-009.jpg",
      alt: "Antarctic ice shelf calving",
      description:
        "Melting Antarctic ice is a global issue with site-specific consequences for coastal planning, insurance markets and migration. This analytical article explains the science of ice loss, models of sea-level rise, and practical adaptation measures for risk-exposed communities...",
    },
    {
      id: "planet-010",
      category: "The Living Planet",
      title: "The Unexpected Role of Microplastics in Biological Systems",
      date: "July 5, 2025",
      author: "Zara Ivanov",
      img: "/images/planet-010.jpg",
      alt: "Microplastics on a beach",
      description:
        "Microplastics are pervasive, but their ecological and physiological impacts are complex and only partially understood. This investigation compiles recent research on how tiny particles move through food webs, alter microbial communities, and affect human health risks...",
    },
  ],

  "Money & Madness": [
    {
      id: "corporate-failures-to-better-governance",
      category: "Money & Madness",
      title: "The Corporate Failures That Led to Better Governance Models",
      date: "July 26, 2025",
      author: "Yasmin Khalid",
      img: boardroom,
      alt: "handcuff on a newspaper",
      description:
        "Corporate collapse is rarely sudden—it's usually the slow unraveling of ambition, secrecy, and flawed incentives. This article revisits seven infamous failures whose shockwaves reshaped modern oversight, from manipulated accounts to reckless cultures that prized growth over truth. Through financial autopsies and governance lessons, it explores how disaster became the catalyst for stronger rules, sharper scrutiny, and a deeper understanding of what responsible leadership truly demands...",
    },
    {
      id: "finance-001",
      category: "Money & Madness",
      title: "Five Financial Crises That Were Avoided at the Last Minute",
      date: "January 21, 2025",
      author: "Claire Dubois",
      img: "/images/finance-001.jpg",
      alt: "Financial market closeup",
      description:
        "From central bank interventions to decisive regulatory acts, several near-disasters were defused before markets collapsed entirely. This piece reconstructs five tense moments, the actors who steered outcomes, and the structural lessons learned about fragility in finance...",
    },
    {
      id: "finance-002",
      category: "Money & Madness",
      title:
        "The Free Economy: How Open-Source Is Upending Traditional Business Models",
      date: "November 22, 2025",
      author: "Arjun Mehta",
      img: "/images/finance-002.jpg",
      alt: "Open source collaboration on screen",
      description:
        "Open-source software and hardware redefined how goods are created and shared, creating new pathways for revenue beyond license fees. This article examines companies and communities harnessing openness to scale, compete and reimagine intellectual property norms...",
    },
    {
      id: "finance-003",
      category: "Money & Madness",
      title:
        "Six Cryptocurrencies You've Never Heard Of That Carved Their Own Niche",
      date: "March 1, 2025",
      author: "Martha K. Onyango",
      img: "/images/finance-003.jpg",
      alt: "Crypto coins on a table",
      description:
        "Beyond Bitcoin and Ethereum, niche blockchains tackled supply chain provenance, microtransactions, and decentralized identity. This exploration profiles six lesser-known projects, what problems they pursued, and whether their approaches offer long-term value...",
    },
    {
      id: "finance-004",
      category: "Money & Madness",
      title: "The Bizarre World of Carbon Credits: Betting on Cleaner Air",
      date: "April 28, 2025",
      author: "Ibrahim Saleh",
      img: "/images/finance-004.jpg",
      alt: "Industrial smokestacks and wind turbines",
      description:
        "Carbon markets promise cost-effective emissions reductions, but their design has produced paradoxes and controversies. This investigative piece explains how credits are created, traded, and sometimes gamed, and profiles reforms that could make the system more credible...",
    },
    {
      id: "finance-005",
      category: "Money & Madness",
      title:
        "How Subsistence Economies Are Being Reinvented in the Digital Age",
      date: "September 5, 2025",
      author: "Nikhil Rao",
      img: "/images/finance-005.jpg",
      alt: "Local market in rural area",
      description:
        "Digital tools are reshaping informal and subsistence economies—improving access to markets, credit and resilience while introducing new risks. This reporting looks at grassroots fintech, cooperatives, and local adaptation strategies that are closing information gaps...",
    },
    {
      id: "finance-007",
      category: "Money & Madness",
      title: "Five Times Art Became Safer Than Stocks",
      date: "October 10, 2025",
      author: "Diego Morales",
      img: "/images/finance-007.jpg",
      alt: "Art gallery interior",
      description:
        "When financial markets wobble, collectors sometimes turn to art for preservation and profit. This feature analyzes moments when art markets outperformed equities, why that happened, and what risks and myths surround art as an investment class...",
    },
    {
      id: "finance-008",
      category: "Money & Madness",
      title:
        "The Gig Economy’s Hidden Math: Why the Numbers Don’t Add Up for Many",
      date: "June 7, 2025",
      author: "Priya Nair",
      img: "/images/finance-008.jpg",
      alt: "Worker using a gig economy app",
      description:
        "Piece rates and algorithmic tasking obscure the real costs and earnings of platform work. Using data and interviews, this analysis exposes why headline earnings often mask precariousness and which policy fixes could rebalance power and pay...",
    },
    {
      id: "finance-009",
      category: "Money & Madness",
      title: "Emerging Markets That Are Defying Global Recession Trends",
      date: "August 21, 2025",
      author: "Kwame Boateng",
      img: "/images/finance-009.jpg",
      alt: "Bustling marketplace in emerging city",
      description:
        "While global growth slowed, a handful of countries sustained momentum through structural reforms, exports or unique demographic advantages. This survey identifies resilient markets, the policies that helped them, and risks that could change their trajectories...",
    },
    {
      id: "finance-010",
      category: "Money & Madness",
      title: "The Rise of Social Impact Investing: Profit With Purpose?",
      date: "February 11, 2025",
      author: "Laura Chen",
      img: "/images/finance-010.jpg",
      alt: "People planting a tree with investors watching",
      description:
        "Impact investing blends financial returns with measurable social outcomes, but measuring impact is hard and contested. This piece examines frameworks, case studies, and the tensions between scale and accountability in investments that claim to do good...",
    },
  ],

  "Arena of Fame": [
    {
      id: "the-will-to-win",
      category: "Arena of Fame",
      title: "The Will to Win: Sports Comebacks That Redefined Grit",
      date: "February 20, 2025",
      author: "Hannah Clarke",
      img: sports,
      alt: "Athlete celebrating a comeback win",
      description:
        "Comebacks endure because they reveal something elemental about competition: talent matters, but resolve is its own kind of physics. These five stories capture the moment when athletes and teams refused to accept predictable endings.",
    },
    {
      id: "arena-002",
      category: "Arena of Fame",
      title: "Six Films That Were Box-Office Flops — Then Became Cult Classics",
      date: "May 18, 2025",
      author: "Mateo Rossi",
      img: "/images/stage-002.jpg",
      alt: "Film poster collage",
      description:
        "Some films fail commercially but thrive culturally, building passionate followings and affecting art for decades. This article traces six such journeys from initial flop to cult status and asks what this reveals about taste, distribution and fandom...",
    },
    {
      id: "arena-003",
      category: "Arena of Fame",
      title:
        "The Rise of Esports: How Virtual Arenas Are Challenging Traditional Stadiums",
      date: "July 9, 2025",
      author: "Zoe Park",
      img: "/images/stage-003.jpg",
      alt: "Esports arena with LED screens",
      description:
        "Esports transformed niche gaming communities into professional leagues, global audiences and massive sponsorships. This exploration charts the business models, fan practices, and infrastructural demands that make virtual competition a stadium-scale spectacle...",
    },
    {
      id: "arena-004",
      category: "Arena of Fame",
      title: "Seven Artists Who Reinvented Themselves — And Their Industries",
      date: "November 2, 2025",
      author: "Rashid Alawi",
      img: "/images/stage-004.jpg",
      alt: "Artist mid-performance",
      description:
        "Creative reinvention can reshape careers and entire mediums. Through profiles of seven artists who radically changed direction, this feature uncovers the risks, strategies and cultural conditions that enable successful transformation in the public eye...",
    },
    {
      id: "arena-005",
      category: "Arena of Fame",
      title:
        "The Economics of Mega-Events: Olympics, World Cups & Legacy Questions",
      date: "January 7, 2025",
      author: "Beatrice Cole",
      img: "/images/stage-005.jpg",
      alt: "Stadium lit up at night",
      description:
        "Hosting mega-events promises jobs and prestige but often leaves mixed legacies and large debts. This analysis weighs costs, urban planning outcomes, and the lived experiences of residents in cities that hosted global spectacles...",
    },
    {
      id: "arena-006",
      category: "Arena of Fame",
      title:
        "When Sports and Politics Collide: Landmark Moments in Arena History",
      date: "June 15, 2025",
      author: "Soren Lind",
      img: "/images/stage-006.jpg",
      alt: "Athlete protest during an event",
      description:
        "From boycotts to symbolic gestures, arenas have long been stages for political expression. This historical overview examines pivotal moments when sport intersected with politics and the lasting cultural repercussions of those clashes...",
    },
    {
      id: "arena-007",
      category: "Arena of Fame",
      title: "Behind the Curtain: How Stage Design Shapes Audience Emotion",
      date: "August 11, 2025",
      author: "Ivy Nakamura",
      img: "/images/stage-007.jpg",
      alt: "Intricate stage set design",
      description:
        "Set, light and sound design choreograph audience feeling as much as script or score. This piece interviews designers and directors about the craft of spatial storytelling and how physical environments guide collective experience during live shows...",
    },
    {
      id: "arena-008",
      category: "Arena of Fame",
      title:
        "From Stadium to Screen: The Evolution of Live Performance Broadcasts",
      date: "April 1, 2025",
      author: "Diego Santos",
      img: "/images/stage-008.jpg",
      alt: "Cameras broadcasting a live event",
      description:
        "Broadcasting technologies transformed how audiences consume live performance, expanding reach but changing intimacy. This article traces radio, television and streaming innovations and how the mediation of presence affects artistic choices and fan rituals...",
    },
    {
      id: "arena-009",
      category: "Arena of Fame",
      title: "Six Underdog Athletes Who Became Global Icons",
      date: "March 28, 2025",
      author: "Fatima El-Amin",
      img: "/images/stage-009.jpg",
      alt: "Underdog athlete celebrating",
      description:
        "Stories of underdogs who rose to global acclaim illuminate sport’s narrative power and the social forces that elevate certain heroes. This feature profiles six athletes whose unlikely ascents reshaped their sports and inspired broader cultural conversations...",
    },
    {
      id: "arena-010",
      category: "Arena of Fame",
      title: "When Fandom Becomes Identity: The Sociology of Fan Cultures",
      date: "October 1, 2025",
      author: "Noah Whitaker",
      img: "/images/stage-010.jpg",
      alt: "Crowd of fans at a concert",
      description:
        "Fan cultures do more than consume; they create communities, rituals and identity markers. This sociological account explores how fans organize, build subcultures, and influence creative industries through participation, curation and activism...",
    },
  ],

  "Genius & Folly": [
    {
      id: "failures-to-breakthroughs",
      category: "Genius & Folly",
      title: "Scientific Failures That Sparked Big Discoveries",
      date: "October 27, 2025",
      author: "Olu Jacobs",
      img: lab,
      alt: "Laboratory experiment scene",
      description:
        "Failure is often a hidden ingredient of discovery; some experiments that 'failed' paved the way for paradigm shifts. Through archival research and interviews, this article follows six cases where apparent setbacks revealed new routes to understanding...",
    },
    {
      id: "science-001",
      category: "Genius & Folly",
      title: "The Most Unlikely Tech Inventions That Changed the World",
      date: "August 2, 2025",
      author: "Rhea Kapoor",
      img: "/images/science-001.jpg",
      alt: "Collage of surprising inventions",
      description:
        "Some inventions began as curiosities or failed projects, but later became indispensable. This exploration highlights unexpected breakthroughs—like microwave ovens, Velcro, and penicillin analogies in tech—tracing the accidents, contexts and adopters that made them transformative...",
    },
    {
      id: "science-003",
      category: "Genius & Folly",
      title: "How Amateur Inventors Are Disrupting Big Tech",
      date: "April 19, 2025",
      author: "Marta Kovács",
      img: "/images/science-003.jpg",
      alt: "Inventor in a garage workshop",
      description:
        "Garage inventors and small teams have repeatedly sparked innovation by pursuing niche problems with unconventional methods. This piece profiles inventors who built impactful tools outside institutional R&D and asks what established labs can learn from grassroots ingenuity...",
    },
    {
      id: "science-004",
      category: "Genius & Folly",
      title: "The Ethics of AI: Six Dilemmas We Still Can’t Solve",
      date: "May 3, 2025",
      author: "Ethan Liu",
      img: "/images/science-004.jpg",
      alt: "Abstract representation of AI ethics",
      description:
        "AI raises ethical questions about bias, agency, and responsibility that resist easy answers. This longform lays out six open dilemmas, from explainability to labor displacement, and examines existing governance proposals and their practical limitations...",
    },
    {
      id: "science-005",
      category: "Genius & Folly",
      title: "Space Junk to Space Mining: The Next Frontier of Tech",
      date: "July 14, 2025",
      author: "Greta Sørensen",
      img: "/images/science-005.jpg",
      alt: "Satellites and orbital debris",
      description:
        "As orbital congestion grows, entrepreneurs and governments are exploring cleanup tech and extraction from asteroids. This article surveys technological possibilities, legal questions, and the environmental calculus of bringing industry into near-Earth space...",
    },
    {
      id: "science-006",
      category: "Genius & Folly",
      title: "Six Bio-hacks That Went Too Far — and What We Learned",
      date: "March 23, 2025",
      author: "Karim Hassan",
      img: "/images/science-006.jpg",
      alt: "Lab equipment and biohacking tools",
      description:
        "Biohacking sits at the intersection of curiosity and risk, and some experiments have provoked ethical alarms. This investigative piece documents cases where DIY biology crossed lines, the consequences that followed, and how communities responded to normalize safer practices...",
    },
    {
      id: "science-007",
      category: "Genius & Folly",
      title:
        "The Hidden Tech in Nature: Biomimicry From Shark Skin to Gecko Feet",
      date: "February 27, 2025",
      author: "Lin Zhou",
      img: "/images/science-007.jpg",
      alt: "Gecko climbing glass closeup",
      description:
        "Nature evolved clever solutions over millennia and engineers increasingly borrow from biological designs. This article traces emblematic examples of biomimicry—what worked, what failed, and how lessons from living systems inform sustainable innovation...",
    },
    {
      id: "science-008",
      category: "Genius & Folly",
      title: "When the Internet Goes Dark: Tech Failures That Paralyzed Cities",
      date: "January 10, 2025",
      author: "Beom-Jun Park",
      img: "/images/science-008.jpg",
      alt: "City at night with network outage overlay",
      description:
        "Network outages can cascade into public-safety and economic threats. This piece reconstructs incidents where digital infrastructure failed, the systemic vulnerabilities they exposed, and the design changes aimed at building more resilient urban systems...",
    },
    {
      id: "science-009",
      category: "Genius & Folly",
      title: "Quantum Computing: Six Milestones on the Road Ahead",
      date: "June 2, 2025",
      author: "Sofia Gutiérrez",
      img: "/images/science-009.jpg",
      alt: "Quantum chip closeup",
      description:
        "Quantum computing is advancing through incremental technical breakthroughs and conceptual milestones. This explanatory article outlines six markers—both practical and theoretical—that researchers interpret as meaningful progress toward useful quantum advantage...",
    },
    {
      id: "science-010",
      category: "Genius & Folly",
      title:
        "Why Some Innovations Succeed and Others Vanish: A Sociotechnical Study",
      date: "November 18, 2025",
      author: "Alejandro Ruiz",
      img: "/images/science-010.jpg",
      alt: "Old technology in a display case",
      description:
        "An invention’s fate depends on networks, timing, regulation and narratives as much as engineering. This analytical study examines historical cases to map the social and technical conditions that turn inventions into enduring tools or forgotten curiosities...",
    },
  ],

  "Time Capsule": [
    {
      id: "forgotten-inventions",
      category: "Time Capsule",
      title: "Inventions Forgotten by Time That Were Ahead of Their Era",
      date: "May 14, 2025",
      author: "Ada Mensah",
      img: typewriter,
      alt: "Vintage mechanical invention",
      description:
        "History treats innovation like a spotlight: a few names glow bright, while the rest dissolve into the dim backstage. Yet scattered across that backstage are inventions so forward-thinking they feel like they slipped through a crack in time — ideas born decades too early, misunderstood by their century, only to reappear later in more successful forms. These are the prototypes of the future that the world wasn’t ready to adopt. This article dusts off five such inventions. They weren’t failures of imagination; they were failures of timing, infrastructure, market readiness, or sheer luck. Their stories show how an idea can be brilliant and still fall flat, and how innovation is often less about genius and more about catching the wave exactly when it rises.",
    },
    {
      id: "architectural-ruins",
      category: "Time Capsule",
      title: "Architectural Marvels That Are Now Ruins — But Still Awe",
      date: "March 14, 2025",
      author: "Elena Rodriguez",
      img: ruins,
      alt: "Ruined architectural marvel",
      description:
        "Ruins invite the imagination in ways polished monuments never can. They are the bones of past civilizations, exposed to wind, rain, and time, yet still powerful enough to shift how we think about beauty, ambition, and impermanence.",
    },
    {
      id: "time-002",
      category: "Time Capsule",
      title:
        "The Lost Cities Rediscovered: How Archaeology Is Rewriting the Past",
      date: "January 14, 2025",
      author: "Pablo Mendes",
      img: "/images/time-002.jpg",
      alt: "Ruins in a desert landscape",
      description:
        "New digs and remote sensing are rewriting timelines and trade networks once considered settled. This report profiles recent discoveries that changed historical narratives and the methods archaeologists used to unearth hidden chapters of human history...",
    },
    {
      id: "time-003",
      category: "Time Capsule",
      title: "Six Cultural Movements That Vanished But Left a Mark",
      date: "September 29, 2025",
      author: "Rashmi Kapoor",
      img: "/images/time-003.jpg",
      alt: "Vintage poster collage",
      description:
        "Some cultural movements flame out quickly yet seed ideas that reappear later in altered forms. This piece charts six fleeting movements and traces their afterlives in music, design, politics and street practice, uncovering hidden continuities across time...",
    },
    {
      id: "time-004",
      category: "Time Capsule",
      title: "When Empires Collapsed: Lessons From History’s Great Falls",
      date: "February 18, 2025",
      author: "Ibrahim Koroma",
      img: "/images/time-004.jpg",
      alt: "Ancient ruins and fallen columns",
      description:
        "Imperial collapse follows varied patterns, but common dynamics—ecology, economy, leadership—recur. This comparative essay draws lessons from multiple collapses to consider resilience, adaptation and the warning signs that institutions might be reaching breaking points...",
    },
    {
      id: "time-005",
      category: "Time Capsule",
      title: "The Forgotten Scientists: Pioneers Who Didn’t Get the Credit",
      date: "April 10, 2025",
      author: "Laila Hassan",
      img: "/images/time-005.jpg",
      alt: "Portraits of historical scientists",
      description:
        "Scientific acclaim often concentrates on visible figures while others remain in the margins. This feature recovers forgotten contributors — women, collaborators and non-Western pioneers — whose work shaped discoveries but was obscured by social dynamics...",
    },
    {
      id: "time-006",
      category: "Time Capsule",
      title: "Old Media, New Lessons: How Newspapers Shaped the 20th Century",
      date: "November 29, 2025",
      author: "Peter Novak",
      img: "/images/time-006.jpg",
      alt: "Archive of newspapers",
      description:
        "Newspapers built narratives, norms and civic rituals central to modern life. This historical analysis shows how reporting styles, business models and editorial choices influenced politics, public health and culture, and what contemporary media can learn from that history...",
    },
    {
      id: "time-008",
      category: "Time Capsule",
      title: "What 19th Century Technology Can Teach Us About Sustainability",
      date: "October 6, 2025",
      author: "Gustav Holm",
      img: "/images/time-008.jpg",
      alt: "19th century industrial machinery",
      description:
        "Victorian innovations mixed durability and material intensity in ways that both inspired and warned future generations. This investigatory piece extracts lessons from historic engineering and manufacturing about longevity, repairability and resource use for modern design...",
    },
    {
      id: "time-009",
      category: "Time Capsule",
      title:
        "The Artifacts of Everyday Life From a Century Ago — And What They Tell Us",
      date: "August 7, 2025",
      author: "Naomi Adler",
      img: "/images/time-009.jpg",
      alt: "Vintage household objects",
      description:
        "Household objects reveal daily priorities, gender roles and economic conditions that larger histories can miss. This curated collection examines everyday artifacts—tools, toys, cookware—and reads them as windows into changing social routines and values...",
    },
    {
      id: "time-010",
      category: "Time Capsule",
      title:
        "When Food Was Medicine: Historic Diets That Influenced Civilization",
      date: "July 30, 2025",
      author: "Owen Gallagher",
      img: "/images/time-010.jpg",
      alt: "Historical food market scene",
      description:
        "Across civilizations, food served ritual, medical and political roles. This cross-cultural exploration traces diets and food practices used to treat ailments, sustain armies and express identity, revealing how culinary choices shaped historical outcomes...",
    },
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
