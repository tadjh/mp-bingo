import { Fragment, HTMLAttributes } from "react";
import clsx from "clsx";
export interface ModalBaseProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}
export default function ModalBase({
  onClose,
  className,
  children,
}: ModalBaseProps): JSX.Element {
  return (
    <Fragment>
      <div
        className="bg-neutral-500 absolute z-40 h-full w-full bg-opacity-90 dark:bg-black dark:bg-opacity-60" // w-screen h-screen top-0
        onClick={onClose}
      ></div>
      <div
        className={clsx(
          "absolute z-50 flex w-11/12 flex-col gap-5 overflow-hidden rounded-md shadow-md",
          "bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-black text-opacity-90 dark:text-white dark:text-opacity-90",
          className
        )}
      >
        {children}
      </div>
    </Fragment>
  );
}
