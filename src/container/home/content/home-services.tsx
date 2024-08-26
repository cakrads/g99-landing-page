import Image from "next/image";
import React from "react";
import clsx from "clsx";

import Link from "@/components/ui/link";
import { SectionHeader } from "@/components/fragments/section-header";
import { HOME_SERVICES_DESCRIPTION, HOME_SERVICES_TITLE, HOME_IMG_ALT } from "@/constant/seo/home-page";
import { useTrackEnterSection } from "@/libs/analytic/use-enter-section";
// import { useAnalytic } from "@/libs/analytic/provider";
import { ScrollableX } from "@/components/ui/scrollable-x";
import { useIsVisible } from "@/utils/use-in-view";
import { Card } from "@/components/ui/card";
import { WaveBottomBgShapeSM } from "@/components/ui/shapes";
import { ROUTES } from "@/constant/routes";

type ServicesData = {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  linkPage: string;
  linkText: string;
  onClick: () => void
}

export const HomeServices = () => {
  const { ref } = useTrackEnterSection({
    envetKey: "enter_home_services",
    featureKey: "Home Page",
  });

  return (
    <section ref={ref}>
      <div className="bg-primary pt-24 pb-16 md:pt-28 sm:py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            classNames="mb-16"
            title={HOME_SERVICES_TITLE}
            description={HOME_SERVICES_DESCRIPTION}
          />
          <HomeServicesHouseSuplies />
          <HomeServicesPersonalSuplies />
          <HomeServicesWashingClothes />
        </div>
      </div>
      <WaveBottomBgShapeSM className="w-full" color="hsl(38 100% 55%)" />
    </section>
  );
};

const HomeServicesHouseSuplies = () => {
  const dataHouseSuplies: ServicesData[] = [
    {
      title: "Cuci Karpet",
      // description: "Dapatkan karpet Bersih dan Higienis bebas Bakteri <b>dalam waktu 1 hari</b> dengan Mesin Pengering Modern. Rumah yang nyaman, sehat dengan harga bersahabat.",
      description: "Dapatkan karpet Bersih dan Higienis bebas Bakteri <b>dalam waktu 1 hari</b> dengan Mesin Pengering Modern.",
      imgSrc: "/images/services/cuci-karpet-2.jpg",
      imgAlt: "Cuci Karpet -" + HOME_IMG_ALT,
      linkPage: ROUTES.CARPET_SERVICES,
      linkText: "Lihat Detail",
      onClick: () => { }
    },
    {
      title: "Cuci Spring Bed",
      description: "Hilangkan Tungau dan Bakteri pada kasur Anda, nikmati tidur yang lebih Sehat dan Nyaman.",
      imgSrc: "/images/services/cuci-spring-bed.jpg",
      imgAlt: "Cuci Spring Bed -" + HOME_IMG_ALT,
      linkPage: ROUTES.SPRING_BED_SERVICES,
      linkText: "Lihat Detail",
      onClick: () => { }
    },
    {
      title: "Cuci Sofa",
      description: "Percantik ruang tamu Anda dengan Sofa yang Bersih dan Bebas Noda dengan layanan Cuci Sofa kami.",
      imgSrc: "/images/services/cuci-sofa-2.jpg",
      imgAlt: "Cuci Sofa Terdekat -" + HOME_IMG_ALT,
      linkPage: ROUTES.SOFA_SERVICES,
      linkText: "Lihat Detail",
      onClick: () => { }
    },
    {
      title: "Cuci Stroller",
      description: "Pastikan stroller bayi Anda Bersih dan Higienis agar si kecil tetap Sehat dan Nyaman.",
      imgSrc: "/images/services/cuci-stroller-3.jpg",
      imgAlt: "Cuci Stroller Terdekat -" + HOME_IMG_ALT,
      linkPage: ROUTES.STROLLER_SERVICES,
      linkText: "Lihat Detail",
      onClick: () => { }
    },
    {
      title: "Cuci Bantal",
      description: "Dapatkan bantal yang Bersih untuk tidur yang lebih Nyaman dan lebih Nyenyak.",
      imgSrc: "/images/services/cuci-bantal.jpg",
      imgAlt: "Cuci Bantal -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang",
      onClick: () => { }
    },
    {
      title: "Cuci Gorden",
      description: "Bersihkan dan cuci gorden Anda dari Debu dan Kotoran untuk suasana rumah yang Lebih Segar.",
      imgSrc: "/images/services/cuci-gorden.jpg",
      imgAlt: "Cuci Gorden Terdekat -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang",
      onClick: () => { }
    },
  ];

  return (
    <ServicesList
      title="Layanan Cuci Perlengkapan Rumah dan Keluarga :"
      data={dataHouseSuplies}
    />
  );
};

