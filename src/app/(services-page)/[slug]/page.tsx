import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDynamicContainer } from "@/container/services-dynamic";
import { AVAILABLE_SERVICES_ROUTES, getDynamicContent } from "@/constant/seo/get-dynamic-content";
import { createMetadata } from "@/constant/seo/meta-data";

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(AVAILABLE_SERVICES_ROUTES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { dataSeo } = getDynamicContent(slug);

  if (dataSeo === null) {
    return notFound();
  }

  return {
    ...createMetadata({
      title: dataSeo.title,
      description: dataSeo.description,
      primaryKeyword: dataSeo.primaryKeyword,
      secondaryKeyword: dataSeo.secondaryKeyword,
      socialImage: {
        url: dataSeo.socialImage,
        width: 600,
        height: 300,
      },
    }),
    alternates: {
      canonical: dataSeo.routes,
    },
  };
}

export default async function ServicesDynamic({ params }: Readonly<Props>) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const { dataSeo } = getDynamicContent(slug);

  if (!dataSeo) {
    return notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataSeo.applicationId) }}
      />
      <ServiceDynamicContainer slug={slug} />
    </>
  );
}
