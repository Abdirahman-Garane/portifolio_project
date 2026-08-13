import type { ExperienceItem, EducationItem, Achievement } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "Freelance",
    position: "Full-Stack Developer",
    duration: "2023 — Present",
    location: "Remote",
    summary:
      "Designing and shipping full-stack products end-to-end for clients.",
    responsibilities: [
      "Built products with Next.js, TypeScript, and Supabase",
      "Translated briefs into clean, typed data models and UIs",
      "Delivered responsive, accessible interfaces scoring 95+ on Lighthouse",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    current: true,
  },
  {
    company: "Independent Projects",
    position: "Product Builder",
    duration: "2022 — 2023",
    location: "Banadir, Somalia",
    summary:
      "Launched solo projects to sharpen full-stack fundamentals.",
    responsibilities: [
      "Shipped a real-estate platform, expense tracker, and hospital scheduler",
      "Practiced API design with a production-style REST API",
      "Kept every project documented and typed",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "JavaScript"],
  },
];

export const education: EducationItem[] = [
  {
    school: "University of Somalia (UNISO)",
    degree: "BSc, Computer Science",
    duration: "2021 — 2025",
    location: "Banadir, Somalia",
    gpa: "3.81 / 4.0",
    description:
      "Software engineering, data structures, algorithms, and database systems.",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Top 1% accessibility",
    description: "All shipped interfaces target WCAG AA and pass automated + manual audits.",
  },
  {
    title: "20+ projects shipped",
    description: "Every project deployed to production and documented with clear READMEs.",
  },
  {
    title: "95+ Lighthouse scores",
    description: "Performance, accessibility, and best practices as a non-negotiable floor.",
  },
  {
    title: "Design-systems focused",
    description: "Adopt token-driven design systems for consistent, scalable UIs.",
  },
];
