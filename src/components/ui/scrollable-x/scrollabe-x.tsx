import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import clsx from "clsx";

import "./scrollable-x.css";
import { IconChevronLeft, IconChevronRight } from "../icons/chevron";

export type ItemId = string;
export type ItemType = React.ReactElement<{
  /**
    Required. id for every item, should be unique
   */
  itemId: ItemId;
}>;

export const ScrollableX: React.FC<{
  children: ItemType | ItemType[]
  className?: string
  itemClassName?: string
  theme?: "light" | "dark" | "primary"
}> = ({ children, className, itemClassName, theme = "light" }) => {
  return (
    <div className="-ml-3 md:ml-0 -mr-3 md:mr-0 relative">
      <ScrollMenu
        LeftArrow={<LeftArrow theme={theme} />}
        RightArrow={<RightArrow theme={theme} />}
        scrollContainerClassName={className}
        itemClassName={itemClassName}
      >
        {children}
      </ScrollMenu>
    </div>
  );
};

const LeftArrow = ({ theme = "light" }: { theme: "dark" | "light" | "primary" }) => {
  const visibility = React.useContext(VisibilityContext);
  const isFirstItemVisible = visibility.useIsVisible("first", true);
  return (
    <div className="flex items-center">
      <button
        disabled={isFirstItemVisible}
        onClick={() => { visibility.scrollPrev(); }}
        className={clsx(
          "left",
          isFirstItemVisible && "opacity-0 pointer-events-none",
        )}
        aria-label="btn-scrolable-left"
      >
        <IconChevronLeft className={clsx(
          "w-6 h-6",
          theme === "dark" && "text-white"
        )} />
      </button>
      {!isFirstItemVisible && (
        <div className={clsx(
          "absolute top-0 left-6 w-6 z-10 h-full",
          theme === "light" && "scrollable-x-backdrop-left",
          theme === "dark" && "scrollable-x-backdrop-left-dark",
          theme === "primary" && "scrollable-x-backdrop-left-primary",
        )} />
      )}
    </div>
  );
};

const RightArrow = ({ theme = "light" }: { theme: "dark" | "light" | "primary" }) => {
  const visibility = React.useContext(VisibilityContext);
  const isLastItemVisible = visibility.useIsVisible("last", false);

  return (
    <div className="flex items-center">
      <button
        disabled={isLastItemVisible}
        onClick={() => { visibility.scrollNext(); }}
        className={clsx(
          "right",
          isLastItemVisible && "opacity-0 pointer-events-none",
        )}
        aria-label="btn-scrolable-right"
      >
        <IconChevronRight className={clsx(
          "w-6 h-6",
          theme === "dark" && "text-white"
        )} />
      </button>
      {!isLastItemVisible && (
        <div className={clsx(
          "absolute top-0 right-6 w-6 z-10 h-full",
          theme === "dark" && "scrollable-x-backdrop-right-dark",
          theme === "light" && "scrollable-x-backdrop-right",
          theme === "primary" && "scrollable-x-backdrop-right-primary",
        )} />
      )}
    </div>
  );
};
