import React from "react";
import clsx from "clsx";
import { BadgeProps } from ".";
import Tooltip from "../Tooltip";
import { useBadge } from "./hooks";

export default function Badge({
  color = "gray",
  children,
  description = "",
  isHovered = false,
  disabled = false,
  offset = 0,
  ...props
}: BadgeProps): JSX.Element {
  const [backgroundColor, alert] = useBadge(color, offset, disabled);
  return (
    <div
      className={clsx(
        "group absolute -top-2 -right-1 z-20 h-5 w-7 rounded-full text-center font-mono text-xs font-bold leading-normal text-opacity-90 shadow-md hover:shadow-lg",
        backgroundColor()
      )}
      style={{ backgroundPositionY: `${offset}%` }}
      {...props}
    >
      <div
        className={clsx(
          "absolute top-0 -right-[0.1875rem] h-2 w-2 rounded-full shadow",
          alert()
        )}
      />
      <Tooltip isHovered={isHovered} disabled={disabled}>
        {description}
      </Tooltip>
      {children}
    </div>
  );
}
