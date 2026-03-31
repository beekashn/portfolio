"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { brandIcons } from "@/components/brand-icons";
import { projects } from "@/lib/site-data";

const projectModes = [
  {
    label: "API Platform",
    icon: brandIcons.postgresql,
    chipClass: "text-primary",
    glowClass: "bg-primary/10",
    lineClass: "bg-primary/55",
    miniNodes: ["Auth", "Cache", "DB"],
  },
  {
    label: "CI/CD Pipeline",
    icon: brandIcons.aws,
    chipClass: "text-secondary",
    glowClass: "bg-secondary/10",
    lineClass: "bg-secondary/55",
    miniNodes: ["Build", "ECR", "EC2"],
  },
  {
    label: "Payments System",
    icon: brandIcons.stripe,
    chipClass: "text-chart-3",
    glowClass: "bg-chart-3/10",
    lineClass: "bg-chart-3/55",
    miniNodes: ["Stripe", "Webhook", "Store"],
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-project-module]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 76%", once: true },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  const handlePointer = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--mx", `${x}%`);
    event.currentTarget.style.setProperty("--my", `${y}%`);
  };

  return (
    <section id="projects" ref={ref} className="relative scroll-mt-24 py-8 sm:py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-none">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-primary/55" />
              <p className="section-label text-[11px] tracking-[0.32em] text-foreground/70">Projects</p>
            </div>
            <h2 className="mt-5 text-3xl font-display font-bold leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl xl:whitespace-nowrap">
              Selected projects.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base font-serif">
              A compact look at three projects that reflect how I approach system design, delivery, and dependable software.
            </p>
          </div>
        </div>
        <Link
          href="https://github.com/beekashn"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 self-start rounded-full bg-background/55 px-5 py-2.5 text-sm font-display font-medium ring-1 ring-border/55 transition-all hover:-translate-y-0.5 hover:text-primary hover:ring-primary/25"
        >
          All on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

        <div className="grid gap-4 xl:grid-cols-3 mt-10 ">
          {projects.map((project, index) => {
            const mode = projectModes[index];
            const Icon = mode.icon;

            return (
              <article
                key={project.title}
                data-project-module
                onMouseMove={handlePointer}
                style={
                  {
                    "--mx": "50%",
                    "--my": "50%",
                  } as CSSProperties
                }
                className="group relative overflow-hidden rounded-[1.8rem] bg-card/60 p-4 ring-1 ring-border/45 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_var(--mx)_var(--my),color-mix(in_oklab,var(--primary)_10%,transparent),transparent_28%)]" />
                <div className={`absolute -right-8 top-4 h-28 w-28 rounded-full ${mode.glowClass} blur-3xl`} />

                <div className="relative space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${mode.glowClass} ${mode.chipClass} ring-1 ring-border/35`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="font-mono-custom text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                          0{index + 1} / {mode.label}
                        </p>
                        <p className="mt-1 text-sm font-display font-semibold">{project.title}</p>
                      </div>
                    </div>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-full p-1.5 text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </div>

                  <p className="text-sm leading-7 text-muted-foreground font-serif">
                    {project.description}
                  </p>

                  <div className="relative overflow-hidden rounded-[1.35rem] bg-background/70 p-4 ring-1 ring-border/35">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-mono-custom text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        system flow
                      </span>
                      <span className={`h-2.5 w-2.5 rounded-full ${mode.lineClass} animate-pulse`} />
                    </div>

                    <div className="relative flex items-center justify-between gap-2 py-3">
                      <div className={`absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 ${mode.lineClass} opacity-20`} />
                      <div className={`absolute left-4 top-1/2 h-1.5 w-10 -translate-y-1/2 rounded-full ${mode.lineClass} blur-[2px] opacity-80 animate-[pulse_2.1s_ease-in-out_infinite]`} />

                      {mode.miniNodes.map((node, nodeIndex) => (
                        <div
                          key={node}
                          className="relative z-10 rounded-full bg-background px-3 py-2 ring-1 ring-border/40 transition-transform duration-300"
                          style={{
                            transform: `translateY(${nodeIndex % 2 === 0 ? "-2px" : "2px"})`,
                          }}
                        >
                          <span className={`font-mono-custom text-[10px] uppercase tracking-[0.18em] ${mode.chipClass}`}>
                            {node}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(", ").slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-background/82 px-3 py-2 text-xs text-muted-foreground ring-1 ring-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                      <div key={highlight} className="flex gap-3">
                        <span className={`font-mono-custom text-[10px] uppercase tracking-[0.24em] ${mode.chipClass}`}>
                          0{highlightIndex + 1}
                        </span>
                        <p className="text-sm leading-6 text-muted-foreground font-serif">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}
