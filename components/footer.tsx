import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { personal } from "@/data/personal";
import { socials } from "@/data/socials";
import { projects } from "@/data/projects";

const footerColumns = [
  {
    heading: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Skills", href: "/skills" },
      { label: "Experience", href: "/experience" },
      { label: "Services", href: "/services" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "UI Design", href: "/services" },
      { label: "Dashboard Development", href: "/services" },
      { label: "Full Stack Applications", href: "/services" },
      { label: "API Integration", href: "/services" },
      { label: "Performance Optimization", href: "/services" },
    ],
  },
  {
    heading: "Selected Work",
    links: projects.slice(0, 5).map((p) => ({ label: p.title, href: `/projects/${p.slug}` })),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e3e5e8] bg-[#fafafa] text-[#181a20]">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#fcd535] text-base font-bold text-[#181a20]">
                AG
              </span>
              <span className="text-[15px] font-semibold">
                Abdirahman<span className="text-[#707a8a]">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#4a4f57]">
              Full-stack developer building premium, high-performance web experiences with clean
              architecture and careful design.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.slice(0, 4).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-md border border-[#dfe1e5] bg-white text-[#4a4f57] transition-all hover:border-[#fcd535] hover:text-[#181a20]"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#707a8a]">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-[#4a4f57] transition-colors hover:text-[#181a20]"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#dfe1e5] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#707a8a]">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#707a8a]">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="size-3.5" /> {personal.email}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Phone className="size-3.5" /> {personal.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" /> {personal.location}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
