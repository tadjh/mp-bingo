import React from "react";
import { Room } from "@np-bingo/types";
import generate from "../../../../utils/generate";
import Tooltip from "../../../Display/Tooltip";

export interface CodeProps extends React.HTMLAttributes<HTMLDivElement> {
  room?: Room;
  isHovered?: boolean;
}
export default function Code({
  room = "",
  isHovered = false,
}: CodeProps): JSX.Element {
  const formattedRoom: string[] =
    room !== "" ? Object.assign([], room) : [" ", " ", " ", " "];
  return (
    <div className="group relative">
      <Tooltip isHovered={isHovered} direction="top">
        Room Code
      </Tooltip>
      <div className="flex space-x-2 font-mono text-3xl font-bold text-black text-opacity-60 hover:text-opacity-90 dark:text-white dark:text-opacity-60 dark:hover:text-opacity-90">
        {generate(
          formattedRoom,
          <div className="from-neutral-200 dark:from-neutral-500 to-neutral-300 dark:to-neutral-700 flex h-12 w-9 items-center justify-center rounded-md bg-gradient-to-b shadow-inner" />
        )}
      </div>
    </div>
  );
}
