import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Gorden Terdekat: Layanan Berkualitas dengan Harga Kompetitif";
export const SLUG = "laundry-gorden";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati jasa cuci gorden premium dengan harga terjangkau. Kami membersihkan gorden dari debu dan kotoran untuk suasana rumah yang lebih segar.",
  primaryKeyword: [
    "laundry gorden",
    "cuci gorden",
    "jasa cuci gorden",
  ],
  secondaryKeyword: [
    "cuci gorden terdekat",
    "harga cuci gorden",
    "laundry gorden murah",
    "jasa cuci gorden rumah",
    "layanan laundry gorden",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/cuci-gorden.jpg",
};

export const webContent: IWebContent = {
  title: "Laundry Gorden Medan Marelan: Cuci Gorden Berkualitas Tinggi",
  subTitle: "Gorden Anda Kotor dan Berdebu? Serahkan pada Kami! Kami siap Membersihkan Gorden Anda.",
  serviceName: "Laundry Gorden",
  serviceNameAlt: "Cuci Gorden",
  article: `
  <p><strong>Apakah gorden Anda mulai terlihat kotor atau berdebu? Saatnya memberikan perawatan terbaik untuk gorden kesayangan Anda dengan layanan laundry dari Laundry G 99 Kami!</strong></p>
  <h2>Kenapa Harus Laundry Gorden di Laundry G 99 :</h2>
  <ul>
      <li><strong>Profesional &amp; Berpengalaman:</strong> Kami mampu membersihkan gorden dari berbagai bahan dan jenis.</li>
      <li><strong>Teknologi Canggih:</strong> Menggunakan alat dan produk pembersih terbaru untuk hasil maksimal.</li>
      <li><strong>Hemat Waktu dan Tenaga:</strong> Layanan cepat dan efisien untuk keperluan Anda.</li>
      <li><strong>Ramah Lingkungan:</strong> Produk pembersih kami aman dan ramah lingkungan.</li>
  </ul>
  <br/>
  <h2>Mengapa Penting untuk Mencuci Gorden Secara Rutin?</h2>
  <ul>
      <li>Menghilangkan debu dan alergen</li>
      <li>Menjaga kebersihan dan kesehatan</li>
      <li>Mencegah pertumbuhan bakteri dan jamur</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Jadikan Gorden Anda Bersih dan Segar dengan Jasa Cuci Gorden di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `,
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/cuci-gorden.jpg",
  ],
  faq: []
};
