import * as LAUNDRY_STROLLER from "@/constant/seo/dynamic/stroller";
import * as LAUNDRY_SPRING_BED from "@/constant/seo/dynamic/spring-bed";
import * as LAUNDRY_SOFA from "@/constant/seo/dynamic/sofa";
import * as LAUNDRY_SUITCASE from "@/constant/seo/dynamic/suitcase";
import * as LAUNDRY_DOLL from "@/constant/seo/dynamic/doll";
import * as LAUNDRY_HELM from "@/constant/seo/dynamic/helm";

import { IWebContent, IWebSeo } from "./dynamic/type";

export const getDynamicContent = (slug: string) => {
  const mapingData: Record<string, { webContent: IWebContent, webSeo: IWebSeo }> = {
    "laundry-stroller": LAUNDRY_STROLLER,
    "cuci-stroller": LAUNDRY_STROLLER,
    "laundry-spring-bed": LAUNDRY_SPRING_BED,
    "cuci-spring-bed": LAUNDRY_SPRING_BED,
    "laundry-sofa": LAUNDRY_SOFA,
    "cuci-sofa": LAUNDRY_SOFA,
    "laundry-koper-dan-tas": LAUNDRY_SUITCASE,
    "cuci-koper-dan-tas": LAUNDRY_SUITCASE,
    "laundry-boneka": LAUNDRY_DOLL,
    "cuci-boneka": LAUNDRY_DOLL,
    "laundry-helm": LAUNDRY_HELM,
    "cuci-helm": LAUNDRY_HELM,
  };

  if (mapingData[slug] === undefined) {
    return {
      dataSeo: null,
      data: {} as IWebContent
    };
  }

  const dataSeo = mapingData[slug]?.webSeo;
  const dataContent = mapingData[slug]?.webContent;

  return {
    dataSeo,
    data: dataContent,
  };
};