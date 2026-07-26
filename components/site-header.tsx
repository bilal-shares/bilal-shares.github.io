"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/brand-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  // Track which route the menu was opened on, so navigating anywhere closes it
  // without needing an effect to reset state.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Scroll progress bar — one passive listener, one transform write per frame.
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock the page behind the open mobile menu and allow Escape to close it.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenedOn(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div
        ref={progressRef}
        aria-hidden
        className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left"
        style={{
          transform: "scaleX(0)",
          background:
            "linear-gradient(90deg, var(--ig-yellow), var(--ig-orange), var(--ig-pink), var(--ig-purple))",
        }}
      />

      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-8">
        <div className="site-header-shell mx-auto flex max-w-[92rem] items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
            <span className="brand-mark grid h-9 w-9 place-items-center rounded-xl font-black">S</span>
            <span className="text-sm font-black tracking-[-0.04em] sm:text-base">
              SOCIAL<span className="gradient-text">.BIL</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] ${
                    active ? "nav-link-active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="button-whatsapp button-sm hidden sm:inline-flex"
            >
              <WhatsAppIcon size={15} /> WhatsApp
            </a>
            <button
              type="button"
              className="icon-button grid h-10 w-10 place-items-center rounded-full lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className="mobile-menu-overlay fixed inset-0 z-40 flex flex-col justify-center px-8 lg:hidden"
        data-open={open}
        hidden={!open}
      >
        <nav className="space-y-1" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[color:var(--line)] py-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="button-whatsapp mt-10"
          onClick={() => setOpen(false)}
        >
          <WhatsAppIcon size={17} /> Chat on WhatsApp <ArrowUpRight size={16} />
        </a>
      </div>
    </>
  );
}
