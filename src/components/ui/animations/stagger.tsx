"use client";

import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

export interface StaggerContainerProps extends Readonly<PropsWithChildren> {
  readonly className?: string;
  readonly staggerChildren?: number;
  readonly delayChildren?: number;
  readonly viewport?: {
    readonly once?: boolean;
    readonly margin?: string;
    readonly amount?: "some" | "all" | number;
  };
}

type Direction = "up" | "down" | "left" | "right";
export interface StaggerItemProps extends Readonly<PropsWithChildren> {
  readonly className?: string;
  readonly direction?: Direction;
}

export function StaggerContainer({
  children,
  className = "",
  staggerChildren = 0.1,
  delayChildren = 0,
  viewport = { once: true, amount: 0.3 },
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up"
}: StaggerItemProps) {
  const getDirectionVariants = (direction: Direction) => {
    const initialMap = {
      up: { hidden: { y: 20 }, visible: { y: 0 } },
      down: { hidden: { y: -20 }, visible: { y: 0 } },
      left: { hidden: { x: 20 }, visible: { x: 0 } },
      right: { hidden: { x: -20 }, visible: { x: 0 } },
    };

    return initialMap[direction];
  };

  const directionVariants = getDirectionVariants(direction);

  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          ...directionVariants.visible,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        },
        hidden: {
          opacity: 0,
          ...directionVariants.hidden
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}