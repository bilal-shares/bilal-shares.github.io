import type { Metadata } from "next";
import { ShieldCheck, SlidersHorizontal, Zap } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand-icons";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { PricingExplorer } from "@/components/pricing-explorer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Instagram Pricing",
  description:
    "Instagram follower, like, and Reel view packages from Social.bil. Every category and price on a single page.",
  alternates: { canonical: "/pricing/" },
};

const assurances = [
  {
    icon: ShieldCheck,
    color: "var(--ig-purple)",
    title: "No password",
    copy: "Public profile or post links are all that supported services require.",
  },
  {
    icon: Zap,
    color: "var(--ig-yellow)",
    title: "Fast start",
    copy: "Most eligible orders begin soon after the campaign is confirmed.",
  },
  {
    icon: SlidersHorizontal,
    color: "var(--ig-pink)",
    title: "Custom scale",
    copy: "Ask for a custom quantity or agency rate when presets do not fit.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Instagram pricing"
        index="02"
        title="Every package on one page."
        copy="Worldwide, Indian, and premium international growth, plus likes and Reel views. Tap a category and all of its prices appear right below — nothing to scroll sideways for."
      />
      <section className="section-pad pt-8">
        <div className="section-shell">
          <div className="mb-12 grid gap-4 md:grid-cols-3">
            {assurances.map(({ icon: Icon, color, title, copy }) => (
              <div key={title} className="surface-card p-6" data-reveal>
                <Icon size={20} style={{ color }} />
                <h2 className="mt-6 text-lg font-bold">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">{copy}</p>
              </div>
            ))}
          </div>

          <PricingExplorer />

          <div className="surface-card mt-8 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Need a different quantity or bulk rate?</p>
              <p className="mt-1 text-sm text-muted">Send the target and quantity for a custom quote.</p>
            </div>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="button-whatsapp button-sm shrink-0"
            >
              <WhatsAppIcon size={15} /> Ask on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-center text-xs leading-6 faint-text">
            Availability, speed, profile mix, and refill coverage can vary by package. Confirm the current service
            details before ordering.
          </p>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
