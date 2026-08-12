import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { ProjectGallery } from "@/components/project-gallery";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";
import { Icon } from "@/components/icon";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1280px] px-4 pb-12 pt-28 sm:px-6 sm:pt-32">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> All projects
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {project.category}
              </span>
              <span className="font-mono text-sm text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-balance sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-pretty text-muted-foreground">
              {project.tagline}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild size="lg" variant="pill">
                  <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live demo <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              )}
              <Button asChild size="lg" variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                  <GithubIcon className="size-4" /> View source
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6">
        <Reveal>
          <ProjectGallery images={project.gallery} alt={project.title} />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <SectionHeader
                align="left"
                eyebrow="Overview"
                title="What this project does"
              />
              <Reveal delay={0.1}>
                <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                  {project.longDescription}
                </p>
              </Reveal>
            </div>

            <div>
              <SectionHeader
                align="left"
                eyebrow="Features"
                title="Key capabilities"
              />
              <Reveal delay={0.1}>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-lg border border-hairline bg-card p-4 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <Check className="size-3 text-primary" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <aside className="space-y-5">
            <Reveal>
              <div className="rounded-xl border border-hairline bg-card p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Tech stack
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-xl border border-hairline bg-card p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  At a glance
                </h2>
                <dl className="mt-4 space-y-3 text-sm">
                  {[
                    ["Category", project.category],
                    ["Year", project.year],
                    ["Role", "Design & development"],
                    ["Status", "Production"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 border-b border-hairline pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="default" className="flex-1">
                      <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live demo <ArrowUpRight className="size-3.5" />
                      </Link>
                    </Button>
                  )}
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                      <GithubIcon className="size-3.5" /> GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="overflow-hidden rounded-xl border border-hairline bg-gradient-to-b from-primary/15 to-transparent p-6">
                <div
                  className="flex size-12 items-center justify-center rounded-lg border"
                  style={{ backgroundColor: `${project.accent}18`, borderColor: `${project.accent}38`, color: project.accent }}
                >
                  <Icon name={project.icon} className="size-6" />
                </div>
                <h2 className="mt-4 text-base font-semibold">Built with a product mindset</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every project ships with a structured data layer, clean component architecture,
                  and performance baked in — not bolted on.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-hairline bg-muted/30">
        <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between gap-6">
            <SectionHeader
              align="left"
              eyebrow="More work"
              title="You might also like"
            />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((relatedProject) => (
              <ProjectCard key={relatedProject.slug} project={relatedProject} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
