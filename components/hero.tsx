"use client";

import { m } from "framer-motion";
import { ArrowUpRight, Download, Mail, Star, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { Counter } from "@/components/counter";

const EASE = [0.22, 1, 0.36, 1] as const;

const skillBars = [
  { label: "Frontend", value: 96 },
  { label: "Backend", value: 88 },
  { label: "Design", value: 86 },
];

const heroStats = [
  { value: 25, suffix: "+", label: "Projects" },
  { value: 4, suffix: "+", label: "Years" },
  { value: 95, suffix: "+", label: "Lighthouse" },
];

function HeroPanel() {
  return (
    <m.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-xl border border-hairline bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-muted-soft/70" />
            <span className="size-2.5 rounded-full bg-surface-strong" />
            <span className="size-2.5 rounded-full bg-hairline" />
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            <TerminalSquare className="size-3" /> dev / portfolio
          </span>
          <span className="flex items-center gap-1 rounded-md bg-primary/15 px-2 py-0.5 text-[11px] font-semibold text-primary">
            <Star className="size-3 fill-primary text-primary" /> 95+ score
          </span>
        </div>

        <div className="space-y-5 p-5">
          <div className="grid grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-hairline bg-muted/40 p-3.5"
              >
                <div className="font-mono text-2xl font-bold tabular-nums text-primary">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {skillBars.map((skill, i) => (
              <div key={skill.label}>
                <div className="mb-1.5 flex items-center justify-between text-[13px]">
                  <span className="font-medium text-foreground">{skill.label}</span>
                  <span className="font-mono text-muted-foreground">{skill.value}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <m.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: EASE, delay: 0.7 + i * 0.15 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-hairline pt-4">
            {["Next.js", "TypeScript", "Tailwind", "Supabase"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-hairline bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -right-3 -top-3 hidden rounded-lg border border-hairline bg-card px-3 py-2 text-xs font-semibold shadow-lg sm:block">
        Ships to production
      </div>
    </m.div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0" aria-hidden="true" />
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card/70 px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-up opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-up" />
              </span>
              {personal.availability}
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="mt-6 max-w-xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-balance sm:text-5xl lg:text-[64px]"
            >
              Building premium{" "}
              <span className="text-primary">web experiences</span> that feel effortless.
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I'm {personal.name} — a full-stack developer building fast, accessible products
              with Next.js, TypeScript, and careful design.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" variant="pill">
                <Link href="/projects">
                  View my work
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={personal.resumeUrl} download>
                  <Download className="size-4" />
                  Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`mailto:${personal.email}`}>
                  <Mail className="size-4" />
                  Email me
                </a>
              </Button>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-1.5"
            >
              {socials.slice(0, 5).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-md border border-hairline text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <social.icon className="size-[18px]" />
                </a>
              ))}
            </m.div>
          </div>

          <HeroPanel />
        </div>
      </div>
    </section>
  );
}
