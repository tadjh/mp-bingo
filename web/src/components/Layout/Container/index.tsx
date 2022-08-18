import React from "react";
import clsx from "clsx";
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({
  className = "",
  children,
  ...props
}: ContainerProps): JSX.Element {
  return (
    <div
      id="container"
      className={clsx(
        "relative flex aspect-[1/2] flex-col overflow-hidden rounded-[2.375rem] bg-neutral-100 px-3 dark:bg-neutral-900",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
