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

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published: string;
  publishedISO: string;
  cover: BlogImage;
  images: BlogImage[];
  paragraphs: string[];
  facts: BlogFact[];
}

const flyerSize = { width: 2160, height: 2880 };

export const blogPosts: BlogPost[] = [
  {
    slug: "gentil-misigaro-bridgefest-canada-2026",
    title: "Gentil Misigaro Takes the Stage at BridgeFest Canada 2026",
    excerpt:
      "The Canada-based gospel singer joins BridgeFest as special guest, with a live set on Saturday, November 7 at the Old Strathcona Performing Arts Centre.",
    category: "Artist announcement",
    published: "October 20, 2026",
    publishedISO: "2026-10-20",
    cover: {
      src: img("/Blog01.jpeg"),
      alt: "BridgeFest Canada 2026 flyer of singer Gentil Misigaro performing in a white jacket and red shirt, announced as special guest for November 6 to 8, 2026 in Edmonton.",
      ...flyerSize,
    },
    images: [
      {
        src: img("/Blog01.jpeg"),
        alt: "Colour BridgeFest Canada 2026 flyer featuring Gentil Misigaro with one arm raised, microphone in hand, under the Lumina Bridge Foundation name.",
        ...flyerSize,
      },
      {
        src: img("/Blog02.jpeg"),
        alt: "Black and white BridgeFest Canada 2026 portrait flyer of Gentil Misigaro singing into a microphone.",
        ...flyerSize,
      },
    ],
    paragraphs: [
      "Lumina Bridge Foundation is bringing a voice audiences already know by heart to BridgeFest Canada 2026. Gentil Misigaro, the Canada-based Rwandan gospel singer, worship leader, and producer, joins the festival as special guest. He performs live on Saturday, November 7, from 5 to 9 PM, at the Old Strathcona Performing Arts Centre in Edmonton.",
      "BridgeFest runs from Friday, November 6 to Sunday, November 8. Music, comedy, and dance share the weekend, and entry is free. Saturday evening is built around a full live set from an artist who has spent years turning a stage into a gathering place.",
      "His path to that stage started far from Gateway Boulevard. Born in the Democratic Republic of Congo, Gentil began playing guitar at six and singing at twelve, in a family where music was already the language of the house. Conflict moved that family from Congo to Rwanda and then to Uganda. Through those years, songs were how he found work, how he kept courage, and how he stayed close to the people around him.",
      "In February 2010 he arrived in Winnipeg with his family and introduced himself the way he still does: as a musician. That introduction opened doors. He taught music to young people, produced his own recordings, and built a catalogue that travels easily between languages and rooms. Listeners know him for songs such as Buri Munsi, Biratungana, and Hano ku Isi, and for albums including Buri Munsi and Amashimwe. He has carried that music through Canada, the United States, Europe, and East Africa.",
      "What stays consistent is the invitation inside the songs. Come closer. Sing along. Leave with more hope than you arrived with. Canadian Immigrant told that Winnipeg story for the same reason audiences keep showing up: the music is meant to be useful, not only admired.",
      "That invitation is also the point of BridgeFest. Lumina Bridge Foundation built the festival so professional artists and the communities around them can meet in one room. A Saturday night with Gentil Misigaro belongs there. Expect gospel warmth, a chorus the house can join, and a crowd that will not stay seated for long.",
      "The details are simple. The festival is at the Old Strathcona Performing Arts Centre, 8426 Gateway Blvd NW, Edmonton. Gentil performs Saturday, November 7, from 5 to 9 PM. Entrance is free, and registering helps the team prepare the house for you.",
    ],
    facts: [
      { label: "Artist", value: "Gentil Misigaro, singer" },
      { label: "Performs", value: "Saturday, November 7, 2026, 5 to 9 PM" },
      { label: "Festival dates", value: "November 6, 7 and 8, 2026" },
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
