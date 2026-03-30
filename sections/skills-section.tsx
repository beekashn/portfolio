"use client";

import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Database,
  GitBranch,
  Globe,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brandIcons } from "@/components/brand-icons";
import { NetworkCanvas } from "@/components/network-canvas";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";

type IconProps = SVGProps<SVGSVGElement>;

function calcOrbitR(cardWidth: number) {
  return Math.min(165, Math.max(90, cardWidth / 2 - 78));
}

const coreOrbit: {
  label: string;
  sub: string;
  icon: LucideIcon;
}[] = [
  { label: "API Design", sub: "REST, contracts & middleware", icon: Globe },
  {
    label: "Auth & RBAC",
    sub: "JWT, roles & access control",
    icon: ShieldCheck,
  },
  { label: "Caching", sub: "Redis, TTL & invalidation", icon: Zap },
  {
    label: "Data Modeling",
    sub: "Schema, relations & queries",
    icon: Database,
  },
  { label: "CI / CD", sub: "Build, test & deploy pipelines", icon: GitBranch },
  { label: "Observability", sub: "Metrics, logs & tracing", icon: Activity },
];

const platformLane = [
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "React",
  "Next.js",
  "JavaScript",
  "Express",
  "MongoDB",
  "MySQL",
] as const;

const deliveryLane = [
  "Docker",
  "AWS",
  "GitHub Actions",
  "Nginx",
  "Prometheus",
  "Grafana",
  "Postman",
  "Stripe",
  "SendGrid",
  "JWT",
  "Firebase",
  "Tailwind CSS",
  "Vite",
] as const;

const techIcons: Record<string, ComponentType<IconProps>> = {
  AWS: brandIcons.aws,
  "AWS EC2 / ECR / SSM": brandIcons.aws,
  React: brandIcons.react,
  "Next.js": brandIcons.nextjs,
  "Node.js": brandIcons.nodejs,
  "Node.js & Express": brandIcons.nodejs,
  Express: brandIcons.express,
  TypeScript: brandIcons.typescript,
  JavaScript: brandIcons.javascript,
  "Tailwind CSS": brandIcons.tailwindcss,
  Vite: brandIcons.vite,
  PostgreSQL: brandIcons.postgresql,
  Redis: brandIcons.redis,
  "Redis / Valkey": brandIcons.redis,
  Firebase: brandIcons.firebase,
  MySQL: brandIcons.mysql,
  MongoDB: brandIcons.mongodb,
  Docker: brandIcons.docker,
  Nginx: brandIcons.nginx,
  "GitHub Actions": brandIcons.githubActions,
  "GitHub Actions CI/CD": brandIcons.githubActions,
  JWT: brandIcons.jwt,
  "JWT / RBAC / API Keys": brandIcons.jwt,
  Grafana: brandIcons.grafana,
  Postman: brandIcons.postman,
  "Prometheus / Grafana": brandIcons.prometheus,
  Prometheus: brandIcons.prometheus,
  Stripe: brandIcons.stripe,
  "Webhooks & Stripe": brandIcons.stripe,
  SendGrid: brandIcons.sendgrid,
  "Firebase Firestore": brandIcons.firebase,
  SQL: brandIcons.sql,
  "REST API Design": brandIcons.rest,
  "Structured Logging": brandIcons.logging,
  "Middleware Architecture": brandIcons.middleware,
};

function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = techIcons[name] ?? brandIcons.nodejs;
  return <Icon className={className} />;
}

function OrbitPill({
  label,
  icon: Icon,
  active,
}: {
  label: string;
  icon: LucideIcon;
  active: boolean;
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-1.5 rounded-full border bg-background/88 px-2.5 py-1.5 backdrop-blur transition-colors duration-200 sm:gap-2 sm:px-3 sm:py-2",
        active
          ? "border-primary/50 shadow-[0_0_20px_-4px_color-mix(in_oklab,var(--primary)_60%,transparent)]"
          : "border-border/55 shadow-[0_8px_22px_-14px_color-mix(in_oklab,var(--primary)_40%,transparent)]",
      ].join(" ")}
    >
      <Icon className="h-3 w-3 shrink-0 text-primary sm:h-3.5 sm:w-3.5" />
      <span className="whitespace-nowrap font-mono-custom text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px] sm:tracking-[0.16em]">
        {label}
      </span>
    </div>
  );
}

function TechPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/55 bg-background/82 px-3 py-2 shadow-[0_10px_28px_-18px_color-mix(in_oklab,var(--primary)_45%,transparent)] backdrop-blur">
      <TechIcon name={label} className="h-4 w-4 shrink-0" />
      <span className="font-mono-custom text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function SkillsSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const orbitRingRef = useRef<HTMLDivElement>(null);
  const pillContentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [active, setActive] = useState<(typeof coreOrbit)[number] | null>(null);
  const [orbitR, setOrbitR] = useState(165);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ring = orbitRingRef.current;
    if (!ring) return;

    const contents = pillContentRefs.current.filter(
      Boolean,
    ) as HTMLDivElement[];

    contents.forEach((el, i) => gsap.set(el, { rotation: -(i * 60) }));

    const tl = gsap.timeline({
      repeat: -1,
      paused: true,
      defaults: { ease: "none", duration: 30 },
    });
    tl.to(ring, { rotation: 360 }, 0);
    contents.forEach((el) => tl.to(el, { rotation: "-=360" }, 0));

    timelineRef.current = tl;

    ScrollTrigger.create({
      trigger: ring,
      start: "top 88%",
      onEnter: () => tl.play(),
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const ro = new ResizeObserver(([entry]) => {
      setOrbitR(calcOrbitR(entry.contentRect.width));
    });
    ro.observe(card);
    return () => ro.disconnect();
  }, []);

  const slowDown = () => {
    if (timelineRef.current)
      gsap.to(timelineRef.current, {
        timeScale: 0.1,
        duration: 0.7,
        ease: "power2.out",
      });
  };
  const speedUp = () => {
    if (timelineRef.current)
      gsap.to(timelineRef.current, {
        timeScale: 1,
        duration: 1,
        ease: "power2.inOut",
      });
  };

  const onPillEnter = (item: (typeof coreOrbit)[number], i: number) => {
    setActive(item);
    const el = pillContentRefs.current[i];
    if (el) gsap.to(el, { scale: 1.12, duration: 0.25, ease: "back.out(2)" });
  };
  const onPillLeave = (i: number) => {
    setActive(null);
    const el = pillContentRefs.current[i];
    if (el) gsap.to(el, { scale: 1, duration: 0.2, ease: "power2.inOut" });
  };

  return (
    <SectionReveal>
      <section id="skills" className="relative scroll-mt-24 py-8 sm:py-12">
        <div className="mx-auto">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I trust in production."
            description="The stack at the center of my backend work, with the surrounding tools organized by how they help me build, deliver, and keep systems understandable."
          />

          <article className="relative">
            <div className="mt-10 grid gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-stretch">
              {/* ── LEFT column ── */}
              <div className="flex h-full flex-col">
                <div
                  ref={cardRef}
                  className="relative flex min-h-104 w-full flex-1 items-center justify-center overflow-hidden rounded-4xl border border-border/45 bg-background/48 sm:min-h-124 xl:min-h-0"
                >
                  <NetworkCanvas
                    nodeCount={50}
                    connectDistance={200}
                    className="z-0"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_9%,transparent),transparent_45%)]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute z-10 h-62.5 w-62.5 rounded-full border border-dashed border-primary/18 animate-orbit-dashed sm:h-85 sm:w-85 xl:h-100 xl:w-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute z-10 h-47.5 w-47.5 rounded-full border border-border/28 sm:h-62.5 sm:w-62.5 xl:h-75 xl:w-75"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute z-10 h-30 w-30 rounded-full border border-primary/22 animate-pulse-ring-1 sm:h-38.75 sm:w-38.75 xl:h-48.75 xl:w-48.75"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute z-10 h-30 w-30 rounded-full border border-primary/14 animate-pulse-ring-2 sm:h-38.75 sm:w-38.75 xl:h-48.75 xl:w-48.75"
                  />

                  <div
                    ref={orbitRingRef}
                    className="absolute inset-0 z-20"
                    onMouseEnter={slowDown}
                    onMouseLeave={speedUp}
                  >
                    {coreOrbit.map((item, i) => (
                      <div
                        key={item.label}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          width: 0,
                          height: 0,
                          transform: `rotate(${i * 60}deg)`,
                          transformOrigin: "0 0",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: `-${orbitR}px`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <div
                            ref={(el) => {
                              pillContentRefs.current[i] = el;
                            }}
                            onMouseEnter={() => onPillEnter(item, i)}
                            onMouseLeave={() => onPillLeave(i)}
                            onClick={() => setActive(item)}
                            className="cursor-default"
                          >
                            <OrbitPill
                              label={item.label}
                              icon={item.icon}
                              active={active?.label === item.label}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pointer-events-none relative z-20 grid h-28 w-28 select-none place-items-center rounded-full border border-primary/22 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--card)_94%,transparent),color-mix(in_oklab,var(--background)_96%,transparent))] text-center shadow-[0_24px_60px_-34px_color-mix(in_oklab,var(--primary)_32%,transparent)] sm:h-40 sm:w-40 xl:h-44 xl:w-44">
                    <div className="w-full px-3 sm:px-4">
                      <p className="font-mono-custom text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px] sm:tracking-[0.26em]">
                        Core
                      </p>
                      {active ? (
                        <>
                          <p className="mt-1 font-display text-sm font-bold leading-tight tracking-tight text-primary sm:mt-1.5 sm:text-base">
                            {active.label}
                          </p>
                          <p className="mt-1 font-mono-custom text-[9px] leading-3 text-muted-foreground sm:mt-1.5 sm:text-[10px] sm:leading-4">
                            {active.sub}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="mt-1.5 font-display text-[1.35rem] font-bold leading-none tracking-tight text-foreground sm:mt-2 sm:text-[2rem]">
                            Backend
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                            Foundation
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: tech cards ── */}
              <div className="flex h-full flex-col gap-5">
                <div className="rounded-[1.8rem] border border-border/50 bg-background/66 p-5">
                  <p className="font-display text-xl font-semibold tracking-tight">
                    Frameworks and platform tools
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {platformLane.map((item) => (
                      <TechPill key={item} label={item} />
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-border/50 bg-background/66 p-5">
                  <p className="font-display text-xl font-semibold tracking-tight">
                    Shipping, visibility, and safeguards
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {deliveryLane.map((item) => (
                      <TechPill key={item} label={item} />
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] border border-border/45 bg-background/58 p-4">
                    <p className="text-sm leading-6 text-muted-foreground">
                      Node.js, TypeScript, PostgreSQL, and Redis lead my work.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-border/45 bg-background/58 p-4">
                    <p className="text-sm leading-6 text-muted-foreground">
                      Docker, AWS, Nginx, and Actions keep releases smooth.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-border/45 bg-background/58 p-4">
                    <p className="text-sm leading-6 text-muted-foreground">
                      Metrics, auth, and integrations make systems easier to
                      trust.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </SectionReveal>
  );
}
