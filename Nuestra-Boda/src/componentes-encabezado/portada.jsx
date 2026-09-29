import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "./encabeza-cuenta";

/* =========================================
   PORTADA — DANELY & ROGELIO
========================================= */

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

const transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

/* =========================================
   ORNAMENTO
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 76V25C4 13.4 13.4 4 25 4h51"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M13 64V29c0-8.8 7.2-16 16-16h35"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M25 4c0 11.6-9.4 21-21 21"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <circle
        cx="13"
        cy="13"
        r="1.8"
        fill="currentColor"
      />

      <path
        d="M18 18c10 3 17 10 20 20"
        stroke="currentColor"
        strokeWidth="0.65"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex w-full items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: palette.gold,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: palette.goldDark,
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: palette.gold,
        }}
      />
    </div>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function Portada() {
  const audioRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);
  const [procesandoApertura, setProcesandoApertura] =
    useState(false);

  /* =========================================
     BLOQUEAR SCROLL DURANTE EL SOBRE
  ========================================= */

  useEffect(() => {
    if (!introActiva) return;

    const scrollAnterior = window.scrollY;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      window.scrollTo({
        top: scrollAnterior > 0 ? 0 : scrollAnterior,
        left: 0,
        behavior: "auto",
      });
    };
  }, [introActiva]);

  /* =========================================
     ABRIR INVITACIÓN
  ========================================= */

  const iniciarExperiencia = () => {
    if (procesandoApertura || abrirSobre) return;

    setProcesandoApertura(true);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    setAbrirSobre(true);

    /* REPRODUCIR MÚSICA */

    window.setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.45;

        audioRef.current.play().catch((error) => {
          console.warn(
            "No se pudo reproducir el audio:",
            error
          );
        });
      }
    }, 400);

    /* MOSTRAR INVITACIÓN */

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      setIntroActiva(false);
      setMostrarContenido(true);
      setProcesandoApertura(false);
    }, 1900);
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: palette.ivory,
        color: palette.ink,
      }}
    >
      {/* =========================================
          AUDIO
      ========================================= */}

      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/musica.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* =========================================
          INTRO DEL SOBRE
      ========================================= */}

      <AnimatePresence mode="wait">
        {introActiva && (
          <motion.section
            key="intro-danely-rogelio"
            className="
              fixed
              inset-0
              z-[9999]
              flex
              h-[100dvh]
              w-full
              items-center
              justify-center
              overflow-hidden
              overscroll-none
              px-4
              py-3
              sm:px-8
              lg:px-12
            "
            style={{
              backgroundColor: palette.ivory,
              touchAction: "none",
            }}
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.01,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* MARCO EXTERIOR */}

            <div
              className="
                pointer-events-none
                absolute
                inset-4
                border
                sm:inset-7
                lg:inset-9
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
                inset-[21px]
                border
                sm:inset-[34px]
                lg:inset-[42px]
              "
              style={{
                borderColor: palette.champagneLight,
              }}
            />

            {/* ORNAMENTOS */}

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                left-5
                top-5
                h-16
                w-16
                text-[#B99B73]
                sm:left-8
                sm:top-8
                sm:h-20
                sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                right-5
                top-5
                h-16
                w-16
                rotate-90
                text-[#B99B73]
                sm:right-8
                sm:top-8
                sm:h-20
                sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                bottom-5
                left-5
                h-16
                w-16
                -rotate-90
                text-[#B99B73]
                sm:bottom-8
                sm:left-8
                sm:h-20
                sm:w-20
              "
            />

            <CornerOrnament
              className="
                pointer-events-none
                absolute
                bottom-5
                right-5
                h-16
                w-16
                rotate-180
                text-[#B99B73]
                sm:bottom-8
                sm:right-8
                sm:h-20
                sm:w-20
              "
            />

            {/* =========================================
                CONTENIDO INTRO
            ========================================= */}

            <div
              className="
                relative
                z-10
                mx-auto
                grid
                w-full
                max-w-6xl
                items-center
                gap-4
                sm:gap-8
                lg:grid-cols-[0.95fr_1.05fr]
                lg:gap-16
                xl:gap-24
              "
            >
              {/* =========================================
                  PRESENTACIÓN
              ========================================= */}

              <motion.div
                className="
                  order-1
                  flex
                  flex-col
                  items-center
                  text-center
                  lg:items-start
                  lg:text-left
                "
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  ...transition,
                  delay: 0.1,
                }}
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.42em]
                    sm:text-[10px]
                  "
                  style={{
                    color: palette.goldDark,
                  }}
                >
                  Invitación de boda
                </p>

                <div
                  className="
                    mt-3
                    h-px
                    w-16
                    sm:mt-6
                    lg:w-20
                  "
                  style={{
                    backgroundColor: palette.gold,
                  }}
                />

                <p
                  className="
                    mt-3
                    font-serif
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    sm:mt-7
                    sm:text-sm
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  Junto con nuestras familias
                </p>

                {/* DANELY */}

                <h1
                  className="
                    mt-3
                    font-serif
                    text-[34px]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.025em]
                    sm:mt-6
                    sm:text-[60px]
                    md:text-[68px]
                    lg:text-[62px]
                    xl:text-[76px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  Danely
                </h1>

                <span
                  className="
                    my-1
                    font-cursiveDancing
                    text-2xl
                    sm:my-2
                    sm:text-4xl
                  "
                  style={{
                    color: palette.gold,
                  }}
                >
                  &
                </span>

                {/* ROGELIO */}

                <h1
                  className="
                    font-serif
                    text-[34px]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.025em]
                    sm:text-[60px]
                    md:text-[68px]
                    lg:text-[62px]
                    xl:text-[76px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                >
                  Rogelio
                </h1>

                <div className="mt-4 w-full max-w-[220px] sm:mt-8 sm:max-w-[260px]">
                  <DecorativeDivider />
                </div>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[10px]
                    uppercase
                    tracking-[0.32em]
                    sm:mt-6
                    sm:text-sm
                  "
                  style={{
                    color: palette.inkSoft,
                  }}
                >
                  14 · Noviembre · 2026
                </p>

                <p
                  className="
                    mt-3
                    max-w-md
                    font-serif
                    text-[12px]
                    italic
                    leading-5
                    sm:mt-5
                    sm:text-base
                    sm:leading-7
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                >
                  Hay momentos que cambian nuestra historia para
                  siempre. Queremos compartir este con ustedes.
                </p>
              </motion.div>

              {/* =========================================
                  SOBRE
              ========================================= */}

              <motion.div
                className="
                  order-2
                  flex
                  w-full
                  flex-col
                  items-center
                  justify-center
                "
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  ...transition,
                  delay: 0.25,
                }}
              >
                <div
                  onClick={iniciarExperiencia}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      iniciarExperiencia();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Abrir invitación"
                  className="
                    group
                    relative
                    aspect-[350/235]
                    w-[76vw]
                    max-w-[300px]
                    cursor-pointer
                    outline-none
                    sm:w-[88vw]
                    sm:max-w-[420px]
                    lg:w-full
                    lg:max-w-[430px]
                  "
                  style={{
                    perspective: 2200,
                  }}
                >
                  {/* =========================================
                      SOMBRA DEL SOBRE
                  ========================================= */}

                  <div
                    className="
                      absolute
                      -bottom-7
                      left-1/2
                      h-12
                      w-[72%]
                      -translate-x-1/2
                      rounded-full
                      bg-black/15
                      blur-2xl
                    "
                  />

                  {/* =========================================
                      CARTA INTERIOR
                  ========================================= */}

                  <motion.div
                    className="
                      absolute
                      left-1/2
                      top-[9%]
                      z-10
                      flex
                      h-[78%]
                      w-[82%]
                      -translate-x-1/2
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      border
                      px-5
                      py-5
                      text-center
                    "
                    style={{
                      backgroundColor: palette.ivory,
                      borderColor: palette.gold,
                      boxShadow:
                        "0 14px 30px rgba(31,31,31,0.13)",
                    }}
                    animate={
                      abrirSobre
                        ? {
                            y: -82,
                            scale: 1.015,
                          }
                        : {
                            y: 0,
                            scale: 1,
                          }
                    }
                    transition={{
                      duration: 1.15,
                      delay: abrirSobre ? 0.3 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <CornerOrnament
                      className="
                        absolute
                        left-2
                        top-2
                        h-10
                        w-10
                        text-[#B99B73]
                      "
                    />

                    <CornerOrnament
                      className="
                        absolute
                        bottom-2
                        right-2
                        h-10
                        w-10
                        rotate-180
                        text-[#B99B73]
                      "
                    />

                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.38em]
                        sm:text-[8px]
                      "
                      style={{
                        color: palette.goldDark,
                      }}
                    >
                      Nuestra boda
                    </p>

                    <div
                      className="my-4 h-px w-12"
                      style={{
                        backgroundColor: palette.gold,
                      }}
                    />

                    <p
                      className="
                        font-serif
                        text-[18px]
                        leading-none
                        sm:text-[24px]
                      "
                      style={{
                        color: palette.ink,
                      }}
                    >
                      Danely
                    </p>

                    <span
                      className="
                        my-1
                        font-cursiveDancing
                        text-lg
                        sm:text-xl
                      "
                      style={{
                        color: palette.gold,
                      }}
                    >
                      &
                    </span>

                    <p
                      className="
                        font-serif
                        text-[18px]
                        leading-none
                        sm:text-[24px]
                      "
                      style={{
                        color: palette.ink,
                      }}
                    >
                      Rogelio
                    </p>

                    <p
                      className="
                        mt-4
                        text-[7px]
                        uppercase
                        tracking-[0.3em]
                        sm:text-[8px]
                      "
                      style={{
                        color: palette.warmGray,
                      }}
                    >
                      14 · 11 · 2026
                    </p>
                  </motion.div>

                  {/* =========================================
                      CUERPO TRASERO DEL SOBRE
                  ========================================= */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-0
                      h-[86%]
                      overflow-hidden
                      border
                    "
                    style={{
                      backgroundColor: palette.champagneLight,
                      borderColor: palette.gold,
                      boxShadow:
                        "0 18px 36px rgba(31,31,31,0.16)",
                    }}
                  >
                    {/* DOBLECES */}

                    <div
                      className="
                        absolute
                        inset-0
                      "
                      style={{
                        clipPath:
                          "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)",
                        backgroundColor: palette.champagne,
                      }}
                    />

                    <div
                      className="
                        absolute
                        inset-0
                      "
                      style={{
                        clipPath:
                          "polygon(0 100%, 0 25%, 50% 68%, 100% 25%, 100% 100%)",
                        backgroundColor: palette.champagneLight,
                      }}
                    />
                  </div>

                  {/* =========================================
                      SOLAPA SUPERIOR
                  ========================================= */}

                  <motion.div
                    className="
                      absolute
                      left-0
                      top-[14%]
                      z-20
                      h-[50%]
                      w-full
                      origin-top
                    "
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 50% 100%)",
                      backgroundColor: palette.champagne,
                      borderTop: `1px solid ${palette.gold}`,
                      backfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                      boxShadow:
                        "0 13px 24px rgba(31,31,31,0.12)",
                    }}
                    animate={
                      abrirSobre
                        ? {
                            rotateX: -182,
                            y: -3,
                          }
                        : {
                            rotateX: 0,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* =========================================
                      SELLO
                  ========================================= */}

                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-30
                      flex
                      items-center
                      justify-center
                    "
                    animate={
                      abrirSobre
                        ? {
                            scale: 0.7,
                            opacity: 0,
                            y: -16,
                          }
                        : {
                            scale: 1,
                            opacity: 1,
                            y: 0,
                          }
                    }
                    transition={{
                      duration: 0.55,
                    }}
                  >
                    <div
                      className="
                        relative
                        flex
                        h-[72px]
                        w-[72px]
                        items-center
                        justify-center
                        rounded-full
                        sm:h-[86px]
                        sm:w-[86px]
                      "
                      style={{
                        backgroundColor: palette.gold,
                        boxShadow:
                          "0 10px 18px rgba(31,31,31,0.17)",
                      }}
                    >
                      <div
                        className="
                          absolute
                          inset-[7px]
                          rounded-full
                          border
                        "
                        style={{
                          borderColor: palette.ivory,
                        }}
                      />

                      <div
                        className="
                          relative
                          z-10
                          font-serif
                          text-lg
                          italic
                          sm:text-2xl
                        "
                        style={{
                          color: palette.ivory,
                        }}
                      >
                        D
                        <span className="mx-1 text-[11px] sm:text-sm">
                          &
                        </span>
                        R
                      </div>
                    </div>
                  </motion.div>

                  {/* =========================================
                      TEXTO ABRIR
                  ========================================= */}

                  <motion.p
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-4
                      z-40
                      text-center
                      text-[8px]
                      uppercase
                      tracking-[0.4em]
                      sm:text-[9px]
                    "
                    style={{
                      color: palette.inkSoft,
                    }}
                    animate={{
                      opacity: abrirSobre ? 0 : 0.75,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    Abrir
                  </motion.p>
                </div>

                {/* =========================================
                    INDICACIÓN
                ========================================= */}

                <motion.p
                  className="
                    mt-5
                    text-center
                    text-[8px]
                    uppercase
                    tracking-[0.28em]
                    sm:mt-7
                    sm:text-[10px]
                  "
                  style={{
                    color: palette.warmGray,
                  }}
                  animate={{
                    opacity: abrirSobre ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  Toca el sobre para comenzar
                </motion.p>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* =========================================
          PORTADA PRINCIPAL
      ========================================= */}

      <section
        className="
          relative
          min-h-[100dvh]
          w-full
          overflow-hidden
        "
        style={{
          backgroundColor: palette.ink,
        }}
      >
        {/* =========================================
            IMAGEN PRINCIPAL
        ========================================= */}

        <motion.img
          src="/portada.jpg"
          alt="Danely y Rogelio"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[center_15%]
          "
          initial={{
            opacity: 0,
            scale: 1.035,
          }}
          animate={
            mostrarContenido
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  scale: 1.035,
                }
          }
          transition={{
            opacity: {
              duration: 1.2,
            },

            scale: {
              duration: 7,
              ease: "easeOut",
            },
          }}
        />

        {/* =========================================
            CAPA OSCURA
        ========================================= */}

        <motion.div
          className="
            absolute
            inset-0
            bg-black/35
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1,
          }}
        />

        {/* =========================================
            MARCO
        ========================================= */}

        <motion.div
          className="
            pointer-events-none
            absolute
            inset-4
            z-10
            border
            sm:inset-7
            lg:inset-9
          "
          style={{
            borderColor: palette.ivory,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: mostrarContenido ? 0.45 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
          }}
        />

        {/* =========================================
            CONTENIDO
        ========================================= */}

        <motion.div
          className="
            relative
            z-20
            flex
            min-h-[100dvh]
            w-full
            flex-col
            items-center
            justify-start
            px-5
            pb-5
            pt-8
            text-center
            sm:px-12
            sm:pt-16
            lg:px-16
            lg:pt-20
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: mostrarContenido ? 1 : 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          {/* LÍNEA SUPERIOR */}

          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: -12,
                  }
            }
            transition={{
              ...transition,
              delay: 0.5,
            }}
          >
            <div
              className="
                mx-auto
                mt-2
                h-px
                w-14
                sm:mt-4
              "
              style={{
                backgroundColor: palette.ivory,
              }}
            />
          </motion.div>

          {/* =========================================
              NOMBRES
          ========================================= */}

          <motion.div
            className="
              flex
              max-w-4xl
              flex-col
              items-center
            "
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            transition={{
              duration: 1.1,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1
              className="
                font-serif
                text-[40px]
                font-normal
                leading-[0.9]
                tracking-[-0.035em]
                text-[#F7F2E8]
                sm:text-[72px]
                md:text-[88px]
                lg:text-[104px]
              "
              style={{
                textShadow:
                  "0 4px 24px rgba(0,0,0,0.32)",
              }}
            >
              Danely
            </h1>

            <div className="my-2 flex items-center gap-3 sm:my-4 sm:gap-6">
              <span
                className="h-px w-12 sm:w-20"
                style={{
                  backgroundColor: palette.champagne,
                }}
              />

              <span
                className="
                  font-cursiveDancing
                  text-2xl
                  text-[#D8C3A5]
                  sm:text-4xl
                "
              >
                &
              </span>

              <span
                className="h-px w-12 sm:w-20"
                style={{
                  backgroundColor: palette.champagne,
                }}
              />
            </div>

            <h1
              className="
                font-serif
                text-[40px]
                font-normal
                leading-[0.9]
                tracking-[-0.035em]
                text-[#F7F2E8]
                sm:text-[72px]
                md:text-[88px]
                lg:text-[104px]
              "
              style={{
                textShadow:
                  "0 4px 24px rgba(0,0,0,0.32)",
              }}
            >
              Rogelio
            </h1>
          </motion.div>

          {/* =========================================
              CONTADOR
          ========================================= */}

          <motion.div
            className="
              mt-auto
              w-full
              max-w-4xl
              pb-1
              pt-3
              sm:pb-4
              sm:pt-6
            "
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={
              mostrarContenido
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            transition={{
              duration: 1,
              delay: 0.9,
            }}
          >
            <Countdown targetDate="2026-11-14T13:00:00" />

            {/* DESLIZA */}

            <motion.div
              className="
                mt-4
                flex
                flex-col
                items-center
                sm:mt-10
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: mostrarContenido ? 1 : 0,
              }}
              transition={{
                duration: 1,
                delay: 1.1,
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.38em]
                  text-[#F7F2E8]/70
                  sm:text-[9px]
                "
              >
                Desliza para continuar
              </p>

              <div
                className="
                  mt-2
                  h-6
                  w-px
                  overflow-hidden
                  bg-[#F7F2E8]/30
                  sm:mt-4
                  sm:h-9
                "
              >
                <motion.span
                  className="
                    block
                    h-4
                    w-px
                    bg-[#F7F2E8]/80
                  "
                  animate={{
                    y: [-16, 36],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.25,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}