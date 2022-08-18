import React from "react";
import { Story, Meta } from "@storybook/react";
import ThemeToggle, { ThemeToggleProps } from ".";
import { Theme } from "@np-bingo/types";
import { ThemeContext } from "../../../../../providers/ThemeProvider";

export default {
  title: "Inputs/Icon Menu/Theme Toggle",
  component: ThemeToggle,
  decorators: [
    (Story) => {
      const [theme, setTheme] = React.useState<Theme>("light");
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      };
      return (
        <ThemeContext.Provider
          value={{
            theme: theme,
            toggleTheme: toggleTheme,
          }}
        >
          <div className={theme}>
            <Story />
          </div>
        </ThemeContext.Provider>
      );
    },
  ],
} as Meta;

const Template: Story<ThemeToggleProps> = (args) => <ThemeToggle {...args} />;

export const Base = Template.bind({});
