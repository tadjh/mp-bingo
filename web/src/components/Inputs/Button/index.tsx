import { ButtonHTMLAttributes, forwardRef, useRef, ComponentType } from "react";
import clsx from "clsx";
import Ripple from "../../Feedback/Ripple";
import { useButton } from "./hooks";
import { useRipple } from "../../../hooks/useRipple";
export type ButtonVariant = "default" | "primary" | "success";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: ButtonVariant;
  component?: ComponentType<any>;
  className?: string;
  to?: string;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      component: Component,
      className,
      children,
      to,
      disabled = false,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const childRef = useRef<HTMLSpanElement>(null);
    const { isRippling, coordinates, handleSetCoordinates } = useRipple(
      childRef.current?.parentElement || null
    );
    const { buttonStyle, handleMouseDown } = useButton(
      variant,
      handleSetCoordinates
    );

    if (Component)
      return (
        <Component
          {...props}
          ref={ref}
          to={to}
          className={clsx(
            "focus:outline-none relative overflow-hidden rounded-full px-6 py-2 text-center transition",
            "disabled:text-neutral-800 dark:disabled:text-neutral-400 disabled:pointer-events-none disabled:cursor-default disabled:opacity-50 disabled:shadow-none",
            buttonStyle(),
            !disabled && "active",
            className
          )}
          onMouseDown={handleMouseDown}
          disabled={disabled}
        >
          {isRippling && (
            <Ripple
              style={{ top: `${coordinates.y}px`, left: `${coordinates.x}px` }}
            />
          )}
          <span ref={childRef} className="relative z-10">
            {children}
          </span>
        </Component>
      );
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          "focus:outline-none relative overflow-hidden rounded-full px-6 py-2 text-center transition",
          "disabled:text-neutral-800 dark:disabled:text-neutral-400 disabled:pointer-events-none disabled:cursor-default disabled:opacity-50 disabled:shadow-none",
          buttonStyle(),
          className
        )}
        onMouseDown={handleMouseDown}
        disabled={disabled}
      >
        {isRippling && (
          <Ripple
            style={{ top: `${coordinates.y}px`, left: `${coordinates.x}px` }}
          />
        )}
        <span ref={childRef} className="relative z-10">
          {children}
        </span>
      </button>
    );
  }
);

export default Button;
