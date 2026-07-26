"use client";

import { BadgeCheck, BarChart3, TrendingUp, Zap } from "lucide-react";
import { useRef, type CSSProperties, type MouseEvent } from "react";
import { InstagramIcon, WhatsAppIcon } from "@/components/brand-icons";

const bars = [24, 38, 33, 50, 61, 55, 74, 82, 77, 94];

export function HeroStage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      card.style.setProperty("--tilt-y", `${x * 9}deg`);
      card.style.setProperty("--tilt-x", `${y * -8}deg`);
    });
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--tilt-x", "0deg");
  };

  return (
    <div
      className="hero-stage relative mx-auto aspect-square w-full max-w-[34rem]"
      onMouseMove={move}
      onMouseLeave={reset}
    >
      <div className="ambient-orb inset-[10%]" style={{ background: "rgba(225, 48, 108, 0.16)" }} />
      <div className="hero-ring" />
      <div className="hero-ring" />

      <div ref={cardRef} className="surface-card hero-card absolute inset-[16%] overflow-hidden p-5 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="brand-mark grid h-11 w-11 place-items-center rounded-2xl">
              <InstagramIcon size={20} />
            </span>
            <div>
              <p className="text-xs faint-text">Campaign pulse</p>
              <p className="font-semibold">Brand momentum</p>
            </div>
          </div>
          <BadgeCheck className="text-[color:var(--ig-pink)]" size={22} />
        </div>

        <div className="mt-8">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] faint-text">Reach velocity</p>
              <p className="mt-2 text-4xl font-black tracking-[-0.06em] sm:text-5xl">+999%</p>
            </div>
            <span className="whatsapp-tile rounded-full border px-3 py-1 text-xs font-semibold">Live growth</span>
          </div>
          <div className="mt-6 flex h-24 items-end gap-1.5 sm:h-28 sm:gap-2">
            {bars.map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="hero-bar flex-1 rounded-t-full"
                style={{ "--bar-height": `${height}%`, animationDelay: `${index * 60}ms` } as CSSProperties}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="soft-tile rounded-2xl p-4">
            <Zap size={17} className="text-[color:var(--ig-yellow)]" />
            <p className="mt-4 text-2xl font-bold">Fast</p>
            <p className="text-xs faint-text">Campaign starts</p>
          </div>
          <div className="soft-tile rounded-2xl p-4">
            <BarChart3 size={17} className="text-[color:var(--ig-purple)]" />
            <p className="mt-4 text-2xl font-bold">95</p>
            <p className="text-xs faint-text">Proofs on file</p>
          </div>
        </div>
      </div>

      <div className="surface-card float-slow absolute left-0 top-[18%] flex items-center gap-3 rounded-2xl px-4 py-3">
        <TrendingUp size={18} className="text-[color:var(--ig-pink)]" />
        <span className="text-xs font-semibold">Growth, directed</span>
      </div>
      <div className="surface-card float-slower absolute bottom-[17%] right-0 flex items-center gap-3 rounded-2xl px-4 py-3">
        <WhatsAppIcon size={18} className="whatsapp-text" />
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] faint-text">Private support</p>
          <p className="text-sm font-semibold">WhatsApp first</p>
        </div>
      </div>
    </div>
  );
}
