import { config } from "dotenv";
import React from "react";
import { useToggle } from "../hooks/useToggle";
import { FeaturesContext } from "./FeaturesProvider";

export interface SoundContextProps {
  volume: number;
  sounds: boolean;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  toggleSounds: () => void;
}

export const initialSoundContext: SoundContextProps = {
  volume: 0.0,
  sounds: false,
  setVolume: () => {},
  toggleSounds: () => {},
};

export const SoundContext = React.createContext(initialSoundContext);

export function SoundProvider({ children }: React.HTMLAttributes<HTMLElement>) {
  const { defaultVolume, sounds: defaultSounds } =
    React.useContext(FeaturesContext);
  const [volume, setVolume] = React.useState(defaultVolume);
  const [sounds, toggleSounds] = useToggle(defaultSounds);

  return (
    <SoundContext.Provider value={{ volume, sounds, setVolume, toggleSounds }}>
      {children}
    </SoundContext.Provider>
  );
}
