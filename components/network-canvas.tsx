"use client";

import { useEffect, useRef } from "react";

type NetworkNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  phase: number;
  opacity: number;
};

type NetworkPulse = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  t: number;
  color: string;
};

export type NetworkCanvasProps = {
  className?: string;
  colors?: string[];
  nodeCount?: number;
  connectDistance?: number;
  nodeMinRadius?: number;
  nodeMaxRadius?: number;
  nodeOpacityMin?: number;
  nodeOpacityMax?: number;
  velocity?: number;
  lineOpacity?: number;
  lineWidth?: number;
  pulseChance?: number;
  maxPulses?: number;
  pulseSpeed?: number;
  pulseRadius?: number;
  pulseOpacity?: number;
  pulseBlur?: number;
  glowStrength?: number;
  glowBlurFactor?: number;
  mouseRadius?: number;
  mouseGlowOpacity?: number;
  mouseGlowScale?: number;
  mouseGlowBlur?: number;
  enableMouseInteraction?: boolean;
  timeStep?: number;
};

const DEFAULT_COLORS = ["#c87d2e", "#3f9e8a", "#ffffff"];

export function NetworkCanvas({
  className,
  colors = DEFAULT_COLORS,
  nodeCount = 52,
  connectDistance = 148,
  nodeMinRadius = 1.2,
  nodeMaxRadius = 4,
  nodeOpacityMin = 0.45,
  nodeOpacityMax = 1,
  velocity = 0.42,
  lineOpacity = 0.32,
  lineWidth = 0.7,
  pulseChance = 0.0004,
  maxPulses = 28,
  pulseSpeed = 0.022,
  pulseRadius = 2.4,
  pulseOpacity = 0.9,
  pulseBlur = 6,
  glowStrength = 0.3,
  glowBlurFactor = 3.5,
  mouseRadius = 110,
  mouseGlowOpacity = 0.55,
  mouseGlowScale = 2.2,
  mouseGlowBlur = 14,
  enableMouseInteraction = true,
  timeStep = 0.016,
}: NetworkCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = ref.current;
    if (!canvasEl) return;

    const context = canvasEl.getContext("2d");
    if (!context) return;

    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = context;

    let width = 0;
    let height = 0;
    let raf = 0;
    let time = 0;
    let nodes: NetworkNode[] = [];
    let pulses: NetworkPulse[] = [];
    let mouse = { x: -9999, y: -9999 };

    const palette = colors.length > 0 ? colors : DEFAULT_COLORS;

    function spawn() {
      nodes = Array.from({ length: nodeCount }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * velocity,
        vy: (Math.random() - 0.5) * velocity,
        r: Math.random() * (nodeMaxRadius - nodeMinRadius) + nodeMinRadius,
        color: palette[index % palette.length],
        phase: Math.random() * Math.PI * 2,
        opacity:
          Math.random() * (nodeOpacityMax - nodeOpacityMin) + nodeOpacityMin,
      }));
      pulses = [];
    }

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      spawn();
    }

    function drawPulse(pulse: NetworkPulse) {
      const px = pulse.x + (pulse.tx - pulse.x) * pulse.t;
      const py = pulse.y + (pulse.ty - pulse.y) * pulse.t;

      ctx.save();
      ctx.globalAlpha = (1 - pulse.t) * pulseOpacity;
      ctx.fillStyle = pulse.color;
      ctx.shadowColor = pulse.color;
      ctx.shadowBlur = pulseBlur;
      ctx.beginPath();
      ctx.arc(px, py, pulseRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function draw() {
      time += timeStep;
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const distance = Math.hypot(b.x - a.x, b.y - a.y);

          if (distance >= connectDistance) continue;

          const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          gradient.addColorStop(0, a.color);
          gradient.addColorStop(1, b.color);

          ctx.save();
          ctx.globalAlpha = (1 - distance / connectDistance) * lineOpacity;
          ctx.strokeStyle = gradient;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.restore();

          if (Math.random() < pulseChance && pulses.length < maxPulses) {
            pulses.push({
              x: a.x,
              y: a.y,
              tx: b.x,
              ty: b.y,
              t: 0,
              color: a.color,
            });
          }
        }
      }

      pulses = pulses.filter((pulse) => {
        pulse.t += pulseSpeed;
        if (pulse.t > 1) return false;
        drawPulse(pulse);
        return true;
      });

      nodes.forEach((node) => {
        const pulseValue = Math.sin(time * 2 + node.phase) * glowStrength + 0.7;
        const mouseDistance = Math.hypot(mouse.x - node.x, mouse.y - node.y);

        if (enableMouseInteraction && mouseDistance < mouseRadius) {
          ctx.save();
          ctx.globalAlpha =
            (1 - mouseDistance / mouseRadius) * mouseGlowOpacity;
          ctx.fillStyle = node.color;
          ctx.shadowColor = node.color;
          ctx.shadowBlur = mouseGlowBlur;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r * mouseGlowScale, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        ctx.save();
        ctx.globalAlpha = node.opacity * pulseValue;
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = node.r * glowBlurFactor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    }

    function handleMouseMove(event: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }

    function handleMouseLeave() {
      mouse = { x: -9999, y: -9999 };
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    if (enableMouseInteraction) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [
    colors,
    connectDistance,
    enableMouseInteraction,
    glowBlurFactor,
    glowStrength,
    lineOpacity,
    lineWidth,
    maxPulses,
    mouseGlowBlur,
    mouseGlowOpacity,
    mouseGlowScale,
    mouseRadius,
    nodeCount,
    nodeMaxRadius,
    nodeMinRadius,
    nodeOpacityMax,
    nodeOpacityMin,
    pulseBlur,
    pulseChance,
    pulseOpacity,
    pulseRadius,
    pulseSpeed,
    timeStep,
    velocity,
  ]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={["absolute inset-0 h-full w-full opacity-40", className]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
