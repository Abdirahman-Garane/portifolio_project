"use client";

import { m } from "framer-motion";
import { Reveal } from "@/components/reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-30" aria-hidden="true" />
      <m.div
        className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1280px] px-4 pb-14 pt-32 sm:px-6 sm:pb-16">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card/70 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur dark:bg-[#1e2329]/70">
            <span className="size-1.5 rounded-full bg-primary" />
            {eyebrow}
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl lg:text-[56px]">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
