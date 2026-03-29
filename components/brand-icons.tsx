import type { CSSProperties, ComponentType, SVGProps } from "react";
import { Blocks, Database, Logs, Waypoints } from "lucide-react";
import { FaAws, FaLinkedin } from "react-icons/fa";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiGithubactions,
  SiGmail,
  SiGrafana,
  SiJsonwebtokens,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrometheus,
  SiReact,
  SiSendgrid,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

type IconProps = SVGProps<SVGSVGElement>;
type SharedIcon = ComponentType<IconProps & { style?: CSSProperties }>;

function withBrandColor(Icon: SharedIcon, color: string) {
  return function BrandIcon({
    style,
    ...props
  }: IconProps & { style?: CSSProperties }) {
    return <Icon {...props} style={{ color, ...style }} />;
  };
}

function withThemeAwareBrandColor(Icon: SharedIcon, cssVar: string) {
  return function BrandIcon({
    style,
    ...props
  }: IconProps & { style?: CSSProperties }) {
    return <Icon {...props} style={{ color: `var(${cssVar})`, ...style }} />;
  };
}

export const brandIcons = {
  aws: withBrandColor(FaAws, "#FF9900"),
  docker: withBrandColor(SiDocker, "#2496ED"),
  express: withThemeAwareBrandColor(SiExpress, "--brand-neutral"),
  firebase: withBrandColor(SiFirebase, "#FFCA28"),
  github: withThemeAwareBrandColor(SiGithub, "--brand-neutral"),
  githubActions: withBrandColor(SiGithubactions, "#2088FF"),
  gmail: withBrandColor(SiGmail, "#EA4335"),
  grafana: withBrandColor(SiGrafana, "#F46800"),
  javascript: withBrandColor(SiJavascript, "#F7DF1E"),
  jwt: withBrandColor(SiJsonwebtokens, "#D63AFF"),
  linkedin: withBrandColor(FaLinkedin, "#0A66C2"),
  logging: withThemeAwareBrandColor(Logs, "--brand-neutral"),
  middleware: withThemeAwareBrandColor(Blocks, "--brand-neutral"),
  mongodb: withBrandColor(SiMongodb, "#47A248"),
  mysql: withBrandColor(SiMysql, "#4479A1"),
  nextjs: withThemeAwareBrandColor(SiNextdotjs, "--brand-neutral"),
  nginx: withBrandColor(SiNginx, "#009639"),
  nodejs: withBrandColor(SiNodedotjs, "#5FA04E"),
  postgresql: withBrandColor(SiPostgresql, "#4169E1"),
  postman: withBrandColor(SiPostman, "#FF6C37"),
  prometheus: withBrandColor(SiPrometheus, "#E6522C"),
  react: withBrandColor(SiReact, "#61DAFB"),
  redis: withBrandColor(DiRedis, "#DC382D"),
  rest: withThemeAwareBrandColor(Waypoints, "--brand-neutral"),
  sendgrid: withBrandColor(SiSendgrid, "#51A9E3"),
  stripe: withBrandColor(SiStripe, "#635BFF"),
  sql: withThemeAwareBrandColor(Database, "--brand-neutral"),
  tailwindcss: withBrandColor(SiTailwindcss, "#06B6D4"),
  typescript: withBrandColor(SiTypescript, "#3178C6"),
  vite: withBrandColor(SiVite, "#8B5CF6"),
} as const;
