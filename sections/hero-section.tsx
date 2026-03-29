"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { brandIcons } from "@/components/brand-icons";
import { stats } from "@/lib/site-data";

const GitHubIcon = brandIcons.github;
const LinkedInIcon = brandIcons.linkedin;

const heroSignals = [
  { label: "System Design", value: "Services, queues, scaling, resilience" },
  { label: "Release Flow", value: "Containers, cloud, routing, delivery" },
  { label: "Stability", value: "Observability, caching, and safer rollouts" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero='fade']",
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out", delay: 0.08 }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative scroll-mt-24 py-8 min-h-[calc(100vh-8rem)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-30" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[6%] top-[8%] h-56 w-56 rounded-full bg-primary/8 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[14%] h-56 w-56 rounded-full bg-secondary/8 blur-[110px]" />

      <div className="relative px-5 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10 -mt-10">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="space-y-8">
            <div data-hero="fade" className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-background/65 px-4 py-2 ring-1 ring-border/45">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono-custom text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Pokhara, Nepal
                </span>
              </span>
            </div>

            <div className="space-y-4">
              <h1
                data-hero="fade"
                className="text-5xl font-display font-bold tracking-tight leading-[0.96] text-balance sm:text-6xl xl:text-[5.25rem]"
              >
                Er. Bikash
                <br />
                <span className="gradient-text">Basaula</span>
              </h1>

              <p data-hero="fade" className="text-xl font-display font-medium tracking-tight text-muted-foreground">
                Backend Software Engineer
              </p>

              <p data-hero="fade" className="max-w-xl text-base leading-8 text-muted-foreground font-serif sm:text-lg">
                I build secure, maintainable backend systems with an emphasis on clarity, thoughtful architecture, and
                smooth delivery.
              </p>
            </div>

            <div data-hero="fade" className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#projects"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-display font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-background/70 px-6 text-sm font-display font-semibold ring-1 ring-border/55 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary hover:ring-primary/25"
              >
                Get in Touch
              </Link>
            </div>

            <div data-hero="fade" className="flex flex-wrap gap-2">
              <Link
                href="https://github.com/beekashn"
                target="_blank"
                rel="noreferrer"
                className="tech-tag hover:cursor-pointer"
              >
                <GitHubIcon className="h-3 w-3" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/bikash-basaula-283854210"
                target="_blank"
                rel="noreferrer"
                className="tech-tag hover:cursor-pointer"
              >
                <LinkedInIcon className="h-3 w-3" />
                LinkedIn
              </Link>
            </div>
          </div>

          <div data-hero="fade" className="relative">
            <div className="relative grid gap-4 sm:grid-cols-[0.86fr_1.14fr]">
                <div className="relative min-h-92 overflow-hidden rounded-[1.8rem] bg-background/72 ring-1 ring-border/35">
                  <Image
                    src="photo-1.png"
                    alt="Portrait of Er. Bikash Basaula"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(0,0,0,0.26)_100%)]" />
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] bg-background/72 px-4 py-3 ring-1 ring-border/40 backdrop-blur">
                    <p className="font-mono-custom text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                      working style
                    </p>
                    <p className="mt-2 text-sm font-display font-semibold tracking-tight">
                      Clear systems built to scale.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.6rem] bg-background/68 p-4 ring-1 ring-border/35">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono-custom text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                          system focus
                        </p>
                        <p className="mt-2 font-display text-xl font-semibold tracking-tight">
                          What I care about most
                        </p>
                      </div>
                      <div className="rounded-full bg-primary/10 px-3 py-1 ring-1 ring-primary/20">
                        <span className="font-mono-custom text-[10px] uppercase tracking-[0.24em] text-primary">
                          backend
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {heroSignals.map((signal, index) => (
                        <div
                          key={signal.label}
                          className="rounded-[1.25rem] bg-background/84 px-4 py-3 ring-1 ring-border/35"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono-custom text-[10px] uppercase tracking-[0.22em] text-primary">
                              0{index + 1}
                            </span>
                            <div>
                              <p className="text-sm font-display font-semibold tracking-tight">{signal.label}</p>
                              <p className="mt-1 text-sm text-muted-foreground font-serif">{signal.value}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>



                  <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[1.3rem] bg-background/68 p-3 text-center ring-1 ring-border/35"
                      >
                        <p className="text-xl font-display font-bold tracking-tight gradient-text">{stat.value}</p>
                        <p className="mt-1 text-[10px] leading-4 text-muted-foreground font-mono-custom">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
