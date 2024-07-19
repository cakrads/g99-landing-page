import { LaundryCarpetHero } from "./content/service-laundry-carpet-hero";
import { LaundryCarpetBottomContent } from "./service-laundry-carpet-bottom-content";

export const ServiceLaundryCarpetContainer = () => {
  return (
    <main className="flex-1">
      <LaundryCarpetHero />
      <LaundryCarpetBottomContent />
    </main>
  );
};
