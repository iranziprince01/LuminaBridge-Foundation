import { bridgefestFlyer } from "@/lib/bridgefest-content";
import {
  bridgefestHighlightPost,
  type BlogHighlight,
} from "@/lib/bridgefest-highlight-post";
import { img } from "@/lib/image-urls";

export type { BlogHighlight } from "@/lib/bridgefest-highlight-post";

export interface BlogImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogFact {
  label: string;
  value: string;
}

export interface BlogArtist {
  name: string;
  role: string;
  when: string;
  image: BlogImage;
  paragraphs: string[];
}

export interface BlogNight {
  label: string;
  date: string;
  names: string;
}

export interface BlogFeature {
  kicker: string;
  title: string;
  paragraphs: string[];
  image: BlogImage;
}

export interface BlogCta {
  label: string;
  href: string;
  hint?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published: string;
  publishedISO: string;
  cover: BlogImage;
  coverLayout?: "flyer" | "photo";
  articleLayout?: "default" | "fellowship-pitch";
  images: BlogImage[];
  nights?: BlogNight[];
  artists?: BlogArtist[];
  features?: BlogFeature[];
  highlight?: BlogHighlight;
  paragraphs: string[];
  closing?: string;
  facts: BlogFact[];
  cta?: BlogCta;
}

const portraitFlyer = { width: 2160, height: 2700 };
const stageFlyer = { width: 2160, height: 2880 };
const tallFlyer = { width: 2160, height: 3240 };
const companyFlyer = { width: 3600, height: 3960 };
const thanksFlyer = { width: 3600, height: 4500 };
const soloGreen = { width: 3600, height: 4500 };

const doors = "Doors 5 PM · Show 6 PM";

const lwylPitchingCover: BlogImage = {
  src: img("/lwyl-pitching.jpeg"),
  alt: "Lead Where You Land Fellowship Pitch and Grants Day flyer for project presentations and the pitch competition for youth aged 14 to 24.",
  width: 1448,
  height: 2048,
};

const lwylPitch2Photo: BlogImage = {
  src: img("/Pitch2.jpeg"),
  alt: "Lead Where You Land fellows preparing for project presentations and the pitch competition.",
  width: 2400,
  height: 3106,
};

const leadWhereYouLandPitchPost: BlogPost = {
  slug: "lead-where-you-land-pitch-competition-2026",
  title: "Lead Where You Land Fellowship: Project Presentations and Pitch Competition",
  excerpt:
    "More than 15 young fellows aged 14 to 24 are preparing to present their community projects. The Pitch Competition takes place on Friday, 20 November 2026.",
  category: "Program update",
  published: "20 November 2026",
  publishedISO: "2026-11-20",
  coverLayout: "flyer",
  articleLayout: "fellowship-pitch",
  cover: lwylPitchingCover,
  images: [lwylPitchingCover, lwylPitch2Photo],
  paragraphs: [
    "The Lead Where You Land Fellowship is nearing the completion of its current program sessions, bringing together more than 15 young fellows aged 14 to 24.",
    "Throughout the program, participants have engaged in leadership development, coaching, and learning opportunities while developing their own community-focused projects. As we approach the final stage, our fellows are preparing to present their projects and showcase the knowledge, creativity, and leadership skills they have gained throughout the fellowship.",
    "We are pleased to announce our upcoming Pitch Competition on Friday, 20 November 2026, where fellows will present their projects and compete for an opportunity to bring their ideas to life.",
    "This milestone recognizes the dedication, innovation, and potential of young leaders as they take meaningful steps toward creating positive change in their communities.",
  ],
  closing: "Together, we are helping young people to lead where they land!",
  facts: [
    { label: "Program", value: "Lead Where You Land Fellowship" },
    { label: "Fellows", value: "More than 15 young leaders, ages 14 to 24" },
    { label: "Pitch Competition", value: "Friday, 20 November 2026" },
    { label: "Partner", value: "SOARING, sponsor and program partner" },
    { label: "Phase", value: "Youth Unlocking Potential 2026, Phase I" },
  ],
  cta: {
    label: "Youth Unlocking Potential 2026",
    href: "/events/youth-unlocking-potential-2026",
  },
};

