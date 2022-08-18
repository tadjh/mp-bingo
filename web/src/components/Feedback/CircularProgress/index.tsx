import React from "react";
import clsx from "clsx";
import CircularProgressSVG from "./CircularProgress";

export interface CircularProgressProps
  extends React.SVGProps<SVGCircleElement> {
  progress?: number;
  inProgress: boolean;
}

export default function CircularProgress({
  inProgress = false,
  progress = 0,
  className = "",
}: CircularProgressProps): JSX.Element | null {
  if (!inProgress) return null;

  const svgDashArray = 126.92;
  const dashOffset = svgDashArray - (svgDashArray * progress) / 100;
  return (
    <div
      className={clsx(
        "text-neutral-300 dark:text-neutral-600 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 -rotate-90 transform",
        className
      )}
    >
      <CircularProgressSVG strokeDashoffset={`${dashOffset}px`} />
    </div>
  );
}
