import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="border-y border-hairline bg-muted/30">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Services"
            title={
              <>
                How I can <span className="text-primary">help you build</span>.
              </>
            }
            description="End-to-end product development — from first wireframe to production deploy — with a strong bias toward performance and polish."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/services">
              All services <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
