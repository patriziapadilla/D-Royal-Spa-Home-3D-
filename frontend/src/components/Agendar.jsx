import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const tratamientos = [
  { value: "lipo-laser", label: "Lipo con Láser" },
  { value: "botox-natural", label: "Botox Natural con Láser" },
  { value: "aumentos", label: "Aumentos sin Cirugía" },
  { value: "coolsculpting", label: "CoolSculpting" },
  { value: "otro", label: "Otro / Consultar" },
];

const areas = ["Brickell", "Downtown", "Doral", "Miami Beach"];

export default function Agendar() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tratamiento: "lipo-laser",
    area: "Brickell",
    fecha_preferida: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono) {
      toast.error("Nombre y teléfono son requeridos");
      return;
    }
    setLoading(true);
    try {
      const payload = { ...form };
      if (!payload.email) delete payload.email;
      await axios.post(`${API}/reservations`, payload);
      toast.success("¡Reserva enviada! Te contactamos en minutos.");
      setForm({
        nombre: "",
        telefono: "",
        email: "",
        tratamiento: "lipo-laser",
        area: "Brickell",
        fecha_preferida: "",
        mensaje: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("No se pudo enviar. Intenta por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="agendar"
      data-testid="agendar-section"
      className="py-24 sm:py-32 border-t border-[var(--line)] bg-[var(--cream-2)]"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          <div>
            <div className="text-[0.72rem] tracking-[0.3em] uppercase text-[var(--ink)]/60 mb-5">
              Agendar Cita
            </div>
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.01em]">
              Tu sesión,
              <br />
              <span className="italic font-normal">a domicilio.</span>
            </h2>
            <p className="mt-6 font-display italic text-lg text-[var(--ink)]/80 max-w-[42ch]">
              $90 tu primera sesión. 100% in-home. Equipo profesional incluido.
            </p>
          </div>

          <div className="space-y-5 text-sm">
            <div>
              <div className="text-[0.7rem] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-1">
                Teléfono
              </div>
              <a href="tel:+17866900960" className="text-xl font-display hover:italic">
                +1 786 690 0960
              </a>
            </div>
            <div>
              <div className="text-[0.7rem] tracking-[0.22em] uppercase text-[var(--ink)]/55 mb-1">
                WhatsApp
              </div>
              <a
                href="https://wa.me/17866900960"
                target="_blank"
                rel="noreferrer"
                data-testid="agendar-whatsapp"
                className="text-xl font-display hover:italic"
              >
                wa.me/17866900960 ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right form */}
        <form
          onSubmit={onSubmit}
          data-testid="agendar-form"
          className="lg:col-span-7 bg-[var(--cream)] border border-[var(--line)] rounded-[28px] p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          <Field label="Nombre *" testid="input-nombre">
            <input
              value={form.nombre}
              onChange={(e) => update("nombre", e.target.value)}
              className="input"
              data-testid="field-nombre"
              required
            />
          </Field>

          <Field label="Teléfono *" testid="input-telefono">
            <input
              value={form.telefono}
              onChange={(e) => update("telefono", e.target.value)}
              className="input"
              data-testid="field-telefono"
              required
              type="tel"
            />
          </Field>

          <Field label="Email" testid="input-email" className="sm:col-span-2">
            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="input"
              data-testid="field-email"
              type="email"
            />
          </Field>

          <Field label="Tratamiento" testid="input-tratamiento">
            <select
              value={form.tratamiento}
              onChange={(e) => update("tratamiento", e.target.value)}
              className="input"
              data-testid="field-tratamiento"
            >
              {tratamientos.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </Field>

          <Field label="Área" testid="input-area">
            <select
              value={form.area}
              onChange={(e) => update("area", e.target.value)}
              className="input"
              data-testid="field-area"
            >
              {areas.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </Field>

          <Field label="Fecha preferida" testid="input-fecha" className="sm:col-span-2">
            <input
              value={form.fecha_preferida}
              onChange={(e) => update("fecha_preferida", e.target.value)}
              className="input"
              placeholder="ej. Sábado por la tarde"
              data-testid="field-fecha"
            />
          </Field>

          <Field label="Mensaje" testid="input-mensaje" className="sm:col-span-2">
            <textarea
              value={form.mensaje}
              onChange={(e) => update("mensaje", e.target.value)}
              rows={4}
              className="input resize-none"
              data-testid="field-mensaje"
            />
          </Field>

          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
            <span className="text-xs text-[var(--ink)]/60">
              Al enviar, aceptas ser contactada por D'Royal Spa.
            </span>
            <button
              type="submit"
              disabled={loading}
              data-testid="agendar-submit"
              className="btn-pill cta-arrow disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Reservar"} <span className="arr">→</span>
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(11,11,11,0.2);
          padding: 0.7rem 0;
          font: inherit;
          color: var(--ink);
          outline: none;
          transition: border-color 0.3s;
        }
        .input:focus { border-color: var(--ink); }
        select.input { appearance: none; background-image: linear-gradient(45deg, transparent 50%, var(--ink) 50%), linear-gradient(135deg, var(--ink) 50%, transparent 50%); background-position: calc(100% - 15px) center, calc(100% - 10px) center; background-size: 5px 5px, 5px 5px; background-repeat: no-repeat; padding-right: 1.5rem; }
      `}</style>
    </section>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[0.68rem] tracking-[0.24em] uppercase text-[var(--ink)]/55">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
