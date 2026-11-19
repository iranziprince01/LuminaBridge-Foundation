import { siteConfig } from "@/lib/site-config";

export interface BridgeFestVideo {
  id: string;
  title: string;
  description: string;
  /** Optional day key: friday | saturday | sunday */
  dayId?: "friday" | "saturday" | "sunday";
  /** Optional artist name for faces/artist placement */
  artist?: string;
  kind: "night" | "artist";
}

/** YouTube highlights from Lumina Bridge Foundation TV. */
export const bridgefestVideos: BridgeFestVideo[] = [
  {
    id: "Y1VbjLPIpKs",
    title: "Day 1 highlight",
    description: "Opening Night at BridgeFest Canada 2026 — energy, music, and community from the first song.",
    dayId: "friday",
    kind: "night",
  },
  {
    id: "e7EjJS5X6AU",
    title: "Day 2 highlight",
    description: "The Main Event — a full house of worship, music, and celebration on Saturday night.",
    dayId: "saturday",
    kind: "night",
  },
  {
    id: "1RpAcpasdXE",
    title: "Someje live",
    description: "Someje on stage at BridgeFest Canada 2026.",
    artist: "Someje",
    kind: "artist",
  },
  {
    id: "NZzprkh80kc",
    title: "Alpha Rwirangira live",
    description: "Alpha Rwirangira headlines Saturday with a night of worship and inspiration.",
    artist: "Alpha Rwirangira",
    dayId: "saturday",
    kind: "artist",
  },
];

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedUrl(videoId: string) {
  // rel=0 reduces off-channel suggestions; modest branding keeps focus on our content.
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
}

export function youtubeThumbnailUrl(videoId: string, quality: "hq" | "max" = "hq") {
  return quality === "max"
    ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export const youtubeChannelUrl = siteConfig.social.youtube;

export function getBridgeFestVideosForDay(dayId: string) {
  return bridgefestVideos.filter((video) => video.dayId === dayId);
}

export function getBridgeFestArtistVideos() {
  return bridgefestVideos.filter((video) => video.kind === "artist");
}

export function getBridgeFestNightVideos() {
  return bridgefestVideos.filter((video) => video.kind === "night");
}
