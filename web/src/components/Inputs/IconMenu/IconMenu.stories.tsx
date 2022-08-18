import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import IconMenu, { IconMenuProps } from ".";
import { Theme } from "@np-bingo/types";
import features from "../../../config/features";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { SoundContext } from "../../../providers/SoundProvider";
const { defaultVolume } = features;

export default {
  title: "Inputs/Icon Menu",
  component: IconMenu,
  decorators: [
    (Story) => {
      const [theme, setTheme] = useState<Theme>("light");
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      };
      const [sounds, setSounds] = useState(true);
      const [volume, setVolume] = useState(defaultVolume);

      const toggleSounds = () => {
        setSounds((prevSounds) => !prevSounds);
      };
      return (
        <ThemeContext.Provider
          value={{
            theme: theme,
            toggleTheme: toggleTheme,
          }}
        >
          <SoundContext.Provider
            value={{
              volume,
              sounds,
              setVolume,
              toggleSounds,
            }}
          >
            <div className={theme}>
              <Story />
            </div>
          </SoundContext.Provider>
        </ThemeContext.Provider>
      );
    },
  ],
} as Meta;

const Template: Story<IconMenuProps> = (args) => <IconMenu {...args} />;

export const Up = Template.bind({});
Up.args = {
  direction: "up",
  open: true,
};

export const Down = Template.bind({});
Down.args = {
  direction: "down",
  open: true,
};
export const Left = Template.bind({});
Left.args = {
  direction: "left",
  open: true,
};
export const Right = Template.bind({});
Right.args = {
  direction: "right",
  open: true,
};
