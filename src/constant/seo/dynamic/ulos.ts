import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Ulos Terdekat: Rawat Ulos Anda agar Tetap Bersih dan Rapi";
export const SLUG = "laundry-ulos";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Layanan cuci ulos profesional untuk menjaga kain tradisional Batak Anda tetap bersih, terawat, dan indah untuk acara spesial.",
  primaryKeyword: [
    "cuci ulos",
    "laundry ulos",
    "jasa cuci ulos",
  ],
  secondaryKeyword: [
    "cuci ulos terdekat",
    "harga cuci ulos",
    "layanan laundry ulos",
    "cuci kain ulos",
    "perawatan ulos",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/cuci-ulos-marelan.jpg",
};

export const webContent: IWebContent = {
  title: "Laundry Cuci Ulos Medan Marelan: Perawatan Kain Tradisional yang Tepat",
  subTitle: "Ulos Anda Perlu Dibersihkan? Percayakan kepada Kami untuk Perawatan yang Tepat dan Aman!",
  serviceName: "Cuci Ulos",
  serviceNameAlt: "Laundry Ulos",
  article: `
  <p><strong>Ulos adalah kain tradisional Batak yang memiliki nilai budaya dan sentimental tinggi. Percayakan perawatan ulos Anda kepada Laundry G 99 untuk hasil yang terbaik!</strong></p>
  <h2>Kenapa Harus Cuci Ulos di Laundry G 99 :</h2>
  <ul>
      <li><strong>Berpengalaman dengan Kain Tradisional:</strong> Kami memahami cara merawat ulos dengan benar.</li>
      <li><strong>Produk Pembersih Aman:</strong> Menggunakan produk yang aman untuk kain tenun tradisional.</li>
      <li><strong>Menjaga Warna dan Kualitas:</strong> Proses pencucian yang tepat menjaga keindahan warna ulos.</li>
      <li><strong>Hasil Bersih dan Segar:</strong> Ulos Anda akan bersih dan siap dipakai untuk acara spesial.</li>
  </ul>
  <br/>
  <h2>Mengapa Penting Merawat Ulos dengan Benar?</h2>
  <ul>
      <li>Menjaga nilai budaya dan estetika ulos</li>
      <li>Memperpanjang usia pakai kain</li>
      <li>Menjaga warna dan motif tetap cerah</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Percayakan Ulos Anda kepada Layanan Cuci Ulos di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `,
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/cuci-ulos-marelan.jpg",
  ],
  faq: []
};
