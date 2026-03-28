import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { serviceCards } from "@/lib/site-data";

export function AboutSection() {
  return (
    <SectionReveal>
      <section id="about" className="relative scroll-mt-24 py-8 sm:py-12">
        <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About Me"
              title="Engineering with production discipline."
              description="I like turning messy product requirements into systems that are easier to maintain, safer to ship, and clearer to operate."
            />
            <p className="max-w-lg text-sm leading-8 text-muted-foreground font-serif">
              I want the next engineer to understand what the system is doing and why. That means readable middleware,
              traceable failures, and decisions that still make sense after the feature ships.
            </p>
          </div>

          <div className="grid gap-4">
            {serviceCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="group relative flex gap-5 rounded-[1.8rem] bg-card/60 p-5 ring-1 ring-border/45 transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute left-0 top-1/2 hidden h-px w-10 -translate-x-6 -translate-y-1/2 bg-linear-to-r from-transparent via-primary/40 to-transparent lg:block" />
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-semibold tracking-tight">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground font-serif">{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
