import { SectionReveal } from "@/components/section-reveal";
import { education, experience } from "@/lib/site-data";
import { Briefcase, GraduationCap } from "lucide-react";

type TimelineItem = {
  title: string;
  meta: string;
  period: string;
  summary: string;
  bullets: string[];
};

function TimelineEntry({ item, last }: { item: TimelineItem; last: boolean }) {
  return (
    <article className="relative grid grid-cols-[auto_1fr] gap-4">
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/40 bg-background">
          <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        </div>
        {!last && <div className="mt-2 min-h-8 w-px flex-1 bg-linear-to-b from-primary/30 to-transparent" />}
      </div>

      <div className="pb-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h4 className="text-base font-display font-semibold tracking-tight">{item.title}</h4>
            <p className="mt-0.5 text-sm text-muted-foreground">{item.meta}</p>
          </div>
          <span className="shrink-0 rounded-full bg-muted/50 px-2.5 py-1 font-mono-custom text-[10px] uppercase tracking-widest text-muted-foreground ring-1 ring-border/50">
            {item.period}
          </span>
        </div>
        <p className="mt-3 text-sm leading-7 text-muted-foreground font-serif">{item.summary}</p>
        {item.bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5 text-sm text-muted-foreground">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                <span className="font-serif leading-6">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function TimelineBlock({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: TimelineItem[];
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-[1.9rem] bg-card/60 p-5 ring-1 ring-border/45 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/18">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <h3 className="text-lg font-display font-bold tracking-tight">{title}</h3>
      </div>
      <div className="mt-6">
        {items.map((item, index) => (
          <TimelineEntry key={`${title}-${item.title}`} item={item} last={index === items.length - 1} />
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <SectionReveal>
      <section id="journey" className="relative scroll-mt-24 py-8 sm:py-12">
        <div className="relative z-10">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/55" />
              <p className="section-label text-[11px] tracking-[0.32em] text-foreground/70">Experience & Education</p>
            </div>
            <h2 className="mt-5 text-3xl font-display font-bold leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl xl:whitespace-nowrap">
              Experience and technical growth.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base font-serif">
              Professional work, early engineering experience, and formal study all shape how I design software today.
            </p>
          </div>
        </div>
        <div className="relative z-10 mt-10 grid gap-5 xl:grid-cols-2">
          <TimelineBlock title="Experience" items={experience} icon={Briefcase} />
          <TimelineBlock title="Education" items={education} icon={GraduationCap} />
        </div>
      </section>
    </SectionReveal>
  );
}
