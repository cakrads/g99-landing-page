import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Helm Medan Marelan: Bisa Antar-Jemput";
export const SLUG = "laundry-helm";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati jasa cuci helm premium dengan harga terjangkau, bisa Antar-Jemput. Kami menggunakan teknologi terbaru untuk membersihkan helm Anda secara efektif.",
  primaryKeyword: [
    "laundry helm",
    "cuci helm",
    "jasa cuci helm",
  ],
  secondaryKeyword: [
    "cuci helm panggilan",
    "harga cuci helm",
    "laundry helm terdekat",
    "jasa cuci helm murah",
    "layanan laundry helm",
  ],
  imgAlt: "",
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/helm/laundry-helm.png",
};

export const webContent: IWebContent = {
  title: "Laundry Helm Medan Marelan: Cuci Helm Berkualitas Tinggi",
  subTitle: "Helm Anda Kotor? Serahkan pada Kami! Kami siap Antar-Jemput.",
  serviceName: "Laundry Helm",
  serviceNameAlt: "Cuci Helm",
  article: `
  <p><strong>Helm Anda kotor dan bau?&nbsp;</strong></p>
  <p><strong>Bersihkan Helm Anda Sekarang!</strong><br>&nbsp;</p>
  <p><strong>Bersihkan &nbsp;Helm Anda di laundry Helm G 99 dan rasakan perbedaannya!&nbsp;</strong></p>
  <p><strong>Dapatkan helm bersih dan segar seperti baru! ✨</strong><br><strong>Pengambilan dan pengantaran GRATIS</strong></p>
  <p><br>Helm adalah perlindungan utama Anda saat berkendara, jadi pastikan ia selalu dalam kondisi terbaik.&nbsp;</p>
  <p>Kami menawarkan layanan laundry helm yang membersihkan helm Anda dari kotoran, bau, dan jamur.<br><br>&nbsp;</p>
  `, // will help to edit html: https://onlinehtmleditor.dev/
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/helm/laundry-helm.png"
  ],
  faq: []
};
