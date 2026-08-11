"use client";

import Image from "next/image";
import { Eye, Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import type { Certificate } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CertificateViewer } from "@/components/certificate-viewer";

interface CertificateCardProps {
  certificate: Certificate;
  className?: string;
}

export function CertificateCard({ certificate, className }: CertificateCardProps) {
  const [viewing, setViewing] = useState(false);

  const handleVerify = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (certificate.credentialUrl) {
      window.open(certificate.credentialUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <div
        className={cn(
          "group flex flex-col overflow-hidden rounded-xl border border-hairline bg-card transition-all duration-300",
          "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 dark:border-[#2b3139]",
          className
        )}
      >
        <div className="relative aspect-[8/5] overflow-hidden border-b border-hairline bg-muted dark:border-[#2b3139]">
          <Image
            src={certificate.image}
            alt={`${certificate.title} certificate preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute right-3 top-3 rounded-md bg-card/90 px-2.5 py-1 font-mono text-[11px] font-semibold text-foreground backdrop-blur">
            {certificate.year}
          </span>
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleVerify}
              className="absolute left-3 top-3 rounded-md bg-card/90 px-2.5 py-1 font-mono text-[11px] font-semibold text-primary backdrop-blur hover:bg-card transition-colors"
              aria-label={`Verify ${certificate.title} certificate`}
            >
              <ExternalLink className="inline size-3 mr-1" /> Verify
            </a>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-[-0.01em]">{certificate.title}</h3>
            <Award className="mt-0.5 size-4 shrink-0 text-primary" />
          </div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {certificate.issuer}
          </p>
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
            {certificate.description}
          </p>
          <div className="mt-1 border-t border-hairline pt-3.5 dark:border-[#2b3139]">
            <div className="flex gap-2">
              <Button size="sm" variant="secondary" className="flex-1" onClick={() => setViewing(true)}>
                <Eye className="size-4 mr-1.5" /> View
              </Button>
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleVerify}
                  className="flex-1"
                >
                  <Button size="sm" variant="outline" className="w-full justify-center gap-1.5">
                    <ExternalLink className="size-4" /> Verify
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <CertificateViewer certificate={viewing ? certificate : null} onClose={() => setViewing(false)} />
    </>
  );
}
