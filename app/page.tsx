import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bolt,
  Camera,
  Clock3,
  Headphones,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
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
      <section className="relative min-h-screen overflow-hidden pt-32 sm:pt-40">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="ambient-orb left-[-12rem] top-[15%] h-[32rem] w-[32rem] bg-[#E1306C]/14" />
        <div className="ambient-orb right-[-15rem] top-[-8rem] h-[38rem] w-[38rem] bg-[#25D366]/8" />
        <div className="section-shell relative grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-20 lg:grid-cols-[1.04fr_.96fr]">
          <div className="relative z-10">
            <div className="eyebrow">Premium social growth Services</div>
            <h1 className="mt-6 max-w-[12ch] text-[clamp(3.35rem,8.7vw,8.4rem)] font-black leading-[0.83] tracking-[-0.085em]">
              Become <span className="gradient-text">impossible</span> to ignore.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-xl">
              Trusted social media growth services for creators, businesses, brands, agencies, and public figures worldwide..
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MagneticLink href={siteConfig.whatsapp} external className="button-primary">
                <MessageCircle size={17} /> Chat on WhatsApp <ArrowUpRight size={16} />
              </MagneticLink>
              <MagneticLink href={siteConfig.instagram} external className="button-secondary">
                <Camera size={17} /> Instagram DM
              </MagneticLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[0.12em] faint-text">
              <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#25D366]" /> No password needed</span>
              <span className="flex items-center gap-2"><Clock3 size={15} className="text-[#FCAF45]" /> Fast results</span>
              <span className="flex items-center gap-2"><Headphones size={15} className="text-[#E1306C]" /> Direct 24/7 support</span>
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
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { value: "10,000+", label: "Documented delivery proofs", icon: BadgeCheck },
              { value: "50+", label: "Social platforms supported", icon: Sparkles },
              { value: "Direct", label: "WhatsApp-led client support", icon: MessageCircle },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="surface-card rounded-[1.5rem] p-6 sm:p-8" data-reveal>
                <Icon className="text-[#25D366]" size={21} />
                <p className="mt-10 text-5xl font-black tracking-[-0.07em]">{value}</p>
                <p className="mt-2 text-sm text-muted">{label}</p>
              </div>
            ))}
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
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map(({ title, short, tags, icon: Icon, accent }, index) => (
              <article
                key={title}
                className="surface-card group relative overflow-hidden rounded-[1.6rem] p-6 transition duration-500 hover:-translate-y-2 sm:p-8"
                data-reveal
              >
                <div
                  className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full opacity-10 blur-3xl transition group-hover:opacity-25"
                  style={{ backgroundColor: accent }}
                />
                <div className="flex items-start justify-between">
                  <span className="soft-tile grid h-12 w-12 place-items-center rounded-2xl" style={{ color: accent }}>
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-xs faint-text">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl font-bold tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 min-h-16 text-sm leading-7 text-muted">{short}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full border border-[color:var(--line)] bg-[color:var(--soft-bg)] px-3 py-1 text-[10px] uppercase tracking-[0.12em] faint-text">
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
        <div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Why Social.bil"
              title="Clear process. Premium handling. Only Quality Services"
              copy="You should always know what you are buying, what is needed from you, and what happens next."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Password-free", copy: "Only links are enough for supported growth services.", icon: ShieldCheck },
              { title: "Fast execution", copy: "almost all orders begin processing soon in just few mins after confirmation.", icon: Bolt },
              { title: "Human support", copy: "Speak directly through WhatsApp, Instagram, or Telegram 24/7.", icon: Headphones },
              { title: "Refill options", copy: "all plans include clearly stated free refill coverage.", icon: RefreshCcw },
            ].map(({ title, copy, icon: Icon }) => (
              <article key={title} className="surface-card rounded-[1.5rem] p-7" data-reveal>
                <Icon size={22} className="text-[#25D366]" />
                <h3 className="mt-10 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Platform support"
            title="All Your Social Media Growth in One Place."
            copy="Get followers, likes, views, comments, shares, watch time, and more across Instagram, TikTok, Facebook, YouTube, Telegram, Spotify, X (Twitter), and other major platforms."
            align="center"
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {platforms.map(({ name, icon: Icon, color }) => (
              <div key={name} className="surface-card rounded-[1.4rem] p-5 text-center" data-reveal>
                <Icon className="mx-auto" size={25} style={{ color }} />
                <p className="mt-5 text-sm font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-tint">
        <div className="section-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Instagram pricing"
              title="Straightforward packages. Custom scale."
              copy="Start with a published package or ask for a tailored quantity and bulk rate."
            />
            <Link href="/pricing" className="button-secondary w-fit">
              See every Instagram package <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-14">
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
              copy="A growing archive of delivery snapshots across creators, businesses, artists, and public pages. for latest proofs please check our Instagram highlights."
            />
            <Link href="/proofs" className="button-secondary w-fit">
              Browse 95 proofs <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-14 pb-10">
            <ProofPreview />
          </div>
        </div>
      </section>

      <section className="section-pad section-tint">
        <div className="section-shell">
          <SectionHeading eyebrow="Client notes" title="The experience matters too." align="center" />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="surface-card rounded-[1.5rem] p-7 sm:p-8" data-reveal>
                <div className="flex gap-1 text-[#FCAF45]">
                  {Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}
                </div>
                <blockquote className="mt-7 text-lg leading-8 text-[color:var(--foreground)]">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <figcaption className="mt-8 border-t border-[color:var(--line)] pt-5">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.13em] faint-text">{testimonial.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="section-shell grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
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
