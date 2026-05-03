const words = [
  "Lipo con Láser",
  "Botox Natural",
  "Aumentos sin Cirugía",
  "CoolSculpting",
  "Radiofrecuencia",
  "Ultrasonido",
  "Hydromicrodermabrasion",
  "Luz de 7 colores",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <section
      id="tratamientos"
      data-testid="marquee-section"
      className="py-6 border-y border-[var(--line)] overflow-hidden bg-[var(--cream-2)]"
    >
      <div className="marquee-track flex gap-10 whitespace-nowrap text-[var(--ink)]/80">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 text-lg sm:text-xl font-display italic">
            {w}
            <span aria-hidden className="opacity-40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
