import React from "react";
import clsx from "clsx";
import { Ball as BallType } from "@np-bingo/types";
import CircularProgress from "../../Feedback/CircularProgress";
import Badge from "../Badge";
import { useBall } from "./hooks";

export interface BallProps extends Partial<BallType> {
  inProgress?: boolean;
  progress?: number;
  disabled?: boolean;
}

export default function Ball({
  number = 0,
  column = "",
  remainder = 75,
  inProgress = false,
  progress = 0,
  disabled = false,
}: BallProps) {
  const { offset, background, gradient } = useBall(column, remainder, disabled);
  return (
    <div className="relative inline-flex">
      <div
        className={clsx(
          "relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full text-center font-mono font-bold text-black text-opacity-90 shadow-lg dark:text-opacity-90",
          background()
        )}
      >
        <div className="absolute h-full w-full overflow-hidden rounded-full">
          <div
            className={clsx(
              "h-[97%] w-[97%] rounded-full bg-gradient-radial blur-[0.375rem] filter",
              gradient()
            )}
          ></div>
        </div>
        <Badge
          description="Balls Remaining"
          disabled={disabled}
          offset={offset}
          data-testid="remainder"
        >
          {remainder}
        </Badge>
        <div className="relative z-20 uppercase leading-4">{column}</div>
        <div
          data-testid="ball-number"
          className="relative z-20 text-3xl leading-7"
        >
          {number !== 0 && number}
        </div>
      </div>
      <CircularProgress
        inProgress={inProgress}
        className="absolute"
        progress={progress}
      />
    </div>
  );
}
