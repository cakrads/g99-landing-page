# Guide to Creating a Page

## Overview
This guide explains how to create a Page in an existing Next.js repository. 
The example is about **Lead** page structure.
It includes routes for:
- **List Lead** (`/lead`)
- **Create Lead** (`/lead/create`)
- **Lead Detail** (`/lead/detail/[leadId]`)

Additionally, this guide outlines best practices such as dynamic imports, maintaining a structured component container, and updating route constants.

---

## Summary Table
| Page          | App Path                                  | Container Path                    |
|--------------|--------------------------------|--------------------------------|
| Lead List    | `src/app/(feature)/lead/page.tsx` | `src/containers/lead/index.tsx` |
| Create Lead  | `src/app/(feature)/lead/create/page.tsx` | `src/containers/lead-create/index.tsx` |
| Lead Detail  | `src/app/(feature)/lead/detail/[leadId]/page.tsx` | `src/containers/lead-detail/index.tsx` |


---

## Directory Structure
```
src/
├── app/
│   ├── (feature)/
│   │   ├── lead/
│   │   │   ├── page.tsx
│   │   ├── lead/create/
│   │   │   ├── page.tsx
│   │   ├── lead/detail/[leadId]/
│   │   │   ├── page.tsx
├── containers/
│   ├── lead/
│   │   ├── index.tsx
│   ├── lead-create/
│   │   ├── index.tsx
│   ├── lead-detail/
│   │   ├── index.tsx
├── constants/
│   ├── route.ts
```

---

## Implementing the Lead Pages

### 1. Lead List Page (`/lead`)
**File:** `src/app/(feature)/lead/page.tsx`
```tsx
import dynamic from "next/dynamic";
import { AnalyticFeature } from "@/types/analytic";
import type { Metadata } from "next";

const LeadContainer = dynamic(() => import("@/containers/lead").then(mod => mod.LeadContainer), { ssr: false });

export const metadata: Metadata = {
  title: "MyTEnS GoBeyond | Lead",
  description: "Lead for MyTEnS GoBeyond",
  other: {
    feature: "Lead" as AnalyticFeature,
  },
};

const LeadListApp = () => <LeadContainer />;

export default LeadListApp;
```

### 2. Create Lead Page (`/lead/create`)
**File:** `src/app/(feature)/lead/create/page.tsx`
```tsx
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const LeadCreateContainer = dynamic(() => import("@/containers/lead-create").then(mod => mod.LeadCreateContainer), { ssr: false });

export const metadata: Metadata = {
  title: "MyTEnS GoBeyond | Create Lead",
  description: "Create a new Lead",
  other: {
    feature: "Lead Create" as AnalyticFeature,
  },
};

const LeadCreateApp = () => <LeadCreateContainer />;

export default LeadCreateApp;
```

### 3. Lead Detail Page (`/lead/detail/[leadId]`)
**File:** `src/app/(feature)/lead/detail/[leadId]/page.tsx`
```tsx
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const LeadDetailContainer = dynamic(() => import("@/containers/lead-detail").then(mod => mod.LeadDetailContainer), { ssr: false });

export const metadata: Metadata = {
  title: "MyTEnS GoBeyond | Lead Detail",
  description: "Lead Detail Page",
  other: {
    feature: "Lead Detail" as AnalyticFeature,
  },
};

const LeadDetailApp = () => <LeadDetailContainer />;

export default LeadDetailApp;
```

---

## Component Structure
Ensure the main components are placed in `src/containers/` as follows:

### Lead Container (`src/containers/lead/index.tsx`)
```tsx
export { LeadContainer } from './lead';
```

### Create Lead Container (`src/containers/lead-create/index.tsx`)
```tsx
export { LeadCreateContainer } from './lead-create';
```

### Lead Detail Container (`src/containers/lead-detail/index.tsx`)
```tsx
export { LeadDetailContainer } from './lead-detail';
```

---

## Updating Route Constants
Add the following routes to `src/constants/route.ts`:
```tsx
export const PRIVATE_ROUTES = {
  // Other routes
  LEAD_LIST: "/lead",
  LEAD_CREATE: "/lead/create",
  LEAD_DETAIL: "/lead/detail",
};
```
This helps in maintaining route consistency, preventing conflicts and prevent unauthorized access in middleware.

---


## Notes
- The code in `src/app` only for routing and the main component will be in `src/conatiners`
- Use **dynamic imports** main components to optimize performance.
- We will always use `{ ssr: false }` and `use client` to minimize memory in server. 
- Define **analytic tracking** as per [GA4 Tracker Documentation](https://telkomind.sharepoint.com/:x:/r/sites/EWZ-DataInsight/_layouts/15/Doc.aspx?sourcedoc=%7BB7B624AD-5662-49C4-BF29-B9D6290F9383%7D&file=MyTEnS%202.0%20GA4%20Tracker.xlsx&action=default&mobileredirect=true).
- Ensure all feature-based pages follow the structured **containers approach**.
- Update `PRIVATE_ROUTES` to prevent unauthorized access to middleware.
