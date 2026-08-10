import type { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend", icon: "code2" },
  { name: "TypeScript", level: 92, category: "frontend", icon: "code2" },
  { name: "Next.js", level: 94, category: "frontend", icon: "blocks" },
  { name: "Tailwind CSS", level: 96, category: "frontend", icon: "palette" },
  { name: "Framer Motion", level: 85, category: "frontend", icon: "layout" },
  { name: "HTML & CSS", level: 97, category: "frontend", icon: "code2" },

  { name: "Node.js", level: 88, category: "backend", icon: "server" },
  { name: "Express", level: 86, category: "backend", icon: "server" },
  { name: "REST API Design", level: 90, category: "backend", icon: "gitBranch" },
  { name: "C++", level: 75, category: "backend", icon: "terminal" },

  { name: "PostgreSQL", level: 84, category: "database", icon: "database" },
  { name: "Supabase", level: 88, category: "database", icon: "database" },
  { name: "MySQL", level: 80, category: "database", icon: "database" },
  { name: "Prisma", level: 82, category: "database", icon: "database" },

  { name: "Figma", level: 85, category: "design", icon: "figma" },
  { name: "UI / UX Design", level: 88, category: "design", icon: "palette" },
  { name: "Design Systems", level: 86, category: "design", icon: "layout" },

  { name: "Git & GitHub", level: 92, category: "tools", icon: "gitBranch" },
  { name: "npm / Vite", level: 90, category: "tools", icon: "terminal" },
  { name: "Responsive Design", level: 95, category: "tools", icon: "layout" },

  { name: "Docker", level: 76, category: "devops", icon: "cloud" },
  { name: "CI / CD", level: 80, category: "devops", icon: "gitBranch" },
  { name: "Vercel", level: 92, category: "devops", icon: "rocket" },
  { name: "Performance Tuning", level: 87, category: "devops", icon: "gauge" },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend", description: "Interfaces people love to use" },
  { id: "backend", label: "Backend", description: "Services that scale reliably" },
  { id: "database", label: "Database", description: "Data modeled with intent" },
  { id: "design", label: "UI Design", description: "Systems, spacing, and polish" },
  { id: "tools", label: "Tools", description: "The workflow that ships fast" },
  { id: "devops", label: "DevOps", description: "From commit to production" },
] as const;
