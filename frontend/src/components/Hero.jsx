import { ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Soft ambient gradient blobs (not purple) */}
      <div
        aria-hidden
        className="absolute -top-20 -left-24 w-[520px] h-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #E4EEF7, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-24 w-[560px] h-[560px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #D9E7C7, transparent 70%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Meta line */}
        <div className="reveal flex flex-wrap items-center gap-3 text-[0.72rem] tracking-[0.24em] uppercase text-[var(--ink)]/70 mb-8">
          <span>D'Royal Spa · Miami</span>
          <span className="opacity-40">/</span>
          <span>Belleza inteligente · Sin cirugía</span>
        </div>

        {/* Headline */}
        <h1
          data-testid="hero-title"
          className="reveal reveal-delay-1 font-display font-light text-[13vw] sm:text-[9vw] lg:text-[8.2rem] leading-[0.92] tracking-[-0.02em] text-[var(--ink)]"
        >
          D'Royal<br />
          <span className="italic font-normal">Spa.</span>
        </h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-6 reveal reveal-delay-2">
            <p className="font-display italic text-xl sm:text-2xl leading-snug text-[var(--ink)]/85 max-w-[42ch]">
              Tecnología avanzada para moldear y rejuvenecer tu cuerpo — sin agujas,
              sin cirugía, con resultados desde la primera sesión.
            </p>
          </div>

          <div className="lg:col-span-6 reveal reveal-delay-3 flex flex-col gap-5 items-start lg:items-end">
            <div className="flex flex-wrap gap-3">
              <a href="#agendar" data-testid="hero-agendar-btn" className="btn-pill cta-arrow">
                Agendar cita <span className="arr">→</span>
              </a>
              <a
                href="https://wa.me/17866900960"
                target="_blank"
                rel="noreferrer"
                data-testid="hero-whatsapp-btn"
                className="btn-pill ghost"
              >
                WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-[var(--ink)]/80">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--ink)] text-[var(--ink)]" />
                ))}
              </div>
              <span>Calificación 5★ · Miami</span>
              <span className="opacity-40">·</span>
              <span>$90 1ra sesión</span>
            </div>
          </div>
        </div>

        {/* Locations strip */}
        <div className="mt-16 reveal reveal-delay-4 border-t border-[var(--line)] pt-6 flex flex-wrap items-center justify-between gap-4 text-[0.7rem] sm:text-xs tracking-[0.32em] uppercase text-[var(--ink)]/70">
          <span>Brickell</span>
          <span className="opacity-30">·</span>
          <span>Downtown</span>
          <span className="opacity-30">·</span>
          <span>Doral</span>
          <span className="opacity-30">·</span>
          <span>Miami Beach</span>
          <span className="opacity-30">·</span>
          <span className="hidden sm:inline">100% In-home</span>
        </div>
      </div>
    </section>
  );
}
