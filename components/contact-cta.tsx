import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/brand-icons";
import { MagneticLink } from "@/components/magnetic-link";
import { siteConfig } from "@/data/site";

export function ContactCta() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="surface-card relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-12 lg:py-20">
          <div
            className="ambient-orb left-[-8rem] top-[-10rem] h-80 w-80"
            style={{ background: "rgba(225, 48, 108, 0.18)" }}
          />
          <div
            className="ambient-orb bottom-[-12rem] right-[-6rem] h-80 w-80"
            style={{ background: "rgba(131, 58, 180, 0.16)" }}
          />
          <div className="relative">
            <p className="eyebrow justify-center">Ready when you are</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Let&apos;s turn attention into <span className="gradient-text">momentum.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted">
              Whether you need followers, likes, views, comments, or engagement, we&apos;re here to help with fast,
              reliable service and dedicated support.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <MagneticLink href={siteConfig.whatsapp} external className="button-whatsapp">
                <WhatsAppIcon size={17} /> Chat on WhatsApp <ArrowUpRight size={16} />
              </MagneticLink>
              <MagneticLink href={siteConfig.instagram} external className="button-secondary">
                <InstagramIcon size={17} /> Message on Instagram
              </MagneticLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
