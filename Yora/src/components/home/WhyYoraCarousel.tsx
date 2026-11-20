import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const cards = [
  { title: "Partnership Opportunities", tag: "Collaborative Network", img: "/assets/Gym Partnership Opportunities Banner.png" },
  { title: "Multi-Brand Ecosystem", tag: "6 Specialist Brands", img: "/assets/Multi-Brand Fitness Ecosystem.png" },
  { title: "Growth & Expansion", tag: "National Footprint", img: "/assets/Neon Growth and Expansion.png" },
  { title: "Centralized Tech & CRM", tag: "Smart Gym Stack", img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" },
  { title: "Trainer Academy & SOPs", tag: "Staff Excellence", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80" },
  { title: "Bulk Equipment Procurement", tag: "Direct Factory Pricing", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" },
];

export function WhyYoraCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const paused = useRef(false);

  const update = () => {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const scrollByCard = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    const width = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 320;
    el.scrollBy({ left: dir * (width + 24), behavior: "smooth" });
  };

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    const id = window.setInterval(() => {
      if (paused.current || !scroller.current) return;
      const box = scroller.current;
      const max = box.scrollWidth - box.clientWidth - 15;
      if (box.scrollLeft >= max) box.scrollTo({ left: 0, behavior: "smooth" });
      else scrollByCard(1);
    }, 5000);
    return () => {
      el.removeEventListener("scroll", update);
      window.clearInterval(id);
    };
  }, []);

  const activeDot = Math.min(3, Math.round(progress * 3));

  return (
    <section className="yora-pattern-section w-full px-4 sm:px-8 lg:px-12 py-20 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        {/* <SectionHeader
          align="left"
          eyebrow="WHY PARTNER WITH YORA"
          title="Why Build Your Fitness Brand With YORA?"
          subtitle="YORA is more than a fitness brand — it's an end-to-end multi-brand fitness ecosystem providing turnkey infrastructure, centralized marketing, cross-brand member funnels, and corporate management for shared growth."
        /> */}
        <div className="text-left">
          <span className="text-sm font-semibold tracking-[0.2em] text-crimson uppercase">
            WHY PARTNER WITH YORA
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
            Why Build Your Fitness Brand
          </h2>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
            With YORA?
          </h2>

          <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-gray-400">
            YORA is more than a fitness brand — it's an end-to-end multi-brand
            fitness ecosystem providing turnkey infrastructure, centralized
            marketing, cross-brand member funnels, and corporate management
            for shared growth.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden sm:block">
            <div className="yora-progress-track">
              <div className="yora-progress-thumb" style={{ left: `${progress * 65}%` }} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => scrollByCard(-1)} className="w-11 h-11 rounded-2xl bg-obsidian-900 hover:bg-crimson border border-white/10 hover:border-crimson text-white flex items-center justify-center" aria-label="Previous">
              <CaretLeft weight="bold" />
            </button>
            <button type="button" onClick={() => scrollByCard(1)} className="w-11 h-11 rounded-2xl bg-obsidian-900 hover:bg-crimson border border-white/10 hover:border-crimson text-white flex items-center justify-center" aria-label="Next">
              <CaretRight weight="bold" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div
          ref={scroller}
          className="yora-carousel-scroll flex gap-6 overflow-x-auto py-2 px-1"
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
        >
          {cards.map((card) => (
            <div key={card.title} className="yora-carousel-card glass-card yora-glow-card p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-crimson/50 transition-all duration-300 group flex flex-col justify-between mt-8">
              <div>
                <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-bold tracking-widest uppercase text-neutral-300">{card.tag}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-crimson">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                const el = scroller.current;
                if (!el) return;
                const width = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 320;
                el.scrollTo({ left: i * (width + 24), behavior: "smooth" });
              }}
              className={`h-2 rounded-full transition-all ${i === activeDot ? "w-8 bg-crimson" : "w-2 bg-white/20 hover:bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
