# Portfolio — Abdirahman Garane

A premium, fully static portfolio website for full-stack developer **Abdirahman Garane**, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Lucide React.

The design language is inspired by the Clay.com design system — a cream-tinted canvas (`#fffaf0`), dark near-black primary CTAs, saturated single-color feature cards (pink, teal, lavender, peach, ochre, mint, coral), generous rounded corners (12–24px), and a warm cream footer that closes the page instead of a dark one.

## Tech Stack

- **Next.js 15** (App Router, static generation)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Radix primitives)
- **Framer Motion** (animations, page transitions, counters)
- **Lucide React** + custom brand icons

No databases, APIs, or backend services — everything is local, typed data.

## Pages

- `/` — Home (hero, intro, featured projects, statistics, skills, services, testimonials, contact)
- `/about` — Biography, summary, experience, education, achievements, resume
- `/projects` — Grid with search + category filtering
- `/projects/[slug]` — Project detail with gallery, features, tech stack
- `/skills` — Six skill categories with animated progress indicators
- `/experience` — Career & education timeline
- `/services` — Services + process
- `/testimonials` — Client testimonials
- `/contact` — Validated (demo-only) contact form
- 404 page, sitemap, robots.txt, Open Graph assets

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # start dev server
npm run build      # production build (static)
npm run start      # serve production build
npm run lint       # lint
```

Assets (project covers, avatar, OG image) are generated from `scripts/generate-assets.mjs` and `scripts/generate-resume.mjs` — run `node scripts/generate-assets.mjs` to regenerate after editing project data.

## Project Structure

```text
app/          # routes, layout, metadata, sitemap, robots
components/   # ui (shadcn), sections, feature components
data/         # typed local content (projects, skills, experience…)
hooks/        # client hooks
lib/          # cn() utility
types/        # shared TypeScript types
utils/        # framer-motion variants
public/       # images, icons, resume
```
