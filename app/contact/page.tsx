import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, TelegramIcon, WhatsAppIcon } from "@/components/brand-icons";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Social.bil on WhatsApp, Instagram, or Telegram, or prepare a project brief.",
  alternates: { canonical: "/contact/" },
};

const channels = [
  {
    title: "WhatsApp",
    copy: "Fastest route for quotes, order details, and support.",
    href: siteConfig.whatsapp,
    Icon: WhatsAppIcon,
    color: "var(--whatsapp)",
    primary: true,
  },
  {
    title: "Instagram",
    copy: "Follow the page and send a direct message.",
    href: siteConfig.instagram,
    Icon: InstagramIcon,
    color: "var(--ig-pink)",
    primary: false,
  },
  {
    title: "Telegram",
    copy: "Useful for quick communication and bulk discussions.",
    href: siteConfig.telegram,
    Icon: TelegramIcon,
    color: "var(--telegram)",
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        index="04"
        title="Tell us where you want to go."
        copy="A public link, target platform, desired quantity, and rough budget are enough to begin."
      />

      <section className="section-pad pt-8">
        <div className="section-shell">
          <div className="grid gap-4 lg:grid-cols-3">
            {channels.map(({ title, copy, href, Icon, color, primary }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`surface-card group p-7 transition duration-300 hover:-translate-y-1.5 ${
                  primary ? "channel-card--whatsapp" : ""
                }`}
                data-reveal
              >
                <div className="flex items-start justify-between">
                  <span className="soft-tile grid h-12 w-12 place-items-center rounded-2xl" style={{ color }}>
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight className="faint-text transition group-hover:text-[color:var(--foreground)]" size={18} />
                </div>
                <h2 className="mt-8 text-2xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
                {primary && (
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white">
                    <WhatsAppIcon size={12} /> Primary channel
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Project brief</p>
              <h2 className="section-title">Make the first message useful.</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-muted">
                Complete the form and we will prepare a structured WhatsApp message with the essentials already
                included.
              </p>
              <div className="mt-8 space-y-4 text-sm text-muted">
                <p>1. Choose the platform and service.</p>
                <p>2. Add your quantity, budget, or order goal.</p>
                <p>3. Review and send the prepared WhatsApp message.</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
