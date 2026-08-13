import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SkillCard } from "@/components/skill-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { skills, skillCategories } from "@/data/skills";

export function SkillsOverview() {
  const topSkills = skills
    .filter((s) => s.category === "frontend")
    .concat(skills.filter((s) => s.category !== "frontend"))
    .slice(0, 8);

  return (
    <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:py-28">
      <SectionHeader
        eyebrow="Skills"
        title={
          <>
            A full-stack toolkit, <span className="text-primary">constantly sharpened</span>.
          </>
        }
        description="From pixel-perfect interfaces to reliable backends — the tech I use to ship quality software."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topSkills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-2">
          {skillCategories.map((cat) => (
            <span
              key={cat.id}
              className="rounded-md border border-hairline bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {cat.label}
            </span>
          ))}
        </div>
        <Button asChild variant="outline" size="lg">
          <Link href="/skills">
            Explore all skills <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
