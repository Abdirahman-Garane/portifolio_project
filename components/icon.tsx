import {
  Wallet,
  Layout,
  Braces,
  Database,
  Palette,
  Wrench,
  Cloud,
  LayoutDashboard,
  Puzzle,
  Gauge,
  GitBranch,
  Blocks,
  Server,
  Code2,
  PenTool,
  Terminal,
  ShieldCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types";

const iconMap: Record<IconName, LucideIcon> = {
  wallet: Wallet,
  layout: Layout,
  braces: Braces,
  database: Database,
  palette: Palette,
  wrench: Wrench,
  cloud: Cloud,
  layoutDashboard: LayoutDashboard,
  puzzle: Puzzle,
  gauge: Gauge,
  gitBranch: GitBranch,
  blocks: Blocks,
  server: Server,
  code2: Code2,
  figma: PenTool,
  terminal: Terminal,
  shieldCheck: ShieldCheck,
  rocket: Rocket,
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = iconMap[name] ?? Code2;
  return <Component className={className} aria-hidden="true" />;
}
