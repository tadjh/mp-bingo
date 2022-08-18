import React from "react";
import clsx from "clsx";
import { Card } from "@np-bingo/types";
import Cell from "../Cell";
import Logo from "../../../../../../components/Logo";
import { initialPlayState } from "../../../../../../reducers/play.reducer";

export interface BoardProps {
  card: Card;
  serial: string;
  crossmarks: { [key: string]: boolean };
  winner: boolean;
}

export function Board({
  card = [...initialPlayState.card],
  serial = "",
  crossmarks = {},
  winner = false,
}: BoardProps) {
  return (
    <div
      className={clsx(
        "space-y-2 overflow-hidden rounded-xl border-8 shadow-md",
        winner
          ? "border-emerald-600 bg-emerald-600"
          : " border-neutral-900 bg-neutral-900 dark:border-neutral-800 dark:bg-neutral-800"
      )}
    >
      <div
        className={clsx(
          "bg-neutral-100 p-1",
          winner ? "dark:bg-neutral-700" : "dark:bg-neutral-800"
        )}
      >
        <Logo winner={winner} />
      </div>
      <div className="grid grid-cols-5">
        {card.map((value, index) => {
          let cellId = index + 1;
          let id = `cell-${cellId}`;
          return (
            <Cell
              index={cellId}
              winner={winner}
              key={id}
              override={winner ? crossmarks[id] || false : undefined}
            >
              {cellId !== 13 ? value : "free"}
            </Cell>
          );
        })}
      </div>
      <div
        className={clsx(
          "h-3 text-center align-middle text-[0.40625rem] font-bold text-white dark:text-opacity-90",
          winner ? "bg-emerald-600" : "bg-neutral-900 dark:bg-neutral-800"
        )}
      >
        {serial}
      </div>
    </div>
  );
}
