"use client";

import { m } from "framer-motion";
import type { Skill } from "@/types";
import { Icon } from "@/components/icon";

const categoryColors: Record<Skill["category"], string> = {
  frontend: "#fcd535",
  backend: "#0ecb81",
  database: "#3b82f6",
  design: "#2dbdb6",
  tools: "#929aa5",
  devops: "#f6465d",
};

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const color = categoryColors[skill.category];

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      whileHover={{ y: -4 }}
      className="group flex items-center gap-4 rounded-xl border border-hairline bg-card p-4 transition-colors hover:border-primary/40 dark:border-[#2b3139]"
    >
      <div
        className="flex size-11 shrink-0 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}14`, borderColor: `${color}33`, color }}
      >
        <Icon name={skill.icon} className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h4 className="truncate text-sm font-semibold">{skill.name}</h4>
          <span
            className="font-mono text-xs font-medium tabular-nums"
            style={{ color }}
          >
            {skill.level}%
          </span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted dark:bg-[#2b3139]">
          <m.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + (index % 4) * 0.06 }}
          />
        </div>
      </div>
    </m.div>
  );
}
