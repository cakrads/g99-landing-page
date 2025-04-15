# Code-Guideline-Create-Tracker

## 1. Overview
This guideline explains how to implement and use trackers in the project. Trackers are essential for monitoring user interactions and improving analytics. The main tracker library is located in `libs/analytic`.

## 2. Implementing Trackers

### Example: `HomePageTracker`
The `HomePageTracker` component initializes tracking for various sections of the home page. It uses the `trackStart` method from the `useAnalytic` hook to start tracking when the component is mounted.

```tsx
"use client";

import React, { useEffect } from "react";
import { useAnalytic } from "@/libs/analytic/provider";

export const HomePageTracker = () => {
  const analytic = useAnalytic();

  useEffect(() => {
    analytic.trackStart("enter_home_hooks");
    analytic.trackStart("enter_home_services");
    analytic.trackStart("enter_home_why");
    analytic.trackStart("enter_home_location");
    analytic.trackStart("enter_home_footer");
  }, [analytic]);

  return null;
};
```

### Key Points
- Use the `useAnalytic` hook to access tracking methods.
- Call `trackStart` in a `useEffect` to initialize tracking when the component is mounted.

---

## 3. Tracking Button Clicks

### Example: `HomeHeroCtaBtn`
The `HomeHeroCtaBtn` component demonstrates how to track button clicks. It uses the `trackStart`, `trackEnd`, and `trackEvent` methods to monitor user interactions.

```tsx
"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import { useAnalytic } from "@/libs/analytic/provider";
import Link from "@/components/ui/link";

export const HomeHeroCtaBtn = () => {
  const analytic = useAnalytic();

  useEffect(() => {
    analytic.trackStart("click_home_hero_cta");
  }, [analytic]);

  const handleClickCta = () => {
    analytic.trackEnd("click_home_hero_cta");
    analytic.trackEvent("click_home_hero_cta", "Home Page", { success: 1, message: "OK" });
  };

  return (
    <Link
      href="#our-location"
      className={clsx(
        "inline-flex items-center justify-center rounded-md py-4 px-10 text-sm font-semibold",
        "bg-secondary text-secondary-foreground shadow transition-all duration-500",
        "hover:bg-white hover:text-foreground",
      )}
      onClick={handleClickCta}
    >
      Pesan Sekarang
    </Link>
  );
};
```

### Key Points
- Use `trackStart` in a `useEffect` to initialize tracking when the button is rendered.
- Use `trackEnd` and `trackEvent` in the click handler to log the interaction.

---

## 4. Summary
- Trackers are implemented using the `useAnalytic` hook from `libs/analytic`.
- Use `trackStart` to initialize tracking, `trackEnd` to mark the end of an interaction, and `trackEvent` to log the event.
- Place tracker components like `HomePageTracker` at the top level of the container to ensure all relevant events are captured.

Following these guidelines ensures consistent and effective tracking across the project.
