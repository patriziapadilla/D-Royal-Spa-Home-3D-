const results = [
  { label: "Lipo Láser · Abdomen", tag: "Antes · Después" },
  { label: "Botox Natural · Cara", tag: "Antes · Después" },
  { label: "Aumentos · Glúteos", tag: "Antes · Después" },
  { label: "Papada · Neck", tag: "Antes · Después" },
  { label: "Piernas · Firmeza", tag: "Antes · Después" },
  { label: "Brazos · Definición", tag: "Antes · Después" },
];

export default function Resultados() {
  return (
    <section
      id="resultados"
      data-testid="resultados-section"
      className="relative py-24 sm:py-32 border-t border-[var(--line)] overflow-hidden"
    >
      {/* transition-1-balcony bg placeholder */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          background:
            "linear-gradient(180deg, rgba(241,236,225,1) 0%, rgba(241,236,225,0.2) 40%, rgba(241,236,225,1) 100%), url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23BFD9EE%22/><rect y=%22520%22 width=%22100%25%22 height=%22280%22 fill=%22%236FA84A%22/></svg>')",
          backgroundSize: "cover",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--ink)]/60 mb-5">
              Resultados
            </div>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.01em]">
              La Diferencia
              <br />
              <span className="italic font-normal">se Ve.</span>
            </h2>
          </div>
          <p className="font-display italic text-lg sm:text-xl text-[var(--ink)]/80 max-w-[42ch]">
            Antes y después reales de clientas D'Royal Spa en Miami — fotos sin
            retoques, tomadas en sesión.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((r, i) => (
            <article
              key={i}
              data-testid={`resultado-card-${i}`}
              className="hover-lift rounded-[28px] overflow-hidden border border-[var(--line)] bg-[var(--cream-2)]"
            >
              <div className="grid grid-cols-2 aspect-[8/5]">
                <div className="sky-card relative flex items-end p-4">
                  <span className="text-[0.65rem] tracking-[0.22em] uppercase bg-[var(--cream)]/90 px-2 py-1 rounded-full">
                    Antes
                  </span>
                </div>
                <div className="sky-card relative flex items-end justify-end p-4">
                  <span className="text-[0.65rem] tracking-[0.22em] uppercase bg-[var(--ink)] text-[var(--cream)] px-2 py-1 rounded-full">
                    Después
                  </span>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="text-[0.7rem] tracking-[0.24em] uppercase text-[var(--ink)]/55">
                    {r.tag}
                  </div>
                  <div className="font-display text-lg">{r.label}</div>
                </div>
                <span className="text-xs text-[var(--ink)]/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
