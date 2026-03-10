import * as LAUNDRY_STROLLER from "@/constant/seo/dynamic/stroller";
import * as LAUNDRY_SPRING_BED from "@/constant/seo/dynamic/spring-bed";
import * as LAUNDRY_SOFA from "@/constant/seo/dynamic/sofa";
import * as LAUNDRY_SUITCASE from "@/constant/seo/dynamic/suitcase";
import * as LAUNDRY_BAG from "@/constant/seo/dynamic/bag";
import * as LAUNDRY_DOLL from "@/constant/seo/dynamic/doll";
import * as LAUNDRY_HELM from "@/constant/seo/dynamic/helm";
import * as LAUNDRY_SHOES from "@/constant/seo/dynamic/sepatu";
import * as LAUNDRY_PILLOW from "@/constant/seo/dynamic/pillows-and-bolsters";
import * as LAUNDRY_GORDEN from "@/constant/seo/dynamic/gorden";
import * as LAUNDRY_SETRIKA_UAP from "@/constant/seo/dynamic/setrika-uap";
import * as LAUNDRY_DRY_CLEANING from "@/constant/seo/dynamic/dry-cleaning";
import * as LAUNDRY_TANGAN_MANUAL from "@/constant/seo/dynamic/tangan-manual";
import * as LAUNDRY_ULOS from "@/constant/seo/dynamic/ulos";
import * as LAUNDRY_LIPAT from "@/constant/seo/dynamic/lipat";
import * as LAUNDRY_SETRIKA from "@/constant/seo/dynamic/setrika";
import * as LAUNDRY_SELIMUT from "@/constant/seo/dynamic/selimut";
import * as LAUNDRY_BED_COVER from "@/constant/seo/dynamic/bed-cover";

import { IWebContent, IWebSeo } from "./dynamic/type";

export const AVAILABLE_SERVICES_ROUTES: Record<string, { webContent: IWebContent, webSeo: IWebSeo }> = {
  "laundry-stroller": LAUNDRY_STROLLER,
  "cuci-stroller": LAUNDRY_STROLLER,
  "laundry-spring-bed": LAUNDRY_SPRING_BED,
  "cuci-spring-bed": LAUNDRY_SPRING_BED,
  "laundry-sofa": LAUNDRY_SOFA,
  "cuci-sofa": LAUNDRY_SOFA,
  "laundry-koper": LAUNDRY_SUITCASE,
  "cuci-koper": LAUNDRY_SUITCASE,
  "laundry-sepatu": LAUNDRY_SHOES,
  "cuci-sepatu": LAUNDRY_SHOES,
  "laundry-tas": LAUNDRY_BAG,
  "cuci-tas": LAUNDRY_BAG,
  "laundry-boneka": LAUNDRY_DOLL,
  "cuci-boneka": LAUNDRY_DOLL,
  "laundry-helm": LAUNDRY_HELM,
  "cuci-helm": LAUNDRY_HELM,
  "laundry-bantal-dan-guling": LAUNDRY_PILLOW,
  "cuci-bantal-dan-guling": LAUNDRY_PILLOW,
  "laundry-gorden": LAUNDRY_GORDEN,
  "cuci-gorden": LAUNDRY_GORDEN,
  "laundry-setrika-uap": LAUNDRY_SETRIKA_UAP,
  "cuci-setrika-uap": LAUNDRY_SETRIKA_UAP,
  "laundry-kering": LAUNDRY_DRY_CLEANING,
  "cuci-kering": LAUNDRY_DRY_CLEANING,
  "laundry-tangan-manual": LAUNDRY_TANGAN_MANUAL,
  "cuci-tangan-manual": LAUNDRY_TANGAN_MANUAL,
  "laundry-ulos": LAUNDRY_ULOS,
  "cuci-ulos": LAUNDRY_ULOS,
  "laundry-lipat": LAUNDRY_LIPAT,
  "cuci-lipat": LAUNDRY_LIPAT,
  "laundry-setrika": LAUNDRY_SETRIKA,
  "cuci-setrika": LAUNDRY_SETRIKA,
  "laundry-selimut": LAUNDRY_SELIMUT,
  "cuci-selimut": LAUNDRY_SELIMUT,
  "laundry-bed-cover": LAUNDRY_BED_COVER,
  "cuci-bed-cover": LAUNDRY_BED_COVER,
};

export const getDynamicContent = (slug: string) => {

  if (AVAILABLE_SERVICES_ROUTES[slug] === undefined) {
    return {
      dataSeo: null,
      data: {} as IWebContent
    };
  }

  const dataSeo = AVAILABLE_SERVICES_ROUTES[slug]?.webSeo;
  const dataContent = AVAILABLE_SERVICES_ROUTES[slug]?.webContent;

  return {
    dataSeo,
    data: dataContent,
  };
};