import TreatmentBlock from "@/components/TreatmentBlock";

/* Placeholders for:
   explainer-vacuum-breasts (video), glute-results, breast-results,
   treatment-aumentos-v2, legs-results
*/
const items = [
  { type: "video", label: "Vacuum · Senos", caption: "Explainer" },
  { type: "image", label: "Glúteos", caption: "Antes · Después" },
  { type: "image", label: "Senos", caption: "Antes · Después" },
  { type: "image", label: "Aumentos", caption: "Tratamiento" },
  { type: "image", label: "Piernas", caption: "Firmeza" },
];

export default function TreatmentAumentos() {
  return (
    <TreatmentBlock
      id="aumentos"
      testid="treatment-aumentos"
      eyebrow="Aumentos · Vacuum Therapy"
      title="Aumentos sin"
      titleItalic="Cirugía."
      italicIntro="Tecnología vacuum + láser que activa el tejido adiposo y estimula la circulación, aumentando volumen natural en glúteos y senos. Sin implantes, sin inyecciones."
      areas={["Glúteos", "Senos"]}
      items={items}
      bodyAfter="Copas de succión activan el tejido adiposo, estimulan circulación y aumentan volumen natural — potenciando forma, firmeza y luminosidad de la piel."
      bullets={[
        "Aumenta volumen natural",
        "Activa tejido adiposo",
        "Mejora circulación",
        "Reafirma y levanta",
      ]}
    />
  );
}
