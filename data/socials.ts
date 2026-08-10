import { Mail, Phone, MapPin, Globe } from "lucide-react";
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
    href: "https://www.linkedin.com/in/abdirahman-garane",
    icon: LinkedinIcon,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/abdirahman_dev",
    icon: XIcon,
  },
  {
    label: "Email",
    href: "mailto:hello@abdirahman.dev",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+254700000000",
    icon: Phone,
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Nairobi,Kenya",
    icon: MapPin,
  },
  {
    label: "Portfolio",
    href: "/",
    icon: Globe,
  },
];
