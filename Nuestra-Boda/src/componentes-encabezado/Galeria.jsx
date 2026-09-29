import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* =========================================
   GALERÍA — DANELY & ROGELIO
========================================= */

const palette = {
  ink: "#1F1F1F",
  inkSoft: "#3D3A36",

  champagne: "#D8C3A5",
  champagneLight: "#E8DCCB",
  champagneDark: "#CBB18D",

  ivory: "#F7F2E8",
  ivoryLight: "#FBF8F2",

  gold: "#B99B73",
  goldDark: "#927451",
  warmGray: "#756E65",
};

/* =========================================
   IMÁGENES
========================================= */

const images = [
  "/Carrusel01v.jpeg",
  "/Carrusel02.jpeg",
  "/Carrusel03.jpeg",
];


const imagePositions = [
  "center 50%", // Carrusel01v.jpeg
  "center 20%", // Carrusel02.jpeg
  "center 20%", // Carrusel03.jpeg
];

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

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-10 sm:w-16"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(146,116,81,0.8))",
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: "rgba(146,116,81,0.8)",
        }}
      />

      <span
        className="h-px w-10 sm:w-16"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(146,116,81,0.8))",
        }}
      />
    </div>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const totalImages = images.length;

  /* =========================================
     PRECARGA DE TODAS LAS IMÁGENES
  ========================================= */

  useEffect(() => {
    let cancelled = false;

    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map(
            (src) =>
              new Promise((resolve) => {
                const img = new Image();

                img.src = src;

                if (img.complete) {
                  resolve();
                  return;
                }

                img.onload = resolve;
                img.onerror = resolve;
              })
          )
        );

        if (!cancelled) {
          setImagesLoaded(true);
        }
      } catch (error) {
        console.error("Error precargando la galería:", error);

        if (!cancelled) {
          setImagesLoaded(true);
        }
      }
    };

    preloadImages();

    return () => {
      cancelled = true;
    };
  }, []);

  /* =========================================
     CAMBIO AUTOMÁTICO CADA 4.5 SEGUNDOS
  ========================================= */

  useEffect(() => {
    if (!imagesLoaded || isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setDirection(1);

      setIndex((previousIndex) => {
        return (previousIndex + 1) % totalImages;
      });
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [imagesLoaded, isPaused, totalImages]);

  /* =========================================
     SIGUIENTE
  ========================================= */

  const nextImage = () => {
    if (!imagesLoaded) return;

    setDirection(1);

    setIndex((previousIndex) => {
      return (previousIndex + 1) % totalImages;
    });
  };

  /* =========================================
     ANTERIOR
  ========================================= */

  const previousImage = () => {
    if (!imagesLoaded) return;

    setDirection(-1);

    setIndex((previousIndex) => {
      return previousIndex === 0
        ? totalImages - 1
        : previousIndex - 1;
    });
  };

  /* =========================================
     IR A UNA FOTO
  ========================================= */

  const goToImage = (imageIndex) => {
    if (!imagesLoaded || imageIndex === index) return;

    setDirection(imageIndex > index ? 1 : -1);
    setIndex(imageIndex);
  };

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
        w-full
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
            ${palette.champagneLight} 0%,
            ${palette.champagne} 52%,
            ${palette.champagneDark} 100%
          )
        `,
      }}
    >
      {/* =========================================
          TEXTURA
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.13]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(80,60,40,0.035) 0px,
              rgba(80,60,40,0.035) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* =========================================
          LUZ CENTRAL
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[75%]
          w-[85%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(247,242,232,0.34), transparent 68%)",
        }}
      />

      {/* =========================================
          MARCOS
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
          borderColor: "rgba(146,116,81,0.30)",
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
          borderColor: "rgba(247,242,232,0.28)",
        }}
      />

      {/* =========================================
          ORNAMENTOS
      ========================================= */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#927451]/30
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
          text-[#927451]/30
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
          text-[#927451]/30
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
          text-[#927451]/30
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* =========================================
          BOTÁNICOS
      ========================================= */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#927451]/12
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
          text-[#927451]/12
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
        "
      />

      {/* =========================================
          CONTENIDO
      ========================================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-12
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
            lg:mb-20
          "
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
          }}
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
              color: palette.goldDark,
            }}
          >
            Nuestros momentos
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              font-serif
              text-[40px]
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
            Nuestra historia
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.inkSoft,
            }}
          >
            Un recorrido por los instantes que han dado forma a nuestra
            historia y que hoy nos conducen hasta este día.
          </p>
        </motion.div>

        {/* =========================================
            CARRUSEL
        ========================================= */}

        <motion.div
          className="
            relative
            mx-auto
            w-full
            max-w-6xl
          "
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* MARCO DEL CARRUSEL */}

          <div
            className="
              relative
              border
              p-3
              sm:p-5
              lg:p-7
            "
            style={{
              backgroundColor: palette.ivoryLight,
              borderColor: "rgba(146,116,81,0.36)",
              boxShadow: "0 24px 65px rgba(31,31,31,0.12)",
            }}
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-[7px]
                border
              "
              style={{
                borderColor: "rgba(185,155,115,0.16)",
              }}
            />

            {/* =========================================
                CONTENEDOR DE LA FOTO
            ========================================= */}

            <div
              className="
                relative
                h-[590px]
                overflow-hidden
                sm:h-[740px]
                md:h-[820px]
                lg:h-[880px]
              "
              style={{
                backgroundColor: palette.champagne,
              }}
            >
              {/* =========================================
                  IMAGEN BASE

                  Siempre queda una imagen debajo para
                  evitar espacios blancos al cambiar.
              ========================================= */}

              <img
                src={images[index]}
                alt=""
                aria-hidden="true"
                draggable="false"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
                style={{
                  objectPosition: imagePositions[index],
                }}
              />

              {/* =========================================
                  IMAGEN ANIMADA
              ========================================= */}

              <AnimatePresence
                initial={false}
                custom={direction}
              >
                <motion.img
                  key={`${images[index]}-${index}`}
                  custom={direction}
                  src={images[index]}
                  alt={`Momento ${index + 1} de ${totalImages}`}
                  draggable="false"
                  className="
                    absolute
                    inset-0
                    z-10
                    h-full
                    w-full
                    object-cover
                  "
                  style={{
                    objectPosition: imagePositions[index],
                  }}
                  initial={{
                    opacity: 0,
                    scale: 1.018,
                    x: direction > 0 ? 14 : -14,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.008,
                    x: direction > 0 ? -10 : 10,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.55,
                    },

                    scale: {
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    },

                    x: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                />
              </AnimatePresence>

              {/* OVERLAY */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                "
                style={{
                  background: `
                    linear-gradient(
                      180deg,
                      transparent 62%,
                      rgba(20,20,20,0.20) 100%
                    )
                  `,
                }}
              />

              {/* NÚMERO DE FOTO */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  z-30
                  border
                  bg-[#FBF8F2]/90
                  px-4
                  py-2
                  backdrop-blur-sm
                  sm:bottom-6
                  sm:left-6
                "
                style={{
                  borderColor: "rgba(185,155,115,0.38)",
                }}
              >
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    sm:text-[9px]
                  "
                  style={{
                    color: palette.inkSoft,
                  }}
                >
                  Fotografía {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            </div>

            {/* =========================================
                CONTROLES
                FUERA Y DEBAJO DE LA FOTO
            ========================================= */}

            <div
              className="
                relative
                flex
                flex-col
                items-center
                px-3
                pb-4
                pt-7
                sm:px-8
                sm:pb-6
                sm:pt-9
              "
            >
              {/* FLECHAS + CONTADOR */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-5
                "
              >
                {/* ANTERIOR */}

                <motion.button
                  type="button"
                  onClick={previousImage}
                  disabled={!imagesLoaded}
                  aria-label="Mostrar fotografía anterior"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    disabled:cursor-wait
                    disabled:opacity-40
                    sm:h-14
                    sm:w-14
                  "
                  style={{
                    borderColor: "rgba(146,116,81,0.48)",
                    backgroundColor: palette.ivoryLight,
                    color: palette.ink,
                    boxShadow:
                      "0 8px 20px rgba(31,31,31,0.08)",
                  }}
                  whileHover={
                    imagesLoaded
                      ? {
                          y: -2,
                          scale: 1.04,
                        }
                      : {}
                  }
                  whileTap={
                    imagesLoaded
                      ? {
                          scale: 0.96,
                        }
                      : {}
                  }
                >
                  <ChevronLeft
                    className="h-5 w-5"
                    strokeWidth={1.4}
                  />
                </motion.button>

                {/* CONTADOR */}

                <motion.p
                  key={`counter-${index}`}
                  className="
                    min-w-[80px]
                    text-center
                    font-serif
                    text-[22px]
                    sm:text-[26px]
                  "
                  style={{
                    color: palette.ink,
                  }}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}

                  <span
                    className="mx-2 text-sm"
                    style={{
                      color: palette.warmGray,
                    }}
                  >
                    /
                  </span>

                  <span
                    className="text-base sm:text-lg"
                    style={{
                      color: palette.warmGray,
                    }}
                  >
                    {String(totalImages).padStart(2, "0")}
                  </span>
                </motion.p>

                {/* SIGUIENTE */}

                <motion.button
                  type="button"
                  onClick={nextImage}
                  disabled={!imagesLoaded}
                  aria-label="Mostrar siguiente fotografía"
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    disabled:cursor-wait
                    disabled:opacity-40
                    sm:h-14
                    sm:w-14
                  "
                  style={{
                    borderColor: "rgba(146,116,81,0.48)",
                    backgroundColor: palette.ivoryLight,
                    color: palette.ink,
                    boxShadow:
                      "0 8px 20px rgba(31,31,31,0.08)",
                  }}
                  whileHover={
                    imagesLoaded
                      ? {
                          y: -2,
                          scale: 1.04,
                        }
                      : {}
                  }
                  whileTap={
                    imagesLoaded
                      ? {
                          scale: 0.96,
                        }
                      : {}
                  }
                >
                  <ChevronRight
                    className="h-5 w-5"
                    strokeWidth={1.4}
                  />
                </motion.button>
              </div>

              {/* =========================================
                  INDICADORES
              ========================================= */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                {images.map((_, imageIndex) => {
                  const isActive = index === imageIndex;

                  return (
                    <motion.button
                      key={`indicator-${imageIndex}`}
                      type="button"
                      onClick={() => goToImage(imageIndex)}
                      disabled={!imagesLoaded}
                      aria-label={`Mostrar fotografía ${
                        imageIndex + 1
                      }`}
                      aria-current={
                        isActive ? "true" : undefined
                      }
                      className="
                        h-[7px]
                        border
                        disabled:cursor-wait
                      "
                      animate={{
                        width: isActive ? 32 : 7,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        backgroundColor: isActive
                          ? palette.ink
                          : "transparent",

                        borderColor: isActive
                          ? palette.ink
                          : "rgba(146,116,81,0.5)",
                      }}
                    />
                  );
                })}
              </div>

              {/* TEXTO */}

              <p
                className="
                  mt-5
                  text-[8px]
                  uppercase
                  tracking-[0.32em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.warmGray,
                }}
              >
                {imagesLoaded
                  ? "La galería avanza automáticamente"
                  : "Preparando fotografías"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            CIERRE
        ========================================= */}

        <motion.div
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            sm:mt-14
          "
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
        >
          <div
            className="
              mx-auto
              mb-6
              h-px
              w-16
            "
            style={{
              backgroundColor:
                "rgba(146,116,81,0.52)",
            }}
          />

          <p
            className="
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
            "
            style={{
              color: palette.inkSoft,
            }}
          >
            Cada fotografía guarda un instante de nuestro camino y una parte
            de la historia que hoy celebramos.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
