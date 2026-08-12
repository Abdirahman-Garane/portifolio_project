import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingOverlay } from "@/components/loading-overlay";
import { ScrollProgress } from "@/components/scroll-progress";
import { PageTransition } from "@/components/page-transition";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdirahman.dev"),
  title: {
    default: "Abdirahman Garane — Full-Stack Developer",
    template: "%s · Abdirahman Garane",
  },
  description:
    "Premium, high-performance portfolio of Abdirahman Garane — full-stack developer building web experiences with Next.js, TypeScript, and careful design.",
  keywords: [
    "Abdirahman Garane",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Web Development",
    "UI Design",
  ],
  authors: [{ name: "Abdirahman Garane" }],
  creator: "Abdirahman Garane",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdirahman.dev",
    siteName: "Abdirahman Garane",
    title: "Abdirahman Garane — Full-Stack Developer",
    description:
      "Premium, high-performance portfolio of Abdirahman Garane — full-stack developer building web experiences with Next.js, TypeScript, and careful design.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Abdirahman Garane — Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdirahman Garane — Full-Stack Developer",
    description:
      "Premium, high-performance portfolio of Abdirahman Garane — full-stack developer building web experiences with Next.js, TypeScript, and careful design.",
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://abdirahman.dev",
  },
};

export const viewport: Viewport = {
  themeColor: "#fffaf0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Providers>
          <LoadingOverlay />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
