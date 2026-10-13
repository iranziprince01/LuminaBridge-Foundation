import Image from "next/image";
import { ImageIcon } from "lucide-react";
import type { ProgramPhoto } from "@/lib/lead-where-you-land-content";
import { cn } from "@/lib/utils";

interface PhotoSlotProps {
  photo: ProgramPhoto;
  className?: string;
  sizes?: string;
}

export function PhotoSlot({
  photo,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: PhotoSlotProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)}>
      {photo.src ? (
        <Image src={photo.src} alt={photo.description} fill className="object-cover" sizes={sizes} />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-primary/20 bg-muted p-6 text-center">
          <ImageIcon className="h-8 w-8 text-primary/40" aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">
            {photo.label}
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {photo.description}
          </p>
        </div>
      )}
    </div>
  );
}
