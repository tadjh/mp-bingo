import React from "react";

export interface DrawsColumnProps
  extends React.HTMLAttributes<HTMLUListElement> {
  columnIndex: number;
  disabled?: boolean;
}

export default function DrawsColumn({
  columnIndex,
  disabled = false,
  className = "",
  children,
}: DrawsColumnProps): JSX.Element {
  /**
   * Return style based on column number and disabled state (-1)
   * @param columnIndex
   * @returns
   */
  function columnStyle(columnIndex: number): string {
    switch (columnIndex) {
      case -1:
        return "text-neutral-400 dark:text-neutral-300";
      case 0:
        return "text-blue-bingo dark:text-blue-300";
      case 1:
        return "text-red-bingo dark:text-red-300";
      case 2:
        return "text-neutral-400 dark:text-neutral-300";
      case 3:
        return "text-emerald-bingo dark:text-emerald-300";
      case 4:
        return "text-orange-bingo dark:text-orange-300";
      default:
        throw new Error("Error in Draws column style");
    }
  }

  return (
    <ul
      className={`border-neutral-300 even:bg-neutral-200 dark:border-neutral-500 dark:even:bg-neutral-700 border-r-2 last:border-0 ${
        disabled ? columnStyle(-1) : columnStyle(columnIndex)
      } ${className}`}
    >
      {children}
    </ul>
  );
}
