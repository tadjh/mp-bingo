import { useContext, useEffect, useState } from "react";
import { ApiError, CreateRoom, Host, Player, Room } from "@np-bingo/types";
import { GameContext } from "../../../context";
import { logger } from "../../../utils";
import { CREATE_ROOM, INIT } from "../../../config/constants";
import { useFetch } from "../../../hooks/useFetch";
import { UserContext } from "../../../providers/UserProvider";

export function useHome() {
  const { user, socket, isSocketLoading } = useContext(UserContext);
  const { gamestate, dispatch } = useContext(GameContext);
  const [isRedirect, setIsRedirect] = useState(false);
  const [didInit, setDidInit] = useState(false);
  const { result, isLoading, isError, setBody } = useFetch<
    Player,
    CreateRoom,
    ApiError
  >("POST", "/api/game");

  /**
   * Reset gamestate on visit to home
   */
  useEffect(() => {
    if (didInit) return;
    if (gamestate === "init") return setDidInit(true);
    dispatch({ type: INIT });
  }, [gamestate, didInit, dispatch]);

  /**
   * Create a new game room
   * Trigger Fetch only if socket is loaded
   */
  const createRoom = () => {
    if (user.socketId === null) return; //  || !creatingRoom
    setBody(user);
    // setCreatingRoom(true);
  };

  /**
   * After Successful Fetch
   */
  useEffect(() => {
    if (result === null) return;

    /**
     * Host: Emit create room
     * @param room
     */
    const emitCreateRoom = (room: Room, user: Host) => {
      logger(`Room ${room}: ${user.name} created a new room`);
      socket.emit("host:event", "create-room", room, user.name);
    };

    dispatch({
      type: CREATE_ROOM,
      payload: {
        id: result.data.id,
        room: result.data.room,
        host: result.data.host,
      },
    });

    emitCreateRoom(result.data.room, result.data.host);

    setIsRedirect(true);
  }, [result, socket, dispatch]);

  return { isLoading, isError, isRedirect, isSocketLoading, createRoom };
}
