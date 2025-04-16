import clsx from "clsx";
import { FC } from "react";

import { FadeIn } from "@/components/ui/animations";

export const SectionHeader: FC<{
  title: string;
  description: string;
  classNames?: string;
}> = ({ title, description, classNames }) => {
  return (
    <FadeIn
      delay={0.2}
      className={clsx(
        "flex flex-col items-center justify-center space-y-4 text-center",
        classNames
      )}
    >
      <h2 className="text-3xl font-bold sm:text-5xl md:leading-tight">
        {title}
      </h2>
      <p className="max-w-[900px] text-foreground-secondary md:text-xl lg:text-base xl:text-xl">
        {description}
      </p>
    </FadeIn>
  );
};