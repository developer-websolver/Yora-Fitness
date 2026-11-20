import { NavLink } from "react-router-dom";
import { navLinks, programs } from "../../data/nav";
import { useUi } from "../../context/UiContext";
import { TextInput } from "../ui/Field";
import { Button } from "../ui/Button";

export function Footer() {
  const { openLead, showToast } = useUi();

  return (
    <footer className="bg-obsidian-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden footer-crimson-wave w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <img
              src="/assets/yora_fitness_clean.png"
              alt="YORA Fitness Logo"
              className="h-15 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,30,39,0.7)]"
            />
            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              YORA Fitness is redefining fitness with modern infrastructure and premium wellness spaces across India. Creating inspiring destinations for healthier lifestyles and better wellness experiences.
            </p>
          </div>

          <div>
            <h4 className="font-outfit text-md font-bold text-white uppercase tracking-[0.14em] mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm font-sans text-neutral-300">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-md font-bold text-white uppercase tracking-[0.14em] mb-4">Programs</h4>
            <ul className="space-y-2.5 text-sm font-sans text-neutral-300">
              {programs.map((program) => (
                <li key={program}>
                  <button type="button" onClick={() => openLead(program)} className="hover:text-white transition-colors cursor-pointer text-left">
                    {program}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-outfit text-md font-bold text-white uppercase tracking-[0.14em] mb-4">Newsletter</h4>
            <p className="text-sm text-neutral-300 font-sans mb-3.5 leading-relaxed">
              Subscribe for wellness insights and club opening announcements.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Thank you for subscribing to YORA Fitness updates!");
              }}
            >
              <TextInput type="email" placeholder="Your email address..." required className="text-sm" />
              <Button className="px-5 py-2.5 rounded-xl text-xs font-bold shrink-0">Join</Button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4 font-sans">
          <p>© 2026 YORA Fitness Private Limited. All rights reserved.</p>
          <p className="tracking-wide">
            Designed by{" "}
            <a
              href="https://websolver.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-crimson font-medium transition-colors underline decoration-crimson/40 hover:decoration-crimson underline-offset-4"
            >
              Websolver
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
