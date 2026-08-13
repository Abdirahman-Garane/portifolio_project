import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { AboutSection } from "@/components/home/about-section";
import { JourneySection } from "@/components/home/journey-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsOverview } from "@/components/home/skills-overview";
import { CertificatesPreview } from "@/components/home/certificates-preview";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <AboutSection />
      <JourneySection />
      <FeaturedProjects />
      <SkillsOverview />
      <CertificatesPreview />
      <ContactSection />
    </>
  );
}
