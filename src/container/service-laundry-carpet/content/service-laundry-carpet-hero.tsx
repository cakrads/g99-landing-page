import Image from "next/image";

import * as DATA_LAUNDRY_CARPET_MARELAN from "@/constant/seo/custom/laundry-karpet-marelan-page";
import * as DATA_CUCI_KARPET_MEDAN from "@/constant/seo/custom/cuci-karpet-medan-page";
import { FadeIn } from "@/components/ui/animations";

import { CarpetServiceCtaBtn, CarpetServiceHeroTracker } from "../service-laundry-carpet-tracker";
import { TSourcePage } from "./../service-laundry-carpet";

export const LaundryCarpetHero = ({ source }: { source: TSourcePage }) => {
  const data = source === "cuci-karpet-medan" ? DATA_CUCI_KARPET_MEDAN : DATA_LAUNDRY_CARPET_MARELAN;

  const {
    CARPET_HERO_TITLE,
    CARPET_HERO_DESCRIPTION,
    CARPET_HERO_CTA,
    CARPET_IMG_ALT,
  } = data;

  return (
    <section className="w-full pt-16 pb-20 sm:py-20">
      <CarpetServiceHeroTracker />
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex flex-col lg:pt-3 xl:pt-6 space-y-4">
            <div className="space-y-2">
              <FadeIn>
                <h1 className="font-bold whitespace-pre-line text-3xl sm:text-5xl xl:text-6xl/none !leading-tight">
                  {CARPET_HERO_TITLE}
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="max-w-[600px] whitespace-pre-line sm:text-xl">
                  {CARPET_HERO_DESCRIPTION}
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.15}>
              <div className="flex xs:flex-row">
                <CarpetServiceCtaBtn label={CARPET_HERO_CTA} />
              </div>
            </FadeIn>
          </div>
          <div className="min-w-[300px] flex flex-col md:flex-row lg:flex-col gap-2">
            <FadeIn direction="left" delay={0.5} className="relative rounded-2xl w-full h-[150px] bg-gray-400 shadow-lg">
              <Image
                src="/images/services/carpet/laundry-karpet-terdekat-membersihkan-karpet.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                priority={true}
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.7} className="relative rounded-2xl w-full h-[150px] bg-gray-400 shadow-lg">
              <Image
                src="/images/services/carpet/laundry-karpet-terdekat-pembersih-dan-pengering-karpet.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                priority={true}
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </FadeIn>
            <FadeIn direction="left" delay={0.9} className="relative rounded-2xl w-full h-[150px] bg-gray-400 shadow-lg">
              <Image
                src="/images/services/carpet/laundry-karpet-terdekat-membersihkan-karpet-2.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                priority={true}
                className="w-full h-full top-0 left-0 object-cover rounded-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};