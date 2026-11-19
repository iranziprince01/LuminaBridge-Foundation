import { img } from "@/lib/image-urls";

const BF26_VERSION = "20261119b";

export function bf26Photo(path: string) {
  return `${img(path)}?v=${BF26_VERSION}`;
}

export interface BlogImageRef {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const dims = {
  portrait: { width: 4479, height: 6719 },
  landscape: { width: 6719, height: 4479 },
  tall: { width: 4479, height: 5840 },
  portraitAlt: { width: 3982, height: 5115 },
  landscapeWide: { width: 6720, height: 4480 },
  landscapeAlt: { width: 6105, height: 4479 },
  bob: { width: 4223, height: 5566 },
  hosts: { width: 4002, height: 5600 },
} as const;

function photo(
  file: string,
  alt: string,
  size: keyof typeof dims = "landscape"
): BlogImageRef {
  return {
    src: bf26Photo(`/BF26/${file}`),
    alt,
    ...dims[size],
  };
}

export interface HighlightQuote {
  quote: string;
  name: string;
  role: string;
}

export interface HighlightDay {
  id: string;
  label: string;
  date: string;
  title: string;
  summary: string;
  performers: string;
  featured: BlogImageRef;
  gallery: BlogImageRef[];
  /** `mosaic` lets portraits span rows; `uniform` keeps equal cells (e.g. 4×2). */
  galleryLayout?: "mosaic" | "uniform";
}

export interface HighlightPlaceholder {
  name: string;
  role: string;
  note?: string;
  image?: BlogImageRef;
}

export interface BlogHighlight {
  kicker: string;
  intro: string[];
  introImage: BlogImageRef;
  culturesTitle: string;
  culturesBody: string[];
  cultures: string[];
  days: HighlightDay[];
  quotesIntro: string;
  quotes: HighlightQuote[];
  placeholdersTitle: string;
  placeholdersBody: string;
  placeholders: HighlightPlaceholder[];
  thanks: string[];
  thanksImage: BlogImageRef;
  closing: string;
}

export const bridgefestHighlight: BlogHighlight = {
  kicker: "Event highlight",
  intro: [
    "This November, we made Edmontonians travel around the world without ever leaving Edmonton.",
    "From November 6 to 8, 2026, the Old Strathcona Performing Arts Centre became a meeting place for cultures from across the globe. BridgeFest Canada 2026 was three nights of multicultural music, dance and joy. Professional artists performed, community talent took the stage, and people met, connected and shared their stories.",
    "Hundreds and hundreds of people came through our doors over the three nights. Families, newcomers, students, long-time Edmontonians and friends sat side by side and left as one community.",
  ],
  introImage: photo(
    "BFD108.jpg",
    "A speaker addresses the room during BridgeFest Canada 2026 at the Old Strathcona Performing Arts Centre.",
    "tall"
  ),
  culturesTitle: "A world of cultures on one stage",
  culturesBody: [
    "More than 10 countries were represented at BridgeFest. East Africa was there, with Rwanda, Burundi and Congo. So were Nigeria, Cameroon, the Caribbean and many more. Our artists sang in different languages and shared rhythms, dances and stories from their homelands.",
    "By the end of the weekend, everyone in the room had a taste of every culture on that stage.",
  ],
  cultures: [
    "Rwanda",
    "Burundi",
    "Congo",
    "Nigeria",
    "Cameroon",
    "Caribbean",
    "and many more",
  ],
  days: [
    {
      id: "friday",
      label: "Friday",
      date: "November 6",
      title: "Opening Night",
      summary:
        "We opened BridgeFest with powerful performances from Amani Kayumba and Bobo Muyoboke. The talented MC Midey guided the night with warmth and energy, and the crowd felt it from the very first song.",
      performers: "Amani Kayumba · Bobo Muyoboke · MC Midey",
      galleryLayout: "mosaic",
      featured: photo(
        "BFD107.jpg",
        "Artists, hosts and community members gather on stage at BridgeFest Canada 2026 opening night in Edmonton.",
        "landscape"
      ),
      gallery: [
        photo(
          "BFD101.jpg",
          "A performer speaks into a microphone on stage during BridgeFest Canada 2026 opening night.",
          "portrait"
        ),
        photo(
          "BFD102.jpg",
          "BridgeFest Canada 2026 opening night moment at the Old Strathcona Performing Arts Centre.",
          "landscapeAlt"
        ),
        photo(
          "BFD103.jpg",
          "Audience and stage atmosphere on Friday night at BridgeFest Canada 2026.",
          "landscape"
        ),
        photo(
          "BFD104.jpg",
          "A BridgeFest Canada 2026 performer captured during Friday opening night.",
          "portrait"
        ),
        photo(
          "BFD105.jpg",
          "Guests seated and engaged during BridgeFest Canada 2026 opening night in Edmonton.",
          "landscape"
        ),
        photo(
          "BFD106.jpg",
          "Community gathering during Friday night of BridgeFest Canada 2026.",
          "landscape"
        ),
      ],
    },
    {
      id: "saturday",
      label: "Saturday",
      date: "November 7",
      title: "The Main Event",
      summary:
        "Our biggest night brought Alpha Rwirangira, Gentil Misigaro, Someje, Bobo Muyoboke and Amani Kayumba to one stage, again with MC Midey leading the way. The room was full, and the music, worship and dancing went on all evening.",
      performers:
        "Alpha Rwirangira · Gentil Misigaro · Someje · Bobo Muyoboke · Amani Kayumba · MC Midey",
      galleryLayout: "uniform",
      featured: photo(
        "BFD209.jpg",
        "A full house enjoys Saturday night at BridgeFest Canada 2026 in Edmonton.",
        "landscape"
      ),
      gallery: [
        photo(
          "BFD201.jpg",
          "Three speakers and performers on stage during BridgeFest Canada 2026 main event Saturday.",
          "landscape"
        ),
        photo(
          "BFD202.jpg",
          "Saturday night performance energy at BridgeFest Canada 2026.",
          "landscape"
        ),
        photo(
          "BFD203.jpg",
          "Artists and community connect during BridgeFest Canada 2026 Saturday night.",
          "landscape"
        ),
        photo(
          "BFD204.jpg",
          "Guests experience multicultural music on Saturday at BridgeFest Canada 2026.",
          "landscape"
        ),
        photo(
          "BFD205.jpg",
          "Four BridgeFest Canada 2026 artists and partners pose together on Saturday night.",
          "landscape"
        ),
        photo(
          "BFD206.jpg",
          "Saturday main event moment at BridgeFest Canada 2026 in Edmonton.",
          "landscape"
        ),
        photo(
          "BFD2010.jpg",
          "Crowd and stage atmosphere at BridgeFest Canada 2026 main event.",
          "landscape"
        ),
        photo(
          "BFD208.jpg",
          "Live music and celebration during BridgeFest Canada 2026 Saturday night.",
          "landscape"
        ),
      ],
    },
    {
      id: "sunday",
      label: "Sunday",
      date: "November 8",
      title: "Closing Night",
      summary:
        "We closed in style with Amani Kayumba and Bobo Muyoboke, together with an open stage where community members showcased their own talents. Young people also got the chance to hear advice and encouragement from the artists.",
      performers: "Amani Kayumba · Bobo Muyoboke · Community open stage",
      galleryLayout: "mosaic",
      featured: photo(
        "BFD301.jpg",
        "Dancers and singers fill the stage with joy on BridgeFest Canada 2026 closing night.",
        "landscapeWide"
      ),
      gallery: [
        photo(
          "BFD302.jpg",
          "Guests watch performances during BridgeFest Canada 2026 closing night.",
          "landscapeWide"
        ),
        photo(
          "BFD303.jpg",
          "Community celebration on Sunday at BridgeFest Canada 2026.",
          "landscapeWide"
        ),
        photo(
          "BFD304.jpg",
          "Closing night atmosphere at BridgeFest Canada 2026 in Edmonton.",
          "landscape"
        ),
        photo(
          "BFD305.jpg",
          "Audience and artists share the final evening of BridgeFest Canada 2026.",
          "landscape"
        ),
        photo(
          "BFD306.jpg",
          "Sunday open-stage energy at BridgeFest Canada 2026.",
          "landscape"
        ),
        photo(
          "BFD307.jpg",
          "Portrait from BridgeFest Canada 2026 closing night.",
          "portraitAlt"
        ),
        photo(
          "BFD308.jpg",
          "Lumina Bridge Foundation team and partners celebrate BridgeFest Canada 2026 closing night.",
          "landscape"
        ),
        photo(
          "BFD309.jpg",
          "Final night community moment at BridgeFest Canada 2026.",
          "landscapeWide"
        ),
        photo(
          "BFD3010.jpg",
          "Closing night portrait from BridgeFest Canada 2026 at Old Strathcona Performing Arts Centre.",
          "portrait"
        ),
      ],
    },
  ],
  quotesIntro:
    "Guests danced, sang along, relaxed and simply enjoyed being together. Many told us it felt like home, a place where every culture was seen and celebrated.",
  quotes: [
    {
      quote:
        "This was a great atmosphere, a great event, and a great space where talent shines. Talented people presented different cultures and sang in different languages. It was amazing for everyone who attended, and for us who hosted the event. BridgeFest made people travel around the world while still sitting in Edmonton.",
      name: "MC Midey",
      role: "Host",
    },
    {
      quote:
        "It was amazing! Amazing performances and an amazingly organized event. Everything was in place.",
      name: "Valerie",
      role: "Guest",
    },
    {
      quote:
        "The music, the event, everything was great and well organized, right down to the little things. I like your professionalism and the way you kept the atmosphere of the event. We are really glad with the way you worked with us and followed everything through. You have an amazing executive team, and you did an amazing job.",
      name: "John",
      role: "Old Strathcona Performing Arts Centre",
    },
  ],
  placeholdersTitle: "Faces of the weekend",
  placeholdersBody:
    "The artists, hosts and guests who helped make BridgeFest Canada 2026 unforgettable.",
  placeholders: [
    {
      name: "Amani Kayumba",
      role: "Artist",
      image: photo(
        "BFD104.jpg",
        "Amani Kayumba performing at BridgeFest Canada 2026.",
        "portrait"
      ),
    },
    {
      name: "Bobo Muyoboke",
      role: "Artist",
      image: photo(
        "Bob.jpg",
        "Bobo Muyoboke at BridgeFest Canada 2026.",
        "bob"
      ),
    },
    {
      name: "Alpha Rwirangira",
      role: "Artist",
      image: photo(
        "BFD204.jpg",
        "Alpha Rwirangira performing at BridgeFest Canada 2026.",
        "landscape"
      ),
    },
    {
      name: "Gentil Misigaro",
      role: "Artist",
      image: photo(
        "BFD202.jpg",
        "Gentil Misigaro performing at BridgeFest Canada 2026.",
        "landscape"
      ),
    },
    {
      name: "Someje",
      role: "Artist",
      image: photo(
        "Someje.jpg",
        "Someje performing at BridgeFest Canada 2026.",
        "landscape"
      ),
    },
    {
      name: "MC Midey",
      role: "MC",
      note: "Portrait coming soon",
    },
    {
      name: "Valerie",
      role: "Guest",
      note: "Portrait coming soon",
    },
    {
      name: "John",
      role: "Guest",
      note: "Portrait coming soon",
    },
  ],
  thanks: [
    "A huge thank you to our amazing artists, our MCs, our volunteers and the hardworking Lumina Bridge Foundation team, who made every detail come together. Thank you also to every person who came out and became part of the BridgeFest family.",
    "Finally, we are deeply grateful to the Government of Canada through Canadian Heritage for its support and funding, which made BridgeFest Canada 2026 possible.",
  ],
  thanksImage: photo(
    "Hosts.jpg",
    "BridgeFest Canada 2026 hosts of Lumina Bridge Foundation standing together at the Old Strathcona Performing Arts Centre.",
    "hosts"
  ),
  closing: "See you at BridgeFest 2027!",
};

const highlightFacts = [
  { label: "Dates", value: "November 6–8, 2026" },
  { label: "Venue", value: "Old Strathcona Performing Arts Centre, Edmonton" },
  {
    label: "Cultures",
    value: "Rwanda, Burundi, Congo, Nigeria, Cameroon, Caribbean and more",
  },
  {
    label: "Support",
    value: "Government of Canada through Canadian Heritage",
  },
];

const allHighlightImages: BlogImageRef[] = bridgefestHighlight.days.flatMap(
  (day) => [day.featured, ...day.gallery]
);

export const bridgefestHighlightPost = {
  slug: "bridgefest-canada-2026-highlights",
  title: "BridgeFest Canada 2026: A Journey Around the World, Right Here in Edmonton",
  excerpt:
    "Three nights of multicultural music, dance and joy at the Old Strathcona Performing Arts Centre. Hundreds gathered, more than ten countries were heard, and Edmonton travelled the world without leaving home.",
  category: "Event highlight",
  published: "November 19, 2026",
  publishedISO: "2026-11-19",
  coverLayout: "photo" as const,
  cover: photo(
    "BFD301.jpg",
    "Dancers and singers celebrate together on stage at BridgeFest Canada 2026 closing night in Edmonton.",
    "landscapeWide"
  ),
  images: allHighlightImages,
  paragraphs: bridgefestHighlight.intro,
  closing: bridgefestHighlight.closing,
  facts: highlightFacts,
  highlight: bridgefestHighlight,
};
