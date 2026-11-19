"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import {
  type BridgeFestVideo,
  youtubeChannelUrl,
  youtubeEmbedUrl,
  youtubeThumbnailUrl,
  youtubeWatchUrl,
} from "@/lib/bridgefest-videos";
import { YouTubeIcon } from "@/components/shared/social-icons";
import { cn } from "@/lib/utils";

interface YouTubeVideoCardProps {
  video: BridgeFestVideo;
  className?: string;
  /** Larger featured treatment for night highlight reels. */
  featured?: boolean;
}

export function YouTubeVideoCard({ video, className, featured = false }: YouTubeVideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = youtubeThumbnailUrl(video.id, "hq");
  const watchUrl = youtubeWatchUrl(video.id);

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-border/60",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-primary",
          featured ? "aspect-[16/9]" : "aspect-video"
        )}
      >
        {playing ? (
          <iframe
            src={`${youtubeEmbedUrl(video.id)}&autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 block w-full cursor-pointer text-left"
            aria-label={`Play ${video.title}`}
          >
            <Image
              src={thumbnail}
              alt=""
              fill
              sizes={featured ? "(max-width: 1024px) 100vw, 70vw" : "(max-width: 640px) 100vw, 50vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                <Play className="h-6 w-6 fill-current sm:h-7 sm:w-7" aria-hidden />
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
          {video.kind === "night" ? "Night highlight" : "Artist performance"}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
          {video.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-secondary"
          >
            <YouTubeIcon className="h-4 w-4" />
            Watch on YouTube
          </a>
          <Link
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-muted-foreground transition-colors hover:text-secondary"
          >
            Visit our channel
          </Link>
        </div>
      </div>
    </article>
  );
}

interface YouTubeVideoGridProps {
  videos: BridgeFestVideo[];
  className?: string;
  featuredFirst?: boolean;
}

export function YouTubeVideoGrid({
  videos,
  className,
  featuredFirst = false,
}: YouTubeVideoGridProps) {
  if (videos.length === 0) return null;

  if (featuredFirst && videos.length === 1) {
    return (
      <div className={className}>
        <YouTubeVideoCard video={videos[0]} featured />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid gap-5 sm:gap-6",
        videos.length === 1 ? "max-w-3xl" : "sm:grid-cols-2",
        className
      )}
    >
      {videos.map((video) => (
        <YouTubeVideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
