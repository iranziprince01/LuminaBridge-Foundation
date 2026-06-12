import type { StaticImageData } from "next/image";
import estherImage from "../../public/Esther.jpeg";
import type { IconName } from "@/lib/icons";

export type { Program } from "@/lib/programs-content";
export {
  programs,
  programsSection,
  getProgramById,
} from "@/lib/programs-content";

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string | StaticImageData;
  imagePosition?: string;
  imageClassName?: string;
}

export interface Event {
  id: string;
  title: string;
  year: number;
  date: string;
  location: string;
  description: string;
  expectedImpact: string;
  stats: { label: string; value: string }[];
  image: string;
  tagline: string;
  theme?: string;
  paragraphs: string[];
  impactItems: string[];
  categories?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ImpactContentCard {
  id: string;
  image: string;
  alt: string;
  text: string;
}

export interface PriorityPopulation {
  id: string;
  number: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface ValueItem {
  title: string;
  description: string;
  icon: IconName;
}

interface GetInvolvedOption {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: IconName;
}

export const navigation = [
  { name: "Home", href: "/#top" },
  { name: "Programs", href: "/programs" },
  { name: "Impact", href: "/impact" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Get Involved", href: "/get-involved" },
];

export const heroContent = {
  headline: {
    primary: "Building Bridges.",
    secondary: "Transforming Communities.",
  },
  subheadline:
    "Empowering youth, strengthening communities, and creating opportunities through arts, culture, leadership, education, and community engagement across Alberta.",
  primaryCta: { label: "Partner With Us", href: "/get-involved" },
  secondaryCta: { label: "Our Programs", href: "/programs" },
  image:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",
};

export const whoWeAre = {
  title: "Who We Are",
  paragraphs: [
    "Lumina Bridge Foundation is an officially registered nonprofit organization based in Edmonton, Alberta, serving communities across Alberta.",
    "The foundation was established through community-led initiatives that began in September 2024, bringing together artists, youth leaders, educators, and community advocates who shared a vision of using arts, culture, education, and community engagement to create positive social impact. In 2026, Lumina Bridge Foundation became a legally registered nonprofit organization, strengthening its capacity to serve communities and expand its programs.",
    "Today, Lumina Bridge Foundation operates from its Edmonton office while delivering programs, workshops, festivals, mentorship opportunities, and community initiatives across Alberta.",
  ],
};

export const missionVision = {
  mission: {
    title: "Our Mission",
    content:
      "To empower youth, strengthen communities, promote mental wellness, and create opportunities through arts, culture, leadership development, education, and community engagement.",
  },
  vision: {
    title: "Our Vision",
    content:
      "A thriving and inclusive society where every individual has the opportunity to discover their potential, express their talents, and contribute positively to their community.",
  },
};

export const beliefQuote =
  "We believe that talent exists in every community and that every young person deserves access to opportunities, mentorship, and support to reach their full potential.";

export const nameMeaning = {
  title: "The name Lumina Bridge reflects our purpose:",
  lumina:
    "Lumina represents light, hope, creativity, and potential.",
  bridge:
    "Bridge represents connection, bringing together people, opportunities, cultures, and communities.",
  closing:
    "As we continue to grow, our mission remains the same: to build bridges of opportunity, inspire positive change, and help individuals and communities reach their fullest potential.",
};

export const coreValues = [
  {
    title: "Hope",
    description: "Light, creativity, and potential — we believe in what every person can become.",
    icon: "Sun",
  },
  {
    title: "Opportunity",
    description: "We create pathways for youth and communities to access mentorship and growth.",
    icon: "GraduationCap",
  },
  {
    title: "Leadership",
    description: "We cultivate confident leaders who uplift others and strengthen communities.",
    icon: "Medal",
  },
  {
    title: "Community",
    description: "We build bridges between people, cultures, organizations, and opportunities.",
    icon: "UsersRound",
  },
  {
    title: "Creativity",
    description: "We celebrate arts, culture, and talent as tools for healing, expression, and growth.",
    icon: "Brush",
  },
  {
    title: "Belonging",
    description: "We foster inclusive spaces where newcomers, youth, and families feel seen and supported.",
    icon: "HeartHandshake",
  },
] satisfies ValueItem[];

export const priorityPopulationsSection = {
  title: "Priority Populations We Serve",
  intro:
    "We serve communities facing barriers to opportunity, inclusion, and well-being. Through arts, talent development, youth empowerment, and healing-centered support, we open pathways for people to reach their full potential.",
  lead: "Our organization primarily serves:",
  populations: [
    {
      id: "youth-creative",
      number: "01",
      title: "Youth Talent Development and Creative Communities",
      summary:
        "We support emerging creatives in music, performing arts, visual arts, media, and entrepreneurship with mentorship, showcases, and festivals that help talent grow into sustainable opportunity.",
      image: "/01.jpg",
      alt: "Youth and emerging creatives developing talent in the arts",
    },
    {
      id: "youth-leadership",
      number: "02",
      title: "Youth Leadership Development and Future Changemakers",
      summary:
        "We equip young people with leadership skills, career readiness, and mentorship so they can build confidence and become future changemakers in their communities.",
      image: "/02.jpg",
      alt: "Youth leadership development and mentorship",
    },
    {
      id: "healing-support",
      number: "03",
      title: "Seniors, Families, and Healing-Centered Communities",
      summary:
        "We connect seniors through intergenerational arts and storytelling, and support families with creative wellness spaces that strengthen belonging, resilience, and emotional well-being.",
      image: "/03.jpeg",
      alt: "Seniors and families in healing-centered community programs",
    },
    {
      id: "underserved",
      number: "04",
      title: "Underserved, Underrepresented, and Visible Minority Communities",
      summary:
        "We serve communities facing systemic barriers — including visible minorities and low-income populations — with programs designed for inclusion, access, and long-term empowerment.",
      image: "/04.jpg",
      alt: "Underserved and underrepresented communities",
    },
    {
      id: "newcomers",
      number: "05",
      title: "Newcomers, Immigrant, and Settlement Communities",
      summary:
        "We help newcomers and refugees build confidence, cultural connection, and successful integration through mentorship, exchange, and community-based support.",
      image: "/05.jpg",
      alt: "Newcomer and immigrant settlement community support",
    },
  ] satisfies PriorityPopulation[],
};

export const homeStats: Stat[] = [
  { value: "2024", label: "Community Movement Founded" },
  { value: "2026", label: "Officially Registered" },
  { value: "9", label: "Program Areas", suffix: "+" },
  { value: "Alberta", label: "Communities Served Across" },
  { value: "3", label: "Signature Events in 2026" },
];

export const impactTimeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Community-Led Initiatives Begin",
    description:
      "Artists, youth leaders, educators, and advocates united in September 2024 with a shared vision for positive social impact.",
  },
  {
    year: "2024",
    title: "Challenges Become Opportunities",
    description:
      "Leaders saw youth without platforms and families seeking connection, and chose to build sustainable community solutions.",
  },
  {
    year: "2024",
    title: "Changemakers Unite",
    description:
      "Passionate advocates came together to turn community challenges into lasting opportunities for growth and belonging.",
  },
  {
    year: "2024–2025",
    title: "Workshops, Outreach & Events",
    description:
      "Conversations grew into workshops, mentorship, outreach, and cultural events across Alberta communities.",
  },
  {
    year: "2025",
    title: "Growing Community Response",
    description:
      "Youth gained confidence, artists found platforms, and families built support networks that strengthened entire communities.",
  },
  {
    year: "2025",
    title: "Momentum Across Alberta",
    description:
      "Programs expanded as volunteers, partners, and participants helped turn early initiatives into province-wide impact.",
  },
  {
    year: "2026",
    title: "Official Registration",
    description:
      "Lumina Bridge Foundation became a registered nonprofit in Alberta, strengthening capacity to serve communities.",
  },
  {
    year: "Today",
    title: "Building Bridges Across Alberta",
    description:
      "We empower youth, support artists, and create opportunities through arts, culture, leadership, and engagement.",
  },
];

export const aboutStory = [
  {
    title: "Born from Community",
    content:
      "Lumina Bridge Foundation began as community-led initiatives in September 2024 — uniting artists, youth leaders, educators, and advocates who believed arts, culture, and engagement could create lasting social impact.",
  },
  {
    title: "From Conversations to Action",
    content:
      "What began as conversations and small gatherings through local churches and community networks evolved into workshops, mentorship, outreach, and cultural events — proving the power of people coming together.",
  },
  {
    title: "Registered & Growing",
    content:
      "In 2026, we became a legally registered nonprofit in Alberta. Today, from our Edmonton office, we deliver programs, festivals, and initiatives that empower individuals and strengthen communities across the province.",
  },
];

export const impactPageContent = {
  origin: {
    title: "Our Story",
    lead: "Great organizations are born when people choose to turn challenges into opportunities.",
    paragraphs: [
      "In 2024, community leaders, artists, educators, and volunteers saw a shared pattern across Alberta: young people lacked opportunities to grow, artists struggled for platforms, families sought stronger connections, and many faced barriers to reaching their potential.",
      "Rather than accepting these challenges as permanent, changemakers united around a vision for sustainable solutions—spaces where people could celebrate culture, build leadership, and support one another.",
      "What began as conversations through churches and community networks grew into workshops, mentorship, outreach, and cultural events—proving the power of creativity, education, and community engagement.",
    ],
  },
  impact: {
    title: "Our Impact",
    cards: [
      {
        id: "001",
        image: "/001.jpg",
        alt: "Lumina Bridge Foundation community empowerment and creative opportunity",
        text: "At Lumina Bridge Foundation, we believe that creativity, opportunity, and community empowerment have the power to transform lives. Based in Alberta and built with a long-term vision to expand across Canada, we are committed to creating sustainable impact that reaches communities locally, nationally, and globally.",
      },
      {
        id: "002",
        image: "/002.jpg",
        alt: "Youth development and transformative community programs",
        text: "Over the next 10 years, Lumina Bridge Foundation aims to directly impact 250,000+ individuals through transformative programs focused on youth development, arts and culture, mental wellness, leadership training, entrepreneurship, and community support initiatives.",
      },
      {
        id: "003",
        image: "/003.jpg",
        alt: "Empowering youth and emerging creative talents",
        text: "We are committed to empowering 75,000+ youth and emerging talents by creating platforms that help artists, musicians, performers, designers, digital creators, and innovators build careers and access opportunities within the creative economy. By investing in talent development, we believe creativity can become a pathway toward financial independence and long-term success.",
      },
      {
        id: "004",
        image: "/004.jpg",
        alt: "Entrepreneurship and employment readiness training",
        text: "Through entrepreneurship development, employment readiness training, and economic empowerment initiatives, we plan to contribute to the creation of 12,000+ jobs, income-generating opportunities, and sustainable career pathways, helping families move toward economic stability and poverty reduction.",
      },
      {
        id: "005",
        image: "/005.jpg",
        alt: "Mental wellness through art therapy and creative healing",
        text: "Mental wellness remains central to our mission. Through art therapy, creative healing programs, community engagement activities, and future cultural wellness spaces, we plan to support 40,000+ seniors, newcomers, refugees, minorities, and vulnerable individuals, reducing social isolation and promoting emotional well-being through creativity and connection.",
      },
      {
        id: "006",
        image: "/006.jpg",
        alt: "Community creative spaces, galleries, and cultural festivals",
        text: "Our long-term vision includes establishing major community creative spaces, including large-scale art galleries, cultural festivals, talent development centers, innovation hubs, and public wellness exhibitions that will attract and engage 100,000+ annual participants, creating stronger, healthier, and more connected communities.",
      },
      {
        id: "007",
        image: "/007.jpg",
        alt: "Supporting newcomers and underserved families",
        text: "We are also committed to supporting 50,000+ newcomers and underserved families by providing mentorship, leadership opportunities, integration support, financial literacy education, and inclusive community-based programs designed to create belonging and opportunity for all.",
      },
      {
        id: "008",
        image: "/008.jpg",
        alt: "Lumina Bridge Foundation vision for Canada by 2036",
        text: "By 2036, Lumina Bridge Foundation envisions becoming one of the leading nonprofit organizations in Canada, using arts, culture, innovation, and community-driven solutions to build stronger economies, reduce poverty, unlock human potential, and create lasting change for future generations.",
      },
    ] satisfies ImpactContentCard[],
  },
  journey: {
    title: "Our Journey",
  },
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "I moved to Edmonton feeling disconnected and uncertain about where I belonged. After attending several Lumina Bridge Foundation workshops and community events, I found more than just programs — I found a community. The leadership and personal development sessions helped me build confidence, improve my communication skills, and connect with people from different backgrounds. Today, I volunteer in community initiatives and actively participate in local events. Lumina Bridge Foundation helped me believe in myself again and reminded me that my voice matters.",
    author: "Patrimoine M.",
    role: "Edmonton, Alberta",
  },
  {
    id: "2",
    quote:
      "As a mother of three children, balancing family responsibilities while adjusting to life in Canada was challenging. Through Lumina Bridge Foundation workshops and seminars, I gained valuable knowledge about financial literacy, parenting support, community resources, and personal development. The welcoming environment allowed me to meet other women facing similar challenges and build lasting friendships. The support I received has positively impacted not only my life but also my children. Lumina Bridge Foundation created a space where I felt seen, respected, and supported.",
    author: "Soleil Nyinawinka",
    role: "Edmonton, Alberta",
  },
  {
    id: "3",
    quote:
      "Lumina Bridge Foundation is creating opportunities that many young people never had access to before. Through mentorship, workshops, and community events, youth are discovering their talents, building confidence, and developing leadership skills that will benefit them for years to come.",
    author: "Community Participant",
    role: "Program Participant",
  },
];

