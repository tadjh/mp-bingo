import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({ children }: CardProps): JSX.Element {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-800 flex w-full flex-col items-center justify-center rounded-md p-5 shadow-md">
      {children}
    </div>
  );
}
