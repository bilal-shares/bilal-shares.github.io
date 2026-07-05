"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BadgeCheck, BarChart3, Camera, TrendingUp, Zap } from "lucide-react";
import type { MouseEvent } from "react";

export function HeroStage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 18 });
  const rotateY = useTransform(springX, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div className="hero-stage relative mx-auto aspect-square w-full max-w-[36rem]" onMouseMove={move}>
      <div className="absolute inset-[8%] rounded-full bg-[#E1306C]/15 blur-[80px]" />
      <div className="hero-ring" />
      <div className="hero-ring" />
      <motion.div
        className="surface-card absolute inset-[16%] overflow-hidden rounded-[2rem] p-5 sm:p-7"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#F77737] to-[#E1306C]">
              <Camera size={21} />
            </span>
            <div>
              <p className="text-xs faint-text">Campaign pulse</p>
              <p className="font-semibold">Brand momentum</p>
            </div>
          </div>
          <BadgeCheck className="text-[#25D366]" size={22} />
        </div>

        <div className="mt-9">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] faint-text">Reach velocity</p>
              <p className="mt-2 text-4xl font-black tracking-[-0.06em] sm:text-6xl">+999%</p>
            </div>
            <div className="rounded-full border border-[#25D366]/25 bg-[#25D366]/10 px-3 py-1 text-xs text-[#25D366]">
              Live growth
            </div>
          </div>
          <div className="mt-7 flex h-28 items-end gap-2">
            {[24, 38, 33, 50, 61, 55, 74, 82, 77, 94].map((height, index) => (
              <motion.span
                key={height + index}
                className="flex-1 rounded-t-full bg-gradient-to-t from-[#E1306C] via-[#F77737] to-[#25D366]"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.7 }}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="soft-tile rounded-2xl p-4">
            <Zap size={17} className="text-[#FCAF45]" />
            <p className="mt-5 text-2xl font-bold">Fast</p>
            <p className="text-xs faint-text">Campaign starts</p>
          </div>
          <div className="soft-tile rounded-2xl p-4">
            <BarChart3 size={17} className="text-[#25D366]" />
            <p className="mt-5 text-2xl font-bold">95</p>
            <p className="text-xs faint-text">Proofs on file</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="surface-card absolute left-0 top-[18%] flex items-center gap-3 rounded-2xl px-4 py-3"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <TrendingUp size={18} className="text-[#25D366]" />
        <span className="text-xs font-semibold">Growth, directed</span>
      </motion.div>
      <motion.div
        className="surface-card absolute bottom-[17%] right-0 rounded-2xl px-4 py-3 text-right"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] uppercase tracking-[0.16em] faint-text">Private support</p>
        <p className="mt-1 text-sm font-semibold">WhatsApp first</p>
      </motion.div>
    </div>
  );
}
