import Image from "next/image";
import { useRef } from "react";
import clsx from "clsx";

import { IMG_ALT_LAUNDRY_KARPET } from "@/constant/env";
import { SectionHeader } from "@/components/fragments/section-header";
import { WaveBottomBgShapeSM, WaveTopBgShape, WaveTopBgShapeSM } from "@/components/ui/shapes";
import { useIsVisible } from "@/utils/use-in-view";

export const LaundryCarpetWhy = () => {
  const refText = useRef(null);
  const isTextIntersecting = useIsVisible({ ref: refText, once: true });
  const refImage = useRef(null);
  const isImageIntersecting = useIsVisible({ ref: refImage, once: true });

  const data = [
    "Laundry kami melayani GRATIS Antar Jemput untuk wilayah Medan.",
    "Kami cuci karpet dengan teknik pencucian terbaik yang membuat semua noda, kotoran, dan aroma tidak sedap terlepas sempurna tanpa harus khawatir terjadinya resiko kerusakan.",
    "Laundry kami menggunakan bahan pembersih khusus yang memiliki pH 8 sehingga sangat aman dan bebas dari resiko bau apek.",
    "Karpet diproses dengan mesin Yusima Carpet Spinner seharga Rp50 Jutaan, sehingga proses pengeringan berlangsung sangat cepat",
    "Kami berani menggaransi kepuasan Anda. Jika Anda tidak puas, Anda bisa mengklaim untuk cuci kembali atau GRATIS tidak perlu membayar.",
  ];

  return (
    <section>
      <WaveTopBgShapeSM className="w-full block lg:hidden" />
      <WaveTopBgShape className="w-full hidden lg:block" />
      <div className="bg-muted pt-24 pb-16 md:pt-28 sm:py-24 relative">
        <div className="container">
          <SectionHeader
            title="Kenapa Harus Laundry Karpet di Kami?"
            description=""
          />
          <div ref={refImage} className="flex flex-col lg:flex-row gap-10 py-12 items-center">
            <div className="order-2 md:order-1 min-w-[300px] flex flex-col md:flex-row lg:flex-col gap-5">
              <div
                className={clsx(
                  "relative rounded-3xl w-full h-[150px] md:h-[200px] lg:h-[150px] bg-gray-400 shadow-lg",
                  isImageIntersecting ? "animate-fade-right animate-once animate-ease-in-out animate-delay-400 md:animate-delay-0" : "opacity-0"
                )}
              >
                <Image
                  src="/images/laundry-karpet-terdekat-terpercaya.png"
                  alt={IMG_ALT_LAUNDRY_KARPET}
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
                  alt={IMG_ALT_LAUNDRY_KARPET}
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
                  alt={IMG_ALT_LAUNDRY_KARPET}
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
                {data.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <WaveBottomBgShapeSM className="w-full" />
    </section>
  );
};