"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import {
  type BridgeFestVideo,
  youtubeEmbedUrl,
  youtubeThumbnailUrl,
} from "@/lib/bridgefest-videos";
import { cn } from "@/lib/utils";

interface YouTubeVideoCardProps {
  video: BridgeFestVideo;
  className?: string;
  /** Larger featured treatment for night highlight reels. */
  featured?: boolean;
}

export function YouTubeVideoCard({ video, className, featured = false }: YouTubeVideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = youtubeThumbnailUrl(video.id, "max");

  return (
    <article className={cn("group", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-black shadow-sm ring-1 ring-black/10",
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
              unoptimized
              sizes={
                featured
                  ? "(max-width: 1024px) 100vw, 70vw"
                  : "(max-width: 640px) 100vw, 50vw"
              }
              className="object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-[4.5rem] sm:rounded-[0.85rem]">
                <Play className="ml-0.5 h-7 w-7 fill-current sm:h-8 sm:w-8" aria-hidden />
              </span>
            </span>
          </button>
        )}
      </div>

      <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
        {video.title}
      </h3>
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
        "grid gap-6 sm:gap-8",
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
