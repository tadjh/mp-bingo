import React from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { fetchNui } from "../utils/fetchNui";
import { isEnvBrowser } from "../utils/misc";

const VisibilityCtx = React.createContext<VisibilityProviderValue | null>(null);

interface VisibilityProviderValue {
  setVisible: (visible: boolean) => void;
  visible: boolean;
}

// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = React.useState(false);

  useNuiEvent<boolean>("setVisible", setVisible);

  // Handle pressing escape/backspace
  React.useEffect(() => {
    // Only attach listener when we are visible
    if (!visible) return;

    const keyHandler = (event: KeyboardEvent) => {
      if (["Backspace", "Escape"].includes(event.code)) {
        if (!isEnvBrowser()) fetchNui("hideFrame");
        else setVisible(!visible);
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  }, [visible]);

  return (
    <VisibilityCtx.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      <div
        style={{ visibility: visible ? "visible" : "hidden", height: "100%" }}
      >
        {children}
      </div>
    </VisibilityCtx.Provider>
  );
};

export const useVisibility = () =>
  React.useContext<VisibilityProviderValue>(
    VisibilityCtx as React.Context<VisibilityProviderValue>
  );
