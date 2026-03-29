"use client";

import type { CSSProperties, ComponentType, SVGProps } from "react";
import { brandIcons } from "@/components/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";

type IconProps = SVGProps<SVGSVGElement>;

const coreOrbit = [
  {
    label: "Node.js",
    tech: "Node.js",
    className: "left-1/2 top-1 -translate-x-1/2 animate-float-b",
  },
  {
    label: "TypeScript",
    tech: "TypeScript",
    className: "right-3 top-24 animate-float-c",
  },
  {
    label: "Docker",
    tech: "Docker",
    className: "right-8 bottom-18 animate-float-a",
  },
  {
    label: "PostgreSQL",
    tech: "PostgreSQL",
    className: "left-1/2 bottom-1 -translate-x-1/2 animate-float-c",
  },
  {
    label: "Redis",
    tech: "Redis",
    className: "left-8 bottom-18 animate-float-b",
  },
  { label: "AWS", tech: "AWS", className: "left-3 top-24 animate-float-a" },
] as const;

const platformLane = [
  "React",
  "Next.js",
  "JavaScript",
  "Express",
  "MongoDB",
  "MySQL",
] as const;

const deliveryLane = [
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
              <div className="flex h-full flex-col">
                <div className="relative mx-auto flex h-116 w-full max-w-152 items-center justify-center overflow-hidden rounded-4xl border border-border/45 bg-background/48 px-4 py-6 sm:h-132">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_8%,transparent),transparent_42%)]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute h-112 w-md rounded-full border border-dashed border-primary/18 sm:h-124 sm:w-124"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute h-84 w-84 rounded-full border border-border/35 sm:h-96 sm:w-96"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute h-56 w-56 rounded-full border border-primary/18 bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_9%,transparent),transparent_66%)] blur-[1px] sm:h-64 sm:w-64"
                  />

                  <div className="relative z-10 grid h-40 w-40 place-items-center rounded-full border border-primary/20 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--card)_94%,transparent),color-mix(in_oklab,var(--background)_96%,transparent))] text-center shadow-[0_24px_60px_-34px_color-mix(in_oklab,var(--primary)_32%,transparent)] sm:h-48 sm:w-48">
                    <div>
                      <p className="font-mono-custom text-[11px] uppercase tracking-[0.26em] text-muted-foreground">
                        Core
                      </p>
                      <p className="mt-2 font-display text-[2rem] font-bold leading-none tracking-tight text-foreground sm:text-[2.35rem]">
                        Backend
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Foundation
                      </p>
                    </div>
                  </div>

                  {coreOrbit.map((item) => (
                    <div
                      key={item.label}
                      className={`absolute ${item.className} z-10 inline-flex items-center gap-2 rounded-full border border-border/55 bg-background/86 px-3 py-2 shadow-[0_10px_28px_-18px_color-mix(in_oklab,var(--primary)_45%,transparent)] backdrop-blur`}
                    >
                      <TechIcon name={item.tech} className="h-4 w-4" />
                      <span className="font-mono-custom text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {item.label}
                      </span>
                    </div>
                  ))}

                  <div className="absolute left-1/2 top-[4.2rem] h-12 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-primary/50 to-transparent" />
                  <div className="absolute right-[5.4rem] top-1/2 h-px w-14 -translate-y-1/2 bg-linear-to-r from-transparent via-primary/45 to-transparent" />
                  <div className="absolute left-1/2 bottom-[4.2rem] h-12 w-px -translate-x-1/2 bg-linear-to-t from-transparent via-primary/50 to-transparent" />
                  <div className="absolute left-[5.4rem] top-1/2 h-px w-14 -translate-y-1/2 bg-linear-to-l from-transparent via-primary/45 to-transparent" />
                </div>
              </div>

              <div className="flex h-full flex-col gap-5">
                <div className="rounded-[1.8rem] border border-border/50 bg-background/66 p-5">
                  <div>
                    <p className="font-display text-xl font-semibold tracking-tight">
                      Frameworks and platform tools
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {platformLane.map((item) => (
                      <TechPill key={item} label={item} />
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-border/50 bg-background/66 p-5">
                  <div>
                    <p className="font-display text-xl font-semibold tracking-tight">
                      Shipping, visibility, and safeguards
                    </p>
                  </div>
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