export const leadershipIntro = {
  title: ["Meet Our Lumina Bridge", "Foundation Visionaries"],
  subtitle: "Executive Leadership Team",
  description:
    "Our leadership team is dedicated to empowering communities, supporting youth development, and creating opportunities through arts, education, leadership, and community engagement across Alberta.",
  closingTitle: "Working Together for Community Impact",
  closing:
    "Together, our leadership team is committed to building stronger communities, empowering future leaders, and creating pathways for individuals to unlock their full potential.",
};

export const leadership: Leader[] = [
  {
    id: "aristote",
    name: "Aristote Bikino",
    role: "Founder & Chief Executive Officer (CEO)",
    bio: "Aristote Bikino is the Founder and CEO of Lumina Bridge Foundation. He provides strategic leadership and oversees the organization's vision, partnerships, fundraising, and community impact initiatives. His passion for youth empowerment and community development drives the Foundation's mission to create opportunities and inspire positive change.",
    image: "/Aristote.jpeg",
  },
  {
    id: "bienvenue",
    name: "Bienvenue Ntaganzwa",
    role: "Chief Operating Officer (COO)",
    bio: "Bienvenue Ntaganzwa oversees the Foundation's operations, program implementation, and organizational systems. He ensures projects are delivered effectively while supporting sustainable growth and operational excellence.",
    image: "/Bienvenue.jpeg",
  },
  {
    id: "fred",
    name: "Fred Shikiro",
    role: "Director of Program Development (DPD)",
    bio: "Fred Shikiro leads the development and coordination of programs and initiatives. He works with community partners and stakeholders to create impactful opportunities that support youth, families, and diverse communities.",
    image: "/Fred.jpeg",
  },
];

