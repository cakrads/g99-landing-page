import * as LAUNDRY_STROLLER from "@/constant/seo/dynamic/stroller";

import { IWebContent, IWebSeo } from "./dynamic/type";

export const getDynamicContent = (slug: string) => {
  const mapingData: Record<string, { webContent: IWebContent, webSeo: IWebSeo }> = {
    "laundry-stroller": LAUNDRY_STROLLER
  };

  const dataSeo = mapingData[slug || "laundry-stroller"].webSeo;
  const dataContent = mapingData[slug || "laundry-stroller"].webContent;

  return {
    dataSeo,
    data: dataContent,
  };
};