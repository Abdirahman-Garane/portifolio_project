import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..", "public");

const lines = [
  "ABDIRAHMAN GARANE",
  "Full-Stack Developer",
  "",
  "Nairobi, Kenya  |  hello@abdirahman.dev  |  github.com/Abdirahman-Garane",
  "",
  "SUMMARY",
  "Full-stack developer building premium, high-performance web applications",
  "with Next.js, React, TypeScript, and careful design.",
  "",
  "SKILLS",
  "Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
  "Backend: Node.js, Express, REST APIs",
  "Database: PostgreSQL, Supabase, MySQL, Prisma",
  "Tools: Git, Docker, Figma, Vercel, CI/CD",
  "",
  "EXPERIENCE",
  "Freelance - Full-Stack Developer (2023 - Present)",
  "- Built full-stack products with Next.js, TypeScript, and Supabase",
  "- Delivered responsive, accessible interfaces scoring 95+ on Lighthouse",
  "",
  "Independent Projects - Product Builder (2022 - 2023)",
  "- Shipped a real-estate platform, expense tracker, and hospital system",
  "- Practiced API design with a production-style prayer times REST API",
  "",
  "EDUCATION",
  "BSc Computer Science - University of Nairobi (2020 - 2024)",
  "",
  "This is a placeholder resume. Replace with your full resume content.",
];

const objects = [];
objects.push("<< /Type /Catalog /Pages 2 0 R >>");
objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
const streamContent = `BT /F1 12 Tf 40 780 Td 18 TL ${lines
  .map((line) => `(${line.replace(/[\\()]/g, (c) => "\\" + c)}) Tj T*`)
  .join(" ")} ET`;
objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>`);
objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
objects.push("<< /Length " + Buffer.byteLength(streamContent) + " >>");

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((obj, i) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${i + 1} 0 obj\n${obj}\n`;
  if (i === 4) {
    pdf += `stream\n${streamContent}\nendstream\n`;
  } else {
    pdf += `endobj\n`;
  }
});
const xrefStart = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

writeFileSync(resolve(root, "resume.pdf"), pdf);
console.log("✓ generated /resume.pdf");
