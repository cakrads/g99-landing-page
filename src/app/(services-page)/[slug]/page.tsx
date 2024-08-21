import { Metadata } from "next";
import { notFound } from "next/navigation";
import Head from "next/head";

import { HOST_URL } from "@/constant/env";
import { ServiceDynamicContainer } from "@/container/services-dynamic";
import { getDynamicContent } from "@/constant/seo/get-dynamic-content";
import { createMetadata } from "@/constant/seo/meta-data";

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const { dataSeo } = getDynamicContent(params.slug);

  if (dataSeo === null) {
    return notFound();
  }

  return createMetadata({
    title: dataSeo.title,
    description: dataSeo.description,
    primaryKeyword: dataSeo.primaryKeyword,
    secondaryKeyword: dataSeo.secondaryKeyword,
    socialImage: {
      url: dataSeo.socialImage,
      width: 600,
      height: 300,
    },
  });
}

export default function ServicesDynamic({ params }: Readonly<Props>) {

  if (!params.slug) {
    return notFound();
  }

  const { dataSeo } = getDynamicContent(params.slug);

  if (!dataSeo) {
    return notFound();
  }

  return (
    <>
      <Head>
        <link rel="canonical" href={HOST_URL + dataSeo.routes} />
        <script type="application/ld+json">
          {JSON.stringify(dataSeo.applicationId)}
        </script>
      </Head>
      <ServiceDynamicContainer slug={params.slug} />
    </>
  );
}
