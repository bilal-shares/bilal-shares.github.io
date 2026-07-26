"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/brand-icons";
import { pricingGroups } from "@/data/pricing";
import { siteConfig } from "@/data/site";

export function PricingExplorer({ compact = false }: { compact?: boolean }) {
  const [activeId, setActiveId] = useState(pricingGroups[0].id);
  const active = pricingGroups.find((group) => group.id === activeId) ?? pricingGroups[0];
  const features = compact ? active.features.slice(0, 3) : active.features;

  return (
    <div>
      {/* Every category is visible at once — the row wraps instead of
          scrolling sideways, so nothing is hidden off-screen. */}
      <div className="chip-row" role="group" aria-label="Pricing categories">
        {pricingGroups.map((group) => (
          <button
            key={group.id}
            type="button"
            className="chip"
            data-active={group.id === activeId}
            aria-pressed={group.id === activeId}
            onClick={() => setActiveId(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div key={active.id} className="pricing-panel mt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-[-0.04em] sm:text-2xl">{active.title}</h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-muted">{active.note}</p>
          </div>
        </div>

        {/* Shared inclusions live here once instead of being repeated inside
            every card — that is what let the cards get short enough to fit. */}
        <div className="feature-strip mt-4">
          {features.map((feature) => (
            <span key={feature} className="feature-pill">
              <Check size={13} className="whatsapp-text" /> {feature}
            </span>
          ))}
        </div>

        <div className="price-grid mt-6">
          {active.plans.map((plan) => {
            const message = encodeURIComponent(
              `Hi, I want ${plan.quantity} ${plan.type} (${active.label}) for ${plan.price}.`,
            );
            return (
              <article
                key={`${active.id}-${plan.quantity}`}
                className={`surface-card price-card ${plan.featured ? "price-card--featured" : ""}`}
              >
                <div className="flex min-h-[1.4rem] items-start justify-between gap-2">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] faint-text">{plan.tier}</p>
                  {plan.badge && <span className="price-badge">{plan.badge}</span>}
                </div>

                <div className="mt-3 flex items-baseline gap-1.5">
                  <p className="text-3xl font-black tracking-[-0.06em] sm:text-4xl">{plan.quantity}</p>
                  <p className="text-xs text-muted sm:text-sm">{plan.type}</p>
                </div>

                <p className="price-value mt-2 text-2xl font-bold sm:text-3xl">{plan.price}</p>
                <p className="mt-1.5 text-xs leading-5 faint-text">{plan.description}</p>

                <a
                  href={`${siteConfig.whatsapp}?text=${message}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button-whatsapp button-sm mt-4 w-full"
                  aria-label={`Order ${plan.quantity} ${plan.type} for ${plan.price} on WhatsApp`}
                >
                  <WhatsAppIcon size={14} /> Order
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
