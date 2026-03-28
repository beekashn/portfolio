"use client";

import {
  Server,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";

const orbitStack = [
  { label: "AWS", tech: "AWS", className: "left-1/2 top-2 -translate-x-1/2 animate-float-b" },
  { label: "Node.js", tech: "Node.js", className: "left-8 top-24 animate-float-a" },
  { label: "TypeScript", tech: "TypeScript", className: "right-8 top-24 animate-float-c" },
  { label: "PostgreSQL", tech: "PostgreSQL", className: "left-10 bottom-20 animate-float-c" },
  { label: "Redis", tech: "Redis", className: "right-10 bottom-20 animate-float-b" },
  { label: "Docker", tech: "Docker", className: "left-1/2 bottom-2 -translate-x-1/2 animate-float-a" },
];

type IconProps = SVGProps<SVGSVGElement>;

function NodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 2.2 19.4 6.4v11.2L12 21.8 4.6 17.6V6.4L12 2.2Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.3 8.6v6.8M14.8 8.6v6.8M9.3 8.6l5.5 6.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function TypeScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 9h8M12 9v7M14.8 12.2c.4-.6 1-.9 1.8-.9.9 0 1.6.4 1.6 1.2 0 2-3.6 1.1-3.6 3.3 0 .9.8 1.6 2.2 1.6.9 0 1.7-.2 2.3-.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PostgresIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <ellipse cx="12" cy="7" rx="5.2" ry="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.8 7v6.7c0 1.7 2.3 3 5.2 3s5.2-1.3 5.2-3V7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.8 10.4c0 1.7 2.3 3 5.2 3s5.2-1.3 5.2-3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function RedisIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m12 4 7 3.2-7 3.1L5 7.2 12 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="m19 7.2-7 3.1-7-3.1v3.7l7 3 7-3V7.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="m19 10.9-7 3-7-3v3.5l7 3.1 7-3.1v-3.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function DockerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6.5 14.8h8.7c1.7 0 2.9-.6 3.8-1.9.3.3.8.5 1.4.5-.3 1.7-1.8 4.4-5.9 4.4H6.5v-3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M7 11.2h2.2v2.2H7zM9.3 11.2h2.2v2.2H9.3zM11.6 11.2h2.2v2.2h-2.2zM9.3 8.9h2.2v2.2H9.3zM11.6 8.9h2.2v2.2h-2.2z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16.7 10.8c.3-1.1 1.1-1.8 2.2-2.1.7.9.8 1.9.4 2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function AwsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6.2 14.2c1.8 1.2 4 1.8 6.5 1.8 2 0 3.9-.4 5.5-1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.1 12.6 10 8.3h1.3l1.8 4.3M8.8 10.9h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.2 8.3v4.3M15.2 8.3h2.6M15.2 10.4h2.2M15.2 12.6h2.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function NginxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3.3 19 7.4v9.2L12 20.7 5 16.6V7.4L12 3.3Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 15.3V8.7l6 6.6V8.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubActionsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="7" cy="17" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="9" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17" cy="12" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 15.5 8.7 9.8M10.7 9l4.5 2.1M8.7 18.1l6.5-4.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function JwtIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4.8 9.5 6.2v2.9L12 10.5l2.5-1.4V6.2L12 4.8Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7.2 10.1 4.7 11.5v2.9l2.5 1.4 2.5-1.4v-2.9l-2.5-1.4ZM16.8 10.1l-2.5 1.4v2.9l2.5 1.4 2.5-1.4v-2.9l-2.5-1.4ZM12 15.4l-2.5 1.4v2.9l2.5 1.4 2.5-1.4v-2.9L12 15.4Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function PrometheusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4.6c-2.6 0-4.7 2.1-4.7 4.8 0 3.2 2.2 4.4 2.2 6.6 0 1.2 1 2.2 2.5 2.2s2.5-1 2.5-2.2c0-2.2 2.2-3.4 2.2-6.6 0-2.7-2.1-4.8-4.7-4.8Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.2 11.2 12 8.2l1.8 3-1.8 1.7-1.8-1.7Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function StripeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M15.8 8.2c-1.1-.5-2.2-.8-3.6-.8-2.8 0-4.6 1.5-4.6 3.8 0 3.6 5 3 5 5 0 .7-.6 1-1.6 1-1.2 0-2.5-.4-3.5-1v2.4c1 .5 2.3.8 3.6.8 2.9 0 4.9-1.4 4.9-3.9 0-3.8-5-3.1-5-5 0-.6.5-.9 1.4-.9 1 0 2 .2 3.4.8V8.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FirebaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7.2 18.8 10 6.6c.1-.5.7-.7 1-.3l2 3.1-5.8 9.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="m7.2 18.8 9.8-5.6-2.7-8.1c-.2-.5-.9-.6-1.2-.1L7.2 18.8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="m7.2 18.8 4.7-10.3 5.6 4.7-10.3 5.6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function SqlIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4.5" y="5.5" width="15" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 10.2c.4-.5 1-.8 1.8-.8.9 0 1.5.4 1.5 1.1 0 1.8-3.4 1-3.4 3 0 .9.7 1.5 2 1.5.8 0 1.6-.2 2.2-.6M13.6 14.7h2.6M15 9.5v5.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function RestIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8.2 8.4 6.2 12l2 3.6M15.8 8.4l2 3.6-2 3.6M10.5 16l3-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LogIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 9h7M8.5 12h5M8.5 15h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function MiddlewareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4.2 18.5 8 12 11.8 5.5 8 12 4.2ZM5.5 8v8L12 19.8l6.5-3.8V8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 11.8v8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

const techIcons: Record<string, ComponentType<IconProps>> = {
  AWS: AwsIcon,
  "AWS EC2 / ECR / SSM": AwsIcon,
  "Node.js": NodeIcon,
  "Node.js & Express": NodeIcon,
  TypeScript: TypeScriptIcon,
  PostgreSQL: PostgresIcon,
  Redis: RedisIcon,
  "Redis / Valkey": RedisIcon,
  Docker: DockerIcon,
  Nginx: NginxIcon,
  "GitHub Actions CI/CD": GitHubActionsIcon,
  "JWT / RBAC / API Keys": JwtIcon,
  "Prometheus / Grafana": PrometheusIcon,
  "Webhooks & Stripe": StripeIcon,
  "Firebase Firestore": FirebaseIcon,
  SQL: SqlIcon,
  "REST API Design": RestIcon,
  "Structured Logging": LogIcon,
  "Middleware Architecture": MiddlewareIcon,
};

function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = techIcons[name] ?? Server;
  return <Icon className={className} />;
}

