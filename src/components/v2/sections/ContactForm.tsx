"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  "Diagnóstico comunicacional",
  "Orden estratégico",
  "Acción y producción",
  "Consulta general",
];

const WA_NUMBER = "5491155939599";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hola Casa Seis 👋\n\nSoy *${name}*.\nMe interesa: *${service}*.\n\n${message}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const fieldClass =
    "w-full bg-transparent border-b border-[#1d2a34]/30 focus:border-[#C49A6C] outline-none py-3 text-[#1d2a34] placeholder:text-[#1d2a34]/40 transition-colors duration-300 text-base";

  return (
    <section
      id="contacto"
      className="relative bg-[#efefed] px-6 pt-24 pb-32 overflow-hidden"
    >
      <div className="mx-auto max-w-2xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.4em] text-[#1d2a34]/40 uppercase mb-4">
            Contacto
          </p>
          <h2 className="text-[1.625rem] md:text-5xl font-normal text-[#1d2a34] uppercase tracking-tight font-mono leading-tight">
            Si sentís que
            <br />
            es por acá,
            <br />
            <span className="text-[#C49A6C]">hablemos.</span>
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          {/* Nombre */}
          <div className="group">
            <label
              htmlFor="contact-name"
              className="block text-[10px] font-mono tracking-[0.3em] text-[#1d2a34]/40 uppercase mb-2"
            >
              Nombre
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="¿Cómo te llamás?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
            />
          </div>

          {/* Servicio */}
          <div className="group">
            <label
              htmlFor="contact-service"
              className="block text-[10px] font-mono tracking-[0.3em] text-[#1d2a34]/40 uppercase mb-2"
            >
              Servicio de interés
            </label>
            <select
              id="contact-service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`${fieldClass} cursor-pointer appearance-none`}
            >
              <option value="" disabled>
                Seleccioná una opción
              </option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Mensaje */}
          <div className="group">
            <label
              htmlFor="contact-message"
              className="block text-[10px] font-mono tracking-[0.3em] text-[#1d2a34]/40 uppercase mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              placeholder="Contanos brevemente tu proyecto o consulta..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${fieldClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <div className="pt-4 text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 border border-[#1d2a34]/40 hover:border-[#1d2a34] hover:bg-[#1d2a34] hover:text-[#efefed] px-14 py-4 rounded-full text-[13px] font-mono tracking-[0.3em] text-[#1d2a34] uppercase transition-all duration-500"
            >
              {sent ? "✓ Abriendo WhatsApp..." : "Enviar mensaje"}
            </motion.button>
            <p className="mt-4 text-[11px] text-[#1d2a34]/30 font-mono">
              Te redirigiremos a WhatsApp con el mensaje listo.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
