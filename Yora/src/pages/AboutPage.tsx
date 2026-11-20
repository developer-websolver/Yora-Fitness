import { Buildings, Check, Eye, Handshake, Lightbulb, Network, Quotes, SealCheck, Target, TrendUp, UsersThree } from "@phosphor-icons/react";
import { FeatureCard } from "../components/ui/FeatureCard";
import { FranchiseModels } from "../components/franchise/FranchiseModels";
import { GlassCard } from "../components/ui/GlassCard";
import { Button } from "../components/ui/Button";
import { useUi } from "../context/UiContext";

const advantages = [
  { icon: Network, title: "Multi-Brand Fitness Ecosystem", body: "Discover a connected network of diverse fitness brands, each bringing unique concepts, specialized services and distinctive experiences under the YORA umbrella." },
  { icon: Handshake, title: "Strategic Brand Partnerships", body: "We believe in growing together. YORA creates collaboration opportunities for fitness entrepreneurs, emerging businesses and established brands to build stronger industry connections." },
  { icon: TrendUp, title: "Business Growth & Expansion", body: "Unlock new possibilities through a growing fitness network. Explore opportunities to expand your brand presence, reach new audiences and build long-term business value." },
  { icon: Buildings, title: "Diverse Fitness Concepts", body: "From strength training and functional fitness to specialized wellness experiences, YORA brings different fitness concepts together to serve evolving market demands." },
  { icon: Lightbulb, title: "Innovation & Industry Development", body: "We embrace evolving fitness trends, modern business strategies and innovative approaches to create competitive and future-ready fitness experiences." },
  { icon: UsersThree, title: "Collaborative Business Community", body: "Be part of a network that values shared knowledge, meaningful partnerships and collective progress. Together, we create opportunities for sustainable growth across the fitness industry." },
];

export function AboutPage() {
  const { openLead } = useUi();
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-extrabold text-crimson uppercase tracking-widest">OUR PURPOSE & DIRECTION</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">Building the Future of Fitness & Wellness</h1>
        <p className="text-neutral-300 mt-4 text-sm sm:text-base leading-relaxed">
          YORA is creating a connected multi-brand fitness ecosystem that brings diverse fitness concepts, innovative business models and wellness experiences together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="p-8 sm:p-10 relative overflow-hidden group hover:border-crimson/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-crimson/20 border border-crimson/50 text-crimson flex items-center justify-center shrink-0">
              <Eye weight="bold" size={28} />
            </div>
            <div>
              <span className="text-[10px] font-extrabold text-crimson uppercase tracking-widest">WHERE WE ASPIRE TO BE</span>
              <h2 className="text-2xl font-extrabold text-white">Our Vision</h2>
            </div>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            To become a leading multi-brand fitness ecosystem that connects ambitious fitness brands, entrepreneurs and industry innovators.
          </p>
          <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-xs text-neutral-400">
            {["Build a strong network of diverse fitness brands.", "Create opportunities for strategic brand partnerships.", "Expand innovative fitness concepts into new markets."].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Check weight="bold" className="text-crimson" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard className="p-8 sm:p-10 relative overflow-hidden group hover:border-crimson/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-crimson/20 border border-crimson/50 text-crimson flex items-center justify-center shrink-0">
              <Target weight="bold" size={28} />
            </div>
            <div>
              <span className="text-[10px] font-extrabold text-crimson uppercase tracking-widest">WHAT DRIVES US FORWARD</span>
              <h2 className="text-2xl font-extrabold text-white">Our Mission</h2>
            </div>
          </div>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Our mission is to bring fitness brands together under one unified ecosystem, providing a collaborative platform for business development, brand growth and sustainable expansion.
          </p>
          <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-xs text-neutral-400">
            {["Connect emerging and established fitness businesses.", "Support brand collaboration and business development.", "Drive sustainable growth across the fitness industry."].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Check weight="bold" className="text-crimson" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <div className="pt-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-extrabold text-white">Why Fitness Brands Choose YORA</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className="pt-12 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-crimson uppercase tracking-widest">Leadership & Vision</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Meet Our Founder</h2>
        </div>
        <GlassCard className="p-8 sm:p-12 relative overflow-hidden w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-obsidian-900 border border-white/20">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" alt="Mohammed Shahul Hameed" className="w-full h-full object-cover object-top" />
              </div>
              <div className="text-center mt-6 space-y-1">
                <h3 className="text-2xl font-extrabold text-white">Mohammed Shahul Hameed</h3>
                <p className="text-xs font-bold text-crimson uppercase tracking-widest">Founder & CEO</p>
                <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-crimson/10 border border-crimson/30 text-[11px] text-rose-300">
                  <SealCheck weight="bold" className="text-crimson" />
                  Master Franchisee – VIVAFIT India
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-neutral-300 leading-relaxed">
                With a postgraduate qualification in Retail Management and a professional background in hospitality, I bring over 13 years of hands-on experience in franchise sales, business development, operations, and strategic growth.
              </p>
              <div className="p-6 rounded-2xl bg-obsidian-900/80 border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-crimson/20 border border-crimson/50 text-crimson flex items-center justify-center shrink-0">
                    <Quotes weight="bold" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Building More Than Gyms. Creating a Movement.</h4>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  "At VIVAFIT, our vision goes beyond building gyms. We are passionate about transforming the women's fitness landscape in India."
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-4">
                  <p className="text-[11px] font-semibold text-rose-400">"Building stronger women, healthier communities, and an empowered future."</p>
                  <Button className="px-4 py-2 rounded-xl text-xs shrink-0" onClick={() => openLead("Founder Direct Inquiry")}>
                    Connect with Founder ↗
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      <FranchiseModels variant="compact" />
    </section>
  );
}
