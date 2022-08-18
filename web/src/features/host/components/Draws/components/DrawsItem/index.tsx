import React from "react";

export default function DrawsItem({
  children,
}: React.HTMLAttributes<HTMLLIElement>): JSX.Element {
  return (
    <li className="border-neutral-300 dark:border-neutral-500 border-b-2 px-1 last:border-0">
      {children}
    </li>
  );
}
