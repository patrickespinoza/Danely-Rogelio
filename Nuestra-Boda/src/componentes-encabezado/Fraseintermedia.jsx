import React from "react";
import { motion } from "framer-motion";

/* =========================================
   FRASE DE SEPARACIÓN
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

/* =========================================
   RAMA BOTÁNICA
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
    <div className="flex items-center justify-center gap-4">
      <span
        className="h-px w-12 sm:w-20"
        style={{
          backgroundColor: palette.goldDark,
        }}
      />

      <span
        className="h-[6px] w-[6px] rotate-45 border"
        style={{
          borderColor: palette.goldDark,
        }}
      />

      <span
        className="h-px w-12 sm:w-20"
        style={{
          backgroundColor: palette.goldDark,
        }}
      />
    </div>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function FraseSeparacion() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="
        relative
        flex
        min-h-[480px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-7
        py-24
        text-center
        sm:min-h-[560px]
        sm:px-10
        sm:py-28
        lg:min-h-[620px]
        lg:px-12
      "
      style={{
        backgroundColor: palette.champagne,
      }}
    >
      {/* =========================================
          MARCO EXTERIOR
      ========================================= */}

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
          borderColor: palette.goldDark,
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
          borderColor: palette.champagneLight,
        }}
      />

      {/* =========================================
          RAMA INFERIOR IZQUIERDA
      ========================================= */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-9
          h-[260px]
          w-[150px]
          -rotate-12
          sm:h-[320px]
          sm:w-[185px]
          lg:left-1
        "
        style={{
          color: palette.goldDark,
        }}
      />

      {/* =========================================
          RAMA SUPERIOR DERECHA
      ========================================= */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-9
          -top-16
          h-[260px]
          w-[150px]
          rotate-[168deg]
          sm:h-[320px]
          sm:w-[185px]
          lg:right-1
        "
      />

      {/* =========================================
          CONTENIDO
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
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
            tracking-[0.42em]
            sm:text-[10px]
            sm:tracking-[0.55em]
          "
          style={{
            color: palette.goldDark,
          }}
        >
          Nuestra historia
        </motion.p>

        {/* SEPARADOR */}

        <div className="mt-6">
          <DecorativeDivider />
        </div>

        {/* COMILLAS */}

        <motion.span
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            mt-10
            block
            font-serif
            text-[70px]
            leading-[0.55]
            sm:text-[90px]
          "
          style={{
            color: palette.goldDark,
          }}
        >
          “
        </motion.span>

        {/* =========================================
            FRASE
        ========================================= */}

        <motion.blockquote
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
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-5
            max-w-3xl
            font-serif
            text-[29px]
            font-normal
            italic
            leading-[1.55]
            tracking-[-0.02em]
            sm:text-[39px]
            sm:leading-[1.5]
            md:text-[45px]
          "
          style={{
            color: palette.ink,
          }}
        >
          “Dos caminos se cruzaron,
          <span className="block">
            dos historias se unieron
          </span>
          <span className="block">
            y dos corazones decidieron
          </span>
          <span className="block">
            caminar juntos”
          </span>
        </motion.blockquote>

        {/* SEPARADOR INFERIOR */}

        <div className="mt-10 sm:mt-12">
          <DecorativeDivider />
        </div>

        {/* NOMBRES */}

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
            delay: 0.3,
          }}
          className="
            mt-7
            font-serif
            text-[15px]
            italic
            tracking-[0.12em]
            sm:text-[17px]
          "
          style={{
            color: palette.goldDark,
          }}
        >
          Danely & Rogelio
        </motion.p>
      </div>
    </motion.section>
  );
}