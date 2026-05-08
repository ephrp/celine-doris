"use client";

import { motion } from "framer-motion";

const offers = [
  {
    title: "Starter",
    desc: "Pour les petites collaborations, tests de visibilité ou contenus ponctuels.",
    items: ["Story / publication", "Mise en avant simple", "Collaboration courte"],
  },
  {
    title: "Standard",
    desc: "Pour les marques qui veulent une présence plus structurée et engageante.",
    items: ["Contenu sponsorisé", "Shooting photo / vidéo", "Publication + story"],
    featured: true,
  },
  {
    title: "Premium",
    desc: "Pour les campagnes complètes, événements ou partenariats plus ambitieux.",
    items: ["Campagne complète", "Présence événementielle", "Ambassadrice / long terme"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#050507] px-5 py-24 text-white sm:px-6 md:px-20 md:py-32"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-32 left-1/2 h-48 w-[650px] -translate-x-1/2 bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500 sm:text-sm">
            Tarifs
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Des offres adaptées à chaque collaboration.
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            Les tarifs sont définis selon le type de projet, la durée, les
            livrables et les objectifs de la marque.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[1.7rem] border p-5 backdrop-blur transition duration-500 hover:-translate-y-2 sm:rounded-[2rem] sm:p-6 ${
                offer.featured
                  ? "border-purple-400/30 bg-purple-600/20 shadow-[0_0_70px_rgba(168,85,247,0.22)]"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
              }`}
            >
              {offer.featured && (
                <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/15 px-3 py-1 text-xs text-white">
                  Recommandé
                </span>
              )}

              <h3 className="text-xl font-semibold sm:text-2xl">
                {offer.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-300 md:min-h-[96px] lg:min-h-[72px]">
                {offer.desc}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-medium text-white">
                  Tarif sur demande
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Devis personnalisé selon le besoin.
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {offer.items.map((item) => (
                  <p key={item} className="text-sm leading-6 text-gray-400">
                    • {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:mt-14">
          <a
            href="#contact"
            className="inline-flex w-full justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_0_50px_rgba(255,255,255,0.2)] transition hover:scale-105 hover:bg-gray-200 sm:w-auto"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}