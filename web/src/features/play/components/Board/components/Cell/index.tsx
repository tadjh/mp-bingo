import React, { useRef } from "react";
import clsx from "clsx";
import Ripple from "../../../../../../components/Feedback/Ripple";
import HeavyBallotXIcon from "../../../../../../assets/icons/HeavyBallotX";
import { useCell } from "./hooks";
import { useRipple } from "../../../../../../hooks/useRipple";

export interface CellProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  winner: boolean;
  override?: boolean;
}

export default function Cell({
  index,
  override,
  winner = false,
  children,
  ...props
}: CellProps): JSX.Element {
  const cellRef = useRef<HTMLDivElement | null>(null);
  const { isRippling, coordinates, handleSetCoordinates } = useRipple(
    cellRef.current
  );
  const { isChecked, handleClick, handleMouseDown } = useCell(
    handleSetCoordinates,
    winner,
    override
  );

  return (
    <div
      {...props}
      ref={cellRef}
      className={clsx(
        "cell relative flex h-11 cursor-pointer select-none items-center justify-center overflow-hidden border-2 border-neutral-900 bg-neutral-100 font-mono text-xl font-bold uppercase text-black text-opacity-90 transition-colors hover:bg-neutral-300 dark:border-white dark:border-opacity-5 dark:bg-neutral-700 dark:text-white dark:text-opacity-90 dark:hover:bg-neutral-600",
        index === 13 ? "cell-13 text-base" : `cell-${index}`,
        (override || isChecked) && "active"
      )}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
    >
      {isRippling && (
        <Ripple
          style={{ top: `${coordinates.y}px`, left: `${coordinates.x}px` }}
        />
      )}
      {(override || isChecked) && (
        <span className="absolute" data-testid="crossmark">
          <HeavyBallotXIcon
            size="x-large"
            className={clsx(
              winner
                ? "text-emerald-600 dark:text-emerald-500"
                : "text-red-600 dark:text-red-500"
            )}
          />
        </span>
      )}
      <span className="relative z-10">{children}</span>
    </div>
  );
}
