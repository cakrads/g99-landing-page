/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1YfzodFjzKO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { dynamic } from "@/libs/api-client/dynamic";
import { HomeHero } from "./content/home-hero";

const HomeBottomContent = dynamic(
  () => import("./home-bottom-content").then((mod) => mod.HomeBottomContent),
  { ssr: false }
);
const HomePageTracker = dynamic(
  () => import("./home-tracker").then((mod) => mod.HomePageTracker),
  { ssr: false }
);

export function HomeContainer() {
  return (
    <main className="flex-1">
      <HomePageTracker />
      <HomeHero />
      <HomeBottomContent />
    </main>
  );
}
