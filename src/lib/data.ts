import type { IconName } from "@/lib/icons";

export interface Program {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  impact: string;
  icon: IconName;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
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

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export const navigation = [
  { name: "Home", href: "/" },
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
  secondaryCta: { label: "Our Programs", href: "/#programs" },
  image:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",
};

export const whoWeAre = {
  title: "Who We Are",
  paragraphs: [
    "LuminaBridge Foundation is an officially registered nonprofit organization based in Edmonton, Alberta, serving communities across Alberta.",
    "The foundation was established through community-led initiatives that began in September 2024, bringing together artists, youth leaders, educators, and community advocates who shared a vision of using arts, culture, education, and community engagement to create positive social impact. In 2026, LuminaBridge Foundation became a legally registered nonprofit organization, strengthening its capacity to serve communities and expand its programs.",
    "Today, LuminaBridge Foundation operates from its Edmonton office while delivering programs, workshops, festivals, mentorship opportunities, and community initiatives across Alberta.",
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
  title: "The name LuminaBridge reflects our purpose:",
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
    icon: "Sparkles",
  },
  {
    title: "Opportunity",
    description: "We create pathways for youth and communities to access mentorship and growth.",
    icon: "Lightbulb",
  },
  {
    title: "Leadership",
    description: "We cultivate confident leaders who uplift others and strengthen communities.",
    icon: "Award",
  },
  {
    title: "Community",
    description: "We build bridges between people, cultures, organizations, and opportunities.",
    icon: "Users",
  },
  {
    title: "Creativity",
    description: "We celebrate arts, culture, and talent as tools for healing, expression, and growth.",
    icon: "Palette",
  },
  {
    title: "Belonging",
    description: "We foster inclusive spaces where newcomers, youth, and families feel seen and supported.",
    icon: "Heart",
  },
];

export const programs: Program[] = [
  {
    id: "youth-leadership",
    title: "Youth Leadership Development",
    description:
      "Leadership workshops, mentorship, and personal development sessions that help young people build confidence, communication skills, and the ability to contribute positively to their communities.",
    benefits: ["Leadership workshops", "Mentorship opportunities", "Personal development sessions"],
    impact: "Developing confident young leaders across Alberta.",
    icon: "Target",
  },
  {
    id: "arts-talent",
    title: "Arts and Talent Development",
    description:
      "Creative platforms for youth and emerging artists to develop skills, express identity, and showcase talent through music, theatre, visual arts, and performance.",
    benefits: ["Talent showcases", "Creative mentorship", "Performance opportunities"],
    impact: "Amplifying artistic voices and hidden talent in every community.",
    icon: "Music",
  },
  {
    id: "mental-wellness",
    title: "Mental Wellness and Community Healing",
    description:
      "Programming that promotes well-being, reduces stigma, and creates safe spaces for healing, conversation, and community support for youth and families.",
    benefits: ["Wellness workshops", "Community healing circles", "Support resource navigation"],
    impact: "Creating spaces where individuals and families can heal and thrive together.",
    icon: "Heart",
  },
  {
    id: "financial-entrepreneurship",
    title: "Financial Literacy and Entrepreneurship",
    description:
      "Practical education in budgeting, saving, business planning, and entrepreneurship — empowering participants with skills for long-term financial stability and economic opportunity.",
    benefits: ["Financial literacy workshops", "Entrepreneurship training", "Career and business mentorship"],
    impact: "Building economic confidence and pathways to self-sufficiency.",
    icon: "Wallet",
  },
  {
    id: "cultural-inclusion",
    title: "Cultural Celebration and Inclusion",
    description:
      "Festivals, cultural showcases, and inclusion initiatives that honour diversity, celebrate heritage, and foster cross-cultural understanding across Alberta.",
    benefits: ["Cultural festivals", "Heritage celebrations", "Inclusion dialogues"],
    impact: "Celebrating Alberta's multicultural communities and shared humanity.",
    icon: "Globe",
  },
  {
    id: "community-engagement",
    title: "Community Engagement and Volunteerism",
    description:
      "Grassroots initiatives and volunteer pathways that connect residents, organizations, and institutions around shared goals, collective action, and meaningful service.",
    benefits: ["Community forums", "Volunteer programs", "Neighbourhood partnerships"],
    impact: "Mobilizing communities as agents of positive change.",
    icon: "HandHeart",
  },
  {
    id: "creative-industry",
    title: "Creative Industry Development",
    description:
      "Support for artists and creatives entering professional industries — including branding, networking, career development, and access to platforms that recognize their work.",
    benefits: ["Industry mentorship", "Professional branding", "Career development support"],
    impact: "Helping creatives turn talent into sustainable careers.",
    icon: "Sparkles",
  },
  {
    id: "refugee-support",
    title: "Newcomer, Minorities, and Refugee Support",
    description:
      "Belonging programs, settlement navigation, and community support for newcomers, minorities, and refugee communities building roots in Alberta.",
    benefits: ["Settlement navigation", "Belonging programs", "Community integration support"],
    impact: "Helping newcomers feel seen, respected, and supported.",
    icon: "Users",
  },
  {
    id: "events-festivals",
    title: "Workshops, Festivals, Conferences, and Public Events",
    description:
      "Signature public gatherings — from workshops and conferences to festivals — that bring communities together for learning, celebration, and lasting connection.",
    benefits: ["Public workshops", "Signature festivals", "Conferences and community gatherings"],
    impact: "Creating memorable experiences that inspire ongoing engagement.",
    icon: "Calendar",
  },
];

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
      "LuminaBridge Foundation became a registered nonprofit in Alberta, strengthening capacity to serve communities.",
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
      "LuminaBridge Foundation began as community-led initiatives in September 2024 — uniting artists, youth leaders, educators, and advocates who believed arts, culture, and engagement could create lasting social impact.",
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

export const impactNarrative = [
  "Great organizations are born when people choose to turn challenges into opportunities.",
  "In 2024, community leaders, artists, educators, and volunteers began noticing a common pattern across many communities. Talented young people often lacked opportunities to develop their skills. Emerging artists struggled to access platforms where their work could be recognized. Families were searching for stronger community connections, and many individuals faced barriers to reaching their full potential.",
  "Rather than viewing these challenges as permanent obstacles, passionate changemakers came together with a vision: to create sustainable solutions that empower individuals, strengthen communities, and unlock hidden potential.",
  "What began as conversations and small community gatherings soon evolved into workshops, outreach activities, mentorship opportunities, and cultural events. Young people discovered new confidence. Community members built meaningful connections. Artists found opportunities to share their talents. Families developed stronger support networks.",
  "In 2026, that vision became a reality with the official establishment of LuminaBridge Foundation as a registered nonprofit organization in Alberta. Today, we work to empower youth, support artists, strengthen communities, promote well-being, and create opportunities across the province.",
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "I moved to Edmonton feeling disconnected and uncertain about where I belonged. After attending several LuminaBridge Foundation workshops and community events, I found more than just programs — I found a community. The leadership and personal development sessions helped me build confidence, improve my communication skills, and connect with people from different backgrounds. Today, I volunteer in community initiatives and actively participate in local events. LuminaBridge Foundation helped me believe in myself again and reminded me that my voice matters.",
    author: "Patrimoine M.",
    role: "Edmonton, Alberta",
  },
  {
    id: "2",
    quote:
      "As a mother of three children, balancing family responsibilities while adjusting to life in Canada was challenging. Through LuminaBridge Foundation workshops and seminars, I gained valuable knowledge about financial literacy, parenting support, community resources, and personal development. The welcoming environment allowed me to meet other women facing similar challenges and build lasting friendships. The support I received has positively impacted not only my life but also my children. LuminaBridge Foundation created a space where I felt seen, respected, and supported.",
    author: "Soleil Nyinawinka",
    role: "Edmonton, Alberta",
  },
  {
    id: "3",
    quote:
      "LuminaBridge Foundation is creating opportunities that many young people never had access to before. Through mentorship, workshops, and community events, youth are discovering their talents, building confidence, and developing leadership skills that will benefit them for years to come.",
    author: "Community Participant",
    role: "Program Participant",
  },
];

