import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { personal, statistics } from "@/data/personal";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="space-y-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-hairline bg-card p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Abdirahman Garane"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-hairline bg-card p-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Quick facts
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Role", personal.role],
                  ["Location", personal.location],
                  ["Email", personal.email],
                  ["Experience", "4+ years"],
                  ["Focus", "Frontend · Full-stack"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-hairline pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="text-right font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
              <Button asChild size="lg" className="mt-5 w-full">
                <Link href={personal.resumeUrl} download>
                  <Download className="size-4" /> Download resume
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="space-y-14">
          <div>
            <SectionHeader
              align="left"
              eyebrow="About me"
              title={
                <>
                  A developer who treats <span className="text-primary">software as a craft</span>.
                </>
              }
            />
            <Reveal delay={0.1} className="mt-6 space-y-4">
              {personal.bio.map((paragraph) => (
                <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <div>
            <SectionHeader
              align="left"
              eyebrow="Professional summary"
              title="How I approach projects"
            />
            <Reveal delay={0.1} className="mt-5">
              <p className="rounded-xl border-l-2 border-primary bg-muted/40 p-5 text-pretty leading-relaxed text-foreground/90">
                {personal.professionalSummary}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {statistics.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className={i % 2 === 1 ? "sm:translate-y-6" : ""}
              >
                <div className="flex h-full flex-col gap-2 rounded-xl border border-hairline bg-card p-6 transition-colors hover:border-primary/40">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-mono text-4xl font-bold tabular-nums tracking-[-0.02em] text-primary"
                  />
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Button asChild variant="outline">
              <Link href="/projects">
                Explore my work <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
