import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

import type { JSX } from "react";

import { cn } from "@/components/libs/cn";
import { Loading } from "../loading";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center rounded-full text-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      color: {
        primary: "bg-primary-50 border-primary-50 text-primary-foreground hover:bg-primary-40 active:bg-primary-80 focus:bg-primary-60",
        secondary: "bg-secondary-50 border-secondary-50 text-secondary-foreground hover:bg-secondary-40 active:bg-secondary-80 focus:bg-secondary-60",
        success: "bg-success-50 border-success-50 text-success-foreground hover:bg-success-40 active:bg-success-80 focus:bg-success-60",
        warning: "bg-warning-50 border-warning-50 text-warning-foreground hover:bg-warning-40 active:bg-warning-80 focus:bg-warning-60",
        error: "bg-error-50 border-error-50 text-error-foreground hover:bg-error-40 active:bg-error-80 focus:bg-error-60",
        gray: "bg-gray text-gray-foreground border-gray hover:bg-gray-40 active:bg-gray-80 focus:bg-gray-60",
      },
      variant: {
        default:
          "border-transparent",
        outline:
          "border bg-white",
        "outline-gray":
          "border border-gray text-primary-50 bg-transparent hover:bg-primary-10 active:bg-primary-30 focus:bg-primary-20",
        ghost: "bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent !px-0",
      },
      size: {
        xs: "h-4 px-2 text-sm",
        sm: "h-7 px-3 text-sm",
        md: "h-9 px-4 text-md",
        lg: "h-12 px-5 py-1 text-lg",
      },
      loading: {
        true: "disabled:text-transparent select-none",
        false: "disabled:text-inactive"
      }
    },
    compoundVariants: [
      {
        loading: false,
        variant: ["default", "outline", "outline-gray"],
        className: "disabled:bg-gray-60 disabled:text-inactive disabled:border-gray-60",
      },
      {
        variant: ["outline", "outline-gray"],
        color: "primary",
        className: "text-primary-50 hover:bg-primary-10 active:bg-primary-30 focus:bg-primary-20"
      },
      {
        variant: ["outline", "outline-gray"],
        color: "secondary",
        className: "text-secondary-50 hover:bg-secondary-10 active:bg-secondary-30 focus:bg-secondary-20"
      },
      {
        variant: ["outline", "outline-gray"],
        color: "success",
        className: "text-success-50 hover:bg-success-10 active:bg-success-30 focus:bg-success-20"
      },
      {
        variant: ["outline", "outline-gray"],
        color: "warning",
        className: "text-warning-50 hover:bg-warning-10 active:bg-warning-30 focus:bg-warning-20"
      },
      {
        variant: ["outline", "outline-gray"],
        color: "error",
        className: "text-error-50 hover:bg-error-10 active:bg-error-30 focus:bg-error-20"
      },
      {
        variant: ["outline", "outline-gray"],
        color: "gray",
        className: "text-gray-80 hover:bg-gray-10 active:bg-gray-30 focus:bg-gray-20"
      },
      {
        variant: "ghost",
        color: "primary",
        className: "text-primary-50 hover:text-primary-40 active:text-primary-20 focus:text-primary-30"
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "text-secondary-50 hover:text-secondary-40 active:text-secondary-20 focus:text-secondary-30"
      },
      {
        variant: "ghost",
        color: "success",
        className: "text-success-50 hover:text-success-40 active:text-success-20 focus:text-success-30"
      },
      {
        variant: "ghost",
        color: "warning",
        className: "text-warning-50 hover:text-warning-40 active:text-warning-20 focus:text-warning-30"
      },
      {
        variant: "ghost",
        color: "error",
        className: "text-error-50 hover:text-error-40 active:text-error-10 focus:text-error-40"
      },
      {
        variant: "ghost",
        color: "gray",
        className: "text-gray-60 hover:text-gray-50 active:text-gray-70 focus:text-gray-70"
      },
      {
        variant: "ghost",
        loading: true,
        className: "disabled:text-transparent"
      },
    ],
    defaultVariants: {
      color: "primary",
      variant: "default",
      size: "md",
    },
  }
);

type ComponentProps<T extends keyof JSX.IntrinsicElements> = {
  as?: T | React.ElementType;
} & Omit<React.HTMLProps<JSX.IntrinsicElements[T]>, "as">;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
  VariantProps<typeof buttonVariants> {
  loading?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

const Button = React.forwardRef(
  <T extends keyof JSX.IntrinsicElements>(
    { className, variant = "default", size, loading = false, children, disabled = false, startIcon, endIcon, color = "primary", as, ...props }: Omit<ComponentProps<T>, "size" | "color" | "variant"> & ButtonProps,
    ref: React.ForwardedRef<any>
  ) => {
    const Comp = as as React.ElementType ?? "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, loading, color }))}
        ref={ref}
        disabled={disabled || loading}
        type='button'
        {...props}
      >
        {!!startIcon && (React.cloneElement(startIcon, { className: clsx(`scale-125 pr-1.5`, startIcon.props?.className) }))}
        {children}
        {!!endIcon && (React.cloneElement(endIcon, { className: clsx(`scale-125 pl-1.5`, endIcon.props?.className) }))}
        {loading && (<Loading className="absolute left-1/2 transform -translate-x-1/2" color={variant === "default" ? "light" : color as any} />)}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
