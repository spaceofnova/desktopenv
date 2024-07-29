import React from "react";

export const PrefrencesContext = React.createContext({
  preferences: {
    iconPack: "",
    wallpaper: "",
    theme: "",
    transparencyEffects: false,
  },
  setPreferences: (_preferences: any) => {},
  getValue: (_preference: string) => {},
  updatePrefrence: (_preference: string, _value: any) => {},
});
