import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TestimonialCard } from "@/components/testimonial-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:py-28">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          align="left"
          eyebrow="Testimonials"
          title={
            <>
              Trusted by <span className="text-primary">people I've worked with</span>.
            </>
          }
          description="A few words from clients and collaborators about what it's like to build software together."
        />
        <Button asChild variant="outline" size="lg" className="shrink-0">
          <Link href="/testimonials">
            All testimonials <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
