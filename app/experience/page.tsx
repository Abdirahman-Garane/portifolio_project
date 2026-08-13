import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { experience, education } from "@/data/experience";
import { personal } from "@/data/personal";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience and education timeline of full-stack developer Abdirahman Garane.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            My professional <span className="text-primary">journey</span>.
          </>
        }
        description="The roles, projects, and learning that shaped how I build software."
      />

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeader align="left" eyebrow="Career" title="Work experience" />
            <div className="mt-8">
              <Timeline items={experience} />
            </div>
          </div>

          <div className="lg:pt-16">
            <div className="lg:sticky lg:top-24">
              <SectionHeader align="left" eyebrow="Education" title="Formal learning" />
              <div className="mt-8 space-y-5">
                {education.map((edu, i) => (
                  <Reveal key={edu.school} delay={i * 0.08}>
                    <div className="rounded-xl border border-hairline bg-card p-6 transition-colors hover:border-primary/40">
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                          <GraduationCap className="size-5" />
                        </span>
                        <span className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
                          {edu.duration}
                        </span>
                        {edu.gpa && (
                          <span className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                            GPA {edu.gpa}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-4 text-base font-semibold">{edu.degree}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {edu.school} · {edu.location}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.16} className="mt-8">
                <div className="rounded-xl border border-primary/30 bg-primary/8 p-6">
                  <h3 className="text-lg font-semibold">Want the full story?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Download my résumé for a complete, print-friendly overview of my experience,
                    education, and skills.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button asChild size="lg">
                      <Link href={personal.resumeUrl} download>
                        <Download className="size-4" /> Download résumé
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/contact">
                        Get in touch <ArrowUpRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
