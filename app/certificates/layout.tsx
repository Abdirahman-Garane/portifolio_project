import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Certifications and achievements of full-stack developer Abdirahman Garane.",
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}