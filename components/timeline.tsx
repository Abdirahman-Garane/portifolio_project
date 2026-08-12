"use client";

import { m } from "framer-motion";
import { Briefcase } from "lucide-react";
import type { ExperienceItem } from "@/types";
import { cn } from "@/lib/utils";

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative space-y-10 border-l border-hairline pl-8">
      {items.map((item, index) => (
        <m.li
          key={`${item.company}-${item.position}`}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative"
        >
          <span className="absolute -left-[37px] top-0.5 flex size-5 items-center justify-center rounded-full border border-hairline bg-background">
            <span
              className={cn(
                "size-2 rounded-full",
                item.current ? "bg-primary" : "bg-muted-foreground/50"
              )}
            />
          </span>

          <div className="group rounded-xl border border-hairline bg-card p-5 transition-colors hover:border-primary/40">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold">{item.position}</h3>
              <span
                className={cn(
                  "rounded-md px-2.5 py-1 text-[11px] font-semibold",
                  item.current
                    ? "bg-primary/15 text-primary"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {item.duration}
              </span>
            </div>
            <div className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="size-3.5" />
              <span className="font-medium text-foreground/80">{item.company}</span>
              <span aria-hidden="true">Â·</span>
              <span>{item.location}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
            <ul className="mt-4 space-y-2">
              {item.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </m.li>
      ))}
    </ol>
  );
}