const HomeServicesPersonalSuplies = () => {
  const dataPersonalSuplies = [
    {
      title: "Cuci Sepatu",
      description: "Buat sepatu Anda kembali Bersih terlihat Seperti Baru dengan layanan Cuci Sepatu kami.",
      imgSrc: "/images/services/cuci-sepatu.jpg",
      imgAlt: "Cuci Sepatu -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang",
      onClick: () => { }
    },
    {
      title: "Cuci Tas",
      description: "Pastikan tas Anda tetap bersih dan awet dengan layanan cuci tas kami. Tas Anda akan terlihat seperti Baru lagi.",
      imgSrc: "/images/services/cuci-tas.jpg",
      imgAlt: "Cuci Tas -" + HOME_IMG_ALT,
      linkPage: ROUTES.SUITCASE_SERVICES,
      linkText: "Lihat Detail",
      onClick: () => { }
    },
    {
      title: "Cuci Helm",
      description: "Jaga kebersihan helm Anda untuk Kenyamanan dan Keamanan berkendara.",
      imgSrc: "/images/services/cuci-helm.jpg",
      imgAlt: "Cuci Helm -" + HOME_IMG_ALT,
      linkPage: ROUTES.HELM_SERVICES,
      linkText: "Lihat Detail",
      onClick: () => { }
    },
    {
      title: "Cuci Boneka",
      description: "Buat boneka kesayangan Anda kembali Bersih, Higienis, Bersih dan Lembut.",
      imgSrc: "/images/services/cuci-boneka.jpg",
      imgAlt: "Cuci Boneka -" + HOME_IMG_ALT,
      linkPage: ROUTES.DOLL_SERVICES,
      linkText: "Lihat Detail",
      onClick: () => { }
    },
    {
      title: "Cuci Koper",
      description: "Jaga koper Anda tetap Bersih dan Siap untuk Perjalanan Berikutnya.",
      imgSrc: "/images/services/cuci-koper.jpg",
      imgAlt: "Cuci Koper -" + HOME_IMG_ALT,
      linkPage: ROUTES.SUITCASE_SERVICES,
      linkText: "Lihat Detail",
      onClick: () => { }
    },
  ];

  return (
    <ServicesList
      title="Layanan Cuci Perlengkapan Pribadi Anda :"
      data={dataPersonalSuplies}
    />
  );
};

const HomeServicesWashingClothes = () => {
  const dataWashClothes = [
    {
      title: "Cuci Seterika Uap",
      description: "Rasakan kenyamanan memakai pakaian yang Bersih dan Rapi. Tampil percaya diri dengan pakaian yang Bebas Kusut.",
      imgSrc: "/images/services/cuci-setrika-uap.jpg",
      imgAlt: "Laundry Terdekat -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang",
      onClick: () => { }
    },
    {
      title: "Cuci Kering (Dry Cleaning)",
      description: "Jaga Kebaya maupun Jas Anda agar tetap bersih dan rapi untuk acara spesial.",
      imgSrc: "/images/services/cuci-kering.jpg",
      imgAlt: "Cuci Jas maupun Cuci Kebaya -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang",
      onClick: () => { }
    },
    {
      title: "Cuci Lipat",
      description: "Cucian Menumpuk? Serahkan Pada Kami! Dapatkan pakaian yang Wangi, Rapi, dan Siap Pakai dengan harga bersahabat.",
      imgSrc: "/images/services/cuci-lipat.jpg",
      imgAlt: "Laundry Terdekat -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang",
      onClick: () => { }
    },
    {
      title: "Seterika Saja",
      description: "Malas Setrika? Sertahkan pakaian kusut Anda pada layanan Setrika Pakaian Kami.",
      imgSrc: "/images/services/laundry-setrika.jpg",
      imgAlt: "Laundry Setrika Terdekat -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang",
      onClick: () => { }
    },
    {
      title: "Cuci Selimut",
      description: "Pastikan Selimut Anda selalu Bersih dan Higienis untuk Kesehatan dan Kenyamanan tidur Anda.",
      imgSrc: "/images/services/cuci-selimut.jpg",
      imgAlt: "Laundry Selimut Terdekat -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang",
      onClick: () => { }
    },
    {
      title: "Cuci Bed Cover",
      description: "Dapatkan Bed Cover Bersih dan Wangi untuk Tidur lebih Nyaman dan Nyenyak setiap malam.",
      imgSrc: "/images/services/cuci-bed-cover.jpg",
      imgAlt: "Laundry Bed Cover Terdekat -" + HOME_IMG_ALT,
      linkPage: "#our-location",
      linkText: "Pesan Sekarang",
      onClick: () => { }
    },
  ];

  return (
    <ServicesList
      title="Layanan Laundry Pakaian :"
      data={dataWashClothes}
    />
  );
};

