"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

/** Portaled to body so transformed motion ancestors cannot trap `position: fixed`. */
export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-primary shadow-lg transition-colors hover:bg-gold-cream"
      >
        <X className="h-6 w-6" />
      </button>
      <div className="relative h-[85vh] w-full max-w-5xl">
        <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" />
      </div>
    </div>,
    document.body
  );
}
