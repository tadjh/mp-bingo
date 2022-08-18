import { HTMLAttributes } from "react";
import clsx from "clsx";

export interface RippleProps extends HTMLAttributes<HTMLSpanElement> {}

export default function Ripple({
  className,
  ...props
}: RippleProps): JSX.Element | null {
  return (
    <span
      {...props}
      className={clsx(
        "absolute h-5 w-5 animate-ripple rounded-full bg-white blur-[0.03125rem]",
        className
      )}
    />
  );
}
