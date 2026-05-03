import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "inicio" },
  { href: "#tratamientos", label: "tratamientos" },
  { href: "#resultados", label: "resultados" },
  { href: "#areas", label: "áreas" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-[rgba(241,236,225,0.75)] border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" data-testid="nav-logo" className="font-display text-xl sm:text-2xl tracking-tight">
          D'Royal<span className="opacity-70">·Spa</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label}`}
              className="link-underline text-[var(--ink)]/80 hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="tel:+17866900960"
            data-testid="nav-phone"
            className="link-underline text-[var(--ink)]/80"
          >
            +1 786 690 0960
          </a>
          <a
            href="#agendar"
            data-testid="nav-agendar-btn"
            className="btn-pill"
          >
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          data-testid="nav-mobile-toggle"
          aria-label="menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden border-t border-[var(--line)] bg-[var(--cream)]"
        >
          <div className="px-6 py-6 flex flex-col gap-5 text-base">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`mnav-${l.label}`}
                onClick={() => setOpen(false)}
                className="text-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+17866900960" className="text-[var(--ink)]/80">+1 786 690 0960</a>
            <a
              href="#agendar"
              onClick={() => setOpen(false)}
              data-testid="mnav-agendar-btn"
              className="btn-pill self-start"
            >
              Agendar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
