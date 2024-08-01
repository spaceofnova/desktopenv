import React from "react";
import { PrefrencesContext } from "./PrefrencesContext";

export const usePreferences = () => {
  const { preferences, setPreferences } = React.useContext(PrefrencesContext);
  return { preferences, setPreferences };
};
