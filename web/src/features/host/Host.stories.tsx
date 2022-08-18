import { useState } from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
import { Story, Meta } from "@storybook/react";
import Host, { HostProps } from "./routes/Host";
import {
  BallContext,
  GameContext,
  initialBallContext,
  initialGameContext,
  initialRoomContext,
  RoomContext,
} from "../../context";
import Container from "../../components/Layout/Container";
import Background from "../../components/Surfaces/Background";
import { Theme } from "@np-bingo/types";
import { ThemeContext } from "../../providers/ThemeProvider";
import {
  UserContext,
  initialUserContext,
  initialPlayer,
} from "../../providers/UserProvider";

export default {
  title: "Pages/Host",
  component: Host,
  argTypes: {
    joinRoom: { action: "submit" },
  },
  decorators: [
    (Story, { args }) => {
      const [theme, setTheme] = useState<Theme>("dark");
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      };
      return (
        // <Router>
        <ThemeContext.Provider
          value={{
            theme: theme,
            toggleTheme: toggleTheme,
          }}
        >
          <UserContext.Provider
            value={{
              ...initialUserContext,
              user: initialPlayer,
              socket: { on: () => {}, emit: () => {} } as any,
            }}
          >
            <RoomContext.Provider
              value={{
                ...initialRoomContext,
                room: "A1B2",
                players: args.players || [],
              }}
            >
              <GameContext.Provider
                value={{ ...initialGameContext, gamestate: args.gamestate }}
              >
                <BallContext.Provider
                  value={{
                    ...initialBallContext,
                    ball: {
                      key: 1,
                      number: 24,
                      column: "i",
                      remainder: 74,
                    },
                  }}
                >
                  <Container>
                    <Background />
                    <Story {...args} />
                  </Container>
                </BallContext.Provider>
              </GameContext.Provider>
            </RoomContext.Provider>
          </UserContext.Provider>
        </ThemeContext.Provider>
        // </Router>
      );
    },
  ],
  parameters: {
    layout: "none",
  },
} as Meta;

const Template: Story<HostProps> = (args) => <Host {...args} />;

export const Base = Template.bind({});
Base.args = {
  draws: [[], [24], [], [], []],
};

export const Waiting = Template.bind({});
Waiting.args = {
  draws: [[], [], [], [], []],
  gamestate: "ready",
};

export const ReadyList = Template.bind({});
ReadyList.args = {
  players: [
    {
      _id: "adaskdjsahkd",
      uid: 2222,
      name: "Jane Doe",
      socketId: "",
      ready: true,
      kicked: false,
      leave: false,
    },
    {
      _id: "adsjfhskjdfh",
      uid: 2223,
      name: "Jane Doa",
      socketId: "",
      ready: false,
      kicked: false,
      leave: false,
    },
    {
      _id: "fasdiuywqqe",
      uid: 2224,
      name: "Jane Do",
      socketId: "",
      ready: false,
      kicked: false,
      leave: false,
    },
    {
      _id: "damnsbfndbvfw",
      uid: 2225,
      name: "Jane Doh",
      socketId: "",
      ready: false,
      kicked: false,
      leave: false,
    },
  ],
  gamestate: "ready",
};

export const GameOver = Template.bind({});
GameOver.args = {
  gamestate: "end",
};
