import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import { FaqAccordion } from "../components/ui/FaqAccordion";
import { FieldLabel, SelectInput, TextArea, TextInput } from "../components/ui/Field";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { useUi } from "../context/UiContext";

const faqs = [
  {
    question: "What are your standard studio operating hours?",
    answer: "Our facilities are open Monday through Saturday from 5:30 AM to 10:30 PM, and Sundays from 7:00 AM to 8:00 PM.",
  },
  {
    question: "Can I schedule a guided facility tour before joining?",
    answer: "Yes. Use the contact form or Join Now button to select a club location and date for a complimentary trial pass and tour.",
  },
  {
    question: "How do I update or freeze my membership plan?",
    answer: "Membership freezes and plan adjustments can be managed at front desk or by emailing support@yorafitness.com with your member ID.",
  },
];

export function ContactPage() {
  const { showToast } = useUi();
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-extrabold text-crimson uppercase tracking-widest">Get In Touch</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">Connect With YORA</h1>
        <p className="text-neutral-300 mt-4 text-sm sm:text-base leading-relaxed">
          Have questions regarding memberships, studio operating hours, trial passes, or franchise partnership opportunities? Our corporate team is here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        <GlassCard className="lg:col-span-5 p-8 space-y-6">
          <h3 className="text-xl font-bold text-white">Corporate Headquarters</h3>
          <div className="space-y-5 text-xs text-neutral-300">
            <div className="flex items-start gap-3">
              <MapPin weight="bold" className="text-crimson text-xl shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white">Registered Office:</strong>
                <p className="text-neutral-400 mt-0.5">Yora Fitness Private Limited<br />Executive Towers, Waterfield Rd, Bandra West,<br />Mumbai, Maharashtra 400050, India</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeSimple weight="bold" className="text-crimson text-xl shrink-0" />
              <div>
                <strong className="block text-white">Email Inquiries:</strong>
                <p className="text-neutral-400">info@yorafitness.com | franchise@yorafitness.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone weight="bold" className="text-crimson text-xl shrink-0" />
              <div>
                <strong className="block text-white">Phone & Toll Free:</strong>
                <p className="text-neutral-400">+91 (022) 8800-YORA (9672)</p>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Facility Operating Hours</h4>
            <p className="text-xs text-neutral-400">Monday – Saturday: 5:30 AM – 10:30 PM<br />Sunday & Holidays: 7:00 AM – 8:00 PM</p>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-7 p-8 sm:p-10 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Send Us A Direct Message</h3>
            <p className="text-xs text-neutral-400 mt-1">Our customer experience representative will respond within 24 business hours.</p>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              showToast("Message received. Our team will reply within 24 hours.");
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel>Full Name *</FieldLabel>
                <TextInput required placeholder="Your Name" />
              </div>
              <div>
                <FieldLabel>Email Address *</FieldLabel>
                <TextInput type="email" required placeholder="Your Email" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel>Phone Number</FieldLabel>
                <TextInput type="tel" placeholder="+91..." />
              </div>
              <div>
                <FieldLabel>Inquiry Type</FieldLabel>
                <SelectInput
                  defaultValue="membership"
                  className="bg-black text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="membership" className="bg-black text-white">
                    General Membership / Trial Pass
                  </option>
                  <option value="franchise" className="bg-black text-white">
                    Franchise Partnership
                  </option>
                  <option value="corporate" className="bg-black text-white">
                    Corporate Wellness Program
                  </option>
                  <option value="careers" className="bg-black text-white">
                    Careers & Trainer Recruitment
                  </option>
                </SelectInput>
              </div>
            </div>
            <div>
              <FieldLabel>Subject / Topic</FieldLabel>
              <TextInput placeholder="Brief subject description..." />
            </div>
            <div>
              <FieldLabel>Message *</FieldLabel>
              <TextArea rows={4} required placeholder="How can we help you achieve your goals?" />
            </div>
            <Button type="submit" className="w-full py-3.5 rounded-xl text-xs">
              Send Message ↗
            </Button>
          </form>
        </GlassCard>
      </div>

      <div className="pt-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h3>
        </div>
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
