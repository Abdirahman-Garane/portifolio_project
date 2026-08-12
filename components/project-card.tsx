import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

export function ProjectCard({ project, className, priority }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-hairline bg-card transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        className
      )}
    >
      <div className="card-sheen relative aspect-[16/10] overflow-hidden border-b border-hairline bg-muted">
        <Image
          src={project.cover}
          alt={`${project.title} preview`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-md bg-card/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
          {project.category}
        </span>
        <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-[-0.01em]">{project.title}</h3>
          <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md px-1 py-0.5 text-[11px] text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <div className="mt-1 flex items-center gap-4 border-t border-hairline pt-3.5">
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground transition-colors group-hover:text-primary">
            <GithubIcon className="size-3.5" /> View on GitHub
          </span>
          <span className="ml-auto inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground">
            Details <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
