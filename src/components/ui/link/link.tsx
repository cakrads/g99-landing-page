"use client";

import NextLink, { LinkProps } from "next/link";
import React from "react";

import { GLOBAL_WEB_TITLE } from "@/constant/seo/global";

const Link: React.FC<LinkProps & {
  children: React.ReactNode
  className?: string
  target?: "_blank" | "_self" | "_parent" | "_top",
  ariaLabel?: string
}> = ({ children, className, target, ariaLabel, ...props }) => {
  return (
    <NextLink
      {...props}
      className={className}
      target={target}
      aria-label={ariaLabel || GLOBAL_WEB_TITLE}
      rel="noopener noreferrer"
    >
      {children}
    </NextLink >
  );
};

export default Link;