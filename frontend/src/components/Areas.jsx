const areas = [
  { name: "Brickell", note: "Cita 24/7" },
  { name: "Downtown", note: "Cita 24/7" },
  { name: "Doral", note: "Cita 24/7" },
  { name: "Miami Beach", note: "Cita 24/7" },
];

export default function Areas() {
  return (
    <section
      id="areas"
      data-testid="areas-section"
      className="py-24 sm:py-32 border-t border-[var(--line)]"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--ink)]/60 mb-5">
              Áreas de Servicio
            </div>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.01em]">
              Llegamos a tu
              <br />
              <span className="italic font-normal">puerta.</span>
            </h2>
          </div>
          <p className="font-display italic text-lg sm:text-xl text-[var(--ink)]/80 max-w-[42ch]">
            Servicio 100% in-home en las zonas premium de Miami.
            Tú relajas, nosotros llevamos todo el equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map((a, i) => (
            <div
              key={a.name}
              data-testid={`area-${a.name.toLowerCase().replace(/\s/g, "-")}`}
              className="hover-lift group relative rounded-[28px] border border-[var(--line)] bg-[var(--cream-2)] p-6 overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[var(--sky-b)] opacity-60 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative">
                <div className="text-5xl font-display font-light mb-16">
                  0{i + 1}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-display text-2xl">{a.name}</div>
                    <div className="text-xs tracking-[0.22em] uppercase text-[var(--ink)]/55 mt-1">
                      {a.note}
                    </div>
                  </div>
                  <span className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
