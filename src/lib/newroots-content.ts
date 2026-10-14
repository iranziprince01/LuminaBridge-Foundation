import { img } from "@/lib/image-urls";

export const newrootsPhotos = {
  banner: {
    label: "Banner",
    description: "A facilitator leading a session at NewRoots Canada Summit 2026",
    src: img("/newroots-banner.jpeg"),
  },
  group: {
    label: "Group photo",
    description: "Participants, facilitators and guests together at NewRoots Canada Summit 2026",
    src: img("/NR06.jpeg"),
  },
  facilitator: {
    label: "Facilitator",
    description: "A facilitator speaking with participants at NewRoots Canada Summit 2026",
    src: img("/NR08.jpeg"),
  },
  highlights: [
    {
      label: "Highlight 1",
      description: "Participants smiling together at the front of the room",
      src: img("/NR03.jpeg"),
    },
    {
      label: "Highlight 2",
      description: "Two participants with a facilitator beside the quiz leaderboard",
      src: img("/NR04.jpeg"),
    },
    {
      label: "Highlight 3",
      description: "Participants engaged in a group discussion at the table",
      src: img("/NR02.jpeg"),
    },
    {
      label: "Highlight 4",
      description: "Participants taking part in an interactive quiz on their phones",
      src: img("/NR05.jpeg"),
    },
    {
      label: "Highlight 5",
      description: "Guests listening during a summit session",
      src: img("/NR01.jpeg"),
    },
    {
      label: "Highlight 6",
      description: "A facilitator addressing the room",
      src: img("/NR07.jpeg"),
    },
  ],
};

export const newrootsContent = {
  title: "NewRoots Canada Summit",
  subtitle: "Language, Culture & Belonging Festival",
  badge: "A past signature event by Lumina Bridge Foundation, held August 1, 2026",
  identityStatement: "New Country. New Connections. New Confidence. New Roots.",
  overview: [
    "NewRoots Canada Summit 2026 brought together newcomers, immigrants, refugees, multicultural communities, community organizations, educators, artists, and local leaders in Edmonton for a powerful celebration of language inclusion, cultural exchange, and community belonging.",
    "The summit served as a practical extension of the BridgeConnect Program, creating an immersive environment where newcomers strengthened communication skills, built relationships, engaged with diverse communities, and gained confidence navigating life in Canada.",
    "Unlike traditional settlement-focused gatherings, NewRoots combined language development, arts, storytelling, professional networking, and cultural participation into one dynamic experience that made integration practical, human-centered, and community driven.",
  ],
  purpose:
    "To create an inclusive national platform where newcomers strengthen language confidence, celebrate cultural identity, build meaningful community connections, and accelerate their integration journey through interactive community participation.",
  components: [
    {
      number: "01",
      title: "Global Voices Cultural Showcase",
      description:
        "A multicultural celebration where newcomers share music, dance, poetry, storytelling, and cultural traditions from around the world while practicing communication and public confidence.",
      activities: [
        "Cultural performances",
        "International storytelling sessions",
        "Community cultural exhibitions",
        "Spoken word presentations",
      ],
    },
    {
      number: "02",
      title: "Language Without Borders Hub",
      description:
        "Interactive spaces where newcomers strengthen communication skills through real-life engagement instead of classroom-based learning.",
      activities: [
        "English conversation circles",
        "French communication practice",
        "Public speaking challenges",
        "Everyday communication workshops",
      ],
    },
    {
      number: "03",
      title: "Canada Connect Community Forum",
      description:
        "Helping newcomers understand Canadian systems while connecting them directly with institutions and community organizations.",
      activities: [
        "Settlement support information sessions",
        "Employment readiness workshops",
        "Community services navigation",
        "Volunteer and leadership opportunities",
      ],
    },
    {
      number: "04",
      title: "Bridge Across Cultures Dialogue Series",
      description:
        "Structured conversations where newcomers and local communities engage in meaningful dialogue to build understanding and long-term relationships.",
      activities: [
        "Cultural dialogue circles",
        "Identity and belonging conversations",
        "Cross-cultural networking sessions",
        "Community leadership discussions",
      ],
    },
    {
      number: "05",
      title: "Creative Voices Lab",
      description:
        "Using arts as a tool for confidence building, communication development, and emotional wellbeing.",
      activities: [
        "Music workshops",
        "Creative writing sessions",
        "Theatre communication exercises",
        "Storytelling through arts",
      ],
    },
    {
      number: "06",
      title: "Future Builders Networking Summit",
      description:
        "Connecting newcomers with mentors, professionals, entrepreneurs, employers, and community leaders who help accelerate long-term integration and success.",
      activities: [
        "Career networking",
        "Entrepreneurship panels",
        "Leadership mentorship sessions",
        "Youth innovation showcase",
      ],
    },
  ],
  expectedImpact: [
    "An annual goal of 500+ newcomer participants",
    "Increased confidence in English and French communication",
    "Stronger social belonging and reduced isolation",
    "Greater newcomer participation in community life",
    "Stronger cross-cultural understanding across communities",
    "Increased access to employment, mentorship, and leadership opportunities",
  ],
  longTermVision: [
    "NewRoots Canada Summit will become a nationally recognized annual platform that redefines newcomer integration by proving that language learning, cultural identity, and community belonging are deeply connected.",
    "The event will position Lumina Bridge Foundation as a national leader in innovative newcomer integration models across Canada.",
  ],
  stats: [
    { label: "Annual Participant Goal", value: "500+" },
    { label: "Core Components", value: "6" },
    { label: "Languages Featured", value: "EN & FR" },
    { label: "Edition Held", value: "2026" },
  ],
} as const;