export const operationsTeamIntro = {
  subtitle: "Operations Team",
  description:
    "Our operations team supports the day-to-day delivery of programs, communications, finance, community outreach, and volunteer engagement — ensuring the Foundation serves communities effectively across Alberta.",
};

export const operationsTeam: Leader[] = [
  {
    id: "prince",
    name: "Prince Iranzi",
    role: "IT and Communications Officer",
    bio: "Prince manages the Foundation's digital platforms, technology systems, and communications — keeping our message clear and our programs accessible to communities across Alberta.",
    image: "/Prince.jpg",
  },
  {
    id: "christophe",
    name: "Christophe Iradukunda",
    role: "Finance and Administration Officer",
    bio: "Christophe oversees budgeting, financial reporting, and administrative processes that support accountable, well-run operations behind every program and initiative.",
    image: "/Christophe.jpeg",
    imageClassName:
      "origin-top object-top scale-[1.12] -translate-y-1 group-hover:scale-[1.16] group-hover:-translate-y-0.5",
  },
  {
    id: "francine",
    name: "Mukobwajana Francine",
    role: "Program Coordinator",
    bio: "Francine coordinates program delivery and works with partners and participants to ensure initiatives run smoothly and reach the communities we serve.",
    image: "/Francine.jpeg",
  },
  {
    id: "aline",
    name: "Aline Mutimukeye",
    role: "Community Engagement Coordinator",
    bio: "Aline builds relationships with community members and partners, strengthening outreach, participation, and connection across programs and public events.",
    image: "/Aline.jpeg",
    imageClassName:
      "origin-top object-top scale-[1.06] -translate-y-0.5 group-hover:scale-[1.1] group-hover:-translate-y-0",
  },
  {
    id: "esther",
    name: "Esther Muhawenimana",
    role: "Volunteer Coordinator",
    bio: "Esther recruits, supports, and coordinates volunteers who help power workshops, festivals, and community initiatives throughout the Foundation's work.",
    image: estherImage,
    imageClassName:
      "origin-top object-[center_15%] scale-[1.04] group-hover:scale-[1.08]",
  },
  {
    id: "grants-partnerships",
    name: "Patrone Uwase",
    role: "Grants and Partnerships Coordinator",
    bio: "Patrone supports grant development, funder relationships, and partnership coordination that help expand resources and collaborative impact for the Foundation.",
    image: "/Patrone.jpeg",
    imageClassName:
      "origin-top object-top scale-[1.12] -translate-y-1 group-hover:scale-[1.16] group-hover:-translate-y-0.5",
  },
];

