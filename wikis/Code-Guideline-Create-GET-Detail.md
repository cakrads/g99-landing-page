# Code-Guideline-Create-GET-Detail

## 1. Overview
This guideline defines the best practices for implementing a **GET Detail** request in a Next.js project using React Query and proper component separation. The key considerations include:
- Ensuring proper error handling with `ErrorBoundary`.
- Keeping business logic and data fetching separate from UI components.
- Utilizing reusable components to improve maintainability.

## 2. Example Folder Structure
```
/containers
  /service-detail
    ├── /recoil                      // State management
    ├──── atom.ts                    // State atom definitions
    ├── /utils                       // Data mapping utilities specific to this container
    ├──── map-filter-and-params.ts   // Utility functions for filtering and params
    ├── index.ts                     // Main entry point
    ├── service-detail-container.tsx    // Main component of this container
    ├── service-detail-preview.tsx      // Component responsible for displaying the details
    ├── use-service-detail.ts           // Hook (if only a single file is needed)
```

## 3. Entry Point
### `index.ts`
```tsx
export { LeadDetailContainer } from "./service-detail-container";
```

## 4. Implementing the GET Detail Container
### `service-detail-container.tsx`
```tsx
"use client";

// Import necessary modules
import { LeadDetailContent } from "./service-detail-content";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ErrorBoundary } from "@/components/common/error-boundary";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export const LeadDetailContainer = () => {
  return (
    <div>
      <div className="flex gap-2 flex-col mb-6">
        <h5 className="text-h5 font-bold">Detail Lead</h5>
        <Breadcrumbs>
          <Link href={ROUTES.LEAD_LIST}>Manajemen Lead</Link>
          <div>Detail Lead</div>
        </Breadcrumbs>
      </div>
      <Card className="px-6">
        <ErrorBoundary>
          <LeadDetailContent />
        </ErrorBoundary>
      </Card>
    </div>
  );
};
```

### Key Notes:
✅ Wrap the content inside `<ErrorBoundary>` to catch errors like 404 or undefined object errors.
✅ Ensure routing consistency by using `ROUTES.LEAD_LIST`.

---
### `service-detail-content.tsx`
This part will GET data from BE
```tsx
"use client";

import { LeadService } from "@/services/service-management/service";
import { useQuery } from "@tanstack/react-query";
import { useLeadDetail } from "./use-service-detail";
import { Skeleton } from "@/components/ui/skeleton";
import { LeadDetailPreview } from "./service-detail-preview";

export const LeadDetailContent = () => {
  const { serviceId } = useLeadDetail(); // Extract params

  const { data, isPending } = useQuery({
    queryKey: [LeadService.getLeadDetail.key, { serviceId }],
    queryFn: async ({ signal }) =>
      (await LeadService.getLeadDetail.call(serviceId, signal)).data.data,
    throwOnError: true, // Ensures ErrorBoundary catches failures
  });

  if (isPending) {
    return <Loading />;
  }

  return <LeadDetailPreview data={data!} />; // Ensure data is never undefined
};

const Loading = () => {
  return (
    <div className="grid gap-5">
      <Skeleton className="h-6" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
};
```

