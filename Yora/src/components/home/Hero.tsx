import { Barbell, Handshake, Heartbeat, Play, Users } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { brands, orbitNodes, type BrandKey } from "../../data/brands";
import { useUi } from "../../context/UiContext";
import { Button } from "../ui/Button";

const pillars = [
  { n: "01", title: "Diverse Fitness Brands", body: "Multiple brands. One fitness vision.", icon: Barbell },
  { n: "02", title: "Franchise Opportunities", body: "Grow with a trusted fitness network.", icon: Handshake },
  { n: "03", title: "Expert Fitness Solutions", body: "Training, strength and transformation.", icon: Users },
  { n: "04", title: "Complete Wellness", body: "Fitness, health and lifestyle.", icon: Heartbeat },
];

// Optically balanced bounding box and scale per brand to ensure uniform padding and visual weight
const brandLogoLayout: Record<BrandKey, { boxClass: string; imgClass: string }> = {
  ff: {
    // Red stacked FF lockup (1.17:1) - perfectly balanced with clean margin
    boxClass: "w-[70%] h-[70%]",
    imgClass: "scale-100",
  },
  vivafit: {
    // Baseline (1.41:1) - verified perfect
    boxClass: "w-[76%] h-[76%]",
    imgClass: "scale-100",
  },
  cardio: {
    // Balanced (1.45:1 matching VivaFit) - big prominent heart, clear text, zero border touching
    boxClass: "w-[76%] h-[76%]",
    imgClass: "scale-100",
  },
  sakti: {
    // Square (1.13:1) - comfortable breathing room on all sides
    boxClass: "w-[64%] h-[64%]",
    imgClass: "scale-100",
  },
  qualetee: {
    // Baseline (1.53:1) - verified perfect
    boxClass: "w-[76%] h-[76%]",
    imgClass: "scale-100",
  },
  kinesis: {
    // Wide (1.78:1) - comfortable ~14.5px margin on left & right
    boxClass: "w-[78%] h-[78%]",
    imgClass: "scale-100",
  },
};

