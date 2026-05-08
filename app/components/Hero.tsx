"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050507] px-5 pb-20 pt-28 text-white sm:px-6 md:px-20 md:pt-32"
    >
      <div className="absolute left-[-30%] top-[18%] h-72 w-72 rounded-full bg-purple-600/20 blur-[130px] md:left-[-10%] md:h-80 md:w-80" />
      <div className="absolute right-[-30%] top-[25%] h-80 w-80 rounded-full bg-pink-500/10 blur-[150px] md:right-[8%] md:h-[28rem] md:w-[28rem]" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-center gap-12 md:min-h-[calc(100vh-8rem)] md:grid-cols-2 md:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur sm:text-sm"
          >
            Lifestyle • Beauté • Culture • Collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-7xl"
          >
            Une présence{" "}
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              digitale pensée
            </span>{" "}
            pour les marques.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8"
          >
            Créatrice de contenu lifestyle, beauté et culture, j’aide les
            marques, agences et projets créatifs à gagner en visibilité grâce à
            des contenus modernes, authentiques et engageants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3 text-center text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.16)] transition duration-300 hover:scale-105 hover:bg-gray-200"
            >
              Proposer une collaboration
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white/10"
            >
              Découvrir mes services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs text-gray-400 sm:mt-12 sm:flex sm:flex-wrap sm:gap-8 sm:pt-8 sm:text-sm"
          >
            {[
              ["17–25", "Audience jeune"],
              ["Togo", "Culture & lifestyle"],
              ["Multi", "Beauté, mode, events"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="transition duration-300 hover:-translate-y-1"
              >
                <p className="text-xl font-semibold text-white sm:text-2xl">
                  {value}
                </p>
                <p>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-purple-600/30 to-pink-500/20 blur-3xl" />

          <div className="group relative h-[430px] w-full max-w-[330px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur sm:h-[520px] sm:max-w-[380px] md:h-[560px]">
            <img
              src="/hero.jpeg"
              alt="Créatrice de contenu"
              className="h-full w-full rounded-[1.8rem] object-cover transition duration-700 group-hover:scale-105 sm:rounded-[2rem]"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/65 p-4 shadow-2xl backdrop-blur-md">
              <p className="text-sm font-medium text-white">
                Disponible pour collaborations
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Marques • agences • shootings • événements
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-[#07070B]" />
      <div className="pointer-events-none absolute bottom-[-90px] left-1/2 h-48 w-[620px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-gray-500 transition hover:text-white sm:block"
      >
        Scroll
      </motion.a>
    </section>
  );
}