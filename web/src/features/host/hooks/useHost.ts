import { useContext, useEffect } from "react";
import { Player } from "@np-bingo/types";
import { BallContext, GameContext, RoomContext } from "../../../context";
import { useProgress } from "../../../hooks/useProgress";
import { useHostEmitters } from ".";
import { useHostListeners } from "./useHostListeners";
import { GAME_OVER, NEW_BALL, PLAYER_KICK } from "../../../config/constants";
import { Socket } from "socket.io-client";
import { FeaturesContext } from "../../../providers/FeaturesProvider";

export function useHost(socket: Socket) {
  const { ballDelay } = useContext(FeaturesContext);
  const { players } = useContext(RoomContext);
  const { dispatch } = useContext(GameContext);
  const { ball, newBall } = useContext(BallContext);
  const { emitKickPlayer, emitSendBall } = useHostEmitters();
  const { subscribeToPlayerEvents, unsubscribeFromPlayerEvents } =
    useHostListeners(socket, dispatch);
  /**
   * Kick player from room
   * @param player
   */
  const handleRemovePlayer = (player: Player) => {
    dispatch({ type: PLAYER_KICK, payload: player });
    emitKickPlayer(player);
  };

  /**
   * Handle Gameover
   */
  const gameOver = () => {
    if (ball.remainder === 0) return dispatch({ type: GAME_OVER });
  };

  const { progress, inProgress, enableProgress } = useProgress(
    ballDelay,
    gameOver
  );

  /**
   * Trigger gamestate start, queue new ball and show ball progress animation
   * @param gamestate
   * @param room
   */
  const handleBall = () => {
    const currentBall = newBall();
    emitSendBall(currentBall.ball);
    dispatch({
      type: NEW_BALL,
      payload: currentBall,
    });
    enableProgress();
  };

  /**
   * Filters out kicked and leaver players and returns player count.
   * @returns number
   */
  const playerCount = players.filter(
    (item) => !item.kicked && !item.leave
  ).length;

  /**
   * Socket.io subscription events
   */
  useEffect(() => {
    subscribeToPlayerEvents();

    return () => unsubscribeFromPlayerEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    progress,
    inProgress,
    playerCount,
    handleRemovePlayer,
    handleBall,
  };
}
