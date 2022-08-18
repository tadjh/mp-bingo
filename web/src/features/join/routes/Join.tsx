import { Fragment, useContext } from "react";
import { useToggle } from "../../../hooks/useToggle";
import RoomList from "../components/RoomList";
import CodeModal from "../components/CodeModal";
import Button from "../../../components/Inputs/Button";
// import { Link as RouterLink } from 'react-router-dom';
import { useJoin } from "../hooks";
import PlayerName from "../../../components/Display/PlayerName";
import IconMenu from "../../../components/Inputs/IconMenu";
import Back from "../../../components/Navigation/Back";
import { FeaturesContext } from "../../../providers/FeaturesProvider";
import { UserContext } from "../../../providers/UserProvider";

interface JoinStoriesContext {
  allowPublic?: boolean;
}

export interface JoinProps extends JoinStoriesContext {
  publicRooms?: any[];
}

export default function Join({ publicRooms = [] }: JoinProps) {
  const {
    user: { name },
    socket,
    isSocketLoading,
  } = useContext(UserContext);
  const { allowPublic, allowSolo } = useContext(FeaturesContext);
  const { errors, joinRoom, handleSolo } = useJoin();
  const [isOpen, , open, close] = useToggle();
  return (
    <Fragment>
      <header className="flex-auto justify-between">
        <Back />
        <h1 className="self-center text-center text-3xl text-black text-opacity-60 dark:text-white dark:text-opacity-60">
          Join
        </h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-auto justify-evenly">
        {allowPublic && <RoomList rooms={publicRooms} onClick={joinRoom} />}
        <div className="flex flex-col items-center gap-3">
          <Button variant="primary" className="join-button" onClick={open}>
            Private Room
          </Button>
          <CodeModal
            open={isOpen}
            onClose={close}
            onSumbit={joinRoom}
            errors={errors || undefined}
          />
          {allowSolo && (
            <Button
              // component={RouterLink}
              className="solo-button"
              to="/play/solo"
              onClick={handleSolo}
            >
              Solo
            </Button>
          )}
        </div>
      </main>
      <footer className="flex-auto">
        <div>{"\xa0"}</div>
        <IconMenu direction="up" />
        <PlayerName
          status={socket.connected}
          socketId={socket.id}
          name={name}
          isLoading={isSocketLoading}
        />
      </footer>
    </Fragment>
  );
}
