import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Marketing sites, landing pages, and web apps built with React and Next.js.",
    icon: "code2",
    features: ["Next.js & React", "Responsive layouts", "SEO-ready output"],
    accent: "#e8b94a",
  },
  {
    title: "UI Design",
    description: "Token-driven design systems with premium spacing, typography, and polish.",
    icon: "palette",
    features: ["Design systems", "Figma to code", "Component libraries"],
    accent: "#ff4d8b",
  },
  {
    title: "Dashboard Development",
    description: "Data-dense dashboards that stay fast and readable — analytics, admin, and consoles.",
    icon: "layoutDashboard",
    features: ["Analytics views", "Data tables", "Charts & gauges"],
    accent: "#b8a4ed",
  },
  {
    title: "Full Stack Applications",
    description: "End-to-end products with typed data layers, secure APIs, and solid logic.",
    icon: "blocks",
    features: ["Typed data models", "REST APIs", "Auth & permissions"],
    accent: "#1a3a3a",
  },
  {
    title: "API Integration",
    description: "Clean integration with third-party services, payments, and external data.",
    icon: "gitBranch",
    features: ["REST & GraphQL", "Webhooks", "Rate-limit handling"],
    accent: "#a4d4c5",
  },
  {
    title: "Performance Optimization",
    description: "Audit and harden your app for Core Web Vitals, bundle size, and accessibility.",
    icon: "gauge",
    features: ["Core Web Vitals", "Bundle analysis", "Accessibility fixes"],
    accent: "#ffb084",
  },
];
