"use client";

import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

export interface ScaleInProps extends PropsWithChildren {
  delay?: number;
  duration?: number;
  scale?: number;
  className?: string;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: "some" | "all" | number;
  };
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  scale = 0.95,
  className = "",
  viewport = { once: true, amount: 0.5 },
}: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        }
      }}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}