export const eventPageBannerImage =
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80";

export const eventBannerImage = "/events.PNG";
export const eventFlyerImage = "/events.PNG";

export const events: Event[] = [
  {
    id: "voices-new-canada",
    title: "Voices of New Canada 2026",
    year: 2026,
    date: "August 1, 2026",
    location: "Edmonton, Alberta",
    tagline: "Youth & Community Arts Showcase",
    description:
      "Voices of New Canada is a public arts showcase celebrating youth voices, newcomer stories, cultural identity, and community belonging through music, spoken word, storytelling, theatre, dance, and cultural performances.",
    expectedImpact:
      "Inspiring connection and understanding through high-quality artistic presentations that celebrate diversity and belonging.",
    stats: [
      { label: "Expected Attendees", value: "250+" },
      { label: "Youth Performers", value: "10" },
      { label: "Professional Artists", value: "5" },
    ],
    image: eventBannerImage,
    paragraphs: [
      "Voices of New Canada is a public arts showcase celebrating youth voices, newcomer stories, cultural identity, and community belonging through music, spoken word, storytelling, theatre, dance, and cultural performances.",
      "The event brings together professional artists, emerging youth performers, families, educators, community leaders, and local residents to experience high-quality artistic presentations that inspire connection and understanding.",
    ],
    impactItems: [
      "250+ attendees",
      "10 youth performers",
      "5 professional artists and artistic groups",
      "15 volunteers",
      "Multiple community partners",
    ],
  },
  {
    id: "bridgefest",
    title: "BridgeFest 2026",
    year: 2026,
    date: "September 19, 2026",
    location: "Edmonton, Alberta",
    tagline: "Multicultural Performing Arts Festival",
    description:
      "BridgeFest 2026 is a three-day multicultural arts festival showcasing professional artists from diverse cultural backgrounds while creating opportunities for cultural exchange, audience development, and community connection.",
    expectedImpact:
      "Creating opportunities for cultural exchange, audience development, youth engagement, and community connection across Alberta.",
    stats: [
      { label: "Expected Attendees", value: "800+" },
      { label: "Professional Artists", value: "25+" },
      { label: "Community Partners", value: "Multiple" },
    ],
    image: eventBannerImage,
    paragraphs: [
      "BridgeFest 2026 is a three-day multicultural arts festival showcasing professional artists from diverse cultural backgrounds while creating opportunities for cultural exchange, audience development, and community connection.",
      "The festival will feature live music, dance, theatre, storytelling, spoken word, visual arts exhibitions, cultural showcases, artist talks, youth performances, networking activities, and community engagement opportunities.",
      "The event celebrates Indigenous, African, Caribbean, Asian, Middle Eastern, European, newcomer, and multicultural communities through professional artistic presentations.",
    ],
    impactItems: [
      "800+ attendees",
      "25+ professional artists and facilitators",
      "Youth engagement opportunities",
      "Cultural exchange and community-building activities",
      "Regional audience development",
    ],
  },
  {
    id: "youth-unlocking-potential",
    title: "Youth Unlocking Potential 2026",
    year: 2026,
    date: "Date to be announced (Coming Soon)",
    location: "Edmonton, Alberta",
    tagline: "Edmonton Youth Music, Comedy, Theatre & Arts Festival",
    theme: "Unlocking Talent. Inspiring Creativity. Building Future Leaders.",
    description:
      "Youth Unlocking Potential 2026 is a city-wide talent development festival designed to identify, mentor, develop, and showcase talented young people from newcomer, Black, immigrant, refugee, Indigenous, and underserved communities.",
    expectedImpact:
      "Long-term talent development through mentorship, awards, studio support, professional branding, and career advancement resources for Alberta's next generation of creatives.",
    stats: [
      { label: "Expected Applications", value: "300+" },
      { label: "Selected Participants", value: "50" },
      { label: "In-Person Attendees", value: "600+" },
    ],
    image: eventBannerImage,
    categories: ["Music", "Comedy", "Theatre", "Arts & Crafts"],
    paragraphs: [
      "Youth Unlocking Potential 2026 is a city-wide talent development festival designed to identify, mentor, develop, and showcase talented young people from newcomer, Black, immigrant, refugee, Indigenous, and underserved communities.",
      "The festival focuses on four artistic categories: Music, Comedy, Theatre, and Arts & Crafts.",
      "Selected participants will complete a four-week talent development program covering leadership, entrepreneurship, public speaking, branding, financial literacy, networking, and career development before showcasing their talents before industry professionals, community leaders, sponsors, educators, and the public.",
      "Participants will compete for talent development awards, mentorship opportunities, studio support, professional branding packages, travel opportunities, and career advancement resources.",
    ],
    impactItems: [
      "300+ applications",
      "50 selected participants",
      "20 finalists",
      "600+ in-person attendees",
      "2,000+ online viewers",
      "10 professional mentors",
      "20 community partners",
      "Long-term talent development opportunities",
    ],
  },
];

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id);
}

