"use client";
import { useEffect, useRef } from "react";

const PRI = "#c87d2e";
const SEC = "#3f9e8a";

export function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let W = 0,
      H = 0;
    let nodes: any[] = [];
    let pulses: any[] = [];
    let mouse = { x: -9999, y: -9999 };
    let t = 0,
      raf: number;

    const COLORS = [PRI, SEC, "#ffffff"];
    const CONNECT = 148;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      spawn();
    }

    function spawn() {
      nodes = Array.from({ length: 52 }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 2.8 + 1.2,
        color: COLORS[i % 3],
        phase: Math.random() * Math.PI * 2,
        opacity: 0.45 + Math.random() * 0.55,
      }));
    }

    function draw() {
      t += 0.016;
      ctx.clearRect(0, 0, W, H);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const d = Math.hypot(b.x - a.x, b.y - a.y);
          if (d < CONNECT) {
            const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            g.addColorStop(0, a.color);
            g.addColorStop(1, b.color);
            ctx.save();
            ctx.globalAlpha = (1 - d / CONNECT) * 0.32;
            ctx.strokeStyle = g;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
            if (Math.random() < 0.0004 && pulses.length < 28)
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

      pulses = pulses.filter((p) => {
        p.t += 0.022;
        if (p.t > 1) return false;
        const px = p.x + (p.tx - p.x) * p.t;
        const py = p.y + (p.ty - p.y) * p.t;
        ctx.save();
        ctx.globalAlpha = (1 - p.t) * 0.9;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(px, py, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return true;
      });

      nodes.forEach((n) => {
        const pulse = Math.sin(t * 2 + n.phase) * 0.3 + 0.7;
        const dm = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        if (dm < 110) {
          ctx.save();
          ctx.globalAlpha = (1 - dm / 110) * 0.55;
          ctx.fillStyle = n.color;
          ctx.shadowColor = n.color;
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
        ctx.save();
        ctx.globalAlpha = n.opacity * pulse;
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = n.r * 3.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    canvas.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    });
    canvas.addEventListener("mouseleave", () => {
      mouse = { x: -9999, y: -9999 };
    });
    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 z-10 h-full w-full opacity-40"
    />
  );
}
