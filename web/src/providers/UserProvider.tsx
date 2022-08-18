import { Player } from "@np-bingo/types";
import React from "react";
import { Socket } from "socket.io-client";
import { useSocket } from "../hooks/useSocket";
import { useUser } from "../hooks/useUser";
import { UserActions } from "../reducers/user.reducer";

export interface UserContextProps {
  user: Player;
  socket: Socket<any, any>;
  isSocketLoading: boolean;
  userDispatch: React.Dispatch<UserActions>;
  connect: () => void;
}

export const initialPlayer: Player = {
  uid: -1,
  name: "Player",
  socketId: null,
  ready: false,
  kicked: false,
  leave: false,
};

export const initialUserContext: UserContextProps = {
  user: { ...initialPlayer },
  socket: {} as Socket,
  isSocketLoading: false,
  userDispatch: () => {},
  connect: () => {},
};

export const UserContext = React.createContext({ ...initialUserContext });

export function UserProvider({ children }: React.HTMLAttributes<HTMLElement>) {
  const [{ user, isSocketLoading }, userDispatch] = useUser();
  const { socket, connect } = useSocket(isSocketLoading, userDispatch);

  return (
    <UserContext.Provider
      value={{
        user,
        socket,
        isSocketLoading,
        userDispatch,
        connect,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
