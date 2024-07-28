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
      "flex flex-col items-center justify-center space-y-2 text-center",
      classNames
    )}>
      <h2
        className={clsx(
          "text-3xl font-bold  sm:text-5xl lg:leading-tight",
          isIntersecting ? "animate-fade-up animate-once animate-ease-in-out" : "opacity-0"
        )}
      >
        {title}
      </h2>
      <h5
        className={clsx(
          "max-w-[900px] text-foreground-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
          isIntersecting ? "animate-fade-up animate-once animate-ease-in-out animate-delay-200" : "opacity-0"
        )}
      >
        {description}
      </h5>
    </div>
  );
};