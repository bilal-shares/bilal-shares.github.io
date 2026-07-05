type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} data-reveal>
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className={`section-title ${align === "center" ? "mx-auto" : ""}`}>{title}</h2>
      {copy && <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{copy}</p>}
    </div>
  );
}
