type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <div className={`inline-flex items-center gap-3 ${centered ? "mx-auto" : ""}`}>
        <span className="h-px w-10 bg-primary/55" />
        <p className="section-label text-[11px] tracking-[0.32em] text-foreground/70">{eyebrow}</p>
      </div>
      <h2 className="mt-5 text-3xl font-display font-bold leading-[1.02] tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base font-serif">
        {description}
      </p>
    </div>
  );
}
