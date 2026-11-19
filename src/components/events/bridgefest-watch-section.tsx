import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";
import { PageContainer } from "@/components/shared/page-container";
import { Section } from "@/components/shared/section";
import { YouTubeIcon } from "@/components/shared/social-icons";
import { YouTubeVideoGrid } from "@/components/shared/youtube-video-card";
import { Button } from "@/components/ui/button";
import {
  bridgefestVideos,
  getBridgeFestArtistVideos,
  getBridgeFestVideosForDay,
  youtubeChannelUrl,
} from "@/lib/bridgefest-videos";
import { cn } from "@/lib/utils";

const eyebrowClass = "text-sm font-bold uppercase tracking-[0.2em] text-secondary";
const titleClass =
  "font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl";

interface BridgeFestDayVideosProps {
  dayId: string;
  className?: string;
}

/** Contextual night highlight reel under a day gallery. */
export function BridgeFestDayVideos({ dayId, className }: BridgeFestDayVideosProps) {
  const videos = getBridgeFestVideosForDay(dayId).filter((video) => video.kind === "night");

  if (videos.length === 0) return null;

  const heading =
    dayId === "friday"
      ? "Opening Night on film"
      : dayId === "saturday"
        ? "Main Event on film"
        : "Closing Night on film";

  return (
    <FadeUp className={cn("mt-10", className)}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">Watch</p>
          <p className="mt-1 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {heading}
          </p>
        </div>
        <Link
          href={youtubeChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-secondary"
        >
          <YouTubeIcon className="h-4 w-4" />
          Lumina Bridge Foundation TV
        </Link>
      </div>
      <YouTubeVideoGrid videos={videos} featuredFirst />
    </FadeUp>
  );
}

interface BridgeFestWatchSectionProps {
  tone?: "white" | "green";
  /** Include all festival videos in one gallery. */
  mode?: "all" | "artists";
}

/** Full watch hub directing viewers to Lumina Bridge Foundation TV. */
export function BridgeFestWatchSection({
  tone = "white",
  mode = "all",
}: BridgeFestWatchSectionProps) {
  const videos = mode === "artists" ? getBridgeFestArtistVideos() : bridgefestVideos;

  return (
    <Section tone={tone} backdrop={tone === "white" ? "orbs" : "none"} id="watch">
      <PageContainer>
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className={eyebrowClass}>On YouTube</p>
          <h2 className={cn("mt-4", titleClass)}>
            {mode === "artists" ? "Artist performances" : "Watch BridgeFest Canada 2026"}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Relive the nights and stage moments on Lumina Bridge Foundation TV — then explore more
            stories from our community on our channel.
          </p>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-10 sm:mt-12">
          <YouTubeVideoGrid videos={videos} />
        </FadeUp>

        <FadeUp delay={0.12} className="mt-10 flex justify-center">
          <Button variant="outline" asChild>
            <Link href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer">
              <YouTubeIcon className="h-4 w-4" />
              Subscribe on YouTube
            </Link>
          </Button>
        </FadeUp>
      </PageContainer>
    </Section>
  );
}
