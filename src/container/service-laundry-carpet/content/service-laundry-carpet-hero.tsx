import Image from "next/image";

import Link from "@/components/ui/link";
import { WA_LINK } from "@/constant/whatsapp";
import { CARPET_HERO_DESCRIPTION, CARPET_HERO_TITLE, CARPET_IMG_ALT } from "@/constant/seo/laundry-karpet-marelan-page";

export const LaundryCarpetHero = () => {
  return (
    <section className="w-full pt-16 pb-20 sm:py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col lg:pt-3 xl:pt-6 space-y-4">
            <div className="space-y-2">
              <h1 className="font-bold text-3xl sm:text-5xl xl:text-6xl/none !leading-tight animate-fade-up animate-once animate-ease-in-out">
                {CARPET_HERO_TITLE}
              </h1>
              <p className="max-w-[600px] text-muted-foreground sm:text-xl animate-fade-up animate-once animate-ease-in-out animate-delay-100">
                {CARPET_HERO_DESCRIPTION}
              </p>
            </div>
            <div className="flex xs:flex-row animate-fade-up animate-once animate-ease-in-out animate-delay-150">
              <Link
                href={WA_LINK}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                target="_blank"
              >
                Pesan Sekarang
              </Link>

            </div>
          </div>
          <div className="min-w-[300px] flex flex-col md:flex-row lg:flex-col gap-5">
            <div className="relative rounded-3xl w-full h-[150px] md:h-[200px] lg:h-[150px] bg-gray-400 shadow-lg animate-fade-left animate-once animate-ease-in-out animate-delay-500 md:animate-delay-0" >
              <Image
                src="/images/laundry-karpet-terdekat.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                className="w-full h-full top-0 left-0 object-cover rounded-3xl"
              />
            </div>
            <div className="relative rounded-3xl w-full h-[150px] md:h-[200px] lg:h-[150px] bg-gray-400 shadow-lg animate-fade-left animate-once animate-ease-in-out animate-delay-700 md:animate-delay-150" >
              <Image
                src="/images/laundry-karpet-terdekat-tumpukan-karpet.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                className="w-full h-full top-0 left-0 object-cover rounded-3xl"
              />
            </div>
            <div className="relative rounded-3xl w-full h-[150px] md:h-[200px] lg:h-[150px] bg-gray-400 shadow-lg animate-fade-left animate-once animate-ease-in-out animate-delay-[900ms] md:animate-delay-300" >
              <Image
                src="/images/laundry-karpet-terdekat-mesin-pengering-karpet.png"
                alt={CARPET_IMG_ALT}
                fill={true}
                className="w-full h-full top-0 left-0 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};