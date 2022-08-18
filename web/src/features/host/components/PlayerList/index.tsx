import React from "react";
import clsx from "clsx";
import List, {
  ListItem,
  ListItemText,
} from "../../../../components/Display/List";
import IconButton from "../../../../components/Inputs/IconButton/components/IconButton";
import MinusIcon from "../../../../assets/icons/Minus";
import CheckIcon from "../../../../assets/icons/Check";
import CloseCircleIcon from "../../../../assets/icons/CloseCircle";
import Tooltip from "../../../../components/Display/Tooltip";
import { Player } from "@np-bingo/types";
import { useClickHard } from "../../../../hooks/useClickHard";

// export interface ListProps {
//   data?: any[];
//   action?: (param?: any) => void;
// }

export interface PlayerListProps {
  data?: Player[];
  action: (player: Player) => void;
}

export function PlayerList({
  data = [],
  action: onRemove,
}: PlayerListProps): JSX.Element {
  const clickHardSfx = useClickHard();
  if (data.length !== 0)
    return (
      <List>
        {data.map((player, index) => {
          const { name, ready } = player;
          const handleRemovePlayer = () => onRemove(player);
          if (player.kicked || player.leave) return null;
          return (
            <ListItem key={`player-${index + 1}`}>
              <div
                className={clsx(
                  "group relative flex h-10 w-10 items-center justify-center rounded-full text-black text-opacity-60 shadow-sm group-hover:text-opacity-90 dark:text-white dark:text-opacity-60 dark:group-hover:text-opacity-90",
                  ready
                    ? "bg-emerald-200 group-hover:bg-emerald-300 dark:bg-emerald-800 dark:group-hover:bg-emerald-700"
                    : "bg-neutral-200 group-hover:bg-neutral-300 dark:bg-neutral-800 dark:group-hover:bg-neutral-700"
                )}
              >
                <Tooltip direction="right">
                  {ready ? "Ready" : "Not Ready"}
                </Tooltip>
                {ready ? <CheckIcon /> : <MinusIcon />}
              </div>
              <ListItemText
                primary={name}
                secondary={ready ? "Ready" : "Not ready..."}
              />
              <div className="ml-auto">
                <IconButton
                  className="delete-button"
                  onClick={handleRemovePlayer}
                  onMouseDown={clickHardSfx}
                  aria-label="status"
                >
                  <CloseCircleIcon />
                </IconButton>
              </div>
            </ListItem>
          );
        })}
      </List>
    );
  return (
    <p className="flex items-center justify-center text-black text-opacity-60 dark:text-white dark:text-opacity-60">
      No players found
    </p>
  );
}
