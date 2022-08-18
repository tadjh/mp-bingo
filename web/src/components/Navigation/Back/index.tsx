// import { Link as RouterLink, LinkProps } from 'react-router-dom';
import ChevronLeftIcon from "../../../assets/icons/ChevronLeft";
import { useClickSoft } from "../../../hooks/useClickSoft";
import IconButton from "../../Inputs/IconButton";

export interface BackProps extends React.HTMLAttributes<HTMLDivElement> {}
// TODO Back stories
export default function Back({ ...props }: BackProps): JSX.Element {
  const clickSoftSfx = useClickSoft();
  return (
    <div onMouseDown={clickSoftSfx} {...props}>
      <IconButton description="Back">
        <ChevronLeftIcon />
      </IconButton>
    </div>
  );
}
