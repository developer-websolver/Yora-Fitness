import { ChartBar, ChartLineUp, Check, DeviceMobileCamera, GraduationCap, MegaphoneSimple, SealCheck, ShieldCheckered, Truck, UsersThree, Buildings } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { FeatureCard } from "../components/ui/FeatureCard";
import { FranchiseModels } from "../components/franchise/FranchiseModels";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { FieldLabel, SelectInput, TextArea, TextInput } from "../components/ui/Field";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { brandList } from "../data/brands";
import { useUi } from "../context/UiContext";

const whyPoints = [
  { icon: ChartLineUp, title: "Business Growth & Investment Potential", body: "Build your fitness business with structured franchise models, strategic planning and growth-focused business opportunities." },
  { icon: UsersThree, title: "Member Retention & Customer Experience", body: "Create stronger customer relationships through engaging fitness experiences, personalized services and community-focused initiatives." },
  { icon: Buildings, title: "Complete Franchise Setup & Infrastructure", body: "Get support from location planning and interior design to equipment selection and infrastructure development." },
  { icon: GraduationCap, title: "Professional Training & Development", body: "Develop skilled fitness teams through structured training, professional learning and operational guidance." },
  { icon: MegaphoneSimple, title: "Centralized Marketing & Brand Promotion", body: "Strengthen visibility through digital marketing, social campaigns, local promotions and brand communication." },
  { icon: SealCheck, title: "Dedicated Franchise & Business Support", body: "Access collaborative business guidance, brand development resources and operational support through the YORA ecosystem." },
];

const support = [
  { icon: ShieldCheckered, title: "Territory Protection & Market Planning", body: "Strategic territory planning and market development to support brand presence across different markets." },
  { icon: DeviceMobileCamera, title: "Digital Technology & Business Management", body: "Digital solutions for customer management, lead tracking, billing and performance monitoring." },
  { icon: Truck, title: "Equipment Procurement & Infrastructure", body: "Coordinated equipment sourcing, facility planning and streamlined procurement processes." },
  { icon: ChartBar, title: "Performance Monitoring & Business Growth", body: "Structured reviews, operational assessments and growth-focused strategies." },
];

const phases = [
  { n: "01", weeks: "Weeks 1 – 2", title: "Site Selection & Feasibility", items: ["Demographic catchment analysis", "Real estate lease negotiation", "Legal & HOA clearance checks"] },
  { n: "02", weeks: "Weeks 3 – 6", title: "Interior Fit-Out & Equipment", items: ["3D CAD layout & acoustic design", "Imported biomechanical gear dispatch", "Luxury locker & HVAC installation"] },
  { n: "03", weeks: "Weeks 7 – 8", title: "Recruitment & Academy SOPs", items: ["Staff hiring & background checks", "YORA Academy certification modules", "POS & CRM biometric software setup"] },
  { n: "04", weeks: "Weeks 9 – 10", title: "Pre-Launch & Grand Opening", items: ["Geotargeted digital presale blitz", "VIP launch event & press coverage", "Achieving Day-1 cashflow positivity"] },
];

const faqs = [
  { question: "What is the corporate royalty fee structure under FOCO vs FOFO models?", answer: "Under FOFO, YORA charges a flat 7% monthly royalty + 2% marketing fund. Under FOCO, profit-sharing or guaranteed yield payouts are customized by capex and location tier." },
  { question: "What is the typical timeframe to achieve operational break-even?", answer: "Most YORA locations achieve monthly operational break-even within Month 2 to Month 4 post-launch, with full capital payback within 14 to 18 months." },
  { question: "Does YORA corporate team assist with recruiting and certifying staff?", answer: "Yes. HR and YORA Training Academy handle recruitment, screening, and certification for managers, trainers, physiotherapists, and front desk personnel." },
  { question: "Can a franchise partner convert from FOCO to FOFO at a later stage?", answer: "Yes, after completing mandatory corporate operations training and obtaining audit clearance." },
  { question: "What warranties and maintenance plans cover the imported gym machinery?", answer: "Structural steel frames carry a 10-year manufacturer warranty, with 3 years on pulleys/cables and 2 years on electronics, plus SLA-backed maintenance." },
];