export const blogPosts: BlogPost[] = [
  leadWhereYouLandPitchPost,
  bridgefestHighlightPost,
  {
    slug: "gentil-misigaro-bridgefest-canada-2026",
    title: "Five Singers Take the Stage at BridgeFest Canada 2026",
    excerpt:
      "Someje opens Friday. Alpha Rwirangira headlines Saturday. Gentil Misigaro, Bob Muyoboke and Amani Kayumba sing all three nights. Free entry in Edmonton, November 6 to 8.",
    category: "Artist announcement",
    published: "October 20, 2026",
    publishedISO: "2026-10-20",
    cover: {
      src: bridgefestFlyer("/BF07.jpeg"),
      alt: "BridgeFest Canada 2026 poster of the full company: singers Someje, Amani Kayumba, Alpha Rwirangira, Gentil Misigaro and Bob Muyoboke, hosted by Aristote Bikino with co-hosts Fred Shikiro and Bienvenue Ntaganzwa, November 6 to 8 at the Old Strathcona Performing Arts Centre. Free entrance.",
      ...companyFlyer,
    },
    images: [
      {
        src: bridgefestFlyer("/BF06.jpeg"),
        alt: "BridgeFest Canada 2026 flyer of singer Alpha Rwirangira live in Edmonton on Saturday, November 7, a night of worship and inspiration.",
        ...portraitFlyer,
      },
      {
        src: bridgefestFlyer("/BF02.jpeg"),
        alt: "BridgeFest Canada 2026 flyer of singer Gentil Misigaro, announced for November 6, 7 and 8 at the Old Strathcona Performing Arts Centre.",
        ...stageFlyer,
      },
      {
        src: bridgefestFlyer("/BF03.jpeg"),
        alt: "BridgeFest Canada 2026 flyer of singer Bob Muyoboke, live in Edmonton November 6, 7 and 8.",
        ...soloGreen,
      },
      {
        src: bridgefestFlyer("/BF04.jpeg"),
        alt: "BridgeFest Canada 2026 flyer of singer Amani Kayumba, live all three nights, November 6, 7 and 8.",
        ...portraitFlyer,
      },
      {
        src: bridgefestFlyer("/BF05.jpeg"),
        alt: "BridgeFest Canada 2026 flyer of singer and vocalist Someje, opening night, Friday, November 6.",
        ...tallFlyer,
      },
      {
        src: bridgefestFlyer("/BF07.jpeg"),
        alt: "BridgeFest Canada 2026 poster gathering the singers, host Aristote Bikino, co-hosts Fred Shikiro and Bienvenue Ntaganzwa, and MC Quinloho.",
        ...companyFlyer,
      },
      {
        src: bridgefestFlyer("/BF08.jpeg"),
        alt: "Thank you, Canada flyer for BridgeFest Canada 2026, with founders Aristote Bikino, Fred Shikiro and Bienvenue Ntaganzwa.",
        ...thanksFlyer,
      },
    ],
    nights: [
      {
        label: "Friday",
        date: "November 6",
        names: "Someje opens, with Gentil Misigaro, Bob Muyoboke and Amani Kayumba",
      },
      {
        label: "Saturday",
        date: "November 7",
        names: "Alpha Rwirangira headlines, with Gentil, Bob and Amani",
      },
      {
        label: "Sunday",
        date: "November 8",
        names: "Gentil Misigaro, Bob Muyoboke and Amani Kayumba",
      },
    ],
    artists: [
      {
        name: "Alpha Rwirangira",
        role: "Saturday headline",
        when: `Saturday, November 7 · ${doors}`,
        image: {
          src: bridgefestFlyer("/BF06.jpeg"),
          alt: "BridgeFest Canada 2026 flyer of singer Alpha Rwirangira live in Edmonton on Saturday, November 7, 2026, a night of worship and inspiration at the Old Strathcona Performing Arts Centre. Doors 5 PM, show 6 PM, free entrance.",
          ...portraitFlyer,
        },
        paragraphs: [
          "Saturday belongs to a night of worship and inspiration. Alpha Rwirangira headlines November 7 at the Old Strathcona Performing Arts Centre. Doors open at 5 PM and the show starts at 6.",
          "The Rwandan singer won Tusker Project Fame, then its All Stars edition. He sings in English, Swahili and Kinyarwanda, in songs written to be sung back by the room. Church singing in Kigali led to stages across East Africa, including Songa Mbele with A.Y. and the album One Africa. Gospel songs such as Yamungu, Merci and Wow lead to this Saturday, when Edmonton gets the chance to sing them back.",
        ],
      },
      {
        name: "Gentil Misigaro",
        role: "All three nights",
        when: `November 6, 7 and 8 · ${doors}`,
        image: {
          src: bridgefestFlyer("/BF02.jpeg"),
          alt: "BridgeFest Canada 2026 flyer of singer Gentil Misigaro, microphone in hand and one arm raised, announced for November 6, 7 and 8, 2026, at the Old Strathcona Performing Arts Centre. Free entrance.",
          ...stageFlyer,
        },
        paragraphs: [
          "Gentil Misigaro is on stage Friday, Saturday and Sunday. Born in Congo, he started guitar at six and singing at twelve. Songs carried him through Rwanda and Uganda, and later to Winnipeg, where he introduced himself as a musician.",
          "Listeners know Buri Munsi, Biratungana and Hano ku Isi. He has taken that music through Canada, the United States, Europe and East Africa. Come any night of the festival, sing along, and leave with more hope than you arrived with.",
        ],
      },
      {
        name: "Bob Muyoboke",
        role: "All three nights",
        when: `November 6, 7 and 8 · ${doors}`,
        image: {
          src: bridgefestFlyer("/BF03.jpeg"),
          alt: "BridgeFest Canada 2026 flyer of singer Bob Muyoboke, live in Edmonton November 6, 7 and 8, 2026, at the Old Strathcona Performing Arts Centre. Doors 5 PM, show 6 PM, free entrance.",
          ...soloGreen,
        },
        paragraphs: [
          "Bob Muyoboke sings all three nights. His flyer puts him live in Edmonton from November 6 through November 8, in the same room and on the same clock as the rest of the weekend: doors open at 5 PM, show at 6.",
          "He is one of the voices that holds the festival together. Come Friday and he is there. Come back Saturday or Sunday and he is still there, beside Gentil Misigaro and Amani Kayumba.",
        ],
      },
      {
        name: "Amani Kayumba",
        role: "All three nights",
        when: `November 6, 7 and 8 · ${doors}`,
        image: {
          src: bridgefestFlyer("/BF04.jpeg"),
          alt: "BridgeFest Canada 2026 flyer of singer Amani Kayumba, live all three nights, November 6, 7 and 8, 2026, at the Old Strathcona Performing Arts Centre in Edmonton. Doors 5 PM, show 6 PM, free entrance.",
          ...portraitFlyer,
        },
        paragraphs: [
          "Amani Kayumba sings live Friday, Saturday and Sunday. The flyer says all three nights, and the invitation is simple. Walk in any evening and he is on stage.",
          "A three-night set gives Edmonton time to learn a voice. Come on Friday while the songs are still new. Come back before the festival ends and they belong to the room. Bring someone with you.",
        ],
      },
      {
        name: "Someje",
        role: "Friday opening night",
        when: `Friday, November 6 · ${doors}`,
        image: {
          src: bridgefestFlyer("/BF05.jpeg"),
          alt: "BridgeFest Canada 2026 flyer of singer and vocalist Someje, live on Friday, November 6, 2026, opening night at the Old Strathcona Performing Arts Centre in Edmonton. Doors 5 PM, show 6 PM, free entrance.",
          ...tallFlyer,
        },
        paragraphs: [
          "Someje opens the festival. Friday, November 6 is billed as opening night, and the flyer names her singer and vocalist. She is the first voice of the weekend.",
          "Doors open at 5 PM and the show starts at 6. Entrance is free. Come for the opening, then stay for the singers who carry Saturday and Sunday.",
        ],
      },
    ],
    features: [
      {
        kicker: "All performers",
        title: "The complete BridgeFest lineup",
        paragraphs: [
          "Someje, Amani Kayumba, Alpha Rwirangira, Gentil Misigaro and Bob Muyoboke share the line. Aristote Bikino hosts. Fred Shikiro and Bienvenue Ntaganzwa co-host. Quinloho is MC.",
          "Music, comedy and dance. November 6 to 8 at the Old Strathcona Performing Arts Centre, 8426 Gateway Blvd NW. Doors open at 5 PM, show at 6. Free entrance.",
        ],
        image: {
          src: bridgefestFlyer("/BF07.jpeg"),
          alt: "BridgeFest 26 poster, November 6 to 8, 2026, with singers Someje, Amani Kayumba, Alpha Rwirangira, Gentil Misigaro and Bob Muyoboke, host Aristote Bikino, co-hosts Fred Shikiro and Bienvenue Ntaganzwa, and MC Quinloho. Free entrance at the Old Strathcona Performing Arts Centre.",
          ...companyFlyer,
        },
      },
      {
        kicker: "Founders",
        title: "Thank you, Canada",
        paragraphs: [
          "Aristote Bikino hosts the weekend. Fred Shikiro and Bienvenue Ntaganzwa co-host. They founded Lumina Bridge Foundation, and this is their appreciation for the partnership that brought three nights to Edmonton.",
          "BridgeFest Canada 2026 is funded by the Government of Canada, with the support of Canadian Heritage. The message is written in English and French, the same two languages the room will hear.",
        ],
        image: {
          src: bridgefestFlyer("/BF08.jpeg"),
          alt: "Thank you, Canada appreciation flyer for BridgeFest Canada 2026, picturing host Aristote Bikino with co-hosts Fred Shikiro and Bienvenue Ntaganzwa, founders of Lumina Bridge Foundation. Funded by the Government of Canada.",
          ...thanksFlyer,
        },
      },
    ],
    paragraphs: [
      "BridgeFest Canada 2026 was built for more than one voice in a dark room. Lumina Bridge Foundation made it a weekend where professional artists and the communities around them share a stage. Five singers carry that idea into the Old Strathcona Performing Arts Centre.",
      "Someje opens Friday. Alpha Rwirangira headlines Saturday, a night of worship and inspiration. Gentil Misigaro, Bob Muyoboke and Amani Kayumba sing all three nights, so the room has a through-line from the first evening to the last.",
      "The festival runs Friday, November 6 through Sunday, November 8, at 8426 Gateway Blvd NW, Edmonton. Music, comedy and dance share the programme. Entrance is free. Doors open at 5 PM and the show starts at 6. Registering helps the team prepare the house for you.",
    ],
    closing: "Five singers. Three nights. The door is open.",
    facts: [
      { label: "Host", value: "Aristote Bikino" },
      { label: "Co-Hosts", value: "Fred Shikiro and Bienvenue Ntaganzwa" },
      { label: "Dates and Time", value: "Nov 6–8, 2026. Doors open at 5 PM, show at 6 PM" },
      { label: "Venue", value: "Old Strathcona Performing Arts Centre, Edmonton" },
      { label: "Singers", value: "Alpha Rwirangira, Gentil Misigaro, Bob Muyoboke, Amani Kayumba, and Someje" },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogHref(slug: string): string {
  return `/blog/${slug}`;
}
