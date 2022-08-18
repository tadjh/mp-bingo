// import Host from './features/host';
import { Solo } from "./features/play";
// import Home from './features/home';
// import Join from './features/join';
// import Create from './features/create';
import { useAppState } from "./hooks/useAppState";
import { useApp } from "./hooks/useApp";
import "./App.css";
import { FeaturesProvider } from "./providers/FeaturesProvider";
import { SoundProvider } from "./providers/SoundProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import { UserProvider } from "./providers/UserProvider";
import { BallContext, GameContext, RoomContext } from "./context";
import { Wrapper } from "./components/Layout/Wrapper";

export default function App() {
  const {
    state: {
      gamestate,
      gameId,
      ball,
      draws,
      pool,
      playerCards,
      winners,
      room,
      players,
      host,
      rules: { mode: gamemode, split },
    },
    dispatch,
  } = useAppState();
  const { newBall, checkCard } = useApp(pool, draws);

  return (
    <FeaturesProvider>
      <ThemeProvider>
        <SoundProvider>
          <UserProvider>
            <RoomContext.Provider
              value={{
                room,
                gameId,
                host,
                winners,
                players,
              }}
            >
              <GameContext.Provider
                value={{
                  gamestate,
                  gamemode,
                  playerCards,
                  split,
                  dispatch,
                  checkCard,
                }}
              >
                <BallContext.Provider value={{ ball, newBall }}>
                  <Wrapper>
                    {/* <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/create">
                    <Create />
                  </Route>
                  <Route path="/join">
                    <Join />
                  </Route>
                  <Route path="/host">
                    <Host draws={draws} />
                  </Route>
                  <Route path="/play/solo"> */}
                    <Solo />
                    {/* </Route>
                  <Route exact path="/play">
                    <Play />
                  </Route>
                </Switch> */}
                  </Wrapper>
                </BallContext.Provider>
              </GameContext.Provider>
            </RoomContext.Provider>
          </UserProvider>
        </SoundProvider>
      </ThemeProvider>
    </FeaturesProvider>
  );
}
