import { CheckCircle } from "@phosphor-icons/react";
import { useUi } from "../../context/UiContext";
import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";

type Variant = "home" | "compact" | "detailed";

export function FranchiseModels({ variant = "home" }: { variant?: Variant }) {
  const { openLead } = useUi();
  const heading =
    variant === "compact"
      ? { eyebrow: "Investment Structures", title: "FOCO vs FOFO Franchise Models", subtitle: "Flexible partnership options engineered for maximum investor profitability." }
      : variant === "detailed"
        ? { eyebrow: "Operational Models", title: "FOCO vs FOFO Franchise Structures", subtitle: "Select your level of daily operational involvement and management control." }
        : { eyebrow: "FRANCHISE BUSINESS MODELS", title: "FOCO & FOFO Models", subtitle: "YORA supports both operational partnership structures — choose the model that best aligns with your investment strategy and management availability." };

  return (
    <section className={variant === "home" ? "yora-pattern-orbit w-full px-4 sm:px-8 lg:px-12 py-20 border-b border-white/[0.06]" : "pt-8 space-y-10"}>
      <div className={variant === "home" ? "max-w-4xl mx-auto text-center mb-16" : "max-w-3xl mx-auto text-center"}>
        <SectionHeader {...heading} />
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${variant === "home" ? "gap-12 max-w-6xl" : "max-w-5xl"} mx-auto items-stretch`}>
        <GlassCard className="yora-model-card yora-foco-card p-8 flex flex-col justify-between h-full border-amber-500/40 relative overflow-hidden">
          <div className="yora-model-glow" />
          <div className="space-y-6 flex-grow flex flex-col">
            <div className="yora-model-badge foco-badge inline-block self-start px-4 py-1.5 rounded-full font-extrabold text-xs tracking-wider uppercase">
              FOCO Model
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-white">Franchise-Owned, Company-Operated</h3>
              <p className="text-sm text-neutral-400 mt-1">Hands-off investment model managed entirely by expert corporate teams.</p>
            </div>
            <ul className="space-y-3 pt-4 border-t border-white/10 text-xs text-neutral-300 relative z-10 flex-grow">
              <li className="flex items-start gap-2.5">
                <CheckCircle weight="bold" className="foco-icon text-amber-400 text-base shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold text-lg">Franchisee owns outlet:</p>
                  <p className="text-base">You hold the capital asset and real estate infrastructure.</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle weight="bold" className="foco-icon text-amber-400 text-base shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold text-lg">Company manages operations:</p>
                  <p className="text-base">YORA corporate team handles daily staffing, marketing, and fitness operations.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-6 mt-auto relative z-10 w-full">
            <Button variant="amber" className="yora-model-button foco-button w-full py-3 rounded-xl text-xs" onClick={() => openLead("FOCO Franchise Model Inquiry")}>
              Explore FOCO Partnership ↗
            </Button>
          </div>
        </GlassCard>

        <GlassCard className="yora-model-card yora-fofo-card p-8 flex flex-col justify-between h-full border-cyan-500/40 relative overflow-hidden">
          <div className="yora-model-glow" />
          <div className="space-y-6 flex-grow flex flex-col">
            <div className="yora-model-badge fofo-badge inline-block self-start px-4 py-1.5 rounded-full font-extrabold text-xs tracking-wider uppercase">
              FOFO Model
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-white">Franchise-Owned, Franchise-Operated</h3>
              <p className="text-sm text-neutral-400 mt-1">Entrepreneurial model for active owner-operators seeking maximum control.</p>
            </div>
            <ul className="space-y-3 pt-4 border-t border-white/10 text-xs text-neutral-300 relative z-10 flex-grow">
              <li className="flex items-start gap-2.5">
                <CheckCircle weight="bold" className="fofo-icon text-cyan-400 text-base shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold text-lg">Franchisee owns outlet:</p>
                  <p className="text-base">You hold 100% equity in the club facility and equipment assets.</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle weight="bold" className="fofo-icon text-cyan-400 text-base shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold text-lg">Franchisee manages operations:</p>
                  <p className="text-base">You lead day-to-day club management with complete corporate SOP and marketing training.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-6 mt-auto relative z-10 w-full">
            <Button variant="cyan" className="yora-model-button fofo-button w-full py-3 rounded-xl text-xs" onClick={() => openLead("FOFO Franchise Model Inquiry")}>
              Explore FOFO Partnership ↗
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