### Key Notes:
✅ Use [container-presenter-patter](https://www.patterns.dev/react/presentational-container-pattern/)
✅ `throwOnError: true` ensures that `ErrorBoundary` handles errors properly.
✅ Keep loading state separate for better UX.
✅ Always ensure `data={data!}` is defined before passing to the child component.
✅ `"use client";` is mandatory
✅ Optional to put design we use for this Container
✅ Sparete Component to Preview Content, the container just for fetch and handle loading
✅ The Spareate Component can be in one file or spareate file
✅ About the `createNewModel` will discuss in another section

---
## 5. Best Practices for Component Separation
### ❌ **Bad Practice (Inline Components in Parent File)**
```tsx
const LeadDetailContent = () => {
  const ContentA = () => <div>Content A</div>;
  const ContentB = () => <div>Content B</div>;
  const ContentC = () => <div>Content C</div>;

  return (
    <div>
      {ContentA()}
      {ContentB()}
      {ContentC()}
    </div>
  );
};
```

### ✅ **Good Practice (Separate Components in Their Own Files)**
```tsx
const LeadDetailContent = () => {
  return (
    <div>
      <ContentA />
      <ContentB />
      <ContentC />
    </div>
  );
};

const ContentA = () => <div>Content A</div>;
const ContentB = () => <div>Content B</div>;
const ContentC = () => <div>Content C</div>;
```

### Key Notes:
✅ Avoid defining other components in a one component.
✅ Create separate component files where needed for better readability.
✅ ContentA, ContentB, ContentC can in separate file

---
## 6. Handling Child Components
### `service-detail-preview.tsx`
```tsx
import { IDataLeadDetail } from "@/services/service-management/service.type";

interface IPropsLeadDetailPreview {
  data: IDataLeadDetail;
}

const LeadDetailPreview: React.FC<IPropsLeadDetailPreview> = ({ data }) => {
  return <div>{/* Render detailed content here */}</div>;
};
```

### Key Notes:
✅ Always define proper TypeScript interfaces for props.
✅ The `data` type should be derived from the service types.

---
## 7. Handling `createNewModel` (Alternative Approach)
⚠️ **Not Recommended**: Ideally, the backend should return data in the required format. However, if transformation is needed, follow this approach:

```tsx
import { createNewModel, IDataNewModel } from "../utils/create-new-model";

const newData = createNewModel(data);
return <LeadDetailPreview data={newData} />;
```

### `utils/create-new-model.ts`
```ts
import { IDataLeadDetail } from "@/services/service-management/service.type";

export interface IDataNewModel {
  // Define new structure
}

const createNewModel = (data: IDataLeadDetail): IDataNewModel => {
  return data; // Transform logic
};
```

### Key Notes:
✅ Only use this approach if absolutely necessary.
✅ Always structure transformation utilities separately.
✅ The DetailPreviewComponent data type is from IDataNewModel, not from services.

---

## 8. Other Important Thing, use `useDataQueryClient`
This for efficiency to minimize send props or props hell.
example:
```tsx
const ComponentA = () => {
  const { data } = useQuery({
    queryKey: [LeadService.getLeadDetail.key],
    queryFn: async ({ signal }) => (await LeadService.getLeadDetail.call(serviceId, signal)).data.data,
    throwOnError: true,
  });

  return (
    <ComponentB data={data} />
  );
};

const ComponentB = ({data}) => {
  return (
    <ComponentC />
  )
};

const ComponentC = () => {
  const { data } = useDataQueryClient(LeadService.getLeadDetail);

  return (
    <div>
      Nik: {data.nik}
    </div>
  )
};
```
Notes:
✅ useDataQueryClient helps reduce unnecessary prop drilling.
✅ Ensures efficiency in state management.

---

## 9. Summary
- Use `ErrorBoundary` to catch API failures.
- Separate fetching logic from UI rendering.
- Avoid inline component definitions.
- Use TypeScript interfaces to ensure type safety.
- Prefer direct data fetching over unnecessary transformations.

Following these best practices will enhance code maintainability and improve application scalability. 🚀

---

## 10. Creating Dynamic Services

Dynamic services allow for flexible and reusable components that adapt to different data sources or configurations. Follow these steps to create a dynamic service:

### Folder Structure
```
/containers
  /services-dynamic
    ├── index.ts
    ├── services-dynamic-container.tsx
    ├── content/
    │   ├── services-dynamic-hero.tsx
    │   ├── services-dynamic-list.tsx
    ├── services-dynamic-tracker.tsx
```

### Key Points
- Use a `services-dynamic-container.tsx` file to manage the main logic and layout.
- Separate UI components into a `content/` folder for better maintainability.
- Implement a tracker component (`services-dynamic-tracker.tsx`) to monitor user interactions.

### Example: `services-dynamic-container.tsx`
```tsx
"use client";

import { dynamic } from "@/libs/api-client/dynamic";
import { ServicesDynamicHero } from "./content/services-dynamic-hero";

const ServicesDynamicList = dynamic(
  () => import("./content/services-dynamic-list").then((mod) => mod.ServicesDynamicList),
  { ssr: false }
);

export const ServicesDynamicContainer = () => {
  return (
    <main className="flex-1">
      <ServicesDynamicHero />
      <ServicesDynamicList />
    </main>
  );
};
```
