import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, GraduationCap, Trophy } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import { SkillCard } from "@/components/skill-card";
import { personal } from "@/data/personal";
import { experience, education, achievements } from "@/data/experience";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Biography, professional summary, experience, education, and achievements of full-stack developer Abdirahman Garane.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Crafting software with <span className="text-primary">intent</span> and care.
          </>
        }
        description="Everything you'd want to know about how I work, what I've built, and what drives me."
      />

      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-6">
            <Reveal>
              <div className="relative overflow-hidden rounded-xl border border-hairline bg-card p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src="/avatar.svg"
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
                    <div key={label} className="flex items-center justify-between gap-4 border-b border-hairline pb-3 last:border-0 last:pb-0">
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
                eyebrow="Biography"
                title="A quick introduction"
              />
              <Reveal delay={0.1} className="mt-5 space-y-4">
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

            <div>
              <SectionHeader
                align="left"
                eyebrow="Experience"
                title="Where I've worked"
              />
              <div className="mt-8">
                <Timeline items={experience} />
              </div>
            </div>

            <div>
              <SectionHeader
                align="left"
                eyebrow="Education"
                title="Learning journey"
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {education.map((edu, i) => (
                  <Reveal key={edu.school} delay={i * 0.08}>
                    <div className="h-full rounded-xl border border-hairline bg-card p-6 transition-colors hover:border-primary/40">
                      <span className="flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                        <GraduationCap className="size-5" />
                      </span>
                      <h3 className="mt-4 text-base font-semibold">{edu.degree}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {edu.school} · {edu.location}
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-primary">{edu.duration}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                align="left"
                eyebrow="Achievements"
                title="Milestones worth noting"
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {achievements.map((achievement, i) => (
                  <Reveal key={achievement.title} delay={i * 0.08}>
                    <div className="flex h-full gap-4 rounded-xl border border-hairline bg-card p-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                        <Trophy className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold">{achievement.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionHeader
                align="left"
                eyebrow="Skills"
                title="Core strengths"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {skills
                  .filter((s) => s.level >= 88)
                  .map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
              </div>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/skills">
                  View all skills <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
