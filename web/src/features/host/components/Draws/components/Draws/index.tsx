import React from "react";
import { Pool } from "@np-bingo/types";
import { letters } from "../../../../../../utils/bingo";
import generate from "../../../../../../utils/generate";
import DrawsColumn from "../DrawsColumn";
import DrawsItem from "../DrawsItem";

export interface DrawsProps {
  draws?: Pool;
  disabled?: boolean;
}

export default function Draws({
  draws = [[], [], [], [], []],
  disabled,
}: DrawsProps): JSX.Element {
  const blankColumn = generate(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    <DrawsItem />
  );
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 border-neutral-400 dark:border-neutral-800 grid grid-cols-5 rounded-xl border-4 font-mono text-sm font-bold uppercase shadow-xl">
      {draws.map((column, columnIndex) => (
        <DrawsColumn
          key={`column-${columnIndex + 1}`}
          columnIndex={columnIndex}
          disabled={disabled}
        >
          {blankColumn.map((item, itemIndex) => {
            let ballNumber = itemIndex + 1 + itemIndex * 4 + columnIndex;
            return column[itemIndex] ? (
              <DrawsItem key={`ball-${ballNumber}`}>
                {`${letters[columnIndex]}${column[itemIndex]}`}
              </DrawsItem>
            ) : (
              <DrawsItem key={`ball-${ballNumber}`}>{"\xa0\xa0\xa0"}</DrawsItem>
            );
          })}
        </DrawsColumn>
      ))}
    </div>
  );
}
