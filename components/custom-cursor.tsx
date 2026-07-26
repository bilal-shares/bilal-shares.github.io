"use client";

import { useEffect, useRef } from "react";

/**
 * Desktop pointer accent. Written with a single rAF loop and direct transform
 * writes: no spring library, no blend modes, and nothing that forces the rest
 * of the page onto a new compositing layer.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let currentX = -100;
    let currentY = -100;
    let targetX = -100;
    let targetY = -100;
    let frame = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = requestAnimationFrame(render);
    };

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      element.dataset.visible = "true";
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;
      const interactive =
        target instanceof Element &&
        target.closest("a, button, input, textarea, select, [data-cursor]") !== null;
      element.dataset.active = interactive ? "true" : "false";
    };

    const onLeave = () => {
      element.dataset.visible = "false";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="custom-cursor">
      <span className="custom-cursor__ring" />
      <span className="custom-cursor__dot" />
    </div>
  );
}
