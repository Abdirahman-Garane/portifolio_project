import type { ExperienceItem, EducationItem, Achievement } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "Freelance",
    position: "Full-Stack Developer",
    duration: "2023 — Present",
    location: "Remote",
    summary:
      "Designing and shipping production web applications end-to-end for clients — from database schema to deployed UI.",
    responsibilities: [
      "Built full-stack products with Next.js, TypeScript, and Supabase",
      "Translated vague briefs into structured, typed data models and clean UIs",
      "Delivered responsive, accessible interfaces scoring 95+ on Lighthouse",
      "Owned deployments, monitoring, and performance budgets for client projects",
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
      "Conceptualized and launched multiple solo projects to sharpen full-stack fundamentals across the entire product lifecycle.",
    responsibilities: [
      "Shipped a real-estate platform, expense tracker, and hospital scheduling system",
      "Practiced API design with a production-style prayer times REST API",
      "Exercised layout mastery through CSS Grid, responsive, and animation challenges",
      "Kept every project documented, typed, and structured for future maintainers",
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
      "Focused on software engineering, data structures, algorithms, and database systems. Graduated with a strong record in systems programming and web development electives.",
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
