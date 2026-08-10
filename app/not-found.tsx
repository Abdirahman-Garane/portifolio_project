import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-hairline">
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-xl px-4 py-24 text-center">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Error 404
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-[-0.03em] sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" variant="pill">
            <Link href="/">
              <Home className="size-4" /> Back home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              <ArrowLeft className="size-4" /> View projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
