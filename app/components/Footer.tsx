"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050507] px-5 pb-10 pt-20 text-white sm:px-6 md:px-20 md:pt-24">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-0 h-40 w-[420px] -translate-x-1/2 bg-purple-600/10 blur-[120px] sm:w-[500px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_0.8fr_0.8fr] md:gap-16 md:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold backdrop-blur">
                C
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold tracking-tight sm:text-lg">
                  LANGGUTH Céline Doris
                </h3>
                <p className="text-sm text-gray-500">Créatrice de contenu</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Lifestyle, culture, beauté et contenu digital pensé pour créer de
              vraies connexions avec les audiences modernes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
              Navigation
            </p>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a href="#about" className="transition hover:text-white">
                À propos
              </a>
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#portfolio" className="transition hover:text-white">
                Portfolio
              </a>
              <a href="#pricing" className="transition hover:text-white">
                Tarifs
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
              Réseaux
            </p>

            <div className="flex flex-col gap-3 break-words text-sm text-gray-300">
              <a
                href="https://www.instagram.com/miss__celine228?igsh=eW9pZ3hreWNodnE5"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@mlle_lgh?_r=1&_t=ZS-961dbC5Tz1s"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                TikTok
              </a>

              <a
                href="mailto:celinelangguth2@gmail.com"
                className="transition hover:text-white"
              >
                celinelangguth2@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-3 pt-8 text-sm text-gray-500 sm:items-center md:flex-row"
        >
          <p>© 2026 — Créatrice de contenu</p>
          <p className="text-gray-600">Design premium • by EPHRO TECH</p>
        </motion.div>
      </div>
    </footer>
  );
}