export function getEventHref(event: Pick<Event, "id">): string {
  return `/events/${event.id}`;
}

export const eventsClosing =
  "Together, these signature events reflect Lumina Bridge Foundation's commitment to empowering youth, celebrating diversity, supporting artists, strengthening communities, and creating opportunities for people across Alberta.";

export const impactOutcomes = [
  {
    title: "Youth Empowerment",
    description: "Young people discover confidence, leadership skills, and pathways to reach their full potential.",
    icon: "Compass",
  },
  {
    title: "Community Connection",
    description: "Families and individuals build meaningful relationships and stronger support networks.",
    icon: "UsersRound",
  },
  {
    title: "Artistic Recognition",
    description: "Emerging artists access platforms where their talents are celebrated and professionally developed.",
    icon: "Theater",
  },
  {
    title: "Cultural Belonging",
    description: "Newcomers and diverse communities feel welcomed, respected, and celebrated.",
    icon: "Globe2",
  },
  {
    title: "Well-Being & Healing",
    description: "Safe spaces promote mental wellness, personal growth, and community healing.",
    icon: "ShieldCheck",
  },
  {
    title: "Economic Opportunity",
    description: "Financial literacy and entrepreneurship programming builds long-term stability and confidence.",
    icon: "ChartLine",
  },
] satisfies ValueItem[];

