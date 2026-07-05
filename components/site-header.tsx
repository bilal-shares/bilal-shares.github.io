"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[90] h-[2px] w-full origin-left bg-gradient-to-r from-[#E1306C] via-[#F77737] to-[#25D366]"
        style={{ scaleX }}
      />
      <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-8">
        <div className="site-header-shell mx-auto flex max-w-[92rem] items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <Link href="/" className="group flex items-center gap-3" aria-label="SocialSlay home">
            <span className="brand-mark grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#F77737] via-[#E1306C] to-[#833AB4] font-black">
              S
            </span>
            <span className="text-sm font-black tracking-[-0.04em] sm:text-base">
              SOCIAL<span className="text-[#E1306C]">BIL</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
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
              className="header-cta hidden items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition sm:flex"
            >
              WhatsApp <ArrowUpRight size={14} />
            </a>
            <button
              type="button"
              className="icon-button grid h-10 w-10 place-items-center rounded-full lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu-overlay fixed inset-0 z-40 flex flex-col justify-center px-8 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-[color:var(--line)] py-4 text-4xl font-bold tracking-[-0.05em]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="button-primary mt-10">
              Start on WhatsApp <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
