import { ArrowUpRight, Camera, MessageCircle } from "lucide-react";
import { MagneticLink } from "@/components/magnetic-link";
import { siteConfig } from "@/data/site";

export function ContactCta() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <div className="surface-card relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 lg:py-24">
          <div className="ambient-orb left-[-8rem] top-[-10rem] h-80 w-80 bg-[#E1306C]/18" />
          <div className="ambient-orb bottom-[-12rem] right-[-6rem] h-80 w-80 bg-[#25D366]/10" />
          <div className="relative">
            <p className="eyebrow justify-center">Ready when you are</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Let&apos;s turn attention into <span className="gradient-text">momentum.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
              Whether you need followers, likes, views, comments, or engagement, we're here to help with fast, reliable service and dedicated support.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <MagneticLink href={siteConfig.whatsapp} external className="button-primary">
                <MessageCircle size={17} /> Chat on WhatsApp <ArrowUpRight size={16} />
              </MagneticLink>
              <MagneticLink href={siteConfig.instagram} external className="button-secondary">
                <Camera size={17} /> Message on Instagram
              </MagneticLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
