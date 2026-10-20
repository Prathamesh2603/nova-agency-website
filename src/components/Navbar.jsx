import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-[#f5f5f3]/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-50 font-heading text-2xl font-bold tracking-tight"
        >
          NOVA<span className="text-lime-500">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
          >
            Start a project
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-full border-b border-neutral-200 bg-[#f5f5f3] px-5 shadow-lg md:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-neutral-200 py-4 font-heading text-xl transition-colors hover:text-neutral-500"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-4 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
            >
              Start a project
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;