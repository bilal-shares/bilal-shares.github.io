import { ArrowUpRight, Camera, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--section-soft)]">
      <div className="section-shell grid gap-12 py-16 lg:grid-cols-[1.3fr_.7fr_.7fr]">
        <div>
          <Link href="/" className="text-2xl font-black tracking-[-0.06em]">
            SOCIAL<span className="text-[#E1306C]">.BIL</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            Social growth, creative strategy, and premium digital experiences for people and brands ready to look established.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-[color:var(--foreground)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Direct lines</p>
          <div className="mt-5 grid gap-3">
            {[
              { label: "WhatsApp", href: siteConfig.whatsapp, icon: MessageCircle },
              { label: "Instagram", href: siteConfig.instagram, icon: Camera },
              { label: "Telegram", href: siteConfig.telegram, icon: Send },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-sm text-muted transition hover:text-[color:var(--foreground)]"
              >
                <span className="flex items-center gap-2"><Icon size={15} /> {label}</span>
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="section-shell flex flex-col gap-2 border-t border-[color:var(--line)] py-6 text-xs faint-text sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Social.Bil All rights reserved.</p>
        <p> links only. We Never ask for your password.</p>
      </div>
    </footer>
  );
}