export const futureReach = [
  { metric: "Province-wide", label: "Programs delivered across Alberta" },
  { metric: "9+", label: "Core program areas" },
  { metric: "3", label: "Signature events in 2026" },
  { metric: "Growing", label: "Community partnerships and volunteer network" },
];

export const getInvolvedOptions = [
  {
    id: "volunteer",
    title: "Volunteer With Us",
    description:
      "Passionate about making a difference? We are always looking for dedicated volunteers to support our events, youth programs, community initiatives, workshops, and festivals throughout Alberta.",
    cta: "Volunteer With Us",
    href: "/get-involved#contact",
    icon: "Handshake",
  },
  {
    id: "sponsor",
    title: "Sponsor",
    description:
      "Align your organization with meaningful community impact. Sponsorship opportunities are available for events, programs, and initiatives across Alberta.",
    cta: "Explore Sponsorship",
    href: "/get-involved#contact",
    icon: "Medal",
  },
  {
    id: "partner",
    title: "Partner With Us",
    description:
      "We welcome collaborations with community organizations, educational institutions, businesses, government agencies, artists, cultural groups, and funders who share our vision.",
    cta: "Become a Partner",
    href: "/get-involved#contact",
    icon: "Building2",
  },
  {
    id: "support",
    title: "Support Our Programs",
    description:
      "Fund specific program areas — from youth leadership to newcomer support — with targeted philanthropic investment that creates measurable community impact.",
    cta: "Support Our Mission",
    href: "/get-involved#contact",
    icon: "Gift",
  },
  {
    id: "engage",
    title: "Community Engagement",
    description:
      "Host workshops, refer participants, or co-create initiatives that serve your neighbourhood and strengthen community belonging across Alberta.",
    cta: "Engage Your Community",
    href: "/get-involved#contact",
    icon: "MessagesSquare",
  },
] satisfies GetInvolvedOption[];

