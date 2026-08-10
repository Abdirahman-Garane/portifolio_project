"use client";

import { AnimatePresence, m } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollY } from "@/hooks/use-scroll-y";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const scrollY = useScrollY();
  const visible = scrollY > 600;

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={cn(
            "fixed bottom-6 right-6 z-40 flex size-10 items-center justify-center rounded-md",
            "border border-hairline bg-card text-foreground shadow-lg",
            "transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          )}
        >
          <ArrowUp className="size-4" />
        </m.button>
      )}
    </AnimatePresence>
  );
}
