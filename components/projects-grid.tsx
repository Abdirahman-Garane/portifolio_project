"use client";

import { m, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Input } from "@/components/ui/input";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === "All" || project.category === category;
      const matchesQuery =
        q.length === 0 ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or technologies..."
            className="h-11 rounded-md pl-10"
            aria-label="Search projects"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-md border px-3.5 py-1.5 text-[13px] font-medium transition-all",
                category === cat
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-hairline text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
        {filtered.length === 1 ? "project" : "projects"}
      </div>

      <AnimatePresence mode="sync">
        {filtered.length > 0 ? (
          <m.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <m.div
                key={project.slug}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} />
              </m.div>
            ))}
          </m.div>
        ) : (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-hairline py-20 text-center"
          >
            <Search className="size-8 text-muted-foreground/40" />
            <h3 className="text-lg font-semibold">No projects found</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              Try a different search term or category — I've built a lot, so there's bound to be
              something relevant.
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
