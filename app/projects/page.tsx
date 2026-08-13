import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectsGrid } from "@/components/projects-grid";
import { Statistics } from "@/components/statistics";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of projects by full-stack developer Abdirahman Garane — real-estate platforms, expense trackers, hospital systems, APIs, and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Things I've <span className="text-primary">built</span>.
          </>
        }
        description="Products, platforms, and experiments I've designed and shipped. Filter by category or technology."
      />
      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <ProjectsGrid />
      </section>
      <Statistics />
    </>
  );
}
