type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  index: string;
};

export function PageHero({ eyebrow, title, copy, index }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="ambient-orb right-[-10rem] top-[-8rem] h-[32rem] w-[32rem] bg-[#E1306C]/14" />
      <div className="ambient-orb bottom-[-12rem] left-[5%] h-[28rem] w-[28rem] bg-[#25D366]/8" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[1fr_16rem] lg:items-end">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-title gradient-text">{title}</h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-xl">{copy}</p>
        </div>
        <div className="hidden border-l border-[color:var(--line)] pl-8 lg:block">
          <p className="font-mono text-7xl font-black faint-text">{index}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] faint-text">Social.bil / {eyebrow}</p>
        </div>
      </div>
    </section>
  );
}
