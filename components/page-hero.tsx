import { siteConfig } from "@/data/site";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  index: string;
};

export function PageHero({ eyebrow, title, copy, index }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div
        className="ambient-orb right-[-10rem] top-[-8rem] h-[30rem] w-[30rem]"
        style={{ background: "rgba(225, 48, 108, 0.15)" }}
      />
      <div
        className="ambient-orb bottom-[-12rem] left-[5%] h-[26rem] w-[26rem]"
        style={{ background: "rgba(131, 58, 180, 0.14)" }}
      />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[1fr_16rem] lg:items-end">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-title gradient-text">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{copy}</p>
        </div>
        <div className="hidden border-l border-[color:var(--line)] pl-8 lg:block">
          <p className="font-mono text-6xl font-black faint-text">{index}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] faint-text">
            {siteConfig.name} / {eyebrow}
          </p>
        </div>
      </div>
    </section>
  );
}
