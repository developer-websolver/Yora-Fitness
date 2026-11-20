
import { List, X, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/nav";
import { useUi } from "../../context/UiContext";
import { Button } from "../ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [desktopBrandsOpen, setDesktopBrandsOpen] = useState(false);

  const { openLead } = useUi();

  const closeMobileMenu = () => {
    setOpen(false);
    setBrandsOpen(false);
  };

  const closeDesktopDropdown = () => {
    setDesktopBrandsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-obsidian-950/90 backdrop-blur-xl border-b border-white/[0.07]">

      <div className="w-full px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => {
            closeMobileMenu();
            closeDesktopDropdown();
          }}
          className="flex items-center group"
        >
          <img
            src="/assets/yora_fitness_clean.png"
            alt="YORA Fitness Logo"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,30,39,0.7)] group-hover:scale-105 transition-transform"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">

          {navLinks.map((link) => (
            <div key={link.to} className="relative">

              {"children" in link && link.children ? (
                <>
                  {/* Brands Toggle */}
                  <button
                    type="button"
                    onClick={() =>
                      setDesktopBrandsOpen((v) => !v)
                    }
                    className={`nav-item pb-1 flex items-center gap-1.5 transition-all ${
                      desktopBrandsOpen
                        ? "text-white border-b-2 border-crimson font-semibold"
                        : "hover:text-white text-neutral-300"
                    }`}
                    aria-expanded={desktopBrandsOpen}
                  >
                    {link.label}

                    {"pulse" in link && link.pulse && (
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-ping" />
                    )}

                    <CaretDown
                      size={13}
                      weight="bold"
                      className={`transition-transform duration-300 ${
                        desktopBrandsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Brands Dropdown */}
                  {desktopBrandsOpen && (
                    <div className="absolute left-0 top-full pt-4 min-w-56 z-50">
                      <div className="bg-obsidian-950 border border-white/10 rounded-xl p-2 shadow-2xl">

                        {link.children.map((child) =>
                          "target" in child &&
                          child.target === "_blank" ? (

                            /* External Brand Links */
                            <a
                              key={child.to}
                              href={child.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeDesktopDropdown}
                              className="block px-4 py-3 rounded-lg text-sm text-neutral-400 transition-colors duration-300 hover:text-white hover:bg-white/5"
                            >
                              {child.label}
                            </a>

                          ) : (

                            /* Internal Brand Links */
                            <NavLink
                              key={child.to}
                              to={child.to}
                              onClick={closeDesktopDropdown}
                              className={({ isActive }) =>
                                `block px-4 py-3 rounded-lg text-sm transition-colors ${
                                  isActive
                                    ? "text-crimson bg-white/5"
                                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>

                          )
                        )}

                      </div>
                    </div>
                  )}
                </>
              ) : (

                /* Normal Desktop Navigation */
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={closeDesktopDropdown}
                  className={({ isActive }) =>
                    `nav-item pb-1 flex items-center gap-1.5 transition-all ${
                      isActive
                        ? "text-white border-b-2 border-crimson font-semibold"
                        : "hover:text-white text-neutral-300"
                    }`
                  }
                >
                  {link.label}
                </NavLink>

              )}

            </div>
          ))}

        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Outlet Status */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-900 border border-white/10 text-[11px] text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#FF1E27]" />

            <span className="font-semibold text-neutral-300">
              6 Outlets Active
            </span>
          </div>

          {/* Join Now Button */}
          <Button
            onClick={() => openLead("Membership / Trial Pass")}
            className="px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-wide"
          >
            <span>Join Now</span>
            <span className="text-sm font-bold">↗</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setBrandsOpen(false);
            }}
            className="lg:hidden text-white text-2xl p-1.5"
            aria-label="Toggle Navigation"
            aria-expanded={open}
          >
            {open ? (
              <X weight="bold" />
            ) : (
              <List weight="bold" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-obsidian-950/95 border-b border-white/10 px-6 py-6 space-y-4">

          {navLinks.map((link) => (
            <div key={link.to}>

              {"children" in link && link.children ? (
                <>
                  {/* Mobile Brands Toggle */}
                  <button
                    type="button"
                    onClick={() => setBrandsOpen((v) => !v)}
                    className="flex items-center justify-between w-full py-2 font-medium text-neutral-300 border-b border-white/5"
                    aria-expanded={brandsOpen}
                  >
                    {link.label}

                    <CaretDown
                      className={`transition-transform duration-300 ${
                        brandsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Brands Submenu */}
                  {brandsOpen && (
                    <div className="pl-4 pt-2 space-y-1">

                      {link.children.map((child) =>
                        "target" in child &&
                        child.target === "_blank" ? (

                          /* External Brand Links */
                          <a
                            key={child.to}
                            href={child.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobileMenu}
                            className="block py-2 text-sm text-neutral-400 hover:text-crimson transition-colors"
                          >
                            {child.label}
                          </a>

                        ) : (

                          /* Internal Brand Links */
                          <NavLink
                            key={child.to}
                            to={child.to}
                            onClick={closeMobileMenu}
                            className="block py-2 text-sm text-neutral-400 hover:text-crimson transition-colors"
                          >
                            {child.label}
                          </NavLink>

                        )
                      )}

                    </div>
                  )}
                </>
              ) : (

                /* Normal Mobile Navigation */
                <NavLink
                  to={link.to}
                  onClick={closeMobileMenu}
                  className="block w-full text-left py-2 font-medium text-neutral-300 border-b border-white/5"
                >
                  {link.label}
                </NavLink>

              )}

            </div>
          ))}

        </div>
      )}

    </header>
  );
}