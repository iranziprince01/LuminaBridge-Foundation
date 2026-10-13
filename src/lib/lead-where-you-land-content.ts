import { img } from "@/lib/image-urls";

export interface ProgramPhoto {
  label: string;
  /** Used as the image alt text, or shown on the placeholder when there is no photo. */
  description: string;
  /** Wrap the /public path in img(), e.g. img("/E2.jpg"). Leave unset to show a placeholder. */
  src?: string;
}

export const leadWhereYouLandLinks = {
  donate: "/donate",
  registerInterest: "https://forms.gle/bL5NQWGgjWqbVyLo7",
  contact: "mailto:lwylffellowship@gmail.com",
} as const;

export const leadWhereYouLandContent = {
  hero: {
    eyebrow: "A Lumina Bridge Foundation Program · Edmonton",
    phase: "Youth Unlocking Potential 2026 · Phase I",
    headline: "Wherever You Land, You Can Lead.",
  },

  about: {
    eyebrow: "About the Fellowship",
    title: "Talent is everywhere. Access is not.",
    paragraphs: [
      "The Lead Where You Land Fellowship, also known as the African-Canadian Youth Connect Lab, is a leadership program of the Lumina Bridge Foundation in Edmonton, Alberta. It brings Black Canadian and African-Canadian youth together to discover their purpose, build practical leadership skills, and learn how Canadian systems really work.",
      "Many of our young people bring ambition, languages, culture and resilience. What they often need is a map: whom to ask, which doors exist, and how to walk through them. The Fellowship provides that map, along with a community to walk it with.",
    ],
    belief:
      "Our belief is simple. Young people do not have to wait for a title, a degree or permission to lead. They can lead right where they land: at school, at home, at work and in their community.",
    mission:
      "To connect African-Canadian youth in Edmonton with the skills, mentors and community they need to discover their purpose, build leadership and create lasting change.",
    vision:
      "A generation of young African-Canadian leaders who thrive where they land and lift their communities as they rise.",
  },

  whyItMatters: {
    eyebrow: "Why It Matters",
    title: "Ambition is strong. Opportunity is the next step.",
    figures: [
      {
        value: "94%",
        caption: "of Black youth in Canada aged 15–25 want a bachelor's degree or higher",
      },
      { value: "60%", caption: "expect that they will actually earn one" },
      { value: "79%", caption: "of other Canadian youth expect to earn one" },
    ],
    paragraphs: [
      "Black youth in Canada complete high school at the same rate as their peers, and nearly all of them hope to go on to university. The difference appears later, between the goals young people hold and the outcomes they expect for themselves. Encouragement, access to guidance, and mentors who share their experience all help to close that gap.",
      "This is where we can make a real difference. Research on Black youth in Canada points to mentorship as one of the strongest levers for better social and economic outcomes. That is exactly what the Fellowship delivers: mentors, role models and peers who believe in each other and say so out loud.",
    ],
  },

  experience: {
    eyebrow: "What Fellows Experience",
    title: "Less lecture. More leadership.",
    intro:
      "The Fellowship is built on two pillars. Every session is hands-on: fellows talk, plan, stand up, pair off and practise. They do more than listen. They take part.",
    pillars: [
      {
        title: "Teach What You Know",
        subtitle: "The Hidden Skills Exchange",
        description:
          "Every young person already has skills: a language, a craft, a trade, or a talent nobody has asked about. Fellows bring those skills forward and teach them to one another, discovering that they already have something to give.",
      },
      {
        title: "Meet, Match & Collaborate",
        subtitle: "The Connection Room",
        description:
          "Fellows meet peers, mentors and community leaders they might not otherwise reach. They connect around shared goals and build projects together, turning a room of strangers into a network.",
      },
    ],
    learningTitle: "What fellows learn",
    learning: [
      {
        title: "Know yourself",
        description: "Purpose, values and strengths as the foundation of leadership",
      },
      {
        title: "Dream big, plan small",
        description: "Turning a dream into goals, a plan and consistent action",
      },
      {
        title: "Lead without a title",
        description: "Influence, communication and service rather than position",
      },
      {
        title: "Become a changemaker",
        description: "Identifying one real need in the community and starting small",
      },
      {
        title: "Lift someone else",
        description: "Mentoring, opening doors and showing up for the next person",
      },
      {
        title: "Build a bridge",
        description: "Using culture, skills and opportunity to strengthen communities",
      },
    ],
    quote: "You do not need a title to lead. You need to decide to take responsibility.",
  },

  pathways: {
    eyebrow: "Pathways into Canadian Life and Work",
    title: "From potential to opportunity.",
    intro:
      "Leadership grows fastest when it has somewhere to go. The Fellowship connects young people with the systems, people and opportunities that shape a future in Canada.",
    cards: [
      {
        title: "Navigating Canadian systems",
        description:
          "Practical knowledge of how things work here: education and post-secondary pathways, the job market, workplace culture, financial basics, civic life and community services. The things nobody tells you, explained by people who learned them first.",
      },
      {
        title: "Internships and work experience",
        description:
          "Connecting fellows with internship, volunteer and service placements through our partners, including Canada Service Corps, so they can build Canadian experience, references and confidence.",
      },
      {
        title: "Mentorship and networks",
        description:
          "Pairing fellows with mentors and community leaders who have walked the same road and can open doors, make introductions and encourage them to aim higher.",
      },
      {
        title: "Funding and project coaching",
        description:
          "Fellows who want to launch a community project receive coaching on the next steps: finding the right grant, writing the application, and having it reviewed before submission.",
      },
    ],
    closing: "We do not just prepare young people for opportunity. We walk with them to the door.",
  },

  cohort: {
    eyebrow: "Cohort 1 at a Glance (2026)",
    title: "Our first cohort, in numbers.",
    figures: [
      {
        value: "50+",
        caption: "young people applied for 13 available places; 13 were selected",
      },
      {
        value: "12",
        caption: "fellows graduated with a Certificate in Youth Leadership Development",
      },
      { value: "4+", caption: "community projects designed and presented by fellows" },
      {
        value: "4",
        caption: "awards for leadership, dedication, community-building and curiosity",
      },
    ],
    summary:
      "Cohort 1 ran in Edmonton in fall 2026. Fellows met regularly, worked through the leadership curriculum and developed their own ideas for positive change in the community, from wellbeing and family support to sustainable small business.",
    gala: {
      title: "Gala Night",
      date: "October 2, 2026",
      venue: "Edmonton Intercultural Centre",
      description:
        "The cohort concluded with a Gala Night celebrating our graduates. Fellows presented their projects to family, partners and community leaders, received their certificates, and were recognized for their outstanding contributions. It was proof of what happens when young people are given the space to lead.",
    },
  },

  highlights: {
    eyebrow: "Event Highlights",
    title: "Relive Gala Night",
    videoId: "fI3t8-ZovVc",
    videoTitle: "Lead Where You Land Fellowship 2026 (Cohort 1) Gala Night hosted by Aristote Bikino",
  },

  partners: {
    eyebrow: "Partners and Supporters",
    title: "Built together.",
    intro:
      "Lead Where You Land is a program of the Lumina Bridge Foundation, made possible by partners who believe in young leaders.",
    list: [
      { name: "Lumina Bridge Foundation", role: "Host organization" },
      { name: "Sprout Ideas" },
      { name: "Canada Service Corps" },
      { name: "Africa Centre" },
      { name: "Edmonton Intercultural Centre", role: "Venue" },
    ],
    cta: "Interested in partnering with us?",
  },

  support: {
    eyebrow: "Support a Young Leader",
    title: "Invest in the leaders our community is waiting for.",
    intro:
      "Every young person who believes they can lead becomes an example for the next one. Your gift keeps the Fellowship free for participants and helps us grow from one cohort to many, reaching more young people across Edmonton.",
    givingTitle: "What your gift makes possible",
    gifts: [
      { amount: "$50", description: "Provides a leadership journal and session materials for one fellow" },
      { amount: "$150", description: "Funds a guest speaker or mentor session for the whole cohort" },
      { amount: "$500", description: "Covers a full term of venue space for weekly sessions" },
      {
        amount: "$1,500",
        description: "Sponsors one fellow through the complete Fellowship, from start to graduation",
      },
      {
        amount: "$5,000+",
        description:
          "Makes you a Cohort Sponsor, with recognition at Gala Night and on our materials",
      },
    ],
    otherWaysTitle: "Other ways to help",
    otherWays: [
      {
        title: "Offer an internship or placement",
        description: "Give a fellow their first Canadian work experience.",
      },
      {
        title: "Become a mentor or guest speaker",
        description: "Share your story and open a door.",
      },
      {
        title: "Sponsor a cohort or event",
        description: "Put your organization's name behind the next generation of leaders.",
      },
      {
        title: "Spread the word",
        description: "Share this page with a young person who should be part of the Fellowship.",
      },
    ],
  },

  join: {
    eyebrow: "Join the Next Cohort",
    title: "Your leadership story starts here.",
    intro:
      "Are you a Black Canadian or African-Canadian young person in Edmonton who wants to grow, connect and make a difference? The Fellowship is free to join. No experience is needed, just the decision to show up.",
  },

  photos: {
    hero: {
      label: "Photo 1",
      description: "A Lead Where You Land fellow sharing her ideas with fellow participants",
      src: img("/E1.jpg"),
    },
    about: {
      label: "Photo 2",
      description: "Fellows in Lead Where You Land shirts taking part in a hands-on group activity",
      src: img("/E2.jpg"),
    },
    pillars: {
      label: "Photo 3",
      description: "Fellows working through a group exercise together during a session",
      src: img("/E3.jpg"),
    },
    learning: {
      label: "Photo 4",
      description: "A fellow speaking to the cohort and guests seated around the table",
      src: img("/E4.jpg"),
    },
    pathways: {
      label: "Photo 5",
      description: "A guest speaker addressing the fellows on Gala Night",
      src: img("/E5.jpg"),
    },
    gallery: [
      {
        label: "Photo 6",
        description: "Gala Night: a graduate receiving her Certificate of Completion",
        src: img("/E6.jpg"),
      },
      {
        label: "Photo 7",
        description: "Gala Night: a fellow presenting his project to the room",
        src: img("/E7.jpg"),
      },
      {
        label: "Photo 8",
        description: "Gala Night: the Cohort 1 graduates with their certificates",
        src: img("/E8.jpg"),
      },
      {
        label: "Photo 9",
        description: "Gala Night: fellows, guests and partners gathered around the room",
        src: img("/E9.jpg"),
      },
    ],
    support: {
      label: "Photo 10",
      description: "Fellows sharing a laugh together during a Fellowship session",
      src: img("/E10.jpg"),
    },
  },
} as const;
