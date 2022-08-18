import React from "react";
import clsx from "clsx";
import { TooltipDirection } from "..";
import { useTooltip } from "../hooks";

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  isHovered?: boolean;
  direction?: TooltipDirection;
  disabled?: boolean;
}

export default function Tooltip({
  className = "",
  isHovered = false,
  direction = "right",
  disabled = false,
  children,
}: TooltipProps): JSX.Element | null {
  const [box, arrow] = useTooltip(direction);

  if (disabled || children === "") return null;
  return (
    <span
      className={clsx(
        box(),
        !isHovered && "invisible opacity-0",
        "bg-neutral-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 absolute z-10 box-content transform whitespace-nowrap rounded-sm border px-2.5 py-2 font-mono text-xs font-bold leading-normal text-black text-opacity-70 shadow-md group-hover:visible group-hover:opacity-100 group-hover:delay-500 dark:text-white",
        className
      )}
    >
      <span
        className={clsx(
          arrow(),
          "bg-neutral-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 absolute box-content h-3 w-3 rotate-45 transform"
        )}
      ></span>
      {children}
    </span>
  );
}
