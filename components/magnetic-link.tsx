"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function MagneticLink({ href, children, className = "", external = false }: MagneticLinkProps) {
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

  const move = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  const props = {
    className,
    onMouseMove: move,
    onMouseLeave: reset,
    style: { x, y },
    whileTap: { scale: 0.97 },
  };

  if (external) {
    return (
      <motion.a {...props} href={href} target="_blank" rel="noreferrer">
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...props}>
      <Link href={href} className="contents">
        {children}
      </Link>
    </motion.div>
  );
}