export function SkillsSection() {
  return (
    <SectionReveal>
      <section id="skills" className="relative scroll-mt-24 py-8 sm:py-12">
        <div className="mx-auto">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I trust in production."
            description="The tools I use most are the ones that help me design cleaner systems, ship with confidence, and keep production behavior visible."
          />

          <div className="mt-12 space-y-8">
            <article className="relative px-2 py-1 sm:px-3">
              <div className="relative">
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="section-label">Stack Map</p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                      Core technologies I rely on across system architecture, data platforms, deployment, and production reliability.
                    </p>
                  </div>
                </div>

                <div className="relative mx-auto flex h-88 w-full max-w-176 items-center justify-center overflow-visible">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_9%,transparent),transparent_40%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,153,51,0.1),transparent_42%)]" />
                  <div className="absolute h-108 w-108 rounded-full border border-dashed border-primary/12 dark:border-primary/12" />
                  <div className="absolute h-84 w-84 rounded-full border border-border/30 dark:border-white/10" />
                  <div className="absolute h-60 w-60 rounded-full border border-primary/16 dark:border-primary/18" />
                  <div className="absolute h-60 w-60 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_62%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(255,153,51,0.12),transparent_62%)]" />

                  <div className="absolute left-1/2 top-[4.4rem] h-[3.2rem] w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--primary)_55%,transparent),transparent)] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,153,51,0.55),transparent)]" />
                  <div className="absolute left-[12.2rem] top-1/2 h-px w-[7.2rem] -translate-y-1/2 bg-[linear-gradient(to_left,transparent,color-mix(in_oklab,var(--primary)_55%,transparent),transparent)] dark:bg-[linear-gradient(to_left,transparent,rgba(255,153,51,0.55),transparent)]" />
                  <div className="absolute right-[12.2rem] top-1/2 h-px w-[7.2rem] -translate-y-1/2 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--primary)_55%,transparent),transparent)] dark:bg-[linear-gradient(to_right,transparent,rgba(255,153,51,0.55),transparent)]" />
                  <div className="absolute left-1/2 bottom-[4.4rem] h-[3.2rem] w-px -translate-x-1/2 bg-[linear-gradient(to_top,transparent,color-mix(in_oklab,var(--primary)_55%,transparent),transparent)] dark:bg-[linear-gradient(to_top,transparent,rgba(255,153,51,0.55),transparent)]" />
                  <div className="absolute left-[13.4rem] top-[8.6rem] h-px w-[5.8rem] rotate-20 bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--primary)_40%,transparent),transparent)] dark:bg-[linear-gradient(to_right,transparent,rgba(255,153,51,0.4),transparent)]" />
                  <div className="absolute right-[13.4rem] top-[8.6rem] h-px w-[5.8rem] -rotate-20 bg-[linear-gradient(to_left,transparent,color-mix(in_oklab,var(--primary)_40%,transparent),transparent)] dark:bg-[linear-gradient(to_left,transparent,rgba(255,153,51,0.4),transparent)]" />

                  <div className="absolute left-[18.2rem] top-[6.7rem] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_color-mix(in_oklab,var(--primary)_70%,transparent)] animate-pulse" />
                  <div className="absolute right-[18.2rem] top-28 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_14px_color-mix(in_oklab,var(--primary)_70%,transparent)] animate-pulse" />
                  <div className="absolute left-1/2 top-[4.7rem] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_14px_color-mix(in_oklab,var(--primary)_70%,transparent)] animate-pulse" />
                  <div className="absolute left-1/2 bottom-[4.7rem] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_14px_color-mix(in_oklab,var(--primary)_70%,transparent)] animate-pulse" />

                  <div className="relative z-10 grid h-40 w-40 place-items-center rounded-full border border-primary/18 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--card)_92%,transparent),color-mix(in_oklab,var(--background)_96%,transparent))] text-center shadow-[0_24px_60px_-34px_color-mix(in_oklab,var(--primary)_32%,transparent)] dark:border-primary/20 dark:bg-[linear-gradient(180deg,hsl(220_18%_11%/_0.98),hsl(220_18%_7%/_1))] dark:shadow-[0_24px_70px_-36px_rgba(255,153,51,0.35)]">
                    <div>
                      <p className="font-mono-custom text-[11px] uppercase tracking-[0.28em] text-muted-foreground dark:text-white/45">
                        Core
                      </p>
                      <p className="mt-2 font-display text-[2rem] font-bold leading-none tracking-tight text-foreground dark:text-white">
                        Systems
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">Engineer</p>
                    </div>
                  </div>

                  {orbitStack.map((item) => {
                    return (
                      <div
                        key={item.label}
                        className={`absolute ${item.className} z-10 inline-flex items-center gap-2 rounded-full border border-border/55 bg-background/86 px-3 py-2 shadow-[0_10px_28px_-18px_color-mix(in_oklab,var(--primary)_45%,transparent)] backdrop-blur dark:border-white/8 dark:bg-black/42 dark:shadow-[0_10px_28px_-18px_rgba(255,153,51,0.35)]`}
                      >
                        <TechIcon name={item.tech} className="h-3.5 w-3.5 text-primary" />
                        <span className="font-mono-custom text-[11px] uppercase tracking-[0.18em] text-muted-foreground dark:text-white/72">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
