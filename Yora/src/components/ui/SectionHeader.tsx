type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }: Props) {
  const wrap = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${wrap}`}>
      <div className={`inline-flex items-center gap-3 mb-3 ${align === "center" ? "" : ""}`}>
        <span className="w-8 h-0.5 bg-crimson rounded-full" />
        <span className="text-xs font-extrabold tracking-widest uppercase text-crimson">{eyebrow}</span>
        <span className="w-8 h-0.5 bg-crimson rounded-full" />
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">{title}</h2>
      {subtitle ? <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed">{subtitle}</p> : null}
    </div>
  );
}
