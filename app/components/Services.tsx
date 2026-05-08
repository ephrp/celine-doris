"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Création de contenu", desc: "Contenus sponsorisés pensés pour capter l’attention et créer de l’engagement.", result: "Visibilité & engagement", icon: "🎥" },
  { title: "Shooting photo / vidéo", desc: "Production de visuels lifestyle, beauté et culture pour campagnes de marque.", result: "Image de marque", image: "/shooting.jpeg" },
  { title: "Promotion de marque", desc: "Mise en avant naturelle de produits, services ou expériences auprès d’une audience ciblée.", result: "Notoriété", image: "/promo.jpeg" },
  { title: "UGC", desc: "Création de contenus authentiques pour alimenter les réseaux sociaux des marques.", result: "Contenu réutilisable", icon: "📱" },
  { title: "Événementiel", desc: "Présence, couverture et valorisation d’événements culturels, lifestyle ou corporate.", result: "Impact terrain", image: "/event.jpeg" },
  { title: "Ambassadrice", desc: "Collaboration durable autour d’une image forte et identifiable.", result: "Partenariat premium", icon: "⭐", badge: "Premium" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#06060A] px-5 py-24 text-white sm:px-6 md:px-20 md:py-28"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-32 left-1/2 h-48 w-[600px] -translate-x-1/2 bg-pink-500/15 blur-[120px]" />
      <div className="absolute left-[-30%] top-[15%] h-72 w-72 rounded-full bg-purple-600/10 blur-[140px] md:left-[-12%] md:h-80 md:w-80" />
      <div className="absolute bottom-[15%] right-[-30%] h-80 w-80 rounded-full bg-pink-500/10 blur-[160px] md:right-[-10%] md:h-96 md:w-96" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500 sm:text-sm sm:tracking-[0.4em]">
              Services
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Des formats pensés pour transformer l’attention en collaboration.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-400">
            Une offre claire pour les marques et agences qui veulent créer du
            contenu moderne, crédible et impactant.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_0_70px_rgba(168,85,247,0.22)] sm:p-5 sm:rounded-[2rem]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/20 opacity-0 transition duration-500 group-hover:opacity-100" />

              {service.badge && (
                <span className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs text-gray-300 backdrop-blur">
                  {service.badge}
                </span>
              )}

              <div className="relative">
                {service.image ? (
                  <div className="relative mb-5 flex h-[240px] items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-black sm:h-[280px] lg:h-[300px]">
                    <div
                      className="absolute inset-0 opacity-35 blur-xl transition duration-700 group-hover:opacity-60"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative z-10 h-full w-auto object-contain transition duration-700 group-hover:scale-105 sm:group-hover:scale-110"
                    />

                    <div className="absolute bottom-4 left-4 right-4 z-20 hidden translate-y-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-xs text-gray-300 opacity-0 backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
                      Aperçu visuel — {service.title}
                    </div>
                  </div>
                ) : (
                  <div className="relative mb-5 flex h-[240px] items-center justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/30 text-5xl shadow-[0_0_25px_rgba(255,255,255,0.05)] sm:h-[280px] sm:text-6xl lg:h-[300px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-purple-500/10 opacity-60" />
                    <span className="relative transition duration-500 group-hover:scale-125">
                      {service.icon}
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400 sm:min-h-[72px]">
                  {service.desc}
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 transition duration-300 group-hover:bg-black/45">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                    Objectif
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {service.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-5 text-center md:mt-14"
        >
          <p className="max-w-md text-sm leading-6 text-gray-400">
            Disponible pour collaborations avec marques, agences, shootings et événements.
          </p>

          <a
            href="#contact"
            className="inline-flex w-full justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_0_50px_rgba(255,255,255,0.2)] transition duration-300 hover:scale-105 hover:bg-gray-200 sm:w-auto"
          >
            Discuter d’un projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}