import { img } from "@/lib/image-urls";

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

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published: string;
  publishedISO: string;
  cover: BlogImage;
  images: BlogImage[];
  artists?: BlogArtist[];
  paragraphs: string[];
  closing?: string;
  facts: BlogFact[];
}

const portraitFlyer = { width: 2160, height: 2700 };
const stageFlyer = { width: 2160, height: 2880 };

export const blogPosts: BlogPost[] = [
  {
    slug: "gentil-misigaro-bridgefest-canada-2026",
    title: "Three Singers Take the Stage at BridgeFest Canada 2026",
    excerpt:
      "Amani Kayumba sings all three nights. Gentil Misigaro and Alpha Rwirangira take Saturday. Free entry in Edmonton, November 6 to 8.",
    category: "Artist announcement",
    published: "October 20, 2026",
    publishedISO: "2026-10-20",
    cover: {
      src: img("/BF02.jpeg"),
      alt: "BridgeFest Canada 2026 flyer announcing special guest singer Gentil Misigaro, performing Saturday, November 7, 2026, at the Old Strathcona Performing Arts Centre in Edmonton.",
      ...stageFlyer,
    },
    images: [
      {
        src: img("/BF01.jpeg"),
        alt: "BridgeFest Canada 2026 flyer of singer Amani Kayumba, live all three nights, November 6, 7 and 8, 2026, in Edmonton. Free entrance.",
        ...portraitFlyer,
      },
      {
        src: img("/BF02.jpeg"),
        alt: "BridgeFest Canada 2026 flyer of special guest singer Gentil Misigaro performing Saturday, November 7, 2026, in Edmonton. Free entrance.",
        ...stageFlyer,
      },
      {
        src: img("/BF03.jpeg"),
        alt: "BridgeFest Canada 2026 flyer of singer Alpha Rwirangira live in Edmonton on Saturday, November 7, 2026, a night of worship and inspiration. Free entrance.",
        ...portraitFlyer,
      },
    ],
    artists: [
      {
        name: "Amani Kayumba",
        role: "Live, all three nights",
        when: "November 6, 7 and 8 · Doors 5 PM · Show 6 PM",
        image: {
          src: img("/BF01.jpeg"),
          alt: "BridgeFest Canada 2026 flyer of singer Amani Kayumba in a white t-shirt, announced live at BridgeFest for all three nights, November 6, 7 and 8, 2026, at the Old Strathcona Performing Arts Centre.",
          ...portraitFlyer,
        },
        paragraphs: [
          "Amani Kayumba sings live all three nights, from Friday through Sunday. Doors open at 5 PM and the show starts at 6. He is the voice that stays while comedy, dance and the rest of the weekend change around him. Walk in any evening and he is on stage.",
          "Come on Friday and the songs are still new. Come back Saturday or Sunday and they belong to the room. A three-night set gives Edmonton time to learn a voice, and a clear reason to return before the festival ends. Bring someone with you.",
        ],
      },
      {
        name: "Gentil Misigaro",
        role: "Special guest",
        when: "Saturday, November 7 · Doors 5 PM · Show 6 PM",
        image: {
          src: img("/BF02.jpeg"),
          alt: "BridgeFest Canada 2026 flyer of singer Gentil Misigaro, microphone in hand and one arm raised, announced as special guest for Saturday, November 7, 2026.",
          ...stageFlyer,
        },
        paragraphs: [
          "Gentil Misigaro joins as special guest on Saturday, November 7. Born in Congo, he started guitar at six and singing at twelve. Songs carried him through Rwanda and Uganda, and later to Winnipeg, where he introduced himself as a musician.",
          "Listeners know Buri Munsi, Biratungana and Hano ku Isi. He has taken that music through Canada, the United States, Europe and East Africa. The invitation is unchanged. Come closer, sing along, and leave with more hope than you arrived with.",
        ],
      },
      {
        name: "Alpha Rwirangira",
        role: "Saturday headline",
        when: "Saturday, November 7 · Doors 5 PM · Show 6 PM",
        image: {
          src: img("/BF03.jpeg"),
          alt: "BridgeFest Canada 2026 flyer of singer Alpha Rwirangira at a microphone, arm extended, billed for a Saturday night of worship and inspiration in Edmonton.",
          ...portraitFlyer,
        },
        paragraphs: [
          "Alpha Rwirangira headlines Saturday for a night of worship and inspiration. The Rwandan singer won Tusker Project Fame, then its All Stars edition. He sings in English, Swahili and Kinyarwanda, in songs written to be sung back by the room.",
          "Church singing in Kigali led to stages across East Africa, including Songa Mbele with A.Y. and the album One Africa. Gospel songs such as Yamungu, Merci and Wow lead to November 7, when Edmonton gets the chance to sing them back.",
        ],
      },
    ],
    paragraphs: [
      "BridgeFest Canada 2026 was built for more than one voice in a dark room. Lumina Bridge Foundation made it a weekend where professional artists and the communities around them share a stage. This November, three singers carry that idea into the Old Strathcona Performing Arts Centre: Amani Kayumba, Gentil Misigaro and Alpha Rwirangira.",
      "The festival runs Friday, November 6 through Sunday, November 8, at 8426 Gateway Blvd NW, Edmonton. Music, comedy and dance share the programme. Entrance is free. Doors open at 5 PM and the show starts at 6. Registering helps the team prepare the house for you.",
      "You do not have to pick a favourite before you arrive. Amani Kayumba is there every night. Saturday holds both Gentil Misigaro and Alpha Rwirangira. Come for the voice you already know, or for the one you are about to learn.",
    ],
    closing: "Three singers. One weekend. The door is open.",
    facts: [
      { label: "Singers", value: "Amani Kayumba, Gentil Misigaro and Alpha Rwirangira" },
      { label: "Amani Kayumba", value: "All three nights, November 6, 7 and 8. Doors 5 PM, show 6 PM" },
      { label: "Gentil Misigaro", value: "Saturday, November 7. Doors 5 PM, show 6 PM" },
      { label: "Alpha Rwirangira", value: "Saturday, November 7 headline. Doors 5 PM, show 6 PM" },
      { label: "Venue", value: "Old Strathcona Performing Arts Centre, Edmonton" },
      { label: "Presented by", value: "Lumina Bridge Foundation" },
      { label: "Admission", value: "Free entrance" },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogHref(slug: string): string {
  return `/blog/${slug}`;
}
