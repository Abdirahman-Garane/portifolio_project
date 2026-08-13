import { GraduationCap, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { experience, education, achievements } from "@/data/experience";

export function JourneySection() {
  return (
    <section className="border-y border-hairline bg-muted/30">
      <div className="mx-auto max-w-[1280px] space-y-16 px-4 py-20 sm:px-6 lg:py-28">
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

        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Education"
              title="Learning journey"
            />
            <div className="mt-8 grid gap-5">
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
                    {edu.gpa && (
                      <span className="mt-1.5 inline-flex rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-primary">
                        GPA {edu.gpa}
                      </span>
                    )}
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
            <div className="mt-8 grid gap-5">
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
        </div>
      </div>
    </section>
  );
}
