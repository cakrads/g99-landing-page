import { LaundryCarpetHero } from "./content/service-laundry-carpet-hero";
import { LaundryCarpetBottomContent } from "./service-laundry-carpet-bottom-content";
import { CarpetServicePageTracker } from "./service-laundry-carpet-tracker";

export type TSourcePage = "cuci-karpet-medan" | "laundry-karpet-marelan"

export const ServiceLaundryCarpetContainer = ({ source }: { source: TSourcePage }) => {
  return (
    <main className="flex-1">
      <CarpetServicePageTracker />
      <LaundryCarpetHero source={source} />
      <LaundryCarpetBottomContent />
    </main>
  );
};
