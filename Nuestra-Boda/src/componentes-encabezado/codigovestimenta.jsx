import React from "react";
import { motion } from "framer-motion";

/* =========================================
   CÓDIGO DE VESTIMENTA
   DANELY & ROGELIO
========================================= */

const palette = {
  ink: "#1F1F1F",
  champagne: "#D8C3A5",
  champagneLight: "#E8DCCB",
  ivory: "#F7F2E8",
  gold: "#B99B73",
  goldDark: "#927451",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
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

/* =========================================
   ICONO TRAJE
========================================= */

function SuitIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-12 w-12 sm:h-14 sm:w-14"
    >
      <path d="M16 8 8 13v27h32V13l-8-5" />
      <path d="m16 8 8 8 8-8" />
      <path d="m19 13 5 7 5-7" />
      <path d="M24 20v20" />
      <path d="M16 8V4h16v4" />
      <path d="M8 23h9" />
      <path d="M31 23h9" />
    </svg>
  );
}

/* =========================================
   ICONO VESTIDO
========================================= */

function DressIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-12 w-12 sm:h-14 sm:w-14"
    >
      <path d="M19 5h10" />
      <path d="M20 5c0 6-2 10-5 14" />
      <path d="M28 5c0 6 2 10 5 14" />
      <path d="M15 19h18" />
      <path d="m15 19-7 23h32l-7-23" />
      <path d="M19 5c1 3 2.5 5 5 7 2.5-2 4-4 5-7" />
      <path d="M16 27h16" />
    </svg>
  );
}

/* =========================================
   ORNAMENTO
========================================= */

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

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-12 sm:w-16"
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
        className="h-px w-12 sm:w-16"
        style={{
          backgroundColor: palette.goldDark,
        }}
      />
    </div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function DressCodePremium() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        relative
        flex
        min-h-[600px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-6
        py-24
        sm:min-h-[680px]
        sm:px-8
        sm:py-28
        lg:px-12
      "
      style={{
        backgroundColor: palette.ivory,
      }}
    >
      {/* MARCO EXTERIOR */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          border
          sm:inset-8
          lg:inset-10
        "
        style={{
          borderColor: palette.gold,
        }}
      />

      {/* MARCO INTERIOR */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[27px]
          border
          sm:inset-[39px]
          lg:inset-[47px]
        "
        style={{
          borderColor: palette.champagne,
        }}
      />

      {/* ORNAMENTOS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-9
          h-[260px]
          w-[150px]
          -rotate-12
          text-[#B99B73]
          sm:h-[320px]
          sm:w-[185px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-9
          -top-16
          h-[260px]
          w-[150px]
          rotate-[168deg]
          text-[#B99B73]
          sm:h-[320px]
          sm:w-[185px]
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-3xl
          flex-col
          items-center
          text-center
        "
      >
        {/* TEXTO SUPERIOR */}

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-[8px]
            uppercase
            tracking-[0.44em]
            sm:text-[10px]
            sm:tracking-[0.55em]
          "
          style={{
            color: palette.goldDark,
          }}
        >
          Detalles de la celebración
        </motion.p>

        <div className="mt-5">
          <DecorativeDivider />
        </div>

        {/* TÍTULO */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.1,
          }}
          className="
            mt-7
            font-serif
            text-[39px]
            font-normal
            leading-tight
            tracking-[-0.025em]
            sm:text-[54px]
            md:text-[64px]
          "
          style={{
            color: palette.ink,
          }}
        >
          Código de vestimenta
        </motion.h2>

        {/* ICONOS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-6
            sm:gap-8
          "
        >
          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              sm:h-28
              sm:w-28
            "
            style={{
              borderColor: palette.gold,
              color: palette.goldDark,
              backgroundColor: palette.ivory,
            }}
          >
            <SuitIcon />
          </div>

          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              sm:h-28
              sm:w-28
            "
            style={{
              borderColor: palette.gold,
              color: palette.goldDark,
              backgroundColor: palette.ivory,
            }}
          >
            <DressIcon />
          </div>
        </motion.div>

        {/* FORMAL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="mt-10"
        >
          <DecorativeDivider />

          <h3
            className="
              mt-8
              font-serif
              text-[42px]
              font-normal
              tracking-[-0.02em]
              sm:text-[54px]
              md:text-[60px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Formal
          </h3>

          <p
            className="
              mt-4
              text-[9px]
              uppercase
              tracking-[0.38em]
              sm:text-[10px]
            "
            style={{
              color: palette.goldDark,
            }}
          >
            Código de vestimenta
          </p>
        </motion.div>

        {/* CIERRE */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.4,
          }}
          className="
            mx-auto
            mt-9
            max-w-lg
            font-serif
            text-[15px]
            italic
            leading-7
            sm:text-base
          "
          style={{
            color: palette.goldDark,
          }}
        >
          Nos encantará compartir este día tan especial contigo.
        </motion.p>
      </div>
    </motion.section>
  );
}