import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { SkillCard } from "@/components/skill-card";
import { Reveal } from "@/components/reveal";
import { skills, skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The frontend, backend, database, design, tools, and DevOps skills of full-stack developer Abdirahman Garane.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title={
          <>
            A toolkit built for <span className="text-primary">shipping</span>.
          </>
        }
        description="Six disciplines, one goal — building software that's fast, reliable, and a pleasure to use."
      />

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-20">
        <div className="space-y-16">
          {skillCategories.map((category, idx) => {
            const categorySkills = skills.filter((s) => s.category === category.id);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category.id}>
                <Reveal>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <SectionHeader
                      align="left"
                      eyebrow={`0${idx + 1} — ${category.label}`}
                      title={category.description}
                    />
                  </div>
                </Reveal>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {categorySkills.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
