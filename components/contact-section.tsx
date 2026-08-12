import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeader } from "@/components/section-header";
import { socials } from "@/data/socials";
import { personal } from "@/data/personal";

export function ContactSection() {
  const contactItems = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: MapPin, label: "Location", value: personal.location, href: "https://maps.google.com/?q=Banadir,Somalia" },
  ];

  return (
    <section className="border-y border-hairline bg-muted/30">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeader
          eyebrow="Contact"
          title={
            <>
              Let's talk about <span className="text-primary">your next project</span>.
            </>
          }
          description="Tell me about what you're building and I'll get back to you within 24 hours."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-hairline bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <item.icon className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="block text-[15px] font-semibold">{item.value}</span>
                </span>
              </a>
            ))}

            <div className="rounded-xl border border-hairline bg-card p-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Follow me
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.slice(0, 4).map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-md border border-hairline text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    <social.icon className="size-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
