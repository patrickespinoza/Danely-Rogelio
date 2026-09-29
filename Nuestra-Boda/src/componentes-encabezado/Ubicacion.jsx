import { motion } from "framer-motion";
import { Church, MapPin, PartyPopper } from "lucide-react";

/* =========================================
   EVENTO Y DIRECCIÓN — DANELY & ROGELIO
========================================= */

const palette = {
  ink: "#1F1F1F",
  inkSoft: "#3D3A36",
  paper: "#F7F2E8",
  paperLight: "#FBF8F2",
  paperDark: "#EFE7DA",
  antiqueGold: "#B99B73",
  antiqueGoldDark: "#927451",
  warmGray: "#777168",
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   ORNAMENTO DE ESQUINA
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 85V30C5 16.2 16.2 5 30 5h55"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M15 72V34c0-10.5 8.5-19 19-19h38"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M30 5C30 18.8 18.8 30 5 30"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <circle cx="15" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}

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

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(185,155,115,0.75))",
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: "rgba(185,155,115,0.75)",
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(185,155,115,0.75))",
        }}
      />
    </div>
  );
}

/* =========================================
   BOTÓN DE UBICACIÓN
========================================= */

function LocationButton({ href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        mt-8
        inline-flex
        min-w-[220px]
        items-center
        justify-center
        gap-3
        border
        px-7
        py-4
        sm:min-w-[235px]
        sm:px-9
      "
      style={{
        backgroundColor: palette.ink,
        borderColor: palette.ink,
        color: palette.paperLight,
        boxShadow: "0 12px 28px rgba(31,31,31,0.12)",
      }}
      whileHover={{
        y: -2,
        backgroundColor: palette.inkSoft,
        transition: {
          duration: 0.25,
        },
      }}
      whileTap={{
        scale: 0.985,
      }}
    >
      <MapPin className="h-4 w-4" strokeWidth={1.5} />

      <span
        className="
          text-[9px]
          uppercase
          tracking-[0.25em]
          sm:text-[10px]
        "
      >
        {label}
      </span>
    </motion.a>
  );
}

/* =========================================
   TARJETA DE LUGAR
========================================= */

