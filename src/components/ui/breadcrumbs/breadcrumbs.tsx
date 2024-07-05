import React, { FC } from "react";
import clsx from "clsx";
import { Icon } from "@iconify-icon/react";
import { ClassNameValue } from "tailwind-merge";

export interface BreadcrumbsProps {
  children: React.ReactNode;
  sparator?: React.ReactElement;
  className?: ClassNameValue
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  children,
  className,
  sparator = <Icon icon='ooui:next-ltr' className='text-inherit' />,
}) => {
  const length = React.Children.count(children);

  return (
    <div className={clsx("flex items-center gap-1 text-sm", className)}>
      {React.Children.map(children, (child, index) => {
        return <React.Fragment key={index}>
          {!React.isValidElement(child) ? child : (
            React.cloneElement(child, {
              ...child.props,
              className: clsx(child.props.className, child.props.href ? "text-primary" : "text-midnight")
            })
          )}
          {index < length - 1 && sparator}
        </React.Fragment>;
      })}
    </div>
  );
};