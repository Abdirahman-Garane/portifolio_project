import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CertificateCard } from "@/components/certificate-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { certificates } from "@/data/certificates";

export function CertificatesPreview() {
  return (
    <section className="border-y border-hairline bg-muted/30 dark:bg-[#0e1116]">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Certificates"
            title={
              <>
                Credentials that back <span className="text-primary">my craft</span>.
              </>
            }
            description="A snapshot of the certificates I've earned — click any one to view the full certificate."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/certificates">
              All certificates <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.slice(0, 3).map((certificate) => (
            <CertificateCard key={certificate.title} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