function LugarCard({
  tipo,
  nombre,
  hora,
  direccion,
  mapa,
  icono: Icono,
  delay = 0,
}) {
  return (
    <motion.div
      className="
        relative
        flex
        h-full
        flex-col
        items-center
        overflow-hidden
        border
        px-6
        py-12
        text-center
        sm:px-10
        sm:py-14
        lg:px-12
      "
      style={{
        backgroundColor: "rgba(251,248,242,0.84)",
        borderColor: "rgba(185,155,115,0.32)",
        boxShadow: "0 20px 50px rgba(31,31,31,0.06)",
      }}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* BORDE INTERIOR */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[7px]
          border
        "
        style={{
          borderColor: "rgba(185,155,115,0.12)",
        }}
      />

      {/* ÍCONO */}

      <motion.div
        className="
          relative
          flex
          h-[72px]
          w-[72px]
          items-center
          justify-center
          rounded-full
          border
          sm:h-[82px]
          sm:w-[82px]
        "
        style={{
          color: palette.antiqueGoldDark,
          borderColor: "rgba(185,155,115,0.42)",
          backgroundColor: "rgba(247,242,232,0.65)",
        }}
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
          delay: delay + 0.15,
        }}
      >
        <Icono
          className="h-8 w-8 sm:h-9 sm:w-9"
          strokeWidth={1.15}
        />
      </motion.div>

      {/* TIPO */}

      <p
        className="
          mt-7
          text-[9px]
          uppercase
          tracking-[0.42em]
          sm:text-[10px]
          sm:tracking-[0.5em]
        "
        style={{
          color: palette.antiqueGoldDark,
        }}
      >
        {tipo}
      </p>

      {/* NOMBRE */}

      <h3
        className="
          mt-5
          max-w-md
          font-serif
          text-[29px]
          font-normal
          leading-tight
          tracking-[-0.02em]
          sm:text-[36px]
        "
        style={{
          color: palette.ink,
        }}
      >
        {nombre}
      </h3>

      <div className="my-7">
        <DecorativeDivider compact />
      </div>

      {/* HORA */}

      <p
        className="
          text-[8px]
          uppercase
          tracking-[0.34em]
        "
        style={{
          color: palette.warmGray,
        }}
      >
        Hora
      </p>

      <p
        className="
          mt-2
          font-serif
          text-[38px]
          leading-none
          sm:text-[44px]
        "
        style={{
          color: palette.ink,
        }}
      >
        {hora}
      </p>

      <p
        className="
          mt-2
          text-[8px]
          uppercase
          tracking-[0.38em]
        "
        style={{
          color: palette.antiqueGoldDark,
        }}
      >
        Horas
      </p>

      {/* DIRECCIÓN */}

      <div className="mt-8 max-w-md">
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.34em]
          "
          style={{
            color: palette.warmGray,
          }}
        >
          Dirección
        </p>

        <p
          className="
            mt-3
            font-serif
            text-[15px]
            leading-7
            sm:text-base
          "
          style={{
            color: palette.inkSoft,
          }}
        >
          {direccion}
        </p>
      </div>

      <LocationButton
        href={mapa}
        label="Ver ubicación"
      />
    </motion.div>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function EventoDireccion() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="
        relative
        flex
        min-h-[760px]
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            180deg,
            ${palette.paperLight} 0%,
            ${palette.paper} 58%,
            ${palette.paperDark} 100%
          )
        `,
      }}
    >
      {/* TEXTURA */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(31,31,31,0.025) 0px,
              rgba(31,31,31,0.025) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* MARCOS */}

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
          borderColor: "rgba(185,155,115,0.25)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[26px]
          border
          sm:inset-[38px]
          lg:inset-[46px]
        "
        style={{
          borderColor: "rgba(185,155,115,0.1)",
        }}
      />

      {/* ESQUINAS */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#B99B73]/25
          sm:left-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          right-6
          top-6
          h-16
          w-16
          rotate-90
          text-[#B99B73]/25
          sm:right-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          left-6
          h-16
          w-16
          -rotate-90
          text-[#B99B73]/25
          sm:bottom-9
          sm:left-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          right-6
          h-16
          w-16
          rotate-180
          text-[#B99B73]/25
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* BOTÁNICOS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#B99B73]/10
          sm:h-[310px]
          sm:w-[180px]
          lg:left-2
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-8
          -top-16
          h-[250px]
          w-[145px]
          rotate-[168deg]
          text-[#B99B73]/10
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-16
          "
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
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.44em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Nuestra celebración
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              font-serif
              text-[39px]
              font-normal
              leading-tight
              tracking-[-0.02em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Un día para recordar
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.warmGray,
            }}
          >
            Nos hará muy felices compartir con ustedes el comienzo de este
            nuevo capítulo.
          </p>
        </motion.div>

        {/* FECHA */}

        <motion.div
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-16
          "
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
            delay: 0.1,
          }}
        >
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.4em]
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Reserve la fecha
          </p>

          <p
            className="
              mt-5
              font-serif
              text-lg
              uppercase
              tracking-[0.18em]
              sm:text-xl
            "
            style={{
              color: palette.inkSoft,
            }}
          >
            Sábado
          </p>

          <p
            className="
              my-2
              font-serif
              text-[88px]
              leading-none
              tracking-[-0.06em]
              sm:text-[110px]
            "
            style={{
              color: palette.ink,
            }}
          >
            14
          </p>

          <p
            className="
              font-serif
              text-[12px]
              uppercase
              tracking-[0.38em]
              sm:text-sm
            "
            style={{
              color: palette.antiqueGoldDark,
            }}
          >
            Noviembre · 2026
          </p>
        </motion.div>

        {/* CEREMONIA + RECEPCIÓN */}

        <div
          className="
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
            lg:gap-9
          "
        >
          <LugarCard
            tipo="Ceremonia religiosa"
            nombre="Parroquia del Perpetuo Socorro"
            hora="13:00"
            direccion="5 de Febrero SN, Anáhuac, 58630 Zacapu, Mich."
            mapa="https://maps.app.goo.gl/5ccqUCTaWdDG8GNYA"
            icono={Church}
            delay={0.15}
          />

          <LugarCard
            tipo="Recepción"
            nombre="Salón San Rafael"
            hora="15:00"
            direccion="Ing. Elider Sánchez Aguilar, Nueva Ejidal, 58635 Zacapu, Mich."
            mapa="https://maps.app.goo.gl/ZmRbE9B3UzRfrHjQ6"
            icono={PartyPopper}
            delay={0.25}
          />
        </div>

        {/* CIERRE */}

        <motion.p
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            font-serif
            text-[14px]
            italic
            leading-7
            sm:mt-14
            sm:text-base
          "
          style={{
            color: palette.warmGray,
          }}
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
        >
          Esperamos contar con su presencia en un día que guardaremos para
          siempre en nuestra memoria.
        </motion.p>
      </div>
    </motion.section>
  );
}