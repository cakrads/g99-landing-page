import React from "react";

import { WaveBottomBgShape, WaveTopBgShape } from "@/components/ui/shapes";
import { HOME_HOOKS } from "@/constant/seo/home-page";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import { FadeIn } from "@/components/ui/animations";
import { HomeHooksBtn } from "../home-tracker";

export const HomeHooks = () => {
  const { ref } = useTrackEnterSection({
    envetKey: "enter_home_hooks",
    featureKey: "Home Page",
  });

  return (
    <section ref={ref}>
      <WaveTopBgShape className="bg-primary" shapeColor="hsl(223 9% 15%)" />
      <div className="bg-secondary py-28 relative">
        <div className="container">
          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row text-center md:text-left justify-center md:justify-between items-center gap-10 lg:gap-2">
              <p className="max-w-[700px] text-secondary-foreground text-2xl md:text-3xl font-semibold !leading-normal">
                {HOME_HOOKS}
              </p>
              <HomeHooksBtn />
              {/* <div className="bg-primary sm:bg-purple-500 md:bg-red-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-orange-500 h-10 w-10" /> */}
            </div>
          </FadeIn>
        </div>
      </div>
      <WaveBottomBgShape />
    </section>
  );
};
