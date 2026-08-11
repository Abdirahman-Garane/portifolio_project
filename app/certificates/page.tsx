"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/page-header";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { CertificateCard } from "@/components/certificate-card";
import { certificates } from "@/data/certificates";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const issuers = [...new Set(certificates.map((c) => c.issuer))].sort();
const years = [...new Set(certificates.map((c) => c.year))].sort((a, b) => Number(b) - Number(a));

export default function CertificatesPage() {
  const [selectedIssuer, setSelectedIssuer] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesIssuer = selectedIssuer === "all" || cert.issuer === selectedIssuer;
      const matchesYear = selectedYear === "all" || cert.year === selectedYear;
      return matchesIssuer && matchesYear;
    });
  }, [selectedIssuer, selectedYear]);

  const hasFilters = selectedIssuer !== "all" || selectedYear !== "all";

  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        title={
          <>
            Credentials & <span className="text-primary">certifications</span>.
          </>
        }
        description="A collection of the certificates and courses that back my skills."
      />

      <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Achievements"
            title="Certificates I've earned"
            description="Each card shows the certificate image, its name, and a short description."
          />
          {hasFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedIssuer("all");
                setSelectedYear("all");
              }}
              className="gap-1.5"
            >
              <Filter className="size-4" />
              Clear filters
            </Button>
          )}
        </div>

        <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filter certificates">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hidden sm:inline">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filter by issuer">
            <Button
              variant={selectedIssuer === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedIssuer("all")}
              role="radio"
              aria-checked={selectedIssuer === "all"}
            >
              All issuers
            </Button>
            {issuers.map((issuer) => (
              <Button
                key={issuer}
                variant={selectedIssuer === issuer ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedIssuer(issuer)}
                role="radio"
                aria-checked={selectedIssuer === issuer}
              >
                {issuer}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Filter by year">
            <Button
              variant={selectedYear === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedYear("all")}
              role="radio"
              aria-checked={selectedYear === "all"}
            >
              All years
            </Button>
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(year)}
                role="radio"
                aria-checked={selectedYear === year}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>

        {filteredCertificates.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No certificates match the selected filters.</p>
            <Button variant="ghost" className="mt-4" onClick={() => { setSelectedIssuer("all"); setSelectedYear("all"); }}>
              Show all certificates
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((certificate, i) => (
              <Reveal key={certificate.title} delay={(i % 3) * 0.08}>
                <CertificateCard certificate={certificate} className="h-full" />
              </Reveal>
            ))}
          </div>
        )}

        {filteredCertificates.length > 0 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Showing {filteredCertificates.length} of {certificates.length} certificate{certificates.length !== 1 ? "s" : ""}
            {hasFilters ? " (filtered)" : ""}
          </p>
        )}
      </section>
    </>
  );
}
