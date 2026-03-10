import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Setrika Pakaian Terdekat: Pakaian Rapi Bebas Kusut Tanpa Repot";
export const SLUG = "laundry-setrika";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Layanan setrika pakaian profesional dengan harga terjangkau. Malas setrika? Serahkan pakaian kusut Anda kepada kami dan dapatkan hasil yang rapi.",
  primaryKeyword: [
    "jasa setrika pakaian",
    "laundry setrika",
    "setrika pakaian",
  ],
  secondaryKeyword: [
    "jasa setrika terdekat",
    "harga setrika pakaian",
    "laundry setrika murah",
    "setrika pakaian kiloan",
    "layanan setrika baju",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/laundry-setrika.jpg",
};

export const webContent: IWebContent = {
  title: "Laundry Setrika Pakaian Medan Marelan: Rapi dan Bebas Kusut Tanpa Repot",
  subTitle: "Malas Setrika? Serahkan Pakaian Kusut Anda kepada Layanan Setrika Profesional Kami!",
  serviceName: "Setrika Saja",
  serviceNameAlt: "Jasa Setrika Pakaian",
  article: `
  <p><strong>Tidak ada waktu atau malas menyetrika pakaian? Layanan Setrika Saja dari Laundry G 99 adalah solusi tepat untuk pakaian rapi Anda!</strong></p>
  <h2>Kenapa Harus Setrika Saja di Laundry G 99 :</h2>
  <ul>
      <li><strong>Rapi dan Bebas Kusut:</strong> Pakaian Anda akan rapi dan bebas kusut setelah disetrika.</li>
      <li><strong>Tenaga Profesional:</strong> Ditangani oleh tenaga yang berpengalaman dan terampil.</li>
      <li><strong>Harga Terjangkau:</strong> Layanan setrika dengan harga yang bersahabat.</li>
      <li><strong>Pengerjaan Cepat:</strong> Pakaian Anda selesai tepat waktu.</li>
  </ul>
  <br/>
  <h2>Keuntungan Menggunakan Layanan Setrika Saja :</h2>
  <ul>
      <li>Hemat waktu untuk kegiatan lain</li>
      <li>Tampil rapi dan profesional setiap hari</li>
      <li>Cocok untuk pakaian kerja dan formal</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Percayakan Pakaian Anda kepada Layanan Setrika Saja di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `,
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/laundry-setrika.jpg",
  ],
  faq: []
};
