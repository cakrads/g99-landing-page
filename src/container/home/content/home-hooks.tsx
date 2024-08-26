import React from "react";
import clsx from "clsx";

import { WaveTopBgShapeSM, WaveTopBgShape, WaveBottomBgShapeSM } from "@/components/ui/shapes";
import { HOME_HOOKS } from "@/constant/seo/home-page";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import { useIsVisible } from "@/utils/use-in-view";

import { HomeHooksBtn } from "../home-tracker";

export const HomeHooks = () => {
  const { ref } = useTrackEnterSection({
    envetKey: "enter_home_hooks",
    featureKey: "Home Page",
  });
  const isIntersecting = useIsVisible({ ref, once: true });

  return (
    <section ref={ref}>
      <div className="bg-primary mb-[-1px]">
        <WaveTopBgShapeSM className="w-full block lg:hidden" color="hsl(223 9% 15%)" />
        <WaveTopBgShape className="w-full hidden lg:block" color="hsl(223 9% 15%)" />
      </div>
      <div className="bg-secondary pt-12 pb-24 md:pt-20 md:pb-40 sm:py-32 relative">
        <div className="container px-4 xs:px-10">
          <div className={clsx(
            "flex flex-col md:flex-row text-center md:text-left justify-center md:justify-between items-center gap-10 lg:gap-2",
            isIntersecting ? "animate-fade-up animate-once animate-ease-in-out animate-delay-200" : "opacity-0"
          )}>
            <p className="max-w-[700px] text-secondary-foreground text-2xl md:text-3xl font-semibold !leading-normal">
              {HOME_HOOKS}
            </p>
            <HomeHooksBtn />
          </div>
        </div>
      </div>
      <div className="bg-primary mt-[-2px] mb-[-24px]">
        <WaveBottomBgShapeSM className="w-full" color="hsl(223 9% 15%)" />
      </div>
    </section>
  );
};

