import { useState } from "react";
import { ArrowRight, Command, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu after clicking a link.
  const closeMenu = () => setMenuOpen(false);

  const links = [
    ["Features", "#features"],
    ["How it works", "#how-it-works"],
    ["Pricing", "#pricing"],
    ["Contact", "#contact"]
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <Command size={19} />
          </span>
          <span className="text-xl font-bold tracking-tight">flowdesk<span className="text-emerald-600">.</span></span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map(([label, href]) => (
            <a key={label} className="transition hover:text-emerald-700" href={href}>{label}</a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 md:block">
          Get a demo <ArrowRight className="ml-1 inline" size={16} />
        </a>

        <button className="rounded-lg p-2 text-slate-700 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-700">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a href="#contact" onClick={closeMenu} className="rounded-full bg-emerald-600 px-5 py-3 text-center text-white">Get a demo</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
