import TreatmentBlock from "@/components/TreatmentBlock";

/* Placeholders for:
   radio-frequency-rf-treatment-heads, face-results, chin-results,
   botox-laser-forehead-premium-treatment
*/
const items = [
  { type: "image", label: "Radiofrecuencia RF", caption: "Cabezales" },
  { type: "image", label: "Antes · Después", caption: "Cara" },
  { type: "image", label: "Papada", caption: "Resultado" },
  { type: "image", label: "Frente", caption: "Botox · Láser" },
  { type: "video", label: "Terapia 7 colores", caption: "Sesión" },
];

export default function TreatmentBotox() {
  return (
    <TreatmentBlock
      id="botox-natural"
      testid="treatment-botox"
      reversed
      eyebrow="Rejuvenecimiento · Facial"
      title="Botox Natural"
      titleItalic="con Láser."
      italicIntro="Hydromicrodermabrasion + D'Cool + Radiofrecuencia + Terapia de luz de 7 colores que regenera las células madres, eliminando líneas de expresión y pigmentación — ideal para rejuvenecer de forma natural, sin agujas, sin inyecciones, sin tiempo de recuperación."
      areas={["Ojos", "Cara", "Cuello"]}
      items={items}
      bodyAfter="Láser que actúa hasta 3 mm de profundidad, estimulando la regeneración de la piel. Se sella con frío para calmar y potenciar resultados."
      bullets={[
        "Estimula colágeno y elastina",
        "Regenera la piel en profundidad",
        "Limpieza facial profunda",
        "Reduce líneas y manchas",
        "Rejuvenece la piel",
      ]}
    />
  );
}
