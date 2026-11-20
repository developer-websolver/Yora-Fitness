import type { Icon } from "@phosphor-icons/react";
import { GlassCard } from "./GlassCard";

type Props = {
  icon: Icon;
  title: string;
  body: string;
};

export function FeatureCard({ icon: IconCmp, title, body }: Props) {
  return (
    <GlassCard className="p-8 space-y-4 hover:border-crimson/50 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-2xl bg-crimson/20 border border-crimson/50 flex items-center justify-center text-crimson text-2xl group-hover:scale-110 transition-transform">
        <IconCmp weight="bold" />
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-xs text-neutral-300 leading-relaxed">{body}</p>
    </GlassCard>
  );
}
