import clsx from "clsx";
import PencilIcon from "../../../assets/icons/Pencil";
import Spinner from "../../../assets/icons/Spinner";
import Typography from "../Typography";
import Alert from "../../Feedback/Alert";
import IconButton from "../../Inputs/IconButton";

export interface PlayerNameProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: boolean;
  isLoading: boolean;
  name: string;
  editable?: boolean;
  socketId: string;
}
// TODO PlayerName.stories.tsx
export default function PlayerName({
  status,
  name = "Player#0000",
  isLoading = false,
  editable = false,
  socketId = "",
  ...props
}: PlayerNameProps) {
  const playerNameAlertStyle = () => {
    switch (status) {
      case true:
        return "success";
      case false:
        return "failure";
      default:
        return "none";
    }
  };
  const [playerName, randomId] = name.split("#", 2);
  return (
    <div className="group flex flex-row items-center gap-2">
      <div className="flex">
        <div className="h4 w-4">
          {!isLoading ? "\xa0" : <Spinner className="h-4 w-4" />}
        </div>
        <div className="flex w-[5.375rem] justify-end">
          <div
            className={clsx(
              "flex flex-row items-center justify-between gap-1 rounded-xl bg-neutral-300 px-1 py-0.5 transition duration-500 dark:bg-neutral-800",
              !status && "opacity-50"
            )}
          >
            <Alert status={playerNameAlertStyle()} />
            <Typography className="text-xs text-black text-opacity-40 dark:text-white dark:text-opacity-40">
              {status ? "Connected" : "Offline"}
            </Typography>
            <div />
          </div>
        </div>
      </div>
      <div>
        <Typography
          className="flex flex-row items-center gap-x-1 text-black text-opacity-90 dark:text-white dark:text-opacity-90"
          data-testid="player-name"
          data-playername={name}
          data-socketid={socketId}
        >
          <span>{playerName}</span>
          <span className="text-black text-opacity-40 dark:text-white dark:text-opacity-40">
            {`#${randomId ? randomId : "0000"}`}
          </span>
        </Typography>
        {editable && (
          <IconButton className="invisible group-hover:visible">
            <PencilIcon size="x-small" />
          </IconButton>
        )}
      </div>
    </div>
  );
}
