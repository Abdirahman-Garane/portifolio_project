"use client";

import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import type { Certificate } from "@/types";

interface CertificateViewerProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export function CertificateViewer({ certificate, onClose }: CertificateViewerProps) {
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
              <button
                onClick={onClose}
                aria-label="Close certificate preview"
                className="flex size-9 shrink-0 items-center justify-center rounded-md border border-hairline text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-muted/40 p-4 sm:p-6">
              <m.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="relative w-full overflow-hidden rounded-lg border border-hairline bg-card shadow-lg dark:border-[#2b3139]"
              >
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  width={1600}
                  height={1000}
                  className="h-auto w-full object-contain"
                />
              </m.div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
