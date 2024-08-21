import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "";
export const SLUG = "laundry-stroller";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "",
  primaryKeyword: [],
  secondaryKeyword: [],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/XXXX",
};

export const webContent: IWebContent = {
  title: "",
  subTitle: "",
  serviceName: "",
  serviceNameAlt: "",
  article: ``, // will help to edit html: https://onlinehtmleditor.dev/
  prices: [],
  hooks: "",
  article2: "",
  images: [],
  faq: []
};
