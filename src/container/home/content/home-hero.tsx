import Image from "next/image";

import { HomeImageShapesBg } from "@/components/ui/shapes";
import {
  HOME_HERO_DESCRIPTION, HOME_HERO_TITLE, HOME_IMG_ALT
} from "@/constant/seo/home-page";
import { FadeIn } from "@/components/ui/animations";
import { HomeHeroCtaBtn, HomeHeroTracker } from "../home-tracker";

export const HomeHero = () => {
  return (
    <section className="w-full pt-16 pb-20 sm:py-20 bg-primary">
      <HomeHeroTracker />
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_500px]">
            <FadeIn className="flex flex-col justify-center items-center lg:items-start space-y-6">
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <h1 className="text-center lg:text-left font-bold text-3xl sm:text-5xl xl:text-6xl/none">
                  {HOME_HERO_TITLE}
                </h1>
                <p className="text-center lg:text-left max-w-[500px] lg:max-w-[600px] items-center sm:text-xl">
                  {HOME_HERO_DESCRIPTION}
                </p>
              </div>
              <div className="flex xs:flex-row">
                <HomeHeroCtaBtn />
              </div>
            </FadeIn>
          <div className="relative flex justify-center items-center h-[450px] xs:h-[550px] xl:h-[500px]">
            <FadeIn className="h-full w-full">
              <HomeImageShapesBg className="h-full w-full drop-shadow-xl" />
            </FadeIn>
            <div className="absolute top-0 flex justify-center w-[350px] md:w-[450px] h-[350px] md:h-[450px]">
              <Image
                className="object-cover"
                src="/images/hero-image.webp"
                alt={HOME_IMG_ALT}
                quality={75}
                fill
                sizes="(max-width: 640px) 100vw, 640px"
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};