import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Lipat Terdekat: Pakaian Wangi, Rapi, dan Siap Pakai";
export const SLUG = "laundry-lipat";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Layanan cuci lipat kiloan dengan harga terjangkau. Cucian menumpuk? Serahkan pada kami dan dapatkan pakaian yang wangi, rapi, dan siap pakai.",
  primaryKeyword: [
    "cuci lipat",
    "laundry cuci lipat",
    "jasa cuci lipat",
  ],
  secondaryKeyword: [
    "laundry cuci lipat terdekat",
    "harga cuci lipat",
    "laundry kiloan cuci lipat",
    "cuci lipat murah",
    "layanan laundry kiloan",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/cuci-lipat.jpg",
};

export const webContent: IWebContent = {
  title: "Laundry Cuci Lipat Medan Marelan: Pakaian Wangi, Rapi, dan Siap Pakai",
  subTitle: "Cucian Menumpuk? Jangan Khawatir! Serahkan pada Kami dan Dapatkan Pakaian Bersih, Wangi, dan Rapi.",
  serviceName: "Cuci Lipat",
  serviceNameAlt: "Laundry Cuci Lipat",
  article: `
  <p><strong>Cucian menumpuk dan tidak sempat mencuci? Layanan Cuci Lipat dari Laundry G 99 adalah solusi praktis untuk kesibukan Anda sehari-hari!</strong></p>
  <h2>Kenapa Harus Cuci Lipat di Laundry G 99 :</h2>
  <ul>
      <li><strong>Bersih dan Wangi:</strong> Pakaian Anda akan bersih, segar, dan harum setelah dicuci.</li>
      <li><strong>Dilipat Rapi:</strong> Setiap pakaian dilipat dengan rapi dan siap disimpan atau dipakai.</li>
      <li><strong>Harga Terjangkau:</strong> Layanan kiloan dengan harga yang bersahabat.</li>
      <li><strong>Pengerjaan Cepat:</strong> Pakaian Anda selesai dalam waktu yang dijanjikan.</li>
  </ul>
  <br/>
  <h2>Keuntungan Menggunakan Layanan Cuci Lipat :</h2>
  <ul>
      <li>Hemat waktu dan tenaga</li>
      <li>Pakaian bersih dan siap pakai</li>
      <li>Cocok untuk keluarga sibuk</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Serahkan Cucian Anda kepada Layanan Cuci Lipat di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `,
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/cuci-lipat.jpg",
  ],
  faq: []
};
