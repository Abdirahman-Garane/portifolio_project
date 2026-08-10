import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-muted/60 px-3.5 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary" />
        {eyebrow}
      </span>
      <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.02em] text-balance sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-pretty text-base leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