export function Hero() {
  const { openLead, openVideo } = useUi();
  const [active, setActive] = useState<BrandKey | null>("ff");
  const [isPaused, setIsPaused] = useState(false);

  const brandKeys = useMemo<BrandKey[]>(
    () => ["ff", "vivafit", "cardio", "sakti", "qualetee", "kinesis"],
    []
  );

  // Solo one-by-one spark cycle through the brands
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActive((prev) => {
        const candidates = brandKeys.filter((k) => k !== prev);
        return candidates[Math.floor(Math.random() * candidates.length)];
      });
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, brandKeys]);

  return (
    <section className="relative pt-8 sm:pt-12 pb-0 overflow-hidden hero-glow-strip hero-grid-bg border-b border-white/[0.06] w-full">
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=80"
          alt="Yora Gym Background"
          className="w-full h-full object-cover object-center filter grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/90 to-obsidian-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/70" />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 ml-13 mt-10 ">
            <h1 className="font-['Oswald'] text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[0.92] uppercase mt-8">
              FITNESS THAT <br />
              <span className="text-crimson drop-shadow-[0_0_25px_rgba(255,30,39,0.45)]">
                INSPIRES A
              </span>{" "}
              <br />
              <span className="hero-outline-text">STRONGER YOU</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed">
              Six specialist brands under one fitness vision — training, strength, wellness and lifestyle, wherever your journey starts.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button onClick={() => openLead("Start Your Journey")} className="px-7 py-3.5 rounded-full text-sm">
                <span>Start Your Journey</span>
                <span className="w-6 h-6 rounded-full bg-white text-crimson font-bold text-xs flex items-center justify-center">↗</span>
              </Button>
              <Button variant="ghost" onClick={openVideo} className="px-6 py-3.5 rounded-full font-medium text-sm">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-crimson">
                  <Play weight="fill" size={12} />
                </span>
                Watch Our Story
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 pt-4">
              {[
                { value: "06", label: "Fitness Brands" },
                { value: "15+", label: "Locations" },
                { value: "25K+", label: "Members" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                  {i > 0 ? <div className="h-8 w-px bg-white/10 hidden sm:block" /> : null}
                  <div>
                    <div className="font-outfit text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {stat.value.replace("+", "")}
                      {stat.value.includes("+") ? <span className="text-crimson">+</span> : null}
                    </div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="lg:col-span-6 xl:col-span-5 relative flex flex-col items-center justify-center orbit-system-3d -mt-2 lg:-mt-8 -ml-15"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Ambient Background Gradient matching YoraFit Crimson */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] sm:w-[620px] sm:h-[620px] lg:w-[680px] lg:h-[680px] rounded-full pointer-events-none -z-10 "
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 30, 39, 0.22) 0%, rgba(255, 30, 39, 0.06) 42%, transparent 70%)",
                filter: "blur(36px)",
              }}
            />

            <div className="relative w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] lg:w-[520px] lg:h-[520px] flex items-center justify-center select-none mt-10 -ml-10">
              <div className="orbit-ring orbit-ring-outer" />
              <div className="orbit-ring orbit-ring-inner" />

              {/* Clean Central YORA Logo - Perfectly framed on dark disc */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-[#0c0d12] border border-white/20 flex items-center justify-center p-4 shadow-[0_0_35px_rgba(255,30,39,0.22)]">
                <img
                  src="/assets/yora_fitness_clean.png"
                  alt="YORA Fitness Logo"
                  className="w-full max-h-14 sm:max-h-16 lg:max-h-18 object-contain"
                />
              </div>

              <div className="orbit-track-rotate absolute inset-0 w-full h-full pointer-events-none">
                {orbitNodes.map((node) => {
                  const brand = brands[node.key];
                  const isActive = active === node.key;

                  return (
                    <div key={node.key} className={`${node.className} pointer-events-auto`}>
                      <div className="orbit-counter-rotate w-full h-full">
                        <button
                          type="button"
                          onClick={() => {
                            setActive(node.key);
                            setIsPaused(true);
                          }}
                          onMouseEnter={() => {
                            setActive(node.key);
                            setIsPaused(true);
                          }}
                          className={`hero-orbit-node brand-circle group relative w-full h-full rounded-full bg-[#0d0e14] flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden ${
                            isActive
                              ? "scale-105 border-transparent shadow-[0_0_25px_var(--spark-color-glow)]"
                              : "border border-white/12 hover:border-white/30 shadow-lg"
                          }`}
                          style={
                            isActive
                              ? ({
                                  "--spark-color": brand.color,
                                  "--spark-color-glow": `${brand.color}55`,
                                } as React.CSSProperties)
                              : undefined
                          }
                          aria-label={brand.title}
                        >
                          {/* Traveling Spark Ring for Solo Active Brand */}
                          {isActive && <div className="brand-spark-ring" />}

                          {/* Optically balanced inner safe box per brand aspect ratio */}
                          <div
                            className={`${
                              brandLogoLayout[node.key]?.boxClass || "w-[76%] h-[76%]"
                            } flex items-center justify-center pointer-events-none z-10 transition-transform duration-300`}
                          >
                            <img
                              src={brand.logo}
                              alt={brand.shortName}
                              className={`max-w-full max-h-full object-contain brightness-125 contrast-110 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${
                                brandLogoLayout[node.key]?.imgClass || ""
                              }`}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 sm:mt-20 lg:mt-24 mb-10 relative z-20">
          {pillars.map((pillar) => (
            <div key={pillar.n} className="glass-card yora-feature-card rounded-2xl p-5 group">
              <div className="flex items-center justify-between mb-4">
                <div className="feature-icon w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson">
                  <pillar.icon weight="bold" className="text-lg" />
                </div>
                <span className="feature-number font-outfit text-sm font-bold text-white/25">{pillar.n}</span>
              </div>
              <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
              <p className="text-xs text-neutral-400 mt-1">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
      <BrandBar />
    </section>
  );
}

function BrandBar() {
  const brandItems: { key: BrandKey; name: string; color: string }[] = [
    { key: "ff", name: "Fitness Factory", color: brands.ff.color },
    { key: "vivafit", name: "VivaFit", color: brands.vivafit.color },
    { key: "sakti", name: "Sakti", color: brands.sakti.color },
    { key: "cardio", name: "Cardio", color: brands.cardio.color },
    { key: "qualetee", name: "Qualeatee", color: brands.qualetee.color },
    { key: "kinesis", name: "Kinesis", color: brands.kinesis.color },
  ];

  return (
    <div className="relative z-10 w-full py-3.5 bg-[#0c0d12]/95 border-y border-white/[0.08] -mt-10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center flex-wrap gap-y-2.5 gap-x-5 sm:gap-x-7 lg:gap-x-8 font-outfit text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">
        {brandItems.map((item, index) => (
          <div key={item.key} className="flex items-center gap-5 sm:gap-7 lg:gap-8">
            <span className="flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors duration-200">
              <span
                className="w-2 h-2 rounded-full shrink-0 shadow-[0_0_8px_currentColor]"
                style={{ backgroundColor: item.color, color: item.color }}
              />
              <span className="font-bold tracking-widest whitespace-nowrap">{item.name}</span>
            </span>
            {index < brandItems.length - 1 && (
              <span className="text-crimson/70 font-light select-none">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}