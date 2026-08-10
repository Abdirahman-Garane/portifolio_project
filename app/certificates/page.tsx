import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { CertificateCard } from "@/components/certificate-card";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Certifications and achievements of full-stack developer Abdirahman Garane.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        title={
          <>
            Credentials & <span className="text-primary">certifications</span>.
          </>
        }
        description="A collection of the certificates and courses that back my skills — replace the placeholders with your real ones."
      />

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <SectionHeader
          align="left"
          eyebrow="Achievements"
          title="Certificates I've earned"
          description="Each card shows the certificate image, its name, and a short description."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, i) => (
            <Reveal key={certificate.title} delay={(i % 3) * 0.08}>
              <CertificateCard certificate={certificate} className="h-full" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
