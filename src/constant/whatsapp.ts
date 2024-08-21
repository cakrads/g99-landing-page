import { SHOP_PHONE } from "./shop";

const message = (services: string = "laundy%20karpet") => `Hi,%20Saya%20ingin%20${services}.%20Bisakah%20saya%20mendapatkan%20informasi%20lebih%20lanjut%20mengenai%20layanan%20dan%20harga%20yang%20ditawarkan%3F`;

export const WA_LINK = (services: string = "laundy%20karpet") => `https://wa.me/${SHOP_PHONE}?text=${message(services)}`;

export const WA_SERVICE_NAME = {
  GLOBAL: "memesan%20jasa%20laundry%20karpet%20marelan%20G%2099",
  CARPET: "mencuci%20karpet",
  STROLLER: "laundry%20stroller",
}; 