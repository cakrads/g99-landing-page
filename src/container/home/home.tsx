/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1YfzodFjzKO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { HomeHero } from "./content/home-hero";
import { HomeBottomContent } from "./home-bottom-content";
import { HomePageTracker } from "./home-tracker";

export function HomeContainer() {
  return (
    <main className="flex-1">
      <HomePageTracker />
      <HomeHero />
      <HomeBottomContent />
    </main>
  );
}
