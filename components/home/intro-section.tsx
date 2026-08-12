import { ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { personal } from "@/data/personal";
import { statistics } from "@/data/personal";
import { Counter } from "@/components/counter";

export function IntroSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            align="left"
            eyebrow="About me"
            title={
              <>
                A developer who treats{" "}
                <span className="text-primary">software as a craft</span>.
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
          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/about">
                More about me <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={personal.resumeUrl} download>
                <Download className="size-4" /> Download resume
              </Link>
            </Button>
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
      </div>
    </section>
  );
}
