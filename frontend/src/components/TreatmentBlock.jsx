import Carousel from "@/components/Carousel";

/**
 * Reusable treatment block
 * props: eyebrow, title, italicIntro, areas (array), items (carousel items), bullets, bodyAfter
 */
export default function TreatmentBlock({
  id,
  eyebrow,
  title,
  titleItalic,
  italicIntro,
  areas = [],
  items = [],
  bullets = [],
  bodyAfter,
  testid = "treatment",
  reversed = false,
}) {
  return (
    <section
      id={id}
      data-testid={testid}
      className="relative py-20 sm:py-28 border-t border-[var(--line)]"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className={`${reversed ? "lg:col-start-7" : ""} lg:col-span-6`}>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--ink)]/60 mb-5">
              {eyebrow}
            </div>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.01em]">
              {title}
              {titleItalic && (
                <>
                  <br />
                  <span className="italic font-normal">{titleItalic}</span>
                </>
              )}
            </h2>
          </div>

          <div className={`${reversed ? "lg:col-start-1 lg:row-start-1" : ""} lg:col-span-6 flex flex-col justify-end gap-5`}>
            <p className="font-display italic text-lg sm:text-xl text-[var(--ink)]/80 leading-snug max-w-[52ch]">
              {italicIntro}
            </p>
            {areas.length > 0 && (
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm tracking-[0.28em] uppercase text-[var(--ink)]/75">
                {areas.map((a, i) => (
                  <span key={a} className="flex items-center gap-5">
                    {a}
                    {i < areas.length - 1 && <span className="opacity-40">·</span>}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Carousel */}
        <Carousel items={items} testid={`${testid}-carousel`} />

        {/* Body after + bullets */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {bodyAfter && (
            <p className="lg:col-span-7 text-base sm:text-lg leading-relaxed text-[var(--ink)]/85 max-w-[68ch]">
              {bodyAfter}
            </p>
          )}
          {bullets.length > 0 && (
            <ul className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--ink)]/80">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2 items-start">
                  <span className="mt-[0.55rem] w-1 h-1 rounded-full bg-[var(--ink)] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#agendar" data-testid={`${testid}-reservar`} className="btn-pill cta-arrow">
            Reservar <span className="arr">→</span>
          </a>
          <a
            href="https://wa.me/17866900960"
            target="_blank"
            rel="noreferrer"
            data-testid={`${testid}-consultar`}
            className="btn-pill ghost cta-arrow"
          >
            Consultar <span className="arr">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
