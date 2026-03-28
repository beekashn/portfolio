"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Code2, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ComponentType, SVGProps } from "react";
import { stats } from "@/lib/site-data";

type LogoProps = SVGProps<SVGSVGElement>;

function ReactLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
    </svg>
  );
}
function NextLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 16V8l6 8V8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function TypeScriptLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" fill="#3178C6" />
      <path d="M8 9h8M12 9v7M14.8 12.5c.4-.5.9-.8 1.6-.8.8 0 1.4.4 1.4 1 0 1.6-3 1-3 2.8 0 .8.7 1.4 1.9 1.4.8 0 1.4-.2 2-.6" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function JavaScriptLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" fill="#F7DF1E" />
      <path d="M10 9v6.2c0 1.5-.8 2.3-2.2 2.3-.8 0-1.4-.2-2-.7" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13.8 14.8c.5.8 1.2 1.2 2.2 1.2.9 0 1.5-.4 1.5-1 0-1.8-3.7-.9-3.7-3.8 0-1.3 1.1-2.3 2.9-2.3 1.2 0 2.1.4 2.8 1.3" stroke="#111" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function TailwindLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 10.5c1-2.2 2.5-3.3 4.5-3.3 3 0 3.4 2.2 5 2.7 1 .3 2 .1 3-.7-1 2.2-2.5 3.3-4.5 3.3-3 0-3.4-2.2-5-2.7-1-.3-2-.1-3 .7ZM4.5 14.7c1-2.2 2.5-3.3 4.5-3.3 3 0 3.4 2.2 5 2.7 1 .3 2 .1 3-.7-1 2.2-2.5 3.3-4.5 3.3-3 0-3.4-2.2-5-2.7-1-.3-2-.1-3 .7Z" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ViteLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4 18.5 5.8 13.5 20 8.2 20.1 5.5 5.8 12 4Z" fill="url(#vite-grad)" />
      <path d="m12 7.2 2.1 8.2-2.1 1.6-2.1-1.6L12 7.2Z" fill="#FFEA83" />
      <defs>
        <linearGradient id="vite-grad" x1="5.5" y1="4" x2="18.5" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}
function NodeLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3 18.5 6.8v10.4L12 21l-6.5-3.8V6.8L12 3Z" fill="#539E43" />
      <path d="M9.4 8v8M14.6 8v8M9.4 8l5.2 8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function ExpressLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 8.5h12M6 12h8M6 15.5h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function PostgresLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <ellipse cx="12" cy="7" rx="5" ry="2.8" fill="#336791" />
      <path d="M7 7v7c0 1.6 2.2 2.8 5 2.8s5-1.2 5-2.8V7" stroke="#86B7D9" strokeWidth="1.5" />
      <path d="M7 10.5c0 1.6 2.2 2.8 5 2.8s5-1.2 5-2.8" stroke="#86B7D9" strokeWidth="1.5" />
    </svg>
  );
}
function RedisLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 5 18 7.6 12 10 6 7.6 12 5Z" fill="#D82C20" />
      <path d="M18 7.6 12 10 6 7.6v3.2l6 2.5 6-2.5V7.6Z" fill="#B3261E" />
      <path d="M18 10.8 12 13.3 6 10.8V14l6 2.6 6-2.6v-3.2Z" fill="#FF5A4A" />
    </svg>
  );
}
function FirebaseLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 18.5 10.2 6.7c.1-.4.7-.6 1-.3l2.1 3.2L7 18.5Z" fill="#FFA000" />
      <path d="m7 18.5 10-5.5-2.8-8c-.2-.5-.9-.5-1.2-.1L7 18.5Z" fill="#F57C00" />
      <path d="m7 18.5 4.8-10 5.2 4.5L7 18.5Z" fill="#FFCA28" />
    </svg>
  );
}
function MySQLLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6.5 15c1.5-4.6 4.2-6.9 8.1-6.9 1.2 0 2.1.2 2.9.7-1.4.3-2.1 1-2.1 2.1 0 .8.3 1.5 1 2" stroke="#4479A1" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 17.2c1.8 0 3-.7 3.8-2M11.8 15.2c.9.3 1.9.3 2.8 0" stroke="#4479A1" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function MongoLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4c2.2 2.4 3.6 5.6 3.6 8.8 0 3.3-1.4 5.7-3.6 7.2-2.2-1.5-3.6-3.9-3.6-7.2C8.4 9.6 9.8 6.4 12 4Z" fill="#47A248" />
      <path d="M12 6.2v11.2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function AwsLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 14.3c1.8 1.1 3.8 1.6 6.1 1.6 1.8 0 3.4-.3 4.8-1" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 10.2 9.8 7.5h1.1l1.3 2.7M9 9.3h2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14.5 7.5v5M14.5 7.5h3M14.5 10h2.5M14.5 12.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function DockerLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="6" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="9.5" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="13" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="9.5" y="6.5" width="3" height="3" fill="#2496ED" />
      <rect x="13" y="6.5" width="3" height="3" fill="#2496ED" />
      <path d="M6 14h10c2 0 3.4-.6 4.4-1.8.3.3.8.4 1.3.4-.4 2.6-2.8 5-7 5H6v-3.6Z" fill="#2496ED" />
    </svg>
  );
}
function GitHubActionsLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="7" cy="17" r="2" fill="#2671E5" />
      <circle cx="9" cy="8" r="2" fill="#2671E5" />
      <circle cx="17" cy="12" r="2" fill="#2671E5" />
      <path d="M8 15.4 8.7 9.8M10.8 9l4.2 1.9M8.7 18.2l6.3-4.4" stroke="#9CC2FF" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function NginxLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3.5 19 7.5v9L12 20.5 5 16.5v-9L12 3.5Z" fill="#009639" />
      <path d="M9 15.5V8.7l6 6.8V8.7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function PrometheusLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4.8c-2.7 0-4.7 2.1-4.7 4.8 0 3.3 2.1 4.4 2.1 6.4 0 1.3 1 2.3 2.6 2.3s2.6-1 2.6-2.3c0-2 2.1-3.1 2.1-6.4 0-2.7-2-4.8-4.7-4.8Z" fill="#E6522C" />
      <path d="M10.4 11.2 12 8.6l1.6 2.6L12 12.7l-1.6-1.5Z" fill="#fff" />
    </svg>
  );
}
function GrafanaLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12.4 6.2c2.8 0 5 2.2 5 5 0 1.8-1 3.5-2.5 4.4.1.3.1.6.1.9 0 1.8-1.5 3.3-3.3 3.3-1.4 0-2.7-.9-3.1-2.2-.4.1-.7.2-1 .2-1.8 0-3.3-1.5-3.3-3.3 0-1.4.9-2.7 2.2-3.1-.1-.4-.2-.7-.2-1.1 0-2.2 1.8-4 4-4 .7 0 1.4.2 2 .5.5-.4 1.1-.6 1.8-.6Z" fill="#F46800" />
      <circle cx="12.5" cy="11.6" r="2.2" fill="#fff" />
    </svg>
  );
}
function PostmanLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" fill="#FF6C37" />
      <path d="M9 15.5 15 9.5M15 9.5h-3M15 9.5v3" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function StripeLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M15.8 8.4c-1.1-.5-2.2-.8-3.5-.8-2.7 0-4.5 1.4-4.5 3.6 0 3.3 4.8 2.8 4.8 4.6 0 .6-.5 1-1.5 1-1.1 0-2.4-.4-3.4-1v2.3c1 .5 2.2.8 3.5.8 2.9 0 4.8-1.4 4.8-3.8 0-3.5-4.8-2.9-4.8-4.6 0-.6.5-.9 1.3-.9 1 0 2 .2 3.3.8V8.4Z" fill="#635BFF" />
    </svg>
  );
}
function SendGridLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 7.5 12 4l7 3.5v9L12 20l-7-3.5v-9Z" fill="#1A82E2" />
      <path d="m5.5 8 6.5 4 6.5-4" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function JwtLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 4.5 9.8 6v2.5L12 10l2.2-1.5V6L12 4.5Z" fill="#fff" />
      <path d="M7.5 9.8 5.3 11.3v2.5l2.2 1.5 2.2-1.5v-2.5L7.5 9.8ZM16.5 9.8l-2.2 1.5v2.5l2.2 1.5 2.2-1.5v-2.5l-2.2-1.5ZM12 15.1l-2.2 1.5v2.5l2.2 1.5 2.2-1.5v-2.5L12 15.1Z" fill="#fff" />
      <path d="M12 4.5 9.8 6v2.5L12 10l2.2-1.5V6L12 4.5Z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M7.5 9.8 5.3 11.3v2.5l2.2 1.5 2.2-1.5v-2.5L7.5 9.8ZM16.5 9.8l-2.2 1.5v2.5l2.2 1.5 2.2-1.5v-2.5l-2.2-1.5ZM12 15.1l-2.2 1.5v2.5l2.2 1.5 2.2-1.5v-2.5L12 15.1Z" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

