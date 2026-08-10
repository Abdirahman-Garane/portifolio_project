import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <Reveal className="px-4 sm:px-6">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-xl border border-hairline bg-card px-6 py-12 sm:px-12 sm:py-16 dark:border-[#2b3139] dark:bg-[#1e2329]">
        <div
          className="absolute -left-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-16 size-80 rounded-full bg-primary/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Open to work
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-balance sm:text-4xl">
              Have a project in mind? Let's build it together.
            </h2>
            <p className="mt-3 text-pretty text-base text-muted-foreground">
              From premium landing pages to full-stack products — I'm available for freelance work
              and collaborations. Tell me about your idea and I'll get back to you within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="pill">
              <Link href="/contact">
                Start a project
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">Browse my work</Link>
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
