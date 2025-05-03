"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import Image from "next/image";

import { cn } from "@/components/libs/cn";

const AvatarContent = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
AvatarContent.displayName = AvatarPrimitive.Root.displayName;

interface AvatarImageProps extends Omit<React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>, "src"> {
  src?: string;
  alt: string;
  fallback?: React.ReactNode;
  priority?: boolean;
  bgColor?: string;
}

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, src, alt, fallback, bgColor, priority = false, }, ref) => {
  const [hasError, setHasError] = React.useState<boolean>(false);

  if (!src || hasError) {
    return <AvatarFallback style={{ backgroundColor: bgColor }}>{fallback}</AvatarFallback>;
  }

  return (
    <div ref={ref} className={cn("aspect-square h-full w-full overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        priority={priority}
        className="object-cover w-full h-full"
        onError={() => setHasError(true)}
      />
    </div>
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  style?: React.CSSProperties;
}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, style, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    style={style}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full text-white font-medium",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { AvatarContent, AvatarImage, AvatarFallback };
