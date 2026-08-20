"use client";

import { m, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollY } from "@/hooks/use-scroll-y";
import { cn } from "@/lib/utils";
import { personal } from "@/data/personal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Certificates", href: "/certificates" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

function Brand() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Abdirahman Garane — home">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
        Cg
      </span>
      <span className="hidden text-[15px] font-semibold tracking-[-0.01em] sm:block">
        Abdirahman<span className="text-muted-foreground">.dev</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrollY = useScrollY();
  const scrolled = scrollY > 16;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <m.nav
        aria-label="Main navigation"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className={cn(
          "mx-auto flex h-16 w-full items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6",
          "max-w-[1280px]",
          scrolled
            ? "border-b border-hairline bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Brand />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active && (
                  <m.span
                    className="absolute inset-0 rounded-md bg-muted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden lg:inline-flex">
            <a href={`mailto:${personal.email}`}>
              Hire me
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg border border-hairline lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </m.nav>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <m.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-3 overflow-hidden rounded-xl border border-hairline bg-card p-3 shadow-2xl"
            >
              <div className="flex flex-col">
                {navLinks.map((link, i) => {
                  const active =
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <m.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-md px-4 py-3 text-[15px] font-medium transition-colors",
                          active
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        )}
                      >
                        {link.label}
                        <ArrowUpRight className="size-4 opacity-40" />
                      </Link>
                    </m.div>
                  );
                })}
              </div>
              <div className="mt-2 border-t border-hairline pt-3">
                <Button asChild className="w-full" onClick={() => setOpen(false)}>
                  <a href={`mailto:${personal.email}`}>Hire me</a>
                </Button>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
