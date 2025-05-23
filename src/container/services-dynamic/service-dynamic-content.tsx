import { FadeIn } from "@/components/ui/animations";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons/social";
import { Image } from "@/components/ui/image";
import { getDynamicContent } from "@/constant/seo/get-dynamic-content";
import { SHOP_PHONE_2, SHOP_PHONE_SHOW, SHOP_PHONE_SHOW_2 } from "@/constant/shop";
import { WA_LINK, WA_SERVICE_NAME } from "@/constant/whatsapp";

export const ServiceDynamicContent = ({ slug }: { slug: string }) => {

  const { dataSeo, data } = getDynamicContent(slug);

  return (
    <section className="w-full pt-10 pb-20 sm:py-10">
      <div className="container">
        <div className="mb-7">
          <h1 className="font-bold text-4xl md:text-5xl !leading-tight md:!leading-snug mb-1">{data.title}</h1>
          {data.subTitle && (
            <p className="font-medium text-xl">{data.subTitle}</p>
          )}
        </div>

        <FadeIn>
          <div className="article mb-10" dangerouslySetInnerHTML={{ __html: data.article }} />
        </FadeIn>

        {data.prices.length > 0 && (
          <FadeIn delay={0.2}>
            <div className="pb-8">
              <h2 className="font-bold text-2xl mb-3">Biaya {data.serviceName} :</h2>
              <div>
                {data.prices.map((price, key) => (
                  <div key={key + price.value}>
                    {price.type} : <b>{price.value}</b>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
        {data.images.length > 0 && (
          <FadeIn>
            <div>
              <h2 className="font-bold text-2xl mb-3">Hasil Pengerjaan {data.serviceName} Kami:</h2>
              <div className="mx-auto max-w-[600px] flex flex-col gap-5 justify-center">
                {data.images.map((image, key) => (
                  <Image
                    className="rounded-3xl shadow-lg"
                    key={key + image}
                    src={image}
                    alt={dataSeo?.imgAlt || ""}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={600}
                    height={300}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn>
          <h2 className="mt-20 font-bold text-2xl mb-3 text-left md:text-center">{data.serviceName} Anda Sekarang :</h2>
          <div className="mx-3 flex flex-col md:flex-row justify-center gap-5 md:gap-8">
            <a
              href={WA_LINK(WA_SERVICE_NAME.GLOBAL)} // Need Enhance
              target="_blank"
              className="flex justify-center items-center gap-2 rounded-md py-4 px-8 bg-[#4ecb5b] shadow-2xl hover:shadow-xl active:shadow-2xl focus:shadow-2xl"
            >
              <WhatsAppIcon className="w-10 h-10" />
              <b className="text-[#fff] text-xl drop-shadow-xl">{SHOP_PHONE_SHOW}</b>
            </a>
            <a
              href={`tel:${SHOP_PHONE_2}`}
              className="flex justify-center items-center gap-2 rounded-md py-4 px-8 bg-background shadow-2xl border hover:border-primary hover:shadow-xl active:shadow-2xl focus:shadow-2xl"
            >
              <PhoneIcon className="w-10 h-10" />
              <b className="text-xl drop-shadow-xl">{SHOP_PHONE_SHOW_2}</b>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};