import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Cuci Sepatu Medan Marelan: Profesional, Bersih & Terawat!";
export const SLUG = "laundry-sepatu";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "XXXX",
  primaryKeyword: [
    "laundry koper",
    "cuci sepatu",
    "jasa cuci sepatu",
    "jasa laundry sepatu",
  ],
  secondaryKeyword: [
    "harga laundry sepatu",
    "laundry sepatu terdekat",
    "laundry sepatu marelan",
    "cuci sepatu marelan",
  ],
  imgAlt: "",
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/suitcase/laundry-koper-medan-marelan.png",
};

export const webContent: IWebContent = {
  title: WEB_TITLE,
  subTitle: "Koper ataupun Tas Anda Kotor? Serahkan pada Kami! Kami siap Antar-Jemput.",
  serviceName: "Laundry Sepatu",
  serviceNameAlt: "Cuci Sepatu",
  article: `
  <p><strong>Layanan laundry dari kami dapat membantu membersihkan koper Anda sehingga menjadi bersih dan nyaman untuk digunakan. Kami melayani pencucian koper dari berbagai bahan dan ukuran. Proses pencucian dan sabun yang kami gunakan sangat aman sehingga tidak merusak kualitas koper Anda. Percayakan kebersihan koper Anda bersama Laundry G99!</strong></p>
  <br/>
  <h2>Layanan Laundry Koper Lainnya:</h2>
  <ul>
      <li>Koper Kanvas L</li>
      <li>Koper Kanvas SS</li>
      <li>Koper Kanvas M</li>
      <li>Koper Kanvas S</li>
      <li>Koper Kanvas XL</li>
      <li>Koper Bahan Fiber / Polycarbonate Uk S</li>
      <li>Koper Bahan Fiber / Polycarbonate Uk M</li>
      <li>Koper Bahan Fiber / Polycarbonate Uk L</li>
      <li>Koper Bahan Fiber / Polycarbonate Uk XL</li>
  </ul>
  <br/>
  <p><strong>Lama Pengerjaan: </strong>3 – 5 Hari</p>
  <p><strong>Layanan Lain: &nbsp;</strong></p>
  <ul>
      <li>Tersedia Layanan Express</li>
      <li>Tersedia Layanan Antar Jemput<br>&nbsp;</li>
  </ul>
  `, // will help to edit html: https://onlinehtmleditor.dev/
  prices: [
    // {
    //   type: "Harga Mulai Dari",
    //   value: "Rp 75.000,-"
    // }
  ],
  hooks: "",
  article2: "",
  images: [
    "/images/services/shoes/laundry-sepatu-medan-marelan-1.png",
    "/images/services/shoes/laundry-sepatu-medan-marelan-2.png",
    "/images/services/shoes/laundry-sepatu-medan-marelan-3.png",
    "/images/services/shoes/laundry-sepatu-medan-marelan-4.png",
  ],
  faq: []
};
