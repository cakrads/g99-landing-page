import { ServiceDynamicContent } from "./service-dynamic-content";
import { ServiceDynamicPageTracker } from "./service-dynamic-tracker";
import { LaundryDynamicBottomContent } from "./service-dynamic-bottom-content";

export const ServiceDynamicContainer = ({ slug }: { slug: string }) => {
  return (
    <main>
      <ServiceDynamicPageTracker />
      {/* Add Breadcumb */}
      <ServiceDynamicContent slug={slug} />
      <LaundryDynamicBottomContent />
    </main>
  );
};
