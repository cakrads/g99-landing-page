import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Kering (Dry Cleaning) Terdekat: Kebaya dan Jas Tetap Bersih dan Rapi";
export const SLUG = "laundry-kering";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Layanan dry cleaning profesional untuk kebaya, jas, dan pakaian formal Anda. Jaga pakaian spesial Anda tetap bersih dan rapi untuk acara penting.",
  primaryKeyword: [
    "dry cleaning",
    "cuci kering",
    "jasa dry cleaning",
  ],
  secondaryKeyword: [
    "dry cleaning terdekat",
    "cuci kebaya",
    "cuci jas",
    "harga dry cleaning",
    "layanan cuci kering",
    "laundry dry cleaning",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/cuci-kering.jpg",
};

export const webContent: IWebContent = {
  title: "Dry Cleaning Medan Marelan: Jaga Kebaya dan Jas Anda Tetap Bersih dan Rapi",
  subTitle: "Punya Acara Spesial? Percayakan Kebaya dan Jas Anda kepada Layanan Dry Cleaning Profesional Kami!",
  serviceName: "Dry Cleaning",
  serviceNameAlt: "Cuci Kering",
  article: `
  <p><strong>Punya acara spesial dan ingin tampil sempurna? Layanan Dry Cleaning dari Laundry G 99 adalah solusi terbaik untuk menjaga kebaya, jas, dan pakaian formal Anda tetap bersih dan rapi!</strong></p>
  <h2>Kenapa Harus Dry Cleaning di Laundry G 99 :</h2>
  <ul>
      <li><strong>Proses Tanpa Air:</strong> Menggunakan bahan pelarut khusus yang aman untuk pakaian delicate.</li>
      <li><strong>Ahli Pakaian Formal:</strong> Berpengalaman menangani kebaya, jas, gaun, dan pakaian formal lainnya.</li>
      <li><strong>Menjaga Kualitas Kain:</strong> Proses dry cleaning menjaga warna dan tekstur kain tetap terjaga.</li>
      <li><strong>Hasil Sempurna:</strong> Pakaian Anda akan bersih, rapi, dan siap untuk acara spesial.</li>
  </ul>
  <br/>
  <h2>Pakaian yang Cocok untuk Dry Cleaning :</h2>
  <ul>
      <li>Kebaya dan busana tradisional</li>
      <li>Jas dan blazer</li>
      <li>Gaun pesta dan formal</li>
      <li>Pakaian berbahan sutra atau wol</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Percayakan Pakaian Spesial Anda kepada Layanan Dry Cleaning di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `,
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/cuci-kering.jpg",
  ],
  faq: []
};
