export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="bg-[#0A0A0A] text-[var(--cream)] relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-2">
          <div className="font-display text-3xl mb-3">D'Royal<span className="opacity-60">·Spa</span></div>
          <p className="font-display italic text-[var(--cream)]/70 max-w-[32ch]">
            Belleza inteligente, resultados reales. Tecnología avanzada sin agujas y sin cirugía.
          </p>
          <p className="mt-6 text-xs tracking-[0.28em] uppercase text-[var(--cream)]/55">
            Brickell · Downtown · Doral · Miami Beach
          </p>
        </div>

        <Col title="Comunidad" items={["Afiliados", "Nosotros", "@d.royal.spa.miami"]} />
        <Col
          title="Soporte"
          items={[
            { label: "Cómo funciona la cita", href: "#agendar" },
            { label: "Contacto", href: "tel:+17866900960" },
            { label: "WhatsApp", href: "https://wa.me/17866900960" },
          ]}
        />
        <Col
          title="FAQs"
          items={[
            { label: "Lipo con Láser", href: "#lipo-laser" },
            { label: "Aumentos sin Cirugía", href: "#aumentos" },
            { label: "Botox Natural Láser", href: "#botox-natural" },
            { label: "CoolSculpting", href: "#coolsculpting" },
          ]}
        />
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--cream)]/60">
          <span>© {new Date().getFullYear()} D'Royal Spa Miami · All rights reserved</span>
          <div className="flex gap-5">
            <a href="https://instagram.com/d.royal.spa.miami" target="_blank" rel="noreferrer" className="link-underline">@d.royal.spa.miami</a>
            <a href="mailto:hello@droyalspa.com" className="link-underline">droyalspaemail</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, items }) {
  return (
    <div>
      <div className="text-[0.7rem] tracking-[0.28em] uppercase text-[var(--cream)]/60 mb-4">
        {title}
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((it, i) => {
          if (typeof it === "string") {
            return <li key={i} className="text-[var(--cream)]/85">{it}</li>;
          }
          return (
            <li key={i}>
              <a href={it.href} className="text-[var(--cream)]/85 link-underline">
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
