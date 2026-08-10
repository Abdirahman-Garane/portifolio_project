"use client";

import { AnimatePresence, m } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div>
      <button
        type="button"
        onClick={() => setLightbox(true)}
        className="group relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-hairline bg-muted dark:border-[#2b3139]"
        aria-label="Open image gallery"
      >
        <AnimatePresence mode="wait">
          <m.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`${alt} — view ${active + 1}`}
              fill
              sizes="(max-width: 1200px) 100vw, 900px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </m.div>
        </AnimatePresence>
        <span className="absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-md bg-card/90 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
          <ChevronRight className="size-4" />
        </span>
      </button>

      <div className="mt-3 flex gap-2.5">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show view ${i + 1}`}
            className={cn(
              "relative aspect-[16/10] w-24 overflow-hidden rounded-lg border transition-all",
              i === active
                ? "border-primary ring-2 ring-primary/30"
                : "border-hairline opacity-60 hover:opacity-100 dark:border-[#2b3139]"
            )}
          >
            <Image src={src} alt="" fill sizes="96px" className="object-cover" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => setLightbox(false)}
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>
            <button
              className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="relative aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-xl" onClick={(e) => e.stopPropagation()}>
              <Image src={images[active]} alt={`${alt} — view ${active + 1}`} fill sizes="1024px" className="object-contain" />
            </div>
            <button
              className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="size-5" />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
