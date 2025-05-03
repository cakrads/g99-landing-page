import React, { ComponentPropsWithoutRef } from "react";

import { cn } from "@/components/libs/cn";

type MarqueeProps = Readonly<ComponentPropsWithoutRef<"div">> & {
  /**
   * Optional CSS class name to apply custom styles
   */
  readonly className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  readonly reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  readonly pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  readonly children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  readonly vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  readonly repeat?: number;
  /**
   * Animation duration in seconds
   * @default 10
   */
  readonly speed?: number;
  /**
   * Gap between items in rem
   * @default 1
   */
  readonly gap?: number;
};

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  speed = 10,
  gap = 1,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
      style={{
        "--duration": `${speed}s`,
        "--gap": `${gap}rem`,
      } as React.CSSProperties}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
