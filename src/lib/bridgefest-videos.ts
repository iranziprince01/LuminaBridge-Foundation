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
    title: "Day 1",
    description: "",
    dayId: "friday",
    kind: "night",
  },
  {
    id: "e7EjJS5X6AU",
    title: "Day 2",
    description: "",
    dayId: "saturday",
    kind: "night",
  },
  {
    id: "1RpAcpasdXE",
    title: "Someje Live",
    description: "",
    artist: "Someje",
    kind: "artist",
  },
  {
    id: "NZzprkh80kc",
    title: "Alpha Live",
    description: "",
    artist: "Alpha Rwirangira",
    dayId: "saturday",
    kind: "artist",
  },
];

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedUrl(videoId: string) {
  // HD-friendly embed: full controls, fewer off-channel suggestions.
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`;
}

/** Prefer maxres (1280×720); hq is the letterboxed 480p fallback. */
export function youtubeThumbnailUrl(videoId: string, quality: "hq" | "max" = "max") {
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
