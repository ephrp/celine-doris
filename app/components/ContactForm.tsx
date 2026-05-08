"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/xgodnvrn";

const collaborationTypes = [
  "Shooting photo / vidéo",
  "Promotion de marque",
  "UGC",
  "Événementiel",
  "Ambassadrice",
  "Autre",
];

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("Type de collaboration");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (type === "Type de collaboration") {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("type_collaboration", type);
    formData.append("_subject", "Nouvelle demande de collaboration");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setType("Type de collaboration");
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#07070B] px-5 py-24 text-white sm:px-6 md:px-20 md:py-32"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-32 left-1/2 h-48 w-[650px] -translate-x-1/2 bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-30%] h-80 w-80 rounded-full bg-pink-500/10 blur-[160px] md:right-[-10%] md:h-96 md:w-96" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500 sm:text-sm">
            Collaboration
          </p>

          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Un projet, une campagne ou une idée à lancer ?
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Remplissez le formulaire pour proposer une collaboration, un
            shooting, une campagne ou une présence événementielle.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
            {["Marques", "Agences", "Événements"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-gray-300 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_70px_rgba(0,0,0,0.45)] backdrop-blur sm:rounded-[2rem] sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input name="nom" required placeholder="Nom complet *" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/30" />

            <input name="entreprise" placeholder="Entreprise / agence" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/30" />

            <input name="email" required type="email" placeholder="Email *" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/30" />

            <input name="telephone" required type="tel" placeholder="WhatsApp / téléphone *" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/30" />

            <div className="relative sm:col-span-2">
              <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-left text-sm text-gray-400 transition hover:border-white/30">
                <span>{type}</span>
                <span className="text-gray-500">{open ? "−" : "+"}</span>
              </button>

              {open && (
                <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0F] shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur">
                  {collaborationTypes.map((option) => (
                    <button key={option} type="button" onClick={() => { setType(option); setOpen(false); }} className="block w-full px-4 py-3 text-left text-sm text-gray-300 transition hover:bg-white/10 hover:text-white">
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <input name="budget" placeholder="Budget estimé" className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/30 sm:col-span-2" />

            <textarea name="message" required placeholder="Décrivez votre projet... *" rows={5} className="resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-white/30 sm:col-span-2" />
          </div>

          <button type="submit" disabled={status === "sending"} className="mt-6 w-full rounded-full bg-white px-8 py-4 text-sm font-semibold text-black shadow-[0_0_45px_rgba(255,255,255,0.18)] transition duration-300 hover:scale-[1.02] hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-60">
            {status === "sending" ? "Envoi en cours..." : "Envoyer la demande"}
          </button>

          <p className="mt-4 text-xs text-gray-500">* Champs obligatoires</p>

          <AnimatePresence>
            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} className="mt-5 rounded-2xl border border-green-400/20 bg-green-400/10 p-4 text-sm text-green-200">
                Demande envoyée avec succès. Nous reviendrons vers vous rapidement.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-200">
                Vérifiez les champs obligatoires ou réessayez dans quelques instants.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}