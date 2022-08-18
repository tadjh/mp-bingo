import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import IconButtonBase from "../IconButtonBase";
import Tooltip, { TooltipDirection } from "../../../../Display/Tooltip";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  description?: string;
  direction?: TooltipDirection;
  isHovered?: boolean;
  component?: any;
  to?: string;
  className?: string;
  disabled?: boolean;
}
// TODO Improve typing for handling router link

export default function IconButton({
  className = "",
  children,
  disabled = false,
  description = "",
  direction,
  isHovered,
  ...props
}: IconButtonProps): JSX.Element {
  return (
    <div className="group relative">
      <Tooltip isHovered={isHovered} direction={direction} disabled={disabled}>
        {description}
      </Tooltip>
      <IconButtonBase
        className={clsx(
          "focus:outline-none relative overflow-hidden rounded-full bg-transparent p-1.5 transition",
          !disabled
            ? "hover:bg-neutral-900 hover:bg-opacity-10 hover:shadow-xl dark:hover:bg-white dark:hover:bg-opacity-10 dark:hover:shadow-xl"
            : "cursor-default",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </IconButtonBase>
    </div>
  );
}
