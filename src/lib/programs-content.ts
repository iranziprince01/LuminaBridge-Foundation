import type { IconName } from "@/lib/icons";

export interface Program {
  id: string;
  number: string;
  title: string;
  description: string;
  overview: string;
  initiativesHeading: string;
  initiatives: string[];
  closingStatement: string;
  icon: IconName;
  image: string;
}

export const programsSection = {
  title: "What We Do",
  paragraphs: [
    "At Lumina Bridge Foundation in Edmonton, Alberta, Canada, we develop community-centered programs in arts, culture, youth leadership, and community development across Alberta.",
    "Our work is rooted in the belief that when people are provided with access to opportunity, support systems, and platforms to develop their potential, communities become stronger, healthier, and more resilient.",
    "Through strategic programming, partnerships, and community engagement initiatives, we focus on the following core areas:",
  ],
};

export const programs: Program[] = [
  {
    id: "arts-culture-talent",
    number: "01",
    title: "Arts, Culture & Talent Development",
    description:
      "Platforms that identify, nurture, and elevate emerging talent across the creative economy.",
    overview:
      "We recognize arts, culture, and creativity as powerful drivers of personal development, economic opportunity, and community transformation. Our organization creates platforms that identify, nurture, and elevate emerging talent while supporting individuals pursuing opportunities within the growing creative economy.",
    initiativesHeading: "Our work in this area includes:",
    initiatives: [
      "Designing programs that identify and develop emerging creative talent across diverse disciplines",
      "Organizing talent showcases, competitions, exhibitions, and cultural events that provide visibility and growth opportunities",
      "Supporting artists and creatives working in music, visual arts, theatre, dance, fashion, film, media, and digital content creation",
      "Providing mentorship, professional development opportunities, and access to industry networks for emerging creatives",
      "Creating pathways that help talented individuals transition from informal creative practice into sustainable professional careers",
      "Promoting cultural expression while preserving and celebrating diverse cultural identities within communities",
    ],
    closingStatement:
      "We aim to transform creative potential into meaningful long-term opportunity.",
    icon: "Brush",
    image: "/003.jpg",
  },
  {
    id: "mental-wellness-healing",
    number: "02",
    title: "Mental Wellness & Community Healing",
    description:
      "Community-based wellness initiatives that use creativity and connection as tools for healing and resilience.",
    overview:
      "We recognize mental wellness as a critical foundation for healthy individuals and thriving communities. Our organization develops community-based wellness initiatives that use creativity, social connection, and inclusive engagement as tools for emotional well-being, resilience, and healing.",
    initiativesHeading: "Our initiatives focus on:",
    initiatives: [
      "Delivering arts-based wellness programs that promote emotional expression and psychological well-being",
      "Creating safe and inclusive spaces that encourage community connection and reduce social isolation",
      "Supporting individuals experiencing emotional stress, trauma, displacement, or major life transitions through community-centered healing initiatives",
      "Developing programs that use creative expression, storytelling, music, and shared experiences to strengthen emotional resilience",
      "Facilitating intergenerational engagement programs that promote social connection between youth, seniors, parents, and families",
      "Encouraging community dialogue around mental wellness, belonging, and collective healing",
    ],
    closingStatement: "We believe stronger communities begin with healthier individuals.",
    icon: "ShieldCheck",
    image: "/005.jpg",
  },
  {
    id: "youth-leadership",
    number: "03",
    title: "Youth Leadership Development",
    description:
      "Equipping young people with leadership capacity, confidence, and practical experience to shape their communities.",
    overview:
      "Young people represent the future of community transformation. We invest in developing youth leaders by equipping them with the knowledge, confidence, leadership capacity, and practical experience required to contribute meaningfully to society.",
    initiativesHeading: "Our youth development initiatives include:",
    initiatives: [
      "Leadership development training designed to strengthen confidence and decision-making capacity",
      "Mentorship opportunities connecting youth with experienced professionals and community leaders",
      "Public speaking, communication, and professional development training",
      "Civic engagement opportunities that encourage active participation in community leadership",
      "Capacity-building programs that strengthen problem-solving, innovation, and critical thinking skills",
      "Supporting youth-led initiatives that encourage entrepreneurship, advocacy, and social innovation",
    ],
    closingStatement:
      "Our goal is to prepare the next generation of responsible and empowered leaders.",
    icon: "Compass",
    image: "/002.jpg",
  },
  {
    id: "financial-literacy-entrepreneurship",
    number: "04",
    title: "Financial Literacy & Entrepreneurship Development",
    description:
      "Practical education and entrepreneurial development that strengthen financial capability and economic advancement.",
    overview:
      "Economic empowerment plays a central role in building independent and sustainable futures. We provide practical education and entrepreneurial development opportunities that help individuals strengthen financial capability and pursue economic advancement.",
    initiativesHeading: "Our work focuses on:",
    initiatives: [
      "Delivering financial literacy education focused on budgeting, saving, debt management, and financial planning",
      "Providing entrepreneurship training for individuals seeking to start or grow business ventures",
      "Supporting aspiring entrepreneurs through business development education and mentorship",
      "Offering training on modern economic opportunities, including digital entrepreneurship and creative business development",
      "Connecting participants with resources, funding opportunities, and business development support systems",
      "Encouraging self-sufficiency through economic empowerment programming",
    ],
    closingStatement:
      "We support individuals in building long-term economic resilience and financial independence.",
    icon: "Banknote",
    image: "/004.jpg",
  },
  {
    id: "cultural-celebration-inclusion",
    number: "05",
    title: "Cultural Celebration & Social Inclusion",
    description:
      "Celebrating diversity and building belonging through festivals, dialogue, and inclusive community platforms.",
    overview:
      "Inclusive communities are built when diversity is respected, celebrated, and actively integrated into community life. We create opportunities that strengthen belonging while promoting cultural understanding, inclusion, and meaningful cross-community engagement.",
    initiativesHeading: "Our work includes:",
    initiatives: [
      "Organizing multicultural festivals and cultural celebration initiatives that highlight diverse traditions and identities",
      "Creating community platforms that encourage intercultural dialogue and understanding",
      "Supporting underrepresented communities in sharing cultural heritage through arts and community programming",
      "Building initiatives that promote social inclusion and reduce barriers to participation",
      "Strengthening community cohesion by bringing together individuals from diverse social and cultural backgrounds",
      "Encouraging broader participation from communities historically underrepresented in mainstream spaces",
    ],
    closingStatement:
      "We believe diversity strengthens communities when inclusion is intentionally built.",
    icon: "Globe2",
    image: "/006.jpg",
  },
  {
    id: "community-engagement-volunteer",
    number: "06",
    title: "Community Engagement & Volunteer Development",
    description:
      "Volunteer pathways and civic engagement that mobilize communities around shared goals and collective impact.",
    overview:
      "Strong communities are built through active participation and collective responsibility. We create opportunities for individuals to contribute meaningfully to community development while strengthening civic engagement and volunteer leadership.",
    initiativesHeading: "Our initiatives include:",
    initiatives: [
      "Developing volunteer programs that encourage active community participation",
      "Creating service opportunities that allow individuals to contribute to local community initiatives",
      "Supporting community outreach programs designed to address local social challenges",
      "Building volunteer leadership pathways that strengthen responsibility and long-term engagement",
      "Encouraging collaborative partnerships between residents, organizations, institutions, and community stakeholders",
      "Promoting a culture of civic responsibility and collective impact",
    ],
    closingStatement:
      "We believe community development is strongest when communities actively participate in shaping their future.",
    icon: "Handshake",
    image: "/001.jpg",
  },
  {
    id: "language-culture-belonging-initiative",
    number: "07",
    title: "Language, Culture & Belonging Initiative",
    description:
      "BridgeConnect helps newcomers build confidence, connection, and belonging through language, arts, culture, and community engagement.",
    overview:
      "BridgeConnect is an innovative community integration program designed to help newcomers, immigrants, refugees, and culturally diverse communities build confidence, connection, and belonging in Canada by using language, arts, culture, and human-centered community engagement as pathways toward successful integration.",
    initiativesHeading: "Program pillars include:",
    initiatives: [
      "Language through real community experience and everyday communication practice",
      "Storytelling across cultures to strengthen identity and oral communication",
      "Creative expression for communication confidence through arts-based learning",
      "Bridge into Canadian community life through civic participation and volunteer engagement",
      "Bilingual inclusion and cultural accessibility across English and French communities",
      "Belonging circles that build friendships, mentorship, and long-term social connection",
    ],
    closingStatement: "We do not simply teach language. We build belonging.",
    icon: "MessagesSquare",
    image: "/002.jpg",
  },
  {
    id: "newcomer-refugee-support",
    number: "08",
    title: "Newcomer, Refugee & Underrepresented Community Support",
    description:
      "Integration, employment readiness, and belonging programs for communities facing systemic barriers.",
    overview:
      "We are committed to supporting individuals and communities facing systemic barriers to participation, opportunity, and social inclusion. Our programs focus on improving access to resources, strengthening integration, and creating pathways toward long-term stability and empowerment.",
    initiativesHeading: "Our initiatives include:",
    initiatives: [
      "Settlement support services that assist newcomers in navigating community systems and available resources",
      "Employment readiness and workforce preparation programs designed to improve access to economic opportunity",
      "Skills development initiatives that strengthen long-term employability and career growth",
      "Community integration programs that reduce isolation and strengthen belonging",
      "Mentorship and support programs for individuals navigating education, employment, and professional systems",
      "Targeted programming supporting underserved populations, including newcomers, refugees, visible minority communities, and individuals facing barriers to opportunity",
      "Creating pathways for social inclusion, confidence-building, and community participation",
    ],
    closingStatement:
      "We work to ensure opportunity remains accessible to communities often excluded from traditional support systems.",
    icon: "Landmark",
    image: "/007.jpg",
  },
  {
    id: "workshops-conferences-events",
    number: "09",
    title: "Workshops, Conferences, Festivals & Public Engagement Events",
    description:
      "Public gatherings that educate, inspire, and connect communities through learning, celebration, and collaboration.",
    overview:
      "Public engagement creates opportunities for learning, collaboration, visibility, and community-wide impact. We organize events that educate, inspire, and connect individuals while strengthening partnerships and advancing community development objectives.",
    initiativesHeading: "Our event programming includes:",
    initiatives: [
      "Educational workshops focused on leadership, professional development, and skills building",
      "Large-scale cultural festivals celebrating creativity, diversity, and community identity",
      "Youth empowerment conferences focused on innovation, leadership, and future development",
      "Public awareness campaigns addressing critical social and community challenges",
      "Networking and partnership-building events connecting organizations, professionals, and community stakeholders",
      "Talent showcases designed to provide exposure opportunities for emerging creatives",
      "Community forums that bring together diverse voices to address shared challenges and develop collaborative solutions",
    ],
    closingStatement:
      "Through public engagement, we create spaces where communities connect, learn, and grow together.",
    icon: "CalendarDays",
    image: "/006.jpg",
  },
];

export function getProgramById(id: string): Program | undefined {
  return programs.find((program) => program.id === id);
}
