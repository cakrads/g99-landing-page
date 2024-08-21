import { generateAppIdJson } from "../app-id-json";

export const WEB_TITLE = "";
export const WEB_DESCRIPTION = "";
export const WEB_KEYWORDS_PRIMARY = [
];
export const WEB_KEYWORDS_SECONDARY = [
];
export const WEB_KEYWORDS = [
  ...WEB_KEYWORDS_PRIMARY,
  ...WEB_KEYWORDS_SECONDARY
];
export const IMG_ALT = WEB_TITLE;

export const APPLICATION_ID_JSON = generateAppIdJson({ webTitle: WEB_TITLE });

/****************************************************
  CONTENT
*****************************************************/
export const CONTENT_TITLE = "";
export const CONTENT_SUB_TITLE = "";
export const CONTENT_ARTICLE = "";
export const CONTENT_PRICE = [
  {
    "type": "",
    "price": "",
  }
];
export const CONTENT_IMAGES = [];