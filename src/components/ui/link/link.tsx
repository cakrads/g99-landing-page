import NextLink, { LinkProps } from "next/link";
import React from "react";

const Link: React.FC<LinkProps & {
  children: React.ReactNode
  className?: string
  target?: "_blank" | "_self" | "_parent" | "_top"
}> = ({ children, className, target, ...props }) => {
  return (
    <NextLink {...props} className={className ? className : "hover:text-primary"} target={target}>
      {children}
    </NextLink >
  );
};

export default Link;