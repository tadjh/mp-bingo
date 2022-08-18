import React from "react";
import CloseIcon from "../../../../../assets/icons/Close";
import IconButton from "../../../../Inputs/IconButton/components/IconButton";
import { useClickSoft } from "../../../../../hooks/useClickSoft";

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}

export function ModalHeader({
  onClose,
  children,
  ...props
}: ModalHeaderProps): JSX.Element {
  const clickSoftSfx = useClickSoft();
  return (
    <div
      className="dark:bg-neutral-700 dark:border-neutral-900 flex items-center justify-between border-b-2 border-blue-400 bg-blue-300 px-4 py-2"
      {...props}
    >
      <span className="text-lg text-black text-opacity-90 dark:text-white dark:text-opacity-90">
        {children}
      </span>
      <IconButton
        className="close-button"
        onClick={onClose}
        onMouseDown={clickSoftSfx}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
}