export const successStories = [
  {
    title: "Finding Belonging in Edmonton",
    story:
      "After attending Lumina Bridge workshops and community events, a newcomer to Edmonton found confidence, built meaningful relationships, and now volunteers actively in local community initiatives.",
    program: "Community Engagement",
    author: "Patrimoine M.",
  },
  {
    title: "A Mother's Journey Forward",
    story:
      "Through financial literacy, parenting support, and personal development workshops, a mother of three built lasting friendships and gained the knowledge and confidence to support her family's future in Canada.",
    program: "Mental Wellness & Community Support",
    author: "Soleil Nyinawinka",
  },
  {
    title: "Youth Discovering Their Voice",
    story:
      "Through mentorship, workshops, and community events, young participants are discovering their talents, building confidence, and developing leadership skills that will benefit them for years to come.",
    program: "Youth Leadership Development",
    author: "Program Participant",
  },
];

interface DonationSupportArea {
  title: string;
  description: string;
  icon: IconName;
}

export const donationContent = {
  intro:
    "Your generosity helps Lumina Bridge Foundation empower youth, celebrate culture, support artists, and strengthen communities across Alberta. Every contribution creates pathways of opportunity for the people and programs we serve.",
  whyDonate:
    "As a registered nonprofit organization, Lumina Bridge Foundation relies on the support of donors, funders, and community partners to deliver workshops, festivals, mentorship programs, and community initiatives that create lasting impact.",
  supportAreas: [
    {
      title: "Youth Leadership & Development",
      description:
        "Support mentorship, workshops, and talent development programs that help young people build confidence and leadership skills.",
      icon: "GraduationCap",
    },
    {
      title: "Arts, Culture & Community Events",
      description:
        "Help fund festivals, showcases, and cultural programs that celebrate diversity and create platforms for emerging artists.",
      icon: "Theater",
    },
    {
      title: "Community Wellness & Support",
      description:
        "Contribute to initiatives that promote mental wellness, newcomer support, and stronger community connections across Alberta.",
      icon: "ShieldCheck",
    },
  ] satisfies DonationSupportArea[],
  inquiryNote:
    "For additional donation questions, please contact us at:",
};

export const contactContent = {
  intro:
    "We would love to hear from you. Whether you are interested in our programs, partnership opportunities, sponsorships, volunteering, community initiatives, workshops, festivals, or youth development programs, our team is ready to assist you.",
  partnership:
    "Lumina Bridge Foundation welcomes collaborations with community organizations, educational institutions, businesses, government agencies, artists, cultural groups, and funders who share our vision of building stronger and more inclusive communities.",
  volunteer:
    "Passionate about making a difference? We are always looking for dedicated volunteers to support our events, youth programs, community initiatives, workshops, and festivals throughout Alberta.",
  stayConnected:
    "Follow Lumina Bridge Foundation as we continue to empower youth, celebrate culture, support creativity, and strengthen communities across Alberta. Together, we are building bridges of opportunity, leadership, and belonging.",
};
