import TreatmentBlock from "@/components/TreatmentBlock";

/* Placeholder items — to be replaced with real assets when user uploads
   (hero-dubai, ref-frame2, legs-video, radio-frequency-rf-treatment-heads,
    lipo-treatment-bg, lipo-results, legs-results, chin-results,
    double-chin-laser-neck-tightening-treatment, arm-results)
*/
const items = [
  { type: "image", label: "Hero Dubai", caption: "Inspiración" },
  { type: "image", label: "Lipo treatment bg", caption: "Sesión" },
  { type: "video", label: "Legs video", caption: "Proceso" },
  { type: "image", label: "Radiofrecuencia RF", caption: "Tecnología" },
  { type: "image", label: "Antes · Después", caption: "Lipo results" },
  { type: "image", label: "Piernas", caption: "Legs results" },
  { type: "image", label: "Papada", caption: "Chin results" },
  { type: "image", label: "Double-chin Laser", caption: "Neck tightening" },
  { type: "image", label: "Brazos", caption: "Arm results" },
  { type: "image", label: "Ref frame", caption: "Estudio" },
];

export default function TreatmentLipo() {
  return (
    <TreatmentBlock
      id="lipo-laser"
      testid="treatment-lipo"
      eyebrow="Signature · Body Sculpting"
      title="Lipo con"
      titleItalic="Láser."
      italicIntro="Esculpe localizadamente abdomen, brazos, piernas o papada con tecnología láser + ultrasonido + radiofrecuencia + terapia de luz de 7 colores. Reduce, moldea, reafirma y rejuvenece tu piel sin cirugía, sin dolor — resultados desde la primera sesión."
      areas={["Abdomen", "Brazos", "Piernas", "Papada"]}
      items={items}
      bodyAfter="El láser rojo (650nm) penetra la piel y actúa sobre las células de grasa, que el cuerpo elimina de forma natural a través del sistema linfático. Luego, la radiofrecuencia y la luz terapéutica reafirman la piel, mejoran estrías y dejan una apariencia más luminosa y rejuvenecida."
      bullets={[
        "Reduce medidas localizadas",
        "Reafirma y tensa la piel",
        "Mejora estrías y textura",
        "Sin dolor, sin cirugía, sin downtime",
      ]}
    />
  );
}
