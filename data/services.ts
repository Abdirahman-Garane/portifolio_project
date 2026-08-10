import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "High-performance marketing sites, landing pages, and web apps built with modern React and Next.js.",
    icon: "code2",
    features: ["Next.js & React", "Responsive layouts", "SEO-ready output"],
    accent: "#fcd535",
  },
  {
    title: "UI Design",
    description:
      "Token-driven interface design systems with premium spacing, typography, and visual polish.",
    icon: "palette",
    features: ["Design systems", "Figma to code", "Component libraries"],
    accent: "#2dbdb6",
  },
  {
    title: "Dashboard Development",
    description:
      "Data-dense dashboards that stay fast and readable — analytics, admin, and management consoles.",
    icon: "layoutDashboard",
    features: ["Analytics views", "Data tables", "Charts & gauges"],
    accent: "#3b82f6",
  },
  {
    title: "Full Stack Applications",
    description:
      "End-to-end products with typed data layers, secure APIs, and robust business logic.",
    icon: "blocks",
    features: ["Typed data models", "REST APIs", "Auth & permissions"],
    accent: "#0ecb81",
  },
  {
    title: "API Integration",
    description:
      "Clean integration with third-party services, payment flows, and external data sources.",
    icon: "gitBranch",
    features: ["REST & GraphQL", "Webhooks", "Rate-limit handling"],
    accent: "#f6465d",
  },
  {
    title: "Performance Optimization",
    description:
      "Audit and harden your web app for Core Web Vitals, bundle size, and accessibility.",
    icon: "gauge",
    features: ["Core Web Vitals", "Bundle analysis", "Accessibility fixes"],
    accent: "#707a8a",
  },
];
