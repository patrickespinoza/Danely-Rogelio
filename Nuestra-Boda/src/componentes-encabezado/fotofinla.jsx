import React from "react";
import { motion } from "framer-motion";

export default function ImagenPantallaCompleta() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      {/* IMAGEN A PANTALLA COMPLETA */}

      <motion.img
        src="/final.jpg"
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
        initial={{
          opacity: 0,
          scale: 1.03,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* INICIALES EN LA PARTE INFERIOR */}

      <motion.div
        className="
          absolute
          bottom-5
          left-0
          z-10
          w-full
          text-center
          sm:bottom-8
        "
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p
          className="
            font-cursiveDancing
            text-[32px]
            font-normal
            tracking-[0.08em]
            sm:text-[42px]
            md:text-[48px]
          "
          style={{
            color: "#F7F2E8",
            textShadow: "0 2px 10px rgba(0,0,0,0.45)",
          }}
        >
          D & R
        </p>
      </motion.div>
    </section>
  );
}