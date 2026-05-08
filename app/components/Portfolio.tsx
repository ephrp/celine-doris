"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  brand: string;
  role: string;
  period: string;
  desc: string;
  images: string[];
};

const projects: Project[] = [
  {
    brand: "Ma Pharmacie Beauté",
    role: "Égérie beauté",
    period: "2024 — 2025",
    desc: "Collaboration autour de contenus beauté et lifestyle pour valoriser l’image de marque et engager une audience jeune.",
    images: ["/pharmacie.jpeg", "/pharmacie-2.jpeg"],
  },
  {
    brand: "France Togo",
    role: "Égérie / promotion",
    period: "Depuis 2024",
    desc: "Mise en avant de services de livraison à travers du contenu authentique et engageant.",
    images: ["/france-togo.jpeg", "/france-togo-2.jpeg", "/france-togo-3.jpeg"],
  },
];

function ProjectSlider({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.04] backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/[0.07] sm:rounded-[2rem]"
    >
      <div className="relative h-[240px] overflow-hidden bg-black sm:h-[280px]">
        <div
          className="absolute inset-0 opacity-40 blur-2xl transition duration-700"
          style={{
            backgroundImage: `url(${project.images[activeImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {project.images.map((image, imageIndex) => (
          <img
            key={image}
            src={image}
            alt={`${project.brand} ${imageIndex + 1}`}
            className={`absolute inset-0 h-full w-full object-contain transition duration-700 group-hover:scale-105 ${
              activeImage === imageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {project.images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === activeImage ? "w-6 bg-white" : "w-1.5 bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
          {project.period}
        </p>

        <h3 className="mt-2 text-lg font-semibold sm:text-xl">
          {project.brand}
        </h3>

        <p className="mt-1 text-sm text-gray-400">{project.role}</p>

        <p className="mt-4 text-sm leading-6 text-gray-400">{project.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#040406] px-5 py-24 text-white sm:px-6 md:px-20 md:py-32"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-32 left-1/2 h-48 w-[650px] -translate-x-1/2 bg-purple-600/20 blur-[120px]" />
      <div className="absolute left-[-30%] top-[10%] h-80 w-80 rounded-full bg-purple-600/10 blur-[160px] md:left-[-10%] md:h-96 md:w-96" />
      <div className="absolute bottom-[10%] right-[-30%] h-80 w-80 rounded-full bg-pink-500/10 blur-[180px] md:right-[-10%] md:h-[28rem] md:w-[28rem]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500 sm:text-sm sm:tracking-[0.4em]">
            Portfolio
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Des collaborations qui prennent vie à l’écran.
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            Des contenus pensés pour capter l’attention, créer de l’engagement
            et renforcer l’image des marques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 45 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative mx-auto w-full max-w-[430px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur transition duration-500 hover:scale-[1.01] lg:max-w-none"
          >
            <div className="relative aspect-[9/16] max-h-[680px] w-full overflow-hidden bg-black sm:max-h-[760px]">
              <video
                src="/media-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              <div className="absolute inset-0 hidden items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100 sm:flex">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/20 text-white backdrop-blur">
                  ▶
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <p className="mb-3 w-fit rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur">
                  Média TikTok
                </p>

                <h3 className="text-xl font-semibold sm:text-2xl">
                  Présentatrice & contenu média
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Présence face caméra, storytelling et formats courts à fort impact.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {projects.map((project) => (
              <ProjectSlider key={project.brand} project={project} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center gap-5 text-center md:mt-20"
        >
          <p className="text-sm text-gray-400">
            Prêt à créer une collaboration impactante ?
          </p>

          <a
            href="#contact"
            className="w-full rounded-full bg-white px-10 py-3 text-center text-sm font-semibold text-black shadow-[0_0_60px_rgba(255,255,255,0.25)] transition duration-300 hover:scale-105 hover:bg-gray-200 sm:w-auto"
          >
            Lancer un projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}