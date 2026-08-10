"use client";

import { m } from "framer-motion";

const marqueeContent = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "REST APIs",
  "Figma",
  "Git",
  "Docker",
];

export function TechMarquee() {
  const items = [...marqueeContent, ...marqueeContent];

  return (
    <div className="relative overflow-hidden border-y border-hairline py-5">
      <div className="mask-fade-x flex">
        <m.div
          className="flex shrink-0 items-center gap-12 pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </m.div>
      </div>
    </div>
  );
}
