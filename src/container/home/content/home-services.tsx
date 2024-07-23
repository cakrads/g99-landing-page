import Image from "next/image";
import React from "react";
import clsx from "clsx";

import Link from "@/components/ui/link";
import { Card } from "@/components/ui/card";
import { WaveTopBgShapeSM, WaveTopBgShape, WaveBottomBgShapeSM } from "@/components/ui/shapes";
import { SectionHeader } from "@/components/fragments/section-header";
import { useIsVisible } from "@/utils/use-in-view";
import { HOME_SERVICES_DESCRIPTION, HOME_SERVICES_TITLE, HOME_IMG_ALT } from "@/constant/seo/home-page";

export const HomeServices = () => {

  const data = [
    {
      title: "Cuci Karpet",
      description: "Dapatkan karpet Bersih dan Higienis bebas Bakteri <b>dalam waktu 1 hari</b> dengan Mesin Pengering Modern. Rumah yang nyaman, sehat dengan harga bersahabat.",
      imgSrc: "/images/rug.png",
      imgAlt: "Cuci Karpet -" + HOME_IMG_ALT,
      linkPage: "/laundry-karpet-marelan",
      linkText: "Lihat Detail"
    },
    {
      title: "Cuci Kering dan Lipat",
      description: "Cucian Menumpuk? Serahkan Pada Kami! Dapatkan pakaian yang Wangi, Rapi, dan Siap Pakai dengan harga bersahabat.",
      imgSrc: "/images/washing-machine.png",
      imgAlt: "Cuci Kering dan Lipat -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang"
    },
    {
      title: "Cuci Gosok",
      description: "Rasakan kenyamanan memakai pakaian yang Bersih, Wangi, dan Rapi. Tampil percaya diri dengan pakaian yang Bebas Kusut.",
      imgSrc: "/images/iron.png",
      imgAlt: "Cuci Gosok - " + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang"
    }
  ];

  return (
    <section>
      <WaveTopBgShapeSM className="w-full block lg:hidden" />
      <WaveTopBgShape className="w-full hidden lg:block" />
      <div className="bg-muted pt-24 pb-16 md:pt-28 sm:py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={HOME_SERVICES_TITLE}
            description={HOME_SERVICES_DESCRIPTION}
          />
          <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 px-0 xs:px-10 xs:max-w-[500px] mx-auto sm:max-w-full animate-fade-right animate-ease-in-out">
            {data.map((item, index) => (
              <HomeServicesCard
                key={`${index} - ${item.title}`}
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                linkPage={item.linkPage}
                linkText={item.linkText}
              />
            ))}
          </div>
        </div>
      </div>
      <WaveBottomBgShapeSM className="w-full" />
    </section>
  );
};

const HomeServicesCard: React.FC<{
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  linkPage: string;
  linkText: string;
}> = ({ title, description, imgSrc, imgAlt, linkPage, linkText }) => {
  const ref = React.useRef(null);
  const isIntersecting = useIsVisible({ ref, once: true });

  return (
    <Card ref={ref} className={clsx(
      "flex flex-col text-center items-center space-y-4 rounded-lg bg-background !p-10 shadow-md",
      isIntersecting ? "animate-fade-up animate-once animate-ease-in-out" : "opacity-0"
    )}>
      <Image
        className={clsx(
          isIntersecting ? "animate-fade-up animate-once animate-ease-in-out animate-delay-75" : "opacity-0"
        )}
        src={imgSrc} alt={imgAlt} width={80} height={80}
      />
      <h3
        className={clsx(
          "text-xl font-bold text-primary",
          isIntersecting ? "animate-fade-up animate-once animate-ease-in-out animate-delay-200" : "opacity-0"
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "text-foreground-secondary",
          isIntersecting ? "animate-fade-up animate-once animate-ease-in-out animate-delay-500" : "opacity-0"
        )}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Link
        className={clsx(
          "inline-flex h-10 items-center justify-center rounded-md bg-muted px-8 text-sm font-medium text-muted-foreground shadow transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          isIntersecting ? "animate-fade-up animate-once animate-ease-in-out animate-delay-[600ms]" : "opacity-0"
        )}
        href={linkPage}
      >
        {linkText}
      </Link>
    </Card>
  );
};