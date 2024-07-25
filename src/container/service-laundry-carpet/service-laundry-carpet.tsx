import { LaundryCarpetHero } from "./content/service-laundry-carpet-hero";
import { LaundryCarpetBottomContent } from "./service-laundry-carpet-bottom-content";
import { CarpetServicePageTracker } from "./service-laundry-carpet-tracker";

export const ServiceLaundryCarpetContainer = () => {
  return (
    <main className="flex-1">
      <CarpetServicePageTracker />
      <LaundryCarpetHero />
      <LaundryCarpetBottomContent />
    </main>
  );
};
