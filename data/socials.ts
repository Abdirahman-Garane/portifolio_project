import { Mail, MapPin, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/brand-icons";

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Abdirahman-Garane",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eng-abdirahman-garane-73405b17b/",
    icon: LinkedinIcon,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/abdirahman_dev",
    icon: XIcon,
  },
  {
    label: "Email",
    href: "mailto:gaarane40@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Banadir,Somalia",
    icon: MapPin,
  },
  {
    label: "Portfolio",
    href: "/",
    icon: Globe,
  },
];
