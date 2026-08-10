import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with full-stack developer Abdirahman Garane for freelance work, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Say <span className="text-primary">hello</span>.
          </>
        }
        description="Have a project, a role, or just a question? My inbox is always open — I usually reply within 24 hours."
      />
      <ContactSection />
      <CtaBand />
    </>
  );
}
