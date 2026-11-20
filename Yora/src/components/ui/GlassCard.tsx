import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function GlassCard({ className = "", children, ...props }: Props) {
  return (
    <div className={`glass-card rounded-3xl border border-white/10 shadow-2xl ${className}`} {...props}>
      {children}
    </div>
  );
}
