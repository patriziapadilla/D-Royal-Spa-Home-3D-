import { useRef } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

/**
 * Carousel
 * items: [{ type: 'image' | 'video' | 'placeholder', src?, label?, caption? }]
 */
export default function Carousel({ items = [], testid = "carousel" }) {
  const ref = useRef(null);

  const scrollBy = (dir) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.clientWidth + 24 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div data-testid={testid} className="relative">
      <div
        ref={ref}
        className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 sm:-mx-8 px-5 sm:px-8"
      >
        {items.map((it, i) => (
          <article
            key={i}
            data-card
            data-testid={`${testid}-card-${i}`}
            className="hover-lift snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] rounded-[28px] overflow-hidden relative bg-[var(--cream-2)] border border-[var(--line)]"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              {it.type === "image" && it.src ? (
                <img
                  src={it.src}
                  alt={it.label || "result"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : it.type === "video" && it.src ? (
                <video
                  src={it.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <div className="sky-card w-full h-full flex items-center justify-center">
                  <div className="text-center px-6">
                    {it.type === "video" ? (
                      <div className="w-14 h-14 rounded-full bg-[var(--ink)]/85 text-[var(--cream)] flex items-center justify-center mx-auto mb-4">
                        <Play size={22} />
                      </div>
                    ) : null}
                    <div className="font-display italic text-[var(--ink)]/85 text-lg">
                      {it.label || "Próximamente"}
                    </div>
                    {it.caption && (
                      <div className="mt-1 text-xs tracking-[0.22em] uppercase text-[var(--ink)]/55">
                        {it.caption}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 flex items-center justify-between">
              <div>
                <div className="text-[0.7rem] tracking-[0.24em] uppercase text-[var(--ink)]/55">
                  {it.caption || "Resultado"}
                </div>
                <div className="font-display text-lg">{it.label || "—"}</div>
              </div>
              <span className="text-xs text-[var(--ink)]/60">{String(i + 1).padStart(2, "0")}</span>
            </div>
          </article>
        ))}
      </div>

      {items.length > 1 && (
        <div className="flex items-center justify-end gap-2 mt-2">
          <button
            data-testid={`${testid}-prev`}
            aria-label="anterior"
            onClick={() => scrollBy(-1)}
            className="w-11 h-11 rounded-full border border-[var(--ink)]/30 hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-all flex items-center justify-center"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            data-testid={`${testid}-next`}
            aria-label="siguiente"
            onClick={() => scrollBy(1)}
            className="w-11 h-11 rounded-full border border-[var(--ink)]/30 hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-all flex items-center justify-center"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
