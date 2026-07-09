import { useEffect, useRef } from "react";

/**
 * Lightweight animated particle background — canvas based, GPU-friendly.
 * Automatically pauses / simplifies for reduced motion & smaller viewports.
 */
export function Particles({ density = 60 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 640;
    const count = prefersReduced ? 0 : Math.round(density * (isMobile ? 0.4 : 1));

    let width = 0, height = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let paused = document.hidden;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    type P = { x: number; y: number; vx: number; vy: number; r: number; hue: number; a: number };
    const particles: P[] = [];
    const colors = [210, 265, 190]; // blue, purple, cyan hues
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * 800,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        hue: colors[i % colors.length],
        a: Math.random() * 0.6 + 0.2,
      });
    }

    resize();
    window.addEventListener("resize", resize);
    const onVis = () => {
      paused = document.hidden;
      if (!paused && count > 0 && !raf) raf = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVis);

    const tick = () => {
      if (paused) { raf = 0; return; }
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${p.a})`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, 0.9)`;
        ctx.shadowBlur = 10;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    if (count > 0) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}