import React from "react";
import { motion } from "framer-motion";

const palette = {
  ink: "#1F1F1F",
  inkSoft: "#3D3A36",
  champagne: "#D8C3A5",
  champagneLight: "#E8DCCB",
  ivory: "#F7F2E8",
  ivoryWarm: "#EFE7DA",
  gold: "#B99B73",
  goldDark: "#927451",
  warmGray: "#756E65",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 260"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M76 252C80 192 78 130 71 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M76 205C54 192 41 174 35 151"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M75 167C97 153 109 133 113 109"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M73 123C53 110 43 93 39 72"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M72 83C91 71 101 53 103 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M35 151C49 150 60 158 67 173C52 172 41 165 35 151Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M113 109C99 109 88 117 80 132C96 131 107 123 113 109Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 72C53 73 63 81 69 95C54 94 44 86 39 72Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M103 34C90 35 80 42 74 55C88 54 98 47 103 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: palette.goldDark,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: palette.goldDark,
        }}
      />

      <span
        className="h-px w-10 sm:w-14"
        style={{
          backgroundColor: palette.goldDark,
        }}
      />
    </div>
  );
}

function GrupoNombres({ titulo, nombres, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center"
    >
      <p
        className="
          text-[9px]
          uppercase
          tracking-[0.32em]
          sm:text-[10px]
        "
        style={{
          color: palette.goldDark,
        }}
      >
        {titulo}
      </p>

      <div className="mt-4 space-y-2">
        {nombres.map((nombre) => (
          <p
            key={nombre}
            className="
              font-serif
              text-[20px]
              leading-relaxed
              sm:text-[24px]
            "
            style={{
              color: palette.ink,
            }}
          >
            {nombre}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function PadresYPadrinos() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-24
        sm:px-10
        sm:py-28
        lg:py-32
      "
      style={{
        backgroundColor: palette.champagne,
      }}
    >
      {/* RAMAS DECORATIVAS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[270px]
          w-[155px]
          -rotate-12
          text-[#927451]/20
          sm:h-[340px]
          sm:w-[190px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-8
          -top-16
          h-[270px]
          w-[155px]
          rotate-[168deg]
          text-[#927451]/20
          sm:h-[340px]
          sm:w-[190px]
        "
      />

      {/* MARCOS */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          border
          sm:inset-8
        "
        style={{
          borderColor: palette.goldDark,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[26px]
          border
          sm:inset-[38px]
        "
        style={{
          borderColor: palette.champagneLight,
        }}
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-3xl
        "
      >
        {/* PADRES DEL NOVIO */}

        <GrupoNombres
          titulo="Padres del novio"
          nombres={[
            "Maria del Rosario Zamora A.",
            "Rogelio Mendoza L.",
          ]}
          delay={0.1}
        />

        <div className="my-10 sm:my-14">
          <DecorativeDivider />
        </div>

        {/* PADRES DE LA NOVIA */}

        <GrupoNombres
          titulo="Padres de la novia"
          nombres={[
            "Cintia Gpe. Medina A.",
            "Rommell Maya H.",
          ]}
          delay={0.2}
        />

        <div className="my-10 sm:my-14">
          <DecorativeDivider />
        </div>

        {/* PADRINOS DE VELACIÓN */}

        <GrupoNombres
          titulo="Padrinos de velación"
          nombres={[
            "Isabel Andrade C.",
            "Juan R. Medina V.",
          ]}
          delay={0.3}
        />
      </div>
    </motion.section>
  );
}