import { useState } from "react";
import { Story, Meta } from "@storybook/react";
import VolumeToggle, { VolumeToggleProps } from ".";
import features from "../../../../../config/features";
import { SoundContext } from "../../../../../providers/SoundProvider";
const { defaultVolume } = features;

export default {
  title: "Inputs/Icon Menu/Volume Toggle",
  component: VolumeToggle,
  decorators: [
    (Story) => {
      const [sounds, setSounds] = useState(true);
      const toggleSounds = () => {
        setSounds((prevSounds) => !prevSounds);
      };
      return (
        <SoundContext.Provider
          value={{
            volume: defaultVolume,
            sounds: sounds,
            toggleSounds: toggleSounds,
            setVolume: () => {},
          }}
        >
          <Story />
        </SoundContext.Provider>
      );
    },
  ],
} as Meta;

const Template: Story<VolumeToggleProps> = (args) => <VolumeToggle {...args} />;

export const Base = Template.bind({});
