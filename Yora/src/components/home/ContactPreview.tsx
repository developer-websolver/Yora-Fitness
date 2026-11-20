import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import { useUi } from "../../context/UiContext";
import { Button } from "../ui/Button";
import { TextArea, TextInput } from "../ui/Field";
import { SectionHeader } from "../ui/SectionHeader";

export function ContactPreview() {
  const { showToast } = useUi();
  return (
    <section className="yora-pattern-orbit w-full px-4 sm:px-8 lg:px-12 py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <SectionHeader
          eyebrow="REACH OUT TO US"
          title="Connect With YORA"
          subtitle="Have questions about memberships, franchise opportunities, or studio locations? Send us a direct inquiry."
        />
      </div>
      <div className="yora-contact-grid max-w-6xl mx-auto">
        <div className="glass-card yora-contact-card relative p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between h-full">
          <div className="yora-contact-glow" />
          <div className="relative z-10 mb-6 text-left">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">Corporate Headquarters</h3>
            <p className="text-xs text-neutral-400 mt-1">Get in touch directly with our leadership, franchise division and executive offices.</p>
          </div>

          <div className="relative z-10 flex flex-col justify-between flex-grow space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-crimson/40 transition-all flex items-start gap-4 text-left group">
              <div className="w-12 h-12 rounded-xl bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,30,39,0.2)]">
                <MapPin weight="bold" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-crimson">Registered Office</span>
                <p className="text-sm font-bold text-white leading-snug">Viva Fit</p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  1st floor, Landmark : Above Inchins Hotel, 42/5, Anna Nagar W Ext Rd, Shantiniketan Colony, Chennai, Tamil Nadu 600101                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-crimson/40 transition-all flex items-center gap-4 text-left group">
              <div className="w-12 h-12 rounded-xl bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,30,39,0.2)]">
                <EnvelopeSimple weight="bold" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-crimson">Email Inquiries</span>
                <p className="text-sm font-bold text-white">
                  hello.vivafit@gmail.com</p>
                <p className="text-xs text-neutral-400">Response within 24 business hours</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-crimson/40 transition-all flex items-center gap-4 text-left group">
              <div className="w-12 h-12 rounded-xl bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson text-2xl shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,30,39,0.2)]">
                <Phone weight="bold" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-crimson">Helpline & Corporate Desk</span>
                <p className="text-sm font-bold text-white">+91 89398 60003</p>
              
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card yora-contact-card relative p-8 rounded-3xl space-y-4 border border-white/10 shadow-2xl">
          <div className="yora-contact-glow" />
          <h3 className="text-xl font-bold text-white mb-2 relative z-10">Send Us A Message</h3>
          <form
            className="space-y-4 relative z-10"
            onSubmit={(e) => {
              e.preventDefault();
              showToast("Message received. Our team will reply within 24 hours.");
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput placeholder="Your Full Name" required />
              <TextInput type="email" placeholder="Your Email Address" required />
            </div>
            <TextInput placeholder="Subject / Inquiry Reason" />
            <TextArea rows={4} placeholder="Your message here..." required />
            <Button type="submit" className="yora-contact-button w-full py-3.5 rounded-xl text-xs">
              Send Message ↗
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