export const leadershipIntro = {
  title: ["Meet Our LuminaBridge", "Foundation Visionaries"],
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
    bio: "Aristote Bikino is the Founder and CEO of LuminaBridge Foundation. He provides strategic leadership and oversees the organization's vision, partnerships, fundraising, and community impact initiatives. His passion for youth empowerment and community development drives the Foundation's mission to create opportunities and inspire positive change.",
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
    date: "2026",
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
  "Together, these signature events reflect LuminaBridge Foundation's commitment to empowering youth, celebrating diversity, supporting artists, strengthening communities, and creating opportunities for people across Alberta.";

export const impactOutcomes = [
  {
    title: "Youth Empowerment",
    description: "Young people discover confidence, leadership skills, and pathways to reach their full potential.",
    icon: "Target",
  },
  {
    title: "Community Connection",
    description: "Families and individuals build meaningful relationships and stronger support networks.",
    icon: "Users",
  },
  {
    title: "Artistic Recognition",
    description: "Emerging artists access platforms where their talents are celebrated and professionally developed.",
    icon: "Palette",
  },
  {
    title: "Cultural Belonging",
    description: "Newcomers and diverse communities feel welcomed, respected, and celebrated.",
    icon: "Globe",
  },
  {
    title: "Well-Being & Healing",
    description: "Safe spaces promote mental wellness, personal growth, and community healing.",
    icon: "Heart",
  },
  {
    title: "Economic Opportunity",
    description: "Financial literacy and entrepreneurship programming builds long-term stability and confidence.",
    icon: "TrendingUp",
  },
];

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
    icon: "HandHeart",
  },
  {
    id: "sponsor",
    title: "Sponsor",
    description:
      "Align your organization with meaningful community impact. Sponsorship opportunities are available for events, programs, and initiatives across Alberta.",
    cta: "Explore Sponsorship",
    href: "/get-involved#contact",
    icon: "Award",
  },
  {
    id: "partner",
    title: "Partner With Us",
    description:
      "We welcome collaborations with community organizations, educational institutions, businesses, government agencies, artists, cultural groups, and funders who share our vision.",
    cta: "Become a Partner",
    href: "/get-involved#contact",
    icon: "Users",
  },
  {
    id: "support",
    title: "Support Our Programs",
    description:
      "Fund specific program areas — from youth leadership to newcomer support — with targeted philanthropic investment that creates measurable community impact.",
    cta: "Support Our Mission",
    href: "/get-involved#contact",
    icon: "Heart",
  },
  {
    id: "engage",
    title: "Community Engagement",
    description:
      "Host workshops, refer participants, or co-create initiatives that serve your neighbourhood and strengthen community belonging across Alberta.",
    cta: "Engage Your Community",
    href: "/get-involved#contact",
    icon: "Megaphone",
  },
];

