import { statistics } from "@/data/personal";
import { Counter } from "@/components/counter";

export function Statistics() {
  return (
    <section className="border-y border-hairline bg-card dark:bg-[#1e2329]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:py-16">
        {statistics.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-2 text-center"
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="font-mono text-4xl font-bold tabular-nums tracking-[-0.02em] text-primary sm:text-5xl"
            />
            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
