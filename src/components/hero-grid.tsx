"use client";

import { useEffect, useRef } from "react";

export function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const gridSize = 60;
      const cols = Math.ceil(w / gridSize) + 1;
      const rows = Math.ceil(h / gridSize) + 1;

      // Center of the glow beam (moves slowly)
      const glowX = w * 0.5 + Math.sin(time * 0.3) * w * 0.3;
      const glowY = h * 0.35 + Math.cos(time * 0.2) * h * 0.15;

      // Draw grid lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize;
        const dist = Math.abs(x - glowX);
        const intensity = Math.max(0, 1 - dist / 350);
        const alpha = 0.04 + intensity * 0.12;

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
        ctx.lineWidth = intensity > 0.3 ? 1 : 0.5;
        ctx.stroke();
      }

      for (let j = 0; j < rows; j++) {
        const y = j * gridSize;
        const dist = Math.abs(y - glowY);
        const intensity = Math.max(0, 1 - dist / 350);
        const alpha = 0.04 + intensity * 0.12;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
        ctx.lineWidth = intensity > 0.3 ? 1 : 0.5;
        ctx.stroke();
      }

      // Draw glowing intersection dots near the beam
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          const dist = Math.sqrt((x - glowX) ** 2 + (y - glowY) ** 2);

          if (dist < 200) {
            const intensity = Math.max(0, 1 - dist / 200);
            const radius = 1.5 + intensity * 2;
            const alpha = intensity * 0.6;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.fill();
          }
        }
      }

      // Central glow
      const gradient = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 300);
      gradient.addColorStop(0, "rgba(16, 185, 129, 0.06)");
      gradient.addColorStop(0.5, "rgba(16, 185, 129, 0.02)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      time += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: 0.8 }}
    />
  );
}
