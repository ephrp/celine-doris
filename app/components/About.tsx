"use client";

import { motion } from "framer-motion";

const stats = [
  ["853K+", "Spectateurs / 28 jours"],
  ["244K+", "Vues / 7 jours"],
  ["29K+", "Likes"],
  ["601K+", "Nouveaux spectateurs"],
];

const audience = [
  ["18–24 ans", "52%", "52%"],
  ["25–34 ans", "36%", "36%"],
  ["Togo", "69%", "69%"],
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07070B] px-5 py-24 text-white sm:px-6 md:px-20 md:py-32"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute -top-32 left-1/2 h-48 w-[600px] -translate-x-1/2 bg-purple-600/20 blur-[120px]" />

      <div className="absolute left-[-30%] top-[30%] h-72 w-72 rounded-full bg-purple-600/10 blur-[140px] md:left-[-10%] md:h-80 md:w-80" />

      <div className="absolute right-[-20%] bottom-[15%] h-80 w-80 rounded-full bg-pink-500/10 blur-[160px] md:right-[-8%] md:h-96 md:w-96" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-16">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="absolute inset-0 max-w-[340px] rounded-[2rem] bg-gradient-to-tr from-purple-600/30 to-pink-500/20 blur-2xl sm:max-w-[380px]" />

          <div className="group relative w-full max-w-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur sm:max-w-[380px]">
            <img
              src="/about.jpeg"
              alt="Créatrice de contenu"
              className="h-[440px] w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105 sm:h-[560px]"
            />

            <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/65 p-4 backdrop-blur-md">
              <p className="text-sm font-medium text-white">
                Lifestyle • Culture • Beauté
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Créatrice basée au Togo
              </p>
            </div>
          </div>
        </motion.div>

        {/* TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500 sm:text-sm sm:tracking-[0.4em]">
            À propos
          </p>

          <h2 className="mb-6 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Un univers créatif, accessible et pensé pour l’engagement.
          </h2>

          <p className="max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Au-delà de la création de contenu, je construis un univers qui
            mélange lifestyle, culture, beauté et spontanéité. Mon contenu
            repose sur une image accessible, moderne et proche de la jeunesse.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Chaque collaboration est pensée comme une expérience naturelle :
            créer du contenu qui capte l’attention, valorise la marque et garde
            une vraie connexion avec mon audience.
          </p>

          {/* STATS */}
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6">
            
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
                  Audience & impact
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Une communauté jeune et engagée.
                </p>
              </div>

              <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300">
                Données récentes
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    {value}
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-gray-400 sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* BARRES */}
            <div className="mt-8 space-y-5">
              {audience.map(([label, value, width]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-300">{label}</span>
                    <span className="text-white">{value}</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}