# Code-Guideline-Create-Container-Files-and-Folder

## 1. Overview
This guideline defines the structure for creating containers in a Next.js project. The key points to follow:
- Routing in `app` should point to `index.ts` in the respective container.
- Use kebab-case for naming files and folders.
- Organize components, hooks, and utilities properly to maintain separation of concerns and reusability.

## 2. Folder Structure

### Simple:
```
/containers
  /service
    ├── index.ts
    ├── service-container.tsx
```

### Case 1 (Complex Container with Multiple Components & Utilities)
```
/containers
  /service-detail
    ├── /fragments                  // Simple reusable components in this container
    ├── /recoil                      // State management
    ├──── atom.ts                     // State atom definitions
    ├── /utils                        // Data mapping utilities specific to this container
    ├──── map-filter-and-params.ts    // Utility functions for filtering and params
    ├──── map-title.ts                // Utility functions for title mapping
    ├── index.ts                      // Main entry point
    ├── service-detail-container.tsx     // Main component of this container
    ├── service-detail-form.tsx          // Complex separate component from the main container
    ├── service-detail-preview.tsx       // Complex separate component from the main container
    ├── service-detail-progress.tsx      // Complex separate component from the main container
    ├── use-service-detail.ts            // Hook (only if a single file is needed)
```

### Case 2 (Container with Multiple Hooks and Utilities)
```
/containers
  /project-detail
    ├── /hooks                       // Hooks (if more than one file is needed)
    ├──── use-detail-project.ts      // Hooks should follow SRP (Single Responsibility Principle)
    ├──── use-xxxx.ts                // Other hooks if needed
    ├── /recoil                      // State management
    ├── index.ts                     // Main entry point
    ├── project-detail-container.tsx // Main component of this container
    ├── utils.ts                     // Utilities (if only one file is needed)
```

## 3. File Naming Conventions

- **Container Files**: `<feature>-container.tsx`
- **State Management (if using Recoil)**: Inside `/recoil`
- **Fragments/Components**: Inside `/fragments`
- **Utility Functions**: Inside `/utils.ts`
- **Hooks**: Named as `use-<feature>.ts` (e.g., `use-service-detail.ts`)
- If multiple hooks exist, create a `hooks` directory instead of placing them directly inside the container.
- **Index Files**: `index.ts` should re-export the main container component

---

## 4. Example: Container Component

```tsx
"use client";

import ErrorBoundary from "@/components/base/error-boundary";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Link from "next/link";
import { ROUTES } from "@/constants/route";
import { ServiceDetailContent } from "./service-detail";
import { Card } from "@/components/ui/card";

export const ServiceDetailContainer = () => {
  return (
    <div>
      <div className="flex gap-2 flex-col mb-6">
        <h5 className="text-h5 font-bold">Detail Service</h5>
        <Breadcrumbs>
          <Link href={ROUTES.LEAD_LIST}>Manajemen Service</Link>
          <div>Detail Service</div>
        </Breadcrumbs>
      </div>
      <Card className="px-6">
        <ErrorBoundary>
          <ServiceDetailContent />
        </ErrorBoundary>
      </Card>
    </div>
  );
};
```

---

## 5. Exporting from `index.ts`
Each feature folder should have an `index.ts` file that re-exports the main container component for cleaner imports.

Example:

```tsx
export { ServiceCreateContainer } from "./service-create";
```

---

## 7. Summary
- Always start with `index.ts` as the main entry point.
- Use kebab-case for file and folder names.
- Main container components should be named `<feature>-container.tsx`.
- Organize files logically into `/fragments`, `/recoil`, and `/utils`.
- Define routes as constants in `PRIVATE_ROUTES`.

This structure ensures consistency, scalability, and maintainability in the project.

---

## 8. Updating the Service Folder Based on HomeContainer

The `service` folder should follow the structure and practices demonstrated in the `HomeContainer`. This includes:

### Folder Structure
```
/containers
  /service
    ├── index.ts
    ├── service-container.tsx
    ├── content/
    │   ├── service-hero.tsx
    │   ├── service-bottom-content.tsx
    ├── service-tracker.tsx
```

### Key Points
- Use dynamic imports for components like `service-bottom-content.tsx` to optimize performance.
- Implement a tracker component (`service-tracker.tsx`) to monitor user interactions.
- Ensure the `index.ts` file re-exports the main container component for cleaner imports.

### Example: `service-container.tsx`
```tsx
"use client";

import { dynamic } from "@/libs/api-client/dynamic";
import { ServiceHero } from "./content/service-hero";

const ServiceBottomContent = dynamic(
  () => import("./content/service-bottom-content").then((mod) => mod.ServiceBottomContent),
  { ssr: false }
);

export const ServiceContainer = () => {
  return (
    <main className="flex-1">
      <ServiceHero />
      <ServiceBottomContent />
    </main>
  );
};
```

---

