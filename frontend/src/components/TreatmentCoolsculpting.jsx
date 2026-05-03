import TreatmentBlock from "@/components/TreatmentBlock";

/* Placeholders for:
   COOLSCULPINGCARRUCEL, radio-frequency-rf-treatment-heads,
   lipo-laser-360-before-after-front-abdomen, body-contouring-treatment
*/
const items = [
  { type: "image", label: "CoolSculpting", caption: "Sesión" },
  { type: "image", label: "Radiofrecuencia RF", caption: "Cabezales" },
  { type: "image", label: "Abdomen 360", caption: "Antes · Después" },
  { type: "image", label: "Body contouring", caption: "Tratamiento" },
];

export default function TreatmentCoolsculpting() {
  return (
    <TreatmentBlock
      id="coolsculpting"
      testid="treatment-coolsculpting"
      reversed
      eyebrow="Criolipólisis · Fat Freezing"
      title="Cool"
      titleItalic="Sculpting."
      italicIntro="Criolipólisis médica que congela y elimina células de grasa resistente — segura, no invasiva y con resultados graduales que se mantienen en el tiempo."
      areas={["Abdomen", "Flancos", "Muslos", "Brazos"]}
      items={items}
      bodyAfter="Enfriamiento controlado (-9 a -11 °C) que cristaliza las células grasas sin dañar tejidos vecinos. El cuerpo las elimina naturalmente en las siguientes semanas, moldeando la silueta de forma progresiva."
      bullets={[
        "Elimina grasa resistente",
        "No invasivo, sin agujas",
        "Resultados duraderos",
        "Sin tiempo de recuperación",
      ]}
    />
  );
}
