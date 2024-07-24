
import Image from "next/image";

import { HomeImageShapesBg } from "@/components/ui/shapes";
import { HOME_HERO_DESCRIPTION, HOME_HERO_TITLE, HOME_IMG_ALT } from "@/constant/seo/home-page";

import { HomeHeroCtaBtn, HomeHeroTracker } from "../home-tracker";

export const HomeHero = () => {
  return (
    <section className="w-full pt-16 pb-20 sm:py-20">
      <HomeHeroTracker />
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center items-center lg:items-start space-y-6">
            <div className="flex flex-col items-center lg:items-start space-y-2">
              <h1 className="text-center lg:text-left font-bold text-3xl sm:text-5xl xl:text-6xl/none animate-fade-up animate-once animate-ease-in-out">
                {HOME_HERO_TITLE}
              </h1>
              <p className="text-center lg:text-left max-w-[500px] lg:max-w-[600px] items-center text-muted-foreground sm:text-xl animate-fade-up animate-once animate-ease-in-out animate-delay-100">
                {HOME_HERO_DESCRIPTION}
              </p>
            </div>
            <div className="flex xs:flex-row animate-fade-up animate-once animate-ease-in-out animate-delay-150">
              <HomeHeroCtaBtn />
            </div>
          </div>
          <div className="relative h-[450px] xs:h-[550px] xl:h-[500px] overflow-hidden drop-shadow-2xl animate-fade-up animate-once animate-ease-in-out animate-delay-300 md:animate-delay-75">
            <HomeImageShapesBg className="h-full w-full drop-shadow-xl" />
            <div className="absolute top-0 flex justify-center w-full">
              <Image
                className="drop-shadow-xl"
                src="/images/hero-image.png"
                alt={HOME_IMG_ALT}
                width={500}
                height={500}
                quality={100}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};