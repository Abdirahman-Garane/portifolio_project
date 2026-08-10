import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "public");

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function coverSvg({ title, accent, seed }) {
  const w = 1600;
  const h = 1000;
  const bars = Array.from({ length: 5 }, (_, i) => {
    const hgt = 40 + ((seed * (i + 3) * 37) % 120);
    return `<rect x="${120 + i * 150}" y="${470 - hgt}" width="86" height="${hgt}" rx="8" fill="${accent}" opacity="${0.25 + ((seed + i) % 4) * 0.16}"/>`;
  }).join("");
  const dots = Array.from({ length: 6 }, (_, i) => {
    const x = 260 + ((seed * (i + 5)) % 900);
    const y = 150 + ((seed * (i + 9)) % 500);
    return `<circle cx="${x}" cy="${y}" r="${4 + (i % 3)}" fill="${accent}" opacity="0.35"/>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0e11"/>
      <stop offset="1" stop-color="#1e2329"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.4" r="0.7">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.18"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g stroke="${accent}" stroke-opacity="0.06">
    ${Array.from({ length: 14 }, (_, i) => `<line x1="0" y1="${i * 120}" x2="${w}" y2="${i * 120}"/>`).join("")}
    ${Array.from({ length: 14 }, (_, i) => `<line x1="${i * 128}" y1="0" x2="${i * 128}" y2="${h}"/>`).join("")}
  </g>
  ${dots}
  <rect x="80" y="80" width="1440" height="840" rx="24" fill="#0b0e11" fill-opacity="0.55" stroke="${accent}" stroke-opacity="0.22"/>
  <circle cx="140" cy="140" r="10" fill="#f6465d"/>
  <circle cx="176" cy="140" r="10" fill="#fcd535"/>
  <circle cx="212" cy="140" r="10" fill="#0ecb81"/>
  <rect x="120" y="210" width="400" height="24" rx="8" fill="${accent}"/>
  <rect x="120" y="256" width="560" height="16" rx="6" fill="#eaecef" opacity="0.4"/>
  <rect x="120" y="290" width="420" height="16" rx="6" fill="#eaecef" opacity="0.25"/>
  ${bars}
  <rect x="120" y="640" width="160" height="120" rx="14" fill="${accent}" opacity="0.9"/>
  <rect x="300" y="660" width="120" height="100" rx="14" fill="#eaecef" opacity="0.12"/>
  <rect x="440" y="680" width="120" height="80" rx="14" fill="#eaecef" opacity="0.08"/>
  <text x="120" y="860" font-family="Inter, sans-serif" font-size="44" font-weight="700" fill="#ffffff">${esc(title)}</text>
  <text x="120" y="902" font-family="'JetBrains Mono', monospace" font-size="20" fill="${accent}">ABDIRAHMAN-GARANE / PORTFOLIO</text>
</svg>`;
}

function gallerySvg({ title, accent, seed, variant }) {
  const w = 1600;
  const h = 1000;
  const panelY = 200;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg${variant}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0e11"/>
      <stop offset="1" stop-color="#1e2329"/>
    </linearGradient>
    <linearGradient id="fg${variant}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${accent}" stop-opacity="${0.16 + variant * 0.04}"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0.04"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg${variant})"/>
  <rect x="0" y="${panelY}" width="${w}" height="620" fill="url(#fg${variant})"/>
  ${Array.from({ length: 6 }, (_, i) => {
    const x = 120 + i * 250 + (seed % 3) * 20;
    const hgt = 90 + ((seed * (i + 2)) % 150);
    return `<rect x="${x}" y="${panelY + 520 - hgt}" width="150" height="${hgt}" rx="12" fill="${accent}" opacity="${0.14 + ((seed + i) % 4) * 0.12}"/>`;
  }).join("")}
  <text x="120" y="140" font-family="'JetBrains Mono', monospace" font-size="22" fill="${accent}">view ${variant + 1}</text>
  <text x="120" y="${panelY + 580}" font-family="Inter, sans-serif" font-size="40" font-weight="700" fill="#ffffff">${esc(title)}</text>
</svg>`;
}

const projects = [
  { slug: "real-estate", title: "Real Estate Platform", accent: "#fcd535", seed: 3 },
  { slug: "hospital", title: "Hospital Appointment System", accent: "#0ecb81", seed: 7 },
  { slug: "expense", title: "Expense Tracker", accent: "#f6465d", seed: 11 },
  { slug: "gym", title: "Gym Member Registration", accent: "#2dbdb6", seed: 5 },
  { slug: "prayer", title: "Prayer Times API", accent: "#3b82f6", seed: 13 },
  { slug: "todo", title: "Todo App", accent: "#fcd535", seed: 17 },
  { slug: "car", title: "Car Showcase", accent: "#f6465d", seed: 19 },
  { slug: "bmi", title: "BMI Calculator", accent: "#0ecb81", seed: 23 },
];

for (const p of projects) {
  const dir = resolve(root, "projects");
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, `${p.slug}.svg`), coverSvg(p));
  for (let v = 1; v <= 3; v++) {
    writeFileSync(
      resolve(dir, `${p.slug}-${v}.svg`),
      gallerySvg({ ...p, variant: v })
    );
  }
  console.log(`✓ generated /projects/${p.slug}.svg (+${p.slug}-2, -3)`);
}

const avatar = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0e11"/>
      <stop offset="1" stop-color="#1e2329"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.32" r="0.6">
      <stop offset="0" stop-color="#fcd535" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#fcd535" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="1000" fill="url(#bg)"/>
  <rect width="800" height="1000" fill="url(#glow)"/>
  <g stroke="#fcd535" stroke-opacity="0.07">
    ${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${i * 140}" x2="800" y2="${i * 140}"/>`).join("")}
  </g>
  <circle cx="400" cy="360" r="180" fill="#fcd535"/>
  <circle cx="400" cy="360" r="164" fill="#1e2329"/>
  <text x="400" y="416" font-family="Inter, sans-serif" font-size="150" font-weight="800" fill="#fcd535" text-anchor="middle">AG</text>
  <rect x="300" y="610" width="200" height="10" rx="5" fill="#fcd535" opacity="0.9"/>
  <text x="400" y="660" font-family="Inter, sans-serif" font-size="30" font-weight="600" fill="#eaecef" text-anchor="middle">Abdirahman Garane</text>
  <text x="400" y="700" font-family="'JetBrains Mono', monospace" font-size="20" fill="#929aa5" text-anchor="middle">FULL-STACK DEVELOPER</text>
</svg>`;
writeFileSync(resolve(root, "avatar.svg"), avatar);
console.log("✓ generated /avatar.svg");

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0e11"/>
      <stop offset="1" stop-color="#1e2329"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.2" r="0.7">
      <stop offset="0" stop-color="#fcd535" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#fcd535" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g stroke="#fcd535" stroke-opacity="0.06">
    ${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${i * 90}" x2="1200" y2="${i * 90}"/>`).join("")}
  </g>
  <rect x="84" y="70" width="1040" height="490" rx="24" fill="#0b0e11" fill-opacity="0.5" stroke="#fcd535" stroke-opacity="0.25"/>
  <rect x="132" y="118" width="72" height="72" rx="14" fill="#fcd535"/>
  <text x="168" y="166" font-family="Inter, sans-serif" font-size="44" font-weight="800" fill="#181a20" text-anchor="middle">AG</text>
  <text x="132" y="270" font-family="Inter, sans-serif" font-size="58" font-weight="800" fill="#ffffff">Abdirahman Garane</text>
  <text x="132" y="326" font-family="'JetBrains Mono', monospace" font-size="28" fill="#fcd535">FULL-STACK DEVELOPER</text>
  <text x="132" y="382" font-family="Inter, sans-serif" font-size="26" fill="#929aa5">Premium web experiences · Next.js · TypeScript · Design</text>
  <circle cx="976" cy="142" r="10" fill="#f6465d"/>
  <circle cx="1012" cy="142" r="10" fill="#fcd535"/>
  <circle cx="1048" cy="142" r="10" fill="#0ecb81"/>
</svg>`;
writeFileSync(resolve(root, "og.svg"), og);
console.log("✓ generated /og.svg");

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#fcd535"/>
  <text x="32" y="42" font-family="Inter, sans-serif" font-size="28" font-weight="800" fill="#181a20" text-anchor="middle">AG</text>
</svg>`;
writeFileSync(resolve(root, "icon.svg"), icon);
console.log("✓ generated /icon.svg");
