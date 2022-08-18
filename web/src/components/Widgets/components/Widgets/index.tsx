import { useContext } from "react";
import Share from "../Share";
import { Room } from "@np-bingo/types";
import Code from "../Code";
import IconMenu from "../../../Inputs/IconMenu";
import { FeaturesContext } from "../../../../providers/FeaturesProvider";

export interface WidgetProps {
  room?: Room;
}

export default function Widgets({ room = "" }: WidgetProps): JSX.Element {
  const { allowShare } = useContext(FeaturesContext);
  return (
    <div className="flex gap-2">
      <div className="flex w-14 items-center justify-center">
        {allowShare && <Share room={room} />}
      </div>
      <div className="flex items-center justify-center">
        <Code room={room} />
      </div>
      <div className="flex w-14 items-center justify-center">
        <IconMenu direction="up" />
      </div>
    </div>
  );
}
