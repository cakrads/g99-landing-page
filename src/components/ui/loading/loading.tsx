import React from "react";
import { clsx, type ClassValue } from "clsx";

import "./loading.css";


export const Loading: React.FC<{
  className?: ClassValue;
  color?: "primary" | "secondary" | "warning" | "success" | "error" | "light" | "dark" | "gray";
}> = ({ className, color = "primary" }) => {
  return (
    <div className={clsx("loading", {
      "child-div:bg-primary": color === "primary",
      "child-div:bg-secondary": color === "secondary",
      "child-div:bg-warning": color === "warning",
      "child-div:bg-success": color === "success",
      "child-div:bg-error": color === "error",
      "child-div:bg-white": color === "light",
      "child-div:bg-midnight": color === "dark",
      "child-div:bg-gray": color === "gray",
    }, className)}>
      <div />
      <div />
      <div />
    </div>
  );
};
