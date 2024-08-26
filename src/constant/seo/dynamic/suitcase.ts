import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Koper Medan Marelan: Bisa Antar-Jemput";
export const SLUG = "laundry-koper";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati jasa cuci koper premium dengan harga terjangkau, bisa Antar-Jemput. Kami menggunakan teknologi terbaru untuk membersihkan koper Anda secara efektif.",
  primaryKeyword: [
    "laundry koper",
    "cuci koper",
    "jasa cuci koper",
  ],
  secondaryKeyword: [
    "cuci koper panggilan",
    "harga cuci koper",
    "laundry koper terdekat",
    "jasa cuci koper murah",
    "layanan laundry koper",
  ],
  imgAlt: "",
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/suitcase/laundry-koper-medan-marelan.png",
};

export const webContent: IWebContent = {
  title: "Laundry Koper Medan Marelan: Cuci Koper Berkualitas Tinggi",
  subTitle: "Koper ataupun Tas Anda Kotor? Serahkan pada Kami! Kami siap Antar-Jemput.",
  serviceName: "Laundry Koper",
  serviceNameAlt: "Cuci Koper",
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
    "/images/services/suitcase/laundry-koper-medan-marelan.png",
  ],
  faq: []
};
