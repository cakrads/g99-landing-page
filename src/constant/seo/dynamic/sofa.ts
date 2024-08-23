import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Sofa Terdekat: Layanan Berkualitas dengan Harga Kompetitif";
export const SLUG = "laundry-sofa";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati jasa cuci sofa premium dengan harga terjangkau, bisa Antar-Jemput. Kami menggunakan teknologi terbaru untuk membersihkan sofa Anda secara efektif.",
  primaryKeyword: [
    "laundry sofa",
    "cuci sofa",
    "jasa cuci sofa",
    "service cuci sofa",
  ],
  secondaryKeyword: [
    "cuci sofa panggilan",
    "harga cuci sofa",
    "laundry sofa terdekat",
    "cuci sofa di rumah",
    "jasa cuci sofa murah",
    "layanan laundry sofa",
    "sofa kotor",
    "cara membersihkan sofa",
  ],
  imgAlt: WEB_TITLE,
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/sofa/1.png",
};

export const webContent: IWebContent = {
  title: "Laundry Sofa Medan Marelan: Cuci Sofa Berkualitas Tinggi",
  subTitle: "Sofa Anda Kotor? Serahkan pada Kami! Kami siap Antar-Jemput dan Membersihkan Sofa Anda.",
  serviceName: "Laundry Sofa",
  serviceNameAlt: "Cuci Sofa",
  article: `
  <p><strong>Apakah sofa Anda mulai terlihat kotor atau kurang bersih? Saatnya memberikan perawatan terbaik untuk sofa kesayangan Anda dengan layanan laundry dari Laundry G 99 Kami!</strong></p>
  <h2>Kenapa Harus Laundry Sofa di Laundry G 99 :</h2>
  <ul>
      <li><strong>Profesional &amp; Berpengalaman:</strong> Kami mampu dalam membersihkan sofa dari berbagai bahan dan jenis.</li>
      <li><strong>Teknologi Canggih:</strong> Menggunakan alat dan produk pembersih terbaru untuk hasil maksimal. </li>
      <li><strong>Hemat Waktu dan Tenaga:</strong> Antar dan jemput sofa Anda, tanpa ribet! </li>
      <li><strong>Ramah Lingkungan:</strong> Produk pembersih kami aman dan ramah lingkungan.</li>
  </ul>
  <br/>
  <h2>Mengapa Penting untuk Mencuci Sofa Secara Rutin?</h2>
  <ul>
      <li>Manfaat kesehatan</li>
      <li>Menjaga kebersihan dan kebersihan</li>
      <li>Mencegah pertumbuhan bakteri dan jamur</li>
  </ul>
  <br/>
  <br/>
  <h2 style="text-align:center;">Jadikan Sofa Anda Bersih dan Segar dengan Jasa Cuci Sofa di Laundry G 99!&nbsp;</h2>
  <br/>
  <br/>
  `, // will help to edit html: https://onlinehtmleditor.dev/
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/sofa/1.png",
    "/images/services/sofa/2.png",
  ],
  faq: []
};
