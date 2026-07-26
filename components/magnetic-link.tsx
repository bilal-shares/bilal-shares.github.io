"use client";

import Link from "next/link";
import { useRef, type MouseEvent, type ReactNode } from "react";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

/**
 * Subtle magnetic pull on desktop pointers. Transform is written directly to
 * the node, so React never re-renders while the pointer moves.
 */
export function MagneticLink({ href, children, className = "", external = false }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const frame = useRef(0);

  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.14;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.14;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    node.style.transform = "";
  };

  const commonProps = {
    ref,
    className,
    onMouseMove: move,
    onMouseLeave: reset,
  };

  if (external) {
    return (
      <a {...commonProps} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link {...commonProps} href={href}>
      {children}
    </Link>
  );
}
