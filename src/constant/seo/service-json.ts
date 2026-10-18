import { HOST_URL } from "../env";

interface IServiceJsonLd {
  name: string;
  alternateName?: string;
  description: string;
  url: string;
}

/**
 * Service JSON-LD for one service page. The provider references the shared
 * LocalBusiness block (app-id-json) via "@id" instead of duplicating it.
 */
export const generateServiceJsonLd = ({
  name,
  alternateName,
  description,
  url,
}: IServiceJsonLd) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  ...(alternateName ? { alternateName } : {}),
  description,
  url,
  provider: { "@id": HOST_URL + "/#localbusiness" },
  areaServed: {
    "@type": "City",
    name: "Medan",
  },
  serviceType: name,
});

interface IBreadcrumbItem {
  name: string;
  url: string;
}

/** BreadcrumbList JSON-LD. Only link to pages that actually exist. */
export const generateBreadcrumbJsonLd = (items: IBreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
