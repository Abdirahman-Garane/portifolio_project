import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { IntroSection } from "@/components/home/intro-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Statistics } from "@/components/statistics";
import { SkillsOverview } from "@/components/home/skills-overview";
import { ServicesPreview } from "@/components/home/services-preview";
import { TestimonialsPreview } from "@/components/home/testimonials-preview";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <IntroSection />
      <FeaturedProjects />
      <Statistics />
      <SkillsOverview />
      <ServicesPreview />
      <TestimonialsPreview />
      <ContactSection />
      <CtaBand />
    </>
  );
}
