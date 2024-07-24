enum eventKey {
  "enter_home_hero",
  "click_home_hero_cta",
  "enter_home_services",
  "click_home_service_carpet",
  "click_home_service_laundry_dry",
  "click_home_service_laundry_iron",
  "enter_home_why",
  "enter_home_location",
  "enter_home_footer",

  "enter_carpet_service_hero",
  "click_carpet_service_hero_cta",
  "enter_carpet_service_why",
  "enter_carpet_service_location",
  "enter_carpet_service_footer",

  "click_nav_logo",
  "click_nav_home",
  "click_nav_carpet_service",
  "click_nav_whatsapp",

  "click_fab_whatsapp",
  "click_footer_phone1",
  "click_footer_phone2",
  "click_footer_nav_home",
  "click_footer_nav_carpet_service",
  "click_footer_facebook",
  "click_footer_instagram",
  "click_footer_tiktok",
}

enum featureKey {
  "Home Page",
  "Carpet Service Page",
  "Global", // navigation, fab, footer
}

export type EventKey = keyof typeof eventKey;
export type FeatureKey = keyof typeof featureKey;
