import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "crimson" | "ghost" | "amber" | "cyan";

const variants: Record<Variant, string> = {
  crimson:
    "bg-crimson hover:bg-crimson-dark text-white shadow-[0_0_20px_rgba(255,30,39,0.45)] hover:shadow-[0_0_30px_rgba(255,30,39,0.7)]",
  ghost: "bg-obsidian-850/80 hover:bg-obsidian-800 text-white border border-white/10 hover:border-white/25",
  amber: "bg-amber-500 hover:bg-amber-600 text-obsidian-950",
  cyan: "bg-cyan-500 hover:bg-cyan-600 text-obsidian-950",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({ variant = "crimson", className = "", children, ...props }: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-1.5 font-bold transition-all hover:scale-[1.02] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
