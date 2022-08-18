import { Fragment, useContext } from "react";
import { Card, Gamemode, Serial } from "@np-bingo/types";
import { BallContext, GameContext, RoomContext } from "../../../context";
import Ball from "../../../components/Display/Ball";
import { Board } from "../components/Board";
import Button from "../../../components/Inputs/Button";
import Widgets from "../../../components/Widgets";
import KickedModal from "../components/KickedModal";
import Confetti from "../components/Confetti";
import { usePlay, usePlayButton, usePlayDisplay } from "../hooks";
import PlayStatus from "../components/PlayStatus";
import PlayerName from "../../../components/Display/PlayerName";
import IconMenu from "../../../components/Inputs/IconMenu";
import Back from "../../../components/Navigation/Back";
import { FeaturesContext } from "../../../providers/FeaturesProvider";
import { UserContext } from "../../../providers/UserProvider";

export interface PlayProps {
  winOverride?: boolean;
  staticCard?: Card;
  staticSerial?: Serial;
  gamemodeOverride?: Gamemode;
}

export default function Play({
  winOverride = false,
  staticCard,
  staticSerial,
  gamemodeOverride,
}: PlayProps) {
  const {
    user: { name },
    socket,
    isSocketLoading,
  } = useContext(UserContext);
  const { allowNewCard } = useContext(FeaturesContext);
  const { room } = useContext(RoomContext);
  const { gamestate, gamemode } = useContext(GameContext);
  const { ball } = useContext(BallContext);
  const {
    card,
    serial,
    crossmarks,
    kicked: { status, reason },
    isWinner,
    handleNewCard,
  } = usePlay();
  const {
    progress,
    inProgress,
    handlePrimaryButton,
    handleSendCard,
    handleLeaveRoom,
    disableSendCard,
  } = usePlayButton(card);
  const { primaryButtonText, disablePrimaryButton, disableBallDisplay } =
    usePlayDisplay(gamemodeOverride || gamemode, gamestate);
  return (
    <Fragment>
      <header className="justify-between">
        <Back onClick={handleLeaveRoom} />
        {allowNewCard && (
          <Button
            disabled={gamestate !== "ready" && true}
            onClick={handleNewCard}
          >
            New Card
          </Button>
        )}
        <div className="flex gap-1">
          <div className="w-[6.75rem] text-center">
            <Button
              variant="primary"
              disabled={disablePrimaryButton()}
              onClick={handlePrimaryButton}
            >
              {primaryButtonText()}
            </Button>
          </div>
          <Button
            variant="success"
            disabled={disableSendCard()}
            onClick={handleSendCard}
          >
            Bingo
          </Button>
        </div>
        <div className="w-10" />
      </header>
      <main className="flex-auto">
        <PlayStatus
          gamestate={gamestate}
          gamemode={gamemodeOverride || gamemode}
        />
        <Ball
          number={ball.number}
          column={ball.column}
          remainder={ball.remainder}
          inProgress={inProgress}
          progress={progress}
          disabled={disableBallDisplay()}
        />
        <Board
          card={staticCard || [...card]}
          serial={staticSerial || serial}
          winner={isWinner}
          crossmarks={crossmarks}
        />
      </main>
      <footer>
        {gamemode === "solo" ? (
          <IconMenu direction="up" />
        ) : (
          <Widgets room={room} />
        )}
        <PlayerName
          status={socket.connected}
          socketId={socket.id}
          name={name}
          isLoading={isSocketLoading}
        />
      </footer>
      {gamemode !== "solo" && <KickedModal open={status} reason={reason} />}
      {(winOverride || isWinner) && (
        <Confetti isActive={winOverride || isWinner} />
      )}
    </Fragment>
  );
}
