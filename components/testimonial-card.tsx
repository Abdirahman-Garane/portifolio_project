"use client";

import { m } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <m.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 dark:border-[#2b3139]"
    >
      <Quote
        className="absolute right-6 top-6 size-8 text-primary opacity-15 transition-opacity duration-300 group-hover:opacity-30"
        aria-hidden="true"
      />

      <div className="flex gap-1" aria-label={`Rated ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={i < testimonial.rating ? "size-4 fill-primary text-primary" : "size-4 text-muted-foreground/30"}
            aria-hidden="true"
          />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        â€œ{testimonial.review}â€
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-5 dark:border-[#2b3139]">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {testimonial.initials}
        </span>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold">{testimonial.name}</div>
          <div className="truncate text-xs text-muted-foreground">
            {testimonial.position} Â· {testimonial.company}
          </div>
        </div>
      </figcaption>
    </m.figure>
  );
}
