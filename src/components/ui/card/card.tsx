/* eslint-disable react/prop-types */
import * as React from "react";
import clsx from "clsx";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      "rounded-md border bg-white p-3",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
