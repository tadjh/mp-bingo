import { Dispatch, useMemo, useReducer } from "react";
import { Player } from "@np-bingo/types";
import { NODE_ENV } from "../config";
import { UserActions, UserState, userReducer } from "../reducers/user.reducer";
import { fourRandomDigits } from "../utils";
import { ReducerLogger } from "./useReducerLogger";
import { initialPlayer } from "../providers/UserProvider";

export function useUser(
  initialUser: Player = initialPlayer
): [UserState, Dispatch<UserActions>] {
  const memoNumber = useMemo(() => fourRandomDigits(), []);

  const formattedName = initialUser.name + "#" + memoNumber;

  const userInititalState: UserState = {
    user: {
      ...initialUser,
      name: formattedName,
    },
    isSocketLoading: false,
    isSocketError: false,
  };
  const [userState, userDispatch] = useReducer<
    (state: UserState, action: UserActions) => UserState
  >(
    NODE_ENV === "development" ? ReducerLogger(userReducer) : userReducer,
    userInititalState
  );
  return [userState, userDispatch];
}
