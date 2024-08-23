import { HOST_URL } from "@/constant/env";

import { generateAppIdJson } from "../app-id-json";
import { IWebContent, IWebSeo } from "./type";

const WEB_TITLE = "Jasa Cuci Boneka Medan Marelan: Bisa Antar-Jemput";
export const SLUG = "laundry-boneka";

export const webSeo: IWebSeo = {
  title: WEB_TITLE,
  description: "Nikmati jasa cuci spring bed premium dengan harga terjangkau, bisa Antar-Jemput. Kami menggunakan teknologi terbaru untuk membersihkan spring bed Anda secara efektif.",
  primaryKeyword: [
    "laundry boneka",
    "cuci boneka",
    "jasa cuci boneka",
    "service cuci boneka",
  ],
  secondaryKeyword: [
    "cuci boneka panggilan",
    "harga cuci boneka",
    "laundry boneka terdekat",
    "jasa cuci boneka murah",
    "layanan laundry boneka",
  ],
  imgAlt: "",
  applicationId: generateAppIdJson({ webTitle: WEB_TITLE }),
  routes: "/" + SLUG,
  socialImage: HOST_URL + "/images/services/doll/1.png",
};

export const webContent: IWebContent = {
  title: "Laundry Boneka Medan Marelan: Cuci Boneka Berkualitas Tinggi",
  subTitle: "Boneka Anda Kotor? Serahkan pada Kami! Kami siap Antar-Jemput.",
  serviceName: "Laundry Boneka",
  serviceNameAlt: "Cuci Boneka",
  article: `
  <p><strong>Boneka adalah teman terbaik anak-anak kita. Jangan biarkan mereka kotor dan kusam! Dengan layanan laundry boneka kami, boneka Anda akan kembali bersih dan ceria.</strong><br>&nbsp;</p>
  <p><strong>"Mengapa Laundry Boneka Adalah Perawatan yang Penting untuk Kesehatan Keluarga Anda"</strong><br>&nbsp;</p>
  <p><strong>Boneka adalah bagian penting dari kehidupan anak-anak kita, tetapi seringkali mereka menjadi kotor dan penuh bakteri. Laundry boneka G 99 menggunakan teknik pembersihan lembut yang menjaga boneka tetap aman sambil menghilangkan kotoran dan alergen.</strong><br>&nbsp;</p>
  `, // will help to edit html: https://onlinehtmleditor.dev/
  prices: [],
  hooks: "",
  article2: "",
  images: [
    "/images/services/helm/1.png",
    "/images/services/helm/2.png"
  ],
  faq: []
};
