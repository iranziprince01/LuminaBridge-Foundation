"use client";

import { useCallback, useState } from "react";
import { ImageLightbox } from "@/components/events/image-lightbox";
import { PhotoSlot } from "@/components/events/photo-slot";
import type { ProgramPhoto } from "@/lib/lead-where-you-land-content";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  photos: readonly ProgramPhoto[];
  columns?: 2 | 3;
}

export function PhotoGallery({ photos, columns = 2 }: PhotoGalleryProps) {
  const [active, setActive] = useState<ProgramPhoto | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <div
        className={cn(
          "grid gap-4 md:grid-cols-2 md:gap-5",
          columns === 3 && "lg:grid-cols-3 lg:gap-6"
        )}
      >
        {photos.map((photo) =>
          photo.src ? (
            <button
              key={photo.label}
              type="button"
              onClick={() => setActive(photo)}
              aria-label={`View larger: ${photo.description}`}
              className="group block rounded-3xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <PhotoSlot
                photo={photo}
                className="aspect-[3/2] transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </button>
          ) : (
            <PhotoSlot key={photo.label} photo={photo} className="aspect-[3/2]" />
          )
        )}
      </div>

      {active?.src && (
        <ImageLightbox src={active.src} alt={active.description} onClose={close} />
      )}
    </>
  );
}
