import type { Metadata } from "next";
import { MessageCircle, ShieldCheck, SlidersHorizontal, Zap } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { PricingExplorer } from "@/components/pricing-explorer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Instagram Pricing",
  description: "Editable Instagram follower, like, and Reel view packages from SocialSlay.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Instagram pricing"
        index="02"
        title="Choose the pace. Keep the process clear."
        copy="Published Instagram packages for worldwide, Indian, and premium international growth, plus likes and Reel views."
      />
      <section className="section-pad">
        <div className="section-shell">
          <div className="mb-14 grid gap-4 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "No password", copy: "Public profile or post links are all that supported services require." },
              { icon: Zap, title: "Fast start", copy: "Most eligible orders begin soon after the campaign is confirmed." },
              { icon: SlidersHorizontal, title: "Custom scale", copy: "Ask for a custom quantity or agency rate when presets do not fit." },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="surface-card rounded-3xl p-6" data-reveal>
                <Icon size={20} className="text-[#25D366]" />
                <h2 className="mt-7 text-lg font-bold">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">{copy}</p>
              </div>
            ))}
          </div>
          <PricingExplorer />
          <div className="surface-card mt-8 flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Need a different quantity or bulk rate?</p>
              <p className="mt-1 text-sm text-muted">Send the target and quantity for a custom quote.</p>
            </div>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="button-secondary shrink-0">
              <MessageCircle size={16} /> Ask on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-center text-xs leading-6 faint-text">
            Availability, speed, profile mix, and refill coverage can vary by package. Confirm the current service details before ordering.
          </p>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