const ServicesList: React.FC<{
  title: string;
  data: ServicesData[]
}> = ({ title, data }) => {
  const ref = React.useRef(null);
  const isIntersecting = useIsVisible({ ref, once: true });

  return (
    <div ref={ref} className="pb-5">
      <h3 className={clsx(
        "mb-2 text-xl pl-3 md:pl-5 font-medium",
        isIntersecting ? "animate-fade-up animate-ease-in-out animate-delay-500" : "opacity-0"
      )}>
        {title}
      </h3>
      <div className={clsx(
        isIntersecting ? "animate-fade-up animate-ease-in-out animate-delay-700" : "opacity-0"
      )}>
        <ScrollableX className="grid gap-2 pb-1" theme="primary">
          {data.map((item, index) => (
            <HomeServicesCard
              key={`${index} - ${item.title}`}
              itemId={`${index} - ${item.title}`}
              {...item}
            />
          ))}
        </ScrollableX>
      </div>
    </div >
  );
};

const HomeServicesCard: React.FC<
  { itemId: string; } & ServicesData
> = ({ itemId, title, description, imgSrc, imgAlt, linkPage, linkText, onClick }): React.JSX.Element => {
  const ref = React.useRef(null);
  // const isIntersecting = useIsVisible({ ref, once: true });
  const isIntersecting = true;

  return (
    <Card
      ref={ref}
      id={itemId}
      className={clsx(
        "w-[300px] h-full !p-0 flex flex-col border-none shadow-inner shadow-primary",
      )}
    >
      <div className="h-[167px] w-full relative">
        <Image
          className="rounded-t-lg"
          src={imgSrc}
          alt={imgAlt}
          width={300}
          height={167}
        />
      </div>
      <main className={clsx(
        "flex-1 pt-5 px-5",
        isIntersecting ? "animate-fade-up animate-once animate-ease-in-out" : "opacity-0"
      )}>
        <h3 className="mb-2 text-2xl font-bold tracking-tight">
          {title}
        </h3>
        <p
          className="font-normal"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </main>
      <footer className={clsx(
        "p-5",
        isIntersecting ? "animate-fade-up animate-once animate-ease-in-out" : "opacity-0"
      )}>
        <Link
          onClick={onClick}
          href={linkPage}
          className={clsx(
            "bg-secondary text-secondary-foreground hover:bg-primary hover:text-secondary",
            "inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg"
          )}
        >
          {linkText}
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </footer>
    </Card>
  );
};

// const useHomeServicesTracker = ({ isInView }: { isInView: boolean }) => {
//   const analytic = useAnalytic();

//   useEffect(() => {
//     if (isInView) {
//       analytic.trackStart("click_home_service_carpet");
//       analytic.trackStart("click_home_service_laundry_dry");
//       analytic.trackStart("click_home_service_laundry_iron");
//     }
//   }, [isInView, analytic]);

//   const handleClickCarpet = () => {
//     analytic.trackEnd("click_home_service_carpet");
//     analytic.trackEvent("click_home_service_carpet", "Home Page", { success: 1, message: "OK" });
//   };

//   const handleClickLaundryDry = () => {
//     analytic.trackEnd("click_home_service_laundry_dry");
//     analytic.trackEvent("click_home_service_laundry_dry", "Home Page", { success: 1, message: "OK" });
//   };

//   const handleClickLaundryIron = () => {
//     analytic.trackEnd("click_home_service_laundry_iron");
//     analytic.trackEvent("click_home_service_laundry_iron", "Home Page", { success: 1, message: "OK" });
//   };

//   return {
//     handleClickCarpet,
//     handleClickLaundryDry,
//     handleClickLaundryIron,
//   };
// };