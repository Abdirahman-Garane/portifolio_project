import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="border-y border-hairline bg-muted/30 dark:bg-[#0e1116]">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Featured work"
            title={
              <>
                Selected projects I'm <span className="text-primary">proud of</span>.
              </>
            }
            description="A snapshot of the products, platforms, and tools I've designed and shipped — each one built to be fast, accessible, and dependable."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/projects">
              All projects <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project, i) => (
            <div key={project.slug} className={i % 2 === 1 ? "lg:translate-y-6" : ""}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
