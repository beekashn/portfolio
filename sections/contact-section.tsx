import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { contactLinks } from "@/lib/site-data";

export function ContactSection() {
  return (
    <SectionReveal>
      <section id="contact" className="relative scroll-mt-24 py-8 sm:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-1/2 -translate-x-1/2 rounded-full bg-primary/6 blur-3xl" />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s talk."
              description="If you need help building services, improving system architecture, or shipping more confidently, I’d be happy to connect."
            />

            <div className="space-y-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-[1.5rem] bg-card/60 px-5 py-4 ring-1 ring-border/45 transition-all duration-300 hover:-translate-y-1 hover:ring-primary/25"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/18 transition-colors group-hover:bg-primary/15">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="font-mono-custom text-xs text-muted-foreground">{item.label}</p>
                        <p className="mt-0.5 max-w-[200px] truncate text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-card/60 p-6 ring-1 ring-border/45 sm:p-8">
            <div className="relative">
              <p className="section-label">Send a message</p>
              <h3 className="mt-2 text-2xl font-display font-bold tracking-tight">Share the problem you are solving.</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground font-serif">
                Send a short note about your project, team, or technical challenge and I will take it from there.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
