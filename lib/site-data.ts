import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Cloud,
  Database,
  Layers3,
  LockKeyhole,
  Server,
  TerminalSquare,
} from "lucide-react";
import { brandIcons } from "@/components/brand-icons";

export type NavItem = {
  id: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: { name: string; level: number }[];
};

export type Project = {
  title: string;
  stack: string;
  description: string;
  highlights: string[];
  githubUrl?: string;
};

export type TimelineItem = {
  title: string;
  meta: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { label: "Products Shipped", value: "10+" },
  { label: "Years Building", value: "2+" },
  { label: "Cloud & Delivery Tools", value: "8+" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend Architecture",
    icon: Server,
    items: [
      { name: "Node.js & Express", level: 94 },
      { name: "TypeScript", level: 91 },
      { name: "REST API Design", level: 92 },
      { name: "Middleware Architecture", level: 88 },
    ],
  },
  {
    title: "Data & Caching",
    icon: Database,
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis / Valkey", level: 86 },
      { name: "Firebase Firestore", level: 82 },
      { name: "SQL", level: 87 },
    ],
  },
  {
    title: "Cloud & Delivery",
    icon: Cloud,
    items: [
      { name: "AWS EC2 / ECR / SSM", level: 84 },
      { name: "Docker", level: 89 },
      { name: "Nginx", level: 80 },
      { name: "GitHub Actions CI/CD", level: 83 },
    ],
  },
  {
    title: "Security & Observability",
    icon: Activity,
    items: [
      { name: "JWT / RBAC / API Keys", level: 88 },
      { name: "Prometheus / Grafana", level: 79 },
      { name: "Structured Logging", level: 85 },
      { name: "Webhooks & Stripe", level: 84 },
    ],
  },
];

export const serviceCards = [
  {
    title: "Steady Backend Foundations",
    description:
      "I build backend services and internal tooling that stay understandable, maintainable, and dependable as complexity grows.",
    icon: Layers3,
  },
  {
    title: "Security From The Start",
    description:
      "Authentication, authorization, rate limiting, and access control are treated as part of the design, not cleanup work later.",
    icon: LockKeyhole,
  },
  {
    title: "Delivery That Feels Calm",
    description:
      "I care about how changes are released, how deployment stays predictable, and how systems behave after they go live.",
    icon: TerminalSquare,
  },
];

export const projects: Project[] = [
  {
    title: "Properties API",
    stack: "Node.js, TypeScript, PostgreSQL, Redis/Valkey, JWT, Prometheus",
    description:
      "A platform for property search, authentication, admin operations, and API key management.",
    highlights: [
      "Built layered middleware for JWT validation, secure headers, request tracing, and centralized error handling.",
      "Implemented multi-level rate limiting across user, API key, and IP scopes to improve stability under load.",
      "Integrated Redis caching with TTL strategy and exposed Prometheus metrics for clearer system visibility.",
    ],
    githubUrl: "https://github.com/beekashn",
  },
  {
    title: "AWS Deployment & CI/CD Pipeline",
    stack: "GitHub Actions, Docker, AWS EC2/ECR/SSM, Nginx",
    description:
      "A delivery pipeline that turns application releases into repeatable, secure cloud deployments.",
    highlights: [
      "Automated container build, image publishing, and release flow with GitHub Actions and ECR.",
      "Deployed to EC2 with runtime configuration managed securely through AWS SSM.",
      "Configured Nginx with HTTPS termination for a safer and more stable production edge.",
    ],
    githubUrl: "https://github.com/beekashn",
  },
  {
    title: "Tenant Portal Payments System",
    stack: "Next.js API Routes, Stripe, Firebase Firestore, SendGrid",
    description:
      "A payment flow for tenant operations built around dependable Stripe event handling.",
    highlights: [
      "Implemented Stripe checkout and webhook-driven payment lifecycle handling.",
      "Persisted transaction state in Firestore to keep payment flows simple and reliable.",
      "Triggered automated email notifications for payment events and status updates.",
    ],
    githubUrl: "https://github.com/beekashn",
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Software Engineer (Backend)",
    meta: "DataInsight | Remote",
    period: "Nov 2024 - Present",
    summary:
      "Building and improving systems that support search, authentication, admin workflows, and long-term reliability.",
    bullets: [
      "Built modular APIs for search, authentication, and admin workflows.",
      "Improved reliability with structured middleware, centralized logging, and Prometheus metrics.",
      "Implemented rate limiting, caching, and monitoring for healthier day-to-day operation.",
    ],
  },
  {
    title: "Software Engineer Intern",
    meta: "DataInsight | Remote",
    period: "Aug 2024 - Nov 2024",
    summary:
      "Supported feature delivery, live issue debugging, and third-party integrations across user-facing systems.",
    bullets: [
      "Contributed to feature delivery and operational fixes.",
      "Worked on third-party integrations and debugging across live environments.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    title: "Bachelor in Electronics, Communication and Information Engineering",
    meta: "WRC, Tribhuvan University",
    period: "2019 - 2024",
    summary: "Graduated with 78.53%, building a strong technical foundation while moving steadily into software engineering.",
    bullets: ["Built engineering fundamentals while deepening practical interest in distributed systems and applied software work."],
  },
  {
    title: "Higher Secondary (Science)",
    meta: "Shree Amarsingh Secondary School",
    period: "2017 - 2019",
    summary: "Completed higher secondary education with a CGPA of 3.46.",
    bullets: [],
  },
  {
    title: "Secondary",
    meta: "Bal Mandir Secondary School",
    period: "2017",
    summary: "Completed secondary education with a GPA of 3.85.",
    bullets: [],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "7beekash7@gmail.com",
    href: "mailto:7beekash7@gmail.com",
    icon: brandIcons.gmail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bikash-basaula-283854210",
    href: "https://linkedin.com/in/bikash-basaula-283854210",
    icon: brandIcons.linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/beekashn",
    href: "https://github.com/beekashn",
    icon: brandIcons.github,
  },
];
