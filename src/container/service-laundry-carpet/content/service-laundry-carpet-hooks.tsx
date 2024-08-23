import React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { WaveTopBgShapeSM, WaveTopBgShape, WaveBottomBgShapeSM } from "@/components/ui/shapes";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
import { useIsVisible } from "@/utils/use-in-view";
import Link from "@/components/ui/link";
import * as DATA_LAUNDRY_CARPET_MARELAN from "@/constant/seo/custom/laundry-karpet-marelan-page";
import * as DATA_CUCI_KARPET_MEDAN from "@/constant/seo/custom/cuci-karpet-medan-page";

export const LaundryCarpetHooks = () => {
  const { ref } = useTrackEnterSection({
    envetKey: "enter_carpet_service_hooks",
    featureKey: "Carpet Service Page",
  });
  const isIntersecting = useIsVisible({ ref, once: true });

  const pathname = usePathname();
  const data = pathname === "/cuci-karpet-medan" ? DATA_CUCI_KARPET_MEDAN : DATA_LAUNDRY_CARPET_MARELAN;

  const {
    CARPET_HOOKS,
    CARPET_HOOKS_DESC,
    CARPET_HOOKS_BTN,
  } = data;

  return (
    <section ref={ref}>
      <WaveTopBgShapeSM className="w-full block lg:hidden" color="hsl(223 9% 15%)" />
      <WaveTopBgShape className="w-full hidden lg:block" color="hsl(223 9% 15%)" />
      <div className="bg-secondary pt-12 pb-24 md:pt-16 md:pb-32 sm:py-32 relative">
        <div className="container px-4 xs:px-10">
          <div className={clsx(
            "flex flex-col md:flex-row text-center md:text-left justify-center md:justify-between items-center gap-14 lg:gap-10",
            isIntersecting ? "animate-fade-up animate-once animate-ease-in-out animate-delay-200" : "opacity-0"
          )}>
            <div>
              <h3 className="max-w-[700px] text-secondary-foreground text-4xl font-semibold !leading-normal mb-2">
                {CARPET_HOOKS}
              </h3>
              <p className="text-secondary-foreground text-2xl font-semibold">
                {CARPET_HOOKS_DESC}
              </p>
            </div>
            <Link
              href="#our-location"
              className={clsx(
                "inline-flex items-center justify-center rounded-md py-4 px-10 text-sm font-semibold",
                "bg-primary text-secondary shadow transition-all duration-500",
                "hover:bg-white hover:text-foreground whitespace-nowrap",
              )}
            // onClick={handleClickCta}
            >
              {CARPET_HOOKS_BTN}
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[-2px] mb-[-24px]">
        <WaveBottomBgShapeSM className="w-full" color="hsl(223 9% 15%)" />
      </div>
    </section>
  );
};
