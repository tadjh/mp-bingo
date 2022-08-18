import React from "react";

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {}

export function ListItem({ children, ...props }: ListItemProps): JSX.Element {
  return (
    <li
      className="hover:bg-neutral-200 dark:hover:bg-neutral-800 flex items-center gap-x-3 rounded-md py-0.5 px-1 transition-colors hover:shadow-md"
      {...props}
    >
      {children}
    </li>
  );
}
