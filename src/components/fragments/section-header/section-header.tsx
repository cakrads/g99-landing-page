import clsx from "clsx";
import { FC, useRef } from "react";

import { useIsVisible } from "@/utils/use-in-view";

export const SectionHeader: FC<{
  title: string;
  description: string;
  classNames?: string;
}> = ({ title, description, classNames }) => {
  const ref = useRef(null);
  const isIntersecting = useIsVisible({ ref, once: true });

  return (
    <div ref={ref} className={clsx(
      "flex flex-col items-center justify-center space-y-4 text-center",
      classNames
    )}>
      <h2
        className={clsx(
          "text-3xl font-bold  sm:text-5xl md:leading-tight",
          isIntersecting ? "animate-fade-up animate-once animate-ease-in-out" : "opacity-0"
        )}
      >
        {title}
      </h2>
      <p
        className={clsx(
          "max-w-[900px] text-foreground-secondary md:text-xl lg:text-base xl:text-xl font-medium",
          isIntersecting ? "animate-fade-up animate-once animate-ease-in-out animate-delay-200" : "opacity-0"
        )}
      >
        {description}
      </p>
    </div>
  );
};