import { Buildings, TrendUp, Trophy, UsersThree } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const stats: { icon: Icon; value: string; label: string }[] = [
  { icon: UsersThree, value: "10K+", label: "Active Members" },
  { icon: Buildings, value: "45+", label: "Locations Nationally" },
  { icon: Trophy, value: "98%", label: "Retention Rate" },
  { icon: TrendUp, value: "3.2x", label: "Avg Franchise ROI" },
];

export function StatsBar() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card yora-stat-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <stat.icon weight="bold" className="yora-stat-icon text-crimson text-3xl shrink-0" size={32} />
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</h3>
                <p className="text-xs text-neutral-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
