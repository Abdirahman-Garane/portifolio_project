"use client";

import { m } from "framer-motion";
import { Check } from "lucide-react";
import type { Service } from "@/types";
import { Icon } from "@/components/icon";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-hairline bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 dark:border-[#2b3139]"
    >
      <div
        className="absolute -right-8 -top-8 size-28 rounded-full opacity-[0.07] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.14]"
        style={{ backgroundColor: service.accent }}
        aria-hidden="true"
      />
      <div
        className="flex size-12 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${service.accent}14`, borderColor: `${service.accent}33`, color: service.accent }}
      >
        <Icon name={service.icon} className="size-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em]">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <ul className="mt-5 space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <Check className="size-3.5 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </m.div>
  );
}
