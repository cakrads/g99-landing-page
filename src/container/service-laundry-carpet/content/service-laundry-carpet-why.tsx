import Image from "next/image";
import { useRef } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import * as DATA_LAUNDRY_CARPET_MARELAN from "@/constant/seo/custom/laundry-karpet-marelan-page";
import * as DATA_CUCI_KARPET_MEDAN from "@/constant/seo/custom/cuci-karpet-medan-page";
import { SectionHeader } from "@/components/fragments/section-header";
import { useIsVisible } from "@/utils/use-in-view";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";

export const LaundryCarpetWhy = () => {
  const refText = useRef(null);
  const isTextIntersecting = useIsVisible({ ref: refText, once: true });
  const refImage = useRef(null);
  const isImageIntersecting = useIsVisible({ ref: refImage, once: true });

  const { ref } = useTrackEnterSection({
    envetKey: "enter_carpet_service_why",
    featureKey: "Carpet Service Page",
  });

  const pathname = usePathname();
  const data = pathname === "/cuci-karpet-medan" ? DATA_CUCI_KARPET_MEDAN : DATA_LAUNDRY_CARPET_MARELAN;
  const { CARPET_WHY_DESCRIPTION, CARPET_WHY_TITLE, CARPET_IMG_ALT, CARPET_WHY_LIST } = data;

  return (
    <section ref={ref}>
      <div className="pt-32 pb-16 md:pt-40 sm:py-24 relative">
        <div className="container">
          <SectionHeader
            title={CARPET_WHY_TITLE}
            description={CARPET_WHY_DESCRIPTION}
          />
          <div ref={refImage} className="flex flex-col gap-10 py-12 items-center">
            <div className="order-2 md:order-1 w-full md:min-w-[300px] flex flex-col md:flex-row gap-5">
              <div
                className={clsx(
                  "relative rounded-3xl w-full h-[150px] md:h-[200px] lg:h-[150px] bg-gray-400 shadow-lg",
                  isImageIntersecting ? "animate-fade-right animate-once animate-ease-in-out animate-delay-400 md:animate-delay-0" : "opacity-0"
                )}
              >
                <Image
                  src="/images/laundry-karpet-terdekat-terpercaya.png"
                  alt={CARPET_IMG_ALT}
                  fill={true}
                  className="w-full h-full top-0 left-0 object-cover rounded-3xl"
                />
              </div>
              <div
                className={clsx(
                  "relative rounded-3xl w-full h-[150px] md:h-[200px] lg:h-[150px] bg-gray-400 shadow-lg",
                  isImageIntersecting ? "animate-fade-right animate-once animate-ease-in-out animate-delay-500 md:animate-delay-150" : "opacity-0"
                )}
              >
                <Image
                  src="/images/laundry-karpet-terdekat-jemur-karpet.png"
                  alt={CARPET_IMG_ALT}
                  fill={true}
                  className="w-full h-full top-0 left-0 object-cover rounded-3xl"
                />
              </div>
              <div
                className={clsx(
                  "relative rounded-3xl w-full h-[150px] md:h-[200px] lg:h-[150px] bg-gray-400 shadow-lg",
                  isImageIntersecting ? "animate-fade-right animate-once animate-ease-in-out animate-delay-[600ms] md:animate-delay-300" : "opacity-0"
                )}
              >
                <Image
                  src="/images/laundry-karpet-terdekat-mesin-pengering-karpet.png"
                  alt={CARPET_IMG_ALT}
                  fill={true}
                  className="w-full h-full top-0 left-0 object-cover rounded-3xl"
                />
              </div>
            </div>
            <div ref={refText} className="order-1 md:order-2">
              <ul
                className={clsx(
                  "pl-6 list-disc text-xl md:text-2xl space-y-2 md:space-y-4",
                  isTextIntersecting ? "animate-fade-left animate-once animate-ease-in-out" : "opacity-0"
                )}
              >
                {CARPET_WHY_LIST.map((item, index) => (
                  <li key={index}>
                    {/* <b className="font-semibold">
                      {item.label} :
                    </b> */}
                    <p dangerouslySetInnerHTML={{ __html: item.description }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};