import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================
   CONFIGURACIÓN
========================================= */

const API_URL =
  "https://script.google.com/macros/s/AKfycbwDsjO9UDk4qw2T-7pwPWe1QPEJaNLE3iLVT74d4MkephrN6dEWBRiAi7WRvBWPE36zYQ/exec";

/* =========================================
   PALETA — DANELY & ROGELIO
========================================= */

const palette = {
  ink: "#1F1F1F",
  inkSoft: "#3D3A36",

  champagne: "#D8C3A5",
  champagneLight: "#E8DCCB",
  champagneDark: "#CBB18D",

  ivory: "#F7F2E8",
  ivoryLight: "#FBF8F2",
  ivoryWarm: "#EFE7DA",

  gold: "#B99B73",
  goldDark: "#927451",

  warmGray: "#756E65",

  error: "#8B3A3A",
  success: "#49644D",
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

      <circle
        cx="15"
        cy="15"
        r="2"
        fill="currentColor"
      />
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
        className="h-px w-10 sm:w-16"
        style={{
          backgroundColor: palette.goldDark,
        }}
      />
    </div>
  );
}

/* =========================================
   ICONO SOBRE
========================================= */

function EnvelopeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
      />

      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

/* =========================================
   ICONO CHECK
========================================= */

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

/* =========================================
   OPCIÓN DE ASISTENCIA
========================================= */

function AttendanceOption({
  value,
  selectedValue,
  onChange,
  title,
  description,
}) {
  const isSelected = selectedValue === value;

  return (
    <label
      className="
        relative
        flex
        cursor-pointer
        items-start
        gap-4
        border
        px-5
        py-4
        text-left
        transition
      "
      style={{
        backgroundColor: isSelected
          ? palette.champagneLight
          : palette.ivoryLight,

        borderColor: isSelected
          ? palette.goldDark
          : palette.champagneDark,
      }}
    >
      <input
        type="radio"
        name="asistencia"
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        className="sr-only"
      />

      <span
        className="
          mt-0.5
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-full
          border
        "
        style={{
          borderColor: isSelected
            ? palette.goldDark
            : palette.warmGray,
        }}
      >
        {isSelected && (
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: palette.goldDark,
            }}
          />
        )}
      </span>

      <span>
        <span
          className="
            block
            font-serif
            text-[15px]
            sm:text-base
          "
          style={{
            color: palette.ink,
          }}
        >
          {title}
        </span>

        <span
          className="
            mt-1
            block
            text-[12px]
            leading-5
            sm:text-[13px]
          "
          style={{
            color: palette.warmGray,
          }}
        >
          {description}
        </span>
      </span>
    </label>
  );
}

/* =========================================
   COMPONENTE
========================================= */

