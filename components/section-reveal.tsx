"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
}

export function SectionReveal({ children }: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={
        prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: 0 }
      }
      viewport={{
        once: true,
        amount: 0.16,
        margin: "0px 0px -64px 0px",
      }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.div>
  );
}