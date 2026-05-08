"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(14px)",
          }}
          transition={{
            duration: 1.1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
        >
          {/* Glow */}
          <div className="absolute h-[350px] w-[350px] rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="relative text-center">
            
            {/* TOP TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="mb-5 text-sm uppercase tracking-[0.45em] text-gray-500"
            >
              Digital creator
            </motion.p>

            {/* NAME */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl font-semibold tracking-tight text-white md:text-7xl"
            >
              LANGGUTH
            </motion.h1>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="mt-3 text-2xl font-light tracking-[0.25em] text-gray-300 md:text-3xl"
            >
              Céline Doris
            </motion.h2>

            {/* LINE */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 180, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              className="mx-auto mt-8 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              className="mt-6 text-sm tracking-[0.25em] text-gray-500"
            >
              Lifestyle • Beauty • Culture
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}