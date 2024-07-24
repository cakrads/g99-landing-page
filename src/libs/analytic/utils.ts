import ReactGA from "react-ga4";

import { GA_ID } from "@/constant/env";

const initializeGA = () => {
  // Replace with your Measurement ID
  // It ideally comes from an environment variable
  ReactGA.initialize(GA_ID || "dummy-id");
  // when you are done
  // eslint-disable-next-line no-console
  console.log("GA INITIALIZED");
};

export { initializeGA };