const stackLogoMap = {
  React: ReactLogo,
  "Next.js": NextLogo,
  TypeScript: TypeScriptLogo,
  JavaScript: JavaScriptLogo,
  "Tailwind CSS": TailwindLogo,
  Vite: ViteLogo,
  "Node.js": NodeLogo,
  Express: ExpressLogo,
  PostgreSQL: PostgresLogo,
  Redis: RedisLogo,
  Firebase: FirebaseLogo,
  MySQL: MySQLLogo,
  MongoDB: MongoLogo,
  AWS: AwsLogo,
  Docker: DockerLogo,
  "GitHub Actions": GitHubActionsLogo,
  Nginx: NginxLogo,
  Prometheus: PrometheusLogo,
  Grafana: GrafanaLogo,
  Postman: PostmanLogo,
  Stripe: StripeLogo,
  SendGrid: SendGridLogo,
  JWT: JwtLogo,
} satisfies Record<string, ComponentType<LogoProps>>;

type StackLogoName = keyof typeof stackLogoMap;

const stackLogos: StackLogoName[] = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Vite",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Redis",
  "Firebase",
  "MySQL",
  "MongoDB",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Nginx",
  "Prometheus",
  "Grafana",
  "Postman",
  "Stripe",
  "SendGrid",
  "JWT",
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
                Bikash
                <br />
                <span className="gradient-text">Basaula</span>
              </h1>

              <p data-hero="fade" className="text-xl font-display font-medium tracking-tight text-muted-foreground">
                Backend Software Engineer
              </p>

              <p data-hero="fade" className="max-w-xl text-base leading-8 text-muted-foreground font-serif sm:text-lg">
                I build production systems that are secure, maintainable, and ready for scale, with a focus on APIs,
                infrastructure, and operational clarity.
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
                <Code2 className="h-3 w-3" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/bikash-basaula-283854210"
                target="_blank"
                rel="noreferrer"
                className="tech-tag hover:cursor-pointer"
              >
                <BriefcaseBusiness className="h-3 w-3" />
                LinkedIn
              </Link>
            </div>
          </div>

          <div data-hero="fade" className="relative">
            <div className="relative overflow-hidden rounded-[2.2rem] bg-background/55 p-4 ring-1 ring-border/40 sm:p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_32%)]" />

              <div className="relative grid gap-4 sm:grid-cols-[0.86fr_1.14fr]">
                <div className="relative min-h-92 overflow-hidden rounded-[1.8rem] bg-background/72 ring-1 ring-border/35">
                  <Image
                    src="/photo.png"
                    alt="Portrait of Bikash Basaula"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(0,0,0,0.26)_100%)]" />
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] bg-background/72 px-4 py-3 ring-1 ring-border/40 backdrop-blur">
                    <p className="font-mono-custom text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                      production focus
                    </p>
                    <p className="mt-2 text-sm font-display font-semibold tracking-tight">
                      APIs, infrastructure, and systems that stay clear under pressure.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.6rem] bg-background/68 p-4 ring-1 ring-border/35">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono-custom text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                          core stack
                        </p>
                        <p className="mt-2 font-display text-xl font-semibold tracking-tight">
                          Tools I rely on most
                        </p>
                      </div>
                      <span className="font-mono-custom text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                        {stackLogos.length} tools
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-2 sm:grid-cols-6 xl:grid-cols-6">
                      {stackLogos.map((item) => {
                        const Logo = stackLogoMap[item];
                        return (
                          <div
                            key={item}
                            className="group relative z-0 flex aspect-square items-center justify-center overflow-visible rounded-2xl bg-background/88 p-2 ring-1 ring-border/35 transition-all duration-300 hover:z-30 hover:-translate-y-0.5 hover:ring-primary/30"
                            aria-label={item}
                            title={item}
                          >
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                            <Logo className="relative z-10 h-7 w-7 text-foreground sm:h-8 sm:w-8" />
                            <div className="pointer-events-none absolute -top-10 left-1/2 z-40 whitespace-nowrap rounded-full bg-foreground px-2.5 py-1 text-[10px] font-mono-custom uppercase tracking-[0.18em] text-background opacity-0 shadow-lg shadow-black/15 transition-all duration-200 transform-[translateX(-50%)] group-hover:transform-[translateX(-50%)_translateY(-4px)] group-hover:opacity-100">
                              {item}
                            </div>
                            <span className="sr-only">{item}</span>
                          </div>
                        );
                      })}
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
      </div>
    </section>
  );
}
