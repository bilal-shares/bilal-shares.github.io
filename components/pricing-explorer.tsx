"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { pricingGroups } from "@/data/pricing";
import { siteConfig } from "@/data/site";

export function PricingExplorer({ compact = false }: { compact?: boolean }) {
  const visibleGroups = pricingGroups;
  const [activeId, setActiveId] = useState(visibleGroups[0].id);
  const active = visibleGroups.find((group) => group.id === activeId) ?? visibleGroups[0];
  const plans = active.plans;

  return (
    <div>
      <div className="mb-10 flex gap-2 overflow-x-auto pb-3" aria-label="Pricing categories">
        {visibleGroups.map((group) => (
          <button
            key={group.id}
            type="button"
            className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.11em] transition ${
              group.id === activeId
                ? "border-[color:var(--foreground)] bg-[color:var(--foreground)] text-[color:var(--background)]"
                : "border-[color:var(--line)] bg-[color:var(--soft-bg)] text-muted hover:border-[#E1306C]/40 hover:text-[color:var(--foreground)]"
            }`}
            onClick={() => setActiveId(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
        >
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl">{active.title}</h3>
              <p className="mt-2 text-sm text-muted">{active.note}</p>
            </div>
            
          </div>

          <div className={`grid gap-4 ${plans.length >= 4 ? "md:grid-cols-2 xl:grid-cols-4" : "lg:grid-cols-3"}`}>
            {plans.map((plan) => {
              const message = encodeURIComponent(
                `Hi, I want ${plan.quantity} ${plan.type} (${active.label}) for ${plan.price}.`,
              );
              return (
                <article
                  key={`${active.id}-${plan.quantity}`}
                  className={`surface-card relative flex min-h-[28rem] flex-col rounded-[1.6rem] p-6 transition duration-500 hover:-translate-y-2 ${
                    plan.featured ? "border-[#E1306C]/50 bg-[#E1306C]/[0.08]" : ""
                  }`}
                >
                  {plan.badge && (
                    <span className="mb-8 w-fit rounded-full border border-[#F77737]/30 bg-[#F77737]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FCAF45]">
                      {plan.badge}
                    </span>
                  )}
                  <p className="font-mono text-xs uppercase tracking-[0.18em] faint-text">{plan.tier}</p>
                  <div className="mt-5 flex items-end gap-2">
                    <p className="text-5xl font-black tracking-[-0.07em]">{plan.quantity}</p>
                    <p className="pb-1 text-sm text-muted">{plan.type}</p>
                  </div>
                  <p className="mt-5 text-3xl font-bold gradient-text">{plan.price}</p>
                  <p className="mt-2 text-sm faint-text">{plan.description}</p>
                  <div className="my-6 h-px bg-[color:var(--line)]" />
                  <div className="space-y-3">
                    {active.features.slice(0, compact ? 3 : 4).map((feature) => (
                      <p key={feature} className="flex items-center gap-2 text-sm text-muted">
                        <Check size={15} className="text-[#25D366]" /> {feature}
                      </p>
                    ))}
                  </div>
                  <a
                    href={`${siteConfig.whatsapp}?text=${message}`}
                    target="_blank"
                    rel="noreferrer"
                    className={plan.featured ? "button-primary mt-auto" : "button-secondary mt-auto"}
                  >
                    Order on WhatsApp <ArrowUpRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
