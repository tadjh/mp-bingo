import React from "react";
import features from "../config/features";

export const FeaturesContext = React.createContext(features);

export function FeaturesProvider({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <FeaturesContext.Provider value={features}>
      {children}
    </FeaturesContext.Provider>
  );
}
