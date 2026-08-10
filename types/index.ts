export type IconName =
  | "wallet"
  | "layout"
  | "braces"
  | "database"
  | "palette"
  | "wrench"
  | "cloud"
  | "layoutDashboard"
  | "puzzle"
  | "gauge"
  | "gitBranch"
  | "blocks"
  | "server"
  | "code2"
  | "figma"
  | "terminal"
  | "shieldCheck"
  | "rocket";

export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  cover: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl: string;
  year: string;
  accent: string;
  icon: IconName;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon: IconName;
}

export type SkillCategory = "frontend" | "backend" | "database" | "design" | "tools" | "devops";

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
}

export interface EducationItem {
  school: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
  features: string[];
  accent: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  rating: number;
  review: string;
  initials: string;
}

export interface Statistic {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface Achievement {
  title: string;
  description: string;
}
