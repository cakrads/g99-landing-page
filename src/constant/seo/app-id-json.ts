import { HOST_URL } from "../env";
import { SHOP_NAME, SHOP_PHONE, SHOP_STREET_ADDRESS } from "../shop";

/**
 * LocalBusiness JSON-LD, shared by every page. The business name is always
 * SHOP_NAME (never the page title). Referenced from Service / WebSite
 * schemas via "@id".
 */
export const generateAppIdJson = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": HOST_URL + "/#localbusiness",
  name: SHOP_NAME,
  url: HOST_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: SHOP_STREET_ADDRESS,
    addressLocality: "Medan",
    addressRegion: "Sumatera Utara",
    postalCode: "20255",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SHOP_PHONE,
    contactType: "customer service",
  },
  telephone: SHOP_PHONE,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "21:00",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "3.702272984566515",
    longitude: "98.6581149005907",
  },
  hasMap:
    "https://www.google.com/maps/place/Laundry+Karpet+Marelan+G+99/@3.7021584,98.6581062,17z",
  aggregateRating: {
    "@type": "AggregateRating",
    // Verified against the live Google Business Profile 2026-10-18:
    // 4.9 from 74 reviews. Re-check periodically — stale numbers here
    // would be inaccurate review markup.
    ratingValue: "4.9",
    reviewCount: "74",
  },
});
