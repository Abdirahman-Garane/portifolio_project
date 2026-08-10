import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { TestimonialCard } from "@/components/testimonial-card";
import { SectionHeader } from "@/components/section-header";
import { Counter } from "@/components/counter";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client and collaborator testimonials for full-stack developer Abdirahman Garane.",
};

const summary = [
  { value: 12, suffix: "+", label: "Happy clients" },
  { value: 5, suffix: "", label: "Average rating" },
  { value: 100, suffix: "%", label: "On-time delivery" },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title={
          <>
            What people say about <span className="text-primary">working with me</span>.
          </>
        }
        description="The best validation is repeat clients and strong referrals. Here's a little of what that sounds like."
      />

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16">
          <SectionHeader
            eyebrow="By the numbers"
            title="Trust, quantified"
          />
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
            {summary.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-hairline bg-card p-6 text-center dark:border-[#2b3139]"
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-mono text-4xl font-bold tabular-nums text-primary"
                />
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
