"use client";

import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

import { cn } from "@/components/libs/cn";

type Direction = "up" | "down" | "left" | "right";
export type FadeInProps = Readonly<
  PropsWithChildren<{
    delay?: number;
    duration?: number;
    direction?: Direction;
    className?: string;
    viewport?: {
      once?: boolean;
      margin?: string;
      amount?: "some" | "all" | number;
    };
  }>
>;

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  className = "",
  viewport = { once: true, amount: 0.5 },
}: FadeInProps) {

  // Define initial and animate states based on direction
  const getAnimationProps = () => {
    const initialMap = {
      up: { initialY: 20, initialX: 0 },
      down: { initialY: -20, initialX: 0 },
      left: { initialY: 0, initialX: 20 },
      right: { initialY: 0, initialX: -20 },
    };
    const { initialY, initialX } = initialMap[direction];

    return {
      initial: {
        y: initialY,
        x: initialX,
        opacity: 0,
      },
      whileInView: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    };
  };

  const animationProps = getAnimationProps();

  return (
    <motion.div
      initial={animationProps.initial}
      whileInView={animationProps.whileInView}
      viewport={viewport}
      className={cn("h-full", className)}
    >
      {children}
    </motion.div>
  );
}