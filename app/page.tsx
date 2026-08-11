import { Hero } from "@/components/hero";
import { TechMarquee } from "@/components/tech-marquee";
import { IntroSection } from "@/components/home/intro-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsOverview } from "@/components/home/skills-overview";
import { CertificatesPreview } from "@/components/home/certificates-preview";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <IntroSection />
      <FeaturedProjects />
      <SkillsOverview />
      <CertificatesPreview />
      <ContactSection />
    </>
  );
}
