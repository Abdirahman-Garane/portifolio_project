export const personal = {
  name: "Abdirahman Garane",
  firstName: "Abdirahman",
  lastName: "Garane",
  role: "Full-Stack Developer",
  tagline:
    "I build premium, high-performance web applications with clean architecture and delightful interfaces.",
  email: "hello@abdirahman.dev",
  phone: "+254 700 000 000",
  location: "Nairobi, Kenya",
  locationShort: "Nairobi, KE",
  availability: "Available for freelance",
  bio: [
    "I'm a full-stack developer specializing in modern web experiences built with Next.js, React, and TypeScript. I focus on crafting interfaces that are fast, accessible, and a pleasure to use.",
    "Over the last several years I've shipped everything from real-estate platforms and expense trackers to hospital appointment systems and gym management dashboards — each one production-ready, responsive, and backed by clean, maintainable code.",
    "When I'm not shipping products, I'm refining my craft: studying design systems, tuning performance budgets, and exploring the next generation of front-end tooling.",
  ],
  professionalSummary:
    "Full-stack developer with a product-minded approach. I design and build end-to-end applications — from database schema to pixel-perfect UI — and I obsess over performance, accessibility, and the small details that make software feel premium.",
  resumeUrl: "/resume.pdf",
} as const;

export const statistics = [
  { value: 25, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: "+", label: "Years building" },
  { value: 12, suffix: "+", label: "Happy clients" },
  { value: 98, suffix: "", label: "Avg. Lighthouse score" },
] as const;
