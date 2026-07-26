import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bolt,
  Clock3,
  Headphones,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import { InstagramIcon, WhatsAppIcon } from "@/components/brand-icons";
import { ContactCta } from "@/components/contact-cta";
import { FaqList } from "@/components/faq-list";
import { HeroStage } from "@/components/hero-stage";
import { MagneticLink } from "@/components/magnetic-link";
import { PricingExplorer } from "@/components/pricing-explorer";
import { ProofPreview } from "@/components/proof-preview";
import { SectionHeading } from "@/components/section-heading";
import { platforms, services, siteConfig, testimonials } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div
          className="ambient-orb left-[-12rem] top-[12%] h-[30rem] w-[30rem]"
          style={{ background: "rgba(225, 48, 108, 0.16)" }}
        />
        <div
          className="ambient-orb right-[-14rem] top-[-6rem] h-[34rem] w-[34rem]"
          style={{ background: "rgba(131, 58, 180, 0.14)" }}
        />
        <div className="section-shell relative grid items-center gap-12 pb-16 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.04fr_.96fr] lg:pb-20">
          <div className="relative z-10">
            <div className="eyebrow">Premium social growth services</div>
            <h1 className="mt-6 max-w-[13ch] text-[clamp(2.9rem,7.4vw,6.6rem)] font-black leading-[0.88] tracking-[-0.075em]">
              Become <span className="gradient-text">impossible</span> to ignore.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Trusted social media growth services for creators, businesses, brands, agencies, and public figures
              worldwide.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MagneticLink href={siteConfig.whatsapp} external className="button-whatsapp">
                <WhatsAppIcon size={17} /> Chat on WhatsApp <ArrowUpRight size={16} />
              </MagneticLink>
              <MagneticLink href={siteConfig.instagram} external className="button-primary">
                <InstagramIcon size={17} /> Instagram DM
              </MagneticLink>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[0.12em] faint-text">
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[color:var(--ig-purple)]" /> No password needed
              </span>
              <span className="flex items-center gap-2">
                <Clock3 size={15} className="text-[color:var(--ig-yellow)]" /> Fast results
              </span>
              <span className="flex items-center gap-2">
                <Headphones size={15} className="text-[color:var(--ig-pink)]" /> Direct 24/7 support
              </span>
            </div>
          </div>
          <HeroStage />
        </div>
      </section>

      <section className="ticker-strip overflow-hidden border-y py-5">
        <div className="ticker">
          {[...platforms, ...platforms].map(({ name, icon: Icon, color }, index) => (
            <div key={`${name}-${index}`} className="flex items-center gap-4 px-7">
              <Icon size={18} style={{ color }} />
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">{name} growth</span>
              <span className="h-1 w-1 rounded-full bg-[color:var(--line-strong)]" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface-card p-6 sm:p-8" data-reveal>
              <BadgeCheck className="text-[color:var(--ig-pink)]" size={21} />
              <p className="mt-8 text-4xl font-black tracking-[-0.07em] sm:text-5xl">10,000+</p>
              <p className="mt-2 text-sm text-muted">Documented delivery proofs</p>
            </div>
            <div className="surface-card p-6 sm:p-8" data-reveal>
              <Sparkles className="text-[color:var(--ig-purple)]" size={21} />
              <p className="mt-8 text-4xl font-black tracking-[-0.07em] sm:text-5xl">50+</p>
              <p className="mt-2 text-sm text-muted">Social platforms supported</p>
            </div>
            <div className="surface-card p-6 sm:p-8" data-reveal>
              <WhatsAppIcon size={21} className="whatsapp-text" />
              <p className="mt-8 text-4xl font-black tracking-[-0.07em] sm:text-5xl">Direct</p>
              <p className="mt-2 text-sm text-muted">WhatsApp-led client support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="section-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Everything you need to grow on social media."
              copy="We help creators, businesses, brands, and agencies grow with trusted social media services, including followers, likes, views, comments, shares, watch time, and engagement across today's leading platforms."
            />
            <Link href="/services" className="button-secondary w-fit">
              Explore all services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map(({ title, short, tags, icon: Icon, accent }, index) => (
              <article
                key={title}
                className="surface-card group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1.5 sm:p-8"
                data-reveal
              >
                <div
                  className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full opacity-10 blur-3xl transition group-hover:opacity-25"
                  style={{ backgroundColor: accent }}
                />
                <div className="relative flex items-start justify-between">
                  <span className="soft-tile grid h-12 w-12 place-items-center rounded-2xl" style={{ color: accent }}>
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-xs faint-text">0{index + 1}</span>
                </div>
                <h3 className="relative mt-8 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
                <p className="relative mt-3 min-h-16 text-sm leading-7 text-muted">{short}</p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[color:var(--line)] bg-[color:var(--soft-bg)] px-3 py-1 text-[10px] uppercase tracking-[0.12em] faint-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-tint">
        <div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why Social.bil"
              title="Clear process. Premium handling."
              copy="You should always know what you are buying, what is needed from you, and what happens next."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="surface-card p-7" data-reveal>
              <ShieldCheck size={22} className="text-[color:var(--ig-purple)]" />
              <h3 className="mt-8 text-xl font-bold">Password-free</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Only links are enough for supported growth services.
              </p>
            </article>
            <article className="surface-card p-7" data-reveal>
              <Bolt size={22} className="text-[color:var(--ig-yellow)]" />
              <h3 className="mt-8 text-xl font-bold">Fast execution</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Almost all orders begin processing within minutes of confirmation.
              </p>
            </article>
            <article className="surface-card p-7" data-reveal>
              <WhatsAppIcon size={22} className="whatsapp-text" />
              <h3 className="mt-8 text-xl font-bold">Human support</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Speak directly through WhatsApp, Instagram, or Telegram 24/7.
              </p>
            </article>
            <article className="surface-card p-7" data-reveal>
              <RefreshCcw size={22} className="text-[color:var(--ig-pink)]" />
              <h3 className="mt-8 text-xl font-bold">Refill options</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                All plans include clearly stated free refill coverage.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Platform support"
            title="All your social media growth in one place."
            copy="Get followers, likes, views, comments, shares, watch time, and more across Instagram, TikTok, Facebook, YouTube, Telegram, Spotify, X (Twitter), and other major platforms."
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {platforms.map(({ name, icon: Icon, color }) => (
              <div key={name} className="surface-card p-5 text-center" data-reveal>
                <Icon size={25} className="mx-auto" style={{ color }} />
                <p className="mt-4 text-sm font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section-pad section-tint scroll-mt-28">
        <div className="section-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Instagram pricing"
              title="Straightforward packages. Custom scale."
              copy="Pick a category and every package price is right there — no sideways scrolling, no hidden tiers."
            />
            <Link href="/pricing" className="button-secondary w-fit">
              See every Instagram package <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-12">
            <PricingExplorer compact />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Client results"
              title="Proof before promises."
              copy="A growing archive of delivery snapshots across creators, businesses, artists, and public pages. For the latest proofs, check our Instagram highlights."
            />
            <Link href="/proofs" className="button-secondary w-fit">
              Browse 95 proofs <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-12 pb-10">
            <ProofPreview />
          </div>
        </div>
      </section>

      <section className="section-pad section-tint">
        <div className="section-shell">
          <SectionHeading eyebrow="Client notes" title="The experience matters too." align="center" />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="surface-card p-7 sm:p-8" data-reveal>
                <div className="flex gap-1 text-[color:var(--ig-yellow)]">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-6 text-base leading-8 text-[color:var(--foreground)] sm:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-[color:var(--line)] pt-5">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.13em] faint-text">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Know what happens next."
            copy="No hidden process and no password request. These are the questions clients ask before their first campaign."
          />
          <FaqList />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
