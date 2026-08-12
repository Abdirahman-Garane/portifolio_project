import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ServiceCard } from "@/components/service-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, UI design, dashboards, full-stack applications, API integration, and performance optimization — services offered by Abdirahman Garane.",
};

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We align on goals, scope, and success metrics. I audit what exists and map what's needed.",
  },
  {
    step: "02",
    title: "Design & build",
    description:
      "I move fast in tight loops — designing the interface, building the architecture, and shipping working software.",
  },
  {
    step: "03",
    title: "Polish & launch",
    description:
      "Performance audits, accessibility passes, and final QA. Then it ships to production with your team ready to run it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Services that ship <span className="text-primary">real value</span>.
          </>
        }
        description="From a single landing page to a full product — here's how I can help you build, launch, and optimize."
      />

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-muted/30">
        <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6">
          <SectionHeader
            eyebrow="Process"
            title="How we'll work together"
            description="A simple, transparent process that keeps you in the loop from kickoff to launch."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((process, i) => (
              <Reveal key={process.step} delay={i * 0.1}>
                <div className="relative h-full overflow-hidden rounded-xl border border-hairline bg-card p-6">
                  <span className="font-mono text-4xl font-bold tabular-nums text-primary/20">
                    {process.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{process.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {process.description}
                  </p>
                  {i < processSteps.length - 1 && (
                    <ArrowUpRight
                      className="absolute right-5 top-5 size-5 text-muted-foreground/30"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
            <h3 className="text-xl font-semibold sm:text-2xl">Not sure which service you need?</h3>
            <p className="max-w-md text-pretty text-muted-foreground">
              Tell me about your project and I'll recommend the right approach — even if it's not
              on this list.
            </p>
            <Button asChild size="lg" variant="pill">
              <Link href="/contact">
                <MessageCircle className="size-4" /> Let's talk
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
