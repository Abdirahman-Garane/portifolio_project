"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CertificateCard } from "@/components/certificate-card";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { certificates } from "@/data/certificates";
import { cn } from "@/lib/utils";

export function CertificatesPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const totalItems = certificates.length;
  const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

  const currentCertificates = certificates.slice(currentIndex * itemsPerView, (currentIndex + 1) * itemsPerView);
  const hasNext = currentIndex < maxIndex;
  const hasPrev = currentIndex > 0;

  return (
    <section className="border-y border-hairline bg-muted/30">
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
            description="A snapshot of the certificates I've earned — click one to view it."
          />
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link href="/certificates">
              All certificates <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="relative mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel" aria-label={`Certificate page ${currentIndex + 1}`}>
            {currentCertificates.map((certificate) => (
              <CertificateCard key={certificate.title} certificate={certificate} className="h-full" />
            ))}
          </div>

          {(maxIndex > 0) && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={!hasPrev}
                aria-label="Previous certificates"
                className={cn("transition-opacity", !hasPrev && "opacity-50 pointer-events-none")}
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </Button>
              <div className="flex items-center gap-2" role="tablist" aria-label="Certificate pages">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === currentIndex}
                    aria-label={`Page ${i + 1}`}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      "size-2 rounded-full transition-all duration-200",
                      i === currentIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                    )}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))}
                disabled={!hasNext}
                aria-label="Next certificates"
                className={cn("transition-opacity", !hasNext && "opacity-50 pointer-events-none")}
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Button>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Showing {currentCertificates.length} of {totalItems} certificate{totalItems !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