export function FranchisePage() {
  const { openBrand, showToast } = useUi();
  const [sqft, setSqft] = useState(3500);
  const [members, setMembers] = useState(450);
  const [fee, setFee] = useState(65);

  const projection = useMemo(() => {
    const capex = Math.round(sqft * 50);
    const rev = members * fee * 12;
    const payback = Math.max(8, Math.round((capex / (rev * 0.38)) * 12));
    return { capex, rev, payback };
  }, [sqft, members, fee]);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-extrabold text-crimson uppercase tracking-widest">Franchise & Partnership Opportunities</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">Build Your Future With YORA</h1>
        <p className="text-neutral-300 mt-4 text-sm sm:text-base leading-relaxed">
          Explore fitness franchise and partnership opportunities across YORA’s multi-brand ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyPoints.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>

      <div className="pt-8 border-t border-white/10 space-y-10">
        <h2 className="text-3xl font-extrabold text-white text-center">The Support System Behind Every Successful Fitness Brand</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {support.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      <FranchiseModels variant="detailed" />

      <div className="pt-8 border-t border-white/10 space-y-10">
        <h2 className="text-3xl font-extrabold text-white text-center">6 Franchise Brand Formats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandList.map((brand) => (
            <GlassCard key={brand.key} className={`p-6 space-y-4 ${brand.hoverBorder}`}>
              <div className="flex justify-between items-center">
                <span className="w-10 h-10 rounded-xl bg-crimson/20 border border-crimson/50 text-crimson font-black text-sm flex items-center justify-center">{brand.code}</span>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{brand.badge}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{brand.shortName}</h3>
              <div className="space-y-2 text-xs text-neutral-300">
                <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-neutral-400">Required Space:</span><span className="font-bold text-white">{brand.space}</span></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span className="text-neutral-400">Est. Investment:</span><span className="font-bold text-emerald-400">{brand.capex}</span></div>
                <div className="flex justify-between"><span className="text-neutral-400">Setup Timeline:</span><span className="font-bold text-white">{brand.timeline}</span></div>
              </div>
              <button type="button" onClick={() => openBrand(brand.key)} className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-crimson text-white text-xs font-bold">
                View Format Specs ↗
              </button>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 space-y-10">
        <h2 className="text-3xl font-extrabold text-white text-center">4-Phase Turnkey Execution Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <GlassCard key={phase.n} className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-2xl font-black text-crimson">{phase.n}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-crimson/10 border border-crimson/30 text-[10px] font-bold text-crimson">{phase.weeks}</span>
              </div>
              <h3 className="text-base font-bold text-white">{phase.title}</h3>
              <ul className="space-y-2 text-xs text-neutral-300">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check weight="bold" className="text-crimson mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 space-y-8">
        <h2 className="text-3xl font-extrabold text-white text-center">Interactive ROI Calculator</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          <GlassCard className="lg:col-span-7 p-8 space-y-6">
            <label className="block">
              <div className="flex justify-between text-xs font-bold mb-2"><span className="text-neutral-300">Target Area (Sq. Ft.)</span><span className="text-crimson">{sqft.toLocaleString()} Sq.Ft.</span></div>
              <input type="range" min={1500} max={10000} step={500} value={sqft} onChange={(e) => setSqft(Number(e.target.value))} className="w-full accent-crimson" />
            </label>
            <label className="block">
              <div className="flex justify-between text-xs font-bold mb-2"><span className="text-neutral-300">Estimated Monthly Members</span><span className="text-crimson">{members} Members</span></div>
              <input type="range" min={100} max={1500} step={50} value={members} onChange={(e) => setMembers(Number(e.target.value))} className="w-full accent-crimson" />
            </label>
            <label className="block">
              <div className="flex justify-between text-xs font-bold mb-2"><span className="text-neutral-300">Avg. Monthly Membership Fee ($)</span><span className="text-crimson">${fee} / Month</span></div>
              <input type="range" min={30} max={200} step={5} value={fee} onChange={(e) => setFee(Number(e.target.value))} className="w-full accent-crimson" />
            </label>
          </GlassCard>
          <GlassCard className="lg:col-span-5 p-8 border-crimson/30 space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">Financial Projection</h3>
            <div className="flex justify-between"><span className="text-xs text-neutral-400">Est. Setup Investment:</span><span className="text-lg font-bold text-white">${projection.capex.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-xs text-neutral-400">Projected Annual Revenue:</span><span className="text-lg font-bold text-emerald-400">${projection.rev.toLocaleString()}</span></div>
            <div className="flex justify-between border-t border-white/10 pt-3"><span className="text-xs text-neutral-300 font-bold">Estimated Payback Period:</span><span className="text-2xl font-extrabold text-crimson">{projection.payback} Months</span></div>
          </GlassCard>
        </div>
      </div>

      <FaqAccordion items={faqs} />

      <GlassCard className="p-8 sm:p-12 border-crimson/40 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Franchise Inquiry Form</h2>
        </div>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            showToast("Franchise application submitted. Our director will contact you shortly.");
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div><FieldLabel>Full Name *</FieldLabel><TextInput required placeholder="e.g. Rahul Sharma" /></div>
            <div><FieldLabel>Phone Number *</FieldLabel><TextInput required type="tel" placeholder="e.g. +91 98765 43210" /></div>
            <div><FieldLabel>Email Address *</FieldLabel><TextInput required type="email" /></div>
            <div><FieldLabel>Target City & State *</FieldLabel><TextInput required placeholder="e.g. Bengaluru, Karnataka" /></div>
            <div>
              <FieldLabel>Preferred Division *</FieldLabel>
              <SelectInput required defaultValue="">
                <option value="" disabled>Select YORA Division...</option>
                {brandList.map((b) => <option key={b.key} value={b.key}>{b.shortName}</option>)}
              </SelectInput>
            </div>
            <div>
              <FieldLabel>Preferred Partnership Model *</FieldLabel>
              <SelectInput required defaultValue="">
                <option value="" disabled>Select Model Structure...</option>
                <option value="foco">FOCO</option>
                <option value="fofo">FOFO</option>
                <option value="flexible">Open to Corporate Recommendation</option>
              </SelectInput>
            </div>
          </div>
          <div><FieldLabel>Additional Notes</FieldLabel><TextArea rows={4} /></div>
          <Button type="submit" className="w-full py-4 rounded-xl text-sm">Submit Franchise Application ↗</Button>
        </form>
      </GlassCard>
    </section>
  );
}