export const successStories = [
  {
    title: "Finding Belonging in Edmonton",
    story:
      "After attending LuminaBridge workshops and community events, a newcomer to Edmonton found confidence, built meaningful relationships, and now volunteers actively in local community initiatives.",
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

export const donationContent = {
  intro:
    "Your generosity helps LuminaBridge Foundation empower youth, celebrate culture, support artists, and strengthen communities across Alberta. Every contribution creates pathways of opportunity for the people and programs we serve.",
  whyDonate:
    "As a registered nonprofit organization, LuminaBridge Foundation relies on the support of donors, funders, and community partners to deliver workshops, festivals, mentorship programs, and community initiatives that create lasting impact.",
  supportAreas: [
    {
      title: "Youth Leadership & Development",
      description:
        "Support mentorship, workshops, and talent development programs that help young people build confidence and leadership skills.",
    },
    {
      title: "Arts, Culture & Community Events",
      description:
        "Help fund festivals, showcases, and cultural programs that celebrate diversity and create platforms for emerging artists.",
    },
    {
      title: "Community Wellness & Support",
      description:
        "Contribute to initiatives that promote mental wellness, newcomer support, and stronger community connections across Alberta.",
    },
  ],
  inquiryNote:
    "For donation inquiries before online giving launches, please contact us at:",
};

export const contactContent = {
  intro:
    "We would love to hear from you. Whether you are interested in our programs, partnership opportunities, sponsorships, volunteering, community initiatives, workshops, festivals, or youth development programs, our team is ready to assist you.",
  partnership:
    "LuminaBridge Foundation welcomes collaborations with community organizations, educational institutions, businesses, government agencies, artists, cultural groups, and funders who share our vision of building stronger and more inclusive communities.",
  volunteer:
    "Passionate about making a difference? We are always looking for dedicated volunteers to support our events, youth programs, community initiatives, workshops, and festivals throughout Alberta.",
  stayConnected:
    "Follow LuminaBridge Foundation as we continue to empower youth, celebrate culture, support creativity, and strengthen communities across Alberta. Together, we are building bridges of opportunity, leadership, and belonging.",
};