const Confirmacion = () => {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  /* =========================================
     AJUSTAR INVITADOS
  ========================================= */

  useEffect(() => {
    if (asistencia === "No podré asistir") {
      setInvitados(0);
      return;
    }

    if (asistencia === "Sí asistiré" && invitados < 1) {
      setInvitados("");
    }
  }, [asistencia, invitados]);

  /* =========================================
     ENVIAR CONFIRMACIÓN A EXCEL
  ========================================= */

  const enviarConfirmacion = async (event) => {
    event.preventDefault();

    if (loading) return;

    /* VALIDAR NOMBRE */

    if (!nombreInvitado.trim()) {
      setError("Escribe tu nombre.");
      return;
    }

    /* VALIDAR ASISTENCIA */

    if (!asistencia) {
      setError("Selecciona si podrás acompañarnos.");
      return;
    }

    /* VALIDAR INVITADOS */

    if (
      asistencia === "Sí asistiré" &&
      (!Number.isInteger(Number(invitados)) ||
        Number(invitados) < 1)
    ) {
      setError(
        "Escribe correctamente el número de personas que asistirán."
      );
      return;
    }

    setError("");
    setEnviado(false);
    setLoading(true);

    /* =========================================
       DATOS QUE RECIBIRÁ EXCEL
    ========================================= */

    const confirmationData = {
      nombre: nombreInvitado.trim(),

      asistencia,

      invitados:
        asistencia === "Sí asistiré"
          ? Number(invitados)
          : 0,

      mensaje: mensajeInvitado.trim(),
    };

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(confirmationData),
      });

      setEnviado(true);

      /* =========================================
         LIMPIAR FORMULARIO
      ========================================= */

      setNombreInvitado("");
      setAsistencia("");
      setInvitados("");
      setMensajeInvitado("");

      window.setTimeout(() => {
        setEnviado(false);
      }, 6000);
    } catch (requestError) {
      console.error(
        "Error enviando la confirmación:",
        requestError
      );

      setError(
        "No pudimos enviar tu confirmación. Intenta nuevamente en unos momentos."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        relative
        flex
        min-h-[820px]
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
        backgroundColor: palette.ivory,
      }}
    >
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
          borderColor: palette.champagneDark,
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
          borderColor: palette.champagneLight,
        }}
      />

      {/* =========================================
          ESQUINAS
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
          RAMAS
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
          text-[#927451]/10
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
          text-[#927451]/10
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
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
          w-full
          max-w-5xl
        "
      >
        {/* =========================================
            ENCABEZADO
        ========================================= */}

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
          "
          initial={{
            opacity: 0,
            y: 16,
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
          }}
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
            "
            style={{
              color: palette.goldDark,
              borderColor: palette.gold,
              backgroundColor: palette.ivoryLight,
            }}
          >
            <EnvelopeIcon />
          </div>

          <p
            className="
              mt-7
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
            Nos encantará contar contigo
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
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.ink,
            }}
          >
            Confirmación de asistencia
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
              color: palette.warmGray,
            }}
          >
            Por favor, confirma tu asistencia y ayúdanos a
            preparar cada detalle de nuestra celebración.
          </p>
        </motion.div>

        {/* =========================================
            FORMULARIO
        ========================================= */}

        <motion.form
          onSubmit={enviarConfirmacion}
          className="
            relative
            mx-auto
            w-full
            max-w-3xl
            border
            px-6
            py-12
            sm:px-10
            sm:py-14
            md:px-14
          "
          style={{
            backgroundColor: palette.ivoryLight,
            borderColor: palette.champagneDark,
            boxShadow:
              "0 24px 65px rgba(31,31,31,0.08)",
          }}
          initial={{
            opacity: 0,
            y: 22,
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
            duration: 0.95,
            delay: 0.12,
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
              borderColor: palette.champagneLight,
            }}
          />

          <div className="relative z-10">
            {/* =========================================
                NOMBRE
            ========================================= */}

            <div>
              <label
                htmlFor="confirmation-name"
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.goldDark,
                }}
              >
                Nombre del invitado
              </label>

              <input
                id="confirmation-name"
                type="text"
                value={nombreInvitado}
                onChange={(event) =>
                  setNombreInvitado(event.target.value)
                }
                placeholder="Nombre y apellido"
                autoComplete="name"
                className="
                  mt-4
                  w-full
                  border
                  bg-[#FBF8F2]
                  px-5
                  py-4
                  font-serif
                  text-base
                  outline-none
                  sm:text-lg
                "
                style={{
                  color: palette.ink,
                  borderColor: palette.champagneDark,
                }}
              />
            </div>

            {/* =========================================
                ASISTENCIA
            ========================================= */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor: palette.champagneDark,
              }}
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.goldDark,
                }}
              >
                ¿Podrás acompañarnos?
              </p>

              <div
                className="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <AttendanceOption
                  value="Sí asistiré"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="Sí asistiré"
                  description="Será un gusto celebrar juntos."
                />

                <AttendanceOption
                  value="No podré asistir"
                  selectedValue={asistencia}
                  onChange={setAsistencia}
                  title="No podré asistir"
                  description="Agradecemos que nos lo hagas saber."
                />
              </div>
            </div>

            {/* =========================================
                NÚMERO DE PERSONAS
            ========================================= */}

            <AnimatePresence>
              {asistencia === "Sí asistiré" && (
                <motion.div
                  className="
                    mt-9
                    overflow-hidden
                    border-t
                    pt-9
                  "
                  style={{
                    borderColor: palette.champagneDark,
                  }}
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                >
                  <label
                    htmlFor="confirmation-guests"
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.34em]
                      sm:text-[9px]
                    "
                    style={{
                      color: palette.goldDark,
                    }}
                  >
                    Número de personas que asistirán
                  </label>

                  <input
                    id="confirmation-guests"
                    type="number"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    value={invitados}
                    onChange={(event) =>
                      setInvitados(
                        Number(event.target.value)
                      )
                    }
                    className="
                      mt-4
                      w-full
                      border
                      bg-[#FBF8F2]
                      px-5
                      py-4
                      text-center
                      font-serif
                      text-lg
                      outline-none
                    "
                    style={{
                      color: palette.ink,
                      borderColor:
                        palette.champagneDark,
                    }}
                  />

                  <p
                    className="
                      mt-3
                      text-center
                      font-serif
                      text-[12px]
                      italic
                      sm:text-[13px]
                    "
                    style={{
                      color: palette.warmGray,
                    }}
                  >
                    Indica cuántas personas asistirán.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =========================================
                MENSAJE
            ========================================= */}

            <div
              className="
                mt-9
                border-t
                pt-9
              "
              style={{
                borderColor: palette.champagneDark,
              }}
            >
              <label
                htmlFor="confirmation-message"
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.34em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.goldDark,
                }}
              >
                Mensaje para los novios
              </label>

              <textarea
                id="confirmation-message"
                value={mensajeInvitado}
                onChange={(event) =>
                  setMensajeInvitado(
                    event.target.value
                  )
                }
                placeholder="Escribe un mensaje especial..."
                rows={5}
                className="
                  mt-4
                  w-full
                  resize-none
                  border
                  bg-[#FBF8F2]
                  px-5
                  py-4
                  font-serif
                  text-base
                  leading-7
                  outline-none
                "
                style={{
                  color: palette.ink,
                  borderColor:
                    palette.champagneDark,
                }}
              />
            </div>

            {/* =========================================
                ERROR
            ========================================= */}

            <AnimatePresence>
              {error && (
                <motion.div
                  className="
                    mt-7
                    border
                    px-5
                    py-4
                    text-center
                  "
                  style={{
                    borderColor:
                      "rgba(139,58,58,0.35)",
                    backgroundColor:
                      "rgba(139,58,58,0.05)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <p
                    className="
                      font-serif
                      text-[13px]
                      sm:text-[14px]
                    "
                    style={{
                      color: palette.error,
                    }}
                  >
                    {error}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =========================================
                CONFIRMACIÓN EXITOSA
            ========================================= */}

            <AnimatePresence>
              {enviado && (
                <motion.div
                  className="
                    mt-7
                    flex
                    flex-col
                    items-center
                    border
                    px-5
                    py-6
                    text-center
                  "
                  style={{
                    borderColor:
                      "rgba(73,100,77,0.35)",
                    backgroundColor:
                      "rgba(73,100,77,0.05)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                    "
                    style={{
                      color: palette.success,
                      borderColor:
                        palette.success,
                    }}
                  >
                    <CheckIcon />
                  </div>

                  <p
                    className="
                      mt-4
                      font-serif
                      text-[17px]
                    "
                    style={{
                      color: palette.success,
                    }}
                  >
                    Confirmación enviada
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[13px]
                      italic
                    "
                    style={{
                      color: palette.warmGray,
                    }}
                  >
                    Gracias por confirmar tu
                    asistencia.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =========================================
                BOTÓN
            ========================================= */}

            <motion.button
              type="submit"
              disabled={loading}
              className="
                mt-9
                flex
                w-full
                items-center
                justify-center
                gap-3
                border
                px-6
                py-4
                disabled:cursor-wait
                disabled:opacity-60
              "
              style={{
                backgroundColor: palette.ink,
                borderColor: palette.ink,
                color: palette.ivory,
              }}
              whileHover={
                !loading
                  ? {
                      y: -2,
                    }
                  : {}
              }
              whileTap={
                !loading
                  ? {
                      scale: 0.985,
                    }
                  : {}
              }
            >
              {loading ? (
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    sm:text-[10px]
                  "
                >
                  Enviando...
                </span>
              ) : (
                <>
                  <CheckIcon />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      sm:text-[10px]
                    "
                  >
                    Confirmar asistencia
                  </span>
                </>
              )}
            </motion.button>

            {/* =========================================
                TEXTO FINAL
            ========================================= */}

            <div className="mt-8">
              <DecorativeDivider />
            </div>

            <p
              className="
                mx-auto
                mt-6
                max-w-md
                text-center
                font-serif
                text-[12px]
                italic
                leading-6
                sm:text-[13px]
              "
              style={{
                color: palette.warmGray,
              }}
            >
              Gracias por tomarte un momento para
              confirmar. Tu respuesta nos ayudará a
              preparar cada detalle de este día tan
              especial.
            </p>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Confirmacion;