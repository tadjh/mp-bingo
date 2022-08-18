import React from "react";
import clsx from "clsx";
// import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { useClickSoft } from "../../../hooks/useClickSoft";

export default function Link({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const clickSoftSfx = useClickSoft();
  return (
    <div
      className={clsx(
        "text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400",
        className
      )}
      onMouseDown={clickSoftSfx}
      {...props}
    >
      {children}
    </div>
  );
}
