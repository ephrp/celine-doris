"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  ["À propos", "about"],
  ["Services", "services"],
  ["Portfolio", "portfolio"],
  ["Tarifs", "pricing"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0.35)", "rgba(0,0,0,0.82)"]
  );

  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0.08)", "rgba(255,255,255,0.14)"]
  );

  useEffect(() => {
    const sections = ["hero", ...links.map((link) => link[1])];

    const onScroll = () => {
      let current = "hero";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (window.scrollY >= section.offsetTop - 140) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        style={{ backgroundColor: background, borderColor }}
        className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-2xl"
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-12">
          <a href="#hero" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-black transition duration-300 group-hover:scale-105">
              C
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold tracking-tight text-white sm:text-lg">
                LANGGUTH Céline Doris
              </p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 sm:text-[11px]">
                Digital creator
              </p>
            </div>
          </a>

          <div className="hidden rounded-full border border-white/10 bg-white/5 px-2 py-2 shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-md md:flex items-center gap-1 text-sm text-gray-300">
            {links.map(([label, id]) => {
              const isActive = activeSection === id;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`rounded-full px-4 py-2 transition duration-300 ${
                    isActive
                      ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.16)]"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_35px_rgba(255,255,255,0.18)] transition duration-300 hover:scale-105 hover:bg-gray-200"
            >
              Collaborer
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur md:hidden"
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="fixed left-4 right-4 top-24 z-40 rounded-[2rem] border border-white/10 bg-black/85 p-4 text-white shadow-[0_0_80px_rgba(0,0,0,0.7)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map(([label, id]) => {
                const isActive = activeSection === id;

                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-white text-black"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black"
              >
                Collaborer
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}