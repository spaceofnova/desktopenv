import React from "react";
import { PrefrencesContext } from "./PrefrencesContext";

const PrefrencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [preferences, setPreferences] = React.useState(
    localStorage.getItem("preferences")
      ? JSON.parse(localStorage.getItem("preferences")!)
      : {
          iconPack: "feather",
          wallpaper: "blocks.jpg",
          theme: "light",
          transparencyEffects: true,
        }
  );

  const updatePrefrence = (prefrence: string, value: any) => {
    const newArray = {
      ...preferences,
      [prefrence]: value,
    };
    setPreferences(newArray);
    localStorage.setItem("preferences", JSON.stringify(newArray));
  };

  const getValue = (prefrence: string) => {
    return preferences[prefrence];
  };

  return (
    <PrefrencesContext.Provider
      value={{
        preferences,
        setPreferences,
        getValue,
        updatePrefrence,
      }}
    >
      {children}
    </PrefrencesContext.Provider>
  );
};

export default PrefrencesProvider;
