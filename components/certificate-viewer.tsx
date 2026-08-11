"use client";

import { AnimatePresence, m } from "framer-motion";
import { X, ExternalLink, Download, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Certificate } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CertificateViewerProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateViewer({ certificate, onClose }: CertificateViewerProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!certificate) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [certificate, onClose]);

  const handleDownload = () => {
    if (!certificate) return;
    const link = document.createElement("a");
    link.href = certificate.image;
    link.download = `${certificate.title.replace(/\s+/g, "-")}-certificate.jpg`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVerify = () => {
    if (certificate?.credentialUrl) {
      window.open(certificate.credentialUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <AnimatePresence>
      {certificate && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${certificate.title} certificate`}
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          <m.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-hairline bg-card shadow-2xl dark:border-[#2b3139]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-hairline px-5 py-4 dark:border-[#2b3139]">
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold">{certificate.title}</h3>
                <p className="truncate text-xs text-muted-foreground">
                  {certificate.issuer} · {certificate.year}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {certificate.credentialUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleVerify}
                    className="gap-1.5"
                    aria-label="Verify certificate on issuer website"
                  >
                    <ExternalLink className="size-3.5" />
                    <CheckCircle2 className="size-3.5" />
                    Verify
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownload}
                  className="gap-1.5"
                  aria-label="Download certificate image"
                >
                  <Download className="size-3.5" />
                  Download
                </Button>
                <button
                  onClick={onClose}
                  aria-label="Close certificate preview"
                  className="flex size-9 shrink-0 items-center justify-center rounded-md border border-hairline text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-muted/40 p-4 sm:p-6">
              <m.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className={cn(
                  "relative w-full overflow-hidden rounded-lg border border-hairline bg-card shadow-lg dark:border-[#2b3139]",
                  !imageLoaded && "bg-muted/50"
                )}
              >
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  width={1600}
                  height={1000}
                  className={cn("h-auto w-full object-contain transition-opacity duration-300", imageLoaded ? "opacity-100" : "opacity-0")}
                  onLoad={() => setImageLoaded(true)}
                  priority
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
                    <div className="flex flex-col items-center gap-3 text-muted-foreground">
                      <div className="size-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      <p className="text-sm font-medium">Loading certificate...</p>
                    </div>
                  </div>
                )}
              </m.div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
