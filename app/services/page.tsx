import type { Metadata } from "next";
import { ArrowUpRight, Check, Layers3, MessageCircle } from "lucide-react";
import { ContactCta } from "@/components/contact-cta";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { services, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Social growth, website design, development, content planning, and branding services from SocialSlay.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        index="01"
        title="Growth is a system, not a single number."
        copy="Social.bil combines platform execution, content thinking, brand direction, and digital production so every touchpoint works harder."
      />

      <section className="section-pad">
        <div className="section-shell">
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map(({ title, short, description, tags, icon: Icon, accent }, index) => (
              <article
                key={title}
                className="surface-card group relative overflow-hidden rounded-[1.8rem] p-6 sm:p-9"
                data-reveal
              >
                <div
                  className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full opacity-10 blur-[55px] transition group-hover:opacity-25"
                  style={{ backgroundColor: accent }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="soft-tile grid h-14 w-14 place-items-center rounded-2xl" style={{ color: accent }}>
                      <Icon size={25} />
                    </span>
                    <span className="font-mono text-sm faint-text">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-10 text-3xl font-bold tracking-[-0.05em]">{title}</h2>
                  <p className="mt-4 text-base leading-8 text-muted">{short}</p>
                  <p className="mt-3 text-sm leading-7 faint-text">{description}</p>
                  <div className="mt-7 grid gap-2 sm:grid-cols-2">
                    {tags.map((tag) => (
                      <p key={tag} className="flex items-center gap-2 text-sm text-muted">
                        <Check size={14} className="text-[#25D366]" /> {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-tint">
        <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading
            eyebrow="How it works"
            title="Brief. Match. Launch. Support."
            copy="The fastest route from a goal to a see it become reality."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Share the goal", "Send the platform, public link, target quantity, and watch the growth happen."],
              ["02", "Choose the right tier", "We provide quality Servies, geography, speed, and refill coverage to your needs."],
              ["03", "Confirm and launch", "You receive a clear quote before the order begins."],
              ["04", "Stay supported", "Direct support remains available throughout delivery and eligible refill windows and even after delivery."],
            ].map(([number, title, copy]) => (
              <div key={number} className="surface-card rounded-3xl p-7" data-reveal>
                <p className="font-mono text-sm text-[#E1306C]">{number}</p>
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="surface-card flex flex-col gap-8 rounded-[2rem] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl items-start gap-5">
              <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#F77737] via-[#E1306C] to-[#833AB4] text-white">
                <Layers3 size={22} />
              </span>
              <div>
                <h2 className="text-2xl font-bold">Need several services at once?</h2>
                <p className="mt-2 leading-7 text-muted">Ask for a custom plan for creators, launch, brand, or agency package.</p>
              </div>
            </div>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="button-primary shrink-0">
              <MessageCircle size={16} /> Build a custom package <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
